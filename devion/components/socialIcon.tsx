import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";

function SocialIcon({ name }: { name: "facebook" | "linkedin" }) {
  const icon = {
    facebook: faFacebookF,
    linkedin: faLinkedinIn,
  };
  
  return (
    <Link
      className="w-12 h-12  rounded-full border-[1px] border-primary-color flex justify-center items-center text-primary-color"
      href=""
    >
      <FontAwesomeIcon icon={icon[name]} className="w-[14px] h-[14px] " />
    </Link>
  );
}

export default SocialIcon;
