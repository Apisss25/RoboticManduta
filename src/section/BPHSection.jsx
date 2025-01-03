import React from "react";
import { Title } from "../component/Title";
import { ProfileBPH } from "../component/StructureBPH";

const BPHSection = () => {
  return (
    <>
      <Title title="Struktur BPH 2024/2025" color={"black"} />

      <div className="container-Structure relative mt-[40px]">
        <span className="absolute top-[85px] left-[50%]  w-[3px] h-[600px] rounded-md bg-[#16325B]"></span>
        <div className="flex justify-center items-center gap-[50px] sm:gap-[150px]">
          <ProfileBPH
            title={"Ketua"}
            Name={"Rosyadan Affadel"}
            Image={"./image/Profile.jpeg"}
          />
          <span className="absolute top-[85px] left-[49%] sm:left-[49.5%] w-[10px] h-[10px] rounded-md bg-[#244b85]"></span>
          <ProfileBPH
            title={"Wakil Ketua"}
            Name={"M.Abdul Hafidz"}
            Image={"./image/Profile.jpeg"}
          />
        </div>
        <div className="flex justify-center items-center gap-[50px] mt-[60px] sm:gap-[150px]">
          <ProfileBPH
            title={"Sekretaris 1"}
            Name={"San Syaima N."}
            Image={"./image/Profile.jpeg"}
          />
          <span className="absolute top-[330px] left-[49%] sm:left-[49.5%] w-[10px] h-[10px] rounded-md bg-[#244b85]"></span>
          <ProfileBPH
            title={"Sekretaris 2"}
            Name={"Ainaya Azzahra"}
            Image={"./image/Profile.jpeg"}
          />
        </div>
        <div className="flex justify-center items-center gap-[50px] mt-[60px] sm:gap-[150px]">
          <ProfileBPH
            title={"Bendahara 1"}
            Name={"Reizka Kaylafayza"}
            Image={"./image/Profile.jpeg"}
          />
          <span className="absolute top-[570px] left-[49%] sm:left-[49.5%] w-[10px] h-[10px] rounded-md bg-[#244b85]"></span>
          <ProfileBPH
            title={"Bendahara 2"}
            Name={"Zahratun Nisa"}
            Image={"./image/Profile.jpeg"}
          />
        </div>
      </div>
    </>
  );
};

export default BPHSection;
