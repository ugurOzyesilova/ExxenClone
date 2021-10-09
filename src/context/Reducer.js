// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case "ADD__TO__WATCHLIST":
      return {
        ...state,
        watchList: [action.payload, ...state.watchList],
      };
    case "REMOVE__FROM__WATCHLIST":
      return {
        ...state,
        watchList: state.watchList.filter((movie) => movie.id !== action.payload),
      };

    default:
      return state;
  }
};
