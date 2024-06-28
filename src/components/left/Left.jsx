import AboutJob from "./aboutJob/AboutJob";
import CompanyInfo from "./companyInfo/CompanyInfo";
import "./left.css";
import Location from "./assets/location.png";
import Data from "./assets/database.png";
import Figma from "./assets/figma.png";
import Xd from "./assets/xd.png";
import Illustrator from "./assets/illuster.png";


const Left = () => {
  return (
    <div className="left">
        <div className="job-header">
            <h2 className="job-title">Senior Product Designer</h2>
            <div className="job-info">posted 2 days ago <span className="open-status">Open</span></div>
        </div>
        <div className="job-loc">
          <div className="job-location"> <img src={Location} /> Delaware, USA</div>
          <div className="job-salary"> <img src={Data} /> $300k-$400k</div>
        </div>
        <div className="job-details">
            <div className="job-skills">
              <h3 className="skills-title">Skills Required</h3>
              <ul className="skills-list">
                <li className="skill"> <img src={Figma} /> Figma</li>
                <li className="skill"> <img src={Illustrator} /> Adobe Illustrator</li>
                <li className="skill"> <img src={Xd} /> Adobe XD</li>
              </ul>
            </div>
            <div className="job-language">
              <h3 className="language-title">Preferred Language</h3>
              <div className="language-value">English</div>
            </div>
            <div className="job-type">
              <h3 className="type-title">Type</h3>
              <div className="type-value">Full time</div>
            </div>
            <div className="job-experience">
              <h3 className="experience-title">Years of Experience</h3>
              <div className="experience-value">3+ Years of Experience</div>
            </div>
        </div>
        <AboutJob/>
        <CompanyInfo/>
    </div>
  )
}

export default Left
