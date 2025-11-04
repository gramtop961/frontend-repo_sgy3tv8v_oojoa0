import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section id="about" className="relative overflow-hidden bg-white py-24 text-slate-900">
      {/* Parallax layers */}
      <motion.div style={{ y: y1 }} className="pointer-events-none absolute -top-24 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-fuchsia-500/15 blur-3xl" />
      <motion.div style={{ y: y2 }} className="pointer-events-none absolute bottom-[-6rem] right-[-6rem] h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Akurasi. Kecepatan. Kepatuhan.</h2>
            <p className="mt-4 text-slate-700">
              Kami menggabungkan otomasi cerdas, kontrol kualitas berlapis, dan pengalaman praktis
              untuk menyelesaikan urusan pajak dan pembukuan yang kompleks tanpa mengganggu operasional Anda.
            </p>
            <ul className="mt-6 space-y-3 text-slate-800">
              <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-fuchsia-500" /> SLA ketat dan transparan di setiap tahapan.</li>
              <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-cyan-500" /> Enkripsi data dan akses berbasis peran.</li>
              <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-500" /> Tim bersertifikasi dan selalu update regulasi.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(217,70,239,0.08),transparent_30%,rgba(6,182,212,0.08))]" />
              <div className="relative">
                <div className="grid grid-cols-2 gap-4 text-sm text-slate-800">
                  <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                    <p className="text-xs text-slate-500">Workflow</p>
                    <p className="mt-1 font-semibold">Coretax Sync</p>
                    <p className="mt-2 text-[11px] text-slate-600">Rekonsiliasi otomatis & validasi rule-based.</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                    <p className="text-xs text-slate-500">Governance</p>
                    <p className="mt-1 font-semibold">Audit Trail</p>
                    <p className="mt-2 text-[11px] text-slate-600">Jejak aktivitas dan approval multilapis.</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                    <p className="text-xs text-slate-500">Security</p>
                    <p className="mt-1 font-semibold">Data Vault</p>
                    <p className="mt-2 text-[11px] text-slate-600">Enkripsi at-rest dan in-transit.</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                    <p className="text-xs text-slate-500">Support</p>
                    <p className="mt-1 font-semibold">Dedicated Team</p>
                    <p className="mt-2 text-[11px] text-slate-600">Respons 24–48 jam kerja.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
