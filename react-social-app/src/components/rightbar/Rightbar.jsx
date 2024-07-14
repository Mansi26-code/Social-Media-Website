import "./rightbar.css";
import { Users } from "../../dummy";
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function Rightbar({ profile }) {
    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img className="birthdayImg" src={`${PF}birthday.jpeg`} alt="" />
                    <span className="birthdayText">
                        <b>Mathew Lucas</b> and <b>3 other friends</b> have a birthday today
                    </span>
                </div>
                <img className="rightbarAd" src={`${PF}ad.webp`} alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((user) => (
                        <li key={user.id} className="rightBarFriend">
                            <div className="rightbarProfileImageContainer">
                                <img className="rightbarProfileImg" src={`${PF}${user.profilePicture}`} alt="" />
                                <span className="rightbarOnline"></span>
                            </div>
                            <span className="rightbarUsername">{user.username}</span>
                        </li>
                    ))}
                </ul>
            </>
        );
    };

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">New York</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Madrid</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>
                </div>
                
                <h4 className="rightbarTitle">User Friends</h4>
                <div className="rightbarFollowings">
                    {Users.slice(0, 6).map((friend) => (
                        <div key={friend.id} className="rightbarFollowing">
                            <img
                                src={`${PF}${friend.profilePicture}`}
                                alt=""
                                className="rightbarFollowingImg"
                            />
                            <span className="rightbarFollowingName">{friend.username}</span>
                        </div>
                    ))}
                </div>
            </>
        );
    };

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    );
}
