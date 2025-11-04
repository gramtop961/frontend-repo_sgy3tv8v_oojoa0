import React from 'react';
import { ShieldCheck, FileText, Building2, ClipboardCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const SERVICES = [
  {
    icon: FileText,
    title: 'Laporan Pajak Bulanan',
    desc: 'Pengelolaan dan pelaporan SPT Masa dengan akurasi tinggi, minim risiko denda, dan pemantauan status real-time.',
  },
  {
    icon: ShieldCheck,
    title: 'Pendampingan Coretax',
    desc: 'Setup, rekonsiliasi, dan troubleshooting Coretax agar sesuai regulasi serta alur kerja perusahaan Anda.',
  },
  {
    icon: Building2,
    title: 'Dukungan Registrasi PKP',
    desc: 'Persiapan dokumen, simulasi interview, dan pendampingan proses administrasi hingga terbitnya PKP.',
  },
  {
    icon: ClipboardCheck,
    title: 'Penanganan SP2DK',
    desc: 'Analisis gap, penyusunan tanggapan, dan negosiasi dengan fiskus berbasis data yang dapat dipertanggungjawabkan.',
  },
];

const Services = () => {
  return (
    <section id="services" className="relative w-full bg-[#07080F] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.1),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_45%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Layanan Utama</h2>
          <p className="mt-3 text-white/70">Terstruktur untuk kecepatan, kepatuhan, dan zero drama.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
            >
              <div className="absolute inset-px rounded-2xl bg-gradient-to-br from-white/[0.06] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
