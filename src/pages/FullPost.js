import {Navigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ButtonDeletePost} from "../components/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {decreaseRating, increaseRating, removePost} from "../redux/postsSlice";

const FullPost = () => {
    const {id} = useParams()
    const dispatch = useDispatch();
    const post = useSelector(state => state.posts.posts.find(post => post.id === id));

    if (!post) {
        return <Navigate to={'/blog_react/'} />;
    }

    return (
        <>
            <Header/>
            <main className='main'>
                <div className="container">
                    <article key={post.id} className="post post--full">
                        <ButtonDeletePost onClick={() => dispatch(removePost(post.id))}/>
                        {post.imageWebp ? (
                            <picture>
                                <source srcSet={post.imageWebp} type="image/webp"/>
                                <img src={post.image} alt={post.title} className="post__img"/>
                            </picture>) : (
                            <img src={post.image} alt={post.title} className="post__img"/>
                        )}
                        <div className="post__content">
                            <h2 className="post__title">{post.title}</h2>
                            <p className="post__date">{
                                new Date(post.createdAt).toLocaleDateString('ru-Ru', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                    hour: 'numeric',
                                    minute: 'numeric',
                                    second: 'numeric'
                                })
                            }</p>
                            <p className="post__text">{post.excerpt}</p>
                            <div className="post__content-wrapper">
                                <ul className="post__tags-list">
                                    {post.tags.map((tag, index) => (
                                        <div key={index} className="post__tags-item">{'#' + tag}</div>
                                    ))}
                                </ul>
                            </div>
                            <div className="post__rating">
                                <button onClick={() => dispatch(increaseRating(post.id))}>+</button>
                                <span>{post.popularity}</span>
                                <button onClick={() => dispatch(decreaseRating(post.id))}>-</button>
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