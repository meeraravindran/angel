import BlogCard from "./BlogCard"
import "./GoDeeper.css"
const GoDeeper = () => {
    const data = [
        {
            picture: "Career",
            heading: "Career",
            alink: "30 Questions To Ask Before Joining A Startup",
            content: "You're trying to evaluate the company while still impressing your interviewers, and that balance can be tricky."
        },
        {
            picture: "Hiring",
            heading: "Hiring",
            alink: "9 Terms You'll See In Your Startup Equity Offer—And What They Actually Mean",
            content: "No one—with the possible exception of finance experts—looks at their equity package and thinks, “Yep, makes sense."
        },
        {
            picture: "Hiring1",
            heading: "Hiring",
            alink: "Why Naval Ravikant Thinks Remote Work Is The Future",
            content: "AngelList Founder, Naval Ravikant, says he thinks remote work's time is coming and will be the most important category in hiring."
        }
    ]
    return (
        <div className="main">
            <div className="blogHeader"><h2>Go Deeper on startups</h2>
                <a href="/">Read more on the blog</a>
            </div>
            <div className="blogMain">
                {
                    data.map((item, index) => {
                        let { picture, heading, alink, content } = item
                        return (
                            < BlogCard picture={picture} heading={heading} alink={alink} content={content} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default GoDeeper