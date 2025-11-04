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
    <section id="services" className="relative w-full bg-gradient-to-b from-white to-sky-50/60 py-20 text-slate-900">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(244,63,94,0.12),transparent_50%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Layanan Utama</h2>
          <p className="mt-3 text-slate-600">Terstruktur untuk kecepatan, kepatuhan, dan zero drama.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="absolute inset-px rounded-2xl bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
