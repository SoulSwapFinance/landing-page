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
        <title>
          <meta charSet="UTF-8" />
          <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta property="og:title" content="SoulSwap Finance" />
          <meta name="twitter:title" content="SoulSwap Finance" />
          <meta name="description" content="Swap, earn, limit, bridge, and launch all on one community-driven ecosystem" />
          <meta property="og:description" content="Swap, earn, limit, bridge, and launch all on one community-driven ecosystem" />
          <meta name="twitter:description" content="Swap, earn, limit, bridge, and launch all on one community-driven ecosystem" />

          <meta property="og:image" content="/soulswap-cover.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:description" content="Swap, earn, limit, bridge, and launch all on one community-driven ecosystem" />
          <meta name="twitter:image" content="/soulswap-cover.png" />
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
