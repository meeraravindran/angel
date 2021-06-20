import "./BusinessUnits.css";
import BusinessUnit from "./BusinessUnit";

const BusinessUnits = (props) => {
  const data = [
    {
      heading: "AngelList Talent",
      picture: "talent",
      content:
        "Apply privately to 130,000+ tech & startup jobs with one application.See salary and equity upfront.",
      buttonContent: "Find startup jobs",
      buttonColor: "#0f6fff",
    },
    {
      heading: "AngelList Venture",
      picture: "venture",
      content:
        "Over $1 billion deployed alongside leading venture fund managers with 36% of all top-tier U.S. VC deals funded on AngelList.",
      buttonContent: "Apply to be an investor",
      buttonColor: "#4139a7",
    },
    {
      heading: "Product Hunt",
      picture: "hunt",
      content:
        "The next big thing in tech launches every day. A friendly community of millions of makers & early adopters awaits.",
      buttonContent: "Explore products",
      buttonColor: "#cc4d29",
    },
  ];
  return (
    <div className="b-units">
      {data.map((item, index) => {
        let { heading, picture, content, buttonContent, buttonColor } = item;
        return (
          <BusinessUnit
            heading={heading}
            picture={picture}
            content={content}
            buttonContent={buttonContent}
            buttonColor={buttonColor}
          />
        );
      })}
    </div>
  );
};
export default BusinessUnits;
