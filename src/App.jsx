// App.jsx

import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';

function App() {

  return (

    <div>

      <Navbar />

      <div className="landing-page">

        <h1>Paradise Nursery</h1>

        <p>
          Welcome to Paradise Nursery.
          Discover beautiful indoor plants for your home.
        </p>

        <button>
          Get Started
        </button>

      </div>

      <AboutUs />

      <ProductList />

      <CartItem />

    </div>
  );
}

export default App;
