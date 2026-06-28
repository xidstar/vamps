import { motion } from "framer-motion";

export default function Page({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -35 }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
      className="relative z-10 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl max-w-md w-full p-8 flex flex-col items-center gap-5"
    >
      {children}
    </motion.div>
  );
}