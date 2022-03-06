/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'
// import { ExternalLink } from 'react-feather'
import styled from 'styled-components'
import Discord from '../assets/discord.png'
import Telegram from '../assets/telegram.png'
import Twitter from '../assets/twitter.png'
import Forum from '../assets/discussion.png'
import Documentation from '../assets/docs.png'

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
export const ExternalLink = styled.a`
  outline: none;
  text-decoration: none;
  color: ${({ color }) => (color ? `${color}` : "white")};
  border: ${({ border }) => (border ? `${border}` : `none`)};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}` : `1rem`)};
  text-align: ${({ textAlign }) => (textAlign ? `${textAlign}` : `left`)};
  padding: ${({ padding }) => (padding ? `${padding}` : "0")};
  margin: ${({ margin }) => (margin ? `${margin}` : "0 0")};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  /* text-shadow: 0 0 1px white; */

  &:hover {
    opacity: 50%;
  }

  &.active {
    border-bottom: 3px solid violet;
  }
`;

const Menu = ({ setIsOpen, isOpen }) => {
    return (
        <>
            <nav className="relative max-w-screen-lg mx-auto flex items-center justify-between px-4 sm:px-6">
                <div className="flex items-center flex-1">
                    <div className="flex rounded items-center bg-purple justify-start w-8 h-8 md:w-auto">
                        <div className="-ml- flex items-center md:hidden">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center p-1 rounded-md text-white focus:outline-none transition duration-150 ease-in-out"
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
                    <div className="flex items-center ml-2 gap-6 justify-center h-12 w-full hidden">
                        <ExternalLink href="https://discord.com/invite/DQjChB6Wa6" target="_blank" className="text-white">
                            <img className="h-8 w-auto sm:h-10" src={Discord} alt="SoulSwap SOUL Logo" />
                        </ExternalLink>
                        <ExternalLink href="https://twitter.com/SoulSwapFinance" target="_blank" className="text-white">
                            <img className="h-8 w-auto sm:h-10" src={Twitter} alt="Twitter Logo" />
                        </ExternalLink>
                        <ExternalLink href="https://t.me/SoulSwapDeFi" target="_blank" className="text-white">
                            <img className="h-8 w-auto sm:h-10" src={Telegram} alt="Telegram Logo" />
                        </ExternalLink>
                        <ExternalLink href="https://forum.soulswap.finance" target="_blank" className="text-white">
                            <img className="h-8 w-auto sm:h-10" src={Forum} alt="Forum Icon" />
                        </ExternalLink>
                        <ExternalLink href="https://docs.soulswap.finance" target="_blank" className="text-white">
                            <img className="h-8 w-auto sm:h-10" src={Documentation} alt="Documentation Icon" />
                        </ExternalLink>
                    </div>
                    <div className="hidden md:flex items-center lg:-ml-6 xl:-ml-16 gap-4 justify-start h-12 md:w-auto">
                        <ExternalLink href="https://discord.com/invite/DQjChB6Wa6" target="_blank" className="hover:text-purple">
                            Discord{/* <img className="h-8 w-auto sm:h-10" src={Discord} alt="SoulSwap SOUL Logo" /> */}
                        </ExternalLink>
                        <ExternalLink href="https://twitter.com/SoulSwapFinance" target="_blank" className="hover:text-purple">
                            Twitter
                        </ExternalLink>
                        <ExternalLink href="https://t.me/SoulSwapDeFi" target="_blank" className="hover:text-purple">
                            Telegram
                        </ExternalLink>
                        <ExternalLink href="https://forum.soulswap.finance" target="_blank" className="hover:text-purple">
                            Forums
                        </ExternalLink>
                        <ExternalLink href="https://docs.soulswap.finance" target="_blank" className="hover:text-purple">
                            Documentation
                        </ExternalLink>
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
                        <GradientBorderButton className="text-white hover:text-primary">LAUNCH APP</GradientBorderButton>
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Menu
