import React from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactCTA = () => {
  return (
    <section id="contact" className="relative w-full bg-[#07080F] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_50%)]" />

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
        <p className="mx-auto mt-4 max-w-2xl text-white/70">
          Konsultasi awal gratis. Ceritakan tantangan Anda—kami siapkan rencana eksekusi yang jelas dan terukur.
        </p>

        <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
          <a
            href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20konsultasi%20pajak%20dan%20pembukuan"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 font-medium text-black shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
          >
            <Phone className="h-5 w-5" /> WhatsApp
          </a>
          <a
            href="mailto:hello@taxconsult.co?subject=Konsultasi%20Pajak%20&body=Halo,%20saya%20ingin%20berkonsultasi%20tentang..."
            className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur-sm transition hover:bg-white/10"
          >
            <Mail className="h-5 w-5" /> Email
          </a>
          <a
            href="#services"
            className="group inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-5 py-3 font-medium text-cyan-300 transition hover:bg-cyan-500/20"
          >
            <MessageSquare className="h-5 w-5" /> Jadwalkan Diskusi
          </a>
        </div>

        <p className="mt-6 text-xs text-white/50">Respons 24–48 jam kerja. Data Anda kami lindungi dengan standar keamanan modern.</p>
      </div>
    </section>
  );
};

export default ContactCTA;
