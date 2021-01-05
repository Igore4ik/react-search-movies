import React from "react";
import './App.css';
import Header from "./components/Header";
import Movie from "./components/Movie";
import Search from "./components/Search";
import Loader from "./components/Loader";
import {useDispatch, useSelector} from "react-redux";
import {errorMessageAC, loadingAC, moviesAC, searchMoviesThunk} from "./redux/actions";

function App() {
    const dispatch = useDispatch();
    const {movies, loading, errorMessage} = useSelector(state => state)
    const search = searchValue => {
        dispatch(loadingAC());
        const promise = searchMoviesThunk(searchValue);
        Promise.all([promise]).then((response) => {
            if (response[0].Response === "True") {
                dispatch(moviesAC(response[0].Search))
            } else {
                dispatch(errorMessageAC(response[0].Error));
            }
        });
    };


    return (
        <div className="App">
            <Header text="HOOKED"/>
            <Search search={search}/>
            <p className="App-intro">Sharing a few of our favourite movies</p>
            <div className="movies">
                {loading && !errorMessage ? (
                    <Loader/>
                ) : errorMessage ? (
                    <div className="errorMessage">{errorMessage}</div>
                ) : (
                    movies.map((movie, index) => (
                        <Movie key={`${index}-${movie.Title}`} movie={movie}/>
                    ))
                )}

            </div>
        </div>
    );

}

export default App;
