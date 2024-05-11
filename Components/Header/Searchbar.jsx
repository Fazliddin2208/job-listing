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
      <div>
      <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
        Price
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">$</span>
        </div>
        <input
          type="text"
          name="price"
          id="price"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="0.00"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="currency" className="sr-only">
            Currency
          </label>
          <select
            id="currency"
            name="currency"
            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          >
            <option>USD</option>
            <option>CAD</option>
            <option>EUR</option>
          </select>
        </div>
      </div>
    </div>
      {/* <div className={style.header__searchbar__filter}>
            <select name="country">
                <option value="england"><Image src={USFlag} width={20} height={20} alt="us" /> England</option>
                <option value="england"><Image src={USFlag} width={20} height={20} alt="us" /> Uzbekistan</option>
                <option value="england"><Image src={USFlag} width={20} height={20} alt="us" /> USA</option>
            </select>
          
        <input type="search" placeholder="Job title, keyword, comnpany" />
      </div> */}
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
