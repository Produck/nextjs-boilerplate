import React, { Component } from "react";

import style from "./List.scss";

const Post = ({ show }) => (
  <div className={style.card}>
    <div className={style.image}>
      <img src={show.image.original} />
    </div>
    <div className={style.content}>
      <h3>{show.name}</h3>
      <p>{show.summary.replace(/<[/]?[p|b]>/g, "")}</p>
    </div>
  </div>
);

class List extends Component {
  render() {
    const { posts } = this.props;

    return (
      <div className={style.container}>
        {posts.map((post, index) => (
          <Post key={index} show={post.show} />
        ))}
      </div>
    );
  }
}

export default List;
