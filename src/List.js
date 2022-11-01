import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Load from './Load';
const List = ({ genre, limit }) => {
    // data 가져오기

    const [movie, getMovie] = useState([]);
    const [load, setLoad] = useState(true);


    const movieData = async () => {
        setLoad(true)
        const movie = await axios.get(`https://yts.mx/api/v2/list_movies.json?limit=${limit}&genre=${genre}`);
        getMovie(movie.data.data.movies);
        setLoad(false)
    }
    useEffect(() => {
        movieData()
    }, [genre])

    return (
        <div>
            {
                load
                    ? <Load />
                    :
                    <ul className='List'>
                        {
                            movie.map((it) => {
                                return (
                                    <li key={it.id}>
                                        <figure>
                                            <img src={it.medium_cover_image} alt={it.title} />
                                        </figure>
                                        <div>{it.title}</div>
                                    </li>
                                )
                            })
                        }
                    </ul>
            }
        </div>
    )
}

export default List