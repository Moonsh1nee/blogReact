import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {ButtonLinkPost} from "../components/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";

const FullPost = () => {
    const {id} = useParams()
    const post = useSelector(state => state.posts.posts.find(post => post.id === id));

    if (!post) {
        return <div>Post not found!</div>;
    }

    return (
        <>
            <Header/>
            <main>
                <article className="post">
                    <div className="post__img">
                        <img src={post.image} alt={post.title}/>
                    </div>
                    <div className="post__content">
                        <h2 className="post__title">{post.title}</h2>
                        <p className="post__text">{post.excerpt}</p>
                        <div className="post__content-wrapper">
                            <ul className="post__tags-list">
                                {post.tags.map((tag, index) => (
                                    <div key={index} className="post__tags-item">{'#' + tag}</div>
                                ))}
                            </ul>

                            <ButtonLinkPost className="btn--post" id={post.id}>
                                Read more
                            </ButtonLinkPost>
                        </div>
                    </div>
                </article>
            </main>
            <Footer/>
        </>
    );
};

export default FullPost;