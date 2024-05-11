import React from "react";
import Header from "./Header";
import Searchbar from "./Searchbar";
import style from "./header.module.scss";

export default function HeaderWrapper() {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <Header />
        <Searchbar />
      </div>
    </div>
  );
}
