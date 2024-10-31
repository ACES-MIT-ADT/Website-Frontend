import { useState } from "react";
import LogoWhite from "../assets/logo-bg.png";
import { MotionConfig, motion } from "framer-motion";
import { FlyoutLink, PricingContent } from "./tabs";
import WIP from "../assets/work-in-progress.png";

const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <nav
      className="z-50 bg-main-black-semi backdrop-blur flex mt-8 max-w-[75%] md:max-w-[70%] sm:max-w-[60%] md:mx-auto sm:mx-auto sm:py-4 mb-2 rounded justify-between items-center mx-auto
    "
    >
      <div className="text-main-white">
        <a href="/">
          <img className="size-12 w-16 ml-7" src={LogoWhite} alt="" />
        </a>
      </div>
      <div className="">
        <ul className="hidden sm:flex sm:gap-4 text-main-white sm:font-medium lg:gap-14 md:gap-10 sm:block">
          <li
            className="active:after:w-[20px] active:after:bg-main-sc-dark hover:text-main-sc-light cursor-pointer"
            // onClick={() => }
          >
            Home
          </li>
          <li
            className="hover:text-main-sc-light cursor-pointer"
            onClick={() => handleNavItemClick("Ideas")}
          >
            Ideas
          </li>
          <li
            className="hover:text-main-sc-light cursor-pointer"
            onClick={() => handleNavItemClick("Event")}
          >
            Event
          </li>
          <li
            className="hover:text-main-sc-light cursor-pointer"
            onClick={() => handleNavItemClick("Leadership")}
          >
            Leadership
          </li>
        </ul>
      </div>
      <button className="btn btn-outline hidden p-2 rounded mr-6 px-7 sm:block hover:bg-main-sc-dark hover:text-main-white ">
        Join Now
      </button>
      <div className="block text-main-white mr-2 sm:hidden">
        <FlyoutLink href="" FlyoutContent={PricingContent}>
          <AnimatedHamburgerButton />
        </FlyoutLink>
      </div>

      {showModal && (
        <Modal onClose={handleCloseModal}>
          {/* {activeNavItem === "Home" && <HomeInfo />} */}
          {activeNavItem === "Ideas" && <IdeasInfo />}
          {activeNavItem === "Event" && <EventInfo />}
          {activeNavItem === "Leadership" && <LeadershipInfo />}
        </Modal>
      )}
    </nav>
  );
};

const Modal = ({ onClose, children }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center"
      onClick={onClose}
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="popup-modal"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-4 md:p-5 text-center">
            <center>
              <img src={WIP} width={120} className="mb-10" />
            </center>
            {/* <svg
              className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg> */}
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Work in Progress You Can Visit Other Pages We Will Notify You When
              the Page is Ready.
            </h3>
            <button
              data-modal-hide="popup-modal"
              type="button"
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
            >
              Yes, I'm sure
            </button>
            <button
              data-modal-hide="popup-modal"
              type="button"
              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomeInfo = () => {
  return <div>Home info</div>;
};

const IdeasInfo = () => {
  return <div>Ideas info</div>;
};

const EventInfo = () => {
  return <div>Event info</div>;
};

const LeadershipInfo = () => {
  return <div>Leadership info</div>;
};

const AnimatedHamburgerButton = () => {
  const [active, setActive] = useState(false);
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => setActive((pv) => !pv)}
        className="relative h-20 w-20 rounded-full bg-white/0 transition-colors hover:bg-white/20"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-1 w-3.5 bg-white"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-1 w-5 bg-white"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-1 w-3.5 bg-white"
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 10px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};

export default Navbar;
