import axios from "axios"

export function fetchComments() {
  return function(dispatch) {
    axios.get("http://comments-box.herokuapp.com/api/comments")
      .then((response) => {
        dispatch({type: "FETCH_COMMENTS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_COMMENTS_REJECTED", payload: err})
      })
  }
}

