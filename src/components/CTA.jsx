import { Link } from "react-router-dom";
import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Reach out to us now</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lets's build the future together.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Link to={"/contact"}>
        <Button text={"Contact us"} styles={`mt-10 bg-gradient2`} />
      </Link>
    </div>
  </section>
);

export default CTA;
