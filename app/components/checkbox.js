import theme from '../theme';
import Text from './text';

const { StyleSheet, css } = aphrodite;
const width = 16;
const height = 16;

const styles = props =>
  StyleSheet.create({
    root: {
      display: 'flex',
      alignItems: 'center',
      opacity: props.disabled ? 0.8 : 1,
      marginBottom: props.gutterBottom ? theme.spacing(2) : 0,
      position: 'relative',
      userSelect: 'none',
      cursor: 'pointer'
    },
    input: {
      width,
      height,
      marginLeft: 0,
      marginTop: 0,
      marginBottom: 0,
      marginRight: 10,
      padding: theme.spacing(1),
      opacity: 0,

      boxSizing: 'inherit',
      ':checked + div': {
        backgroundColor: 'red',
        color: 'white',
        content: '✓'
      }
    },
    checkbox: {
      width,
      height,
      border: 'solid 1px black',
      borderRadius: theme.shape.borderRadius,
      position: 'absolute',
      transform: 'translateY(-50%)',
      top: '50%',
      left: 0,
      zIndex: -1
    }
  });

const Checkbox = ({ title, gutterBottom, ...props }) => (
  <label className={css(styles({ ...props, gutterBottom }).root)}>
    <input
      {...props}
      type="checkbox"
      className={css(styles(props).input, props.styles)}
    >
      {props.children}
    </input>
    <div className={css(styles(props).checkbox)}>{props.}</div>
    <Text type="body1">{title}</Text>
  </label>
);

Checkbox.defaultProps = {};

Checkbox.propTypes = {
  gutterBottom: PropTypes.bool
};

export default Checkbox;
