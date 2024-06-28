import "./right.css";
import Delete from "./assets/deletec.png";
import Edit from "./assets/edit.png";
import Chat from "./assets/chat.png";
import Person from "./assets/person.png";
import Group from "./assets/group.png";
import Visible from "./assets/visibility.png";

const Right = () => {
  return (
    <div className="right">
      <div className="buttons">
        <button className="active"> <span><img src={Delete}/></span> Delete job</button>
        <button> <span><img src={Edit}/></span> Edit job</button>
      </div>
      <div className="sections">
        <div className="section">
            <div className="sec">
                <img src={Group}/>
                <span>Applicants</span>
            </div>
            <span>400</span>
        </div>
        <div className="section">
            <div className="sec">
                <img src={Person}/>
                <span>Matches</span>
            </div>
            <span>100</span>
        </div>
        <div className="section">
            <div className="sec">
                <img src={Chat}/>
                <span>Messages</span>
            </div>
            <span>147</span>
        </div>
        <div className="section">
            <div className="sec">
                <img src={Visible}/>
                <span>Views</span>
            </div>   
         <span>800</span>
        </div>
      </div>
    </div>
  )
}

export default Right
