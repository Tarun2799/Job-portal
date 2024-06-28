// import React from 'react';
import "./companyInfo.css";


const CompanyInfo = () => {
  return (
    <>    
    <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr42lt0uL4-RkQGD5AoUhQGn4OGr-foggxTQ&s" alt="Atlassian Logo" /> Atlassian
    </div>
    <div className="company-info">
      <div className="details">
        <div className="detail">
          <span className="label">Company size</span>
          <span className="value">1k - 2k Employees</span>
        </div>
        <div className="detail">
          <span className="label">Sector</span>
          <span className="value">Information Technology, Infrastructure</span>
        </div>
        <div className="detail">
          <span className="label">Founded In</span>
          <span className="value">2019</span>
        </div>
      </div>
      <div className="details">
        <div className="detail">
          <span className="label">Type</span>
          <span className="value">Private</span>
        </div>
        <div className="detail">
          <span className="label">Funding</span>
          <span className="value">Bootstrapped</span>
        </div>
        <div className="detail">
          <span className="label">Founded By</span>
          <span className="value">Scott Farquhar, Mike Cannon-Brookes</span>
        </div>
      </div>
    </div>
    </>
  );
};

export default CompanyInfo;