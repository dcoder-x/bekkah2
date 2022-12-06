import React from "react";
import PageHeader from "../components/PageHeader";
import { bg, services as servicebg } from "../assets";
import styles from "../style";
import { services } from "../constants";
import { Icon } from "@iconify/react";

const Services = () => {
  return (
    <main id="services">
      <PageHeader bgImage={servicebg} pageTitle={"Services"} />
      <section
        className={`services align-middle justify-center bg-offwhite py-10 w-full flex-col ${styles.flexCenter} `}
      >
        <h1 className={`text-black text-3xl font-poppins font-semibold `}>
          Our Services
        </h1>
        <p className={` w-3/4 text-black font-light sm:w-1/3 text-center font-poppins  text-xs my-1`}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
        <div className={`services-list ${styles.flexCenter} w-full lg:w-2/3 flex-col sm:flex-row justify-between flex-wrap`}>
            {
                services.map((service,i)=>{
                    return(
                        <div key={i} data-aos={i%2?'fade-left':'fade-right'} className={` font-poppins text-black  sm:w-2/5 w-4/5 p-4 my-6 mx-1  bg-white `}>
                        <Icon icon={service.icon} width={50} color={'#0085FF'}/>
                        <p className="title font-bold my-2">
                            {
                                service.title
                            }
                        </p>
                        <p>
                            {
                                service.content
                            }
                        </p>
                        </div>
                    )
                })
            }
        </div>
      </section>
    </main>
  );
};

export default Services;
