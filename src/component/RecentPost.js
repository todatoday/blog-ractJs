import React from 'react';
import '../css/recentpost.css';

function RecentPost({ recentTitl, recentImage, recentTitle, recentDateon, recentsubtitle, recentDatTwo }) {


    return (
    
    <div className="recent-post-container">
        <h4 className="recent-post-title">{recentTitl}</h4>
        <div className="recent-post-img">
            <img src={recentImage} alt="recent post image" />
        </div>
        <h5 className="recent-posttitle">{recentTitle}</h5>
        <span>{recentDateon}</span>
        <h5 className="recent-posttitle">{recentsubtitle}</h5>
        <span>{recentDatTwo}</span>



    </div>);

}

export default RecentPost;