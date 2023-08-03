import Link from "next/link";
import Layout from "../src/layout/Layout";

const RoadmapSingle = () => {
  return (
    <Layout pageName={"Roadmap Single"}>
      <div className="soul_fn_roadmap soul_fn_single">
        {/* Single Background */}
        <div className="single_bg" />
        {/* !Single Background */}
        {/* Single Content */}
        <div className="single_content">
          <div className="container" id="RoadmapSingle-content">
            {/* <div className="soul_fn_share">
              <h5 className="label">Share:</h5>
              <ul>
                <li>
                  <a href="#">
                    <i className="fn-icon-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fn-icon-instagram" />
                  </a>
                </li>
              </ul>
            </div> */}
            <div className="soul_fn_breadcrumbs">
              <p>
                <Link href="/index">Home</Link>
                <span className="separator">/</span>
                <Link href="/Roadmap">RoadMap</Link>
                <span className="separator">/</span>
                <span className="current">Bruja NFT Launch</span>
              </p>
            </div>
            <div className="single_img">
              <img src="img/brujas/bruja-1.png" alt="" />
            </div>
            {/* Mini Items  */}
            <div className="soul_fn_minis">
              <div className="m_item">
                <a href="#">September 2023</a>
              </div>
              <div className="m_item">
                <span>
                  By <a href="#">Buns Enchantress</a>
                </span>
              </div>
            </div>
            {/* !Mini Items  */}
            {/* Single Title */}
            <div className="single_title">
              <h2 className="fn_title">
              Bruja NFT Goes Public.
              </h2>
              <div className="categories">
                <a href="#">Tokens</a>, <a href="#">NFTs</a>,{" "}
                <a href="#">Crypto</a>
              </div>
            </div>
            {/* !Single Title */}
            {/* Single Description */}
            <div className="single_desc">
              <p>
                Our exclusive Bruja NFT collection is now available to the public.
              </p>
              <p>
                Ownership of these NFTs grants you access to our private community, where you can
                connect with other Bruja NFT owners and participate in our upcoming events.
              </p>
            </div>
            {/* !Single Description */}
            {/* Mosaic Gallery */}
            <div className="soul_fn_mosaic">
              <ul>
                <li>
                  <div className="item" data-bg-img="img/brujas/bruja-1.png">
                    <img src="img/brujas/bruja-1.png" alt="" />
                  </div>
                </li>
                <li>
                  <div className="item" data-bg-img="img/brujas/bruja-2.png">
                    <img src="img/brujas/bruja-2.png" alt="" />
                  </div>
                </li>
                <li>
                  <div className="item" data-bg-img="img/brujas/bruja-3.png">
                    <img src="img/brujas/bruja-3.png" alt="" />
                  </div>
                </li>
                <li>
                  <div className="item" data-bg-img="img/brujas/bruja-4.png">
                    <img src="img/brujas/bruja-4.png" alt="" />
                  </div>
                </li>
                <li>
                  <div className="item" data-bg-img="img/brujas/bruja-5.png">
                    <img src="img/brujas/bruja-5.png" alt="" />
                  </div>
                </li>
              </ul>
            </div>
            {/* !Mosaic Gallery */}
            {/* Single Description */}
            {/* <div className="single_desc">
              <p>
                Prepare to participate in the opportunity of a lifetime.
              </p>
            </div> */}
            {/* !Single Description */}
          </div>
          {/* Video Section */}
          <section id="video">
            {/* Dividers */}
            <img
              src="svg/divider.svg"
              alt=""
              className="fn__svg fn__divider top_divider"
            />
            <img
              src="svg/divider.svg"
              alt=""
              className="fn__svg fn__divider bottom_divider"
            />
            {/* !Dividers */}
            {/* Video Shortcode */}
            <div className="soul_fn_video">
              <div className="bg_overlay">
                <div className="bg_image" data-bg-img="img/brujas/bruja-3.png" />
                <div className="bg_color" />
              </div>
              <div className="v_content">
                <a
                  className="popup-youtube"
                  href="//www.youtube.com/embed/CCA4Q5DkFU4"
                >
                  <img src="svg/play.svg" alt="" className="fn__svg" />
                </a>
              </div>
            </div>
            {/* !Video Shortcode */}
          </section>
          {/* !Video Section */}
          {/* Single Description */}
          {/* <div className="single_desc" id="roadmap-desc">
            <div className="container">
              <p>
                Participate in a once in a lifetime opportunity to own a piece of history.
              </p>
            </div>
          </div> */}
          {/* !Single Description */}
        </div>
        {/* !Single Content */}
      </div>
    </Layout>
  );
};
export default RoadmapSingle;
