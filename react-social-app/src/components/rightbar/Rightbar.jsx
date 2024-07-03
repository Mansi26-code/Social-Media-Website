import "./rightbar.css"

export default function Rightbar(){
    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img className="birthdayImg"src="/assets/birthday.jpeg" alt="" />
                    <span className="birthdayText">
                        <b>Mathew Lucas </b>and <b>3 other friends</b> have a birthday today
                        </span>
                </div>
                <img className="rightbarAd"src="/assets/ad.webp" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    <li className="rightBarFriend">
                        <div className="rightbarProfileImageContainer">
                            <img className="rightbarProfileImg" src="/assets/person/download.jpeg" alt=""  />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">
                        Luna Bennett
                        </span>
                    </li>

                    <li className="rightBarFriend">
                        <div className="rightbarProfileImageContainer">
                            <img className="rightbarProfileImg" src="/assets/person/Rudra.jpg" alt=""  />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">
                        Rudra
                        </span>
                    </li>

                    <li className="rightBarFriend">
                        <div className="rightbarProfileImageContainer">
                            <img className="rightbarProfileImg" src="/assets/person/download.jpeg" alt=""  />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">
                        Luna Bennett
                        </span>
                    </li>

                    <li className="rightBarFriend">
                        <div className="rightbarProfileImageContainer">
                            <img className="rightbarProfileImg" src="/assets/person/download.jpeg" alt=""  />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">
                        Luna Bennett
                        </span>
                    </li>

                    <li className="rightBarFriend">
                        <div className="rightbarProfileImageContainer">
                            <img className="rightbarProfileImg" src="/assets/person/download.jpeg" alt=""  />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">
                        Luna Bennett
                        </span>
                    </li>

                    <li className="rightBarFriend">
                        <div className="rightbarProfileImageContainer">
                            <img className="rightbarProfileImg" src="/assets/person/download.jpeg" alt=""  />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">
                        Luna Bennett
                        </span>
                    </li>

                    <li className="rightBarFriend">
                        <div className="rightbarProfileImageContainer">
                            <img className="rightbarProfileImg" src="/assets/person/download.jpeg" alt=""  />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">
                        Luna Bennett
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}