import {Link} from "react-router-dom";

export const ButtonLinkPost = ({children, className, link}) => {
    return (
        <button className={'btn-link ' + className}>
            <Link to={link}>
                {children}
            </Link>
        </button>
    );
}

export const ButtonDeletePost = ({onClick}) => {
    return (
        <button className='btn--delete' onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M18.3 5.71L12 12.01l-6.3-6.3A1 1 0 1 0 4.29 7.1L10.59 13l-6.3 6.3a1 1 0 1 0 1.42 1.42l6.3-6.3 6.3 6.3a1 1 0 1 0 1.42-1.42l-6.3-6.3 6.3-6.3a1 1 0 0 0-1.42-1.42z"></path>
            </svg>
        </button>
    );
}