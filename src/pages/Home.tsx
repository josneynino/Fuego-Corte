import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section Mejorado */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Grilled steak"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight drop-shadow-lg">
            Cortes <span className="text-yellow-400">Excepcionales</span>
          </h1>
          <p className="text-2xl md:text-3xl mb-6 text-gray-200 font-light drop-shadow">
            Vive la experiencia premium en carnes y asados.
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Desde 1985, perfeccionamos el arte de preparar los mejores cortes de carne con técnicas tradicionales y sabor inigualable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/reservations"
              className="bg-yellow-600 hover:bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg animate-bounce"
            >
              Reservar Mesa
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/menu"
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Ver Menú
            </Link>
          </div>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4 animate-fade-in">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">Sobre Nosotros</h2>
            <p className="text-lg text-gray-300 mb-4">
              En Fuego & Corte, la pasión por la carne nos define. Somos un asador familiar con más de 35 años de historia, donde cada corte es una obra de arte y cada cliente, parte de nuestra familia.
            </p>
            <p className="text-gray-400">
              Nuestra misión es ofrecer una experiencia gastronómica inolvidable, combinando tradición, calidad y hospitalidad en cada visita.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
              alt="Equipo Fuego & Corte"
              className="rounded-xl shadow-2xl w-full max-w-sm object-cover border-4 border-yellow-600"
            />
          </div>
        </div>
      </section>

      {/* Galería de Platos Destacados */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Platos Destacados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <img src="https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Ribeye Premium" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-white">
                <h3 className="text-xl font-bold">Ribeye Premium</h3>
                <p className="text-yellow-400 font-semibold">$45</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <img src="https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Filet Mignon" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-white">
                <h3 className="text-xl font-bold">Filet Mignon</h3>
                <p className="text-yellow-400 font-semibold">$52</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80" alt="Tomahawk Steak" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-white">
                <h3 className="text-xl font-bold">Tomahawk Steak</h3>
                <p className="text-yellow-400 font-semibold">$85</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <img src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Chuleta de Cerdo Premium" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-white">
                <h3 className="text-xl font-bold">Chuleta de Cerdo Premium</h3>
                <p className="text-yellow-400 font-semibold">$28</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <img src="https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Lomo de Cerdo" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-white">
                <h3 className="text-xl font-bold">Lomo de Cerdo</h3>
                <p className="text-yellow-400 font-semibold">$32</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <img src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Rack de Cordero" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-white">
                <h3 className="text-xl font-bold">Rack de Cordero</h3>
                <p className="text-yellow-400 font-semibold">$48</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Mejorado */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-yellow-500 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-black mb-4">¿Listo para una experiencia única?</h2>
          <p className="text-xl text-black/80 mb-8">
            Reserva tu mesa ahora y déjanos conquistarte con nuestros sabores excepcionales.
          </p>
          <Link
            to="/reservations"
            className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center shadow-lg"
          >
            Reservar Ahora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}