import { createUseStyles } from 'react-jss';
import { Breakpoints } from '../../utils/utils';
import logo from './images/logo.png';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  logoText: {
    fontWeight: 'bolder',
    color: 'white',
    marginLeft: '12px',
    fontSize: '24px',
    letterSpacing: '0.2em',
  },
  navLink: {
    display: 'none',
    color: '#D198F9',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '17px',
    marginRight: '40px',
    cursor: 'pointer',
    userSelect: 'none',
    '&:hover': {
      filter: 'brightness(120%)',
      textDecoration: 'underline',
    },
  },
  navCTA: {
    display: 'none',
    backgroundColor: '#9c59d6',
    color: 'white',
    padding: '12px 28px',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '4px',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '17px',
    cursor: 'pointer',
    userSelect: 'none',
    transition: 'all 0.2s',
    '&:hover': {
      filter: 'brightness(120%)',
    },
  },
  logoImage: { width: '56px' },
  navSubheader: { display: 'flex', alignItems: 'center', marginTop: '24px' },
  [`@media (min-width: ${Breakpoints.sm}px)`]: {
    navSubheader: { display: 'flex', alignItems: 'center', marginTop: '0px' },
    logoImage: { width: '80px' },
    logoText: {
      fontSize: '28px',
    },
    navLink: {
      display: 'block',
    },
    navCTA: {
      display: 'flex',
    },
  },
});

export default function Header() {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="soulswap" className={styles.logoImage} />
        <div className={styles.logoText}>SOULSWAP FINANCE</div>
      </div>
      <div className={styles.navSubheader}>
        <a
          href="https://docs.soulswap.finance/docs/tokenomics"
          target="_blank"
          rel="noreferrer"
        >
          <div className={styles.navLink}>TOKENOMICS</div>
        </a>
        <a
          href="https://docs.soulswap.finance/docs/"
          target="_blank"
          rel="noreferrer"
        >
          <div className={styles.navLink}>DOCUMENTATION</div>
        </a>
        <a
          href="https://analytics.soulswap.finance"
          target="_blank"
          rel="noreferrer"
        >
          <div className={styles.navLink}>ANALYTICS</div>
        </a>
        <a href="https://app.soulswap.finance/farm" target="_blank" rel="noreferrer">
          <div className={styles.navCTA}>SUMMON SOUL</div>
        </a>
      </div>
    </div>
  );
}
