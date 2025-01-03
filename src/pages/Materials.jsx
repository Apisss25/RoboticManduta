import React from "react";
import {
  Button,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
// import { HiArrowNarrowRight } from "react-icons/hi";
import { Title } from "../component/Title";
import { DataMaterials } from "../data/Data";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Materials = () => {
  return (
    <>
      <section className="h-auto pt-[100px] px-[50px]">
        <Title title="Materi Dan Roadmap pembelajaran" color="black" />
        <div className="pt-[50px]">
          <Timeline>
            {DataMaterials.map((item) => {
              return (
                <TimelineItem key={item.id}>
                  <TimelinePoint />
                  <TimelineContent>
                    <motion.div
                      variants={fadeIn("left",item.delay)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.3 }}
                    >
                      <TimelineTitle className="text-black">
                        {item.title}
                      </TimelineTitle>
                    </motion.div>
                    <motion.div
                      variants={fadeIn("left", item.delay)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.3 }}
                    >
                      <TimelineBody className="text-[#343434]">
                        {item.description}
                      </TimelineBody>
                    </motion.div>
                  </TimelineContent>
                </TimelineItem>
              );
            })}
          </Timeline>
        </div>
      </section>
    </>
  );
};

export default Materials;
