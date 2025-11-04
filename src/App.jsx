import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import ContactCTA from './components/ContactCTA';

function App() {
  return (
    <div className="min-h-screen w-full scroll-smooth bg-[#05060A] text-white">
      {/* Simple top nav */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#05060A]/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-block h-3 w-3 rounded-full bg-cyan-400" />
            TaxNext Consulting
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a className="hover:text-white" href="#services">Layanan</a>
            <a className="hover:text-white" href="#about">Tentang</a>
            <a className="rounded-lg bg-cyan-500 px-4 py-2 font-medium text-black hover:bg-cyan-400" href="#contact">Hubungi Kami</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <About />
        <ContactCTA />
      </main>

      <footer className="border-t border-white/10 bg-[#05060A] py-8 text-sm text-white/60">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <p>© {new Date().getFullYear()} TaxNext Consulting. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-white">Layanan</a>
            <a href="#about" className="hover:text-white">Tentang</a>
            <a href="#contact" className="hover:text-white">Kontak</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
