import React from "react";
import { Link } from "react-router-dom";
import { bg, partners } from "../assets";
import Button from "../components/Button";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import { partnersinfo } from "../constants";
import styles from "../style";
import "../styles/partners.css";

const Partners = () => {
  return (
    <main id="partners">
      <PageHeader bgImage={partners} pageTitle={"Contact Us"} />
      <section
        className={`partners align-middle justify-center py-10 w-full flex-col ${styles.flexCenter} `}
      >
        <h1>Partners</h1>
        <div
          className={` w-full contents sm:w-4/5 text-justify p-1 md:p-5 justify-between sm:flex flex-row flex-wrap list-none`}
        >
          {partnersinfo.map((partner, i) => {
            return (
              <div
                key={i}
                data-aos={i % 2 ? "fade-left" : "fade-right"}
                className={`  rounded-lg font-poppins text-black  sm:w-2/5 w-4/5 p-4 my-6 mx-1  bg-white `}
              >
                <div className={`w-full flex  pb-5 align-middle ${styles.flexCenter}`}>
                  <img src={partner.logo} className=' w-4/5' alt="" />
                </div>
                <div className="title font-bold my-2">{partner.name}</div>
                {/* <div className="icon">
                                    <img src={Icons.star} alt="" />
                                </div> */}
                <div className=" text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  iusto modi sed, expedita reiciendis cumque. Nostrum, vel, nemo
                  dolore, \ optio quae at tempora possimus et qui adipisci cum
                  eaque vero.
                </div>
                <a href={partner.website}>{partner.website}</a>
              </div>
            );
          })}
        </div>
      </section>
      <div
        className={` w-full lg:h-36 flex-col justify-center ${styles.flexCenter}`}
        style={{
          background: `linear-gradient(0deg,  rgba(0, 163, 255, 0.53), rgba(0, 163, 255, 0.53)), url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "50vh",
        }}
      >
        <p className=" bottom-0 text-white font-poppins font-bold text-xl sm:text-5xl">
          {"Become a partner"}
        </p>
        <p className=" my-2 text-white flex font-poppins font-extrabold text-base">
          Bekkah <p className="text-gradient2 ml-1">AI</p>
        </p>
        <Link to={"/contact"}>
          <Button text={"contact us"} styles={`mt-10 bg-gradient2`} />
        </Link>
      </div>
    </main>
  );
};

export default Partners;
