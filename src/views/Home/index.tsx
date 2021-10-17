import MainLayout from '../../layouts/MainLayout';
import { createUseStyles } from 'react-jss';
import { Breakpoints } from '../../utils/utils';
import Header from '../../components/Header';
import Headline from '../../components/Headline';
import Features from '../../components/Features';
import Learn from '../../components/Learn';
import Partners from '../../components/Partners';
import Footer from '../../components/Footer';

const useStyles = createUseStyles({
  container: {
    padding: '24px',
    maxWidth: '100vw',
    margin: 'auto',
    color: '#D198F9',
  },
  [`@media (min-width: ${Breakpoints.sm}px)`]: {
    container: { padding: '40px', maxWidth: '1440px' },
  },
});

export default function HomeView() {
  const styles = useStyles();

  return (
    <MainLayout>
      <div className={styles.container}>
        <Header />
        <Headline />
        <Features />
        <Learn />
        <Partners />
        <hr style={{ marginTop: '40px', opacity: 0.5 }} />
        <Footer />
      </div>
    </MainLayout>
  );
}
