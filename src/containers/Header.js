import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Link to="/">Personnages</Link> <Link to="/comics">Comics</Link>
      <button>Favoris</button>
    </div>
  );
};

export default Header;
