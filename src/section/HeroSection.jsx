import React from "react";
import { Button } from "../component/Button";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const HeroSection = () => {
  return (
    <>
      <div className="container-Hero px-[10px] md:px-[50px]">
        <motion.img
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          src="./image/Logo.png"
          alt=""
          className="w-[180px] sm:w-[200px] mx-auto my-[20px]"
        />
        <div className="text-Hero text-center px-[25px] ">
          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="text-[18px] sm:text-[20px] md:text-[22px] font-[Poppins] font-medium"
          >
            Robotika Man 2 Tangerang
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="text-[13px] sm:text-[15px] md:text-[16px] font-[Bitter] mt-[20px] mb-[30px]"
          >
            "Robotika adalah satu cabang teknologi yang berhubungan dengan
            desain, konstruksi, operasi, disposisi struktural, pembuatan, dan
            aplikasi dari robot."
          </motion.p>
        </div>
        <div className="text-right px-[30px] mt-[40px]">
          <Button
            title={"See More"}
            className={
              "py-[8px] px-[25px] sm:px-[40px] sm:py-[10px] md:px-[50px] rounded-[12px] border-[#59923a] bg-[#16325B] border-2 "
            }
            onClick={() => {
              window.scrollTo({ top: 660, behavior: "smooth" });
            }}
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
