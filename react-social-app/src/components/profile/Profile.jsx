import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={`${PF}post/coverPic.webp`}
                alt=""
              />
              <img
                className="profileUserImg"
                src={`${PF}person/person9.jpeg`}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Mansi Swaraj</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
