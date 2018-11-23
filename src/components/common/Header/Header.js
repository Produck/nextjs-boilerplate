import React from "react";
import Link from "next/link";
import style from "./Header.scss";

class Header extends React.Component {
  render() {
    const { onShowModal, onHideModal } = this.props;

    return (
      <div>
        <Link href="/">
          <a className={style.link}>Home</a>
        </Link>
        <Link href="/about">
          <a className={style.link}>About</a>
        </Link>
        <Link href="/list">
          <a className={style.link}>List</a>
        </Link>
        <button onClick={onShowModal}>Show</button>
      </div>
    );
  }
}

export default Header;
