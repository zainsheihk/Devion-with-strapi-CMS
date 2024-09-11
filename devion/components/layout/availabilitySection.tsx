import ButtonDefault from "@components/buttons/button";
import Image from "next/image";
import React from "react";
import shape1 from "@public/shape1.png";
import shape2 from "@public/shape2.png";
import vector1 from "@public/availability-vector-1.png";
import vector2 from "@public/availability-vector-2.png";

function AvailabilitySection({ data }: { data: any }) {
  const heading = data.heading.map((item: any) =>
    item.children.map((ele: any) => ele.text)
  );
  return (
    <section className="py-8 ">
      <div className="container m-auto bg-[#F3EBFF] rounded-[36px] py-24 relative overflow-hidden">
        <Image
          src={shape1}
          alt=""
          className="absolute right-0 bottom-0 max-w-[300px] z-[1] select-none"
        />
        <Image
          src={shape2}
          alt=""
          className="absolute top-0 left-0  max-w-[250px]  z-[1] select-none"
        />
        <Image
          src={vector1}
          alt=""
          className="absolute top-0 left-0 w-[50%] select-none "
        />
        <Image
          src={vector2}
          alt=""
          className="absolute bottom-0 right-10 w-[25%] select-none"
        />
        <div>
          {heading.map((ele: any, index: any) => (
            <h5
              key={index}
              className="text-primary-text-color text-[36px] max-w-[400px] font-bold  m-auto leading-[1.4]"
            >
              {ele}
            </h5>
          ))}

          <div className="flex justify-center items-center gap-4 mt-10">
            <ButtonDefault buttonType="secondary" className="rounded-md">
              {data.button_text_1}
            </ButtonDefault>
            <ButtonDefault buttonType="secondary" className="rounded-md">
              {data.button_text_2}
            </ButtonDefault>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AvailabilitySection;
