import {createContext, useState} from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([])

  const addToCart = item => {
    setCartItems(prev => {
      const exists = prev.find(i => i.id === item.id)
      if (exists) {
        return prev.map(i =>
          i.id === item.id ? {...i, quantity: i.quantity + item.quantity} : i,
        )
      }
      return [...prev, item]
    })
  }

  return (
    <CartContext.Provider value={{cartItems, addToCart}}>
      {children}
    </CartContext.Provider>
  )
}
