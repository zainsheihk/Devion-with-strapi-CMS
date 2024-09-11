import Image from "next/image";
import React from "react";
import logo from "@public/logo.png";
import Link from "next/link";
import Navbar from "./navbar";
import { getConfiguration } from "@services/index";
import { imageSourceWithBaseURL } from "@utils/index";

function Header({ attributes }: { attributes: any }) {
  return (
    <header className="bg-white">
      <div className="container mx-auto flex justify-between items-center py-6 ">
        <Link href={attributes.logo_url}>
          <Image
            src={imageSourceWithBaseURL(attributes.logo.data.attributes.url)}
            alt="logo"
            width={160}
            height={72}
            className="max-w-[160px]"
          />
        </Link>
        <Navbar menu={attributes.menu} />
      </div>
    </header>
  );
}

export default Header;
