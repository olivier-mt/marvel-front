import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Link to="/">Personnages</Link> <Link to="/comics">Comics</Link>
      <Link to="/favorites">Favoris</Link>
    </div>
  );
};

export default Header;
