import React from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactCTA = () => {
  return (
    <section id="contact" className="relative w-full bg-gradient-to-b from-violet-50 to-cyan-50 py-20 text-slate-900">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.12),transparent_55%)]" />

      <div className="relative mx-auto w-full max-w-5xl px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold tracking-tight md:text-4xl"
        >
          Siap Membereskan Pajak Anda dengan Cepat dan Tepat
        </motion.h3>
        <p className="mx-auto mt-4 max-w-2xl text-slate-700">
          Konsultasi awal gratis. Ceritakan tantangan Anda—kami siapkan rencana eksekusi yang jelas dan terukur.
        </p>

        <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
          <a
            href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20konsultasi%20pajak%20dan%20pembukuan"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 font-medium text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
          >
            <Phone className="h-5 w-5" /> WhatsApp
          </a>
          <a
            href="mailto:hello@taxconsult.co?subject=Konsultasi%20Pajak%20&body=Halo,%20saya%20ingin%20berkonsultasi%20tentang..."
            className="group inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-medium text-slate-900 shadow-sm transition hover:shadow"
          >
            <Mail className="h-5 w-5" /> Email
          </a>
          <a
            href="#services"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-600 to-cyan-500 px-5 py-3 font-medium text-white shadow-md transition hover:from-fuchsia-500 hover:to-cyan-400"
          >
            <MessageSquare className="h-5 w-5" /> Jadwalkan Diskusi
          </a>
        </div>

        <p className="mt-6 text-xs text-slate-500">Respons 24–48 jam kerja. Data Anda kami lindungi dengan standar keamanan modern.</p>
      </div>
    </section>
  );
};

export default ContactCTA;
