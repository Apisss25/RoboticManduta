import React from "react";
import { NamaKetua } from "../data/Data";
import { Title } from "../component/Title";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const History = () => {
  return (
    <>
      <Title title="Sejarah" color={"white"} />

      <div className="container-History text-center px-[25px] pt-[20px] pb-[20px]">
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="text-[14px] sm:text-[16px] font-[Bitter] mt-[20px] mb-[20px] text-center text-white"
        >
          "Robotika Di dirikan Tahun 2018 tanggal 18 Februari Oleh Ka Raiz"
        </motion.p>
        <motion.p
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="text-[14px] sm:text-[16px] font-[Poppins] mb-[10px] text-white"
        >
          Nama-nama Ketua Yang pernah menjabat:
        </motion.p>
        <div className="Nama-Ketua mt-[25px]">
          {NamaKetua.map((item) => {
            return (
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                key={item.id}
                className="w-[250px] h-[37px] mx-auto flex justify-start items-center px-[20px] bg-[white] m-[10px] my-[15px] border-[#7C93C3] border-2 rounded-[10px] sm:w-[300px] sm:h-[40px] sm:px-[30px]"
              >
                <h1 className="text-[14px] font-[Poppins]">{item.title}</h1>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default History;
