// import React from 'react'
import HeaderBg from "../assets/header-bg.jpg";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Button, Carousel } from "flowbite-react";

const Header = () => {
  return (
    <section
      className="bg-cover bg-center h-auto h-screen realtive "
      style={{ backgroundImage: `url(${HeaderBg})` }}
    >
      <Carousel indicators={false}>
        <div className="bg-gradient-to-b from-transparent to-main-black h-full">
          <div className="flex justify-between items-center h-full">
            <div className="">
              {" "}
              {/* // ms-6 p-3 rounded border-2 bg-main-sc-light  */}
              {/* <FaChevronLeft /> */}
            </div>
            <div className="absolute md:left-64 md:bottom-44 bottom-24 left-20">
              {/* Text */}
              <h1 className="text-5xl mb-8 text-main-white md:text-6xl ">
                Handover Ceremony
              </h1>
              <p className="md:text-xl text-main-white text-md max-w-[95%]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                {/* <br /> */}
                Molestiae perspiciatis molestias dolore, illum voluptatum
              </p>
              {/* <button className="bg-main-sc-dark px-3 py-1 text-main-white mt-4 rounded">
                Check More
              </button> */}
              <Button className="bg-main-sc-dark px-3 py-1 text-main-white mt-4 ">
                Check More
              </Button>
            </div>
            <div className="">{/* <FaChevronRight /> */}</div>
          </div>
        </div>

        {/* <div className="bg-gradient-to-b from-transparent to-main-black h-full">
          <div className="flex justify-between items-center h-full">
            <div className="">
              {" "}
            </div>
            <div className="absolute left-64 bottom-44">
              <h1 className="text-6xl text-main-white">Event 2</h1>
              <h1 className="text-6xl text-main-white">Club Catalyst</h1>
              <Button className="bg-main-sc-dark px-3 py-1 text-main-white mt-4">
                Check More
              </Button>
            </div>
            <div className=""></div>
          </div>
        </div> */}
      </Carousel>
    </section>
  );
};

export default Header;
