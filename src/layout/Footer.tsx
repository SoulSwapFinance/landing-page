import Link from "next/link"

const Footer = () => {
  return (
    <footer id="footer">
      <div className="soul_fn_footer">
        {/* Footer Top */}
       
        {/* !Footer Top */}
        {/* Footer Bottom */}
        <div className="footer_bottom">
          <div className="container">
            <div className="fb_in">
              {/* <div className="fb_left"> */}
                {/* <p
                  className={'font-bold'}
                >
                  Copyright {new Date().getFullYear()} - Designed &amp;
                  Developed by{" "} 
                  <a
                    href="https://twitter.com/SoulSwapFinance"
                    target="_blank"
                    rel="noreferrer"
                  >
                   Copyright {new Date().getFullYear()} — SoulSwap
                  </a>
                </p> */}
              {/* </div> */}
              <div className="fb_right">
                <ul>
                  <li>
                    <Link 
                      href="https://twitter.com/SoulSwapFinance">
                      <a>
                        Twitter
                      </a>
                    </Link>
                  </li>
                  <li>
                    <a 
                      href="https://discord.gg/SoulSwap"
                      target={'_blank'}
                      rel={'noreferrer'}
                    >
                        Discord
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://t.me/SoulSwapDeFi"
                      target={'_blank'}
                      rel={'noreferrer'}
                    >
                        Telegram
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://links.soulswap.finance"
                      target={'_blank'}
                      rel={'noreferrer'}
                    >
                        Links
                    </a>
                  </li>
                  {/* <li>
                    <a 
                      href="/Apps"
                      // target={'_blank'}
                      // rel={'noreferrer'}
                    >
                        Apps
                    </a>
                  </li> */}
                  {/* <li>
                    <Link href="/about">About</Link>
                  </li> */}
                  {/* <li>
                    <Link href="/brujas">Brujas</Link>
                  </li> */}
                  {/* <li>
                    <Link href="/Roadmap">Roadmap</Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* !Footer Bottom */}
      </div>
    </footer>
  );
};
export default Footer;
