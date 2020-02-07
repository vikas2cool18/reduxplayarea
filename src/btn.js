import React from 'react'
import {connect} from 'react-redux'
import {increment} from './actions/count'

function Btn(props) {
    return (
        <button onClick={()=> {
            props.dispatch(increment())
        }}>{props.count}increment</button>
    )
}

const mapStateToProps=(state)=> {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(Btn)