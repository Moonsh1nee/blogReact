import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/postsSlice';
import Header from "../components/Header";
import Footer from "../components/Footer";

const AddPost = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [imageWebp, setImageWebp] = useState('');
    const [excerpt, setExcerpt] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            title,
            image,
            imageWebp,
            excerpt,
            content,
            tags: tags.split(',').map(tag => tag.trim()),
            createdAt: new Date().toISOString()
        };
        dispatch(addPost(newPost));
        setTitle('');
        setImage('');
        setImageWebp('');
        setExcerpt('');
        setContent('');
        setTags('');
    };

    return (
        <>
            <Header />
            <main className='main-add-post'>
                <form className="post-add" onSubmit={handleSubmit}>
                    <h2 className="post-add__title">Add New Post</h2>
                    <input type="text" className="post-add__input" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                    <input type="text" className="post-add__input" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} required />
                    <input type="text" className="post-add__input" placeholder="Excerpt" value={excerpt} onChange={(e) => setExcerpt(e.target.value)} required />
                    <textarea className="post-add__textarea" placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required />
                    <input type="text" className="post-add__input" placeholder="Tags (comma separated)" value={tags} onChange={(e) => setTags(e.target.value)} required />
                    <button type="submit" className="post-add__button">Add Post</button>
                </form>
            </main>
            <Footer />
        </>
    );
};

export default AddPost;
