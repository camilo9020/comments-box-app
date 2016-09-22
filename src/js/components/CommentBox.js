import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchComments } from "../actions/commentsActions"
import CommentList from "./CommentList"
// import CommentForm from "./CommentForm"


@connect((store) => {
  return {
    comments: store.comments.comments,
  };
})

class CommentBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    }
    this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
    this.loadCommentsFromServer();
  }

  loadCommentsFromServer() {
    this.props.dispatch(fetchComments())
  }


  // handleCommentSubmit(comment) {
  //   let comments = this.state.comments;
  //   let newComments = comments.concat([comment]);
  //   this.setState({comments: newComments});
  //   fetch("api/comments", {
  //     method: "POST",
  //     headers: {
  //       "Accept": "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       author: comment.author,
  //       text: comment.text,
  //     })
  //   }).catch((error) => {
  //     console.error(error);
  //   });
  // }

  render() {
    return (
      <div className="CommentBox">
        <h1>Comments</h1>
        <CommentList comments={this.props.comments} />
      </div>
    );
  }
}

export default CommentBox;