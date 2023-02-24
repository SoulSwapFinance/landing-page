/* eslint-disable */
import React from 'react'
import { Transition } from '@headlessui/react'
import Logo from '../assets/logo.png'

const MobileMenu = ({ setIsOpen, isOpen }) => {
    return (
        <>
            <Transition
                show={isOpen}
                enter="ease-out duration-150"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-100"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div className="rounded-lg shadow-md">
                        <div
                            className="rounded-lg shadow-xs overflow-hidden"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="main-menu"
                            style={{ background: '#0c0e20' }}
                        >
                            <div className="px-5 pt-4 flex items-center justify-between">
                                <div>
                                    <img className="h-8 w-auto" src={Logo} alt="" />
                                </div>
                                <div className="-mr-2">
                                    <button
                                        type="button"
                                        className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none transition duration-150 ease-in-out"
                                        aria-label="Close menu"
                                        onClick={() => setIsOpen(!isOpen)}
                                    >
                                        <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="space-y-1 px-2 pt-2 pb-3">
                                <a
                                    href="https://forum.soulswap.finance"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block px-3 py-2 rounded-md text-base font-medium text-white focus:outline-none transition duration-150 ease-in-out"
                                    role="menuitem"
                                >
                                    Community Forum
                                </a>
                                <a
                                    href="https://enchant.soulswap.finance"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block px-3 py-2 rounded-md text-base font-medium text-white focus:outline-none transition duration-150 ease-in-out"
                                    role="menuitem"
                                >
                                    Governance
                                </a>
                                <a
                                    href="https://docs.soulswap.finance"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block px-3 py-2 rounded-md text-base font-medium text-white focus:outline-none transition duration-150 ease-in-out"
                                    role="menuitem"
                                >
                                    Documentation
                                </a>
                                <a
                                    href="https://app.soulswap.finance"
                                    className="block px-3 py-2 rounded-md text-base font-medium text-white focus:outline-none transition duration-150 ease-in-out"
                                    role="menuitem"
                                >
                                    SoulSwap Exchange
                                </a>
                                <a
                                    href="https://soul.sh/luxor"
                                    className="block px-3 py-2 rounded-md text-base font-medium text-white focus:outline-none transition duration-150 ease-in-out"
                                    role="menuitem"
                                >
                                    Luxor Money
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        </>
    )
}

export default MobileMenu
