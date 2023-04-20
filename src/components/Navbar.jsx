import { useRef, useState } from "react";
import "./navbar.css";

const Navbar = ({ setProducts }) => {
  const [query, setQuery] = useState("")

  const aborter = useRef(null)

  const search = () => {
    aborter.current?.abort()
    aborter.current = new AbortController();

    fetch(`https://localhost:7095/api/Furniture/searchByName?searchTerm=${query}`, {
      signal: aborter.current.signal
    })
      .then(res => res.json())
      .then(setProducts)
      .catch(console.log)
  }

  return (
    <div class="navbarcontainer">
      <div class="contentLeftItems">
        <img
          src="https://www.google.com/favicon.ico"
          alt="Scan button"
          height="30px"
          width="30px"
        />
        <h3>Fitcart</h3>
      </div>
      <div class="contentRightItems">
        <input type="text" placeholder="Search Items" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={search}>Search</button>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
