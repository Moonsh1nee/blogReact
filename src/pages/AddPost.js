import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addPost} from '../redux/postsSlice';
import Header from "../components/Header";
import Footer from "../components/Footer";

const AddPost = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [excerpt, setExcerpt] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            title,
            image,
            excerpt,
            content,
            tags: tags.split(',').map(tag => tag.trim())
        };
        dispatch(addPost(newPost));
        setTitle('');
        setImage('');
        setExcerpt('');
        setContent('');
        setTags('');
    };

    return (
        <>
            <Header/>
            <main className={'main'}>
                <form className="add-post" onSubmit={handleSubmit}>
                    <h2>Add New Post</h2>
                    <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}
                           required/>
                    <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)}
                           required/>
                    <input type="text" placeholder="Excerpt" value={excerpt}
                           onChange={(e) => setExcerpt(e.target.value)}
                           required/>
                    <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)}
                              required/>
                    <input type="text" placeholder="Tags (comma separated)" value={tags}
                           onChange={(e) => setTags(e.target.value)} required/>
                    <button type="submit">Add Post</button>
                </form>
            </main>
            <Footer/></>
    );
};

export default AddPost;
