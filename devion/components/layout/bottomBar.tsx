import Link from "next/link";
import React from "react";

function BottomBar() {
  return (
    <div className=" container m-auto mt-16 flex justify-center items-center relative ">
      <p className="text-white text-[12px] absolute left-0 top-[8px] ">
        © 2024 Dental Jobs
      </p>
      <ul className="flex items-center justify-center  ">
        <li>
          <Link
            href=""
            className="text-white text-[12px] px-3 border-r border-l-white"
          >
            Terms and Conditions
          </Link>
        </li>
        <li>
          <Link href="" className="text-white text-[12px] px-3 ">
            Privacy Policy
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default BottomBar;
