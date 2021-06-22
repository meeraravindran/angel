import TwoColumns from "./TwoColumns";
import VentureImg from "../../assets/venturewithdollar.jpg";
const Venture = () =>{
    return(
        <div className="twocolumns">
        <div className="twocl-left">
          <h6>AngelList Venture</h6>
          <h2>The platform for venture investing</h2>
          <p className="desc">
            Invest alongside top venture investors. Hundreds of angels and VCs
            rely on AngelList. Whether you’re starting and scaling your own
            fund, or investing alongside established managers, we’ll help you
            grow as a top investor.
          </p>
          <TwoColumns
          h1="$1,000,000,000+" 
          c1="flows through AngelList into thousands of investments." 
          h2="36% of top-tier U.S. VC deals" 
          c2="were funded by investors through AngelList Venture." />
          <button style={{ background: "#322c81" }}>Apply to be an investor</button>
          <a className="anchor" href="/">
            Start a fund or syndicate
          </a>
        </div>
        <img className="twocl-right" src={VentureImg} />
      </div>
    )
}
export default Venture