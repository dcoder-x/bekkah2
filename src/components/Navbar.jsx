import { useState } from "react";
import { Link } from "react-router-dom";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { Icon } from "@iconify/react";
import styles from "../style";
import '../styles/nav.css'


const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [isOpen, setisOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <nav id="nav" className="  bg-primary z-20 overflow-visible w-full fixed flex py-6  px-6 justify-between items-center navbar">
      <Link to={'/'}>
        <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      </Link>
      

      <ul className="overflow-visible bg-primary z-10 list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <div className=" overflow-visible">
            <li
              key={nav.link}
              className={`overflow-visible font-poppins font-normal cursor-pointer flex text-[16px] ${
                styles.flexCenter
              } ${active === nav.title ? "text-white" : "text-dimWhite"} ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              }`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`${nav.link}`}>{nav.title}</a>
              {nav.sublinks ? (
                <Icon
                  icon="ri:arrow-drop-down-line"
                  onClick={(e) => {
                    setisOpen(!isOpen);
                  }}
                  onMouseEnter={(e) => {
                    setisOpen(!isOpen);
                  }}
                  width={30}
                />
              ) : null}
            </li>
            {nav.sublinks ? (
              <div
                onMouseLeave={(e) => {
                  setisOpen(false);
                }}
                className="sublinks absolute p-6 bg-black-gradient my-2 min-w-[140px] rounded-xl"
                style={{ height: isOpen ? "auto" : 0 }}
              >
                {nav.sublinks.map((sublink) => {
                  return (
                    <Link to={sublink.link}>
                      <p>{sublink.name}</p>
                    </Link>
                  );
                })}
              </div>
            ) : null}
          </div>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "fixed"
          } p-6 bg-black-gradient fixed top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
          {navLinks.map((nav, index) => (
          <div className=" overflow-visible">
            <li
              key={nav.link}
              className={`overflow-visible font-poppins font-normal cursor-pointer flex text-[16px] ${
                styles.flexCenter
              } ${active === nav.title ? "text-white" : "text-dimWhite"} ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              }`}
              onClick={() => {setActive(nav.title);}}
            >
              <a href={`${nav.link}`}>{nav.title}</a>
              {nav.sublinks ? (
                <Icon
                  icon="ri:arrow-drop-down-line"
                  onClick={(e) => {
                    setisOpen(!isOpen);
                  }}
                  onMouseEnter={(e) => {
                    setisOpen(!isOpen);
                  }}
                  width={30}
                />
              ) : null}
            </li>
            {nav.sublinks ? (
              <div
                onMouseLeave={(e) => {
                  setisOpen(false);
                }}
                className="sublinks absolute p-6 bg-black-gradient my-2 min-w-[140px] rounded-xl"
                style={{ height: isOpen ? "auto" : 0 }}
              >
                {nav.sublinks.map((sublink) => {
                  return (
                    <Link onClick={()=>{setToggle(false)}} to={sublink.link}>
                      <p>{sublink.name}</p>
                    </Link>
                  );
                })}
              </div>
            ) : null}
          </div>
        ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
