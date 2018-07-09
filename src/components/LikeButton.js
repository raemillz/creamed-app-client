import React from 'react';


class LikeButton extends React.Component {

  render() {
    return (
      <div>
        <button onClick={this.props.likeSweet} className="likeB">Yum! {this.props.sweet.likes}</button>
      </div>
    )
  }
}


export default (LikeButton);
