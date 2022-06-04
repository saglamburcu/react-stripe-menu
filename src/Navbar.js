import logo from "./images/logo.svg";
import { useGlobalContext } from "./context";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {

  const { sublinks, findCategory, setIsShowSubmenu } = useGlobalContext();

  return (
    <nav className="navbar-container">
      <section className="logo">
        <img src={logo} alt="logo" />
      </section>

      <section className="menu">
        {
          sublinks.map((link, index) => {
            const { page } = link;
            return (
              <button type="button" key={index}
                onMouseEnter={findCategory}
                onMouseLeave={() => setIsShowSubmenu(false)}>
                {page}
              </button>
            )
          })
        }
      </section>

      <section className="sign-in">
        <button type="button">Sign In</button>
      </section>
    </nav>
  )
};

export default Navbar;