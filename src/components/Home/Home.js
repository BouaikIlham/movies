import axios from 'axios';
import React, { useEffect } from 'react'
import { MovieListing } from "../MovieListing/MovieListing"

function Home() {
    useEffect(() => {
        const fetchMovies = async () => {
            const response = await axios.get("http://www.omdbapi.com/?s=hello&apikey=d40ec0d7")
                .catch((err) => {
                    console.log("Error", err)
                });
            console.log(response)

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