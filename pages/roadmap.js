import Link from "next/link";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";

const Roadmap = () => {
  return (
    <Layout pageName={"RoadMap"}>
      <PageBanner pageName={"RoadMap"} />
      <div className="soul_fn_roadmappage">
        <div className="container">
          <div className="soul_fn_roadmaplist">
            <ul className="roadlist">
              <li className="road_item">
                <div className="t_item">
                  <div className="t_item_img">
                    <div className="soul_fn_gallery_1_2">
                      <div className="gallery_in">
                        <div className="item row2">
                          <img src="img/brujas/bruja-1.png" alt="" />
                        </div>
                        <div className="item">
                          <img src="img/brujas/bruja-3.png" alt="" />
                        </div>
                        <div className="item">
                          <img src="img/brujas/bruja-5.png" alt="" />
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
                    <p className="fn_read">
                      <Link href="/roadmap-single">
                        <a className="soul_fn_button only_text">
                          <span className="text">Read More</span>
                        </a>
                      </Link>
                    </p>
                  </div>
                </div>
              </li>
              <li className="road_item">
                <div className="t_item">
                  <div className="t_item_img">
                    <div className="soul_fn_gallery_1_2">
                      <div className="gallery_in">
                        <div className="item row2">
                          <img src="img/brujas/bruja-2.png" alt="" />
                        </div>
                        <div className="item">
                          <img src="img/brujas/bruja-4.png" alt="" />
                        </div>
                        <div className="item">
                          <img src="img/brujas/bruja-1.png" alt="" />
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
                     Public launch event.
                    </p>
                    <p className="fn_read">
                      <Link href="/roadmap-single">
                        <a className="soul_fn_button only_text">
                          <span className="text">Read More</span>
                        </a>
                      </Link>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Roadmap;
