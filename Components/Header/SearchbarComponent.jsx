import React from "react";
import style from "./header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Logo from "@/public/images/logo.svg";
import USFlag from "@/public/images/usaflag.svg";
import Image from "next/image";
import {
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
} from "@chakra-ui/react";

export default function Searchbar() {
  return (
    <div className={`container ${style.header__searchbar}`}>
      <h2>
        <Image src={Logo} width={50} height={40} alt="logo" />
        Jobpilot{" "}
      </h2>

      <div className={style.header__searchbar__filter}>
        <Select
          icon={
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 6L8 11L3 6"
                stroke="#9199A3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
          variant="unstyled"
        >
          <option value="eng">England</option>
          <option value="uzb">Uzbekistan</option>
          <option value="usa">USA</option>
          <option value="ind">India</option>
        </Select>
        <InputGroup style={{ alignItems: "center", paddingLeft: "20px", borderLeft: '1px solid #E4E5E8' }}>
          <InputLeftElement pointerEvents="none" style={{ top: "auto", left: 15 }}>
            <FontAwesomeIcon icon={faSearch} color="#0066FF" />
          </InputLeftElement>
          <Input type="tel" placeholder="Job title, keyword, company" />
        </InputGroup>
        {/* <input type="search" placeholder="Job title, keyword, comnpany" /> */}
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
