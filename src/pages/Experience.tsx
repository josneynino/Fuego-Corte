import React, { useState } from 'react';
import { Play, Star, Users, Award } from 'lucide-react';
import { testimonials } from '../data/menuData';

export default function Experience() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Maestro parrillero preparando cortes premium',
      title: 'Arte en la Parrilla'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/5920742/pexels-photo-5920742.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Selección de cortes premium',
      title: 'Cortes Selectos'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Proceso de marinado',
      title: 'Marinado Perfecto'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Ambiente del restaurante',
      title: 'Ambiente Acogedor'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Chef preparando especiales',
      title: 'Técnica Experta'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Presentación final de platos',
      title: 'Presentación Elegante'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      {/* Hero Section */}
      <div className="relative bg-black py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Chef grilling"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">La Experiencia del Asador</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre el arte detrás de cada corte. Desde la selección de la mejor carne hasta la técnica perfecta de asado, 
            cada paso está diseñado para crear una experiencia gastronómica inolvidable.
          </p>
        </div>
      </div>

      {/* Process Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Nuestro Proceso</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-yellow-600/10 p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center group-hover:bg-yellow-600/20 transition-colors">
                <span className="text-3xl">🥩</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">1. Selección</h3>
              <p className="text-gray-300">Elegimos cuidadosamente cada corte de proveedores certificados, garantizando la máxima calidad y frescura.</p>
            </div>

            <div className="text-center group">
              <div className="bg-yellow-600/10 p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center group-hover:bg-yellow-600/20 transition-colors">
                <span className="text-3xl">🧂</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">2. Preparación</h3>
              <p className="text-gray-300">Marinamos y sazonamos cada pieza con una mezcla secreta de especias y hierbas frescas.</p>
            </div>

            <div className="text-center group">
              <div className="bg-yellow-600/10 p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center group-hover:bg-yellow-600/20 transition-colors">
                <span className="text-3xl">🔥</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">3. Asado</h3>
              <p className="text-gray-300">Nuestros maestros parrilleros controlan el fuego y timing perfectos para cada término solicitado.</p>
            </div>

            <div className="text-center group">
              <div className="bg-yellow-600/10 p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center group-hover:bg-yellow-600/20 transition-colors">
                <span className="text-3xl">🍽️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">4. Presentación</h3>
              <p className="text-gray-300">Cada plato se presenta con elegancia, acompañado de guarniciones que realzan el sabor principal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Galería de la Experiencia</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">38+</div>
              <div className="text-white text-lg">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">50,000+</div>
              <div className="text-white text-lg">Clientes Satisfechos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">15</div>
              <div className="text-white text-lg">Cortes Especialidad</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">5</div>
              <div className="text-white text-lg">Premios Gastronómicos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Lo Que Dicen Nuestros Clientes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-800 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for enlarged images */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Gallery image"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}