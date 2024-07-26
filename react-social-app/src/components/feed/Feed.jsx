import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./feed.css";
import Post from "../post/Post";
import Share from "../Share/Share";

const Feed = ({username}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const config = {
                    headers: {
                      "Access-Control-Allow-Origin": "*",
                      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
                    }
                  };
                const res = username?await axios.get("http://127.0.0.1:8080/api/posts/profile/"+username,config)
                 :await axios.get("http://127.0.0.1:8080/api/posts/timeline/667acf066222e9f394deaf05",config)
                // Check what data is returned
                setPosts(res.data); // Assuming res.data is an array of posts
            } catch (err) {
                console.error("Error fetching posts:", err);
            }
        };

        fetchPosts();
   
 }, [username]);

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
