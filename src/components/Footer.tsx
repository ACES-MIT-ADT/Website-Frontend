import React, { useState } from "react";
import ACESLogo from "../assets/logo-bg.png";
import {
  BsLinkedin,
  BsInstagram,
  BsWhatsapp,
  BsTwitterX,
} from "react-icons/bs";
import { Footer, HR } from "flowbite-react";
import { Model } from "../constants/Model";
import WIP from "../assets/work-in-progress.png";

const FooterPage = () => {
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
    <section className="bg-main-bg">
      <div className="flex flex-row mx-8 md:flex-row justify-between md:mx-24 items-center mb-8">
        <div className="mb-4 md:mb-0">
          <img
            src={ACESLogo}
            alt="ACES Logo"
            className="w-24 md:w-32 ml-0 md:ml-7"
          />
        </div>
        <div className="mb-4 md:mb-0">
          {/* Links */}
          <ul className="hidden sm:flex sm:gap-4 text-main-white sm:font-medium lg:gap-14 md:gap-10 sm:block">
            <li
              className="active:after:w-[20px] active:after:bg-main-sc-dark hover:text-main-sc-light cursor-pointer"
              // onClick={() => handleNavItemClick("Home")}
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
        <div className="flex gap-6 md:gap-8 md:mr-7">
          {/* social media */}
          <Footer.Icon
            href="https://www.instagram.com/aces_mitsoc?igsh=djY1YWN5dGdqN3Yz"
            target="_blank"
            icon={BsInstagram}
            theme={{ base: "clr" }}
          />
          <Footer.Icon
            href="https://www.linkedin.com/in/aces-mitsoc-6580431a2/"
            target="_blank"
            icon={BsLinkedin}
            theme={{ base: "clr" }}
          />
          <Footer.Icon
            href="https://chat.whatsapp.com/LSoSVdHx0cz1FfvCh3eDqk"
            target="_blank"
            icon={BsWhatsapp}
            theme={{ base: "clr" }}
          />
          <Footer.Icon
            href="#"
            // target="_blank"
            icon={BsTwitterX}
            theme={{ base: "clr" }}
          />
        </div>
      </div>
      <hr className="w-[80%] m-auto border-main-sc-dark" />
      <div className="p-8 text-center">
        {/* copyright */}
        <Footer.Copyright href="#" by="ACES" year={2018} onClick={() => {}} />
      </div>

      {showModal && (
        <Modal onClose={handleCloseModal}>
          {activeNavItem === "Home" && <HomeInfo />}
          {activeNavItem === "Ideas" && <IdeasInfo />}
          {activeNavItem === "Event" && <EventInfo />}
          {activeNavItem === "Leadership" && <LeadershipInfo />}
        </Modal>
      )}
    </section>
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

export default FooterPage;
