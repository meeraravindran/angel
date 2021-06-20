import Navbar from "./components/navbar/Navbar";
import BusinessUnits from "./components/sections/BusinessUnits";
import Jumbotron from "./components/sections/Jumbotron";
import Career from "./assets/career.png";
import Venture from "./assets/venturewithdollar.jpg";
import TwoColumns from "./components/sections/TwoColumns";
import ExploreProducts from "./components/sections/ExploreProducts";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Jumbotron />
        <BusinessUnits />
        <div className="twocolumns">
          <div className="twocl-left">
            <h6>AngelList Talent</h6>
            <h2>Grow your career</h2>
            <p className="desc">
              Twitch, Stripe, and over 100,000 startups of all sizes have used
              AngelList to hire people like you. Already know where you want to
              be? You can apply directly—and privately—to early stage startups
              and industry leaders alike.
            </p>
            <TwoColumns />
            <button style={{ background: "#0f6fff" }}>Find startup jobs</button>
            <a className="anchor" href="/">
              Post a job
            </a>
          </div>
          <img className="twocl-right" src={Career} />
        </div>
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
            <TwoColumns />
            <button style={{ background: "#322c81" }}>Apply to be an investor</button>
            <a className="anchor" href="/">
              Start a fund or syndicate
            </a>
          </div>
          <img className="twocl-right" src={Venture} />
        </div>
      </div>
      <ExploreProducts/>
    </div>
  );
}

export default App;
