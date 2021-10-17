import { createUseStyles } from 'react-jss';
import { Breakpoints } from '../../utils/utils';

const useStyles = createUseStyles({
  container: {
    marginTop: '104px',
  },
  CTA: {
    backgroundColor: '#9c59d6',
    color: 'white',
    padding: '12px 28px',
    textAlign: 'center',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '4px',
    fontWeight: 'bold',
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
  title: { color: 'white', fontSize: '24px', fontWeight: 'bolder' },
  otherSide: {
    letterSpacing: '0.156em',
    color: '#9c59d6',
    fontSize: '32px',
  },
  subTitle: { marginTop: '16px', fontSize: '14px', lineHeight: '32px' },
  [`@media (min-width: ${Breakpoints.sm}px)`]: {
    subTitle: {
      fontSize: '20px',
    },
    otherSide: {
      fontSize: '74px',
    },
    title: {
      fontSize: '64px',
    },
  },
});

export default function Headline() {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <div style={{ maxWidth: '600px' }}>
        <div className={styles.title}>
          Communicate with the Other Side...
          {/* {' '} */}
          {/* <span className={styles.otherSide}>other side</span> */}
        </div>
        {/* <div className={styles.subTitle}>
          via our multi-chain exchange with cross-chain liquidity mining. Share
          your $SOUL with us.
        </div> */}
        <div className={styles.subTitle}>
        Soul builds upon the likes of Sushi, Uni, Compound, and Cake with
        an innovative cross-chain rewards mechanism, DEX, atomic swaps, P2P lending, and so much more!
        </div>
        <div
          style={{ display: 'flex', alignItems: 'center', marginTop: '28px' }}
        >
          <a href="https://soul.sh" target="_blank" rel="noreferrer">
            <div className={styles.CTA}>EXCHANGE</div>
          </a>
          <a
            href="https://docs.soulswap.finance/docs/"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={styles.CTA}
              style={{ marginLeft: '24px', backgroundColor: 'transparent' }}
            >
              DOCS
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
