import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const ButtonFloating = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Tambahkan event listener untuk mendeteksi scroll
    window.addEventListener("scroll", handleScroll);

    // Bersihkan event listener saat komponen di-unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <button
        className={`fixed ${
          isVisible ? "block" : "hidden"
        } w-[50px] h-[50px] max-[425px]:w-[40px] max-[425px]:h-[40px] rounded-full bg-[#16325B] border-[1.5px] border-gray-500
         bottom-[20px] right-[20px] flex justify-center items-center`}
        onClick={() => window.scrollTo(0, { behavior: "smooth" })}
      >
        <FontAwesomeIcon
          className="text-white text-[20px] max-[425px]:text-[18px]"
          icon={faArrowUp}
        />
      </button>
    </>
  );
};

export default ButtonFloating;
