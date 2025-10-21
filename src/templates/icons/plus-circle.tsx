import { FC } from "react";

const Icon: FC<any> = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="9" r="9" fill="#6AAA9E" />
      <path d="M9 14V4" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M4 9L14 9"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Icon;
