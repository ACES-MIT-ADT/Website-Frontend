// import { Button } from "flowbite-react";
import { useState } from "react";
import ContactImg from "../assets/contact.png";
import { ContactPost } from "../service/API";
// import { Textarea } from "flowbite-react";

const Contact = () => {
  const [nameinp, setname] = useState("");
  const [emailinp, setemail] = useState("");
  const [msginp, setmsg] = useState("");

  const BtnSend = () => {
    if (nameinp && emailinp && msginp) {
      ContactPost({
        Name: nameinp,
        Email: emailinp,
        Message: msginp,
      }).then((res) => console.log(res));
      alert("Message Send Successfully !!!");
      setname("");
      setemail("");
      setmsg("");
    }
  };

  return (
    <section className="bg-main-bg-2 py-12">
      <div className="md:flex items-center">
        <div className="md:w-1/2 md:m-24 m-8">
          <h1 className="text-2xl text-main-sc-light font-bold uppercase mb-4">
            Contact us
          </h1>
          <h1 className="text-5xl font-semibold text-main-sc-dark mb-4">
            Get in touch today
          </h1>
          <p className="text-xl font-normal text-main-sc-light mb-6 md:w-[80%]">
            Dive into innovation and excellence with ACES. Connect with us now
            and unlock opportunities that will transform your academic and
            professional journey. Don’t miss out—reach out and be
            part of our legacy!
          </p>
          <div className="block md:w-[80%]">
            <input
              type="text"
              value={nameinp}
              onChange={(e) => setname(e.target.value)}
              className="w-full my-4 rounded-lg py-3 px-4 text-main-black"
              placeholder="Name"
            />
            <input
              type="email"
              value={emailinp}
              onChange={(e) => setemail(e.target.value)}
              className="w-full my-4 rounded-lg py-3 px-4 text-main-black"
              placeholder="Email"
            />
            <textarea
              id="message"
              value={msginp}
              onChange={(e) => setmsg(e.target.value)}
              className="w-full mt-2 min-h-24 rounded-lg py-3 px-4 text-main-black max-h-72"
              placeholder="Please Type Your Message Here..."
            ></textarea>
          </div>
          <button
            onClick={BtnSend}
            className="mt-8 bg-main-sc-dark text-white py-3 px-6 rounded-lg active:bg-main-sc-light active:text-main-black"
          >
            Send Message
          </button>
        </div>
        <div className="md:w-1/2 md:flex md:items-center md:justify-center mt-8 md:mt-0">
          <img
            src={ContactImg}
            alt="Contact Us"
            className="w-full h-auto md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
