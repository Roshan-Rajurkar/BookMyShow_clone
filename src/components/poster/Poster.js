import React from 'react'
import { FcRating } from "react-icons/fc"


function Poster(props) {
    return (
        <>
            <div className='flex flex-col items-start gap-2 px-3 py-10'>
                <div className="h-80 ">
                    <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt={props.original_title} className="w-full h-full rounded-xl" />
                </div>
                <h3 className={`text-lg font-bold ${props.isDark ? 'text-white' : 'text-gray-700'}`}>
                    {props.title}
                </h3>
                <p className={`text-sm font-bold ${props.isDark ? 'text-white' : 'text-gray-700'} flex gap-2 items-center`}>
                    Rating : {props.vote_average} <span><FcRating /></span>
                </p>
            </div>
        </>
    )
}

export default Poster