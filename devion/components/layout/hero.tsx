import React from "react";
import ButtonDefault from "@components/buttons/button";
import Image from "next/image";
import bannerShape1 from "@public/banner-1.png";
import bannerShape2 from "@public/banner-2.png";
import vector1 from "@public/vector-3.png";
import vector2 from "@public/vector-2.png";
import { imageSourceWithBaseURL } from "@utils/index";

type bannerSlideType = {
  id: number;
  title: string;
  description: string[];
  button_text_1: string;
  button_URL_1: string;
  button_text_2: string;
  button_URL_2: string;
  banner_image_1: any;
  banner_image_2: any;
};
function Hero({ banner }: { banner: bannerSlideType }) {
  const description = banner.description.map((item: any) =>
    item.children.map((ele: any) => ele.text)
  );

  return (
    <div className="relative mt-5">
      <Image
        src={vector1}
        alt=""
        width={500}
        height={0}
        className="absolute top-[-40px] left-[-0%] z-[-1] w-[35%] select-none max-w-[500px]"
      />
      <Image
        src={vector2}
        alt=""
        className="absolute top-[-40px] right-[-0%] z-[-1] w-[25%] select-none max-w-[500px]"
      />
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-[45%]">
          <h1 className="text-secondary-color text-[46px] font-bold mb-5">
            {banner.title}
          </h1>

          {description.map((ele, index) => (
            <p
              key={index}
              className="text-secondary-text-color  text-[18px] mb-5"
            >
              {ele}
            </p>
          ))}

          <div className="flex gap-4">
            <ButtonDefault>{banner.button_text_1}</ButtonDefault>
            <ButtonDefault>{banner.button_text_2}</ButtonDefault>
          </div>
        </div>
        <div className="w-[55%] flex flex-col items-end">
          <Image
            src={imageSourceWithBaseURL(
              banner.banner_image_1.data.attributes.url
            )}
            width={500}
            height={500}
            alt=""
            className="w-[85%]"
          />
          <div className="relative w-full top-[-50px] flex justify-end right-[15px] after:absolute after:border-r-[1px] after:w-[60%] after:h-full after:border-primary-color after:-right-[15px] after:border-b-[1px] after:-bottom-[15px] after:rounded-ee-[138px]">
            <Image
              src={imageSourceWithBaseURL(
                banner.banner_image_2.data.attributes.url
              )}
              width={500}
              height={500}
              alt=""
              className="w-[60%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
