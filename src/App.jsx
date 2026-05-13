import { useState } from 'react';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';
import AboutUs from './AboutUs.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const navigate = (page) => setCurrentPage(page);

  if (currentPage === 'landing') {
    return (
      <div className="landing-page">
        <div className="landing-overlay">
          <div className="landing-badge">🌿 Est. 2024 · Premium House Plants</div>
          <h1 className="landing-title">
            Paradise<br /><em>Nursery</em>
          </h1>
          <p className="landing-tagline">
            Bring nature indoors. Curated houseplants<br />
            that breathe life into every corner of your home.
          </p>
          <button className="btn-get-started" onClick={() => navigate('products')}>
            Explore Our Plants
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
        <p className="landing-footer-note">PARADISE NURSERY © 2024</p>
      </div>
    );
  }

  if (currentPage === 'cart') {
    return <CartItem navigate={navigate} />;
  }

  if (currentPage === 'about') {
    return <AboutUs navigate={navigate} />;
  }

  return <ProductList navigate={navigate} />;
}

export default App;
