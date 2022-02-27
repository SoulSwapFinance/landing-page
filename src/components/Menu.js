/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../assets/logo.png'

const GradientBorderButton = styled.div`
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    border: double 3px transparent;
    border-radius: 80px;
    background-image: linear-gradient(#0d0e21, #0d0e21), radial-gradient(circle at top left, #9e58dd, #ee82ee);
    background-origin: border-box;
    background-clip: padding-box, border-box;
`

const Menu = ({ setIsOpen, isOpen }) => {
    return (
        <>
            <nav className="relative max-w-screen-lg mx-auto flex items-center justify-between px-4 sm:px-6">
                <div className="flex items-center flex-1">
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <Link to="/" aria-label="Home">
                            <img className="h-8 w-auto sm:h-10" src={Logo} alt="Logo" />
                        </Link>
                        {/* <Link to="/" className="text-xl font-bold leading-6 text-white sm:truncate ml-2">
                            Soul
                        </Link> */}
                        <div className="-mr-2 flex items-center md:hidden">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none transition duration-150 ease-in-out"
                                id="main-menu"
                                aria-label="Main menu"
                                aria-haspopup="true"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="hidden space-x-10 items-center md:flex content-center">
                    {/* <a
                        href="https://exchange.soulswap.finance"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-white hover:text-gray-300 transition duration-150 ease-in-out"
                    >
                        Products
                    </a> */}
                    <a
                        href="https://analytics.soulswap.finance"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-white hover:text-purple transition duration-150 ease-in-out"
                    >
                        ANALYTICS
                    </a>
                    <a
                        href="https://app.soulswap.finance"
                        className="inline-flex items-center text-sm leading-5 font-medium text-white"
                    >
                        <GradientBorderButton>LAUNCH APP</GradientBorderButton>
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Menu
