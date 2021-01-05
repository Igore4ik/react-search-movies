const initialState = {
    loading: false,
    movies: [],
    errorMessage: null
}

export const reducer = (state= initialState,action) => {
    switch (action.type){
        case "SET_LOADING":
            return{
                ...state,
                loading: true
            }
        case "SET_MOVIES":
            return{
                ...state,
                loading: false,
                movies: action.movies,
                errorMessage: null

            }
        case "SET_ERROR":
            return{
                ...state,
                loading: false,
                errorMessage: action.errorMessage
            }

        default:
            return state;
    }
}