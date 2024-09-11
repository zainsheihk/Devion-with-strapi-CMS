import Image, { StaticImageData } from "next/image";
import React from "react";

function TestimonialSlide({
  image,
  name,
  description,
  company,
}: {
  image: string;
  name: string;
  description: string;
  company: string;
}) {
  return (
    <div className="py-16 px-24 mt-14 rounded-[250px] border-2 border-primary-color flex justify-between items-start bg-white">
      <div className="w-[40%]  ">
        <Image
          width={800}
          height={800}
          src={image}
          alt=""
          className="absolute left-0 bottom-0 max-w-[350px]"
        ></Image>
      </div>
      <div className="w-[60%] relative  ">
        <span className="block py-2 px-12 rounded-[100px] bg-primary-color text-white text-[30px] w-fit absolute -top-[50%] left-[50%]  translate-x-[-50%] translate-y-[20px] whitespace-nowrap">
          {name}
        </span>
        <p className="text-secondary-text-color mb-10 text-[18px]">
          {description}
        </p>
        <span className="text-primary-text-color  font-bold text-[20px]">
          {company}
        </span>
      </div>
    </div>
  );
}

export default TestimonialSlide;
