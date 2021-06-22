import "./ExploreJobs.css"
import Instacart from "../../assets/instacart.jpg"
import Twitch from "../../assets/twitch.jpg"
import Uber from "../../assets/uber.jpg"
import Roblox from "../../assets/roblox.jpg"
import Discord from "../../assets/discord.jpg"
const ExploreJobs = () => {
    return (
        <div className="explore-jobs">
            <h2 className="ej-heading">Explore over 2 million tech and startup job-opportunities</h2>
            <div className="jobs">
                <div className="job-card">
                    <div className="job-content">
                        <img src={Twitch} />
                        <div className="job-text">
                            <p className="job-role">Software Engineer at <span>Twitch</span></p>
                            <p className="salary">$130k – $210k • 0.0% – 0.001%</p>
                        </div>
                    </div>
                </div>
                <div className="job-card">
                    <div className="job-content">
                        <img src={Uber} />
                        <div className="job-text">
                            <p className="job-role">Software Enginner at <span>Uber</span></p>
                            <p className="salary">$100k – $170k</p>
                        </div>
                    </div>
                </div>
                <div className="job-card">
                    <div className="job-content">
                        <img src={Roblox} />
                        <div className="job-text">
                            <p className="job-role">Product Manager at <span>Roblox</span></p>
                            <p className="salary">$115k – $165k</p>
                        </div>
                    </div>
                </div>
                <div className="job-card">
                    <div className="job-content">
                        <img src={Instacart} />
                        <div className="job-text">
                            <p className="job-role">Senior Product Designer at <span>Instacart</span></p>
                            <p className="salary">$110k – $140k • 0.0% – 0.001%</p>
                        </div>
                    </div>
                </div>
                <div className="job-card">
                    <div className="job-content">
                        <img src={Discord} />
                        <div className="job-text">
                            <p className="job-role">Data Science Manager at <span>Discord</span></p>
                            <p className="salary">$180k – $220k • 0.005% – 0.05%</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="find-job">
                <a>Find your dream job</a>
            </div>

        </div>
    )
}

export default ExploreJobs