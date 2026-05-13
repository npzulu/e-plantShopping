import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice.jsx';

function CartNavbar({ navigate }) {
  const cartItems = useSelector(state => state.cart.items);
  const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => navigate('landing')}>
        <span className="navbar-logo">🌿</span>
        <span className="navbar-name">Paradise <span>Nursery</span></span>
      </div>
      <div className="navbar-links">
        <button className="nav-link" onClick={() => navigate('landing')}>Home</button>
        <button className="nav-link" onClick={() => navigate('products')}>Plants</button>
        <button className="nav-link" onClick={() => navigate('about')}>About</button>
        <button className="nav-link cart-link" onClick={() => navigate('cart')}>
          🛒
          {totalQty > 0 && <span className="cart-badge">{totalQty}</span>}
          Cart
        </button>
      </div>
    </nav>
  );
}

function CartItem({ navigate }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [checkoutMsg, setCheckoutMsg] = useState(false);

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.cost * item.quantity,
    0
  );

  const handleIncrease = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrease = (item) => {
    if (item.quantity <= 1) {
      dispatch(removeItem(item.name));
    } else {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    }
  };

  const handleDelete = (name) => {
    dispatch(removeItem(name));
  };

  const handleCheckout = () => {
    setCheckoutMsg(true);
    setTimeout(() => setCheckoutMsg(false), 3000);
  };

  return (
    <div className="cart-page">
      <CartNavbar navigate={navigate} />

      <div className="cart-hero">
        <h1>Your Cart</h1>
      </div>

      <div className="cart-container">
        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <div className="cart-empty-icon">🛒</div>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added any plants yet.</p>
            <button className="btn-get-started" onClick={() => navigate('products')}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Browse Plants
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div key={item.name} className="cart-item-card">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-thumb"
                  />
                  <div className="cart-item-details">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-unit">Unit price: ${item.cost.toFixed(2)}</p>
                    <div className="quantity-controls">
                      <button className="qty-btn" onClick={() => handleDecrease(item)}>−</button>
                      <span className="qty-display">{item.quantity}</span>
                      <button className="qty-btn" onClick={() => handleIncrease(item)}>+</button>
                    </div>
                  </div>
                  <div className="cart-item-right">
                    <span className="cart-item-total">
                      ${(item.cost * item.quantity).toFixed(2)}
                    </span>
                    <button
                      className="btn-delete"
                      onClick={() => handleDelete(item.name)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="cart-total-row">
                <span className="cart-total-label">Total Amount</span>
                <span className="cart-total-amount">${totalAmount.toFixed(2)}</span>
              </div>
              <div className="cart-actions">
                <button className="btn-continue" onClick={() => navigate('products')}>
                  ← Continue Shopping
                </button>
                <button className="btn-checkout" onClick={handleCheckout}>
                  Checkout
                </button>
              </div>
              {checkoutMsg && (
                <p style={{
                  textAlign: 'center',
                  marginTop: '16px',
                  color: 'var(--green-mid)',
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.05rem'
                }}>
                  🌿 Coming Soon! Thank you for shopping with Paradise Nursery.
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartItem;