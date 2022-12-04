import { Icon } from "@iconify/react";
import { services } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={` w-2/3 flex justify-between align-middle flex-row p-1 rounded-[20px] ${styles.flexCenter} ${index !== services.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={` justify-self-start w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <Icon icon={icon} width={30} className="w-[50%] h-[50%]" color={'#0085FF'}/>
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      {/* <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p> */}
    </div>
  </div>
);

const Services = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        What we have <br className="sm:block hidden" /> to offer
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds
        of credit cards on the market.
      </p>

      <Button text={'Learn more'} styles={`mt-10 bg-gradient2`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {services.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Services;
