const redux=require('redux')
const createStore=redux.createStore

const combineReducer=redux.combineReducers

const applyMiddleWare=redux.applyMiddleware
const reduxLogger=require('redux-logger')
const logger=reduxLogger.createLogger()


console.log('From index js')

const BUY_CAKE ="BUY_CAKE"
const BUY_ICECREAM="BUY_ICECREAM"
//Action creator

function buyCake(){
    return {
        type:BUY_CAKE,
        info:'Buying Ice Cake'
    }
}


 function buyIceCream()
 {
    return {
        type:BUY_ICECREAM,
        info:'Buying Ice Cream'
    }
 }





const initialCakeState={
    numOfCakes:10,
    // numOfIceCream:20
}

const intialIceCreamState={
    numOfIceCream:20
}

const cakeReducer=(state=initialCakeState,action)=>{
    switch(action.type){
        case BUY_CAKE:return {
            ...state,
            numOfCakes:state.numOfCakes-1
        }
        default: return state
    }
}




const IceCreamReducer=(state=intialIceCreamState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:return {
            ...state,
            numOfIceCream:state.numOfIceCream-1
        }
        default: return state
    }
}



const rootReducer=combineReducer({
    cake:cakeReducer,
    iceCream:IceCreamReducer

})






// const cakeReducer=(state=initialCakeState,action)=>{
//     switch(action.type){
//         case BUY_CAKE:return{
//             ...state,
//             numOfCakes:state.numOfCakes-1
//         }
//         case BUY_ICECREAM:return{
//             ...state,
//             numOfIceCream:state.numOfIceCream-1
//         }
//         default:return state
//     }
// }



// const store=createStore(cakeReducer)


const store=createStore(rootReducer,applyMiddleWare(logger))

console.log('Initial state',store.getState())
const unsubscribe=store.subscribe(()=>console.log("Updated State",store.getState()))
console.log('Initial state',unsubscribe())
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyCake())

// store.dispatch(buyIceCream())
// store.dispatch(buyIceCream())
// store.dispatch(buyIceCream())

unsubscribe()