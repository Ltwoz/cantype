import { FaGithub, FaEnvelope } from "react-icons/fa";
import { RiBracesFill } from "react-icons/ri"
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
            <Link to="/" className="textButton">
                <FaEnvelope style={{ "marginRight": ".5rem" }} />
                <div className="text">Contact</div>
            </Link>
            <a href="https://github.com/Ltwoz/cantype" target="_blank" className="textButton">
                <FaGithub style={{ "marginRight": ".5rem" }} />
                <div className="text">github</div>
            </a>
            <Link to="/" className="textButton">
                <RiBracesFill style={{ "marginRight": ".5rem" }} />
                <div className="text">contributors</div>
            </Link>
        </div>
    );
}

export default Footer;
