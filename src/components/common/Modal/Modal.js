import React, { Component } from "react";

import style from "./Modal.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

class Modal extends Component {
  state = {
    animate: false
  };

  startAnimation = () => {
    this.setState({
      animate: true
    });

    setTimeout(() => {
      this.setState({
        animate: false
      });
    }, 250);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.visible != this.props.visible) {
      this.startAnimation();
    }
  }

  render() {
    const { children, visible, onHide } = this.props;
    const { animate } = this.state;

    if (!visible && !animate) return null;

    const animation = animate && (visible ? "enter" : "leave");

    return (
      <div>
        <div className={cx("gray_background", animation)} />
        <div className={style.modal_wrapper}>
          <div className={[style.modal, style[animation]]}>Modal</div>
          <button onClick={onHide}>Close</button>
        </div>
      </div>
    );
  }
}

export default Modal;
