import Page from '../components/page';
import Text from '../components/text';
import Input from '../components/input';
import Checkbox from '../components/checkbox';
import theme from '../theme';
const { StyleSheet, css } = aphrodite;

const styles = StyleSheet.create({
  section: {
    marginBottom: 20
  },
  colorSwatches: {
    display: 'flex'
  },
  colorSwatch: {
    flexGrow: 1,
    marginRight: 20
  },
  box: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    height: 40,
    marginRight: 20
  },
  input: {
    marginRight: 20
  }
});

const ColorSwatch = ({ color, title }) => (
  <div className={css(styles.colorSwatch)}>
    <Text type="h6">{title}</Text>
    <div>
      {Object.keys(color)
        .filter(key => key !== 'contrastText')
        .map(key => (
          <div
            key={key}
            className={css(styles.box)}
            style={{
              color: theme.palette.getContrastText(color[key]),
              backgroundColor: color[key]
            }}
          >
            <div>{key}</div>
            <div>{color[key]}</div>
          </div>
        ))}
    </div>
  </div>
);

export default () => (
  <Page>
    <Text type="h2" gutterBottom>
      Forms
    </Text>
    <div className={css(styles.section)}>
      <div>
        <Text type="h5" gutterBottom>
          Checkboxes
        </Text>

        <Checkbox title="Off" checked={false} gutterBottom />
        <Checkbox title="Off Disabled" checked={false} gutterBottom disabled />
        <Checkbox title="On" checked={true} gutterBottom />
        <Checkbox title="On Disabled" checked={true} gutterBottom disabled />
      </div>
    </div>

    <Text type="h2" gutterBottom>
      Input Fields
    </Text>
    <div className={css(styles.section)}>
      <Input
        type="text"
        title="Username"
        placeholder="placeholder text"
        styles={styles.input}
        gutterBottom
      />
      <Input
        type="password"
        title="Password"
        placeholder="error text"
        color="error"
        styles={styles.input}
        gutterBottom
      />
      <Input
        type="text"
        title="Disabled"
        placeholder="Disabled text"
        styles={styles.input}
        disabled
        gutterBottom
      />
    </div>

    <Text type="h2" gutterBottom>
      Text
    </Text>
    <div className={css(styles.section)}>
      <Text type="h1">h1</Text>
      <Text type="h2">h2</Text>
      <Text type="h3">h3</Text>
      <Text type="h4">h4</Text>
      <Text type="h5">h5</Text>
      <Text type="h6">h6</Text>
      <Text type="body1">
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam
      </Text>
      <Text type="body2">
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam
      </Text>
    </div>
    <Text type="h2" gutterBottom>
      Color Pallete
    </Text>
    <div className={css(styles.section)}>
      <div className={css(styles.colorSwatches)}>
        <ColorSwatch title="Primary" color={theme.palette.primary} />
        <ColorSwatch title="Secondary" color={theme.palette.secondary} />
        <ColorSwatch title="Grey" color={theme.palette.grey} />
      </div>
    </div>
  </Page>
);
