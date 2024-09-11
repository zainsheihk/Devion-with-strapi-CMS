import React from "react";
import VideoThumbnail from "@public/videoThumbnail.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import ButtonDefault from "@components/buttons/button";
import { imageSourceWithBaseURL } from "@utils/index";

function VideoSection({ data }: { data: any }) {
  const description = data.description.map((item: any) =>
    item.children.map((ele: any) => ele.text)
  );
  return (
    <section className="pb-16 pt-28 bg-white">
      <div className="container m-auto flex gap-16 justify-center items-center">
        <div className="w-[45%]">
          <div className="w-full relative after:absolute after:border-r-[1px] after:border-t-[1px] after:w-full after:h-[90%] after:border-[#696868] after:-right-[15px] after:border-b-[1px] after:-bottom-[15px] after:rounded-ee-[20px] after:rounded-t-[80px] after:z-[1] after:rounded-b-[10px]">
            <Image
              width={600}
              height={600}
              src={imageSourceWithBaseURL(data.image.data.attributes.url)}
              alt=""
              className="relative w-full z-10"
            />
            <ButtonDefault
              buttonType="secondary"
              className="absolute bottom-[30px] w-12 h-12 right-[30px] z-20 rounded-[50%] !p-0 flex items-center justify-center"
            >
              <FontAwesomeIcon
                icon={faPlay}
                className=" relative left-[2px] text-white w-4"
              />
            </ButtonDefault>
          </div>
        </div>
        <div className="w-[55%]">
          <p className="text-primary-text-color text-[32px] mb-5">
            {data.heading}
          </p>
          {description.map((ele: any, index: any) => (
            <p key={index} className="text-secondary-text-color">
              {ele}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
