export const ACTION_TYPES = Object.freeze({
  REDDIT_POST: "REDDIT_POST",
  VISIO_PROGE: "VISIO_PROGE",
  OW_STATS: "OW_STATS",
  DVA_STATS: "DVA_STATS",
  APPLICATION_ERROR: "APPLICATION_ERROR",
  LOADING: "LOADING"
});

export default (
  state = {
    isFetching: true,
    
    owStat: null,
    dvaStat: null,
    
  },
  { type, value, isLoading, error }
) => {
  switch (type) {
    case ACTION_TYPES.OW_STATS:
      return Object.assign({}, state, {
        owStat: value,
        isLoading: false
      });

    case ACTION_TYPES.DVA_STATS:
      return Object.assign({}, state, {
        dvaStat: value,
        isLoading: false
      });

    case ACTION_TYPES.APPLICATION_ERROR:
      return Object.assign({}, state, {
        isLoading: true,
        error: error
      });

    case ACTION_TYPES.LOADING:
      return Object.assign({}, state, {
        isLoading: true,
        error: null
      });

    default:
      return state;
  }
};
