import React, {Component} from 'react';
import CommentAuthorRow from './CommentAuthorRow';

class CommentList extends Component {
  render() {
    let groups = [];
    let GroupAuthor = [];
    this.props.comments.forEach((comment) => {
      if (GroupAuthor.indexOf(comment.author) === -1 ) {
        groups.push(<CommentAuthorRow author={comment.author} key={comment.author} data={this.props.comments} />);
      }
      GroupAuthor.push(comment.author);
    })
    return (
      <div className="CommentList">
        {groups}
      </div>
    )
  }
}

export default CommentList;