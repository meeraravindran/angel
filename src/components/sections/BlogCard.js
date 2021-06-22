import Career from "../../assets/blog_career.jpg"
import Hiring from "../../assets/hiring.jpg"
import Hiring1 from "../../assets/hiring1.jpg"

const BlogCard = (props) => {
    return (
        <div className="blog-card">
            {props.picture == "Career" ? (<img src={Career} />) : (props.picture == "Hiring" ? <img src={Hiring} /> : <img src={Hiring1} />)}
            <p className="blog-type">{props.heading}</p>
            <a href="#"><h3>{props.alink}</h3></a>
            <p className="blog-content">{props.content}</p>
        </div>
    )
}

export default BlogCard