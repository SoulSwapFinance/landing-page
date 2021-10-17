import { createUseStyles } from 'react-jss';
import { Breakpoints } from '../../utils/utils';
import logo from '../Header/images/logo.png';
import logo2 from './seance.jpeg';

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
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardTitle: {
    color: 'white',
    marginTop: '20px',
    fontWeight: 'bold',
    fontSize: '24px',
  },
  cardText: {
    marginTop: '8px',
    fontSize: '14px',
    maxWidth: '75%',
  },
  CTA: {
    marginTop: '40px',
    color: 'white',
    padding: '12px 28px',
    textAlign: 'center',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '4px',
    fontSize: '16px',
    lineHeight: '17px',
    cursor: 'pointer',
    border: '1px solid #9c59d6',
    userSelect: 'none',
    transition: 'all 0.2s',
    '&:hover': {
      filter: 'brightness(120%)',
    },
  },
  title: {
    color: 'white',
    fontWeight: 'bolder',
    fontSize: '28px',
  },
  [`@media (min-width: ${Breakpoints.sm}px)`]: {
    title: {
      fontSize: '40px',
    },
    cardsContainer: { display: 'flex' },
    card: {
      width: '25%',
    },
  },
});

export default function Features() {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <div className={styles.title}>Visit the other side</div>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <div>
              <div className={styles.cardImageContainer}>
                <img className={styles.cardImage} src={logo} alt="card" />
              </div>
              <div className={styles.cardTitle}>AMM</div>
              <div className={styles.cardText}>
                Competitive rates, and multi-chain trading seamlessly.
              </div>
            </div>
            <a href="https://soul.sh" target="_blank" rel="noreferrer">
              <div className={styles.CTA}>Trade Now</div>
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <div>
              <div className={styles.cardImageContainer}>
                <img className={styles.cardImage} src={logo2} alt="card" />
              </div>
              <div className={styles.cardTitle}>Yield Farms</div>
              <div className={styles.cardText}>
                Earn crypto with our single asset pools or liquidity pools.
              </div>
            </div>
            <a href="https://soul.sh" target="_blank" rel="noreferrer">
              <div className={styles.CTA}>Start Earning</div>
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <div>
              <div className={styles.cardImageContainer}>
                <img className={styles.cardImage} src={logo} alt="card" />
              </div>
              <div className={styles.cardTitle}>Summon</div>
              <div className={styles.cardText}>
                Placeholder text for summoning.
              </div>
            </div>
            <a href="https://soul.sh" target="_blank" rel="noreferrer">
              <div className={styles.CTA}>Join Now</div>
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <div>
              <div className={styles.cardImageContainer}>
                <img className={styles.cardImage} src={logo2} alt="card" />
              </div>
              <div className={styles.cardTitle}>Bridge</div>
              <div className={styles.cardText}>
                Placeholder text for the bridge.
              </div>
            </div>
            <a href="https://soul.sh" target="_blank" rel="noreferrer">
              <div className={styles.CTA}>Enter App</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
