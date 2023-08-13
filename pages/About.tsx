import Layout from "../src/layout/Layout"
import PageBanner from "../src/layout/PageBanner"

const About = () => {
  return (
    <Layout pageName={"About"}>
      <PageBanner pageName={"About"} />
      <div className="soul_fn_aboutpage">
        {/* Information Section */}
        <section id="information">
          <div className="container">
            {/* About Item #1 */}
            <div className="soul_fn_about_item">
              <div className="img_item">
                <img src="img/brujas/bruja-2.png" alt="" />
              </div>
              <div className="content_item">
                <div className="soul_fn_title" data-align="left">
                  <h3 className="fn_title">
                    <img
                        src={'/img/text/rise-of-brujas.png'}
                        height={48}
                        width={360}
                        alt="rise of brujas"
                    />
                  </h3>
                  <div className="line">
                    <span />
                  </div>
                </div>
                <div className="desc">
                  <p>
                    Unique designs composed of distinct elements composed by Buns Enchantress.
                  </p>
                </div>
                {/* <div className="buttons">
                  <a
                    href="https://opensea.io/"
                    target="_blank"
                    rel="noreferrer"
                    className="soul_fn_button"
                  >
                    <span className="icon">
                      <img src="svg/opensea.svg" alt="" className="fn__svg" />
                    </span>
                    <span className="text">OpenSea</span>
                  </a>
                </div> */}
              </div>
            </div>
            {/* !About Item #1 */}
            {/* Guarantee List */}
            <div className="soul_fn_gualist">
              <ul>
                <li>
                  <div className="item">
                    <span className="line" />
                    <img
                      src="svg/search-engine.svg"
                      alt=""
                      className="fn__svg"
                    />
                    <h3 className="fn_title">Transparent Technology</h3>
                    <p className="fn_desc fn_animated_text">
                      Blockchain technology allows us to be transparent about ownership and authenticity.
                    </p>
                  </div>
                </li>
                {/* <li>
                  <div className="item">
                    <span className="line" />
                    <img src="svg/management.svg" alt="" className="fn__svg" />
                    <h3 className="fn_title">Experienced Team</h3>
                    <p className="fn_desc fn_animated_text">
                      With decades of combined experience, our team is top-notch and ready to take on the metaverse.
                    </p>
                  </div>
                </li> */}
                <li>
                  <div className="item">
                    <span className="line" />
                    <img src="svg/padlock.svg" alt="" className="fn__svg" />
                    <h3 className="fn_title">Cryptographically Security</h3>
                    <p className="fn_desc fn_animated_text">
                      The nature of blockchain technology allows us leverage a secure and decentralized network.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            {/* !Guarantee List */}
            {/* About Item #2 */}
            <div className="soul_fn_about_item reverse">
              <div className="img_item">
                <img src="img/brujas/bruja-1.png" alt="" />
              </div>
              <div className="content_item">
                <div className="soul_fn_title" data-align="left">
                  <h3 className="fn_title">
                    <img
                        src="/img/text/exclusive-collection.png"
                        height={48}
                        width={360}
                        alt={'exclusive collection'}
                    />
                  </h3>
                  <div className="line">
                    <span />
                  </div>
                </div>
                <div className="desc">
                  <p>
                    Simply holding a bruja will give you access to exclusive benefits.
                    Our objectives align with the community. We create,
                    build, and innovate for you.
                  </p>
                </div>
                {/* <div className="buttons">
                  <a href="#" className="soul_fn_button only_text">
                    <span className="text">Join Community</span>
                  </a>
                </div> */}
              </div>
            </div>
            {/* !About Item #2 */}
          </div>
        </section>
        {/* !Information Section */}
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
              <div className="bg_image" data-bg-img="img/brujas/bruja-5.png" />
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
        {/* Team Section */}
        <section id="team">
          <div className="container">
            {/* Main Title */}
            <div className="soul_fn_title">
              <h3 className="fn_title">
                <img
                    src={'/img/text/our-team.png'}
                    height={48}
                />
              </h3>
              <div className="line">
                <span />
              </div>
            </div>
            {/* !Main Title */}
            {/* <div className="mw_650 fn_description">
              <p className="fn_desc fn_animated_text">
                Our team is composed of designers, developers, and visionaries.
              </p>
            </div> */}
            {/* Team List Shortcode */}
            <div className="soul_fn_team">
              <ul className="team_list">
                <li className="team_item">
                  <div className="t_item">
                    <div className="person_info">
                      <div className="img_holder">
                        <img src="img/author/buns-enchantress.png" alt="" />
                      </div>
                      <div className="title_holder">
                        <h3 className="fn_title">Buns Enchantress</h3>
                        <p className="fn_desc">Cofounder & Lead Developer</p>
                      </div>
                    </div>
                    <div className="person_social">
                      <ul>
                        <li>
                          <a 
                            href="https://twitter.com/0xBuns"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fn-icon-twitter" />
                          </a>
                        </li>
                        <li>
                          <a 
                            href="https://linkedin.com/in/buns"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fn-icon-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a 
                            href="https://instagram.com/bunsdev"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fn-icon-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* !Team List Shortcode */}
          </div>
        </section>
        {/* !Team Section */}
      </div>
    </Layout>
  );
};
export default About;