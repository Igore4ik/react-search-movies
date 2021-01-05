import React from "react";
import './App.css';
import Header from "./components/Header";
import Movie from "./components/Movie";
import Search from "./components/Search";

function App() {

    const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=55a2a180";


    const [loading, setLoading] = React.useState(true);
    const [movies, setMovies] = React.useState([]);
    const [errorMessage, setErrorMessage] = React.useState(null);

    React.useEffect(() => {
        fetch(MOVIE_API_URL)
            .then(response => response.json())
            .then(jsonResponse => {
                console.log(jsonResponse)
                setMovies(jsonResponse.Search);
                setLoading(false);
            });
    }, []);

    const search = searchValue => {
        setLoading(true);
        setErrorMessage(null);

        fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=55a2a180`)
            .then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse.Response === "True") {
                    setMovies(jsonResponse.Search);
                    console.log(jsonResponse.Search)
                    setLoading(false);
                } else {
                    setErrorMessage(jsonResponse.Error);
                    setLoading(false);
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
                    <span>loading...</span>
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
