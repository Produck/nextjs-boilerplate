import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as baseActions from "store/modules/base";
import Header from "components/common/Header";

class HeaderContainer extends Component {
  handleShowModal = () => {
    const { BaseActions } = this.props;

    BaseActions.showModal();
  };

  render() {
    return <Header onShowModal={this.handleShowModal} />;
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(HeaderContainer);
