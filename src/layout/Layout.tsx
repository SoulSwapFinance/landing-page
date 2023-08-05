import Head from "next/head";
import { Fragment, useEffect } from "react";
import VideoPopup from "../components/popup/VideoPopup"
import {
  animationText,
  dataBgImg,
  imgToSVG,
  progressTotop,
  stickyNav,
} from "../utils"
import Footer from "./Footer"
import Header from "./Header"
import ScrollTop from "./ScrollTop"

const Layout = ({ children, pageName }) => {
  useEffect(() => {
    animationText();
    dataBgImg();
    imgToSVG();
    window.addEventListener("scroll", stickyNav);
    window.addEventListener("scroll", progressTotop);
  }, []);
  return (
    <Fragment>
      <Head>
        <title>
          Soul | {pageName}
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
