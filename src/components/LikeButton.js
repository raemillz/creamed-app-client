import React from 'react';


class LikeButton extends React.Component {

  render() {
    return (
      <div>
        <button onClick={this.props.likeSweet} className="likeB">Likes {this.props.recipe.likes}</button>
      </div>
    )
  }
}


export default (LikeButton);
