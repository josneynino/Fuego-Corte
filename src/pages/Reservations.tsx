import React, { useState } from 'react';
import { Calendar, Clock, Users, Phone, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Reservations() {
  const { dispatch } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: 2,
    specialRequests: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const timeSlots = [
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30',
    '21:00', '21:30', '22:00', '22:30', '23:00'
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido';
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Ingresa un número de teléfono válido';
    }
    
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ingresa un email válido';
    }
    
    if (!formData.date) {
      newErrors.date = 'La fecha es requerida';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      if (selectedDate < today) {
        newErrors.date = 'La fecha debe ser futura';
      }
    }
    
    if (!formData.time) {
      newErrors.time = 'La hora es requerida';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch({ type: 'SET_RESERVATION', payload: formData });
      setIsSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value) : value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-900 pt-20 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center bg-gray-800 rounded-lg p-8">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">¡Reserva Confirmada!</h2>
          <p className="text-gray-300 mb-6">
            Gracias {formData.name}, hemos recibido tu reserva para {formData.guests} persona(s) 
            el {formData.date} a las {formData.time}.
          </p>
          <p className="text-sm text-gray-400 mb-6">
            Te contactaremos pronto al {formData.phone} para confirmar todos los detalles.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: '',
                phone: '',
                email: '',
                date: '',
                time: '',
                guests: 2,
                specialRequests: '',
              });
            }}
            className="bg-yellow-600 hover:bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Nueva Reserva
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      {/* Header */}
      <div className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Reservar Mesa</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Asegura tu lugar en la mejor experiencia gastronómica. Completa el formulario y nos pondremos en contacto contigo.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Reservation Form */}
          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Detalles de la Reserva</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    <Users className="inline h-4 w-4 mr-1" />
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 py-2 bg-gray-700 text-white rounded-lg border ${
                      errors.name ? 'border-red-500' : 'border-gray-600'
                    } focus:border-yellow-500 focus:outline-none`}
                    placeholder="Tu nombre completo"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.name}
                    </p>
                  )}
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-2">
                    <Phone className="inline h-4 w-4 mr-1" />
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 py-2 bg-gray-700 text-white rounded-lg border ${
                      errors.phone ? 'border-red-500' : 'border-gray-600'
                    } focus:border-yellow-500 focus:outline-none`}
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  <Mail className="inline h-4 w-4 mr-1" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 bg-gray-700 text-white rounded-lg border ${
                    errors.email ? 'border-red-500' : 'border-gray-600'
                  } focus:border-yellow-500 focus:outline-none`}
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    <Calendar className="inline h-4 w-4 mr-1" />
                    Fecha *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full px-3 py-2 bg-gray-700 text-white rounded-lg border ${
                      errors.date ? 'border-red-500' : 'border-gray-600'
                    } focus:border-yellow-500 focus:outline-none`}
                  />
                  {errors.date && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.date}
                    </p>
                  )}
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-2">
                    <Clock className="inline h-4 w-4 mr-1" />
                    Hora *
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 py-2 bg-gray-700 text-white rounded-lg border ${
                      errors.time ? 'border-red-500' : 'border-gray-600'
                    } focus:border-yellow-500 focus:outline-none`}
                  >
                    <option value="">Seleccionar</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                  {errors.time && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.time}
                    </p>
                  )}
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-2">
                    <Users className="inline h-4 w-4 mr-1" />
                    Personas *
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-yellow-500 focus:outline-none"
                  >
                    {[...Array(12)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1} persona{i > 0 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Solicitudes Especiales
                </label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-yellow-500 focus:outline-none resize-none"
                  placeholder="Ocasión especial, alergias, preferencias de mesa, etc."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-600 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105"
              >
                Confirmar Reserva
              </button>
            </form>
          </div>

          {/* Information Sidebar */}
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Información Importante</h3>
              <div className="space-y-3 text-gray-300">
                <p className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  Las reservas deben realizarse con al menos 2 horas de anticipación.
                </p>
                <p className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  Para grupos de más de 8 personas, contactar directamente al restaurante.
                </p>
                <p className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  Se otorga un margen de 15 minutos para la llegada.
                </p>
                <p className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  Confirmación por teléfono requerida para reservas del mismo día.
                </p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Horarios de Atención</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Lunes - Jueves:</span>
                  <span className="text-yellow-400">6:00 PM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Viernes - Sábado:</span>
                  <span className="text-yellow-400">6:00 PM - 12:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo:</span>
                  <span className="text-yellow-400">1:00 PM - 10:00 PM</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Contacto Directo</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-yellow-400 mr-2" />
                  <span>720 226 7406</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-yellow-400 mr-2" />
                  <span>reservas@elasadorpremium.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}