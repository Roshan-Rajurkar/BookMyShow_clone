import React, { useState, useEffect } from 'react'
import HeroSlider from "react-slick";

import axios from 'axios';
// components
import { NextArrow, PrevArrow } from './ArrowsComponents'

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {


    const [images, setImages] = useState([]);

    useEffect(() => {

        const getData = async () => {
            const getImages = await axios.get('/movie/now_playing?api_key=eae5ad587b8cfd9039576cb49cbaac75');
            setImages(getImages.data.results)
            // console.log(getImages.data.results)
        }

        getData();

    }, [])

    const settingsLg = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "300px",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: < PrevArrow />
    }

    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: < PrevArrow />
    };



    return (
        <>

            <div className="lg:hidden">
                {/* hidden for large screen */}
                <HeroSlider {...settings}>
                    {
                        images.map((image) => {
                            return (<div key={image.id} className="w-full h-64 md-h:80 py-3">
                                <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className='w-full h-full rounded-md' />
                            </div>) 
                        })
                    }
                </HeroSlider>
            </div>

            <div className="hidden lg:block">
                <HeroSlider {...settingsLg}>
                    {
                        images.map((image) => {
                            return (<div key={image.id} className="w-full h-96 px-1 py-3">
                                <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className='w-full h-full rounded-md' />
                            </div>)
                        })
                    }
                </HeroSlider>
            </div>
        </>
    )

}

export default HeroCarousal