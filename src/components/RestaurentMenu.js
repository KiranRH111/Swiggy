import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'
import { MENU_API } from '../utils/constants'
import RestaurantCategory from './RestaurantCategory'

const RestaurentMenu = () => {

    const [resInfo, setResInfo] = useState(null)
    const {resId} = useParams()

    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(MENU_API+resId)
        const json = await data.json()
        console.log(json);
        setResInfo(json.data)
    }

    if(resInfo === null) return <Shimmer/>

    const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info
    // const {itemCards} =  resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    // console.log(  resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    // console.log('categories',categories);
    return (
            <div className='text-center'>
                <h1 className='font-bold my-6 text-2xl'>{name}</h1>
                <p className='font-bold text-md'>{cuisines.join(',')} - {costForTwoMessage}</p>
                {categories.map((category)=>(
                    <RestaurantCategory data={category?.card?.card}/>
                ))}
               
            </div>
    )
}

export default RestaurentMenu