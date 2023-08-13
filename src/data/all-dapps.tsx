import { library } from '@fortawesome/fontawesome-svg-core'
import { faGlobe, faCreditCard, faDice, faGlasses, faCommentAlt, faMoneyBillWave, faNewspaper, faWrench, faChartLine, faStore, faRss, faTools, faVoteYea } from '@fortawesome/free-solid-svg-icons'

interface Dapps {
    name: string;
    url: string;
    description: string;
    icon: string;
}

export const soulDapps: Dapps[] = [
    {
        name: 'Gitbook',
        url: 'https://soulswap.gitbook.io/', /* todo */
        description: 'GitBook is a modern documentation platform where teams can document everything from products to internal knowledge-bases and APIs.',
        icon: '/images/dapps/gitbook.png'
    },
    {
        name: 'GitHub',
        url: 'https://github.com/SoulSwapFinance',
        description: 'Open sourced, smart contracts deployed by SoulSwap developers.',
        icon: '/images/dapps/github.png'
    },
]

export const contractDapps: Dapps[] = [
    {
        name: 'Airdrop',
        url: 'https://ftmscan.com/address', /* todo */
        description: 'Contains the SOUL tokens ready to be claimed by the eligible recipients.',
        icon: '/images/dapps/package.png'
    },
    {
        name: 'SoulToken',
        url: 'https://ftmscan.com/address', /* todo */
        description: 'The official token for SOUL, which represents your voting power and stake in the DAO Treasury.',
        icon: '/images/dapps/stakeholder.png'
    },
    {
        name: 'Liquidity Mine',
        url: 'https://ftmscan.com/address', /* todo */
        description: 'Official Liquidity Mine for SoulSwap. Slow drip, fair distribution of SOUL utility tokens.',
        icon: '/images/dapps/mining-cart.png'
    },
    {
        name: 'Treasury',
        url: 'https://ftmscan.com/address', /* todo */
        description: 'Treasury contract, which is a multisignatory smart contract containing our Treasury, which belongs to the SOUL Community',
        icon: '/images/dapps/treasury.png'
    },
    {
        name: 'SOUL-LP SOUL-FTM LP',
        url: 'https://ftmscan.com/address', /* todo */
        description: 'The LP token that represents the SOUL-FTM pair. Liquidity providers recieve thier proportionate share of the trading fees generated from trades in the pool. This token also receieves a yield BOOST.',
        icon: '/images/dapps/unicorn.png' /* todo */
    }
]

export const communityDapps: Dapps[] = [
    {
        name: 'Chat on Discord',
        url: 'https://discord.gg', /* todo */
        description: 'Join in on the discussions with our Discord Community. We have Channels dedicated to topics such as speculation and trading, governance proposals, announcements, and more.',
        icon: '/images/dapps/dis-cord-black.png'
    },
    {
        name: 'Chat in our Forum',
        url: 'https://forum.soulswap.finance',
        description: 'This is an open and free platform built from the ground up for the community by the community so feel free to join us in our epic journey of open and decentralized autonomous governance across multiple chains unlike ever done before.',
        icon: '/images/dapps/government.png'
    },
    {
        name: 'Chat on Telegram',
        url: 'https://t.me/SoulSwapDeFi',
        description: 'Join our most active community presence on Telegram. Here you may find the quickest reply to your questions or concerns by one of our many volunteer community moderators, developers, or members.',
        icon: '/images/dapps/tg.png'
    },
    // {
    //     name: 'DevProposal: Vault',
    //     url: 'https://forum.soulswap.finance/t/devproposal-vaults/',
    //     description: 'Interested in fielding some feedback on potentially building out a vault for a safe, yet profitable place to park your SOUL reward and gain rewards for your loyalty and participation.',
    //     icon: '/images/dapps/safe.png'
    // },
    {
        name: 'Follow on Twitter',
        url: 'https://twitter.com/SoulSwapFinance',
        description: 'Join us on Twitter and keep up-to-date on all of our upcoming opportunities, partnerships, releases, competitions, and more exciting news on a regular basis.',
        icon: '/images/dapps/twitter-black.png'
    }
]

