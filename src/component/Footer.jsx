import React from "react";
import { DevelopmentTechStack, TextFooter1, TextFooter2 } from "../data/Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Footer = () => {
  return (
    <>
      <section className="Footer h-[200px] mt-[150px] w-full">
        <div className="flex text-center flex-col gap-[30px] sm:flex-row sm:justify-evenly">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="font-Poppins text-[18px] font-bold capitalize"
          >
            Robotics ManDuta...
            <div className="mx-auto w-[190px] h-[2.5px] bg-black "></div>
          </motion.h1>
          <div className="Menu">
            <motion.h1
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="font-Bitter text-[18px] font-[600] capitalize"
            >
              Menu
              <div className="mx-auto w-[50px] h-[2px] bg-black"></div>
            </motion.h1>
            <div className="flex text-center flex-col">
              {TextFooter1.map((item) => {
                return (
                  <motion.ul
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}
                    key={item.id}
                    className="mx-auto"
                  >
                    <li className="font-Montserrat w-[70px] group text-[15px] my-[10px]">
                      {item.name}
                      <div className="mx-auto w-0 group-hover:w-[60px] h-[1.5px] bg-black transition-all duration-150"></div>
                    </li>
                  </motion.ul>
                );
              })}
            </div>
          </div>
          <div className="Tech stack sm:block hidden">
            <h1 className="font-Bitter text-[18px] font-[600] capitalize">
              Website Tech Stack
              <div className="mx-auto w-[90px] h-[2px] bg-black"></div>
            </h1>
            <div className="flex text-center flex-col">
              {DevelopmentTechStack.map((item) => {
                return (
                  <motion.ul
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}
                    key={item.id}
                    className="mx-auto"
                  >
                    <li className="font-Montserrat w-[70px] group text-[15px] my-[10px]">
                      {item.name}
                      <div className="mx-auto w-0 group-hover:w-[60px] h-[1.5px] bg-black transition-all duration-150"></div>
                    </li>
                  </motion.ul>
                );
              })}
            </div>
          </div>
        </div>

        <div className="container-SocialMedia flex py-[40px] justify-center text-center gap-[20px]">
          {TextFooter2.map((item) => {
            return (
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="Social-Media flex justify-center items-center w-[40px] h-[40px] rounded-full bg-white border-2 border-black"
                key={item.id}
              >
                <FontAwesomeIcon icon={item.icon} size={"xl"} />
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Footer;
