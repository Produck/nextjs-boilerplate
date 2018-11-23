import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as baseActions from "store/modules/base";
import Modal from "components/common/Modal";

class Core extends Component {
  handleHideModal = () => {
    const { BaseActions } = this.props;

    BaseActions.hideModal();
  };

  render() {
    const { modal } = this.props;

    return <Modal visible={modal.visible} onHide={this.handleHideModal} />;
  }
}

export default connect(
  state => ({
    modal: state.base.modal
  }),
  dispatch => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(Core);
