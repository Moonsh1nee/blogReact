import {Link} from "react-router-dom";
import '../assets/scss/blocks/btn.scss'

export const ButtonLinkPost = ({ children, className, link }) => {
    return (
        <button className={'btn-link ' + className}>
            <Link to={link}>
                {children}
            </Link>
        </button>
    );
}

export const ButtonDeletePost = ({ children, className, onClick }) => {
    return (
        <button className={'btn ' + className} onClick={onClick}>
            {children}
        </button>
    );
}