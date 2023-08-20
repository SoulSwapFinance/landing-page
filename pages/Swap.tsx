// import { Fragment, useState } from "react"
import Layout from "../src/layout/Layout"
// import MintButton from "../src/components/MintButton"
import PageBanner from "../src/layout/PageBanner"
// import WalletConnect from 'components/WalletConnect'
// import {
//     useAccount
// } from 'wagmi'

const Exchange = () => {
    // const { address, isConnecting, isDisconnected } = useAccount();

    return (
        <Layout pageName={"Links"}>
            <PageBanner pageName={"Links"} />
            <div className="soul_fn_aboutpage">
                <section id="links">
                    <div className="container">
                        <div
                            className="modal_content"
                            style={{
                                height: '100vh',
                                maxWidth: '720px',
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
                </section>
            </div>
        </Layout>
    )
}

export default Exchange