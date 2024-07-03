import "./sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupIcon from '@mui/icons-material/Group';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';

export default function Sidebar()
{
    return(
        <div className="sidebar">
          <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
<RssFeedIcon className="sidebar-Icon"/>
  <span className="sidebarListItemText">Feed</span>

                </li>

                <li className="sidebarListItem">
<ChatIcon className="sidebar-Icon"/>
  <span className="sidebarListItemText">Chat</span>

                </li>

                <li className="sidebarListItem">
<OndemandVideoIcon className="sidebar-Icon"/>
  <span className="sidebarListItemText">Videos</span>

                </li>

                <li className="sidebarListItem">
<GroupIcon className="sidebar-Icon"/>
  <span className="sidebarListItemText">Groups</span>

                </li>

                <li className="sidebarListItem">
<BookmarksIcon className="sidebar-Icon"/>
  <span className="sidebarListItemText">Bookmarks</span>

                </li>

                <li className="sidebarListItem">
<ContactSupportIcon className="sidebar-Icon"/>
  <span className="sidebarListItemText">Questions</span>

                </li>

                <li className="sidebarListItem">
<WorkIcon className="sidebar-Icon"/>
  <span className="sidebarListItemText">Jobs</span>

                </li>

                <li className="sidebarListItem">
<EventIcon  className="sidebar-Icon"/>
  <span className="sidebarListItemText">Events</span>

                </li>

                <li className="sidebarListItem">
<SchoolIcon  className="sidebar-Icon"/>
  <span className="sidebarListItemText">Courses</span>

                </li>
            </ul>
            <button className="sidebarButton">Show more</button>
            <hr className="sidebarHr"/>
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/person/images.jpg" alt="evie"/>
                    <span className="sidebarFriendName">Evie Castillo</span>

                </li>

                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/person/smiling-man_1098-15443.avif" alt="evie"/>
                    <span className="sidebarFriendName">Steven Thomas</span>

                </li>

                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/person/person2.jpeg" alt="Keira "/>
                    <span className="sidebarFriendName">Keira Dubois </span>

                </li>

                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/person/person3.jpeg" alt="Aiden "/>
                    <span className="sidebarFriendName">Aiden Bennett</span>

                </li>

                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/person/person4.jpg" alt="Liam"/>
                    <span className="sidebarFriendName">Liam Moreau</span>

                </li>

                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/person/download.jpeg" alt="Luna"/>
                    <span className="sidebarFriendName">Luna Bennett</span>

                </li>

            </ul>
          </div>
        </div>
    )
}