import { Fragment, useState } from "react";
import ProductPopup from "./popup/ProductPopup";
import Timeline from "./Timeline";

const Drops = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState({ img: "", title: "" });
  const dropData = [
    {
      img: "img/brujas/bruja-1.png",
      title: "Rare Bruja",
    },
    {
      img: "img/brujas/bruja-2.png",
      title: "Rare Bruja",
    },
    {
      img: "img/brujas/bruja-3.png",
      title: "Rare Bruja",
    },
    {
      img: "img/brujas/bruja-4.png",
      title: "Rare Bruja",
    },
  ];

  const onClick = (value) => {
    setData(dropData[value - 1]);
    setToggle(true);
  };

  const { img, title } = data;

  return (
    <Fragment>
      <ProductPopup
        open={toggle}
        close={() => setToggle(false)}
        img={img}
        title={title}
      />
      {/* Drops Section */}
      <section id="drop">
        <div className="container">
          {/* Main Title */}
          <div className="soul_fn_title">
          <h3 className="fn_title">
            <img 
              src={'/img/text/bruja-collection.png'}
              height={48}
              width={460}
              alt="bruja collection"
            />
          </h3>
          <div className="line">
              <span />
            </div>
          </div>
          {/* !Main Title */}
          {/* Drops List */}
          <div className="soul_fn_drops">
            <ul>
              <li>
                <div
                  className="item"
                  data-modal-image="img/brujas/bruja-1.png"
                  data-modal-title="Rare Bruja"
                  data-modal-description="Each rare bruja costs 1 ETH to mint and provides the most exclusive line of benefits."
                  data-modal-opensea-url=""
                >
                  <div className="img_holder title_holder">
                    <img src="img/brujas/bruja-1.png" alt="" />
                    <a className="full_link" onClick={() => onClick(1)} />
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="item"
                  data-modal-image="img/brujas/bruja-2.png"
                  data-modal-title="Rare Bruja"
                  data-modal-description="Each rare bruja costs 1 ETH to mint and provides the most exclusive line of benefits."
                  data-modal-opensea-url=""
                >
                  <div className={"img_holder title_holder"}>
                    <img src="img/brujas/bruja-2.png" alt="" />
                    <a onClick={() => onClick(2)} className="full_link" />
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="item"
                  data-modal-image="img/brujas/bruja-3.png"
                  data-modal-title="Rare Bruja"
                  data-modal-description="Each rare bruja costs 1 ETH to mint and provides the most exclusive line of benefits."
                  data-modal-opensea-url=""
                >
                  <div className="img_holder title_holder">
                    <img src="img/brujas/bruja-3.png" alt="" />
                    <a onClick={() => onClick(3)} className="full_link" />
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="item"
                  data-modal-image="img/brujas/bruja-4.png"
                  data-modal-title="Rare Bruja"
                  data-modal-description="Each rare bruja costs 1 ETH to mint and provides an exclusive set of benefits for all holders."
                  data-modal-opensea-url=""
                >
                  <div className="img_holder title_holder">
                    <img src="img/brujas/bruja-4.png" alt="" />
                    <a onClick={() => onClick(4)} className="full_link" />
                  </div>
                </div>
              </li>
            </ul>
            {/* Clearfix */}
            <div className="clearfix" />
          </div>
          {/* !Drops List */}
          <Timeline />
        </div>
      </section>
      {/* !Drops Section */}
    </Fragment>
  );
};
export default Drops;
