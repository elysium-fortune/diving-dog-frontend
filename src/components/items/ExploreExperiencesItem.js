import {useEffect, useState} from 'react';
function ExploreItem({item}){
      const {name, image, description} = item;
      const location =  "Los Cabos";

    return(
      <>
      <div className="card explore-experiencies-item">
        <div className="card-image-wrap">
          <div className="location-badge">{location}</div>
          <h5 className="card-title explore-item-title">{name}</h5>
          <div className="hero-button-wrap"><a href="#" className="btn btn-primary">Explore More</a></div>
          <img src={image} className="card-img-top" alt={location} />
        </div>
      </div>

      </>
    );
}

export default ExploreItem;
