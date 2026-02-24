import {useContext} from 'react'
import Header from '../Header'
import {CartContext} from '../../CartContext'
import './index.css'

const Cart = () => {
  const {cartItems} = useContext(CartContext)
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0)
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0,
  )

  return (
    <>
      <Header />
      <div className="cart-container">
        {cartItems.length === 0 ? (
          <div className="empty-cart-wrapper">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
              alt="empty cart"
              className="cart-img"
            />
            <h2 className="empty-cart-heading">Your Cart is Empty</h2>
            <p className="empty-cart-text">
              Add items from our products to get started
            </p>
          </div>
        ) : (
          <div className="cart-wrapper">
            <div className="cart-header">
              <h2 className="cart-title">Shopping Cart</h2>
            </div>
            <ul className="cart-list">
              {cartItems.map(item => {
                const itemTotal = Number(item.price) * item.quantity

                return (
                  <li key={item.id} className="cart-item">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="cart-item-img"
                    />
                    <div className="cart-item-details">
                      <h3>{item.title}</h3>
                      <p>Price: Rs {item.price}/-</p>
                      <p>
                        Quantity:{' '}
                        <span className="quantity-badge">{item.quantity}</span>
                      </p>
                      <p className="item-total">Item Total: Rs {itemTotal}/-</p>
                    </div>
                  </li>
                )
              })}
            </ul>
            <div className="bill-summary">
              <h3 className="bill-summary-title">Bill Summary</h3>
              <div className="bill-row">
                <p>Total Products</p>
                <p>{cartItems.length}</p>
              </div>
              <div className="bill-row">
                <p>Total Quantity</p>
                <p>{totalQuantity}</p>
              </div>
              <div className="bill-row">
                <p>Subtotal</p>
                <p>Rs {totalAmount}/-</p>
              </div>
              <div className="bill-row bill-row-final">
                <p>Total Bill</p>
                <p>Rs {totalAmount}/-</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Cart
