import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice.jsx';

const plantCategories = [
  {
    name: 'Aromatic Plants',
    icon: '🌸',
    description: 'Fill your space with natural fragrance and sensory delight.',
    plants: [
      {
        name: 'Lavender',
        image: 'https://images.unsplash.com/photo-1595351298020-038700609878?w=400&q=80',
        description: 'Famous for its soothing fragrance, perfect for bedrooms and bathrooms.',
        cost: 12.99,
      },
      {
        name: 'Jasmine',
        image: 'https://images.unsplash.com/photo-1615467544916-b5b8e9f83b1c?w=400&q=80',
        description: 'Star-shaped blooms with an intoxicating sweet scent.',
        cost: 14.99,
      },
      {
        name: 'Gardenia',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
        description: 'Glossy leaves and creamy blooms with rich, classic perfume.',
        cost: 18.99,
      },
      {
        name: 'Lemon Balm',
        image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=400&q=80',
        description: 'Citrusy aroma, easy to grow and perfect for kitchen windowsills.',
        cost: 9.99,
      },
      {
        name: 'Eucalyptus',
        image: 'https://images.unsplash.com/photo-1604608672516-5c6db4d2b8dc?w=400&q=80',
        description: 'Cool, spa-like fragrance that freshens any room naturally.',
        cost: 16.99,
      },
      {
        name: 'Rosemary',
        image: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=400&q=80',
        description: 'Woody, herbaceous scent with culinary and aromatic uses.',
        cost: 11.99,
      },
    ],
  },
  {
    name: 'Medicinal Plants',
    icon: '🌿',
    description: 'Nature\'s pharmacy — plants with healing and wellness properties.',
    plants: [
      {
        name: 'Aloe Vera',
        image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&q=80',
        description: 'The ultimate first-aid plant. Soothes burns, moisturizes skin.',
        cost: 13.99,
      },
      {
        name: 'Peppermint',
        image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=400&q=80',
        description: 'Cooling and invigorating. Great for teas and headache relief.',
        cost: 8.99,
      },
      {
        name: 'Chamomile',
        image: 'https://images.unsplash.com/photo-1567706054566-dba0e4742047?w=400&q=80',
        description: 'Daisy-like flowers for calming teas that ease anxiety and sleep.',
        cost: 10.99,
      },
      {
        name: 'Echinacea',
        image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=400&q=80',
        description: 'A powerful immune booster with striking purple coneflowers.',
        cost: 14.99,
      },
      {
        name: 'Tulsi (Holy Basil)',
        image: 'https://images.unsplash.com/photo-1527895109-ee3ba27eb01c?w=400&q=80',
        description: 'Sacred in Ayurveda — adaptogenic herb that reduces stress.',
        cost: 12.99,
      },
      {
        name: 'Calendula',
        image: 'https://images.unsplash.com/photo-1595351298020-038700609878?w=400&q=80',
        description: 'Bright orange blooms used in skin-soothing salves and teas.',
        cost: 9.99,
      },
    ],
  },
  {
    name: 'Air-Purifying Plants',
    icon: '💨',
    description: 'NASA-recommended plants that clean your indoor air naturally.',
    plants: [
      {
        name: 'Peace Lily',
        image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400&q=80',
        description: 'Filters benzene and formaldehyde; thrives in low light.',
        cost: 19.99,
      },
      {
        name: 'Snake Plant',
        image: 'https://images.unsplash.com/photo-1599598425947-5202edd56bdb?w=400&q=80',
        description: 'Nearly indestructible. Absorbs toxins and produces oxygen at night.',
        cost: 17.99,
      },
      {
        name: 'Spider Plant',
        image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400&q=80',
        description: 'Fast-growing, cheerful plant that removes carbon monoxide.',
        cost: 11.99,
      },
      {
        name: 'Boston Fern',
        image: 'https://images.unsplash.com/photo-1597055181300-6db5c3d9f0c3?w=400&q=80',
        description: 'Lush, feathery fronds that act as a natural humidifier.',
        cost: 15.99,
      },
      {
        name: 'Pothos',
        image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=80',
        description: 'Trailing beauty that removes indoor pollutants effortlessly.',
        cost: 9.99,
      },
      {
        name: 'Rubber Plant',
        image: 'https://images.unsplash.com/photo-1592473685515-c44e2a0c2b4e?w=400&q=80',
        description: 'Bold, glossy leaves that absorb airborne bacteria and mold.',
        cost: 22.99,
      },
    ],
  },
];

function Navbar({ navigate }) {
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

function ProductList({ navigate }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [toast, setToast] = useState('');

  const isInCart = (name) => cartItems.some(item => item.name === name);

  const handleAddToCart = (plant, categoryName) => {
    dispatch(addItem({ ...plant, category: categoryName }));
    setToast(`${plant.name} added to cart!`);
    setTimeout(() => setToast(''), 2500);
  };

  return (
    <div className="product-page">
      <Navbar navigate={navigate} />

      <div className="product-hero">
        <h1>Our Plant Collection</h1>
        <p>Handpicked plants to green up your home and lift your spirit</p>
      </div>

      <div className="product-sections">
        {plantCategories.map((category) => (
          <section key={category.name} className="category-section">
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h2 className="category-title">{category.name}</h2>
              <div className="category-line" />
            </div>
            <p className="category-desc">{category.description}</p>

            <div className="plants-grid">
              {category.plants.map((plant) => {
                const added = isInCart(plant.name);
                return (
                  <div key={plant.name} className="plant-card">
                    <div className="plant-image-wrap">
                      <img src={plant.image} alt={plant.name} loading="lazy" />
                      <span className="plant-category-tag">{category.name}</span>
                    </div>
                    <div className="plant-info">
                      <h3 className="plant-name">{plant.name}</h3>
                      <p className="plant-description">{plant.description}</p>
                      <div className="plant-footer">
                        <span className="plant-price">${plant.cost.toFixed(2)}</span>
                        <button
                          className="btn-add-cart"
                          onClick={() => handleAddToCart(plant, category.name)}
                          disabled={added}
                        >
                          {added ? '✓ Added' : 'Add to Cart'}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {toast && <div className="toast">🌿 {toast}</div>}
    </div>
  );
}

export default ProductList;