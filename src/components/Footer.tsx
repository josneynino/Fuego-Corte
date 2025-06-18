import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-yellow-400">Fuego & Corte</h3>
            <p className="text-gray-300 text-sm">
              Desde 1985, ofrecemos los mejores cortes de carne con la tradición y calidad que nos caracteriza.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400">Contacto</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>Av. Principal 123, Ciudad</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span>720 226 7406</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>info@elasadorpremium.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400">Horarios</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex justify-between">
                <span>Lun - Jue:</span>
                <span>6:00 PM - 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Vie - Sáb:</span>
                <span>6:00 PM - 12:00 AM</span>
              </div>
              <div className="flex justify-between">
                <span>Domingo:</span>
                <span>1:00 PM - 10:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400">Enlaces Rápidos</h4>
            <div className="space-y-2 text-sm">
              <a href="/menu" className="block text-gray-300 hover:text-yellow-400 transition-colors">
                Nuestro Menú
              </a>
              <a href="/reservations" className="block text-gray-300 hover:text-yellow-400 transition-colors">
                Hacer Reserva
              </a>
              <a href="/experience" className="block text-gray-300 hover:text-yellow-400 transition-colors">
                Experiencia
              </a>
              <a href="/contact" className="block text-gray-300 hover:text-yellow-400 transition-colors">
                Ubicación
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Fuego & Corte. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}