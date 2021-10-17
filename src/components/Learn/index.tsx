import { createUseStyles } from 'react-jss';
import { Breakpoints } from '../../utils/utils';
import caret from './caret.png';

const useStyles = createUseStyles({
  container: {
    marginTop: '64px',
  },
  card: {
    display: 'block',
    marginRight: '24px',
    width: 'calc(100%-48px)',
    marginBottom: '24px',
    padding: '32px 28px',
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
    marginTop: '24px',
    fontSize: '14px',
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
      {/* <div className={styles.title}>Learn more</div> */}
      <div className={styles.cardsContainer}>
        <a
          href="https://docs.soulswap.finance/docs/tokenomics"
          target="_blank"
          rel="noreferrer"
          className={styles.card}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ color: '#222', fontWeight: 500, fontSize: '24px' }}>
              Tokenomics
            </div>
            <img src={caret} alt="learn" />
          </div>
          <div className={styles.cardText}>
            For more information regarding SoulSwap tokenomics (including
            emissions, vesting), click here.
          </div>
        </a>
        <a
          href="https://docs.soulswap.finance/docs"
          target="_blank"
          rel="noreferrer"
          className={styles.card}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ color: '#222', fontWeight: 500, fontSize: '24px' }}>
              Docs
            </div>
            <img src={caret} alt="learn" />
          </div>
          <div className={styles.cardText}>
            Our documents contain everything you need to know about SoulSwap, as
            well as some technical support.
          </div>
        </a>
        <a
          href="https://view.monday.com/1765008420-f675b7885c5b411a6b49ba3f18b41cb8?r=use1"
          target="_blank"
          rel="noreferrer"
          className={styles.card}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ color: '#222', fontWeight: 500, fontSize: '24px' }}>
              Roadmap
            </div>
            <img src={caret} alt="learn" />
          </div>
          <div className={styles.cardText}>
            For more information on progress, and to understand SoulSwap’s goals
            and vision, check out the roadmap.
          </div>
        </a>
      </div>
    </div>
  );
}
