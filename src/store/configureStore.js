import {createStore, combineReducers} from 'redux'
import countReducer from '../reducers/count'
import generateReducer from '../reducers/generateReducer'
import randomNumbersReducer from '../reducers/randomNumbers'
import articlesReducer from '../reducers/articlesReducer'
const configureStore=()=> {
    const store=createStore(combineReducers({
        count: countReducer,
        generatedValue: generateReducer,
        randomNumbers: randomNumbersReducer,
        articles: articlesReducer
    }))

    return store
}

export default configureStore