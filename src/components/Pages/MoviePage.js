import React from 'react'
import MovieHero from '../MovieHero/MovieHero';
import { TbListDetails } from 'react-icons/tb'

const launchRazorPay = () => {
    const options = {
        key: "rzp_test_NH3P46TwtaPMdR",
        amount: 100,
        currency: "INR",
        name: "Book My Show Clone",
        description: "Movie Purchase on Rental",
        image: "https://i.ibb.co/zPBTW3H/imgbin-bookmyshow-office-andriod-ticket-png.png",
        handle: () => {
            alert("Payment done")
        },
        theme: { color: "#c4242d" }
    };
    const rzp = new window.Razorpay(options);
    rzp.open()
};

const Movie = () => {
    return (
        <>
            <MovieHero handlePayment={launchRazorPay} />
            <div className='my-12 container px-4 w-2/3 ml-28'>

                <div className='flex flex-col items-start gap-3' >
                    <h2 className='text-gray-800 font-bold text-2xl'>About the movie</h2>
                    <p>
                        Bholaa, a prisoner, is finally going home after 10 years of imprisonment to meet his young daughter. His journey gets difficult when he is arrested mid-way. At first, he is not aware of the grave situation he has got himself into but after a crazy incident takes place, he must travel a pathway full of crazy obstacles with death lurking around every corner. Will he get to meet his daughter?
                    </p>
                </div>
                <hr className='my-8 ' />


                <div>
                    <h1 className='text-gray-800 font-bold text-2xl'>Applicable Offers</h1>
                    <div className='w-2/3 my-6 bg-[rgb(255,241,204)] p-4 flex gap-4 items-center border-2 border-orange-500 border-dashed rounded-md cursor-pointer'>
                        <TbListDetails className='text-2xl text-white bg-gray-900' />
                        <div className='flex flex-col'>
                            <h2 className='font-bold text-gray-800'>STREAMING MOVIES FOR FREE!!</h2>
                            <small className='text-gray-700'>Tap to view details</small>
                        </div>
                    </div>
                </div>

                {/* just passed it in movieHero as a prob named it as handlePayment */}
                {/* 
                <button onClick={launchRazorPay} class=" mt-4 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded">
                    Book Tickets
                </button> */}

            </div>
        </>
    )

}

export default Movie;