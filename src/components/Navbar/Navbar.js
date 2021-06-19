import "./Navbar.css";
import Hand from "../../assets/hand.svg";
import { FaSearch } from "react-icons/fa";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="nvbc-item-con">
          <div className="nav-icon-con">
            <img className="nav-icon" src={Hand} />
          </div>
          <div className="nav-links-con">
            <div>STARTUP JOBS</div>
            <div>RECRUIT</div>
            <div>INVESt</div>
            <div>BLOG</div>
            <div>MORE</div>
          </div>
        </div>
        <div className="nvbc-item-con">
          <div>rettai ilai</div>
          <div>Startup jobs</div>
          <div>recruits</div>
          <div>invest</div>
          <div>blog</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
