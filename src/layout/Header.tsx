// import WalletConnect from "components/WalletConnect";
import Link from "next/link"
import { Fragment, useState } from "react"

const Header = () => {
  const [toggle, setToggle] = useState(false);
  // const [homeToggle, setHomeToggle] = useState(false);
  return (
    <Fragment>
      {/* Right Navigation */}
      <div
        className={`nav_overlay ${toggle ? "go" : ""}`}
        onClick={() => setToggle(false)}
      />
      <div className={`soul_fn_nav ${toggle ? "go" : ""}`}>
        <div className="trigger is-active">
          <div className="trigger_in" onClick={() => setToggle(false)}>
            {/* <span className="text">Close</span> */}
            <span className="hamb">
              <span className="hamb_a" />
              <span className="hamb_b" />
              <span className="hamb_c" />
            </span>
          </div>
        </div>
        <div className="nav_content">
          <div className="nav_menu">
            <ul>
              {/* <li className="menu-item">
                  <WalletConnect />
                </li> */}
              <li className="menu-item">
                <Link href="/">
                <a>
                  <img 
                    src={'/img/text/home.png'}
                    height={36}
                    width={164}
                    alt="home"
                  />
                </a>
                </Link>
              </li>
              <li className="menu-item">
                <Link 
                  href="https://exchange.soulswap.finance"
                  target="_blank"
                  rel="noreferrer"
                >
                <a
                  target="_blank"
                  rel="noreferrer"
                >
                  <img 
                    src={'/img/text/exchange.png'}
                    height={36}
                    width={164}
                    alt="exchange"
                  />
                </a>
                </Link>
              </li>
              <li className="menu-item">
                <Link 
                  href="https://exchange.soulswap.finance/farm"
                >
                <a
                  target="_blank"
                  rel="noreferrer"
                >
                  <img 
                    src={'/img/text/summon.png'}
                    height={36}
                    width={164}
                    alt="summon"
                  />
                </a>
                </Link>
              </li>
              <li className="menu-item">
                <Link 
                  href="https://exchange.soulswap.finance/defarms"
                  target="_blank"
                  rel="noreferrer"
                >
                <a
                  target="_blank"
                  rel="noreferrer"
                >
                  <img 
                    src={'/img/text/launch.png'}
                    height={36}
                    width={164}
                    alt="launch"
                  />
                </a>
                </Link>
              </li>
              {/* <li className="menu-item">
                <Link href="/mint">
                <a>
                  <img
                    src={'/img/text/mint.png'}
                    height={36}
                    width={164}
                    alt="mint"
                  />
                </a>
                </Link>
              </li> */}
              {/* <li className="menu-item">
                <Link href="/about">
                <a>
                  <img 
                    src={'/img/text/about.png'}
                    height={36}
                    width={164}
                    alt="about"
                  />
                </a>
                </Link>
              </li> */}
              {/* <li className="menu-item">
                <Link href="/brujas">
                <a>
                  <img 
                    src={'/img/text/brujas.png'}
                    height={48}
                    width={164}
                    alt="brujas"
                  />
                </a>
                </Link>
              </li>
              <li className="menu-item">
                <Link href="/roadmap">
                <a>
                  <img 
                    src={'/img/text/roadmap.png'}
                    height={36}
                    width={164}
                    alt="roadmap"
                  />
                </a>
                </Link>
              </li> */}
            </ul>
          </div>
          {/* <div className="nav_buttons">
            <a
              href="https://opensea.io/"
              className="soul_fn_button"
              target="_blank"
            >
              <span className="icon">
                <img src="svg/opensea.svg" alt="" className="fn__svg" />
              </span>
              <span className="text">OpenSea</span>
            </a>
          </div> */}
        </div>
        {/* Nav Footer */}
        <div className={`nav_footer ${toggle ? "ready" : ""}`}>
          {/* <div className="nf_left">
            <p
              className={'font-bold'}
            >
             Developed by{" "}
              <a
                href="https://twitter.com/0xBuns"
                target="_blank"
              >
                Buns Enchantress
              </a>
            </p>
          </div> */}
          {/* <div className="nf_right">
            <div className="soul_fn_social_list">
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
            </div>
          </div> */}
        </div>
        {/* !Nav Footer */}
      </div>
      {/* !Right Navigation */}
      {/* Header */}
      <header className="soul_fn_header">
        <div className="container">
          <div className="header_in">
          <div className="logo">
              <Link href="/">
                <a>
                  <img 
                    src="/favicon.png"
                    alt="bruja text logo"
                    height={48}
                    
                  />
                </a>
              </Link>
            </div>
            
      {/* <WalletConnect /> */}
            <div className="trigger">
              <div className="trigger_in" onClick={() => setToggle(!toggle)}>
                {/* <span className="text">Menu</span> */}
                <span className="hamb">
                  <span className="hamb_a" />
                  <span className="hamb_b" />
                  <span className="hamb_c" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* !Header */}
    </Fragment>
  );
};
export default Header;
