import React from "react";
import styles from "../style";

const PageHeader = ({ pageTitle, bgImage }) => {
  return (
    <div
      className={` w-full lg:h-40 flex-col justify-center ${styles.flexCenter}`}
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.48)), url(${bgImage})`,
        backgroundSize:"cover",
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        height:"50vh",
      }}
    >
    <p className=" text-gradient2 font-poppins font-bold text-5xl">
        {pageTitle}
    </p>
      <p className=" my-2 text-white flex font-poppins font-extrabold text-base">
        Bekkah <p className="text-gradient2 ml-1">AI</p>
      </p>
    </div>
  );
};

export default PageHeader;
