import Link from './link';
import theme from '../theme';

const { StyleSheet, css } = aphrodite;

const styles = StyleSheet.create({
  navBar: {
    height: 64,
    borderBottom: `solid 1px ${theme.palette.grey[500]}`,
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px'
  },
  linksContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  link: {
    padding: 10
  }
});

export default () => (
  <div className={css(styles.navBar)}>
    <h1>App</h1>

    <div className={css(styles.linksContainer)}>
      <Link to="/" className={styles.link}>
        Home
      </Link>
      <Link to="/settings" className={styles.link}>
        Settings
      </Link>
    </div>
  </div>
);
