import React from "react";
// import footerLogo from "@public/footer-logo.png";
import Image from "next/image";
import Link from "next/link";
import SocialIcon from "@components/socialIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ButtonDefault from "@components/buttons/button";
import BottomBar from "./bottomBar";
import footerVector2 from "@public/footer-vector.png";
import footerVector1 from "@public/footer-vector-2.png";
import { imageSourceWithBaseURL } from "@utils/index";

function Footer({ attributes }: { attributes: any }) {
  const socialMedia: any = {
    facebook: <SocialIcon name="facebook" />,
    linkedin: <SocialIcon name="linkedin" />,
  };
  return (
    <div className="">
      <footer className="bg-footer-shape bg-[length:100%_100%] pb-3 pt-20  z-10 relative  ">
        <Image
          src={footerVector2}
          className="absolute right-0 bottom-0 max-w-[250px]"
          alt=""
        />
        <Image
          src={footerVector1}
          className="absolute left-0 bottom-0 max-w-[170px]"
          alt=""
        />
        <div className="flex justify-center items-center flex-col mb-5">
          <Image
            width={220}
            height={150}
            src={imageSourceWithBaseURL(attributes.logo.data.attributes.url)}
            alt=""
            className="max-w-[220px] mb-4"
          />
          <p className="text-white text-center max-w-[250px] text-[18px]">
            {attributes.address}
          </p>
        </div>
        <div className="container m-auto flex justify-center items-start mt-16 gap-5">
          <div className="w-1/4">
            <h3 className="text-[24px] text-white capitalize mb-4 block font-semibold">
              visit
            </h3>
            <ul>
              <li>
                <Link
                  href={""}
                  className="text-white text-[16px] font-[300] mb-3 block"
                >
                  Professional
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-white text-[16px] font-[300] mb-3 block"
                >
                  Dental Practices
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-white text-[16px] font-[300] mb-3 block"
                >
                  Blog
                </Link>
              </li>
            </ul>
            <div className="flex justify-start gap-6 mt-8">
              {attributes.social_media.map((ele: any) => (
                <React.Fragment key={ele.id}>
                  {socialMedia[ele.type]}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="w-1/4">
            <h3 className="text-[24px] text-white capitalize mb-4 block font-semibold">
              Resources
            </h3>
            <ul>
              <li>
                <Link
                  href={""}
                  className="text-white text-[16px] font-[300] mb-3 block"
                >
                  Dental Temp Agency Resources
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-white text-[16px] font-[300] mb-3 block"
                >
                  Dental Leadership and Staffing Trends
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-white text-[16px] font-[300] mb-3 block"
                >
                  Dental Assistant Jobs
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-white text-[16px] font-[300] mb-3 block"
                >
                  RDH Temp Agency Info
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-1/4">
            <h3 className="text-[24px] text-white capitalize mb-4 block font-semibold">
              Service
            </h3>
            <ul>
              <li>
                <Link
                  href={""}
                  className="text-white text-[16px] font-[300] mb-3 flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={faPhone} className=" w-3" /> Schedule
                  time with service
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-white text-[16px] font-[300] mb-3 flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={faEnvelope} className=" w-3" />{" "}
                  {attributes.email}
                </Link>
              </li>

              <li>
                <p className="text-white text-[14px] font-medium mt-9 mb-5 max-w-[200px]">
                  Call to schedule a time with sales or services
                </p>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-white text-[15px] font-[300] mb-3 flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={faPhone} className=" w-3" />{" "}
                  {attributes.phone}
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-1/4">
            <h3 className="text-[24px] text-white capitalize mb-4 block font-semibold">
              Sales
            </h3>
            <ul>
              <li>
                <Link
                  href={""}
                  className="text-white text-[16px] font-[300] mb-3 flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={faPhone} className=" w-3" />
                  Schedule time with sales
                </Link>
              </li>
              <li>
                <ButtonDefault
                  fullWidth
                  buttonType="primary-outline"
                  className="text-white text-[11px] py-2 max-w-[200px] rounded-md mb-[10px]"
                >
                  Login
                </ButtonDefault>
              </li>
              <li>
                <ButtonDefault
                  fullWidth
                  buttonType="primary"
                  className="text-primary-text-color text-[11px] py-2 max-w-[200px] rounded-md !shadow-none font-bold"
                >
                  Sign up
                </ButtonDefault>
              </li>
            </ul>
          </div>
        </div>
        <BottomBar />
      </footer>
    </div>
  );
}

export default Footer;
