import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterTag, setSortBy, setSortOrder } from "../redux/postsSlice";

const Filters = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts);
    const filter = useSelector(state => state.posts.filter);

    const tags = Array.from(new Set(posts.flatMap(post => post.tags)));

    const handleFilterTag = (e) => {
        dispatch(setFilterTag(e.target.value));
    }

    const handleSortBy = (e) => {
        dispatch(setSortBy(e.target.value));
    }

    const handleSortOrder = (e) => {
        dispatch(setSortOrder(e.target.value));
    }

    return (
        <div className="filters">
            <div className="filters__group">
                <input
                    type="text"
                    placeholder="Filter by tag"
                    onChange={handleFilterTag}
                    value={filter.tag}
                />
            </div>
            <div className="filters__group">
                <select onChange={handleFilterTag}>
                    <option value="">All tags</option>
                    {tags.map(tag => (
                        <option key={tag} value={tag}>{tag}</option>
                    ))}
                </select>
            </div>
            <div className="filters__group">
                <select onChange={handleSortBy}>
                    <option value="createdAt">Sort by Created Date</option>
                    <option value="popularity">Sort by Popularity</option>
                </select>
                <select onChange={handleSortOrder}>
                    <option value="desc">Descending</option>
                    <option value="asc">Ascending</option>
                </select>
            </div>
        </div>
    );
}

export default Filters;
