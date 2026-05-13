// components/ProductList.jsx

import { useDispatch } from "react-redux"
import { addItem } from "../cartSlice"

function ProductList() {

  const dispatch = useDispatch()

  const plants = [
    {
      id: 1,
      name: "Lavender",
      description: "Relaxing aromatic indoor plant",
      category: "Aromatic",
      price: 10,
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735"
    },
    {
      id: 2,
      name: "Mint",
      description: "Fresh mint plant for indoor gardens",
      category: "Aromatic",
      price: 8,
      image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e57b"
    },
    {
      id: 3,
      name: "Aloe Vera",
      description: "Medicinal plant with healing properties",
      category: "Medicinal",
      price: 12,
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
    },
    {
      id: 4,
      name: "Basil",
      description: "Useful medicinal herb plant",
      category: "Medicinal",
      price: 9,
      image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655"
    },
    {
      id: 5,
      name: "Snake Plant",
      description: "Decorative low-maintenance plant",
      category: "Decorative",
      price: 15,
      image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5b14"
    },
    {
      id: 6,
      name: "Peace Lily",
      description: "Beautiful decorative flowering plant",
      category: "Decorative",
      price: 18,
      image: "https://images.unsplash.com/photo-1463320726281-696a485928c7"
    }
  ]

  const addToCart = (plant) => {
    dispatch(addItem({
      id: plant.id,
      name: plant.name,
      price: plant.price,
      image: plant.image,
      quantity: 1
    }))
  }

  return (
    <div>
      <h1>Our Plants</h1>

      {plants.map((plant) => (
        <div className="product-card" key={plant.id}>

          <img
            src={plant.image}
            alt={plant.name}
            width="200"
          />

          <h2>{plant.name}</h2>
          <p>{plant.description}</p>
          <p>Category: {plant.category}</p>
          <p>${plant.price}</p>

          <button onClick={() => addToCart(plant)}>
            Add to Cart
          </button>

        </div>
      ))}
    </div>
  )
}

export default ProductList