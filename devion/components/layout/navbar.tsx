"use client";
import React from "react";
import Link from "next/link";
import ButtonDefault from "@components/buttons/button";
import Image from "next/image";
import profile from "@public/profile.png";

type menuItem = {
  id: number;
  menu_item: string;
  meta_title: string;
  item_type: string;
};
function Navbar({ menu }: { menu: menuItem[] }) {
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
        {menu.map((item) => {
          return (
            <React.Fragment key={item.id}>
              {item.item_type === "link" ? (
                <li>
                  <Link
                    href={item.meta_title}
                    className="text-[15px] font-semibold underline-custom"
                  >
                    {item.menu_item}
                  </Link>
                </li>
              ) : (
                <ul
                  className="flex items-center justify-center w-fit gap-4"
                  key={item.id}
                >
                  <li>
                    <ButtonDefault
                      ripple={false}
                      buttonType="primary-outline"
                      className="!text-primary-text-color px-3 py-[6px] text-[12px] "
                    >
                      {item.menu_item}
                    </ButtonDefault>
                  </li>
                  <li>
                    <ButtonDefault
                      buttonType="primary"
                      className="p-2 !shadow-none hover:!shadow-none rounded-lg"
                    >
                      <Image
                        src={profile}
                        alt="profile"
                        className="w-[16px] h-[16px]"
                      />
                    </ButtonDefault>
                  </li>
                </ul>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
