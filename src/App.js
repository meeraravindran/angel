import Navbar from "./components/navbar/Navbar";
import BusinessUnits from "./components/sections/BusinessUnits";
import Jumbotron from "./components/sections/Jumbotron";
import ExploreProducts from "./components/sections/ExploreProducts";
import GoDeeper from "./components/sections/GoDeeper";
import Footer from "./components/footer/Footer";
import Venture from "./components/sections/Venture";
import Talent from "./components/sections/Talent";
import ExploreJobs from "./components/sections/ExploreJobs";
import PostJobs from "./components/sections/PostJobs";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Jumbotron />
        <BusinessUnits />
        <Talent />
        <ExploreJobs/>
      </div>
      <PostJobs/>
      <div className="main">
        <Venture/>
      </div>
      <ExploreProducts />
      <GoDeeper />
      <Footer />
    </div>
  );
}

export default App;
