import React from "react";
import { Title } from "../component/Title";
import { TextAbout } from "../data/Data";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  return (
    <>
      <section className="h-auto pt-[90px] px-[30px] sm:px-[60px] md:px-[100px]">
        <Title title="Tentang Kami" color="black" />
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="text-[16px] font-[Poppins] font-[400] text-center mt-[20px] capitalize md:text-[18px]"
        >
          robotika didirikan tahun 2018 tanggal 18 Februari oleh ka Raiz
        </motion.p>
        <motion.p
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="text-[16px] font-[Poppins] font-[400] text-left mt-[20px] capitalize md:text-[18px]"
        >
          Makna lambang bendera Robotika Manduta
        </motion.p>
        {TextAbout.map((item) => {
          return (
            <motion.p
              variants={fadeIn("right", item.delay)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              key={item.id}
              className="text-[14px] font-[Poppins] font-[400] text-left mt-[10px] capitalize sm:text-[15px]"
            >
              {item.description}
            </motion.p>
          );
        })}
      </section>
    </>
  );
};

export default About;
