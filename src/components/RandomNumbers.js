import React from 'react'
import {connect} from 'react-redux'
import {generate} from '../actions/randomNumbers'

function RandomNumbers(props) {
    const generateRandomNumber=()=> {
        const number=Math.round(Math.random()*100)
        props.dispatch(generate(number))

    }
    return (
        <div>
            <h2>R Numbers-{props.randomNumbers.random}</h2>
            <button onClick={generateRandomNumber}>Generate</button>
            <ul>
                {props.randomNumbers.numbers.map((number, i)=> {
                return <li key={i}>{number}</li>
                })}
            </ul>
        </div>
    )

}
const mapStateToProps=(state)=> {
    return {
        randomNumbers: state.randomNumbers
    }
}
export default connect(mapStateToProps)(RandomNumbers)