const initialState = 0

const KataReducer = (state = initialState, action) => {
    switch (action.type) {
        case "Hitung":
            return action.payload
        default:
            return state
    }
}

export default KataReducer