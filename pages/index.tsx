import ServicesComponent from "../src/components/ServicesComponent";
import Timeline from "../src/components/Timeline";
import Link from 'next/link';
import Layout from "../src/layout/Layout";
import Image from 'next/image';

const Index = () => {
  return (
    <Layout pageName={"Home"}>
      {/* Hero Header */}
      <div className="soul_fn_hero">
        {/* Overlay (of hero header) */}
        <div className="bg_overlay">
          {/* Overlay Color */}
          <div className="bg_color" />
          {/* !Overlay Color */}
          {/* Overlay Image */}
          <div className="bg_image" data-bg-img="img/hero/bruja-hero.png" />
          {/* !Overlay Image */}
        </div>
        {/* Overlay (of hero header) */}
        <div className="hero_content">
          <div className="container">
            <div className="content">
              <h2 className="fn_title" title="Soul">
                <img src="/img/text/soulswap-finance.png"
                  alt=""
                  height={64}
                />
              </h2>
              <p className="fn_desc fn_animated_text">
                Swap, Farm, Stake, and Earn...
              </p>
            </div>
          </div>
          {/* <div>
              <p
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '60px',
                  border: '1px solid',
                  borderRadius: '10px',
                  margin: '10px',
                  padding: '10px',
                  borderColor: '#af81f7',
                  animation: 'pulse 2s',
                }}
              >
                <Link href={`https://exchange.soulswap.finance`}>
                <a
                  
                  target="_blank"
                  rel="noreferrer"
                >
                <img
                    src={'/img/text/exchange.png'}
                    height={24}
                    width={164}
                // {'Visit Exchange'}
                />
                </a>
              </Link>
              </p>
          </div> */}
          <a
            href="#about"
            className="soul_fn_down magic-hover magic-hover__square"
          >
            {/* <span className="text">Scroll Down</span> */}
              <p
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '60px',
                  border: '1px solid',
                  borderRadius: '10px',
                  margin: '10px',
                  padding: '10px',
                  borderColor: '#af81f7',
                  animation: 'pulse 2s',
                }}
              >
                <Link 
                  href={`https://exchange.soulswap.finance`}
                  target="_blank"
                  rel="noreferrer"
                  >
                <Image
                    src={'/img/text/exchange.png'}
                    height={24}
                    width={164}
                // {'Visit Exchange'}
                />
              </Link>
              </p>
            <span className="icon">
              <img src="svg/right-arr.svg" alt="" className="fn__svg" />
            </span>
          </a>
        </div>
      </div>
      {/* About Section */}
      <ServicesComponent />

      {/* !Hero Header */}
      {/* Video Shortcode */}
      <div className="soul_fn_video">
        <div className="bg_overlay">
          <div className="bg_image" data-bg-img="img/brujas/bruja-5.png" />
          <div className="bg_color" />
        </div>
        <div className="v_content">
          <a
            className="popup-youtube"
            href="//www.youtube.com/embed/CCA4Q5DkFU4"
          >
            <img src="svg/play.svg" alt="" className="fn__svg" />
          </a>
        </div>
      </div>
      {/* <div
        className="soul_fn_title"
        style={{
          marginTop: '50px',
          rowGap: '24px',
        }}
      >
        <Timeline />
      </div> */}
    </Layout>
  );
};
export default Index;
