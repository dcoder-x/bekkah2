import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import Typical from "react-typical";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white text-lg">We are </span>{" "}
            <span className=" mx-1 text-xl text-gradient2"> The Voice </span>
            <span className="text-white text-lg">From The Future</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Bekkah <br className="sm:block hidden" />{" "}
            <span className="text-gradient2">Artificial</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Intelligence
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] sm:max-w-[600px] mt-5`}>
          <Typical
            wrapper="p"
            steps={[
              `We are a Social Enterprise Tech company in Africa, 
              with the aim to utilize Artificial Intelligence, 
              data gathering and analysis, also technological advancement 
              to proffer solutions in form of services and also to aid tasks 
              automation in the lives of humans in a safe and efficient way 
              across the universe. With over 40years cumulative experience 
              in the tech space we offer nothing but the best.`,
              3000,
            ]}
            loop={1}
          />
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={robot}
          width={'300px'}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
