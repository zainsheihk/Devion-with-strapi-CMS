"use client";
import { ButtonType, IButton } from "@type/button";
import { Button } from "@material-tailwind/react";
import { twMerge } from "tailwind-merge";
import { variant } from "@material-tailwind/react/types/components/button";

export default function ButtonDefault({
  children,
  className,
  buttonType = "primary",
  ...rest
}: IButton) {
  const buttonStyle: Record<ButtonType, { style: string; variant: variant }> = {
    primary: {
      style:
        "bg-primary-color !shadow-md hover:!shadow-lg !shadow-[#FF817B66]  hover:!shadow-[#FF817B66] focus:!opacity-[0.85] focus:!shadow-none active:!opacity-[0.85] active:!shadow-none",
      variant: "filled",
    },
    secondary: {
      style:
        "bg-secondary-color !shadow-md hover:!shadow-lg !shadow-[#8032FF66]  hover:!shadow-[#8032FF66]  focus:!opacity-[0.85] focus:shadow-none active:!opacity-[0.85] active:!shadow-none",
      variant: "filled",
    },
    "primary-outline": {
      style:
        "border-primary-color text-primary-color hover:!text-white  hover:!bg-primary-color",
      variant: "outlined",
    },
  };

  return (
    <Button
      variant={buttonStyle[buttonType].variant}
      placeholder={""}
      {...rest}
      className={twMerge(
        `p-[9px_22px_9px_22px] capitalize text-[14px] rounded-[10px] !font-semibold`,
        buttonStyle[buttonType].style,
        className
      )}
    >
      {children}
    </Button>
  );
}
