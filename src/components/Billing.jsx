import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Here are some of <br className="sm:block hidden" /> our own Projects
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        At BekkahAI we don't only help people make their dreams a reality we
        also have projects either being worked on or completed. Here are a few
        of them :
      </p>
      <ul className={`text-white p-3 ${styles.paragraph}`}>
        <li className=" list-decimal">
            Cystads
        </li>
        <li className=" list-decimal">
            Preyes
        </li>
        <li className=" list-decimal">
            Skillpay
        </li>
      </ul>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <Button text={'Learn more'} />
      </div>
    </div>
  </section>
);

export default Billing;
