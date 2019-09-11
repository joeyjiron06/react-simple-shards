import theme from '../theme';

const { StyleSheet, css } = aphrodite;

const styles = props =>
  StyleSheet.create({
    text: {
      fontSize: theme.typography[props.type].fontSize,
      fontWeight: theme.typography[props.type].fontWeight,
      letterSpacing: theme.typography[props.type].letterSpacing,
      lineHeight: theme.typography[props.type].lineHeight,
      marginBottom: props.gutterBottom ? theme.spacing(2) : 0
    }
  });

const Text = ({ children, ...props }) => (
  <div className={css(styles(props).text, props.styles)}>{children}</div>
);

Text.defaultProps = {
  type: 'body',
  gutterBottom: false
};

Text.propTypes = {
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2'])
    .isRequired,
  gutterBottom: PropTypes.bool.isRequired
};

export default Text;
