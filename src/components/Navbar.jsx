import { useRef, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ setProducts = null }) => {
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
        <Link to="/">
          <h3>Fitcart</h3>
        </Link>
      </div>
      <div class="contentRightItems">
        {setProducts &&
          <>
            <input type="text" placeholder="Search Items" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={search}>Search</button>
          </>
        }
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
