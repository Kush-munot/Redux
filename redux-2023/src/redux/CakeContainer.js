import React, {useState} from 'react'
import {connect,useDispatch,useSelector} from 'react-redux'
import {buyCake} from './cake/cakeAction'
// import {buyCake} from '../redux'


function CakeContainer(props) {
  const [number,setNumber]=useState(1)
  // const numofCakes=useSelector(state => state.cake.numofCakes)

  // const dispatch=useDispatch()

  return (
    <div>
      <h1>Number of cakes - {props.numofCakes}</h1>
      <input type="text" value={number} onChange={e=>setNumber(e.target.value)}></input>
      <button onClick={()=>props.buyCake(number)}>Buy {number} Cake</button>
    </div>
  )
}

// export default CakeContaine

const mapStateToProps=(state,ownProps)=>{
  return{
    numofCakes:state.cake.numofCakes
  }
}

const mapDispatchToProps=(dispatch,ownProps)=>{
  return{
    buyCake:number=>dispatch(buyCake(number))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)