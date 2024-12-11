import {Navigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ButtonDeletePost, ButtonLinkPost} from "../components/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {removePost} from "../redux/postsSlice";

const FullPost = () => {
    const {id} = useParams()
    const dispatch = useDispatch();
    const post = useSelector(state => state.posts.posts.find(post => post.id === id));

    if (!post) {
        return <Navigate to={'/'} />;
    }

    return (
        <>
            <Header/>
            <main className='main'>
                <div className="container">
                    <article key={post.id} className="post post--full">
                        <ButtonDeletePost onClick={() => dispatch(removePost(post.id))}/>
                        <picture>
                            <source srcSet={'../' + post.imageWebp} type="image/webp"/>
                            <img src={'../' + post.image} alt={post.title} className="post__img"/>
                        </picture>
                        <div className="post__content">
                            <h2 className="post__title">{post.title}</h2>
                            <p className="post__text">{post.content}</p>
                            <div className="post__content-wrapper">
                                <ul className="post__tags-list">
                                    {post.tags.map((tag, index) => (
                                        <div key={index} className="post__tags-item">{'#' + tag}</div>
                                    ))}
                                </ul>

                                <ButtonLinkPost className="btn--post" link={'/posts/' + post.id}>
                                    Read more
                                </ButtonLinkPost>
                            </div>
                        </div>
                    </article>
                </div>
            </main>
            <Footer/>
        </>
    );
};

export default FullPost;