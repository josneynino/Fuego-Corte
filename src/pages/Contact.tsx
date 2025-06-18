import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      {/* Header */}
      <div className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Contáctanos</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Estamos aquí para hacer de tu experiencia gastronómica algo memorable. 
            Visítanos, llámanos o escríbenos.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Información de Contacto</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-600/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Dirección</h3>
                    <p className="text-gray-300">
                      Av. Principal 123<br />
                      Colonia Centro<br />
                      Ciudad, Estado 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-600/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Teléfono</h3>
                    <p className="text-gray-300">720 226 7406</p>
                    <p className="text-sm text-gray-400">Para reservas y consultas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-600/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <p className="text-gray-300">info@elasadorpremium.com</p>
                    <p className="text-gray-300">reservas@elasadorpremium.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-600/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Horarios</h3>
                    <div className="text-gray-300 space-y-1">
                      <p>Lunes - Jueves: 6:00 PM - 11:00 PM</p>
                      <p>Viernes - Sábado: 6:00 PM - 12:00 AM</p>
                      <p>Domingo: 1:00 PM - 10:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-xl font-bold text-white mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-yellow-600/10 p-3 rounded-lg text-yellow-400 hover:bg-yellow-600/20 transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="bg-yellow-600/10 p-3 rounded-lg text-yellow-400 hover:bg-yellow-600/20 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="bg-yellow-600/10 p-3 rounded-lg text-yellow-400 hover:bg-yellow-600/20 transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Special Notes */}
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-xl font-bold text-white mb-4">Notas Importantes</h3>
              <div className="space-y-3 text-gray-300">
                <p className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  Recomendamos hacer reservaciones con anticipación, especialmente fines de semana.
                </p>
                <p className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  Contamos con valet parking gratuito para nuestros clientes.
                </p>
                <p className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  Disponemos de área para fumadores en nuestra terraza exterior.
                </p>
                <p className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  Aceptamos todas las tarjetas de crédito principales.
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Nuestra Ubicación</h2>
              
              {/* Google Maps Embed */}
              <div className="w-full h-96 bg-gray-700 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <MapPin className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
                  <p className="text-lg">Mapa Interactivo</p>
                  <p className="text-sm">
                    Av. Principal 123, Colonia Centro<br />
                    Ciudad, Estado 12345
                  </p>
                  <button className="mt-4 bg-yellow-600 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold transition-colors">
                    Ver en Google Maps
                  </button>
                </div>
              </div>
            </div>

            {/* Transportation */}
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-xl font-bold text-white mb-4">Cómo Llegar</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="text-white font-semibold mb-2">🚗 En Auto</h4>
                  <p>Contamos con estacionamiento gratuito con valet service. Acceso fácil desde las principales avenidas de la ciudad.</p>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-2">🚌 Transporte Público</h4>
                  <p>Líneas de autobús 15, 23 y 45. Parada "Centro Comercial Plaza" a 2 cuadras del restaurante.</p>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-2">🚕 Taxi/Uber</h4>
                  <p>Zona segura para ascenso y descenso. Referencias: frente al Centro Comercial Plaza, edificio de ladrillo rojo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}