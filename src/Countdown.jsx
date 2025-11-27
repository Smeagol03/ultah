import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Countdown({ onFinish }) {
  const target = new Date("2025-11-30T00:00:00").getTime();
  const [left, setLeft] = useState(target - Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const distance = target - now;
      setLeft(distance);

      if (distance <= 0) {
        clearInterval(timer);
        setLeft(0);
        onFinish();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(left / (1000 * 60 * 60 * 24));
  const hours = Math.floor((left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((left % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((left % (1000 * 60)) / 1000);

  return (
    <div className="min-h-screen flex flex-col px-5 items-center justify-center text-white bg-linear-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#111111] relative overflow-hidden">
      {/* Glow background circle */}
      <div className="absolute w-[500px] h-[500px] bg-purple-700/20 blur-[120px] rounded-full -z-10"></div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-4xl font-semibold tracking-wide mb-10 text-gray-200"
      >
        Something Special is Coming...
      </motion.h1>

      {/* Countdown Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="flex gap-4 sm:gap-6"
      >
        <TimeBox label="Days" value={days} />
        <TimeBox label="Hours" value={hours} />
        <TimeBox label="Minutes" value={minutes} />
        <TimeBox label="Seconds" value={seconds} />
      </motion.div>
    </div>
  );
}

function TimeBox({ label, value }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-3xl sm:text-4xl font-bold border border-white/10 shadow-xl">
        {value < 10 ? "0" + value : value}
      </div>
      <p className="mt-2 text-sm tracking-wide text-gray-300">{label}</p>
    </div>
  );
}
