import Link from "next/link"

const ServicesComponent = () => {
  return (
    <section id="services">
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
      <div className="container">
        {/* Main Title */}
        <div className="soul_fn_title">
          {/* <h3 className="fn_title"> */}
          <h2
            style={{
              display: 'flex',
              // border: '1px solid',
              // borderRadius: '10px',
              // padding: '10px',
              color: '#8A02FF',
              fontFamily: 'Cursive',
              fontSize: '48px',
              margin: '10px',
              marginTop: '10px',
              // borderColor: '#8A02FF',
            }}
          >
            {`Our Services`}
            {/* <img 
                  src={'/img/text/our-services.png'}
                  height={72}
                  width={460}
                  alt="our services"
                /> */}
          </h2>
          <div className="line">
            <span />
          </div>
        </div>
        {/* !Main Title */}
        {/* Services */}
        <div className="soul_fn_services">
          <ul>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>01</span>
                </div>
                <div className="item_content">
                  <h3
                    style={{
                      display: 'grid',
                      alignItems: 'center',
                      textAlign: 'center',
                      border: '1px solid',
                      borderRadius: '10px',
                      padding: '10px',
                      // color: '#8A02FF',
                      fontFamily: 'Cursive',
                      fontSize: '36px',
                      margin: '10px',
                      marginTop: '10px',
                      borderColor: '#8A02FF',
                    }}
                  >
                <a
                  href={'https://app.soul.sh'}
                  target={"_blank"}
                  rel={'norefferer'}
                >
                    {`Exchange`}
                  </a>
                  </h3>
                  <p className="fn_desc fn_animated_text"
                    style={{
                      textAlign: 'center',
                    }}
                  >
                    {`Exchange a multitude of tokens on Fantom Opera, Avalanche Network, and Ethereum.`}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>02</span>
                </div>
                <div className="item_content">
                <h3
                    style={{
                      display: 'grid',
                      alignItems: 'center',
                      textAlign: 'center',
                      border: '1px solid',
                      borderRadius: '10px',
                      padding: '10px',
                      // color: '#8A02FF',
                      fontFamily: 'Cursive',
                      fontSize: '36px',
                      margin: '10px',
                      marginTop: '10px',
                      borderColor: '#8A02FF',
                    }}
                  >
                    <a
                  href={'https://app.soul.sh/aggregator'}
                  target={"_blank"}
                  rel={'norefferer'}
                >
                    {`Aggregate`}
                  </a>
                  </h3>
                  <p className="fn_desc fn_animated_text"
                    style={{
                      textAlign: 'center',
                    }}
                  >
                    {`Our meta-aggregator sorts through multiple aggregators to find the best price for your trades.`}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>03</span>
                </div>
                <div className="item_content">
                <h3
                    style={{
                      display: 'grid',
                      alignItems: 'center',
                      textAlign: 'center',
                      border: '1px solid',
                      borderRadius: '10px',
                      padding: '10px',
                      // color: '#8A02FF',
                      fontFamily: 'Cursive',
                      fontSize: '36px',
                      margin: '10px',
                      marginTop: '10px',
                      borderColor: '#8A02FF',
                    }}
                  >
                    <a
                  href={'https://app.soul.sh/farms'}
                  target={"_blank"}
                  rel={'norefferer'}
                >
                    {`Summon`}
                  </a>
                  </h3>
                  <p className="fn_desc fn_animated_text"
                    style={{
                      textAlign: 'center',
                    }}
                  >
                    {`Summon SOUL by staking SOUL in our vault or by providing liquidity to our pools on Fantom Opera or Avalanche Network.`}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>04</span>
                </div>
                <div className="item_content">
                <h3
                    style={{
                      display: 'grid',
                      alignItems: 'center',
                      textAlign: 'center',
                      border: '1px solid',
                      borderRadius: '10px',
                      padding: '10px',
                      fontFamily: 'Cursive',
                      fontSize: '36px',
                      margin: '10px',
                      marginTop: '10px',
                      borderColor: '#8A02FF',
                    }}
                  >
                    <Link
                  href={'/Crosschain'}
                  target={"_blank"}
                  rel={'norefferer'}
                >
                    {`Crosschain`}
                  </Link>
                  </h3>
                  <p className="fn_desc fn_animated_text"
                    style={{
                      textAlign: 'center',
                    }}
                  >
                    {`Swap tokens from one blockchain to another using our integrated, crosschain exchange.`}
                    {/* {`We innovated a decentralized farm that allows you to earn rewards from protocols that launch with us.`} */}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>05</span>
                </div>
                <div className="item_content">
                <h3
                    style={{
                      display: 'grid',
                      alignItems: 'center',
                      textAlign: 'center',
                      border: '1px solid',
                      borderRadius: '10px',
                      padding: '10px',
                      // color: '#8A02FF',
                      fontFamily: 'Cursive',
                      fontSize: '36px',
                      margin: '10px',
                      marginTop: '10px',
                      borderColor: '#8A02FF',
                    }}
                  >
                    <a
                  href={'https://app.soul.sh/bonds'}
                  target={"_blank"}
                  rel={'norefferer'}
                >
                    {`Bond`}
                  </a>
                  </h3>
                  <p className="fn_desc fn_animated_text"
                    style={{
                      textAlign: 'center',
                    }}
                  >
                    {`We created a novel bonding mechanism to incentivize liquidity which, unlike our competitors, is owned by the protocol, instead of rented.`}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>06</span>
                </div>
                <div className="item_content">
                <h3
                    style={{
                      display: 'grid',
                      alignItems: 'center',
                      textAlign: 'center',
                      border: '1px solid',
                      borderRadius: '10px',
                      padding: '10px',
                      // color: '#8A02FF',
                      fontFamily: 'Cursive',
                      fontSize: '36px',
                      margin: '10px',
                      marginTop: '10px',
                      borderColor: '#8A02FF',
                    }}
                  >
                    <a
                  href={'https://app.soul.sh/defarms'}
                  target={"_blank"}
                  rel={'norefferer'}
                >
                    {`Launch`}
                  </a>
                  </h3>
                  <p className="fn_desc fn_animated_text"
                    style={{
                      textAlign: 'center',
                    }}
                  >
                    {`We innovated a decentralized farm that allows you to earn rewards from protocols that launch with us.`}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>07</span>
                </div>
                <div className="item_content">
                <h3
                    style={{
                      display: 'grid',
                      alignItems: 'center',
                      textAlign: 'center',
                      border: '1px solid',
                      borderRadius: '10px',
                      padding: '10px',
                      // color: '#8A02FF',
                      fontFamily: 'Cursive',
                      fontSize: '36px',
                      margin: '10px',
                      marginTop: '10px',
                      borderColor: '#8A02FF',
                    }}
                  >
                    <a
                  href={'https://app.soul.sh/exchange/bridge'}
                  target={"_blank"}
                  rel={'norefferer'}
                >
                    {`Bridge`}
                  </a>
                  </h3>
                  <p className="fn_desc fn_animated_text"
                    style={{
                      textAlign: 'center',
                    }}
                  >
                    {`Bridge USDC, WETH, and WBTC tokens to and from blockchains such as Ethereum, Fantom, and Avalanche.`}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>08</span>
                </div>
                <div className="item_content">
                <h3
                    style={{
                      display: 'grid',
                      alignItems: 'center',
                      textAlign: 'center',
                      border: '1px solid',
                      borderRadius: '10px',
                      padding: '10px',
                      // color: '#8A02FF',
                      fontFamily: 'Cursive',
                      fontSize: '36px',
                      margin: '10px',
                      marginTop: '10px',
                      borderColor: '#8A02FF',
                    }}
                  >
                    <a
                  href={'https://app.soul.sh/autostake'}
                  target={"_blank"}
                  rel={'norefferer'}
                >
                    {`Stake`}
                  </a>
                  </h3>
                  <p className="fn_desc fn_animated_text"
                    style={{
                      textAlign: 'center',
                    }}
                  >
                    {`Participate in our auto-compounding staking vault, where you can deposit SOUL for more SOUL, which compounds up to 3x daily.`}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* !Services */}
      </div>
    </section>
  );
};
export default ServicesComponent;
