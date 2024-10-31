// import React from 'react'
import About_Us_Img from "../assets/About_us_.png";

const About = () => {
  return (
    <section className="pt-20 bg-main-bg-2">
      <div className="md:flex lg:flex-row flex-col-reverse">
        <div className="lg:w-1/4 md:w-2/4 md:w-full m-auto lg:justify-start">
          <img className="w-full h-auto" src={About_Us_Img} alt="About Us" />
        </div>
        <div className="lg:w-1/2 mx-8 mt-8 lg:mt-0">
          <h1 className="text-4xl sm:text-5xl m-2 text-main-sc-dark font-bold md:font-semibold">
            About <span className="text-main-sc-light">ACES</span>
          </h1>
          <p className="text-lg sm:text-2xl lg:w-4/5 my-8 text-justify lg:text-left text-main-sc-light">
            {"  ~ "} Welcome to ACES, the Association of Computer Engineering
            Students at MIT ADT University, where we foster innovation and
            excellence. <br />
            <br />
            {" ~ "} Join us to enhance your technical skills, collaborate with
            peers, and be part of a legacy that shapes the future of computer
            engineering.
          </p>
          <div className="flex flex-col md:flex-row my-5">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h1 className="text-4xl sm:text-5xl m-2 text-main-sc-dark font-bold md:font-semibold">
                Excellence
              </h1>
              <p className="text-xl sm:text-xl md:w-3/4 my-8 text-main-sc-light">
                Be part of a tradition of excellence and innovation in computer
                engineering.
              </p>
            </div>
            <div className="mb-8 md:mb-0">
              <h1 className="text-4xl sm:text-5xl m-2 text-main-sc-dark font-bold md:font-semibold">
                Impact
              </h1>
              <p className="text-xl sm:text-xl md:w-3/4 my-8 text-main-sc-light">
                Join ACES and make a lasting impact in the world of technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
