import Image, { StaticImageData } from "next/image";
import React from "react";

function CounterCard({
  image,
  value,
  description,
}: {
  image: string;
  value: string;
  description: string;
}) {
  return (
    <div>
      <Image src={image} alt="" width={70} height={70} className="w-7 h-7" />
      <h6 className="text-[44px] text-white font-bold">{value}</h6>
      <p className="text-[#EAE7F1]">{description}</p>
    </div>
  );
}

export default CounterCard;
