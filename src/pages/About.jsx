import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";
import { about, aboutus, bg } from "../assets";
import Button from "../components/Button";
import PageHeader from "../components/PageHeader";
import { coreValues } from "../constants";
import styles from "../style";

const About = () => {
  return (
    <main id="about">
      <PageHeader bgImage={aboutus} pageTitle={`About Us`} />
      <section
        className={`flex-col flex sm:flex-row w-full py-5 ${styles.flexCenter} `}
      >
        {/* <img src={about} className={`sm:w-1/2 w-full  sm:mb-5`} alt="" /> */}
        <div
          className={`flex-col w-full py-5 ${styles.flexCenter} text-white font-poppins w-full sm:w-6/7 text-center px-5 sm:p-10`}
        >
          <div className={``}>
            {/* <h1 className={`text-3xl font-normal sm:my-3`}>About</h1> */}
            <p
              className={`py-5 text-justify sm:text-center text-xs sm:text-lg font-extralight`}
            >
              We are a Social Enterprise Tech company in Africa, with the aim to
              utilize Artificial Intelligence, data gathering and analysis, also
              technological advancement to proffer solutions in form of services
              and also to aid tasks automation in the lives of humans in a safe
              and efficient way across the universe. Our goals are mainly fueled
              by the passion to serve and liberate humanity. We help companies
              and individuals achieve their Tech goals. We also have products
              with the focus of changing the world.
            </p>
          </div>
          <div
            className={` sm:text-left flex flex-col sm:flex-row justify-between my-5`}
          >
            <div className="my-10 sm:w-2/5 sm:my-0">
              <h1 className={`text-gradient2 text-xl font-normal sm:my-3`}>
                Our Mission
              </h1>
              <p className={`text-xs font-extralight ${styles.paragraph}`}>
                To be a leader in the African tech space especially artificial
                intelligence by automating the future of humanity through
                technology for an easy and safe life on this planet and beyond
              </p>
            </div>
            <div className="my-10 sm:w-2/5 sm:my-0">
              <h1 className={`text-gradient   text-xl font-normal sm:my-3`}>
                Our Vision
              </h1>
              <p className={`text-xs font-extralight ${styles.paragraph}`}>
                We make artificial intelligence become better and save to
                enhance the future living condition of humans and reduce the
                risks associated
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`flex-col flex bg-offwhite w-full py-10 ${styles.flexCenter} `}
      >
        <h1 className="text-2xl font-bold">Our Core Values</h1>
        <ul className=" w-5/6 sm:w-3/4 text-justify p-1 md:p-5 justify-between flex flex-row flex-wrap list-none">
          {coreValues.map((value, i) => {
            return (
              <div
                key={i}
                data-aos-offset="-1500"
                data-aos-duration="500"
                data-aos={i%2?'fade-left':'fade-right'}
                className={` rounded-sm font-poppins text-black  sm:w-2/5 w-4/5 p-4 my-6 mx-1  bg-white `}
              >
                <Icon icon={value.icon} width={50} color={"#0085FF"} />
                <p className=" text-bekkahblue title font-bold my-2 text-center">
                  {value.title}
                </p>
                <p className="text-xs">{value.content}</p>
              </div>
            );
          })}
        </ul>
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
          {"Lets get to work"}
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

export default About;
