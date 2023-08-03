// import Link from "next/link";
// import { Fragment, useState } from "react"
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
import Drops from '../src/components/Drops';
// import MintButton from "../src/components/MintButton"
// import WalletConnect from 'components/WalletConnect'
// import { useAccount } from 'wagmi'
import AboutComponent from "../src/components/AboutComponent";

const Collection = () => {
  // const { address, isConnecting, isDisconnected } = useAccount();

  return (
    <Layout pageName={"Collection"}>
      <PageBanner pageName={"Collection"} />
      <div className="soul_fn_roadmappage">
        <div className="container">
          <AboutComponent />
          <div className="soul_fn_roadmaplist">
            <Drops />
          </div>
        </div>
      </div>
      {/* <div className="modal_content">
        <div className="soul_fn_product_modal">
          <div className="content_item">
            <div
              className="soul_fn_title"
              data-align="left"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <h3 className="fn_title">
                <img
                  src={'/img/text/Mint-brujas.png'}
                  height={64}
                  width={360}
                />
              </h3>
              <div className="line">
                <span />
              </div>
            </div>

          {!address &&
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid',
                  borderRadius: '10px',
                }}
              >
                <span>
                  <WalletConnect />
                </span>
              </div>
              }
             {address &&
              <div className="content_item soul_fn_button">
                <span className="">
                  <MintButton />
                </span>
              </div>
            }
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid',
                borderRadius: '10px',
                marginTop: '10px',
              }}
            >
              <p
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ul>
                </ul>
                <li>
                  {`Mint Price: 1 ETH per Bruja`}
                </li>
                <li>
                  {`Unlocks exclusive benefits`}
                </li>
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </Layout>
  );
};
export default Collection;
