import React from "react";
import style from "./header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Logo from "@/public/images/logo.svg";
import USFlag from "@/public/images/usaflag.svg";
import Image from "next/image";

export default function Searchbar() {
  return (
    <div className={`container ${style.header__searchbar}`}>
      <h2>
        <Image src={Logo} width={100} height={100} alt="logo" />
        Jobpilot{" "}
      </h2>
      <div className={style.header__searchbar__filter}>
        <div className={style.header__searchbar__filter__country}>
          <p>
            <Image src={USFlag} width={20} height={20} alt="us" />
            USA <FontAwesomeIcon icon={faChevronDown} />
          </p>
          <ul>
            <li>England</li>
            <li>Uzbekistan</li>
          </ul>
          <input type="search" placeholder="Job title, keyword, comnpany" />
        </div>
      </div>
      <div className={style.header__searchbar__action}>
        <button className={style.header__searchbar__action__sign}>
          Sign in
        </button>
        <button className={style.header__searchbar__action__post}>
          Post a job
        </button>
      </div>
    </div>
  );
}
