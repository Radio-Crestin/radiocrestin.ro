import React from "react";

function Heart({ color }: { color: "red" | "white" }) {
  const isRed = color === "red";
  const pathData = isRed
    ? "M11 19.5708L9.67083 18.3608C4.95 14.08 1.83333 11.2567 1.83333 7.79167C1.83333 4.96833 4.05167 2.75 6.875 2.75C8.47 2.75 10.0008 3.4925 11 4.66583C11.9992 3.4925 13.53 2.75 15.125 2.75C17.9483 2.75 20.1667 4.96833 20.1667 7.79167C20.1667 11.2567 17.05 14.08 12.3292 18.37L11 19.5708Z"
    : "M15.125 2.75C13.53 2.75 11.9992 3.4925 11 4.66583C10.0008 3.4925 8.47 2.75 6.875 2.75C4.05167 2.75 1.83333 4.96833 1.83333 7.79167C1.83333 11.2567 4.95 14.08 9.67083 18.37L11 19.5708L12.3292 18.3608C17.05 14.08 20.1667 11.2567 20.1667 7.79167C20.1667 4.96833 17.9483 2.75 15.125 2.75ZM11.0917 17.0042L11 17.0958L10.9083 17.0042C6.545 13.0533 3.66667 10.4408 3.66667 7.79167C3.66667 5.95833 5.04167 4.58333 6.875 4.58333C8.28667 4.58333 9.66167 5.49083 10.1475 6.74667H11.8617C12.3383 5.49083 13.7133 4.58333 15.125 4.58333C16.9583 4.58333 18.3333 5.95833 18.3333 7.79167C18.3333 10.4408 15.455 13.0533 11.0917 17.0042Z";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
    >
      <g clipPath="url(#clip0_329_398)">
        <path d={pathData} fill={isRed ? "#CF1919" : "black"} />
      </g>
      <defs>
        <clipPath id="clip0_329_398">
          <rect width="22" height="22" fill={isRed ? "none" : "white"} />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Heart;
