import React from 'react';
import {connect} from 'react-redux'
import {increment, decrement, reset} from './actions/count'
import Btn from './btn'
import Generate from './components/generate'
import RandomNumbers from './components/RandomNumbers'
import ListArticles from './components/articles/List'

function App(props) {
  /* console.log(props)
  props.dispatch(increment()) */

  function resetTheValue(props) {
    const decision=window.confirm("Are you sure, you want to reset ?")
    if(decision) {
      props.dispatch(reset())
    }
  }

  return (    
    <div>
      <h1>Redux Playarea</h1>
      <h2>{props.count}</h2>
      <button onClick={()=> {
        props.dispatch(increment())}}>+</button>
        <Btn />
        
        
        <button onClick={()=> {
        props.dispatch(decrement())}}>-</button>
        <button onClick={()=> {
        resetTheValue(props)}}>Reset</button>
        <hr />
        <Generate />
        <hr />
        <RandomNumbers />
        <hr />
        <ListArticles />
    </div>
  )
}

/* const wrappedComponent=connect()(App)

export default wrappedComponent; */

const mapStateToProps=(state)=> {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(App)
