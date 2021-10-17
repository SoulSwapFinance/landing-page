import { createUseStyles } from 'react-jss';
import { Breakpoints } from '../../utils/utils';
import GRIM from './images/GrimFinance.png';
import partner2 from './images/partner2.png';
import partner3 from './images/partner3.png';
import partner4 from './images/partner4.png';
import partner5 from './images/partner5.png';

const useStyles = createUseStyles({
  container: { marginTop: '88px' },
  card: {
    width: 'calc(100% - 24px)',
    marginRight: '24px',
    marginBottom: '24px',
    border: '1px solid rgba(255,255,255,0.5)',
    padding: '12px 15px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
      filter: 'brightness(80%)',
    },
  },
  partner: {
    marginLeft: '16px',
    color: 'white',
    fontWeight: 'bolder',
    fontSize: '16px',
  },
  cardsContainer: { marginTop: '40px', display: 'block', marginRight: '-24px' },
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
    card: { width: '20%' },
  },
});

export default function Partners() {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <div className={styles.title}>Partners</div>
      <div className={styles.cardsContainer}>
        <a
          href="https://google.com"
          target="_blank"
          rel="noreferrer"
          className={styles.card}
        >
          <img src={GRIM} alt="Grim Finance" style={{ width: '28px' }} />
          <div className={styles.partner}>Partner 1</div>
        </a>
        <a
          href="https://google.com"
          target="_blank"
          rel="noreferrer"
          className={styles.card}
        >
          <img src={partner2} alt="partner" style={{ width: '28px' }} />
          <div className={styles.partner}>Partner 2</div>
        </a>
        <a
          href="https://google.com"
          target="_blank"
          rel="noreferrer"
          className={styles.card}
        >
          <img src={partner3} alt="partner" style={{ width: '28px' }} />
          <div className={styles.partner}>Partner 3</div>
        </a>
        <a
          href="https://google.com"
          target="_blank"
          rel="noreferrer"
          className={styles.card}
        >
          <img src={partner4} alt="partner" style={{ width: '28px' }} />
          <div className={styles.partner}>Partner 4</div>
        </a>
        <a
          href="https://google.com"
          target="_blank"
          rel="noreferrer"
          className={styles.card}
        >
          <img src={partner5} alt="partner" style={{ width: '28px' }} />
          <div className={styles.partner}>Partner 5</div>
        </a>
      </div>
    </div>
  );
}
