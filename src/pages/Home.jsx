import React from "react";
import styles from "../style";
import {
  Billing,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "../components";
import Services from "../components/Services";

const Home = () => {
  return (
    <>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Services />
          <Billing />
          {/* <CardDeal /> */}
          <Testimonials />
          <Clients />
          <CTA />
        </div>
      </div>
    </>
  );
};

export default Home;
