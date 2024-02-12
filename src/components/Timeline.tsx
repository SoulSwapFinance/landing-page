import Link from "next/link";
import { Fragment, useState } from "react";
const Timeline = () => {
  const [active, setActive] = useState(2);
  const [activeTimeline, setActiveTimeline] = useState(2);
  const onClick = (value) => {
    setActive(value);
  };
  const activeClass = (value) =>
    value === active ? "active" : value > active ? "next" : "previous";
  const filter = (value) => (100 / active) * value;
  return (
    <Fragment>
      {/* Main Title */}
      <div className="soul_fn_title">
      <h3
            style={{
              display: 'flex',
              // border: '1px solid',
              // borderRadius: '10px',
              // padding: '10px',
              color: '#8A02FF',
              fontFamily: 'Cursive',
              fontSize: '48px',
              margin: '10px',
              marginTop: '10px',
              // borderColor: '#8A02FF',
            }}
          >
            {'Our Roadmap'}
        </h3> 
        <div className="line">
          <span />
        </div>
      </div>
      {/* !Main Title */}
      {/* Timeline */}
      <div className="soul_fn_timeline">
        {/* Timeline Content */}
        <div className="timeline_content">
          <ul className="timeline_list">
            <li className={`timeline_item ${activeClass(1)}`} data-index={1}>
              <div className="t_item">
                {/* <div className="t_item_img">
                  <div className="soul_fn_gallery_1_2">
                    <div className="gallery_in">
                      <div className="item row2">
                        <img src="img/brujas/bruja-4.png" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/brujas/bruja-5.png" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/brujas/bruja-1.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="t_item_info">
                  <p className="fn_date">
                  <span>August 2021</span>
                  </p>
                  <h3 className="fn_title">
                    {/* <Link href="/RoadmapSingle"> */}
                    <a
                      href="https://soulswapfinance.medium.com/introdsoulswap-beta-d8266b3ce2f4"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Beta Launch
                    </a>
                  </h3>
                  <p className="fn_desc">
                  For those of you who have not been in the loop, EasyBakeSwap has been possessed by SoulSwap and we will be launching this month with a whole host of decentralized applications for our users to enjoy.
                  </p>
                  <p className="fn_read">
                    <Link href="/posts/BetaLaunch">
                      <a
                        // href="https://soulswapfinance.medium.com/introdsoulswap-beta-d8266b3ce2f4"
                        // target="_blank"
                        // rel="noreferrer"
                        className="soul_fn_button only_text"
                      >
                        <span className="text">Read More</span>
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </li>
            <li className={`timeline_item ${activeClass(2)}`} data-index={2}>
              <div className="t_item">
                {/* <div className="t_item_img">
                  <div className="soul_fn_gallery_1_2">
                    <div className="gallery_in">
                      <div className="item row2">
                        <img src="img/brujas/bruja-4.png" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/brujas/bruja-5.png" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/brujas/bruja-1.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="t_item_info">
                  <p className="fn_date">
                  <span>December 2021</span>
                  </p>
                  <h3 className="fn_title">
                    <a
                      href="https://soulswapfinance.medium.com/owning-our-liquidity-via-our-innovative-soul-bonds-podl-592c2849ceed"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Bonds Launch
                    </a>
                  </h3>
                  <p className="fn_desc">
                  {'We just rolled out significant upgrades to the Soul Protocol. The primary upgrade involves a new mechanism for minting SOUL, which enables users to bond an LP in an innovative manner.'}
                  </p>
                  <p className="fn_read">
                      <a
                        href="https://soulswapfinance.medium.com/owning-our-liquidity-via-our-innovative-soul-bonds-podl-592c2849ceed"
                        target="_blank"
                        rel="noreferrer"
                        className="soul_fn_button only_text"
                      >
                        <span className="text">Read More</span>
                      </a>
                  </p>
                </div>
              </div>
            </li>
            <li className={`timeline_item ${activeClass(3)}`} data-index={3}>
              <div className="t_item">
                {/* <div className="t_item_img">
                  <div className="soul_fn_gallery_1_2">
                    <div className="gallery_in">
                      <div className="item row2">
                        <img src="img/brujas/bruja-4.png" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/brujas/bruja-5.png" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/brujas/bruja-1.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="t_item_info">
                  <p className="fn_date">
                  <span>May 2022</span>
                  </p>
                  <h3 className="fn_title">
                    <a
                      href="https://twitter.com/SoulSwapFinance/status/1553933133338271745?s=20"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Bridge Launch
                    </a>
                  </h3>
                  <p className="fn_desc">
                  {'We have rolled out our multichain bridge, which enables you to bridge assets from multiple blockchains, including: Fantom, Avalanche, Ethereum, and more!'}
                  </p>
                  <p className="fn_read">
                      <a
                        href="https://twitter.com/SoulSwapFinance/status/1553933133338271745?s=20"
                        target="_blank"
                        rel="noreferrer"
                        className="soul_fn_button only_text"
                      >
                        <span className="text">View Tweet</span>
                      </a>
                  </p>
                </div>
              </div>
            </li>
            <li className={`timeline_item ${activeClass(4)}`} data-index={4}>
              <div className="t_item">
                <div className="t_item_info">
                  <p className="fn_date">
                  <span>September 2022</span>
                  </p>
                  <h3 className="fn_title">
                    <a
                      href="https://twitter.com/SoulSwapFinance/status/1575216568933355520?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1576340222874304512%7Ctwgr%5Edac36011f986fe5dbbeda9937fa51f5b463b4fdc%7Ctwcon%5Es2_&ref_url=https%3A%2F%2Fpublish.twitter.com%2F%3Fquery%3Dhttps3A2F2Ftwitter.com2FSoulSwapFinance2Fstatus2F1576340222874304512widget%3DTweet"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Avalanche Launch
                    </a>
                  </h3>
                  <p className="fn_desc">
                  Our Avalanche Farms & Bonds begin THIS WEEKEND during our Community Town Hall, please set a reminder and join us while we make history!
                  </p>
                  <p className="fn_read">
                    <Link href="/posts/AvalancheLaunch">
                      <a
                        // href="https://soulswapfinance.medium.com/introdsoulswap-beta-d8266b3ce2f4"
                        // target="_blank"
                        // rel="noreferrer"
                        className="soul_fn_button only_text"
                      >
                        <span className="text">Read More</span>
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </li>
            <li className={`timeline_item ${activeClass(5)}`} data-index={5}>
              <div className="t_item">
                <div className="t_item_info">
                  <p className="fn_date">
                  <span>March 2023</span>
                  </p>
                  <h3 className="fn_title">
                    <a
                      href="https://soulswapfinance.medium.com/introducing-defarms-d6f6c9ac3fa6"
                      target="_blank"
                      rel="noreferrer"
                    >
                      DeFarms Launch
                    </a>
                  </h3>
                  <p className="fn_desc">
                  DeFarms has been a work in progress for over a year and we strongly believe in its transformative potential. Learn more about our exciting DeFarm Campaigns and discover how this benefits protocols launching with us.
                  </p>
                  <p className="fn_read">
                      <a
                        href="https://soulswapfinance.medium.com/introducing-defarms-d6f6c9ac3fa6"
                        target="_blank"
                        rel="noreferrer"
                        className="soul_fn_button only_text"
                      >
                        <span className="text">Read More</span>
                    </a>
                  </p>
                </div>
              </div>
            </li>
            <li className={`timeline_item ${activeClass(6)}`} data-index={6}>
              <div className="t_item">
                <div className="t_item_info">
                  <p className="fn_date">
                  <span>October 2023</span>
                  </p>
                  <h3 className="fn_title">
                    <a
                      href="https://soulswapfinance.medium.com/introducing-defarms-d6f6c9ac3fa6"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Mobile App Launch
                    </a>
                  </h3>
                  <p className="fn_desc">
                  We will be launching our mobile application on the App Store and Google Play Store. This will enable our users to access our platform on the go.
                  </p>
                  <p className="fn_read">
                      <a
                        href="https://docs.soulswap.finance/docs/user-guides/our-utility/ios-mobile-premium"
                        target="_blank"
                        rel="noreferrer"
                        className="soul_fn_button only_text"
                      >
                        <span className="text">Read More</span>
                    </a>
                  </p>
                </div>
              </div>
            </li>
            
          </ul>
        </div>
        {/* !Timeline Content */}
        {/* Timeline Progress */}
        <div className="timeline_progress">
          {/* Nav */}
          <a
            className="nav_prev c-pointer"
            onClick={() =>
              setActiveTimeline(
                activeTimeline == 1 ? activeTimeline : activeTimeline - 1
              )
            }
          >
            <img src="svg/right-arr.svg" alt="" className="fn__svg" />
          </a>
          <a
            onClick={() =>
              setActiveTimeline(
                activeTimeline == 7 ? activeTimeline : activeTimeline + 1
              )
            }
            className="nav_next c-pointer"
          >
            <img src="svg/right-arr.svg" alt="" className="fn__svg" />
          </a>
          {/* !Nav */}
          <div className="progress_line_wrapper">
            <div
              className="progress_line"
              style={{
                width: "1645.66px",
                transform: `translateX(-${
                  (100 / activeTimeline) * (activeTimeline - 2)
                }%)`,
              }}
            >
              <ul>
                <li className={activeClass(1)}>
                  <a onClick={() => onClick(1)}>
                    <span className="text">08.2021</span>
                    <span
                      className="circle"
                      style={{ filter: `brightness(${filter(1)}%)` }}
                    />
                  </a>
                </li>
                <li className={activeClass(2)}>
                  <a onClick={() => onClick(2)}>
                    <span className="text">12.2021</span>
                    <span
                      className="circle"
                      style={{ filter: `brightness(${filter(2)}%)` }}
                    />
                  </a>
                </li>
                <li className={activeClass(3)}>
                  <a onClick={() => onClick(3)}>
                    <span className="text">05.2022</span>
                    <span
                      className="circle"
                      style={{ filter: `brightness(${filter(3)}%)` }}
                    />
                  </a>
                </li>
                <li className={activeClass(4)}>
                  <a onClick={() => onClick(4)}>
                    <span className="text">09.2022</span>
                    <span
                      className="circle"
                      style={{ filter: `brightness(${filter(4)}%)` }}
                    />
                  </a>
                </li>
                <li className={activeClass(5)}>
                  <a onClick={() => onClick(5)}>
                    <span className="text">03.2023</span>
                    <span
                      className="circle"
                      style={{ filter: `brightness(${filter(5)}%)` }}
                    />
                  </a>
                </li>
                <li className={activeClass(6)}>
                  <a onClick={() => onClick(6)}>
                    <span className="text">10.2023</span>
                    <span
                      className="circle"
                      style={{ filter: `brightness(${filter(6)}%)` }}
                    />
                  </a>
                </li>
              </ul>
              <span className="active_line" />
            </div>
          </div>
        </div>
        {/* !Timeline Progress */}
      </div>
      {/* !Timeline */}
    </Fragment>
  );
};
export default Timeline;
