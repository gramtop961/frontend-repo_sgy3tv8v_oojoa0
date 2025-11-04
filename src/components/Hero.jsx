import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-white text-slate-900">
      {/* Spline as full-width cover background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft overlays to ensure text readability without blocking interaction */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.18),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.15),transparent_45%)]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-start gap-12 px-6 pt-24 md:flex-row md:items-center md:gap-8 md:pt-28">
        {/* Teks dan CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="z-10 max-w-2xl"
        >
          <span className="inline-block rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs uppercase tracking-widest text-fuchsia-600">Solusi Pajak & Akuntansi Futuristik</span>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Solusi Modern untuk Pajak dan Pembukuan yang Kompleks
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-700 md:text-lg">
            Kami membantu Startup, UMKM, dan Perusahaan mengelola Coretax, pendaftaran PKP, dan pelaporan bulanan dengan presisi.
            Rasakan layanan tepercaya dan cepat yang dirancang untuk kebutuhan bisnis masa kini.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-600 to-cyan-500 px-5 py-3 font-medium text-white shadow-lg shadow-fuchsia-600/20 transition hover:from-fuchsia-500 hover:to-cyan-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-300/50"
            >
              Hubungi Kami
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white/70 px-5 py-3 font-medium text-slate-900 backdrop-blur-sm transition hover:bg-white"
            >
              Lihat Layanan
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6 text-sm text-slate-600 md:grid-cols-3">
            <div>
              <p className="text-2xl font-semibold text-slate-900">99,8%</p>
              <p>Kepatuhan Tepat Waktu</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-slate-900">24–48 jam</p>
              <p>Waktu Penyelesaian</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-slate-900">ISO</p>
              <p>Standar Keamanan Data</p>
            </div>
          </div>
        </motion.div>

        {/* Decorative right-side panel for balance on wide screens */}
        <div className="relative z-0 ml-auto h-[380px] w-full max-w-2xl md:h-[520px]">
          {/* empty: Spline already covers background; this block keeps layout balance */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
