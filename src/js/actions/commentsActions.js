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

export function addComment(comment) {
  return function(dispatch) {
    axios.post("http://comments-box.herokuapp.com/api/comments", {
      author: comment.author,
      text: comment.text
      })
      .then((response) => {
        dispatch({
          type: "ADD_COMMENT",
          payload:  response.data
        })
      })
      .catch((err) => {
        dispath({type: "FETCH_COMMENTS_REJECTED", payload: err})
      })
  }
}
