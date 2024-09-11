import React from "react";
import Image from "next/image";
import CounterCard from "@components/cards/counterCard";
import { imageSourceWithBaseURL } from "@utils/index";

function ValuesSection({ data }: { data: any }) {
  return (
    <section className="py-8">
      <div className=" relative after:absolute after:top-0 after:left-0 after:bg-primary-color after:w-1/2 after:h-full after:z-[-1]  after:rounded-ee-[40px] after:rounded-e-[40px]">
        <div className="container py-16 m-auto flex justify-between items-center">
          <div className=" w-[30%] flex flex-col justify-between self-stretch">
            {data.card.map((card: any) => (
              <CounterCard
                key={card.id}
                value={card.number}
                description={card.description}
                image={imageSourceWithBaseURL(card.image.data.attributes.url)}
              />
            ))}
          </div>
          <div className=" w-[65%]">
            <Image
              src={imageSourceWithBaseURL(data.image.data.attributes.url)}
              height={500}
              width={800}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ValuesSection;
