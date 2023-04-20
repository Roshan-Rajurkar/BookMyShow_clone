import React from 'react'
import { FcLike } from 'react-icons/fc'
import { BsShare } from 'react-icons/bs'
const MovieHero = ({handlePayment}) => {
    return (
        <>

            {/* small */}
            <div className='md:hidden' style={{ height: "calc(180vh)" }}>
                <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/bholaa-et00326977-1679319423.jpg" alt="Poster" />
            </div>

            {/* medium */}
            <div className='hidden lg:hidden md:block '>
                <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/bholaa-et00326977-1679319423.jpg" alt="Poster" />

            </div>

            {/* large */}
            <div className='relative hidden lg:block' style={{ height: "33rem" }}>

                <div className='absolute w-full h-full z-10 '
                    style={{ backgroundImage: "linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%)" }}
                />

                <div className='absolute z-30 w-full h-96 top-12 px-12 flex'  >
                    <img className='h-full w-64 rounded-xl' src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/bholaa-et00326977-1679319423.jpg" alt="" />
                    <div className='flex justify-between px-5 py-3  w-full text-white' >
                        <div className='flex flex-col justify-between'>
                            <h1 className='text-5xl font-bold'>Bholaa</h1>
                            <p className='flex gap-2 justify-centre items-center'> <FcLike className='text-3xl' /> <b>12.3K</b> <small>Are Interested</small></p>
                            <div className='flex border-2 p-4 gap-6 justify-centre items-center'>
                                <div>
                                    <h4>Releasing on 30 Mar, 2023</h4>
                                    <small>Are You Interested in watching this movie?</small>
                                </div>
                                <button className='bg-white rounded-md text-black h-8 p-1'>I'm interested</button>
                            </div>
                            <div className='flex gap-2 '>
                                <button className='flex gap-2 bg-white rounded-md text-black h-8 p-1 ' >
                                    <a className='hover:underline' href="">2D</a>
                                    <a className='hover:underline' href="">IMAX 3D</a>
                                    <a className='hover:underline' href="">4DX 3D</a>
                                    <a className='hover:underline' href="">3D</a>
                                </button>
                                <button className='bg-white rounded-md text-black h-8 px-2'>Hindi</button>
                            </div>
                            <p>2h 25m : Action/Thriller : UA</p>
                            <button onClick={handlePayment} className='ml-6 text-xl rounded-md text-white h-12 px-2 bg-red-500 w-48' >Book tickets</button>
                        </div>
                        <div >
                            <div className='flex justify-center items-center gap-2 bg-black p-4 rounded-md bg-opacity-40 '>
                                <BsShare className='text-2xl' /> <i>Share</i>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='absolute z-30 w-6 h-96 top-12 right-24'  >
                    <img className='h-full w-full rounded-xl' src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/bholaa-et00326977-1679319423.jpg" alt="" />
                </div> */}

                <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/bholaa-et00326977-1679319423.jpg" alt="Poster"
                    className='w-full h-full' />

            </div>

        </>
    )
};

export default MovieHero;