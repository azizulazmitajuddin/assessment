const reducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_NEWS":
      return { ...state, loading: true };
    case "GET_LIST_NEWS":
      return { ...state, loading: true };
    case "NEWS_RECEIVED":
      return { ...state, news: action.data, loading: false };
    case "LIST_NEWS_RECEIVED":
      return { ...state, listNews: action.data1.list, loading: false };
    default:
      return state;
  }
};

export default reducer;
