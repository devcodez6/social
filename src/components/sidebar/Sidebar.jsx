import React from 'react'
import "./sidebar.css"
import {RssFeed, Chat, PlayCircleFilled, Group, Bookmarks, HelpOutline, WorkOutline, Event, School} from "@material-ui/icons"
// import ChatIcon from '@material-ui/icons/Chat';
// import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
// import GroupIcon from '@material-ui/icons/Group';
// import BookmarksIcon from '@material-ui/icons/Bookmarks';
// import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
// import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
// import EventIcon from '@material-ui/icons/Event';
// import SchoolIcon from '@material-ui/icons/School';
import { Users } from "../../dummyData"
import CloseFriends from "../closefriends/CloseFriends"



export default function Sidebar() {
    return (
     <div className="sidebar">
        <div className="sidebarWrapper">
           <ul className="sidebarlist">
            <li className="sidebarListItem">
                <RssFeed clasName="sidebarIcon"/>
                <span className="sidebarListItemText">Feed</span>
            </li>

            <li className="sidebarListItem">
                <Chat clasName="sidebarIcon"/>
                <span className="sidebarListItemText">Chats</span>
            </li>

            <li className="sidebarListItem">
                <PlayCircleFilled clasName="sidebarIcon"/>
                <span className="sidebarListItemText">Videos</span>
            </li>

            <li className= "sidebarListItem" >
                <Group clasName="sidebarIcon"/>
                <span className="sidebarListItemText">Groups</span>
            </li>
        
            <li className= "sidebarListItem" >
                <Bookmarks clasName="sidebarIcon"/>
                <span className="sidebarListItemText">Bookmarks</span>
            </li>

            <li className= "sidebarListItem" >
                <HelpOutline clasName="sidebarIcon"/>
                <span className="sidebarListItemText">Questions</span>
            </li>

            <li className= "sidebarListItem" >
                <WorkOutline clasName="sidebarIcon"/>
                <span className="sidebarListItemText">Jobs</span>
            </li>

            <li className= "sidebarListItem" >
                <Event clasName="sidebarIcon"/>
                <span className="sidebarListItemText">Event</span>
            </li>
            <li className= "sidebarListItem" >
                <School clasName="sidebarIcon"/>
                <span className="sidebarListItemText">Courses</span>
            </li>
           
            </ul>
            <button className="sidebarButton">Show More</button>
           <hr className="sidebarHr"/>
           <ul className="sidebarFriendList" >
            {Users.map (u=>(
                <CloseFriends key={u.id} user={u}/>
            ))}

           </ul>
            </div>
            </div>
    )
}