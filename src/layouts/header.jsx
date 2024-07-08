import { useState } from "react";
import Logo from "../assets/images/logo-bookmark.svg";
import Button from "../components/button.jsx";
import HamMenu from "../assets/images/icon-hamburger.svg";
import SideMenu from "./sidemenu.jsx";
import { useMenuStatus } from "../hooks/states.js";

export const SECTIONS = ["FEATURES", "PRICING", "CONTACT"];

export default function Header() {
  const { menuStatus, toggleMenu } = useMenuStatus(false);
  return (
    <header className="flex justify-between  py-14 text-black ">
      <div>
        <img src={Logo} alt="BookMark Logo" />
      </div>
      <nav className="hidden md:block ">
        <ul className="flex gap-3 margin  text-base tracking-widest font-medium ">
          {SECTIONS.map((section) => (
            <li
              className="p-2 hover:text-red-600 transition-all duration-200 ease-in-out"
              key={section}
            >
              <a className="inline-block w-full h-full" href="#">
                {section}
              </a>
            </li>
          ))}
          <Button
            buttonName="LOGIN"
            bg="bg-red-600"
            text="text-white"
            hover="hover:ring-2 hover:ring-red-600 hover:bg-white hover:text-red-600"
          />
        </ul>
      </nav>
      <div className="md:hidden">
        <img src={HamMenu} alt="Hamburger Menu" onClick={toggleMenu} />
      </div>
      <SideMenu menuStatus={menuStatus} toggleMenu={toggleMenu} />
    </header>
  );
}
