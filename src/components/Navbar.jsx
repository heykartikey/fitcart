
import './navbar.css'

const Navbar = () => {
  return (
    <div
      class="navbarcontainer"
    >
      <div class="contentLeftItems">
        <img src="https://www.google.com/favicon.ico" alt="Scan button" height="30px" width="30px" />
        <h3>CSS Scan</h3>
      </div>
      <div class="contentRightItems">
        <input type="text" placeholder="Search Items" />
        <button>Search</button>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
