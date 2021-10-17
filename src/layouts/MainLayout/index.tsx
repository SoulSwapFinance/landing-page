import { ReactNode } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    minHeight: '100vh',
    background:
      'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(41,18,57,1) 100%, rgba(0,212,255,1) 100%)',
  },
});

export default function MainLayout({ children }: { children: ReactNode }) {
  const styles = useStyles();

  return <div className={styles.container}>{children}</div>;
}
