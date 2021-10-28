import { createUseStyles } from 'react-jss';
import { Breakpoints } from '../../utils/utils';
import FANTOM from './images/Fantom.png';
import GRIM from './images/GrimFinance.png';
import FALLACY from './images/Fallacy.png';
// import DEBANK from './images/DeBank.png';
import LLAMA from './images/LLAMA.png';
import GECKO from './images/CoinGecko.png';

const useStyles = createUseStyles({
  container: { marginTop: '88px' },
  card: {
    width: 'calc(100% - 24px)',
    marginRight: '24px',
    marginBottom: '24px',
    border: '1px solid #D198F9',
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
    color: '#FFF',
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
      <div className={styles.title}>Partners and References</div>
      <div className={styles.cardsContainer}>
        <a
          href="https://projects.fantom.network/project-detail/6159de47d93a9411a5d0817b"
          target="_blank"
          rel="noreferrer"
          className={styles.card}
        >
          <img src={FANTOM} alt="Fantom Foundation" style={{ width: '32px' }} />
          <div className={styles.partner}>Fantom Foundation</div>
        </a>
        <a
          href="https://app.grim.finance/"
          target="_blank"
          rel="noreferrer"
          className={styles.card}
        >
          <img src={GRIM} alt="Grim Finance" style={{ width: '32px' }} />
          <div className={styles.partner}>Grim Finance</div>
        </a>
        <a
          href="https://discord.com/invite/KRJzyZrmMG"
          target="_blank"
          rel="noreferrer"
          className={styles.card}
        >
          <img src={FALLACY} alt="The Fallacy Collection" style={{ width: '32px' }} />
          <div className={styles.partner}>The Fallacy Collection</div>
        </a>
        {/* <a
          href="https://debank.com/profile/0xce6ccbb1edad497b4d53d829df491af70065ab5b"
          target="_blank"
          rel="noreferrer"
          className={styles.card}
        >
          <img src={DEBANK} alt="DeBank" style={{ width: '32px' }} />
          <div className={styles.partner}>DeBank Wallet</div>
        </a> */}
        <a
          href="https://defillama.com/protocol/SoulSwap"
          target="_blank"
          rel="noreferrer"
          className={styles.card}
        >
          <img src={LLAMA} alt="DeFi Llama" style={{ width: '32px' }} />
          <div className={styles.partner}>DeFi Llama</div>
        </a>
        <a
          href="https://www.coingecko.com/en/coins/soul-swap"
          target="_blank"
          rel="noreferrer"
          className={styles.card}
        >
          <img src={GECKO} alt="VFat Tools" style={{ width: '32px' }} />
          <div className={styles.partner}>CoinGecko Data</div>
        </a>
      </div>
    </div>
  );
}
