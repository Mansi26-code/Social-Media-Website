import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Post = ({ post }) => {
    const [like, setLike] = useState(post.like);
    const [isHeartLiked, setIsHeartLiked] = useState(false);
    const [isLikeLiked, setIsLikeLiked] = useState(false);
    const [user, setUser] = useState({});
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(`/users/${post.userId}`);
                setUser(res.data);
            } catch (err) {
                console.error("Error fetching user:", err);
            }
        };

        fetchUser();
    }, [post.userId]);

    const heartLikeHandler = () => {
        if (isHeartLiked) {
            setLike(like - 1);
        } else {
            setLike(like + 1);
            if (isLikeLiked) {
                setIsLikeLiked(false);
            }
        }
        setIsHeartLiked(!isHeartLiked);
    };

    const likeLikeHandler = () => {
        if (isLikeLiked) {
            setLike(like - 1);
        } else {
            setLike(like + 1);
            if (isHeartLiked) {
                setIsHeartLiked(false);
            }
        }
        setIsLikeLiked(!isLikeLiked);
    };

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img
                            className="postProfileImg"
                            src={user.profilePicture ? `${PF}${user.profilePicture}` : "/assets/defaultProfile.png"}
                            alt="Profile"
                        />
                        <span className="postUsername">{user.username || "Unknown User"}</span>
                        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post.desc}</span>
                    <img className="postImg" src={`${PF}${post.photo}`} alt="Post" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img
                            className={`likeIcon ${isHeartLiked ? 'liked' : ''}`}
                            src={`${PF}heart.jpeg`}
                            onClick={heartLikeHandler}
                            alt="Heart"
                        />
                        <img
                            className={`likeIcon ${isLikeLiked ? 'liked' : ''}`}
                            src={`${PF}like.png`}
                            onClick={likeLikeHandler}
                            alt="Like"
                        />
                        <span className="postLikeCounter">{like} people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;


