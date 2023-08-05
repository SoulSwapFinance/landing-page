import Link from "next/link";
import Layout from "../../src/layout/Layout";
import Image from 'next/image'
import { useRouter } from "next/router";

const BetaLaunch = () => {
    const router = useRouter()
    const shareLink = `https://soul.sh${router.asPath}`

    return (
        <Layout pageName={"Roadmap Single"}>
            <div className="soul_fn_roadmap soul_fn_single">
                {/* Single Background */}
                <div className="single_bg" />
                {/* !Single Background */}
                {/* Single Content */}
                <div className="single_content">
                    <div className="container" id="RoadmapSingle-content">
                        <div className="soul_fn_share">
                            <h5 className="label">Share Post:</h5>
                            <ul>
                                <li>
                                    <a
                                        href={`https://twitter.com/intent/tweet?text=${shareLink}`}
                                        target={'_blank'}
                                        rel={'noreferrer'}
                                    >
                                        <i className="fn-icon-twitter" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="soul_fn_breadcrumbs">
                            <p>
                                <Link href="../">Home</Link>
                                <span className="separator">/</span>
                                {/* <Link href="../Roadmap">RoadMap</Link> */}
                                {/* <span className="separator">/</span> */}
                                <span className="current">Bruja NFT Launch</span>
                            </p>
                        </div>
                        <div className="single_img">
                            <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Ce-wHatFeJKVlM-apCQvdA.png" alt="" />
                        </div>
                        {/* Mini Items  */}
                        <div className="soul_fn_minis">
                            <div className="m_item">
                                <a href="../#">August 2021</a>
                            </div>
                            <div className="m_item">
                                <span>
                                    By <a href="../#">Buns Enchantress</a>
                                </span>
                            </div>
                        </div>
                        {/* !Mini Items  */}
                        {/* Single Title */}
                        <div className="single_title">
                            <h2 className="fn_title">
                                Introducing: SoulSwap Beta
                            </h2>
                            <div className="categories">
                                <a href="#">Tokens</a>,{" "}
                                <a href="#">Crypto</a>
                            </div>
                        </div>
                        {/* !Single Title */}
                        {/* Single Description */}
                        <div className="single_desc">
                            <p>
                                For those of you who have not been in the loop, EasyBakeSwap has been possessed by SoulSwap and we will be launching this month with a whole host of decentralized applications for our users to enjoy.

                                We decided to make the switch to Fantom and in honor of the vibe of Fantom Opera, we decided to honor the chain by swapping over to Soul Finance.
                            </p>
                            <p>
                                As such, you may have witnessed some of our rebranding in the process and we hope you come to love what we have done with the place.

                                Yesterday, we made a big step in our journey by launching our SoulSwap beta and you are welcome to access our beta.
                                In addition, we have opened up discussions regarding our beta in our {' '}
                                <a
                                    href="https://discord.gg/YBYEMbufxZ"
                                    target={'_blank'}
                                    rel={'norefferer'}
                                    style={{
                                        color: '#FFFFFF',
                                    }}
                                >
                                    Discord Community
                                </a>.
                            </p>
                            <p>
                                We hope you enjoy what you see and please be sure to stay tuned for more updates to come by joining us on any one of our number of Social Media accounts, found in our {' '}
                                <a
                                    href="https://docs.soulswap.finance"
                                    target={'_blank'}
                                    rel={'norefferer'}
                                    style={{
                                        color: '#FFFFFF',
                                    }}
                                >
                                    new documentation
                                </a>.
                            </p>
                            <p>
                                <b>Warm Regards</b>,
                                <br />
                                Enchantress Buns ❤ and DeGatchi
                            </p>
                        </div>
                        {/* !Single Description */}
                        {/* Mosaic Gallery */}
                        {/* <div className="soul_fn_mosaic">
                            <ul>
                                <li>
                                    <div className="item" data-bg-img="../img/brujas/bruja-1.png">
                                        <img src="../img/brujas/bruja-1.png" alt="" />
                                    </div>
                                </li>
                                <li>
                                    <div className="item" data-bg-img="../img/brujas/bruja-2.png">
                                        <img src="../img/brujas/bruja-2.png" alt="" />
                                    </div>
                                </li>
                                <li>
                                    <div className="item" data-bg-img="../img/brujas/bruja-3.png">
                                        <img src="../img/brujas/bruja-3.png" alt="" />
                                    </div>
                                </li>
                                <li>
                                    <div className="item" data-bg-img="../img/brujas/bruja-4.png">
                                        <img src="../img/brujas/bruja-4.png" alt="" />
                                    </div>
                                </li>
                                <li>
                                    <div className="item" data-bg-img="../img/brujas/bruja-5.png">
                                        <img src="../img/brujas/bruja-5.png" alt="" />
                                    </div>
                                </li>
                            </ul>
                        </div> */}

                    </div>
                </div>
            </div>
        </Layout>
    );
};
export default BetaLaunch;
