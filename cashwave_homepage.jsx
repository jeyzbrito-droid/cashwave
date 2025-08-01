// CashWave Homepage - React + Tailwind CSS (Optimizado)
import React from 'react';

// Componente ValueCard reutilizable
const ValueCard = ({ title, children }) => (
  <article className="bg-green-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-700">{children}</p>
  </article>
);

export default function CashWaveHome() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* Hero Section - Mejorado para Lighthouse */}
      <header 
        className="bg-green-700 text-white py-20 px-6 text-center"
        role="banner"
      >
        <div className="max-w-4xl mx-auto">
          <h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            aria-label="CashWave - Plataforma de trading profesional"
          >
            CashWave
          </h1>
          <p className="text-xl mb-8 leading-relaxed">
            Sube, opera, gana. Aprende a dominar el trading rápido.
          </p>
          <a
            href="#course"
            className="inline-block bg-white text-green-700 font-semibold px-8 py-3 rounded-full hover:bg-green-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            aria-label="Comienza el curso de trading"
          >
            Comienza ahora
          </a>
        </div>
      </header>

      {/* Value Section - Semántica mejorada */}
      <main className="flex-grow">
        <section 
          className="py-16 px-6 text-center"
          aria-labelledby="cashwave-description"
        >
          <div className="max-w-6xl mx-auto">
            <h2 
              id="cashwave-description"
              className="text-3xl font-bold mb-6"
            >
              ¿Qué es CashWave?
            </h2>
            <article className="max-w-2xl mx-auto text-lg mb-12">
              <p>
                CashWave es tu fuente confiable para estrategias de trading, educación financiera y señales enfocadas en resultados. Diseñado para traders que quieren resultados reales, sin rodeos.
              </p>
            </article>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ValueCard title="Estrategias rentables">
                Accede a métodos probados para operar con precisión y consistencia.
              </ValueCard>
              <ValueCard title="Cursos prácticos">
                Aprende lo que realmente importa en el menor tiempo posible.
              </ValueCard>
              <ValueCard title="Soporte directo">
                Conéctate vía Telegram o WhatsApp para resolver tus dudas rápido.
              </ValueCard>
            </div>
          </div>
        </section>

        {/* Call to Action - Mejorado para conversión */}
        <section 
          id="course"
          className="py-20 px-6 bg-black text-white text-center"
          aria-label="Cursos de trading"
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Empieza tu camino al dinero hoy
            </h2>
            <p className="mb-8 text-lg">
              Accede a nuestra estrategia gratuita o únete a un curso premium
            </p>
            <a
              href="https://gumroad.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-300"
              aria-label="Ver productos de trading"
            >
              Ver productos
            </a>
          </div>
        </section>
      </main>

      {/* Footer - Accesible */}
      <footer 
        className="bg-gray-100 text-center py-8 text-sm"
        role="contentinfo"
      >
        <div className="container mx-auto px-6">
          <p>© {currentYear} CashWave. Todos los derechos reservados.</p>
          <div className="mt-4 space-x-4">
            <a href="/terminos" className="hover:underline">Términos</a>
            <a href="/privacidad" className="hover:underline">Privacidad</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
