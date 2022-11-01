import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';

const All = () => {
    const [Movie, setMovie] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [snum, setSnum] = useState(1);

    const allMovie = async () => {
        const res = await axios.get(`https://yts.mx/api/v2/list_movies.json?page=${page}&limit=50`);
        console.log(res.data, res.data.data.movie_count);
        setMovie(res.data.data.movies)
        setTotal(res.data.data.movie_count)
    }
    useEffect(() => {
        allMovie()
    }, [page])
    const listNum = Array.from({ length: total / 50 });
    const cnum = 20;
    console.log(listNum);
    return (
        <>
            <button onClick={() => setSnum(snum - cnum)}>Prev</button>
            <ul>
                {
                    listNum.slice(snum, snum + 10).map((it, idx) => <button onClick={() => setPage(idx + snum)}>{idx + snum}</button>)
                }
            </ul>
            <button onClick={() => setSnum(snum + cnum)}>Next</button>
            <div>
                {
                    Movie.map((it, idx) => {
                        return (
                            <li key={idx}>
                                {it.title}
                            </li>
                        )

                    })
                }
            </div>
        </>

    )
}

export default All