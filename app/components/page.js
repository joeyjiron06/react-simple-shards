import NavBar from './navbar';
import Footer from './footer';

const { StyleSheet, css } = aphrodite;

const styles = StyleSheet.create({
  content: {
    padding: 20
  }
});

export default ({ children }) => (
  <div>
    <NavBar />
    <div className={css(styles.content)}>{children}</div>
    <Footer />
  </div>
);
