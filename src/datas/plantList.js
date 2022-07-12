import monstera from '../assets/monstera.jpg'
import lyrata from '../assets/lyrata.jpg'
import pothos from '../assets/pothos.jpg'
import succulent from '../assets/succulent.jpg'
import olivier from '../assets/olivier.jpg'
import basil from '../assets/basil.jpg'
import mint from '../assets/mint.jpg'
import calathea from '../assets/calathea.jpg'
import cactus from '../assets/cactus.jpg'

export const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
		isBestSale: true,
		light: 2,
		water: 3,
    cover: monstera
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
		light: 3,
		water: 1,
    cover: lyrata
	},
	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
		light: 1,
		water: 2,
    isSpecialOffer: true,
    cover: pothos
	},
	{
		name: 'yucca',
		category: 'classique',
		id: '4kk',
		light: 3,
		water: 1,
    cover: calathea
	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
		light: 3,
		water: 1,
    cover: olivier
	},
  {
		name: 'cactus',
		category: 'plante grasse',
		id: '8fp',
		light: 2,
		water: 1,
		cover: cactus
	},
	{
		name: 'géranium',
		category: 'extérieur',
		id: '6uo',
		light: 2,
		water: 2,
    cover: monstera
	},
	{
		name: 'basilique',
		category: 'extérieur',
		id: '7ie',
		isBestSale: true,
		light: 2,
		water: 3,
    isSpecialOffer: true,
    cover: basil
	},
	{
		name: 'aloe',
		category: 'plante grasse',
		id: '8fp',
		light: 2,
		water: 1,
    isSpecialOffer: true,
    cover: monstera
	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
		light: 2,
		water: 1,
    cover: succulent
	},
  {
		name: 'menthe',
		category: 'extérieur',
		id: '6uo',
		light: 2,
		water: 2,
		cover: mint
	}
]
