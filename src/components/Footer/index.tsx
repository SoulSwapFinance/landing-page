import { createUseStyles } from 'react-jss';
import twitter from './images/twitter.png';
import discord from './images/discord.png';
import github from './images/github.png';
import telegram from './images/telegram.png';

const useStyles = createUseStyles({
  container: { dipslay: 'flex', marginTop: '64px' },
});

export default function Footer() {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <div>
        <div>SoulSwap - the leading DEX on Fantom.</div>
        <div
          style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}
        >
          <a
            href="https://twitter.com/SoulSwapFinance"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={twitter}
              alt="twitter"
              style={{ marginRight: '16px', width: '24px' }}
            />
          </a>
          <a
            href="https://discord.com/invite/DQjChB6Wa6"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={discord}
              alt="discord"
              style={{ marginRight: '16px', width: '24px' }}
            />
          </a>
          <a href="https://t.me/SoulSwapDeFi" target="_blank" rel="noreferrer">
            <img
              src={telegram}
              alt="telegram"
              style={{ marginRight: '16px', width: '24px' }}
            />
          </a>
          <a
            href="https://github.com/SoulSwapFinance"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={github}
              alt="github"
              style={{ marginRight: '16px', width: '24px' }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
