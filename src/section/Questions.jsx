import React from "react";
import { Title } from "../component/Title";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";
import { DataQuestions } from "../data/Data";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Questions = () => {
  return (
    <>
      <Title title="Pertanyaan yang sering ditanyakan" color={"black"} />
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="pt-[50px]"
      >
        <Accordion collapseAll className="border-[1.5px] border-black">
          {DataQuestions.map((item) => {
            return (
              <AccordionPanel
                className="border-b-[1.5px] border-b-black"
                key={item.id}
              >
                <AccordionTitle className=" text-black focus:ring-0 ">
                  {item.question}
                </AccordionTitle>
                <AccordionContent className="border-[1px] border-black">
                  <p className="mb-2 text-black">Jawaban : {item.answer}</p>
                </AccordionContent>
              </AccordionPanel>
            );
          })}
        </Accordion>
      </motion.div>
    </>
  );
};

export default Questions;
