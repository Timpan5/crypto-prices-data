export function selectHistoryStart(state) {
  return state.get('historyStart') || null;
}

export function selectHistoryEnd(state) {
  return state.get('historyEnd') || null;
}
