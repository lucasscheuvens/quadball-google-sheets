import { google } from 'googleapis';
import axios from 'axios';
import fs from 'fs';
import ENV from './.env.js';
import path from 'path';

// Your API key
const SHEET_NAME = ENV.spreadsheet.sheet_name;
const RAW_DATA_START_ROW = ENV.spreadsheet.raw_data_start_row;
const GAME_ID_COLUMN = ENV.spreadsheet.columns.read.game_ids;
const WRITE_COLUMNS = ENV.spreadsheet.columns.write.sort( ( a, b ) => a.column.localeCompare( b.column ) );

const spreadsheetId = ENV.spreadsheet.id;
const SERVICE_ACCOUNT_AUTH_FILENAME = ENV.google_service_account_auth_filename;
const SHEETS_API = {};
const TOURNAMENT_ID = ENV.tournament_id;
const sleep = ms => new Promise( r => setTimeout(r, ms) );

async function set_up_sheets_api() {

  const auth = new google.auth.GoogleAuth({
    keyFile: SERVICE_ACCOUNT_AUTH_FILENAME,
    scopes: 'https://www.googleapis.com/auth/spreadsheets',
  });

  // Create client instance for auth
  const client = await auth.getClient();

  // Instance of Google Sheets API
  const googleSheets = google.sheets({ version: "v4", auth: client });

  SHEETS_API.auth = auth;
  SHEETS_API.instance = googleSheets;

}

async function fetch_current_game_data( tournament_id ) {
  const api_url = `https://quadball.live/api/open/tournament/game_tournament/all/${ tournament_id }`;
  const response = await axios.get( api_url );
  return response.data.data;
}

async function get_game_ids_in_sheet() {
  
  const getRowsGameId = await SHEETS_API.instance.spreadsheets.values.get({
    auth: SHEETS_API.auth,
    spreadsheetId,
    range: `${ SHEET_NAME }!${ GAME_ID_COLUMN }${ RAW_DATA_START_ROW }:${ GAME_ID_COLUMN }`,
  });

  const public_game_ids = getRowsGameId.data.values.map( v => v[0] );

  return public_game_ids;

}

async function update_sheet_data( range, values ) {
  await SHEETS_API.instance.spreadsheets.values.update({
    spreadsheetId,
    range,
    valueInputOption: 'RAW',
    resource: { values }
  });
}

(async () => {

  // tbd: error handling if auth file does not exist
  await set_up_sheets_api();

  while( true ) {
    
    // Read game_ids from spreadsheet
    const game_ids = await get_game_ids_in_sheet();
    const current_game_information = await fetch_current_game_data( TOURNAMENT_ID );

    // error check if all game_ids are part of this tournament
    for( const game_id of game_ids ) {
      if( !current_game_information.map( g => g.id ).includes( game_id ) ) {
        console.error( `Game ${ game_id } is not part of the tournament with id ${ TOURNAMENT_ID }` );
        return;
      }
    }

    let write_data = [];

    for( const game_id of game_ids ) {
      
      const game = current_game_information.find( g => g.id === game_id );
      if( game === undefined ) {
        throw Error( `Cannot find game with id ${ game_id } in game information fetched from quadball.live server` );
      }

      console.log(JSON.stringify(game, null, 2));

      let row_write_data = WRITE_COLUMNS.map( ( { display_fn } ) => display_fn( game ) );
      write_data.push( row_write_data );

    }

    const write_range = `${ SHEET_NAME }!${ WRITE_COLUMNS[0].column }${ RAW_DATA_START_ROW }:${ WRITE_COLUMNS[ WRITE_COLUMNS.length - 1 ].column }${ RAW_DATA_START_ROW + game_ids.length - 1 }`;

    await update_sheet_data( write_range, write_data );

    console.log( ( new Date() ).toISOString(), 'write to Google Sheets successful. Waiting for 3 seconds ...' );
    await sleep( 3000 );
    
  }

})();