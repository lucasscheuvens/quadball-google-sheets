export function get_game_time_as_string( game ) {
  const game_time_ms = game.gametime.running ? game.gametime.last_stop + Date.now() - game.gametime.last_start : game.gametime.last_stop;
  const total_seconds = Math.floor( game_time_ms / 1000);
  const minutes = Math.floor( total_seconds / 60);
  const seconds = total_seconds % 60;
  return `${ ( minutes < 10 ? '0' : '' ) + minutes }:${ ( seconds < 10 ? '0' : '' ) + seconds }`;
}