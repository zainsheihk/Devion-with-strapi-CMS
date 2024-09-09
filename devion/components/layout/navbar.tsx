"use client";
import React from "react";
import Link from "next/link";
import ButtonDefault from "@components/buttons/button";
import Image from "next/image";
import profile from "@public/profile.png";

function Navbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <nav className="flex items-center justify-center w-fit gap-8">
      <ul className="flex items-center justify-center w-fit gap-10">
        <li>
          <Link
            href={""}
            className="text-[15px] font-semibold underline-custom"
          >
            Professionals
          </Link>
        </li>
        <li>
          <Link
            href={""}
            className="text-[15px] font-semibold underline-custom "
          >
            Dental Practices
          </Link>
        </li>
      </ul>
      <ul className="flex items-center justify-center w-fit gap-4">
        <li>
          <ButtonDefault
            ripple={false}
            buttonType="primary-outline"
            className="!text-primary-text-color px-3 py-[6px] text-[12px] "
          >
            Login
          </ButtonDefault>
        </li>
        <li>
          <ButtonDefault
            buttonType="primary"
            className="p-2 !shadow-none hover:!shadow-none rounded-lg"
          >
            <Image src={profile} alt="profile" className="w-[16px] h-[16px]" />
          </ButtonDefault>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
