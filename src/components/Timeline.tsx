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
      <h3 className="fn_title">
            <img 
              src={'/img/text/roadmap.png'}
              height={48}
              width={224}
              alt="soulswap roadmap"
            />
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
                <div className="t_item_img">
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
                </div>
                <div className="t_item_info">
                  <p className="fn_date">
                  <span>July 2023</span>
                  </p>
                  <h3 className="fn_title">
                    <Link href="/roadmap-single">
                      Announce NFT Launch
                    </Link>
                  </h3>
                  <p className="fn_desc">
                  Landing page announcing launch.
                  </p>
                  {/* <p className="fn_read">
                    <Link href="/roadmap-single">
                      <a className="soul_fn_button only_text">
                        <span className="text">Read More</span>
                      </a>
                    </Link>
                  </p> */}
                </div>
              </div>
            </li>
            <li className={`timeline_item ${activeClass(2)}`} data-index={2}>
              <div className="t_item">
                <div className="t_item_img">
                  <div className="soul_fn_gallery_1_2">
                    <div className="gallery_in">
                     <div className="item row2">
                        <img src="img/brujas/bruja-1.png" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/brujas/bruja-2.png" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/brujas/bruja-3.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t_item_info">
                  <p className="fn_date">
                  <span>September 2023</span>
                  </p>
                  <h3 className="fn_title">
                    <Link href="/roadmap-single">
                    Public Launch
                    </Link>
                  </h3>
                  <p className="fn_desc">
                  Going live for mints and public launch.
                  </p>
                  {/* <p className="fn_read">
                    <Link href="/roadmap-single">
                      <a className="soul_fn_button only_text">
                        <span className="text">Read More</span>
                      </a>
                    </Link>
                  </p>  */}
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
                    <span className="text">07.2023</span>
                    <span
                      className="circle"
                      style={{ filter: `brightness(${filter(1)}%)` }}
                    />
                  </a>
                </li>
                <li className={activeClass(2)}>
                  <a onClick={() => onClick(2)}>
                    <span className="text">09.2023</span>
                    <span
                      className="circle"
                      style={{ filter: `brightness(${filter(2)}%)` }}
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
