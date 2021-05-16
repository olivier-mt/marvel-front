import { Link } from "react-router-dom";
import Logo from "../marvel-logo.svg";
const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="logo" />
      <Link to="/">Personnages</Link> <Link to="/comics">Comics</Link>
      <Link to="/favorites"> Personnages Favoris</Link>
      <Link to="/favoritesComics"> Comics Favoris</Link>
    </div>
  );
};

export default Header;
