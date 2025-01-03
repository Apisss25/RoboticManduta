import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
export const ProfileBPH = (props) => {
  const { title, Name, Image } = props;
  return (
    <div className="conteiner-Profile ">
      <motion.h1
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="text-[16px] font-[Poppins] font-[500] text-center mb-[20px] sm:text-[18px]"
      >
        {title}
      </motion.h1>
      <motion.img
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        src={Image}
        alt=""
        className="w-[100px] mx-auto rounded-full"
      />
      <motion.p
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="text-[13px] font-[Poppins] font-[500] text-center mt-[20px] sm:text-[15px]"
      >
        {Name}
      </motion.p>
    </div>
  );
};
