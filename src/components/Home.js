/* eslint-disable */
import React, { useEffect, useState } from 'react'

import MobileMenu from './MobileMenu'
import Menu from './Menu'
// import Footer from './Footer'
import Marquee from './Marquee'

import { formattedNum, formattedCountUp } from './utils'
import soulData from 'soul-data'
import Coffin from '../assets/coffinbox.png'
import NeonCircle from '../assets/neon-circle.png'
import Underworld from '../assets/underworld.png'
// import Banner from '../assets/soul-banner.png'
import Banner from '../assets/soul-banner.png'
import Luxor from '../assets/luxor-logo.png'
import Buns from '../assets/buns.png'
import DeGatchi from '../assets/degatchi.png'
import Discord from '../assets/icons/Discord.png'
import Twitter from '../assets/icons/Twitter.png'
import Telegram from '../assets/icons/Telegram.png'
import Forum from '../assets/icons/Forum.png'
// import { CountUp } from 'use-count-up'

const Landing = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [stats, setStats] = useState()
    
    useEffect(() => {
        const fetchData = async () => {
            
            // get soul price in usd
            const results = await Promise.all([
                soulData.soul.priceUSD(),
                soulData.exchange.factory()
                // soulData.exchange.twentyFourHourData()
            ])
            console.log(results)

            const soulPrice = formattedCountUp(results[0], true)
            const totalLiquidity = formattedCountUp(results[1].liquidityUSD, true)
            const totalVolume = formattedCountUp(results[1].volumeUSD, true)
            // const fees = results[1].volumeUSD * 0.003
            // console.log('fees:%s', fees)
            const totalPairs = formattedCountUp(results[1].pairCount, false)

            const state = {
                primary: [
                    {
                        formatted: formattedNum(results[0], true),
                        number: Number(soulPrice.number),
                        title: '$SOUL Price',
                        decimalPlaces: 2,
                        prefix: soulPrice.prefix,
                        suffix: soulPrice.suffix
                    },
                    {
                        formatted: formattedNum(results[1].liquidityUSD, true),
                        number: Number(totalLiquidity.number),
                        title: 'Total Liquidity',
                        decimalPlaces: 0,
                        prefix: totalLiquidity.prefix,
                        suffix: totalLiquidity.suffix
                    },
                    // {
                    //     formatted: formattedNum(fees, true),
                    //     number: Number(fees),
                    //     title: 'Total Fees',
                    //     decimalPlaces: 0,
                    //     prefix: fees.prefix,
                    //     suffix: fees.suffix
                    // },
                    {
                        formatted: formattedNum(results[1].volumeUSD, true),
                        number: Number(totalVolume),
                        title: 'Total Volume',
                        decimalPlaces: 0,
                        prefix: totalVolume.prefix,
                        suffix: totalVolume.suffix
                    },
                    {
                        formatted: formattedNum(results[1].pairCount, false),
                        number: Number(totalPairs),
                        title: 'Total Pairs',
                        decimalPlaces: 0
                    }
                ],
                secondary: []
            }
            console.log(state)
            setStats(state)
        }
        fetchData()
    }, [])

    const ref = React.createRef()

    const handleClick = () =>
        ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })

    return (
        <>
            <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#0D0415' }}>
                <div
                    className="relative pt-6"
                    style={{
                        backgroundImage: NeonCircle,
                        backgroundPosition: 'center -8rem',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <Menu setIsOpen={setIsOpen} isOpen={isOpen} />
                    <MobileMenu setIsOpen={setIsOpen} isOpen={isOpen} />
                    <div className="max-w-2xl px-5 pt-6 mx-auto sm:px-4">
                        <div className="flex flex-col items-center space-y-4">
                            <img
                                className="w-full mx-auto"
                                src={
                                    Banner
                                }
                                alt="SoulSwap SOUL Logo"
                            />
                            <div
                                className="sm:text-4xl text-3xl font-primary sm:font-semibold text-center text-white sm:text-5xl"
                                style={{ maxWidth: '698px' }}
                            >
                                Summon DeFi with SOUL
                            </div>
                            <div className="pt-4 text-lg text-center font-base" style={{ color: '#E3E3E3' }}>
                            Swap, yield, lend, borrow, leverage, limit, and launch all on one, Soul-powered, community-driven ecosystem.
                            </div>
                            <div className="w-full max-w-lg pt-6 mx-auto sm:w-auto sm:flex sm:justify-center sm:space-x-6">

                                <div className="w-full mt-3 mb-3 rounded-md shadow sm:w-auto sm:mt-0 sm:ml-3 bg-neutral-700">
                                    {/* <button
                                        onClick={handleClick}
                                        className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white border border-transparent rounded-md"
                                    >
                                        Learn More
                                    </button> */}
                                    <a
                                        href="https://docs.soulswap.finance"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white rounded-md shadow-strong"
                                    >
                                        Documentation
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-5xl px-1 py-1 mt-6 mx-auto"
                                        style={{ backgroundColor: '#7b48be'}}
                                        >
                        <div className="grid grid-cols sm:grid-cols-2 gap-2 lg:grid-cols-4">
                            {stats &&
                                stats.primary.map(stat => {
                                    return (
                                        <div
                                            className="flex flex-col items-center px-6 py-8 text-center rounded-md bg-neutral-800 sm:px-14"
                                            key={stat.title}
                                        >
                                            <div className="text-4xl font-semibold text-white">
                                                {stat.formatted}
                                            </div>
                                            <div className="text-sm" style={{ color: '#7F7F7F' }}>
                                                {stat.title}
                                            </div>
                                        </div>
                                    )
                                })}
                        </div>
                    </div>
                    <div className="px-10 mx-auto 2xl:max-w-7xl">
                        <Marquee>
                            {stats &&
                                stats.secondary.map(stat => {
                                    return (
                                        <div
                                            className="flex flex-col items-center py-8 ml-40 rounded-md px-14"
                                            key={stat.title}
                                        >
                                            <div className="text-4xl font-semibold text-white">{stat.value}</div>
                                            <div className="text-sm" style={{ color: '#7F7F7F' }}>
                                                {stat.title}
                                            </div>
                                        </div>
                                    )
                                })}
                        </Marquee>
                    </div>
                </div>
                <div className="max-w-3xl px-4 pt-10 pb-4 mx-auto sm:pt-10">
                    <div
                        className="text-2xl font-semibold text-center text-white sm:text-4xl"
                        style={{ maxWidth: '902px' }}
                        ref={ref}
                    >
                        Innovations by our Summoners{' '}
                    </div>
                </div>
                <div className="sm:flex grid grid-cols gap-3 justify-center mt-24"
                >
                    <div className="ml-32 sm:ml-0" />
                    <ProductCard
                        imgUrl={
                            Buns
                        }
                        title={'Buns'}
                        description={
                            'Graduate of Economics (MA) and lead Solidity developer for 3 protocols, Buns began her Web3 journey in 2020.'
                        }
                        cta={'Follow'}
                        paddingLeft={true}
                        ctaLink={'https://twitter.com/0xbuns'}
                        customSize={'w-40 h-22'}
                    />
                    <div className="sm:hidden mb-12" />
                    <ProductCard
                        imgUrl={
                            DeGatchi
                        }
                        title={'DeGatchi'}
                        description={
                            'After mastering degen trading, DeGatchi began his journey in Web3 in 2020 and went on to cofounding SoulSwap.'
                        }
                        cta={'Follow'}
                        ctaLink={'https://twitter.com/DeGatchi'}
                        customSize={'w-40 h-22'}
                    />
                </div>
                <div className="pt-10 mx-auto 2xl:max-w-screen-2xl">
                    <div className="flex flex-row items-center justify-center px-10 pt-20 pb-8 mx-auto space-x-1 overflow-x-scroll no-scrollbar">
                        <div className="ml-32 sm:ml-0">
                        <ProductCard
                            imgUrl={
                                'https://github.com/SoulSwapFinance/assets/blob/master/blockchains/fantom/assets/0xe2fb177009FF39F52C0134E8007FA0e4BaAcBd07/logo.png?raw=true'
                            }
                            // paddingLeft={true}
                            title={'SoulSwap AMM'}
                            description={
                                'The most competitive rates for DeFi anywhere. Coming Soon: switch to other chains in one click.'
                            }
                            cta={'Enter Exchange'}
                            ctaLink={'https://app.soulswap.finance'}
                            customSize={'w-40 h-22'}
                        />
                        </div>
                        <div>
                        <ProductCard
                            imgUrl={
                                Luxor
                            }
                            title={'Luxor Money'}
                            description={
                                'Earn up to 10M% APY by staking Luxor Money, which helps build the SoulSwap Protocol as the reserve branch of our Ecosystem.'
                            }
                            cta={'Enter Luxor'}
                            ctaLink={'https://app.soulswap.finance'}
                            customSize={'w-40 h-22'}
                        />
                        </div>
                        <ProductCard
                            imgUrl={
                                Underworld
                            }
                            title={'Lending & Leverage'}
                            description={
                                'Isolated lending markets, elastic interest rates. Leverage long short or create your own market.'
                            }
                            cta={'Enter Underworld'}
                            ctaLink={'https://app.soulswap.finance/lend'}
                            customSize={'w-40 h-22'}
                        />
                        <div className="hidden sm:flex">
                        <ProductCard
                            imgUrl={
                                'https://raw.githubusercontent.com/SoulSwapFinance/assets/master/blockchains/fantom/assets/0x124B06C5ce47De7A6e9EFDA71a946717130079E6/logo.png'
                            }
                            title={'Seance Staking'}
                            description={
                                'Stake SEANCE for ecosystem and partner tokens. Staking SOUL by entering a SeanceCircle grants you eternal returns.'
                            }
                            cta={'Enter SeanceCircle'}
                            ctaLink={'https://app.soulswap.finance/stake'}
                            customSize={'w-40 h-22'}
                            />
                        </div>
                        <div className="mr-20">
                        <ProductCard
                            imgUrl={
                                Coffin
                            }
                            title={'CoffinBox Vault'}
                            description={
                                'Accelerate your returns with Coffin. Participate in passive-income strategies in our fractionalized reserve vault.'
                            }
                            cta={'Enter CoffinBox'}
                            ctaLink={'https://app.soulswap.finance/farm'}
                            // paddingRight={true}
                            customSize={'w-40 h-22'}
                        />
                        </div>
                    </div>
                </div>
                 <div className="max-w-2xl px-4 pt-10 mx-auto sm:pt-28">
                    <div
                        className="text-2xl font-semibold text-center text-white sm:text-4xl"
                        style={{ maxWidth: '902px' }}
                    >
                        An evolving community for an innovative DeFi landscape.{' '}
                    </div>
                </div>
                <div className="pt-10 mx-auto 2xl:max-w-screen-2xl">
                    <div className="flex flex-row justify-center items-center px-10 py-8 mx-auto space-x-2 overflow-x-scroll no-scrollbar">
                    <FeatureCard
                            imgUrl={
                                Discord
                            }
                            title={'2.50k+'}
                            description={'Discord Members'}
                            cta={'Join Discord'}
                            ctaLink={'https://discord.gg/DQjChB6Wa6'}
                            marginLeft={true}
                            customSize={'w-40 h-22'}
                        />
                    <FeatureCard
                            imgUrl={
                                Twitter
                            }
                            title={'5k+'}
                            description={'Twitter Followers'}
                            cta={'Follow Twitter'}
                            ctaLink={'https://twitter.com/soulswapfinance'}
                            customSize={'w-40 h-22'}
                        />
                    <FeatureCard
                            imgUrl={
                                Telegram
                            }
                            title={'1.8k+'}
                            description={'Telegram Members'}
                            cta={'Join Telegram'}
                            ctaLink={'https://t.me/SoulSwapDeFi'}
                            customSize={'w-40 h-22'}
                        />
                    <FeatureCard
                            imgUrl={
                                Forum
                            }
                            title={'100+'}
                            description={'Forum Members'}
                            cta={'Join Forum'}
                            ctaLink={'https://forum.soulswap.finance'}
                            paddingRight={true}
                            customSize={'w-40 h-22'}
                        />
                    {/* <FeatureCard
                            imgUrl={
                                Discord
                            }
                            title={'2.10k+'}
                            description={'SoulPower Holders'}
                            cta={'View Ftmscan'}
                            ctaLink={'https://ftmscan.com/address/0xe2fb177009ff39f52c0134e8007fa0e4baacbd07#code'}
                            paddingRight={true}
                            customSize={'w-40 h-22'}
                        /> */}
                        </div>
                        </div>
                        {/*
                        <FeatureCard
                            imgUrl={
                                CoffinBox
                            }
                            title={'2'}
                            description={'Chains Supported'}
                        />
                        <FeatureCard
                            imgUrl={
                                CoffinBox
                            }
                            title={'2.10k+'}
                            description={'SoulPower Holders'}
                            paddingRight={true}
                        />
                    </div>
                </div> */}
                {/* <div className="max-w-2xl px-4 pt-10 mx-auto sm:pt-28">
                    <div
                        className="text-2xl font-semibold text-center text-white sm:text-4xl"
                        style={{ maxWidth: '902px' }}
                    >
                        Meet the partners helping us conjure up the most alluring enchantments in DeFi.
                    </div>
                </div>
                <div className="max-w-6xl pt-10 pb-32 mx-auto">
                    <div className="grid grid-cols-2 gap-6 lg:grid-cols-6">
                        <PartnerCard
                            logoUrl={
                                CoffinBox
                            }
                            name={'Grim Finance'}
                            url={'https://grim.finance/'}
                        />
                        <PartnerCard
                            logoUrl={
                                CoffinBox
                            }
                            name={'Fantom Foundation'}
                            url={'https://fantom.foundation/'}
                        />
                        <PartnerCard
                            logoUrl={
                                CoffinBox
                            }
                            name={'Tomb Heads'}
                            url={'https://discord.com/invite/eBHpwv9yGW'}
                        />                             
                    </div>
                </div> */}
            </div>
            {/* <Footer /> */}
        </>
    )
}

const ProductCard = ({ imgUrl, marginLeft, title, description, cta, ctaLink, customSize, paddingRight = false }) => {
    return (
        <>
            <div className={`flex flex-row space-x-6 ` + (marginLeft && `ml-0 sm:ml-20`) + (paddingRight && ` pr-10`)}>
                <div
                    className={'flow-root bg-neutral-800 rounded-lg px-8 pb-8'}
                    style={{ width: '281px', height: '255px' }}
                >
                    <div className="mx-auto -mt-16 text-center">
                        <div
                            className="relative inline-flex items-center justify-center overflow-hidden rounded-full shadow-lg"
                            style={{
                                backgroundImage: `linear-gradient(224.43deg, #0D0415 -16.69%, #1B2152 86.36%)`,
                                backgroundPosition: 'center bottom',
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                width: '123px',
                                height: '123px'
                            }}
                        >
                            <img className={`${customSize ? customSize : 'w-20 h-20'} p-2`} alt="" src={imgUrl} />
                        </div>
                        <h3 className="mt-2 text-lg font-semibold tracking-tight text-white">{title}</h3>
                        <p className="mt-2 text-sm text-gray-400">{description}</p>
                        <div
                            className="mt-4 rounded-md shadow"
                            style={{ backgroundImage: 'linear-gradient(to right, #9e58dd, #8644DB)' }}
                        >
                            <a
                                href={ctaLink}
                                className="flex items-center justify-center w-full px-6 py-2 text-base font-medium text-white border border-transparent rounded-md"
                                target="_blank"
                            >
                                {cta}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const FeatureCard = ({ imgUrl, marginLeft, title, description, cta, ctaLink, paddingRight = false }) => {
    return (
        <>
            <div
                className={
                    `flex flex-row space-x-6 ` + (marginLeft && `ml-0 sm:ml-20`) + (paddingRight ? ` pr-10` : '')
                }
            >
                <div
                    className="flow-root px-8 py-8 rounded-lg bg-neutral-800"
                    style={{ width: '281px', height: '255px' }}
                >
                    <div className="mx-auto text-center">
                        <img
                            className="mx-auto text-center"
                            style={{ width: '111px', height: '111px' }}
                            src={imgUrl}
                            alt=""
                        />
                        <h3 className="mt-2 text-4xl font-semibold tracking-tight text-white">{title}</h3>
                        <p className="mt-2 text-base text-gray-500">{description}</p>
                            </div>
                        <div
                            className="mt-4 rounded-md shadow"
                            style={{ backgroundImage: 'linear-gradient(to right, #9e58dd, #8644DB)' }}
                        >
                        <a href={ctaLink}
                            className="flex items-center justify-center w-full px-6 py-2 text-base font-medium text-white border border-transparent rounded-md"
                        >
                            {cta}
                        </a>
                        </div>             
                </div>
            </div>
        </>
    )
}

const PartnerCard = ({ logoUrl, name, url }) => {
    return (
        <>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <div className="flex flex-row space-x-6">
                    <div className="flow-root mx-auto rounded-lg">
                        <div className="mx-auto text-center">
                            <img
                                className="h-auto mx-auto text-center"
                                style={{ width: '111px' }}
                                src={logoUrl}
                                alt=""
                            />
                            <p className="mt-2 text-base text-gray-500">{name}</p>
                        </div>
                    </div>
                </div>
            </a>
        </>
    )
}

export default Landing
