import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
export const Button = (props) => {
  const { title, className, onClick } = props;
  return (
    <motion.button
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false }}
      className={className}
      onClick={onClick}
      {...props}
    >
      <h1 className="text-white text-[14px] font-[Montserrat]">{title}</h1>
    </motion.button>
  );
};