import Link from "next/link";
const BlogComponent = () => {
  return (
    <section id="blog">
      <div className="container">
        {/* Main Title */}
        <div className="soul_fn_title">
          <h3 className="fn_title">SoulSwap News</h3>
          <div className="line">
            <span />
          </div>
        </div>
        {/* !Main Title */}
        {/* Moving Blog List Shortcode */}
        <div className="soul_fn_moving_blog">
          <ul>
            <li>
              <div className="item">
                <img src="img/brujas/bruja-1.png" alt="" className="moving_img" />
                <p className="fn_date">
                  <span>September 2023</span>
                </p>
                <h3 className="fn_title">
                  <Link href="/blog-single">
                  Bruja NFTs Goes Public
                  </Link>
                </h3>
                <p className="fn_desc">
                  Morbi non dignissim erat, a blandit felis nec lorem vel orci
                  varius congue ut vitae est.
                </p>
                <p className="fn_read">
                  <Link href="/blog-single">
                    <a className="soul_fn_button only_text">
                      <span className="text">Read More</span>
                    </a>
                  </Link>
                </p>
              </div>
            </li>
          </ul>
        </div>
        {/* !Moving Blog List Shortcode */}
      </div>
    </section>
  );
};
export default BlogComponent;
