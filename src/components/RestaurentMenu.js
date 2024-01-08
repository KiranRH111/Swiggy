import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'
import { MENU_API } from '../utils/constants'

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
    const {itemCards} =  resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    return (
            <div className='menu'>
                <h1>{name}</h1>
                <h2>Menu</h2>
                <h3>{cuisines.join(',')} - {costForTwoMessage}</h3>
                <ul>
                    {itemCards?.map(item => <li key={item.card.info.id}>{item.card.info.name} - {item.card.info.price/100 || item.card.info.defaultPrice/100 }/-</li>)}
                </ul>
            </div>
    )
}

export default RestaurentMenu