import { Link, Nav } from "./Navigate.staled";

function Navigate() {
  return (
    <Nav>
      <Link to="/">HOME</Link>
      <Link to="/tweets">TWEETS</Link>
    </Nav>
  );
}

export default Navigate;
