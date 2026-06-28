import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Intro from "./pages/Intro";
import Praise from "./pages/Praise";
import Admiration from "./pages/Admiration";
import Ask from "./pages/Ask";
import No from "./pages/No";
import Yes from "./pages/Yes";

export const pages = {
  intro: "intro",
  praise: "praise",
  admiration: "admiration",
  ask: "ask",
  no: "no",
  yes: "yes",
};

const pageComponents = {
  [pages.intro]: Intro,
  [pages.praise]: Praise,
  [pages.admiration]: Admiration,
  [pages.ask]: Ask,
  [pages.no]: No,
  [pages.yes]: Yes,
};

export default function App() {
  const [page, setPage] = useState(pages.intro);

  const CurrentPage = pageComponents[page];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fff5f7] flex items-center justify-center p-4 font-normal leading-relaxed">

      <AnimatePresence mode="wait">
        <CurrentPage
          key={page}
          goTo={setPage}
          pages={pages}
        />
      </AnimatePresence>
    </div>
  );
}