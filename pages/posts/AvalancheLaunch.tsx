import Link from "next/link";
import Layout from "../../src/layout/Layout";
import Image from 'next/image'
import { useRouter } from "next/router";

const AvalancheLaunch = () => {
    const router = useRouter()
    const shareLink = `https://soul.sh${router.asPath}`

    return (
        <Layout pageName={"Avalanche Launch"}>
            <div className="soul_fn_roadmap soul_fn_single">
                {/* Single Background */}
                <div className="single_bg" />
                {/* !Single Background */}
                {/* Single Content */}
                <div className="single_content">
                    <div className="container" id="AvalancheLaunch-content">
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
                                <span className="current">Avalanche Launch</span>
                            </p>
                        </div>
                        <div className="single_img">
                            <img 
                                src="https://cryptologos.cc/logos/avalanche-avax-logo.svg?v=025" 
                                alt="Avalanche Logo"
                            />
                        </div>
                        {/* Mini Items  */}
                        <div className="soul_fn_minis">
                            <div className="m_item">
                                <a href="../#">September 2022</a>
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
                                Launching On Avalanche
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
                                Thanks to our active community for their support and patience as we have been working hard to bring you the best experience possible on Avalanche.
                                Due to the recent proposal advocating for our launch on Avalanche, we are ready to deploy.
                            </p>
                            <p>
                               Join us for our public Town Hall where we will launch LIVE with our beloved SoulSwap community on our upcoming {' '}
                                <a
                                    href="https://twitter.com/i/spaces/1vAxRAopPwNJl"
                                    target={'_blank'}
                                    rel={'norefferer'}
                                    style={{
                                        color: '#FFFFFF',
                                    }}
                                >
                                    Twitter Space
                                </a>.
                            </p>
                            <p>
                                We hope you enjoy what you hear and experience. Please be sure to stay tuned for more updates to come by joining us on any one of our number of Social Media accounts, found in our {' '}
                                <a
                                    href="https://links.soul.sh"
                                    target={'_blank'}
                                    rel={'norefferer'}
                                    style={{
                                        color: '#FFFFFF',
                                    }}
                                >
                                    links page
                                </a>.
                            </p>
                            <p>
                                <b>Warm Regards</b>,
                                <br />
                                Enchantress Buns
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
export default AvalancheLaunch;
