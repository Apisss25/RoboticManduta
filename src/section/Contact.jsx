import { FloatingLabel } from "flowbite-react";
import React from "react";
import { Title } from "../component/Title";
import { Button } from "../component/Button";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Contact = () => {
  const sendMassageToWa = () => {
    const urlToWhatsapp = `https://wa.me/6281291243220?text=Halo,nama_saya=${Name.value},dari_kelas=${Kelas.value},_dengan_nomor_wa=${NomorWa.value},dengan_alasan=${Alasan.value}`;
    window.open(urlToWhatsapp, "_blank");
    Name.value = "";
    Kelas.value = "";
    NomorWa.value = "";
    Alasan.value = "";
  };
  return (
    <>
      <Title title="Daftar sekarang" color={"black"} />
      <motion.p
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="text-[13px] font-Montserrat px-[50px] text-center py-[20px] sm:text-[15px] sm:px-[100px]"
      >
        Apakah kamu tertarik masuk eskul Robotika Man 2 Tangerang ? kalau iya
        isi form di bawah ini yaa.
      </motion.p>
      <form action="#" onSubmit={() => sendMassageToWa()}>
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="mx-auto w-[280px] sm:w-[350px] md:w-[450px]"
        >
          <FloatingLabel
            variant="standard"
            label="Name :"
            className="border-[#16325B] text-black focus:border-[#16325B] peer-focus:text-black focus:bg-transparent text-[15px] sm:text-[15px] md:text-[16px]"
            id="Name"
          />
          <div className="w-full flex justify-between gap-[15px]">
            <FloatingLabel
              variant="standard"
              label="Kelas :"
              className="border-[#16325B] text-black focus:border-[#16325B] peer-focus:text-black md:w-[220px] sm:text-[15px] md:text-[16px]"
              id="Kelas"
            />
            <FloatingLabel
              variant="standard"
              label="No. Wa :"
              className="border-[#16325B] text-black focus:border-[#16325B] peer-focus:text-black md:w-[220px] sm:text-[15px] md:text-[16px]"
              id="NomorWa"
            />
          </div>
          <FloatingLabel
            variant="standard"
            label="Alasan :"
            className="border-[#16325B] text-black focus:border-[#16325B] peer-focus:text-black sm:text-[15px] md:text-[16px]"
            id="Alasan"
          />
          <Button
            title="Kirim"
            className=" w-[280px] py-[9px] px-[25px] rounded-[12px] bg-[#16325B] border-2 mt-[15px] sm:w-[350px] md:w-[450px]"
            type="submit"
          />
        </motion.div>
      </form>
    </>
  );
};

export default Contact;
