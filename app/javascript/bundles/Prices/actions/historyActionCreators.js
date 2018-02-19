import * as historyConstants from '../constants/historyConstants';

export const setHistoryStartAttr = (attr, value) => ({
  type: historyConstants.SET_HISTORY_START_ATTR,
  attr,
  value,
});

export const setHistoryEndAttr = (attr, value) => ({
  type: historyConstants.SET_HISTORY_END_ATTR,
  attr,
  value,
});

export const beginHistoryLookup = () => ({
  type: historyConstants.BEGIN_HISTORY_LOOKUP,
});

export const setHistoryData = (data) => ({
  type: historyConstants.SET_HISTORY_DATA,
  data,
});
