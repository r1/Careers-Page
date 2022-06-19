import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div className="mx-auto mt-20 mb-[7rem] justify-center space-y-3 pt-4 text-center md:px-6 lg:mt-[11rem] lg:mb-[14.5rem] lg:space-y-6">
      <motion.h1
        key="logo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.8 }}
        className="text-4xl lg:text-7xl"
      >
        We make websites
        <br className="hidden lg:flex" /> that perform.
      </motion.h1>
      <motion.p
        key="logo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.9 }}
        className="text-md basiersquare-medium lg:text-xl"
      >
        Come join us and make the web better.
      </motion.p>
      <motion.a
      href="#jobs"
        key="logo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1 }}
        className="inline-flex items-center rounded-lg bg-[#332b54] py-3 px-4 text-white"
      >
        See open positions{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ml-2 h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </motion.a>
    </div>
  );
}
