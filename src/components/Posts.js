import {useDispatch, useSelector} from "react-redux";
import {ButtonDeletePost, ButtonLinkPost} from "./Button";
import '../assets/scss/blocks/posts.scss'
import '../assets/scss/blocks/post.scss'
import {removePost} from "../redux/postsSlice";

const Posts = () => {
    const posts = useSelector(state => state.posts.posts);
    const dispatch = useDispatch();

    return (
        <section className="posts">
            <div className="container">
                <h1 className="posts__title">Posts</h1>
                <div className="posts__grid">
                    {posts.map(post => (
                        <article key={post.id} className="post">
                            <ButtonDeletePost className="btn--delete" onClick={() => dispatch(removePost(post.id))}>
                                Delete
                            </ButtonDeletePost>
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

                                    <ButtonLinkPost className="btn--post" link={'/posts/' + post.id}>
                                        Read more
                                    </ButtonLinkPost>
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