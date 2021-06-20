import "./Jumbotron.css";
import Angellist from "../../assets/angellist.png";

const Jumbotron = (props) => {
  return (
    <div className="jumbotron">
      <div className="j-image">
        <img src={Angellist} />
      </div>
      <h1>Join the world’s largest startup community</h1>
      <p>Experience the startup ecosystem — invest in startups, research the fastest-growing companies, and find a job you love.</p>
    </div>
  );
};

export default Jumbotron;
