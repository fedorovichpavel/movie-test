import Search from "./Search";
import UserSet from "./UserSet";

const Header = () => {
  return (
    <header>
      <h1>Movie Catalog</h1>
      <Search />
      <UserSet />
    </header>
  );
};

export default Header;
