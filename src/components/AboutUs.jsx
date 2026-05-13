import { useSelector } from 'react-redux';

function AboutUs({ navigate }) {
  const cartItems = useSelector(state => state.cart.items);
  const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="about-page">
      {/* Navbar */}
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

      {/* Hero */}
      <div className="about-hero">
        <h1>About Us</h1>
        <p>
          Paradise Nursery was founded with a simple belief: every home deserves
          the beauty, calm, and vitality that living plants bring.
        </p>
      </div>

      <div className="about-content">
        <div className="about-grid">
          <div className="about-card">
            <div className="about-icon">🌱</div>
            <h3>Our Mission</h3>
            <p>
              We source the finest houseplants from sustainable growers around the world,
              carefully selecting varieties that thrive indoors and bring lasting joy.
              Every plant we sell is nursery-grown with care and shipped to arrive healthy.
            </p>
          </div>
          <div className="about-card">
            <div className="about-icon">🌍</div>
            <h3>Sustainability</h3>
            <p>
              We partner exclusively with eco-conscious growers. Our packaging is
              100% recyclable and our delivery routes are optimized to minimize
              our carbon footprint — because we love the planet as much as you do.
            </p>
          </div>
          <div className="about-card">
            <div className="about-icon">🏡</div>
            <h3>Our Story</h3>
            <p>
              Founded in 2024 by a team of plant enthusiasts, Paradise Nursery started
              as a small local greenhouse. Today we ship to customers across the country,
              but our love for plants and community remains as strong as ever.
            </p>
          </div>
          <div className="about-card">
            <div className="about-icon">💚</div>
            <h3>Plant Guarantee</h3>
            <p>
              Every plant comes with our 30-day happiness guarantee. If your plant
              arrives unhealthy or doesn't thrive within the first month,
              we'll replace it — no questions asked.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

