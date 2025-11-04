import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import ContactCTA from './components/ContactCTA';

function App() {
  return (
    <div className="min-h-screen w-full scroll-smooth bg-white text-slate-900">
      {/* Top nav */}
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2 font-semibold tracking-tight text-slate-900">
            <span className="inline-block h-3 w-3 rounded-full bg-cyan-500" />
            TaxNext Consulting
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a className="hover:text-slate-900" href="#services">Layanan</a>
            <a className="hover:text-slate-900" href="#about">Tentang</a>
            <a className="rounded-lg bg-gradient-to-r from-fuchsia-600 to-cyan-500 px-4 py-2 font-medium text-white shadow-md hover:from-fuchsia-500 hover:to-cyan-400" href="#contact">Hubungi Kami</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <About />
        <ContactCTA />
      </main>

      <footer className="border-t border-slate-200/70 bg-white py-8 text-sm text-slate-600">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <p>© {new Date().getFullYear()} TaxNext Consulting. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-slate-900">Layanan</a>
            <a href="#about" className="hover:text-slate-900">Tentang</a>
            <a href="#contact" className="hover:text-slate-900">Kontak</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
