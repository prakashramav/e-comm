import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalAmount = cartList.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      )

      const totalItems = cartList.reduce((acc, item) => acc + item.quantity, 0)
      return (
        <div>
          <h1>Order Total : Rs {totalAmount}</h1>
          <p>{totalItems} Items in a cart</p>
          <div>
            <button type="button" className="checkout-button">
              Check out
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
