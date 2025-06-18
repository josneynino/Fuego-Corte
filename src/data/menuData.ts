export const menuItems = [
  // Beef
  {
    id: 'ribeye',
    name: 'Ribeye Premium',
    category: 'beef' as const,
    price: 45,
    description: 'Corte jugoso con un marmoleo excepcional, ideal para los amantes de la carne con sabor intenso.',
    image: 'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=600',
    cookingLevels: ['Azul', 'Sellado', 'Término Medio', 'Tres Cuartos', 'Bien Cocido'],
  },
  {
    id: 'filet-mignon',
    name: 'Filet Mignon',
    category: 'beef' as const,
    price: 52,
    description: 'El corte más tierno de la res, perfecto para ocasiones especiales con su textura mantecosa.',
    image: 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=600',
    cookingLevels: ['Azul', 'Sellado', 'Término Medio', 'Tres Cuartos', 'Bien Cocido'],
  },
  {
    id: 'new-york-strip',
    name: 'New York Strip',
    category: 'beef' as const,
    price: 38,
    description: 'Corte balanceado entre sabor y terneza, con una textura firme y sabor robusto.',
    image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=600',
    cookingLevels: ['Azul', 'Sellado', 'Término Medio', 'Tres Cuartos', 'Bien Cocido'],
  },
  {
    id: 'tomahawk',
    name: 'Tomahawk Steak',
    category: 'beef' as const,
    price: 85,
    description: 'Impresionante corte de costilla con hueso largo, perfecto para compartir y sorprender.',
    image: 'https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg?auto=compress&cs=tinysrgb&w=600',
    cookingLevels: ['Azul', 'Sellado', 'Término Medio', 'Tres Cuartos', 'Bien Cocido'],
  },
  
  // Pork
  {
    id: 'pork-chop',
    name: 'Chuleta de Cerdo Premium',
    category: 'pork' as const,
    price: 28,
    description: 'Chuleta jugosa con hueso, marinada con hierbas frescas y especias aromáticas.',
    image: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600',
    cookingLevels: ['Término Medio', 'Tres Cuartos', 'Bien Cocido'],
  },
  {
    id: 'pork-tenderloin',
    name: 'Lomo de Cerdo',
    category: 'pork' as const,
    price: 32,
    description: 'Corte magro y tierno, perfecto para marinados y preparaciones especiales.',
    image: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=600',
    cookingLevels: ['Término Medio', 'Tres Cuartos', 'Bien Cocido'],
  },
  
  // Lamb
  {
    id: 'lamb-rack',
    name: 'Rack de Cordero',
    category: 'lamb' as const,
    price: 48,
    description: 'Elegante presentación de costillas de cordero con hierbas mediterráneas.',
    image: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=600',
    cookingLevels: ['Azul', 'Sellado', 'Término Medio', 'Tres Cuartos'],
  },
  {
    id: 'lamb-leg',
    name: 'Pierna de Cordero',
    category: 'lamb' as const,
    price: 42,
    description: 'Corte tradicional perfecto para ocasiones especiales, con sabor distintivo y aromático.',
    image: 'https://images.pexels.com/photos/8477881/pexels-photo-8477881.jpeg?auto=compress&cs=tinysrgb&w=600',
    cookingLevels: ['Sellado', 'Término Medio', 'Tres Cuartos'],
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'María González',
    text: 'La mejor experiencia gastronómica que he tenido. El ribeye estaba perfecto y el servicio excepcional.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 2,
    name: 'Carlos Ruiz',
    text: 'El tomahawk es una experiencia única. La presentación y el sabor superaron todas mis expectativas.',
    rating: 5,
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 3,
    name: 'Ana Martínez',
    text: 'Ambiente acogedor y comida excepcional. El rack de cordero está preparado a la perfección.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
];