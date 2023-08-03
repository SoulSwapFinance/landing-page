import WalletConnect from "components/WalletConnect";
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
            {/* <WalletConnect /> */}
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
                href="https://discord.gg/soulswap"
                target="_blank"
                rel="noreferrer"
              >
                <div
                  style={{
                    border: '1px solid #fff',
                    padding: '0 12px',
                    borderRadius: '12px',
                    borderColor: '#af81f7'
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
                    borderColor: '#af81f7'
                  }}
                >
                  {'Twitter'}
                </div>
              </Link>
              {/* <Link
                href="https://docs.soulswap.finance"
                target="_blank"
                rel="noreferrer"
              >
                <div
                  style={{
                    border: '1px solid #fff',
                    padding: '0 12px',
                    borderRadius: '12px',
                    borderColor: '#af81f7'
                  }}
                >
                  {'Docs'}
                </div>
              </Link> */}
              <Link
                href="https://links.soulswap.finance"
                target="_blank"
                rel="noreferrer"
              >
                <div
                  style={{
                    border: '1px solid #fff',
                    padding: '0 12px',
                    borderRadius: '12px',
                    borderColor: '#af81f7'
                  }}
                >
                  {'Links'}
                </div>
              </Link>
          </div>
          </div>
        </div>
      </header>
      {/* !Header */}
    </Fragment>
  );
};
export default Header;