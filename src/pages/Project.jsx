import React from "react";
import { Link } from "react-router-dom";
import { bg, contact, projectsbg } from "../assets";
import Button from "../components/Button";
import PageHeader from "../components/PageHeader";
import { projects } from "../constants";
import styles from "../style";
import "../styles/project.css";

const Projects = () => {
  return (
    <main id="projects">
      <PageHeader bgImage={projectsbg} pageTitle={"Projects"} />
      <div className="header">
        <div className="header-text">
          <p>Projects</p>
        </div>
        <div className="header-image">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            itaque at
          </p>
        </div>
      </div>
      {projects.map((project,i) => {
        return (
          <section className="project w-full p-0 sm:p-8 " data-aos={i%2?'fade-left':'fade-right'}>
            <div className=" w-full sm:w-2/3">
              <div className="title text-lg">{project.title}</div>
              <p className="desc w-full text-xs text-justify">{project.desc}</p>
            </div>

            <img src={project.img} className={`w-1/2 sm:w-1/4`} alt="project picture" />
          </section>
        );
      })}
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
          {"Have a project in mind?"}
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

export default Projects;
