import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUserCircle,
  FaLeaf,
  FaBullhorn,
  FaSmile,
  FaDatabase,
  FaBars,
  FaPlaneDeparture,
  FaRocket,
  FaLaptopCode,
  FaEnvelopeOpen,
  FaAd,
  FaBug,
  FaCamera,
  FaChartPie,
  FaRocketchat,
} from "react-icons/fa";
import { FetchRes } from "../service/API";

const Timeline = () => {
  const [timelineItems, setTimelineItems] = useState([
    {
      year: 2022,
      Title: "Coding the Future",
      Description: "This is the description for coding the future",
    },
  ]);
  const TimelineIcons = [
    <FaUserCircle />,
    <FaLeaf />,
    <FaBullhorn />,
    <FaSmile />,
    <FaDatabase />,
    <FaBars />,
    <FaPlaneDeparture />,
    <FaRocket />,
    <FaLaptopCode />,
    <FaEnvelopeOpen />,
    <FaAd />,
    <FaBug />,
    <FaCamera />,
    <FaChartPie />,
    <FaRocketchat />,
  ];

  useEffect(() => {
    const FData = async () => {
      try {
        const response = await FetchRes("timelines");
        // console.log(response.data);
        setTimelineItems(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    FData();
  }, []);

  const IconAssign = () => {
    return TimelineIcons[Math.floor(Math.random() * TimelineIcons.length)];
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, transition: { duration: 0.5 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-main-bg">
      <div className="md:mt-24 mt-12">
        <div className="text-center">
          <h1 className="text-main-sc-dark text-4xl sm:text-5xl font-bold md:font-semibold mb-8 md:mb-12 w-[90%] md:w-[80%] m-auto">
            The Story Of <span className="text-main-sc-light">ACES</span>
          </h1>
          <p className="text-main-sc-light text-lg sm:text-2xl md:w-1/2 w-[90%] m-auto text-justify">
            Mark your calendars and don't miss out! Our past events are more
            than just history—they're milestones in the legacy of innovation
            with ACES!
          </p>
        </div>
        <div className="hidden md:block mt-12 mb-72">
          {/* Timeline Hover for desktop */}
          <div className="relative w-full px-8">
            <div className="flex justify-between items-center w-full px-8 ms-5">
              {/* <span className="text-lg font-bold">2018</span> */}
              <span className="text-lg font-bold">2019</span>
              <span className="text-lg font-bold">2020</span>
              {/* <span className="text-lg font-bold">2021</span> */}
              <span className="text-lg font-bold">2022</span>
              <span className="text-lg font-bold">2023</span>
              <span className="text-lg font-bold">2024</span>
            </div>

            <div className="flex justify-around items-center w-full px-14 pt-7 ms-5">
              <AnimatePresence>
                {timelineItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="timeline-item flex flex-row items-center justify-center relative"
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    transition={{ delay: index * 0.2 }}
                  >
                    {/* Timeline Line */}
                    <div
                      className="timeline-line absolute top-1/2 left-[-30%] transform -translate-x-1/2 -translate-y-1/2 bg-gray-300 transition-all duration-300"
                      style={{ width: 3, height: "100%" }} // Initial height set to 40%
                    ></div>

                    {/* Timeline Dot */}
                    <div className="timeline-dot top-14 absolute top-[100%] left-[-30%] transform -translate-x-1/2 translate-y-1/2">
                      {IconAssign()}
                    </div>

                    {/* Timeline Content */}
                    <div className="timeline-content mt-8 text-lg font-medium absolute p-2 bg-main transform -translate-x-1/2 translate-y-1/3 text-center left-[-30%]">
                      <div
                        className="relative z-10 opacity-0 transition-opacity duration-300 hover:opacity-100 pt-20"
                        style={{ width: "200%", left: -40 }} // Extends the content beyond the relative parent
                      >
                        <h3 className="text-lg font-bold mb-2 text-main-sc-dark">
                          {item["Title"]}
                        </h3>
                        <p className="text-sm text-center">
                          {item["Description"]}
                        </p>
                      </div>
                    </div>

                    {/* Motion div to show | | | on hover */}
                    <motion.div
                      className="hidden hover:timeline-line-hover relative lg:block"
                      whileHover={{ height: 72 }} // Extends the line height to 50% on hover
                      transition={{ duration: 0.3 }} // Smooth transition duration
                    >
                      | | | | | | | | |
                    </motion.div>
                    <motion.div
                      className="hidden hover:timeline-line-hover relative md:block lg:hidden"
                      whileHover={{ height: "0%" }} // Extends the line height to 50% on hover
                      transition={{ duration: 0.3 }} // Smooth transition duration
                    >
                      | | | |
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
        <div className="block md:hidden my-24 text-center text-lg font-bold">
          {/* Timeline Hover mobile */}
          Turn ON Desktop Mode For Timeline
        </div>
      </div>
    </section>
  );
};

export default Timeline;
