import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#05060A] text-white">
      {/* Decorative gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-[-8rem] right-[-8rem] h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-start gap-12 px-6 pt-24 md:flex-row md:items-center md:gap-8 md:pt-28">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="z-10 max-w-2xl"
        >
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-widest text-cyan-300/90">Futuristic Tax & Accounting</span>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
            Modern Solutions for Complex Tax and Bookkeeping
          </h1>
          <p className="mt-5 text-base leading-relaxed text-white/70 md:text-lg">
            We help Startups, UMKM, and Enterprises navigate Coretax, PKP registration, and monthly reporting with precision. 
            Experience a high-trust, high-speed service designed for today’s business.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center rounded-xl bg-cyan-500 px-5 py-3 font-medium text-black shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            >
              Hubungi Kami
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur-sm transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              Lihat Layanan
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6 text-sm text-white/60 md:grid-cols-3">
            <div>
              <p className="text-2xl font-semibold text-white">99.8%</p>
              <p>Kepatuhan Tepat Waktu</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-white">24-48h</p>
              <p>Lead Time Penyelesaian</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-white">ISO</p>
              <p>Standar Keamanan Data</p>
            </div>
          </div>
        </motion.div>

        {/* 3D Spline Scene */}
        <div className="relative z-0 ml-auto h-[380px] w-full max-w-2xl md:h-[520px]">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* Overlay to enhance readability */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05060A] via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
