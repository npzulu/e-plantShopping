// components/Navbar.jsx

function Navbar() {

  const cartCount = 1;

  return (

    <nav>

      <a href="/">Home</a>

      <a href="/plants">Plants</a>

      <a href="/cart">
        Cart 🛒 {cartCount}
      </a>

    </nav>
  );
}

export default Navbar;