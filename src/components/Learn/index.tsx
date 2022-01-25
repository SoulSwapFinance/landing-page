import { createUseStyles } from 'react-jss';
import { Breakpoints } from '../../utils/utils';
import CLICK from './click.gif';

const useStyles = createUseStyles({
  container: {
    marginTop: '64px',
  },
  card: {
    display: 'block',
    marginRight: '24px',
    width: 'calc(100%-48px)',
    marginBottom: '24px',
    padding: '28px 24px',
    backgroundColor: '#D198F9',
    borderRadius: '8px',
    cursor: 'pointer',
    '&:hover': {
      filter: 'brightness(80%)',
    },
  },
  cardsContainer: {
    display: 'block',
    marginTop: '40px',
    marginRight: '-24px',
    marginBottom: '24px',
  },
  cardText: {
    justifyContent: 'center',
    marginTop: '24px',
    fontSize: '18px',
    color: '#222',
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
      width: '33%',
    },
  },
});

export default function Learn() {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      {/* <div className={styles.title}>Discover More</div> */}
      <div className={styles.cardsContainer}>
        <a
          href="https://docs.soulswap.finance/docs/tokenomics"
          target="_blank"
          rel="noreferrer"
          className={styles.card}
        >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ color: '#222', fontWeight: 500, fontSize: '24px' }}>
              OUR TOKENOMICS
            </div>
            {/* <img src={CLICK} height="25" width="25" alt="learn" /> */}
          </div>
          <div className={styles.cardText}>
            Click to learn about our tokenomics, including our emissions rate and reward allocation.
          </div>
        </a>
        <a
          href="https://port.soul.sh"
          target="_blank"
          rel="noreferrer"
          className={styles.card}
        >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ color: '#222', fontWeight: 500, fontSize: '24px' }}>
              EXPLORE MORE
            </div>
            {/* <img src={CLICK} height="25" width="25" alt="learn" /> */}
          </div>
          <div className={styles.cardText}>
          Connect to our portal and checkout our myriad of tools and resources.
          </div>
        </a>
        <a
          href="https://board.soulswap.finance"
          target="_blank"
          rel="noreferrer"
          className={styles.card}
        >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ color: '#222', fontWeight: 500, fontSize: '24px', alignContent: 'center' }}>
              VIEW ROADMAP
            </div>
          </div>
            {/* <img src={CLICK} height="25" width="25" alt="learn" /> */}
          <div className={styles.cardText}>
            Monitor our progress and objectives by viewing our publicly-accessible roadmap.
          </div>
        </a>
      </div>
    </div>
  );
}
