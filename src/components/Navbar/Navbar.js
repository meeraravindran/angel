import "./Navbar.css";
import Hand from "../../assets/hand.svg";
import { GoSearch } from "react-icons/go";
import { IconContext } from "react-icons";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="nvbc-item-con">
          <div className="nav-icon-con">
            <img alt="Logo" className="nav-icon" src={Hand} />
          </div>
          <div className="nav-links-con">
            <div>STARTUP JOBS</div>
            <div>RECRUIT</div>
            <div>INVEST</div>
            <div>BLOG</div>
            <div>MORE</div>
          </div>
        </div>
        <div className="nvbc-item-con nav-right">
          <div className="nav-icon-con">
            <IconContext.Provider
              value={{ color: "#666", className: "global-class-name" }}
            >
              <div>
                <GoSearch />
              </div>
            </IconContext.Provider>
          </div>
          <div className="nav-links-con">
            <div>
              <input
                className="search-input"
                type="text"
                placeholder="SEARCH"
              />
            </div>
            <div className="link">Join</div>
            <div className="link">Log In</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
