"use client";
import { IconButton } from "@material-tailwind/react";
import React from "react";

function SliderButton({
  handleClick,
}: {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <IconButton
      placeholder={""}
      variant="text"
      color="white"
      size="lg"
      onClick={handleClick}
      className="!absolute top-2/4 left-4 -translate-y-2/4"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        />
      </svg>
    </IconButton>
  );
}

export default SliderButton;
