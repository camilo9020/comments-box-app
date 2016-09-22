export default function reducer(state={
    comments: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_COMMENTS": {
        return {...state, fetching: true}
      }
      case "FETCH_COMMENTS_REJECTED": {
        return {...state, fetched: false, error: action.payload}
      }
      case "FETCH_COMMENTS_FULFILLED": {
        return {
          ...state,
          fecthing: true,
          fetched: true,
          comments: action.payload,
        }
      }
      case "ADD_COMMENT": {
        return {
          ...state,
          comments: [...state.comments, action.payload],
        }
      }
    }

    return state

}