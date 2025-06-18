import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Phone } from 'lucide-react';
import { useApp } from '../context/AppContext';
import logoFuegoCorte from '../assets/logo-fuego-corte1.png';

export default function Header() {
  const { state, dispatch } = useApp();
  const location = useLocation();
  const cartItemsCount = state.cart.reduce((total, item) => total + item.quantity, 0);

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Menú', href: '/menu' },
    { name: 'Reservar', href: '/reservations' },
    { name: 'Experiencia', href: '/experience' },
    { name: 'Contacto', href: '/contact' },
  ];

  return (
    <header className="bg-black/95 backdrop-blur-sm text-white fixed w-full z-50 border-b border-yellow-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logoFuegoCorte} alt="Logo Fuego & Corte" className="h-8 w-8 object-contain" />
            <div>
              <h1 className="text-xl font-bold text-yellow-400">Fuego & Corte</h1>
              <p className="text-xs text-gray-300">Cortes Excepcionales</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-yellow-400 ${
                  location.pathname === item.href
                    ? 'text-yellow-400 border-b-2 border-yellow-400 pb-1'
                    : 'text-gray-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Phone className="h-4 w-4" />
              <span>720 226 7406</span>
            </div>
            <Link
              to="/cart"
              className="relative p-2 text-gray-300 hover:text-yellow-400 transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => dispatch({ type: 'TOGGLE_MENU' })}
            className="md:hidden p-2 text-gray-300 hover:text-white"
          >
            {state.isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {state.isMenuOpen && (
          <div className="md:hidden border-t border-gray-700 py-4">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => dispatch({ type: 'TOGGLE_MENU' })}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md ${
                    location.pathname === item.href
                      ? 'text-yellow-400 bg-yellow-400/10'
                      : 'text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/5'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <div className="flex items-center space-x-2 text-sm text-gray-300 px-3">
                <Phone className="h-4 w-4" />
                <span>720 226 7406</span>
              </div>
              <Link
                to="/cart"
                onClick={() => dispatch({ type: 'TOGGLE_MENU' })}
                className="flex items-center space-x-2 mt-2 px-3 py-2 text-gray-300 hover:text-yellow-400"
              >
                <ShoppingCart className="h-4 w-4" />
                <span>Carrito ({cartItemsCount})</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}