import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./feed.css";
import Post from "../post/Post";
import Share from "../Share/Share";

export default function Feed({ username }) {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null); // State to store user information

    useEffect(() => {
        const fetchUser = async () => {
            try {
                // Example: Fetching user data based on username
                const res = await axios.get(`/users/${username}`);
                setUser(res.data); // Assuming res.data contains user information
            } catch (err) {
                console.error("Error fetching user:", err);
            }
        };

        if (username) {
            fetchUser();
        }
    }, [username]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                console.log("Fetching posts...");
                const res = username
                    ? await axios.get("/posts/profile/" + username)
                    : await axios.get("/posts/timeline/" + user._id);
                console.log("Response data:", res.data);
                setPosts(
                    res.data.sort((p1, p2) => {
                        return new Date(p2.createdAt) - new Date(p1.createdAt);
                    })
                );
            } catch (err) {
                setError(err.message || "Error fetching posts");
                console.error("Error fetching posts:", err);
            }
        };

        if (username || (user && user._id)) { // Check if username or user._id is available
            fetchPosts();
        }
    }, [username, user]);

    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {error ? (
                    <div className="error">Failed to load posts: {error}</div>
                ) : (
                    posts.map((p) => (
                        <Post key={p._id} post={p} />
                    ))
                )}
            </div>
        </div>
    );
}
