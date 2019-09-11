import theme from '../theme';
import Text from './text';

const { StyleSheet, css } = aphrodite;

const styles = props =>
  StyleSheet.create({
    root: {
      opacity: props.disabled ? 0.8 : 1,
      marginBottom: props.gutterBottom ? theme.spacing(2) : 0
    },
    input: {
      color: theme.palette.common.black,
      padding: `${theme.spacing(1.25)}px`,
      fontSize: theme.typography.htmlFontSize,
      border: `solid 1px ${theme.palette[props.color || 'grey']['main'] ||
        theme.palette[props.color || 'grey'][500]}`,
      borderRadius: theme.shape.borderRadius,
      outline: 'none',
      transition: 'all 150ms ease-in-out',
      ':focus': {
        outline: 'none',
        border: `solid 1px ${theme.palette[props.color || 'primary'].main}`
      },
      '::placeholder': {
        opacity: 0.5
      }
    }
  });

const Input = ({ title, gutterBottom, ...props }) => (
  <div className={css(styles({ ...props, gutterBottom }).root)}>
    <Text type="body1">{title}</Text>
    <input {...props} className={css(styles(props).input, props.styles)}>
      {props.children}
    </input>
  </div>
);

Input.defaultProps = {};

Input.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'error'])
};

export default Input;
