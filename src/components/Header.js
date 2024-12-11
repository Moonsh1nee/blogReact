import {Link} from "react-router-dom";
import {ButtonLinkPost} from "./Button";

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__logo">
                        <Link to={'/blog_react/'} className='header__logo-link'>React Blog</Link>
                    </div>

                    <ButtonLinkPost className={'btn--add-post'} link={'/blog_react/posts/add'}>
                        Add post
                    </ButtonLinkPost>
                </div>
            </div>
        </header>
    );
}

export default Header;