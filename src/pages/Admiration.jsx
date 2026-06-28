import { motion } from "framer-motion";

import Page from "../components/Page";
import Button from "../components/Button";

const stats = [
  {
    label: "Cuteness",
    value: 100,
    emoji: "😍",
  },
  {
    label: "Sweet beijos",
    value: 100,
    emoji: "💘",
  },
  {
    label: "Making Me Smile",
    value: 98,
    emoji: "😊",
  },
  {
    label: "Brazilian Snack Sharing",
    value: 76,
    emoji: "🥜",
    note: "Needs slight improvement 😏",
  },
];

export default function Admiration({ goTo, pages }) {
  return (
    <Page>
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 180,
        }}
        className="text-[5rem]"
      >
        📊
      </motion.span>

      <h2 className="text-3xl font-bold text-pink-500 text-center">
        Research Results
      </h2>

      <p className="text-gray-700 text-center">
        After conducting extensive research...
        <br />
        (why I keep mentioning "for research purposes" 😅)
      </p>

      <div className="w-full space-y-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.25,
            }}
          >
            <div className="flex justify-between mb-2">
              <span className="font-medium text-gray-700">
                {stat.emoji} {stat.label}
              </span>

              <span className="font-semibold text-pink-500">
                {stat.value}%
              </span>
            </div>

            <div className="h-3 rounded-full bg-pink-100 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${stat.value}%` }}
                transition={{
                  duration: 1,
                  delay: index * 0.25 + 0.3,
                }}
                className="h-full rounded-full bg-pink-500"
              />
            </div>

            {stat.note && (
              <p className="mt-2 text-sm italic text-gray-500">
                {stat.note}
              </p>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.4,
        }}
        className="bg-pink-50 rounded-2xl p-5 text-center"
      >
        <p className="text-gray-700 leading-relaxed">
          Every conversation...
          <br />
          Every laugh...
          <br />
          Every car ride dj session...
          <br />
          Every future adventure we've talked about...
        </p>

        <p className="mt-5 text-xl font-semibold text-pink-500">
          keeps leading me to the exact same conclusion...
        </p>

        <motion.p
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
          }}
          className="mt-4 text-3xl font-bold text-pink-500"
        >
          Você é muito especial pra mim. ❤️
        </motion.p>
      </motion.div>

      <div className="flex gap-4">
        <Button
          variant="secondary"
          onClick={() => goTo(pages.praise)}
        >
          ← Back
        </Button>

        <Button
          onClick={() => goTo(pages.ask)}
        >
          Continue →
        </Button>
      </div>
    </Page>
  );
}