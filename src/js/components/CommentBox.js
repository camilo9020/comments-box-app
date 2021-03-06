import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchComments } from "../actions/commentsActions"
import { addComment } from "../actions/commentsActions"
import CommentList from "./CommentList"
import CommentForm from "./CommentForm"


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


  handleCommentSubmit(comment) {
    let comments = this.props.comments;
    let newComments = comments.concat([comment]);
    this.setState({comments: newComments});
    this.props.dispatch(addComment(comment));
  }

  render() {
    return (
      <div className="CommentBox">
        <h1>Comments</h1>
        <CommentList comments={this.props.comments} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
      </div>
    );
  }
}

export default CommentBox;