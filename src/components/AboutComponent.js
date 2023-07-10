import Link from "next/link";
const AboutComponent = () => {
  return (
    <section id="about">
      <div className="container">
        {/* About Item #1 */}
        <div className="soul_fn_about_item">
          <div className="img_item">
            <img src="img/brujas/bruja-2.png" alt="" />
          </div>
          <div className="content_item">
            <div className="soul_fn_title" data-align="left">
              {/* <h3 className="fn_title">Rise of Brujas</h3> */}
              <h3 className="fn_title">
                <img 
                  src={'/img/text/rise-of-brujas.png'}
                  height={64}
                  width={320}
                  alt="rise of brujas"
                />
              </h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
               Limit number of exclusive NFTs. Your chance to participate in an opportunity of a lifetime. Details coming soon.
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
        {/* About Item #2 */}
        <div className="soul_fn_about_item reverse">
          <div className="img_item">
            <img src="/img/brujas/bruja-3.png" alt="" />
          </div>
          <div className="content_item">
            <div className="soul_fn_title" data-align="left">
            <h3 className="fn_title">
                <img 
                  src={'/img/text/collection.png'}
                  height={64}
                  width={320}
                  alt="bruja collection"
                />
            </h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
                Each bruja unlocks superpowers for holders. These will be announced, so stay tuned for more details.
              </p>
            </div>
            {/* <div className="buttons">
              <Link href="/about">
                <a className="soul_fn_button only_text">
                  <span className="text">More About Us</span>
                </a>
              </Link>
            </div> */}
          </div>
        </div>
        {/* !About Item #2 */}
      </div>
    </section>
  );
};
export default AboutComponent;
