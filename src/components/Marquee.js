/* eslint-disable */
import React from 'react'
import Ticker from 'react-ticker'

const Marquee = ({ children }) => {
    return (
        <div>
            <Ticker offset={0}>
                {() => <div className="flex flex-row space-x-6 mx-auto overflow-x-scroll no-scrollbar">{children}</div>}
            </Ticker>
        </div>
    )
}

export default Marquee
