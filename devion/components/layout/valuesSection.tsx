import React from "react";
import counterImage from "@public/counter-Image.png";
import Image from "next/image";
import CounterCard from "@components/cards/counterCard";
import doctorIcon from "@public/doctor-icon.png";
import buildingIcon from "@public/building-icon.png";
import certifiedDoctorIcon from "@public/dental-professional-icon.png";

function ValuesSection() {
  return (
    <section className="py-8">
      <div className=" relative after:absolute after:top-0 after:left-0 after:bg-primary-color after:w-1/2 after:h-full after:z-[-1]  after:rounded-ee-[40px] after:rounded-e-[40px]">
        <div className="container py-16 m-auto flex justify-between items-center">
          <div className=" w-[30%] flex flex-col justify-between self-stretch">
            <CounterCard
              value="301,672"
              description="Dental positions filled"
              image={doctorIcon}
            />
            <CounterCard
              value="26,665"
              description="Dental offices in network"
              image={buildingIcon}
            />
            <CounterCard
              value="87,342"
              description="Approved and verified dental professionals"
              image={certifiedDoctorIcon}
            />
          </div>
          <div className=" w-[65%]">
            <Image src={counterImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ValuesSection;
