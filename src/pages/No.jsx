import { motion } from "framer-motion";

import Page from "../components/Page";
import Button from "../components/Button";

export default function No({ goTo, pages }) {
  return (
    <Page>
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="text-[5rem]"
      >
        😤
      </motion.span>

      <h2 className="text-4xl font-bold text-pink-500 text-center">
        Hmm...
      </h2>

      <p className="text-lg text-gray-700 text-center">
        Interesting choice.
        <br />
        The VAR is currently reviewing your decision ⚽
      </p>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-5xl"
      >
        📺
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center text-gray-700"
      >
        After careful analysis...
      </motion.p>

      <motion.h3
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 }}
        className="text-2xl font-bold text-pink-500 text-center"
      >
        DECISION OVERTURNED
      </motion.h3>

      <p className="text-center text-gray-500 italic">
        “No” has been converted to “SIM” due to lack of supporting evidence 😌
      </p>

      <div className="flex gap-4">
        <Button onClick={() => goTo(pages.yes)}>
          Okay fine... SIM ❤️
        </Button>

        <Button variant="secondary" onClick={() => goTo(pages.ask)}>
          Reconsider 🤔
        </Button>
      </div>
    </Page>
  );
}
