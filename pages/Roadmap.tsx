import Link from "next/link"
import Layout from "../src/layout/Layout"
import PageBanner from "../src/layout/PageBanner"

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
                    <img
                      src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Ce-wHatFeJKVlM-apCQvdA.png"
                    >
                    
                    </img>
                    {/* <div className="soul_fn_gallery_1_2">
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
                    </div> */}
                  </div>
                  <div className="t_item_info">
                    <p className="fn_date">
                      <span>August 2021</span>
                    </p>
                    <h3 className="fn_title">
                      <Link href="/posts/BetaLaunch">
                      SoulSwap Beta
                      </Link>
                    </h3>
                    {/* <p className="fn_desc">
                    Our public beta launch.
                    </p> */}
                    <p className="fn_read">
                      <Link href="/posts/BetaLaunch">
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
                      <span>September 2022</span>
                    </p>
                    <h3 className="fn_title">
                      <Link href="/posts/AvalancheLaunch">
                        Avalanche Launch
                      </Link>
                    </h3>

                    <p className="fn_read">
                      <Link href="/posts/LendingMarkets">
                        <a className="soul_fn_button only_text">
                          <span className="text">Read More</span>
                        </a>
                      </Link>
                    </p>
                  </div>
                </div>
              </li>
              <li className="road_item"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  color: '#8A02FF',
                }}
              >
                This is a work in progress, please return September 2023 for a complete roadmap.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Roadmap
