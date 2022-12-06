import React from "react";

const Button = ({ styles, text }) => (
  <button
    data-aos="fade-up"
    // data-aos-duration="3000"
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-white bg-blue-gradient2 rounded-[10px] outline-none ${styles}`}
  >
    {text}
  </button>
);

export default Button;
