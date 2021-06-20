import "./BusinessUnits.css";
import Talent from "../../assets/talent.jpg";
import Venture from "../../assets/venture.jpg";
import Hunt from "../../assets/hunt.png";
const BusinessUnit = (props) => {
  const buttonColor = props.buttonColor;
  return (
    <div className="b-unit">
      <div className="header">
        <h4>{props.heading}</h4>
        {props.picture == "talent" ? (
          <img src={Talent} />
        ) : props.picture == "hunt" ? (
          <img src={Hunt} />
        ) : (
          <img src={Venture} />
        )}
      </div>
      <p>{props.content}</p>
      <button style={{ background: buttonColor }}>{props.buttonContent}</button>
    </div>
  );
};
export default BusinessUnit;
