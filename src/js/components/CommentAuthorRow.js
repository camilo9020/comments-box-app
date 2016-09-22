import React, {Component} from 'react'
import Comment from './Comment'

class CommentAuthorRow extends Component {
  render() {
    let comments = [];
    this.props.data.forEach((comment) => {
      if (comment.author === this.props.author) {
        comments.push(
          <Comment author={comment.author} key={comment.id} text={comment.text}>
            {comment.text}
          </Comment>
        );
      }
    })
    return (
     <div className="CommentAuthorRow">
      <h2>{this.props.author}</h2>
      {comments}
     </div>
    );
  }
}

export default CommentAuthorRow;