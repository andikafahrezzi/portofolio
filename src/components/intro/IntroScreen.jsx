import { useEffect, useState } from "react";

const texts = [
  "ppdb.tkfajarnusantara.sch.id",
  "e-learning.pkbmctk.id",
  "erp.company.internal",
];

export default function IntroScreen({ onEnter }) {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[textIndex];

    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setCharIndex((c) => c + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }

    // selesai ngetik → jeda → ganti text
    const pause = setTimeout(() => {
      setCharIndex(0);
      setTextIndex((i) => (i + 1) % texts.length);
    }, 1500);

    return () => clearTimeout(pause);
  }, [charIndex, textIndex]);

  return (
    <section className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Pahrul Maji
      </h1>

      <p className="text-xl text-gray-400 mb-6">
        Software Engineer · Web Developer
      </p>

      <div className="font-mono text-green-400 h-6 mb-10">
        {texts[textIndex].slice(0, charIndex)}
        <span className="animate-pulse">|</span>
      </div>

      <button
        onClick={onEnter}
        className="px-8 py-3 border border-white hover:bg-white hover:text-black transition rounded-full"
      >
        Masuk ke Portfolio
      </button>
    </section>
  );
}
