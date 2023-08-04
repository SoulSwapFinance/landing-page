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
              color: '#6A02FF',
              fontFamily: 'Cursive',
              fontSize: '48px',
              margin: '10px',
              marginTop: '10px',
              // borderColor: '#6A02FF',
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
                  {/* <h3 className="fn_title">Benefits</h3> */}
                  <h3
                    style={{
                      display: 'grid',
                      alignItems: 'center',
                      textAlign: 'center',
                      border: '1px solid',
                      borderRadius: '10px',
                      padding: '10px',
                      color: '#6A02FF',
                      fontFamily: 'Cursive',
                      fontSize: '36px',
                      margin: '10px',
                      marginTop: '10px',
                      borderColor: '#FFFFFF',
                    }}
                  >
                    {`Exchange`}
                  </h3>
                  <p className="fn_desc fn_animated_text"
                    style={{
                      textAlign: 'center',
                    }}
                  >
                    {`Exchange a multitude of assets on Fantom Opera, Avalanche Network, and Ethereum.`}
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
                  {/* <h3 className="fn_title">High Quality</h3> */}
                  <h3
                    style={{
                      display: 'grid',
                      alignItems: 'center',
                      textAlign: 'center',
                      border: '1px solid',
                      borderRadius: '10px',
                      padding: '10px',
                      color: '#6A02FF',
                      fontFamily: 'Cursive',
                      fontSize: '36px',
                      margin: '10px',
                      marginTop: '10px',
                      borderColor: '#FFFFFF',
                    }}
                  >
                    {`Aggregate`}
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
                  {/* <h3 className="fn_title">Exclusive Collection</h3> */}
                  <h3
                    style={{
                      display: 'grid',
                      alignItems: 'center',
                      textAlign: 'center',
                      border: '1px solid',
                      borderRadius: '10px',
                      padding: '10px',
                      color: '#6A02FF',
                      fontFamily: 'Cursive',
                      fontSize: '36px',
                      margin: '10px',
                      marginTop: '10px',
                      borderColor: '#FFFFFF',
                    }}
                  >
                    {`Summon`}
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
                  {/* <h3 className="fn_title">Collaborative Community</h3> */}
                  <h3
                    style={{
                      display: 'grid',
                      alignItems: 'center',
                      textAlign: 'center',
                      border: '1px solid',
                      borderRadius: '10px',
                      padding: '10px',
                      color: '#6A02FF',
                      fontFamily: 'Cursive',
                      fontSize: '36px',
                      margin: '10px',
                      marginTop: '10px',
                      borderColor: '#FFFFFF',
                    }}
                  >
                    {`Launch`}
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
          </ul>
        </div>
        {/* !Services */}
      </div>
    </section>
  );
};
export default ServicesComponent;
