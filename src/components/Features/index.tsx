import { createUseStyles } from 'react-jss';
import { Breakpoints } from '../../utils/utils';
// import SOUL from '../Header/images/logo.png';
// import SEANCE from './seance.jpeg';

let TRADE = 'https://media.giphy.com/media/8yQady2pFVfGJSnde7/giphy.gif';
let FEES = 'https://media.giphy.com/media/z61VConcyh7xzEXSXj/giphy.gif';
let SUMMONER = 'https://media.giphy.com/media/3oz8xC4dxxJdjCZnEs/giphy.gif';
let STAKE = 'https://media.giphy.com/media/jYoS8KTZzy7KJKVcVf/giphy.gif';
let ROADMAP = 'https://media.giphy.com/media/VbDkxgjeSaty0loK6N/giphy.gif';

const useStyles = createUseStyles({
  container: {
    marginTop: '104px',
  },
  cardsContainer: { display: 'block', marginTop: '40px', marginRight: '-24px' },
  card: {
    padding: '28px 32px',
    marginRight: '24px',
    width: 'calc(100%-48px)',
    marginBottom: '24px',
    borderRadius: '8px',
    boxShadow:
      'inset 0px 0px 22.0779px rgb(255 255 255 / 5%), inset 0px 1.2987px 1.2987px rgb(255 255 255 / 15%)',
  },
  cardImageContainer: {
    boxShadow:
      'inset 0px 0px 22.0779px rgb(255 255 255 / 5%), inset 0px 1.2987px 1.2987px rgb(255 255 255 / 15%)',
    width: '128px',
    height: '128px',
    padding: '16px',

  },
  cardImage: {
    // width: '100%',
    width: '100px',
    height: '100px',
    alignItems: 'center',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardTitle: {
    color: 'white',
    marginTop: '20px',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '24px',
  },
  cardText: {
    marginTop: '8px',
    textAlign: 'center',
    fontSize: '14px',
    maxWidth: '75%',
  },
  CTA: {
    marginTop: '40px',
    color: 'white',
    padding: '12px 28px',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '4px',
    fontSize: '16px',
    lineHeight: '17px',
    cursor: 'pointer',
    border: '1px solid #D198F9',
    userSelect: 'none',
    transition: 'all 0.2s',
    '&:hover': {
      filter: 'brightness(120%)',
    },
  },
  title: {
    color: 'white',
    // textAlign: 'center',
    fontWeight: 'bolder',
    fontSize: '28px',
  },
  [`@media (min-width: ${Breakpoints.sm}px)`]: {
    title: {
      fontSize: '40px',
    },
    cardsContainer: { display: 'flex', alignItems: 'center' },
    card: {
      width: '25%',
    },
  },
});

export default function Features() {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <div className={styles.title}>Our Soul Services</div>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <div>
              <div className={styles.cardImageContainer}>
                <img className={styles.cardImage} src={TRADE} alt="card" />
              </div>
              {/* <div className={styles.cardTitle}>Swap</div>
              <div className={styles.cardText}>
                Across chains.
              </div> */}
            </div>
            <a href="https://soul.sh/exchange/swap?/exactInput&inputCurrency=FTM&&outputCurrency=0xe2fb177009ff39f52c0134e8007fa0e4baacbd07" target="_blank" rel="noreferrer">
              <div className={styles.CTA}>TRADE TOKENS</div>
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <div>
              <div className={styles.cardImageContainer}>
                <img className={styles.cardImage} src={FEES} alt="card" />
              </div>
              {/* <div className={styles.cardTitle}>Earn</div>
              <div className={styles.cardText}>
                With liquidity.
              </div> */}
            </div>
            <a href="https://soul.sh/farm" target="_blank" rel="noreferrer">
              <div className={styles.CTA}>EARN FEES</div>
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <div>
              <div className={styles.cardImageContainer}>
                <img className={styles.cardImage} src={SUMMONER} alt="card" />
              </div>
              {/* <div className={styles.cardTitle}>Souls</div>
              <div className={styles.cardText}>
                With liquidity.
              </div> */}
            </div>
            <a href="https://soul.sh/farm" target="_blank" rel="noreferrer">
              <div className={styles.CTA}>SUMMON SOUL</div>
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <div>
              <div className={styles.cardImageContainer}>
                <img className={styles.cardImage} src={STAKE} alt="card" />
              </div>
              {/* <div className={styles.cardTitle}>Seances</div>
              <div className={styles.cardText}>
                Soul for Seance.
              </div> */}
            </div>
            <a href="https://soul.sh/seance" target="_blank" rel="noreferrer">
              <div className={styles.CTA}>STAKE SOUL</div>
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <div>
              <div className={styles.cardImageContainer}>
                <img className={styles.cardImage} src={ROADMAP} alt="card" />
              </div>
              {/* <div className={styles.cardTitle}>Outcasts</div>
              <div className={styles.cardText}>
                With friends.
              </div> */}
            </div>
            <a href="https://view.monday.com/1765008420-f675b7885c5b411a6b49ba3f18b41cb8?r=use1" target="_blank" rel="noreferrer">
              <div className={styles.CTA}>OUR ROADMAP</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
