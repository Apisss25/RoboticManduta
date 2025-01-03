import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export const Title = ({ title, color }) => {
  return (
    <motion.h1
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className={`text-[20px] font-[Poppins] font-[700] text-center ${`text-${color}`} sm:text-[25px]`}
    >
      {title}
    </motion.h1>
  );
};
