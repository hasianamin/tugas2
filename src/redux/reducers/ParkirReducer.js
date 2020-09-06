const InitialState = 0

const ParkirReducer = (state=InitialState, action) => {
    let res
    switch (action.type) {
        case 'Mobil':
            state = 3000 * action.payload
            res = [state, action.type, action.payload]
            return res

        case 'Motor':
            state = 1000 * action.payload
            res = [state, action.type, action.payload]
            return res
        default:
            return state
    }
}

export default ParkirReducer