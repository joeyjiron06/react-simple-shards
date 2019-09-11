import theme from '../theme';

const { Link } = ReactRouterDOM;
const { StyleSheet, css } = aphrodite;

const styles = StyleSheet.create({
  link: {
    color: theme.palette.primary[500]
  }
});

export default props => (
  <Link {...props} className={css(styles.link, props.className)}>
    {props.children}
  </Link>
);
