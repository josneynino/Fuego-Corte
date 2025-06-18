import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, AlertCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Cart() {
  const { state, dispatch } = useApp();
  const { cart } = state;
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const updateQuantity = (id: string, cookingLevel: string, newQuantity: number) => {
    if (newQuantity === 0) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: `${id}-${cookingLevel}` });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity: newQuantity } });
    }
  };

  const removeItem = (id: string, cookingLevel: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: `${id}-${cookingLevel}` });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
    setShowClearConfirm(false);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 pt-20 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="h-24 w-24 text-gray-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">Tu carrito está vacío</h2>
          <p className="text-gray-300 mb-8">Explora nuestro menú y añade algunos cortes deliciosos.</p>
          <Link
            to="/menu"
            className="bg-yellow-600 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Ver Menú
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      {/* Header */}
      <div className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Tu Pedido</h1>
          <p className="text-xl text-gray-300">
            Revisa tu selección antes de proceder con la orden.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <div key={`${item.id}-${item.cookingLevel}-${index}`} className="bg-gray-800 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                    <p className="text-gray-300 text-sm mb-2">Término: {item.cookingLevel}</p>
                    <p className="text-yellow-400 font-semibold">${item.price}</p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.cookingLevel, item.quantity - 1)}
                      className="bg-gray-700 text-white p-1 rounded hover:bg-gray-600 transition-colors"
                      aria-label="Reducir cantidad"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="text-white font-semibold px-3">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.cookingLevel, item.quantity + 1)}
                      className="bg-gray-700 text-white p-1 rounded hover:bg-gray-600 transition-colors"
                      aria-label="Aumentar cantidad"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.id, item.cookingLevel)}
                    className="text-red-400 hover:text-red-300 p-1 transition-colors"
                    aria-label="Eliminar item"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}

            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowClearConfirm(true)}
                className="text-red-400 hover:text-red-300 flex items-center space-x-2 transition-colors"
              >
                <Trash2 className="h-5 w-5" />
                <span>Vaciar carrito</span>
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-800 rounded-lg p-6 h-fit">
            <h2 className="text-xl font-bold text-white mb-4">Resumen del Pedido</h2>
            
            <div className="space-y-3 mb-6">
              {cart.map((item, index) => (
                <div key={`${item.id}-${item.cookingLevel}-${index}`} className="flex justify-between text-sm">
                  <span className="text-gray-300">
                    {item.quantity}x {item.name}
                  </span>
                  <span className="text-white">${(item.price * item.quantity).toFixed(0)}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-700 pt-4 mb-6">
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-white">Total:</span>
                <span className="text-yellow-400">${total.toFixed(0)}</span>
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full bg-yellow-600 hover:bg-yellow-500 text-black font-semibold py-3 px-4 rounded-lg transition-colors">
                Proceder al Pago
              </button>
              <Link
                to="/menu"
                className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors text-center block"
              >
                Continuar Ordenando
              </Link>
            </div>

            <div className="mt-6 text-sm text-gray-400">
              <p>• Los precios incluyen IVA</p>
              <p>• Tiempo estimado de preparación: 25-35 min</p>
              <p>• Servicio a domicilio disponible</p>
            </div>
          </div>
        </div>
      </div>

      {/* Clear Cart Confirmation Modal */}
      {showClearConfirm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-lg max-w-md w-full p-6">
            <div className="flex items-center space-x-3 mb-4">
              <AlertCircle className="h-6 w-6 text-red-400" />
              <h3 className="text-xl font-bold text-white">¿Vaciar carrito?</h3>
            </div>
            <p className="text-gray-300 mb-6">
              ¿Estás seguro de que deseas eliminar todos los items de tu carrito?
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowClearConfirm(false)}
                className="flex-1 bg-gray-700 text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={clearCart}
                className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-400 transition-colors"
              >
                Vaciar Carrito
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}