const initialState=''
const generateReducer=(state=initialState, action)=> {
    switch(action.type) {
        case 'GENERATE_RANDON' : {
            console.log(action.payload)
            return action.payload
        }

        default : {
            return state
        }
    }
}

export default generateReducer