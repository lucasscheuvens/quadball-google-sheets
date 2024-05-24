import { get_game_time_as_string } from './utils.js';

export default {
  spreadsheet: {
    id: '<fill id here>',
    sheet_name: 'Tabellenblatt1',
    raw_data_start_row: 2, // entering a 2 here allows for a header row
    columns: {
      read: {
        game_ids: 'A'
      },
      write: [
        { column: 'B', display_fn: ( g ) => ( new Date( g.timestamp * 1000 ) ).toISOString().split('T')[0] }, // Date in format YYYY-MM-DD
        { column: 'C', display_fn: ( g ) => ( new Date( g.timestamp * 1000 ) ).toISOString().split('T')[1].split('.')[0] }, // Time in format hh:mm:ss
        { column: 'D', display_fn: ( g ) => g.game_over === null ? 'scheduled' : ( g.game_over === false ? 'live' : 'over' ) }, // status: 'scheduled' | 'live' | 'over'
        { column: 'E', display_fn: ( g ) => get_game_time_as_string( g ) }, // name of team a
        { column: 'F', display_fn: ( g ) => g.team.a.name }, // name of team a
        { column: 'G', display_fn: ( g ) => g.team.b.name }, // name of team b
        { column: 'H', display_fn: ( g ) => g.score.a.total + ( g.score.a.snitch_caught ? '*' : '' ) }, // score of team a with * if snitch was caught
        { column: 'I', display_fn: ( g ) => g.score.b.total + ( g.score.b.snitch_caught ? '*' : '' ) }, // score of team b with * if snitch was caught
        { column: 'J', display_fn: ( g ) => g.winner ? g.team[g.winner].name : '' }, // winner team
      ]
    }
  },
  google_service_account_auth_filename: '<specify json filename here, e.g. protean-harbor-424217-b8-38c76cc0d035.json>',
  tournament_id: 165
}