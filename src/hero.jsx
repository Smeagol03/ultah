import React from 'react'
import { motion } from "motion/react"

const Hero = () => {
  const container = {
    hidden: { opacity: 0, scale: 0.98 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.15, delayChildren: 0.2 }
    }
  }
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }
  const fade = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  }
  const frameLeftTop = {
    hidden: { opacity: 0, x: -20, y: -20 },
    show: { opacity: 0.95, x: 0, y: 0, transition: { type: "spring", stiffness: 120, damping: 20 } }
  }
  const frameRightTop = {
    hidden: { opacity: 0, x: 20, y: -20 },
    show: { opacity: 0.95, x: 0, y: 0, transition: { type: "spring", stiffness: 120, damping: 20 } }
  }
  const frameLeftBottom = {
    hidden: { opacity: 0, x: -20, y: 20 },
    show: { opacity: 0.95, x: 0, y: 0, transition: { type: "spring", stiffness: 120, damping: 20 } }
  }
  const frameRightBottom = {
    hidden: { opacity: 0, x: 20, y: 20 },
    show: { opacity: 0.95, x: 0, y: 0, transition: { type: "spring", stiffness: 120, damping: 20 } }
  }

  return (
    <section id='hero' className="relative overflow-hidden min-h-screen flex items-center justify-center bg-linear-to-br from-pink-300 via-purple-300 to-indigo-400">
      <motion.div
        className="relative z-30 text-center text-white px-4"
        variants={container}
        initial="hidden"
        animate="show"
        style={{ willChange: 'transform, opacity' }}
      >
        <motion.h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg" variants={fadeUp}>
          Selamat Ulang Tahun!
        </motion.h1>
        <motion.p className="text-xl md:text-2xl font-medium drop-shadow-md" variants={fadeUp}>
          Semoga panjang umur, sehat selalu, dan bahagia selalu.
        </motion.p>
        <div className="flex justify-center gap-6 mt-6 text-3xl" aria-label="Ikon dekoratif">
          <motion.i className="fas fa-birthday-cake text-yellow-300 drop-shadow" variants={fade} />
          <motion.i className="fas fa-star text-yellow-200 drop-shadow" variants={fade} />
          <motion.i className="fas fa-gift text-pink-200 drop-shadow" variants={fade} />
          <motion.i className="fas fa-music text-teal-200 drop-shadow" variants={fade} />
        </div>
      </motion.div>
      <motion.button id='open-invitation'
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white bg-pink-500 hover:bg-pink-600 active:bg-pink-700 px-6 py-3 rounded-full shadow-lg text-xs md:text-lg font-semibold transition-colors"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
        aria-label="Buka undangan"
        onClick={() => document.getElementById('invitation').scrollIntoView({ behavior: 'smooth' })}
      >
        Buka Undangan
      </motion.button>

      <motion.div
        className="absolute z-10 pointer-events-none top-2 left-2 sm:top-6 sm:left-6 md:top-10 md:left-10 rotate-6"
        variants={frameLeftTop}
        initial="hidden"
        animate="show"
      >
        <img src="/1.png" alt="Foto hiasan 1" className="w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 object-contain rounded-xl" loading="lazy" />
      </motion.div>

      <motion.div
        className="absolute z-10 pointer-events-none top-2 right-2 sm:top-8 sm:right-6 md:top-12 md:right-10 -rotate-6"
        variants={frameRightTop}
        initial="hidden"
        animate="show"
      >
        <img src="/2.png" alt="Foto hiasan 2" className="w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 object-contain rounded-xl" loading="lazy" />
      </motion.div>

      <motion.div
        className="absolute z-10 pointer-events-none bottom-2 left-2 sm:bottom-6 sm:left-6 md:bottom-16 md:left-10 rotate-3"
        variants={frameLeftBottom}
        initial="hidden"
        animate="show"
      >
        <img src="/3.png" alt="Foto hiasan 3" className="w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 object-contain rounded-xl" loading="lazy" />
      </motion.div>

      <motion.div
        className="absolute z-10 pointer-events-none bottom-2 right-2 sm:bottom-6 sm:right-6 md:bottom-10 md:right-12 -rotate-3"
        variants={frameRightBottom}
        initial="hidden"
        animate="show"
      >
        <img src="/4.png" alt="Foto hiasan 4" className="w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 object-contain rounded-xl" loading="lazy" />
      </motion.div>
    </section>
  )
}

export default Hero
