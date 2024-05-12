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
        <Image src={Logo} width={50} height={40} alt="logo" />
        Jobpilot{" "}
      </h2>
      
      <div className={style.header__searchbar__filter}>
            <select name="country">
                <option value="england"><Image src={USFlag} width={20} height={20} alt="us" /> England</option>
                <option value="england"><Image src={USFlag} width={20} height={20} alt="us" /> Uzbekistan</option>
                <option value="england"><Image src={USFlag} width={20} height={20} alt="us" /> USA</option>
            </select>
          
        <input type="search" placeholder="Job title, keyword, comnpany" />
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
