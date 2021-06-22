import './PostJobs.css'
import TwoColumns from './TwoColumns'
import Slack from "../../assets/slack.png"
import Robinhood from "../../assets/robinhood.png"
import Peloton from "../../assets/peloton.png"
import Postmates from "../../assets/postmates.png"
import Affirm from "../../assets/affirm.png"
import Nerdwallet from "../../assets/nerdwallet.png"
import Honey from "../../assets/honey.png"
import Front from "../../assets/front.png"
const PostJobs = () => {
    return (
        <div className="post-jobs">
            <div className="pj-heading">
                <h1>100,000<span style={{ fontSize: '50px' }}>+</span></h1>
                <p>of the world's top startups, from seed to post-IPO, build teams on AngelList.</p>
            </div>
            <div className="pj-content">
                <div className="pj-desc">
                    <p className="pj-desc-p">Post jobs, find candidates, and manage your talent pipeline with AngelList's complete hiring toolkit.</p>
                    <TwoColumns
                        h1="High-quality candidates"
                        c1="2,300,000+ candidates including 750,000+ developers, 170,000+ designers, and thousands more every day."
                        h2="Free tools to build your team"
                        c2="Build your employer brand, post jobs, take applications and manage your candidate pipeline - all for free."
                    />
                </div>
                <div className="pj-companies">
                    <a><img src={Slack}/><p>Slack</p></a>
                    <a><img src={Robinhood}/><p>Robinhood</p></a>
                    <a><img src={Peloton}/><p>Peloton</p></a>
                    <a><img src={Postmates}/><p>Postmates</p></a>
                    <a><img src={Affirm}/><p>Affirm</p></a>
                    <a><img src={Nerdwallet}/><p>Nerdwallet</p></a>
                    <a><img src={Honey}/><p>Honey</p></a>
                    <a><img src={Front}/><p>Front</p></a>
                </div>
            </div>
            <button style={{background:'#0f6fff'}}>Post jobs for free</button>
        </div>
    )
}

export default PostJobs