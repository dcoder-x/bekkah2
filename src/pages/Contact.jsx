import { Icon } from "@iconify/react";
import React from "react";
import { bg, contact } from "../assets";
import Button from "../components/Button";
import PageHeader from "../components/PageHeader";
import { contacts } from "../constants";
import styles from "../style";
import '../styles/contact.css'


const Contact = () => {
  return (
    <main id="contact">
      <PageHeader bgImage={contact} pageTitle={"Contact Us"} />
      <section
        className={`services align-middle justify-center bg-offwhite py-10 w-full flex-col ${styles.flexCenter} `}
      >
        <div
          className={`contacts-list ${styles.flexCenter} w-full lg:w-2/3 flex-col sm:flex-row justify-between flex-wrap`}
        >
          {contacts.map((contact, i) => {
            return (
              <div
                key={i}
                className={` font-poppins text-black  sm:w-1/4 w-4/5 p-4 my-6 mx-1  bg-white `}
              >
                <Icon icon={contact.icon} width={50} color={"#0085FF"} />
                <p className="title font-bold my-2">{contact.title}</p>
                <p>{contact.contact}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section className={``}>
        <h1 className="md:text-4xl text-lg my-5 font-bold text-white text-center mt-10">
            Contact Us Today
        </h1>
        <div class="contact">
          <div class="contact-banner">
          </div>
          <div class="contact-form">
            <form>
              <label for="first-name">First name</label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                placeholder="First Name"
              />
              <label for="surname">Surname name</label>
              <input
                type="text"
                name="surname"
                id="surname"
                placeholder="Surname"
              />
              {/* <label for="full-name">User Id</label>
              <input
                type="text"
                name="userid"
                id="userId"
                placeholder="User ID"
              /> */}
              <label for="e-name">E-mail</label>
              <input
                type="email"
                name="e-mail"
                id="e-mail"
                placeholder="e-mail address"
              />
              <label for="full-name">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
              />
              <label for="message">Message</label>
              <input
                type="text"
                name="message"
                id="message"
                placeholder="Enter message..."
              />
              <input type="submit" className="bg-blue-gradient2" value="Submit" id="send-btn" />
            </form>
          </div>
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
          {"Lets get to work"}
        </p>
        <p className=" my-2 text-white flex font-poppins font-extrabold text-base">
          Bekkah <p className="text-gradient2 ml-1">AI</p>
        </p>
        <Button styles={'mt-5'} text={'contact us'}/>
      </div>
    </main>
  );
};

export default Contact;
