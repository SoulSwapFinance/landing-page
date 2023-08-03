import { Fragment } from "react"

const ProductPopup = ({ open, close, img, title, dec }) => {
  return (
    <Fragment>
      <div className={`soul_fn_modal product_modal ${open ? "opened" : ""}`}>
        <div className="modal_in">
          <div className="modal_closer">
            <a onClick={() => close()}>
              <img src="svg/cancel.svg" alt="" className="fn__svg" />
            </a>
          </div>
          <div className="modal_content">
            <div className="soul_fn_product_modal">
              <div className="img_item">
                <img src={img} />
              </div>
              <div className="content_item">
                {/* <div className="soul_fn_title" data-align="left">
                  <h3 className="fn_title">{title}</h3>
                  <div className="line">
                    <span />
                  </div>
                </div> */}
                <div className="desc">
                  <p>
                    {dec
                      ? dec
                      : `Holders unlock exclusive benefits. Stay tuned for more, including a list of benefits for summoning a Bruja of your very own...`}
                  </p>
                </div>
                <div className="buttons">
                  <a
                    href="/brujas"
                    className="soul_fn_button opensea"
                  >
                    <span className="icon">
                      <img src="svg/padlock.svg" alt="" className="fn__svg" />
                    </span>
                    <span className="text">Coming Soon...</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ProductPopup;
