// import { Fragment, useState } from "react"
import Layout from "../src/layout/Layout"
// import MintButton from "../src/components/MintButton"
import PageBanner from "../src/layout/PageBanner"
// import WalletConnect from 'components/WalletConnect'
// import {
//     useAccount
// } from 'wagmi'

const swap = () => {
    // const { address, isConnecting, isDisconnected } = useAccount();

    return (
        <div className="container">
        <div
            className="modal_content"
            style={{
                height: '100vh',
                maxWidth: '100%',
                display: 'block',
                margin: '0 auto',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <iframe
                height={'100%'}
                width={'100%'}
                src={'https://links.soulswap.finance'}
            />
        </div>
    </div>
    )
}

export default swap