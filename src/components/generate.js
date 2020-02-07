import React from 'react'
import {connect} from 'react-redux'
import {setNumber} from '../actions/generate'

function Generate(props) {
    

    const generateRandom=()=> {
        const random = Math.round(Math.random()*100)
        props.dispatch(setNumber(random))
    }
   
        return (


            <div>
                <h1>Generate Random</h1>
                <h2>{props.generatedValue}</h2>
                <button onClick={generateRandom}>Generate</button>
            </div>
        )
    }


const  mapStateToProps=(state)=> {
    return {
        generatedValue: state.generatedValue
    }

}
export default connect(mapStateToProps)(Generate)