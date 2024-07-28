import "./share.css";
import { useContext, useRef, useState } from "react";
import PermMediaIcon from '@mui/icons-material/PermMedia';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import { AuthContext } from "../../context/AuthContext";
import instance from "../../axios"; // Importing custom axios instance

export default function Share() {
    const { user } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const desc = useRef();
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
            desc: desc.current.value,
        };

        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file", file);
            newPost.img = fileName;
            try {
                await instance.post("/upload", data);
            } catch (err) {
                console.error(err);
            }
        }

        try {
            await instance.post("/posts", newPost);
            window.location.reload();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img 
                        className="shareProfileImg" 
                        src={user.profilePicture ? PF + user.profilePicture : PF + "person/avatar.webp"} 
                        alt="" 
                    />
                    <input 
                        placeholder={"Share your thoughts " + user.username + "..."} 
                        className="shareInput" 
                        ref={desc} 
                    />
                </div>
                <hr className="shareHr" />
                <form className="shareBottom" onSubmit={handleSubmit}>
                    <div className="shareOptions">
                        <label htmlFor="file" className="shareOption">
                            <PermMediaIcon htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText">Photo or Video</span>
                            <input 
                                type="file" 
                                id="file" 
                                accept=".png,.jpg,.jpeg,.webp" 
                                onChange={(e) => setFile(e.target.files[0])} 
                                style={{ display: "none" }} 
                            />
                        </label>

                        <div className="shareOption">
                            <LabelIcon htmlColor="blue" className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>

                        <div className="shareOption">
                            <RoomIcon htmlColor="green" className="shareIcon" />
                            <span className="shareOptionText">Locations</span>
                        </div>

                        <div className="shareOption">
                            <EmojiEmotionsIcon htmlColor="gold" className="shareIcon" />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton" type="submit">Share</button>
                </form>
            </div>
        </div>
    );
}


