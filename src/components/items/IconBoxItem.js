import {useState, useEffect} from 'react';

function IconBoxItem({title, description, image}){
  return(
    <>
      <div className="iconbox">
          <div className="iconbox-image-wrap">
            <img src={image} className="iconbox-image" />
          </div>
          <div className="iconbox-text-wrap">
            <h4 className="iconbox-title">{title}</h4>
            <p className="iconbox-description">{description}</p>
          </div>
      </div>
    </>)
}

export default IconBoxItem;
