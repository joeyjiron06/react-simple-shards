const { useState } = React;
const { withRouter } = ReactRouterDOM;
const {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse
} = window['shards-React'];

const Link = ({ children, to, location, ...props }) => (
  <NavLink to={to} active={location.pathname === to} {...props}>
    {children}
  </NavLink>
);

export default withRouter(({ history, location }) => {
  const [isCollapseOpen, setIsCollapseOpen] = useState(false);

  function toggleNavbar() {
    setIsCollapseOpen(!isCollapseOpen);
  }

  function navLinkClicked(event) {
    history.push(event.target.getAttribute('to'));
  }

  return (
    <Navbar type="dark" theme="primary" expand="md">
      <NavbarBrand href="/">App</NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} />

      <Collapse open={isCollapseOpen} navbar>
        <Nav navbar>
          <NavItem>
            <Link onClick={navLinkClicked} to="/" location={location}>
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link onClick={navLinkClicked} to="/settings" location={location}>
              Settings
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
});
