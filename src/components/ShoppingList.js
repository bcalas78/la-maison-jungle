import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'

function ShoppingList() {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  )

  return (
    <div className='lmj-shopping-list'>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul className='lmj-plant-list'>
        {plantList.map(({ id, cover, name, water, light}) => (
          <PlantItem
            id={id}
            cover={cover}
            name={name}
            water={water}
            light={light}
          />
          // <li key={plant.id} className='lmj-plant-item'>
          //   {plant.isBestSale && <span>🔥</span>}
          //   {plant.name}
          //   <CareScale careType='water' scaleValue={plant.water} />
          //   <CareScale careType='light' scaleValue={plant.light} />
          //   {plant.isSpecialOffer && <div className='lmj-sales'>"Soldes"</div> }
          //   {/* {plant.isBestSale || plant.category === "classique" && <span>🔥</span> } */}
          // </li>
        ))}
      </ul>
    </div>
  )
}

export default ShoppingList
