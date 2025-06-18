import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { menuItems } from '../data/menuData';
import { useApp } from '../context/AppContext';

export default function Menu() {
  const { dispatch } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'beef' | 'pork' | 'lamb'>('all');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [selectedCooking, setSelectedCooking] = useState('');
  const [quantity, setQuantity] = useState(1);

  const categories = [
    { id: 'all', name: 'Todos', icon: '🥩' },
    { id: 'beef', name: 'Res', icon: '🐄' },
    { id: 'pork', name: 'Cerdo', icon: '🐷' },
    { id: 'lamb', name: 'Cordero', icon: '🐑' },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const handleAddToCart = () => {
    if (selectedItem && selectedCooking) {
      dispatch({
        type: 'ADD_TO_CART',
        payload: {
          ...selectedItem,
          cookingLevel: selectedCooking,
          quantity,
        },
      });
      setSelectedItem(null);
      setSelectedCooking('');
      setQuantity(1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      {/* Header */}
      <div className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Nuestro Menú</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Selecciona de nuestra exquisita variedad de cortes premium, cada uno preparado a la perfección según tus preferencias.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id as any)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                selectedCategory === category.id
                  ? 'bg-yellow-600 text-black shadow-lg transform scale-105'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-yellow-600 text-black px-3 py-1 rounded-full font-bold text-lg">
                  ${item.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{item.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {item.cookingLevels.slice(0, 3).map((level) => (
                    <span
                      key={level}
                      className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {level}
                    </span>
                  ))}
                  {item.cookingLevels.length > 3 && (
                    <span className="text-yellow-400 text-xs px-2 py-1">
                      +{item.cookingLevels.length - 3} más
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setSelectedItem(item)}
                  className="w-full bg-yellow-600 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  Seleccionar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Selection Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">{selectedItem.name}</h3>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
              
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              
              <p className="text-gray-300 mb-4">{selectedItem.description}</p>
              
              <div className="mb-4">
                <label className="block text-white font-semibold mb-2">Término de Cocción:</label>
                <div className="space-y-2">
                  {selectedItem.cookingLevels.map((level: string) => (
                    <label key={level} className="flex items-center">
                      <input
                        type="radio"
                        name="cooking"
                        value={level}
                        checked={selectedCooking === level}
                        onChange={(e) => setSelectedCooking(e.target.value)}
                        className="mr-2 text-yellow-600"
                      />
                      <span className="text-gray-300">{level}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-white font-semibold mb-2">Cantidad:</label>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="bg-gray-700 text-white p-1 rounded hover:bg-gray-600"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="text-white font-semibold text-lg px-4">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="bg-gray-700 text-white p-1 rounded hover:bg-gray-600"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="flex-1 bg-gray-700 text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleAddToCart}
                  disabled={!selectedCooking}
                  className="flex-1 bg-yellow-600 text-black py-2 px-4 rounded-lg font-semibold hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Agregar ${(selectedItem.price * quantity).toFixed(0)}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}