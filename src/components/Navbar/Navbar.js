import React from 'react';

import { BsChevronDown, BsChevronRight } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'

import { AiOutlineMenu } from 'react-icons/ai'

import Logo from '../assest/logo.png'

const Navsm = () => {
    // for mobile screen
    return (
        <>
            <div className='text-white flex items-center justify-between'>
                <div>
                    <h3 className='text-xl font-bold'>It All Starts Here!</h3>
                    <span className='text-grey-400 text-xs flex items-center '>
                        Bhuvneshwar <BsChevronRight className='w-2.5 h-2.5' />
                    </span>
                </div>
                <div className='flex justify-between gap-5'>
                    <button class="bg-pink-500 hover:bg-pink-600 font-medium text-sm text-white px-2 py-1 rounded">
                        Use App
                    </button>
                    <div className='w-8 h-8'>
                        <BiSearch className='w-full h-full' />
                    </div>
                </div>
            </div>
        </>
    )

}

const Navmd = () => {
    //  for Tablet Screen
    return (
        <div className='text-sm text-grey-800 w-full flex items-center bg-white gap-2 px-2.5 py-1.5 rounded-md'>
            <BiSearch className='text-iconCol-400' />
            <input type="search" className='w-full focus:outline-none ' placeholder='Search for Movies, Plays, Sports and Activities' />
        </div>
    )
}

const Navlg = () => {
    // for desktop screen
    return (
        <div className='container mx-auto px-4 flex items-center justify-around'>
            <div className='w-3/5 flex items-center'>
                <div className='w-15 h-8'>
                <img src={Logo} alt="logo" className='w-full h-full' />
                </div>
                <div className='text-sm text-grey-800 w-full flex items-center bg-white gap-2 px-2.5 py-1.5 rounded-md'>
                    <BiSearch className='text-iconCol-400' />
                    <input type="search" className='w-full focus:outline-none ' placeholder='Search for Movies, Plays, Sports and Activities' />
                </div>

            </div>


            <div className='flex items-center gap-5'>
                <span className='text-gray-400 text-xs flex items-center gap-1 hover:text-white'>
                    Bhuvneshwar <BsChevronDown className='w-2.5 h-2.5' />
                </span>

                <button className='bg-red-500 text-white text-sm px-2 py-1 rounded'>
                    Sign In
                </button>
                <div className='w-8 h-8 text-white'>
                    <AiOutlineMenu className='w-full h-full' />
                </div>
            </div>
        </div>
    )
}

const Navbar = () => {
    return (
        <>
            <nav className='bg-navCol-700 px-4 py-2'>

                <div className='md:hidden'>
                    {/* mobile screen */}
                    <Navsm />

                </div>
                <div className='hidden lg:hidden md:flex'>
                    {/* tablet screen */}
                    <Navmd />
                </div>
                <div className='hidden lg:flex'>
                    {/* desktop screen */}
                    <Navlg />
                </div>

            </nav>
        </>
    )

}

export default Navbar;