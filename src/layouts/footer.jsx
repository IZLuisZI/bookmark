import logo from "../assets/images/logo-bookmark.svg";
import Button from "../components/button";
import { SECTIONS } from "./header";
import { useState } from "react";
import Facebook from "../assets/images/icon-facebook.svg";
import Twitter from "../assets/images/icon-twitter.svg";
import { checkEmail } from "../utils/checkEmail";
import Copyright from "./copyright";
export default function Footer() {
  const submitErrorStyles = " border-2 border-red-500 ";

  const [validEmail, setValidEmail] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value;
    setValidEmail(checkEmail(email));
    console.log(validEmail, email);
  }
  return (
    <footer className="bg-blue-600 mt-32 text-white pt-14 ">
      <div
        className="flex justify-center items-center
      flex-col gap-7 mx-4 sm:mx-6 md:mx-8 "
      >
        <p className="tracking-wider font-medium">35,000+ ALREADY JOINED</p>
        <h5
          className="text-4xl
           w-full md:w-1/3 text-center
        "
        >
          Stay up-to-date with what we're doing{" "}
        </h5>

        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex gap-4  justify-center flex-col md:flex-row"
        >
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            placeholder="Enter your email address"
            className={` ${
              !validEmail ? submitErrorStyles : ""
            } p-3  w-full md:w-80 text-black rounded-md outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50`}
          />
          <Button
            buttonName="Contact Us"
            bg="bg-red-600"
            text="text-white"
            hover="hover:ring-2  hover:ring-red-600 hover:bg-white hover:text-red-600"
          />
        </form>
      </div>
      <div className="bg-gray-900  px-36 py-12 mt-12">
        <div className="flex justify-between gap-7 flex-col md:flex-row">
          <ul className=" flex  gap-7 tracking-wider items-center flex-col md:flex-row">
            <li>
              <img
                style={{ color: `#ffffff` }}
                src={logo}
                alt="BookMark Logo"
              />
            </li>
            {SECTIONS.map((section) => {
              return (
                <li
                  key={section}
                  className="p-2 hover:text-red-600 transition-all duration-200 ease-in-out"
                >
                  <a className="inline-block w-full h-full" href="#">
                    {section}
                  </a>
                </li>
              );
            })}
          </ul>
          <ul className="flex justify-center  gap-4 items-center">
            <li>
              <a href="#">
                <img src={Facebook} alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Twitter} alt="Twitter" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Copyright />
    </footer>
  );
}
