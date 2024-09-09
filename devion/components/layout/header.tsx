import Image from "next/image";
import React from "react";
import logo from "@public/logo.png";
import Link from "next/link";
import Navbar from "./navbar";

function Header() {
  return (
    <header className="bg-white">
      <div className="container mx-auto flex justify-between items-center py-6 ">
        <Link href={"/"}>
          <Image src={logo} alt="logo" className="max-w-[160px]" />
        </Link>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
