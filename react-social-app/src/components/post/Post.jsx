import React, { useState } from 'react';
import "./post.css";
import { Users } from "../../dummy.js";
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Post({ post }) {
    const user = Users.find(u => u.id === post.userId);
    
    const [like, setLike] = useState(post.like);
    const [isHeartLiked, setIsHeartLiked] = useState(false);
    const [isLikeLiked, setIsLikeLiked] = useState(false);

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const heartLikeHandler = () => {
        setLike(isHeartLiked ? like - 1 : like + 1);
        setIsHeartLiked(!isHeartLiked);
        if (isLikeLiked) {
            setLike(like - 1);
            setIsLikeLiked(false);
        }
    };

    const likeLikeHandler = () => {
        setLike(isLikeLiked ? like - 1 : like + 1);
        setIsLikeLiked(!isLikeLiked);
        if (isHeartLiked) {
            setLike(like - 1);
            setIsHeartLiked(false);
        }
    };

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src={`${PF}${user.profilePicture}`} alt="" />
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post.desc}</span>
                    <img className="postImg" src={`${PF}${post.photo}`} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img
                            className={`likeIcon ${isHeartLiked ? 'liked' : ''}`}
                            src={`${PF}heart.jpeg`}
                            onClick={heartLikeHandler}
                            alt=""
                        />
                        <img
                            className={`likeIcon ${isLikeLiked ? 'liked' : ''}`}
                            src={`${PF}like.png`}
                            onClick={likeLikeHandler}
                            alt=""
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
}
