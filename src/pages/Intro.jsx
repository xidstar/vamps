import { motion } from "framer-motion";

import Page from "../components/Page";
import Button from "../components/Button";

export default function Intro({ goTo, pages }) {
  return (
    <Page>
      <motion.span
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 12,
        }}
        className="text-[5rem]"
      >
        🇧🇷❤️
      </motion.span>

      <h1 className="text-4xl font-bold text-pink-500 text-center">
        Oi, Vamps...
      </h1>

      <p className="text-2xl text-gray-700 text-center font-bold">
        E aí, tudo bem?
      </p>

      <p className="text-gray-600 text-center">
        Please wait while I verify a few things...
      </p>

      {/* Loading Bar */}
      <div className="w-full h-3 rounded-full overflow-hidden bg-pink-100">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: 2.2,
            ease: "easeInOut",
          }}
          className="h-full rounded-full bg-pink-500"
        />
      </div>

      {/* Checklist */}
      <div className="w-full rounded-2xl bg-pink-50 p-5 space-y-3 text-gray-700 shadow-inner">
        <motion.p
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          ✅ Loves nature 🌿
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          ✅ Certified pão de queijo addict 🧀
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
        >
          ✅ Football lover ⚽
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.6 }}
        >
          ✅ Afrobeats enthusiast 🎶
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2 }}
        >
          ✅ Makes my life a whole lot happier ❤️
        </motion.p>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.3 }}
        className="italic text-pink-500 text-center text-lg font-medium"
      >
        Status: Perfeitinha. 😌
      </motion.p>

      <Button onClick={() => goTo(pages.praise)}>
        Let's go! →
      </Button>
    </Page>
  );
}