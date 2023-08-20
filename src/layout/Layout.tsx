import Head from "next/head";
import { Fragment, useEffect } from "react";
import VideoPopup from "../components/popup/VideoPopup"
import {
  animationText,
  dataBgImg,
  imgToSVG,
  // progressTotop,
  stickyNav,
} from "../utils"
import Footer from "./Footer"
import Header from "./Header"
// import ScrollTop from "./ScrollTop"

const Layout = ({ children, pageName }) => {
  useEffect(() => {
    animationText();
    dataBgImg();
    imgToSVG();
    window.addEventListener("scroll", stickyNav);
    // window.addEventListener("scroll", progressTotop);
  }, []);
  return (
    <Fragment>
      <Head>
        <link charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link property="og:title" content="SoulSwap Finance" />
        <link property="description" content="Swap, earn, limit, bridge, and launch all on one community-driven ecosystem" />
        <link property="og:description" content="Swap, earn, limit, bridge, and launch all on one community-driven ecosystem" />
        <link property="og:image" content="https://soul.sh/images/soulswap-cover.png" />
        <link property="og:url" content="https://soul.sh" />
        
        <link property="twitter:card" content="summary_large_image" />
        <link property="twitter:title" content="SoulSwap Finance" />
        <link property="twitter:description" content="Swap, earn, limit, bridge and launch on one community-driven ecosystem" />
        <link property="twitter:image" content="https://soul.sh/images/soulswap-cover.png" />

        {/* <link property="twitter:card" content="summary_large_image" /> */}
        {/* <link property="twitter:title" content="SoulSwap Finance" />
        <link property="twitter:site" content="@soulswapfinance" />
        <link property="twitter:creator" content="@soulswapfinance" />
        <link property="twitter:description" content="Swap, earn, limit, bridge, and launch all on one community-driven ecosystem" />
        <link property="twitter:image" content="/images/soulswap-cover.png" /> */}
        <title>
          SoulSwap | {pageName}
        </title>
      </Head>
      <VideoPopup />
      <div className="soul_fn_main" data-footer-sticky="">
        <Header />
        <div className="soul_fn_content">{children}</div>
        <Footer />
        {/* <ScrollTop /> */}
      </div>

      <div className="soul_fn_moving_box"></div>
    </Fragment>
  );
};
export default Layout;
