import WalletConnect from "components/WalletConnect"
import Link from "next/link"
import Image from "next/image"
import { Fragment, useState } from "react"

const Header = () => {
  const [toggle, setToggle] = useState(false);
  // const [homeToggle, setHomeToggle] = useState(false);
  return (
    <Fragment>
      <div
        className={`nav_overlay ${toggle ? "go" : ""}`}
        onClick={() => setToggle(false)}
      />
      <div className={`soul_fn_nav ${toggle ? "go" : ""}`}>
        <div className="trigger is-active">
          <div className="trigger_in" onClick={() => setToggle(false)}>
            <span className="hamb">
              <span className="hamb_a" />
              <span className="hamb_b" />
              <span className="hamb_c" />
            </span>
          </div>
        </div>
        <div className="nav_content">
        </div>
        {/* Nav Footer */}
        <div className={`nav_footer ${toggle ? "ready" : ""}`}>
        </div>
      </div>
      <header className="soul_fn_header">
        <div className="container">
          <div className="header_in">
            <div
              style={{
                display: 'flex',
                gap: '12px',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Link
                href="/"
              >
                <Image
                  src="/logo.png"
                  height={48}
                  width={48}
                  alt="soul logo"
                />
              </Link>
            </div>
            {/* <a
              href="https://app.soulswap.finance"
              style={{
                display: 'flex',
                padding: '0 12px',
                border: '1px solid',
                borderRadius: '12px',
                borderColor: '#8A02FF',
                color: '#8A02FF',
              }}
            >
              {'Open App'}
            </a> */}
             <h2
              style={{
                display: 'grid',
                alignItems: 'center',
                textAlign: 'center',
                border: '1px solid',
                borderRadius: '10px',
                padding: '8px',
                // color: '#8A02FF',
                fontFamily: 'Cursive',
                fontSize: '22px',
                margin: '10px',
                // marginTop: '10px',
                borderColor: '#8A02FF',
              }}
            >
              <a
                href={'https://exchange.soulswap.finance'}
                target={"_blank"}
                rel={'norefferer'}
              >
                {`Open App`}
              </a>
            </h2>
            {/* <WalletConnect /> */}
          </div>
        </div>
      </header>
      {/* <div
              style={{
                display: 'flex', 
                gap: '12px', 
                flexDirection: 'row', 
                justifyContent: 'space-between', 
                alignItems: 'center'
              }}
            >
              <Link
                href="https://discord.gg/soulswap"
                target="_blank"
                rel="noreferrer"
              >
                <div
                  style={{
                    border: '1px solid #fff',
                    padding: '0 12px',
                    borderRadius: '12px',
                    borderColor: '#8A02FF'
                  }}
                >
                  {'Discord'}
                </div>
              </Link>
              <Link
                href="https://twitter.com/SoulSwapFinance"
                target="_blank"
                rel="noreferrer"
              >
                <div
                  style={{
                    border: '1px solid #fff',
                    padding: '0 12px',
                    borderRadius: '12px',
                    borderColor: '#8A02FF'
                  }}
                >
                  {'Twitter'}
                </div>
              </Link>
              <Link
                href="https://docs.soulswap.finance"
                target="_blank"
                rel="noreferrer"
              >
                <div
                  style={{
                    border: '1px solid #fff',
                    padding: '0 12px',
                    borderRadius: '12px',
                    borderColor: '#8A02FF'
                  }}
                >
                  {'Docs'}
                </div>
              </Link>
              <a
                href="https://links.soulswap.finance"
                target="_blank"
                rel="noreferrer"
                >
                <div
                  style={{
                    border: '1px solid #fff',
                    padding: '0 12px',
                    borderRadius: '12px',
                    borderColor: '#8A02FF',
                    color: '#FFFFFF',
                  }}
                  >
                  {'Links'}
                  </div>
              </a>
          </div>
          </div>
        </div>
      </header> */}
      {/* !Header */}
    </Fragment>
  );
};
export default Header;