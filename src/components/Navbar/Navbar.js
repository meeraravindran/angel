import "./Navbar.css";
import Hand from "../../assets/hand.svg";
import { GoSearch } from "react-icons/go";
import { IconContext } from "react-icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="nvbc-item-con-left">
          <div className="nav-icon-con">
            <img alt="Logo" className="nav-icon" src={Hand} />
          </div>
          <div className="nav-links-con">
            <div className="nav-item">STARTUP JOBS</div>
            <div className="nav-item">RECRUIT</div>
            <div className="nav-item">INVEST</div>
            <div className="nav-item">BLOG</div>
            <div className="nav-item hoverable">
              MORE
              <div className="nav-hover-con">
                <div className="nav-hover-item">Venture Funds</div>
                <div className="nav-hover-div"></div>
                <div className="nav-hover-item">Track</div>
                <div className="nav-hover-div"></div>
                <div className="nav-hover-item">Salaries</div>
                <div className="nav-hover-div"></div>
                <div className="nav-hover-item">Help</div>
              </div>
            </div>
          </div>
        </div>
        <div className="nvbc-item-con-right">
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
