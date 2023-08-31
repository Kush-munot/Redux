import React from 'react'
import { buyIceCream } from './iceCream/iceCreamActions'
import { useDispatch, useSelector } from 'react-redux';


function IceCreamContainers() {
    const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Number of Ice Creams - {numOfIceCreams}</h1>
            <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
        </div>
    )
}

export default IceCreamContainers