import React, { useState, useEffect } from 'react'
import EntertainmentCardSlider from '../Entertainment/EntertainmentCard'
import Premier from '../Premier/Premier'
import PosterSlider from '../PosterSlider/PosterSlider'
import TempImages from '../config/PremierImages'
import axios from 'axios'

const HomePage = () => {

    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {

        const requestPopularMovies = async () => {
            const getPopularMovies = await axios.get('/movie/popular')
            setPopularMovies(getPopularMovies.data.results)
        }

        requestPopularMovies();
    }, [])
    console.log(popularMovies)

    return (
        <>
            <div className='flex flex-col gap-10'>
                <div className='container mx-auto px-4'>
                    <h1 className='text-2xl fot-bold text-grey-400'>
                        The best of Entertainment
                    </h1>
                    <EntertainmentCardSlider />
                    <div className='py-16'>

                        <div className='container  bg-navCol-200 mx-auto p-4 '>
                            <div className='flex'>
                                <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png" alt="Rupay"
                                    className='w-full h-full' />
                            </div>

                            <PosterSlider images={popularMovies} title="Premier" subtitle="Brand New Releases Every Friday" isDark />
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-4">
                    <PosterSlider images={popularMovies} title="Online Streaming Event" isDark={false} />
                </div>
                <div className="container mx-auto px-4">
                    <PosterSlider images={popularMovies} title="Outdoor Events" isDark={false} />
                </div>
            </div>
        </>
    )
}

export default HomePage