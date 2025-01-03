import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  faBars,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { navbarText, dropdownText } from "../data/Data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const clickDropdown = () => {
    setOpenDropdown(false);
    setOpen(!open);
  };
  return (
    <>
      <nav className="w-full fixed flex justify-between py-[15px] bg-[#16325B] z-[100]">
        <div className="NavLeft">
          <motion.h1
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="text-[16px] ml-[20px] font-[500] font-[Poppins] text-white cursor-pointer"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Robotics ManDuta
          </motion.h1>
        </div>

        <div className="NavRight">
          <div
            className={`z-100 absolute flex flex-col top-[0px] w-[68%] h-[100vh] px-[20px] bg-[rgba(255,255,255,0.2)] backdrop-blur-md transition-all duration-200 ${
              open ? "right-[0px]" : "right-[-1200px]"
            } sm:w-[38%] md:w-[30%] lg:hidden`}
          >
            <div className="py-[15px] lg:hidden">
              <FontAwesomeIcon
                icon={faX}
                size={"lg"}
                className="cursor-pointer"
                onClick={() => setOpen(!open)}
              />
            </div>
            {navbarText.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex text-[16px] font-[500] font-[Poppins] py-[13px]"
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="mr-[20px]"
                    size="lg"
                  />
                  {item.title === "Beranda" ? (
                    <div className="">
                      <div className="flex items-center">
                        <Link
                          to={item.link}
                          onClick={() => clickDropdown()}
                          className="group"
                        >
                          {item.title}
                          <div className="h-[2px] w-0 bg-[#8e8e8e] transition-all duration-500 group-hover:w-full"></div>
                        </Link>
                        <FontAwesomeIcon
                          icon={openDropdown ? faChevronDown : faChevronUp}
                          size="lg"
                          className="w-[20px] h-[20px] ml-[50px] cursor-pointer"
                          onClick={() => setOpenDropdown(!openDropdown)}
                        />
                      </div>
                      <div className={`${openDropdown ? "block " : "hidden"}`}>
                        {dropdownText.map((item) => {
                          return (
                            <div
                              className="group py-[15px] ml-[15px] "
                              key={item.id}
                            >
                              <a
                                href={item.link}
                                className=""
                                onClick={() => clickDropdown()}
                              >
                                {item.title}
                                <div className="h-[2px] w-0 bg-[#8e8e8e] transition-all duration-500 group-hover:w-full"></div>
                              </a>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.link}
                      onClick={() => clickDropdown()}
                      className="group"
                    >
                      {item.title}
                      <div className="h-[2px] w-0 bg-[#8e8e8e] transition-all duration-500 group-hover:w-full"></div>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
          <div className="mr-[20px] lg:hidden">
            {open === false && (
              <FontAwesomeIcon
                icon={faBars}
                size={"lg"}
                color="white"
                className="cursor-pointer"
                onClick={() => setOpen(!open)}
              />
            )}
          </div>
          <div className="Navbar flex gap-[40px] mr-[20px] text-white max-lg:hidden">
            {navbarText.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex text-[16px] font-[400] font-[Poppins]"
                >
                  {item.title === "Beranda" ? (
                    <div className="">
                      <div className="flex items-center">
                        <Link
                          to={item.link}
                          onClick={() => clickDropdown()}
                          className="group text-[15px] font-[300] font-[Poppins]"
                        >
                          {item.title}
                          <div className="h-[2px] w-0 bg-[#8e8e8e] transition-all duration-500 group-hover:w-full"></div>
                        </Link>
                        <FontAwesomeIcon
                          icon={openDropdown ? faChevronDown : faChevronUp}
                          size="lg"
                          className={`w-[20px] h-[20px] ml-[20px] cursor-pointer font-[400] text-[15px] `}
                          onClick={() => setOpenDropdown(!openDropdown)}
                        />
                      </div>
                      <div
                        className={`absolute w-[120px] border-[1px] border-gray-500 top-[54px]  ${
                          openDropdown ? "block " : "hidden"
                        }`}
                      >
                        {dropdownText.map((item) => {
                          return (
                            <div
                              className="group py-[15px] pl-[15px] bg-[rgba(255,255,255,0.2)] backdrop-blur-md"
                              key={item.id}
                            >
                              <a
                                href={item.link}
                                className=" text-[15px] font-[400] font-[Poppins] text-black"
                                onClick={() => clickDropdown()}
                              >
                                {item.title}
                                <div className="h-[2px] w-0 bg-[#8e8e8e] transition-all duration-500 group-hover:w-[90%]"></div>
                              </a>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.link}
                      onClick={() => clickDropdown()}
                      className="group text-[15px] font-[400] font-[Poppins]"
                    >
                      {item.title}
                      <div className="h-[2px] w-0 bg-[#8e8e8e] transition-all duration-500 group-hover:w-full"></div>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
