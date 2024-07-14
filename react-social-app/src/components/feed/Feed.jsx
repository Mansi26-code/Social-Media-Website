import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./feed.css";
import Post from "../post/Post";
import Share from "../Share/Share";

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get("http://localhost:8080/NODE-REST-API/posts/timeline/667acf066222e9f394deaf05");
                console.log(res.data); // Check what data is returned
                setPosts(res.data); // Assuming res.data is an array of posts
            } catch (err) {
                console.error("Error fetching posts:", err);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {posts.map((post) => (
                    <Post key={post._id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default Feed;

