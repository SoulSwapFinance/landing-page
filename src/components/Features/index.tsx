import { createUseStyles } from 'react-jss';
import { Breakpoints } from '../../utils/utils';
import SOUL from '../Header/images/logo.png';
import SEANCE from './seance.jpeg';

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
    width: '100%',
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
      <div className={styles.title}>Our Soul Services...</div>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <div>
              <div className={styles.cardImageContainer}>
                <img className={styles.cardImage} src={SEANCE} alt="card" />
              </div>
              <div className={styles.cardTitle}>SoulSwap</div>
              {/* <div className={styles.cardText}>
                Across chains.
              </div> */}
            </div>
            <a href="https://soul.sh/exchange/swap?/exactInput&inputCurrency=FTM&&outputCurrency=0xe2fb177009ff39f52c0134e8007fa0e4baacbd07" target="_blank" rel="noreferrer">
              <div className={styles.CTA}>TRADE</div>
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <div>
              <div className={styles.cardImageContainer}>
                <img className={styles.cardImage} src={SOUL} alt="card" />
              </div>
              <div className={styles.cardTitle}>SoulPower</div>
              {/* <div className={styles.cardText}>
                With liquidity.
              </div> */}
            </div>
            <a href="https://soul.sh/farm" target="_blank" rel="noreferrer">
              <div className={styles.CTA}>SUMMON</div>
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <div>
              <div className={styles.cardImageContainer}>
                <img className={styles.cardImage} src={SEANCE} alt="card" />
              </div>
              <div className={styles.cardTitle}>SeanceCircle</div>
              {/* <div className={styles.cardText}>
                Soul for Seance.
              </div> */}
            </div>
            <a href="https://soul.sh/stake" target="_blank" rel="noreferrer">
              <div className={styles.CTA}>STAKE</div>
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <div>
              <div className={styles.cardImageContainer}>
                <img className={styles.cardImage} src={SOUL} alt="card" />
              </div>
              <div className={styles.cardTitle}>SouLend</div>
              {/* <div className={styles.cardText}>
                With friends.
              </div> */}
            </div>
            <a href="https://soul.sh" target="_blank" rel="noreferrer">
              <div className={styles.CTA}>SOON...</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
