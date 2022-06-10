import React from "react";
import { withRouter } from "react-router-dom";
import './menu-item.css';

const MenuItem = ({title, imageURL, size, history, link, match}) =>{
    return(
        <div className={`${size} menu-items`}>
            <div 
            style={{
                backgroundImage : `url(${imageURL})`,
                backgroundSize : 'cover',
                backgroundPosition : 'center'
            }}
            className="bg-image"></div>
                <div className='content' onClick={() => history.push(`${match.url}${link}`)}>
                    <h1 className='title'>{title}</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
        </div>
    )
}

export default withRouter(MenuItem);