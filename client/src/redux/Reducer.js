const initialValue = {
    value:undefined
}

const Reducer = (state = initialValue, action) =>{
    switch (action.type) {
        case "SINGLETODO":
            return {...state,
                   value:action.payload}
        default:
            return state
    }
}

export default Reducer