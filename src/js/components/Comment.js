import React, {Component} from 'react'

class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <h4>{this.props.text}</h4>
      </div>
    );
  }
}

export default Comment;