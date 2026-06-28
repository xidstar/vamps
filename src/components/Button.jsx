import { motion } from "framer-motion";

export default function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
}) {
  const base =
    "px-6 py-3 rounded-full font-semibold transition-all duration-200 transform active:scale-95";

  const styles =
    variant === "primary"
      ? "bg-pink-500 hover:bg-pink-600 text-white shadow-md"
      : "bg-white border border-pink-400 text-pink-500 hover:bg-pink-100";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </motion.button>
  );
}