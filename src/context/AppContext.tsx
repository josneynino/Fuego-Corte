import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface MenuItem {
  id: string;
  name: string;
  category: 'beef' | 'pork' | 'lamb';
  price: number;
  description: string;
  image: string;
  cookingLevels: string[];
}

interface CartItem extends MenuItem {
  cookingLevel: string;
  quantity: number;
}

interface Reservation {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  specialRequests?: string;
}

interface AppState {
  cart: CartItem[];
  reservation: Reservation | null;
  isMenuOpen: boolean;
}

type AppAction =
  | { type: 'ADD_TO_CART'; payload: CartItem }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'SET_RESERVATION'; payload: Reservation }
  | { type: 'TOGGLE_MENU' };

const initialState: AppState = {
  cart: [],
  reservation: null,
  isMenuOpen: false,
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.cart.find(
        item => item.id === action.payload.id && item.cookingLevel === action.payload.cookingLevel
      );
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id && item.cookingLevel === action.payload.cookingLevel
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => 
          !(item.id === action.payload.split('-')[0] && item.cookingLevel === action.payload.split('-')[1])
        ),
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      };
    case 'SET_RESERVATION':
      return {
        ...state,
        reservation: action.payload,
      };
    case 'TOGGLE_MENU':
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };
    default:
      return state;
  }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}