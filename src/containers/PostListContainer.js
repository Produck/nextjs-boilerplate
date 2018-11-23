import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as postActions from "store/modules/post";
import ListComponent from "components/List";

class PostListContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.props.PostActions.getPosts();
  }

  render() {
    const { posts } = this.props;

    return <ListComponent posts={posts} />;
  }
}

export default connect(
  state => ({
    posts: state.post.posts
  }),
  dispatch => ({
    PostActions: bindActionCreators(postActions, dispatch)
  })
)(PostListContainer);
