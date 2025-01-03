import React from "react";
import HeroSection from "../section/HeroSection";
import History from "../section/History";
import BPHSection from "../section/BPHSection";
import TechStack from "../section/TechStack";
import Contact from "../section/Contact";
import Questions from "../section/Questions";
const Home = () => {
  return (
    <>
      <section
        id="Home"
        className="h-screen pt-[35px] scroll-mt-[50px] overflow-hidden"
      >
        <HeroSection />
      </section>
      <section
        id="history"
        className="h-[620px] pt-[50px] pb-[35px] scroll-mt-[50px] bg-[#16325B]"
      >
        <History />
      </section>
      <section
        id="StrukturBPH24/25"
        className="h-[800px] pt-[50px] scroll-mt-[50px]"
      >
        <BPHSection />
      </section>
      <section
        id="SoftwareAndTechStack"
        className="h-[620px] pt-[80px] scroll-mt-[50px] md:h-[350px] overflow-hidden"
      >
        <TechStack />
      </section>
      <section id="Contact" className="pt-[50px] scroll-mt-[50px]">
        <Contact />
      </section>
      <section
        id="Questions"
        className="pt-[80px] scroll-mt-[50px] px-[40px] overflow-hidden"
      >
        <Questions />
      </section>
    </>
  );
};

export default Home;
