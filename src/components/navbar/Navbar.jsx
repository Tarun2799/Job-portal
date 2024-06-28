// import React from 'react'
import "./navbar.css";
// import Work from "./assets/work.png";
import WorkWhite from "./assets/work_white.png"
import Payment from "./assets/payments.png";
import Chat from "./assets/chat.png";
import Notify from "./assets/notifications.png";
import ProfileImg from "./assets/account.png";
import Arrow from "./assets/arrow.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo" >Logo</div>
      <div className="Tabs">
        <div className="tab active">
            <img src={WorkWhite} className="work"/>
            <div className="">Jobs</div>
        </div>
        <div className="tab">
            <img src={Chat} className="messages"/>
            <div>Messages</div>
        </div>
        <div className="tab">
            <img src={Payment} className="pay"/>
            <div>Payments</div>
        </div>
      </div>
      <div className="profile">
        <img src={Notify}/>
        <img src={ProfileImg}/>
        <img src={Arrow}/>
      </div>
    </div>
  )
}

export default Navbar
