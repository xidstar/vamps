import { motion } from "framer-motion";
import catDance from "/cat-dance.gif";
import Page from "../components/Page";
import Button from "../components/Button";

export default function Yes({ goTo, pages }) {
  return (
    <Page>
      <motion.div
        initial={{ scale: 0 }}
        animate={{
            scale: [0, 1.2, 1],
            rotate: [0, 10, -10, 0],
        }}
        transition={{ duration: 0.8 }}
        className="w-56 h-56 overflow-hidden rounded-2xl shadow-lg"
        >
            <img
                src={catDance}
                alt="Cat dancing"
                className="w-full h-full object-cover object-center scale-150"
            />
        </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl font-bold text-pink-500 text-center"
      >
        AAAAAAA SIM!!! ❤️🎉
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center text-gray-700 text-lg"
      >
        You just made my whole day, meu amor 🥹
        <br />
        Officially:
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7 }}
        className="bg-pink-50 rounded-2xl p-6 text-center w-full"
      >
        <p className="text-2xl font-bold text-pink-500">
          💖 Relationship Status: ACTIVE 💖
        </p>

        <p className="mt-3 text-gray-700">
          Now begins the era of:
        </p>

        <div className="mt-3 space-y-2 text-gray-700">
          <p>🌿 Nature dates</p>
          <p>⚽ Football arguments (friendly ones 😌)</p>
          <p>🤣 Endless hearty laughs</p>
          <p>🎶 Passenger princess DJ playlists on repeat</p>
          <p> ❤️ Amazing adventures</p>
        </div>
      </motion.div>

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="text-5xl"
      >
        💖 💖 💖
      </motion.div>

      <Button onClick={() => goTo(pages.intro)}>
        Replay Story 🔁
      </Button>
    </Page>
  );
}