import { motion } from "framer-motion";

import Page from "../components/Page";
import Button from "../components/Button";

const questions = [
  "🌿 Would you rather spend a day in nature than a shopping mall?",
  "🦝 If a raccoon stole your pão de queijo, would you fight it or just accept defeat?",
  "🎶 Can you survive an Asake song without at least moving a little?",
  "💃 When are you gonna teach me all those dance moves anyway, crazy?",
];

export default function Praise({ goTo, pages }) {
  return (
    <Page>
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 180 }}
        className="text-[5rem]"
      >
        🌿
      </motion.span>

      <h2 className="text-3xl font-bold text-pink-500 text-center">
        Compatibility Check
      </h2>

      <p className="text-gray-700 text-center">
        Running a quick analysis based on observed behavior...
      </p>

      <div className="w-full space-y-4 text-gray-700">
        {questions.map((q, i) => (
          <motion.div
            key={q}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.25 }}
            className="bg-pink-50 rounded-xl p-3"
          >
            {q}
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="text-center italic text-pink-500 font-medium"
      >
        Verdict: You're a nerd, but kinda cool.
      </motion.p>

      <div className="flex gap-4">
        <Button variant="secondary" onClick={() => goTo(pages.intro)}>
          Back
        </Button>

        <Button onClick={() => goTo(pages.admiration)}>
          Continue →
        </Button>
      </div>
    </Page>
  );
}
