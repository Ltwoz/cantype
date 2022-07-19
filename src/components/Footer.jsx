import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
            <Link to="/" className="textButton">
                <div className="text">Contact</div>
            </Link>
            <a href="https://github.com/Ltwoz/cantype" target="_blank" className="textButton">
                <FaGithub />
                <div className="text">github</div>
            </a>
        </div>
    );
}

export default Footer;