export const tradingDapps: Dapps[] = [
    {
        name: 'SoulSwap DEX',
        url: 'https://app.soulswap.finance/#/swap',
        description: 'Exchange assets in a decentralized manner and provide liquidity for your share in exchange fees, all on our multi-chain decentralized exchange.',
        icon: '/images/dapps/deploy.png'
    },
    {
        name: 'CoinGecko',
        // url: 'https://www.coingecko.com/en/coins/soulswap-finance',
        url: 'https://www.coingecko.com/en/coins',
        description: 'Find useful information, including price history, trends, and rank on CoinGecko.',
        icon: '/images/dapps/coingecko.png'
    },
    {
        name: 'CoinMarketCap',
        // url: 'https://coinmarketcap.com/currencies/soulswap-finance',
        url: 'https://coinmarketcap.com/currencies',
        description: 'Find useful information, including market rank, price history, and trends on CMC.',
        icon: '/images/dapps/coinmarketcap.com.png'
    },
    {
        name: 'Trading Room',
        url: 'https://t.me/soulswapdefi', // todo: update
        description: 'Visit the historical price and liquidity for the SOUL on Uniswap, the decentralized exchange.',
        icon: '/images/dapps/telegram.png'
    },
    {
        name: 'SoulSwap Charts',
        url: 'https://info.soulswap.finance/',
        description: 'Visit the historical price and liquidity for SOUL on our multi-chain decentralized exchange.',
        icon: '/images/dapps/exchanging.png'
    }
]

export const earnDapps: Dapps[] = [
    {
        name: 'Stream Claim',
        url: 'https://app.soulswap.finance/streams',
        description: 'Claim your SOUL Stream',
        icon: '/images/dapps/gift-box.png'
    },
    {
        name: 'Airdrop Claim',
        url: 'https://app.soulswap.finance/airdrop',
        description: 'Claim your SOUL Airdrop',
        icon: '/images/dapps/gift-box.png'
    },
    {
        name: 'Liquidity Mine',
        url: 'https://app.soulswap.finance/farms',
        description: 'Provide liquidity on our exchange and recieve rewards paid out in SOUL for participating in our network.',
        icon: '/images/dapps/mining.png'
    },
    {
        name: 'Soul Staking',
        url: 'https://app.soulswap.finance/stake',
        description: 'Single asset staking (SAS) DApp designed to enable users to deposit SOUL to be rewarded SOUL and tokens from newly launched projects.',
        icon: '/images/dapps/mining-cart.png'
    },
]

export const dapps: Dapps[] = [
    soulDapps[0],
    soulDapps[1],
    earnDapps[0],
    earnDapps[1],
    earnDapps[2],
    earnDapps[3],
    tradingDapps[0],
    tradingDapps[1],
    tradingDapps[2],
    tradingDapps[3],
    contractDapps[0],
    contractDapps[1],
    contractDapps[2],
    contractDapps[3],
    contractDapps[4],
    communityDapps[0],
    communityDapps[1],
    communityDapps[2],
    communityDapps[3],
]

interface Category {
    name: string;
    icon: any;
    color: string;
    url: string;
    description?: string;
    dapps?: Dapps[];
}

export const categories: Category[] = [
    {
        name: 'SOUL',
        icon: faGlobe, /* todo */
        color: '#3934A1', /* todo */
        url: '/Soul',
        dapps: [
            dapps[0],
            dapps[1],
            // {
            //     name: 'LitePaper',
            //     url: 'https://soulswap.finance/Litepaper.pdf',
            //     description: 'SOUL is designed to behave as the quintessential model for other AMM and Multichain DAOs and institutions to emulate.',
            //     icon: '/images/dapps/writing.png'
            // },
            {
                name: 'Official Website',
                url: 'https://soulswap.finance',
                description: 'SOUL is designed to behave as the quintessential model for other AMM and Multichain DAOs and institutions to emulate.',
                icon: '/images/dapps/website.png'
            }
        ],
    },
    {
        name: 'EARN',
        icon: faMoneyBillWave,
        color: '#3934A1',
        url: '/Earn',
        dapps: [
            earnDapps[0],
            earnDapps[1],
            earnDapps[2],
            earnDapps[3],
        ],
    },
    {
        name: 'TRADING',
        icon: faChartLine,
        color: '#ACA9E3',
        url: '/Trading',
        dapps: [
            tradingDapps[0],
            tradingDapps[1],
            tradingDapps[2],
            tradingDapps[3],
        ],
    },
    {
        name: 'CONTRACTS',
        icon: faGlasses,
        color: '#000000',
        url: '/Contracts',
        dapps: [
            contractDapps[0],
            contractDapps[1],
            contractDapps[2],
            contractDapps[3],
            contractDapps[4],
        ],
    },
    {
        name: 'COMMUNITY',
        icon: faCommentAlt,
        color: '#000000',
        url: '/Community',
        dapps: [
            communityDapps[0],
            communityDapps[1],
            communityDapps[2],
            communityDapps[3],
        ],
    },
];

