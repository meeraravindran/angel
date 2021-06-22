import TwoColumns from "./TwoColumns";
import Career from "../../assets/career.png";
const Talent = () => {
    return (
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
                <TwoColumns
                    h1="Talk directly to founders"
                    c1="Speak directly to founders and hiring managers. No third party recruiters allowed."
                    h2="See salary & equity upfront"
                    c2="View salary and stock option details before you apply to a job." />
                <button style={{ background: "#0f6fff" }}>Find startup jobs</button>
                <a className="anchor" href="/">
                    Post a job
                </a>
            </div>
            <img className="twocl-right" src={Career} />
        </div>
    )
}

export default Talent