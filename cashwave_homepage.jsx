// CashWave Homepage - React + Tailwind CSS

import React from "react";

export default function CashWaveHome() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-500 to-black text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">CashWave</h1>
        <p className="text-xl mb-6">Sube, opera, gana. Aprende a dominar el trading rápido.</p>
        <a
          href="#course"
          className="bg-white text-green-700 font-semibold px-6 py-3 rounded-full hover:bg-green-100"
        >
          Comienza ahora
        </a>
      </section>

      {/* Value Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">¿Qué es CashWave?</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          CashWave es tu fuente confiable para estrategias de trading, educación financiera y señales enfocadas en resultados. Diseñado para traders que quieren resultados reales, sin rodeos.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-green-50 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Estrategias rentables</h3>
            <p>Accede a métodos probados para operar con precisión y consistencia.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Cursos prácticos</h3>
            <p>Aprende lo que realmente importa en el menor tiempo posible.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Soporte directo</h3>
            <p>Conéctate vía Telegram o WhatsApp para resolver tus dudas rápido.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="course" className="py-20 px-6 bg-black text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Empieza tu camino al dinero hoy</h2>
        <p className="mb-6">Accede a nuestra estrategia gratuita o únete a un curso premium</p>
        <a
          href="https://gumroad.com"
          target="_blank"
          className="bg-green-500 px-6 py-3 rounded-full font-semibold hover:bg-green-600"
        >
          Ver productos
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-6 text-sm">
        © {new Date().getFullYear()} CashWave. Todos los derechos reservados.
      </footer>
    </div>
  );
}
