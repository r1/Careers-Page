import { motion } from "framer-motion";

export default function Brands() {
  return (
    <div className="mx-auto max-w-7xl space-y-8 py-6">
      <div className="flex justify-center">
        <motion.h2
          key="logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.2 }}
          className="text-2xl"
        >
          NINE4 brings an invaluable experience to these brands
        </motion.h2>
      </div>
      <motion.div
        key="logo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.5 }}
        className="mx-auto flex max-w-7xl flex-row justify-start space-x-12 overflow-auto rounded-xl bg-[#332b54] px-3 lg:justify-center lg:space-x-16 xl:space-x-24"
      >
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          src="/svgs/google.svg"
          alt="google"
        />
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.1 }}
          src="/svgs/google.svg"
          alt="google"
        />
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.4 }}
          src="/svgs/google.svg"
          alt="google"
        />
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.7 }}
          src="/svgs/google.svg"
          alt="google"
        />
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 3 }}
          src="/svgs/google.svg"
          alt="google"
        />
      </motion.div>
    </div>
  );
}
