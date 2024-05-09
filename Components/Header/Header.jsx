import React from "react";
import style from "./header.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import USFlag from "@/public/images/usaflag.svg";

export default function Header() {
  return (
    <div className={style.wrapper}>
      <div className={`container ${style.header}`}>
        <div className={style.header__menus}>
          <ul className={style.header__menus__links}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/search">Find job</Link>
            </li>
            <li>
              <Link href="/employers">Employers</Link>
            </li>
            <li>
              <Link href="/cadidates">Candidates</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing plans</Link>
            </li>
            <li>
              <Link href="/support">Customer supports</Link>
            </li>
          </ul>
          <div className={style.header__menus__info}>
            <a href="tel:+12025550178">
              <FontAwesomeIcon icon={faPhoneVolume} />
              +1-202-555-0178
            </a>
            <div className={style.header__menus__langs}>
              <p>
                <Image src={USFlag} width={20} height={20} alt="us" />
                English <FontAwesomeIcon icon={faChevronDown} />
              </p>
              <ul>
                <li>
                  <Image src={USFlag} width={20} height={20} alt="us" />
                  English
                </li>
                <li>
                  <Image src={USFlag} width={20} height={20} alt="us" />
                  Uzbek
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={style.header__searchbar}>
            This is searchbar
        </div>
      </div>
    </div>
  );
}
