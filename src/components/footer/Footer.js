import "./Footer.css"
import WhiteLogo from "../../assets/white_logo.png"
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-body">
                <div className="footer-column">
                    <h3 className="footer-col-heading">AngelList</h3>
                    <a href="#">About</a>
                    <a href="#">Startup Jobs</a>
                    <a href="#">Recruting</a>
                    <a href="#">Venture</a>
                    <a href="#">We're Hiring</a>
                    <a href="#">Product Hunt</a>
                    <a href="#">Help Center</a>
                    <a href="#">Press</a>
                    <a href="#">Unsubscribe</a>
                </div>
                <div className="footer-column">
                    <h3 className="footer-col-heading">Job Collection</h3>
                    <a href="#">Remote First Future Jobs</a>
                    <a href="#">Jobs for Bootcamp Grads</a>
                    <a href="#">Junior Software Engineer Jobs</a>
                    <a href="#">Y Combinator Startup Jobs</a>
                    <a href="#">Female-founded Startup Jobs</a>
                    <a href="#">52 Best Startup Companies To Watch Out For in 2020</a>
                </div>
                <div className="footer-column">
                    <h3 className="footer-col-heading">Jobs by Location</h3>
                    <a href="#">Jobs in New York City</a>
                    <a href="#">Jobs in San Francisco</a>
                    <a href="#">Jobs in Austin</a>
                    <a href="#">Jobs in Boston</a>
                    <a href="#">Jobs in Washington DC</a>
                    <a href="#">Jobs in Denver</a>
                    <a href="#">Jobs in Seattle</a>
                    <a href="#">Jobs in Chicago</a>
                    <a href="#">Jobs in India</a>
                </div>
                <div className="footer-column-last">
                    <h3 className="footer-col-heading">Jobs by Role and Location</h3>
                    <a href="#">Software Engineer Jobs in San Francisco</a>
                    <a href="#">Software Engineer Jobs in New York City</a>
                    <a href="#">Software Engineer Jobs in Los Angeles</a>
                    <a href="#">Product Manager Jobs in San Francisco</a>
                    <a href="#">Product Manager Jobs in New York City</a>
                    <a href="#">Product Manager Jobs in Los Angeles</a>
                    <a href="#">Frontend Developer Jobs in San Francisco</a>
                    <a href="#">Frontend Developer Jobs in New York City</a>
                    <a href="#">Frontend Developer Jobs in Los Angeles</a>
                </div>
            </div>
            <div className="foot-note">
                <a className="footnote-logo"><img src={WhiteLogo} /></a>
                <a className="footnote-text">AngelList</a>
                <a className="footnote-text">Twitter</a>
                <a className="footnote-text">Terms&Risks</a>
                <a className="footnote-text">Privacy Policy & Cookies</a>
                <a className="footnote-text">Unsubscribe</a>
                <a className="footnote-text">Press</a>
            </div>
        </div>
    )
}

export default Footer