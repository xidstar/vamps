import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Page from "../components/Page";
import Button from "../components/Button";

const noMessages = [
  "Não 🙈",
  "Eyyy! 👀",
  "Escolha suspeita 🤨",
  "Are you sure?",
  "Esse botão tá com defeito 😂",
  "Você clicou errado 😌",
];

const teasingMessages = [
  "",
  "Hmm... are you sure? 🤔",
  "Interesting choice... 😂",
  "The button has other ideas.",
  "VAR is reviewing your decision... ⚽",
  "Brazil has officially recommended 'SIM'. 🇧🇷",
  "I think we've narrowed it down to one option. 😏",
];

export default function Ask({ goTo, pages }) {
  const [noAttempts, setNoAttempts] = useState(0);
  const [showHearts, setShowHearts] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const randomPosition = () => ({
    x: Math.random() * 180 - 90,
    y: Math.random() * 90 - 45,
  });

  const runAway = () => {
    if (showHearts) return;

    if (noAttempts < noMessages.length - 1) {
      setNoAttempts((prev) => prev + 1);
      setPosition(randomPosition());
      return;
    }

    setShowHearts(true);

    setTimeout(() => {
      goTo(pages.no);
    }, 1800);
  };

  return (
    <Page>
      {/* Background Heart */}
      <motion.div
        className="absolute text-[11rem] text-pink-200 -z-10"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
      >
        ❤️
      </motion.div>

      {/* Envelope */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
        }}
        className="text-6xl"
      >
        💌
      </motion.div>

      <h2 className="text-4xl font-bold text-pink-500 text-center">
        Última Pergunta...
      </h2>

      <div className="space-y-5 text-center text-gray-700 leading-relaxed">
        <p>
          Before you answer...
        </p>

        <p>
          Thank you for every conversation,
          every laugh,
          every football debate,
          every "boa noite",
          and every moment we've shared.
        </p>

        <p>
          Whether we're talking about Brazil,
          solving random math problems,
          eating way too much coxinha,
          or just our regular late night convos...
        </p>

        <motion.p
          animate={{
            scale: [1, 1.03, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
          }}
          className="text-xl font-semibold text-pink-500"
        >
          I'd love to keep making those memories with you.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-pink-50 rounded-2xl p-6 w-full text-center"
      >
        <p className="text-lg text-gray-700">
          Então...
        </p>
        <p className="text-lg text-gray-700">
          Yasmim "Yaya" Maria Figueiredo,
        </p>

        <motion.h1
          animate={{
            scale: [1, 1.04, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="text-4xl font-bold text-pink-500 mt-3"
        >
          Will you be my girlfriend? 🥹
        </motion.h1>
      </motion.div>

      <AnimatePresence mode="wait">
        {noAttempts > 0 && !showHearts && (
          <motion.p
            key={noAttempts}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-pink-500 font-medium"
          >
            {teasingMessages[noAttempts]}
          </motion.p>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showHearts && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{
              scale: [0, 1.3, 1],
              rotate: [0, 12, -12, 0],
            }}
            transition={{
              duration: 0.8,
            }}
            className="text-5xl"
          >
            💖 💖 💖 💖 💖
          </motion.div>
        )}
      </AnimatePresence>

      {!showHearts && (
        <div className="relative w-full h-28 mt-2">
          <div className="absolute left-0 top-1/2 -translate-y-1/2">
            <Button onClick={() => goTo(pages.yes)}>
              SIM ❤️
            </Button>
          </div>

          <motion.div
            className="absolute right-0 top-1/2 -translate-y-1/2"
            animate={position}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 22,
            }}
            onMouseEnter={runAway}
          >
            <Button
              variant="secondary"
              onClick={runAway}
            >
              {noMessages[noAttempts]}
            </Button>
          </motion.div>
        </div>
      )}
    </Page>
  );
}