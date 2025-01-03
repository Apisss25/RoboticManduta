import React from "react";
import { Title } from "../component/Title";
import { SoftwareTechStack } from "../data/Data";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const TechStack = () => {
  return (
    <>
      <Title title="Software Dan Tech Stack" color={"black"} />
      <div className="container-Software mt-[30px] flex flex-col justify-center items-center gap-[50px] md:flex-row md:items-center md:gap-[100px] md:mt-[80px]">
        {SoftwareTechStack.map((item) => {
          return (
            <motion.img
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              key={item.id}
              className="w-[120px] "
              src={item.image}
              alt=""
            />
          );
        })}
      </div>
    </>
  );
};

export default TechStack;
