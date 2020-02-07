const randomNumberInitialState={
    random:'',
    numbers:[]
}

const randomNumbersReducer=(state=randomNumberInitialState, action)=> {
    switch(action.type) {
        case 'GENERATE' : {
            return {
                random: action.payload,
                numbers: [...state.numbers,action.payload]
            }
        }
        default : {
            return {...state}
        }
    }
}

export default randomNumbersReducer