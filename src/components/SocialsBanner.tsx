// import { Fragment, useState } from "react"
// import Layout from "../src/layout/Layout"
import Image from 'next/image'
// import PageBanner from "../src/layout/PageBanner"
// import MintButton from "../src/components/MintButton"
// import WalletConnect from 'components/WalletConnect'
// import {
//     useAccount
// } from 'wagmi'

const SocialsBanner = () => {
    // const { address, isConnecting, isDisconnected } = useAccount();
    const DISCORD_URL = 'https://discord.gg/soulswap'
    const TWITTER_URL = 'https://x.com/SoulSwapFinance'
    const TELEGRAM_URL = 'https://t.me/SoulSwapDeFi'
    const COINGECKO_URL = 'https://www.coingecko.com/coins/soul-swap'
    const APP_STORE_URL = 'https://apps.apple.com/us/app/soulwallet-defi-portal/id6469735252'
    // const FORUM_URL = 'https://forum.soulswap.finance'
    // const ANNOUNCEMENTS_URL = 'https://t.me/s/SoulSwapNews'

    return (
        // <Layout pageName={"Socials"}>
            // <PageBanner pageName={"Socials"} />
            <div className="soul_fn_aboutpage">
                <section id="socials">
                    <div className="container">
                        {/* About Item #1 */}
                        {/* <div className={`soul_fn_modal product_modal ${open ? "opened" : ""}`}> */}
                        <div
                            className="container"
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '24px',
                                margin: '8px',
                                padding: '12px',
                                // border: '1px solid',
                                // borderRadius: '12px',
                                // borderColor: '#8A02FF',
                            }}
                        >
                            <div
                                style={{
                                    display: 'grid',
                                    justifyContent: 'center',
                                    width: '100%',
                                }}
                            >
                            <a
                                href={TWITTER_URL} // √
                                target="_blank"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '12px',
                                    fontSize: '18px',
                                    color: '#FFFFFF',
                                    fontWeight: 'bold',
                                }}
                            >
                                <Image
                                    src="/images/dapps/twitter.png"
                                    alt="Twitter Logo"
                                    width={36}
                                    height={36}
                                />
                                {/* { `X (Twitter)` } */}
                            </a>
                            </div>
                            <div
                                style={{
                                    display: 'grid',
                                    justifyContent: 'center',
                                    width: '100%',
                                }}
                            >
                            <a
                                href={DISCORD_URL} // √
                                target="_blank"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '12px',
                                    fontSize: '18px',
                                    color: '#FFFFFF',
                                    fontWeight: 'bold',
                                }}
                            >
                                <Image
                                    src="/images/dapps/discord-color.png"
                                    alt="Discord Logo"
                                    width={36}
                                    height={36}
                                />
                                {/* { `Discord` } */}
                            </a>
                            </div>
                            <div
                                style={{
                                    display: 'grid',
                                    justifyContent: 'center',
                                    width: '100%',
                                }}
                            >
                            <a
                                href={TELEGRAM_URL} // √
                                target="_blank"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '12px',
                                    fontSize: '18px',
                                    color: '#8A02FF',
                                }}
                            >
                                <Image
                                    src="/images/dapps/telegram.png"
                                    alt="Telegram Logo"
                                    width={36}
                                    height={36}
                                />
                            </a>
                                {/* { `Telegram` } */}
                            </div>
                            <div
                                style={{
                                    display: 'grid',
                                    justifyContent: 'center',
                                    width: '100%',
                                }}
                            >
                            <a
                                href={COINGECKO_URL} // √
                                target="_blank"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '12px',
                                    fontSize: '18px',
                                    color: '#8A02FF',
                                }}
                            >
                                <Image
                                    src="/images/dapps/coingecko-color.png"
                                    alt="Coingecko Logo"
                                    width={36}
                                    height={36}
                                />
                            </a>
                                {/* { `CoinGecko` } */}
                            </div>
                            <div
                                style={{
                                    display: 'grid',
                                    justifyContent: 'center',
                                    width: '100%',
                                }}
                            >
                            <a
                                href={APP_STORE_URL} // √
                                target="_blank"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '12px',
                                    fontSize: '18px',
                                    color: '#8A02FF',
                                }}
                            >
                                <Image
                                    src="/images/dapps/app-store-blue.png"
                                    alt="App Store Logo"
                                    width={36}
                                    height={36}
                                />
                            </a>
                                {/* { `CoinGecko` } */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        // </Layout>
    )
}

export default SocialsBanner