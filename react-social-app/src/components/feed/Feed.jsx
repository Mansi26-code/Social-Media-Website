import React, { useState, useEffect, useContext } from 'react';
import './feed.css';
import Post from '../post/Post';
import Share from '../Share/Share'; // Ensure the correct import path and capitalization
import { AuthContext } from '../../context/AuthContext'; // Ensure the correct import path
import instance from '../../axios';

const Feed = ({ username }) => {
    const [posts, setPosts] = useState([]);
    const { user: currentUser } = useContext(AuthContext); // Get the current user from context

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = username
                    ? await instance.get(`/posts/profile/${username}`)
                    : await instance.get(`/posts/timeline/${currentUser._id}`);

                setPosts(res.data); // Assuming res.data is an array of posts
            } catch (err) {
                console.error('Error fetching posts:', err);
            }
        };

        fetchPosts();
    }, [username, currentUser._id]);

    return (
        <div className="feed">
            <div className="feedWrapper">
                {(!username || username === currentUser.username) && <Share />} {/* Conditionally render Share */}
                {posts.map((post) => (
                    <Post key={post._id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default Feed;


