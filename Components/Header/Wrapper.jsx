import React from "react";
import HeaderComponent from "./HeaderComponent";
import SearchbarComponent from "./SearchbarComponent";
import style from "./header.module.scss";

export default function HeaderWrapper() {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <HeaderComponent />
        <SearchbarComponent />
      </div>
    </div>
  );
}
