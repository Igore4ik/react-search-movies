
export const loadingAC = () => {
    return{
        type: "SET_LOADING"
    }
}
export const errorMessageAC = (errorMessage) => {
    return{
        type: "SET_ERROR",
         errorMessage
    }
}
export const moviesAC = (movies) => {
    return{
        type: "SET_MOVIES",
         movies
    }
}

export const searchMoviesThunk = (searchValue) => {
   const r = fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=55a2a180`)
        .then(response => response.json())
        .then(jsonResponse => {
            return jsonResponse
        })
    return r
}