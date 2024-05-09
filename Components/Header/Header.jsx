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
import { usePathname } from "next/navigation";
import links from "@/datas/links.json";

export default function Header() {
  const pathname = usePathname();

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.header__menus}>
          <div className={`container ${style.header__menus__wrapper}`}>
            <ul className={style.header__menus__links}>
              {links?.map((link, index) => (
                <li key={index}>
                  <Link href={link?.pathname} className={pathname == link?.pathname ? style.header__menus__links__active : null}>{link?.title_en}</Link>
                </li>
              ))}
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
        </div>
        <div className={style.header__searchbar}>This is searchbar</div>
      </div>
    </div>
  );
}
