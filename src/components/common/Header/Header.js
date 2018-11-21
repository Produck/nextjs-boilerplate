import React from "react";
import Link from "next/link";
import style from "./Header.scss";

export default () => (
  <div>
    <Link href="/">
      <a className={style.link}>Home</a>
    </Link>
    <Link href="/about">
      <a className={style.link}>About</a>
    </Link>
  </div>
);
