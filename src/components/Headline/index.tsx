import { createUseStyles } from "react-jss";
import { Breakpoints } from "../../utils/utils";
// import logo from "../Header/images/logo.png";

let HEADER = 'https://media.giphy.com/media/wGlOtQZba8TKT6qy3U/giphy.gif';

const useStyles = createUseStyles({
  container: {
    marginTop: "0px",
    display: "block",
    alignItems: "center",
    justifyContent: "space-between",
  },
  CTA: {
    backgroundColor: "#9c59d6",
    color: "white",
    padding: "12px 28px",
    textAlign: "center",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    borderRadius: "4px",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "17px",
    cursor: "pointer",
    border: "1px solid #D198F9",
    userSelect: "none",
    transition: "all 0.2s",
    "&:hover": {
      filter: "brightness(120%)",
    },
  },
  title: { color: "white", fontSize: "24px", fontWeight: "bolder" },
  otherSide: {
    letterSpacing: "0.156em",
    color: "#9c59d6",
    fontSize: "32px",
  },
  subTitle: { marginTop: "16px", fontSize: "14px", lineHeight: "32px" },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginLeft: "0px",
    marginTop: "32px",
  },
  [`@media (min-width: ${Breakpoints.sm}px)`]: {
    imageContainer: { marginLeft: "24px", marginTop: "0px" },
    container: { display: "flex" },
    subTitle: {
      fontSize: "20px",
    },
    otherSide: {
      fontSize: "74px",
    },
    title: {
      fontSize: "64px",
    },
  },
});

export default function Headline() {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <div style={{ maxWidth: "600px", flexShrink: 0 }}>
        {/* <div className={styles.title}>From the Other Side...</div> */}
        <div className={styles.subTitle}>
          Soul is the first protocol to offer a comprehensive, cross-chain liquidity solution 
          that enables us to spread liquidity incentives across infinitely-many blockchains
          WITHOUT affecting emissions.
          <br/><br/>
          We redefined governance and are 
          paving the way for P2P Marketplaces, 
          namely: cross-chain atomic swaps, zero-collateral loans, and NFT auctions.
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "28px" }}
        >
          <a href="https://app.soulswap.finance/exchange" target="_blank" rel="noreferrer">
            <div className={styles.CTA}>EXCHANGE</div>
          </a>
          <a
            href="https://docs.soulswap.finance/docs/"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.CTA} 
            style={{ marginLeft: "12px", backgroundColor: "transparent" }}
            >
              DOCS
            </div>
          </a>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={HEADER} alt="soul" style={{ width: "375px" }} />
        {/* <img src={logo} alt="soul" style={{ width: "256px" }} /> */}
      </div>
    </div>
  );
}
