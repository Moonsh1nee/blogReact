import {useDispatch, useSelector} from "react-redux";
import {ButtonDeletePost, ButtonLinkPost} from "./Button";
import {decreaseRating, increaseRating, removePost} from "../redux/postsSlice";
import Filters from "./Filters";

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts);
    const filter = useSelector(state => state.posts.filter);
    const sort = useSelector(state => state.posts.sort);

    const filteredPosts = posts.filter(post => filter.tag === '' || post.tags.some(tag => tag.toLowerCase().includes(filter.tag.toLowerCase()))).sort((a, b) => {
        if (sort.sortBy === 'createdAt') {
            return sort.sortOrder === 'asc' ? new Date(a.createdAt) - new Date(b.createdAt) : new Date(b.createdAt) - new Date(a.createdAt);
        } else if (sort.sortBy === 'popularity') {
            return sort.sortOrder === 'asc' ? a.popularity - b.popularity : b.popularity - a.popularity;
        }
        return 0;
    });

    return (
        <section className="posts">
            <div className="container">
                <h1 className="posts__title">Posts:</h1>

                <Filters/>

                <div className="posts__grid">
                    {filteredPosts.map(post => (
                        <article key={post.id} className="post">
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
                                <p className="post__date">{post.createdAt}</p>
                                <p className="post__text">{post.excerpt}</p>
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
                                <div className="post__rating">
                                    <button onClick={() => dispatch(increaseRating(post.id))}>+</button>
                                    <span>{post.popularity}</span>
                                    <button onClick={() => dispatch(decreaseRating(post.id))}>-</button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Posts;