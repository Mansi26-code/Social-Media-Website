import "./rightbar.css";
import { Users } from "../../dummy";

export default function Rightbar({ profile }) {
    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="/assets/birthday.jpeg" alt="" />
                    <span className="birthdayText">
                        <b>Mathew Lucas</b> and <b>3 other friends</b> have a birthday today
                    </span>
                </div>
                <img className="rightbarAd" src="/assets/ad.webp" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((user) => (
                        <li key={user.id} className="rightBarFriend">
                            <div className="rightbarProfileImageContainer">
                                <img className="rightbarProfileImg" src={user.profilePicture} alt="" />
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
        return(
        
            <>
            <h4 className="rightbarTitle">User Information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">India</span>
                </div>

                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">Patna, Bihar</span>
                </div>

                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Education:</span>
                    <span className="rightbarInfoValue">IIIT Bhubaneswar</span>
                </div>

                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship Status:</span>
                    <span className="rightbarInfoValue">Single</span>
                </div>


            </div>

            <h4 className="rightbarTitle">User friends</h4>
            <div className="rightbarFollowings">
              <div className="rightbarFollowing">
                <img src="/assets/person/download.jpg" alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">Mike Louis</span>
              </div>
              
              <div className="rightbarFollowing">
                <img src="/assets/person/download.jpeg" alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">Luna Bennett</span>
              </div>

              <div className="rightbarFollowing">
                <img src="/assets/person/images.jpg" alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">Evie Castillo</span>
              </div>

              <div className="rightbarFollowing">
                <img src="/assets/person/person2.jpeg" alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">Keira Dubois</span>
              </div>

              <div className="rightbarFollowing">
                <img src="/assets/person/person3.jpeg" alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">Aiden Bennett</span>
              </div>

              <div className="rightbarFollowing">
                <img src="/assets/person/person4.jpg" alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">Liam Moreau</span>
              </div>

              <div className="rightbarFollowing">
                <img src="/assets/person/person7.jpg" alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">Shivam Singh</span>
              </div>
            </div>
            </>
        )
    };

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    );
}
