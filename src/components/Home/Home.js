import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { MovieListing } from "../MovieListing/MovieListing"
import { addMovies } from "../../features/movies/movieSlice"

function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchMovies = async () => {
            const response = await axios.get("http://www.omdbapi.com/?s=hello&apikey=d40ec0d7")
                .catch((err) => {
                    console.log("Error", err)
                });
            // console.log(response)
            dispatch(addMovies(response.data))

        }
        fetchMovies()
    })
    return (
        <div>
            <div className="banner-image"></div>
            <MovieListing />
        </div>
    )
}

export { Home }