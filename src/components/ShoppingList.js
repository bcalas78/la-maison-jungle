import { useState } from 'react'
import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import Categories from './Categories'
import '../styles/ShoppingList.css'

function ShoppingList({ cart, updateCart }) {
  const [activeCategory, setActiveCategory] = useState('')
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  )

  function addToCart(name, price) {
    const currentPlantSaved = cart.find((plant) => plant.name === name)
    if (currentPlantSaved) {
      const cartFilteredCurrentPlant = cart.filter(
          (plant) => plant.name !== name
      )
      updateCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount: currentPlantSaved.amount + 1 }
      ])
    } else {
      updateCart([...cart, { name, price, amount: 1 }])
    }
  }

  return (
    <div className='lmj-shopping-list'>
      <Categories
        categories={categories}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />

      {/* <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul> */}

      <ul className='lmj-plant-list'>
        {plantList.map(({ id, cover, name, water, light, price, category}) =>
          !activeCategory || activeCategory === category ? (
            <div key={id}>
              <PlantItem
              cover={cover}
              name={name}
              water={water}
              light={light}
              price={price}
              />
              <button onClick={() => addToCart(name, price)}>Ajouter</button>
            </div>
          ) : null
        )}
      </ul>
    </div>
  )
}

export default ShoppingList



// Code pour exercice "promo" et "meilleures ventes"
// <li key={plant.id} className='lmj-plant-item'>
          //   {plant.isBestSale && <span>🔥</span>}
          //   {plant.name}
          //   <CareScale careType='water' scaleValue={plant.water} />
          //   <CareScale careType='light' scaleValue={plant.light} />
          //   {plant.isSpecialOffer && <div className='lmj-sales'>"Soldes"</div> }
          //   {/* {plant.isBestSale || plant.category === "classique" && <span>🔥</span> } */}
          // </li>
