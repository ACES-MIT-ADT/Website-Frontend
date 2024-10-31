import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Example = () => {
  return (
    <div className="flex h-[500px] justify-center bg-neutral-900 px-3 py-12">
      <FlyoutLink href="#" FlyoutContent={PricingContent}>
        Pricing
      </FlyoutLink>
    </div>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onClick={() => setOpen(!open)}
      // onMouseLeave={() => setOpen(!open)}
      className="relative w-fit h-fit"
    >
      {/* <a href={href} className="relative text-white"> */}
      {children}
      {/* <span /> */}
      {/* </a> */}
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-0 top-12 bg-main-black text-main-white mt-12"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            {/* <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/4 -translate-y-1/2 rotate-45 bg-main-black" /> */}
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingContent = () => {
  return (
    <div className="w-64 bg-main-black p-6 shadow-xl">
      <div className="mb-3 space-y-3">
        {/* <h3 className="font-semibold">For Individuals</h3> */}
        <a href="#" className="block text-sm hover:underline">
          Home
        </a>
        <a href="#" className="block text-sm hover:underline">
          Ideas
        </a>
      </div>
      <div className="mb-6 space-y-3">
        {/* <h3 className="font-semibold">For Companies</h3> */}
        <a href="#" className="block text-sm hover:underline">
          Event
        </a>
        <a href="#" className="block text-sm hover:underline">
          Leadership
        </a>
        {/* <a href="#" className="block text-sm hover:underline">
          Enterprise
        </a> */}
      </div>
      <button className="w-full rounded-lg border-2 border-main-white px-4 py-2 font-semibold transition-colors active:bg-neutral-950 active:text-white">
        Join Now
      </button>
    </div>
  );
};

export { Example, FlyoutLink, PricingContent };
