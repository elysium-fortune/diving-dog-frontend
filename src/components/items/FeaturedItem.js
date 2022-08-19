import {useEffect, useState} from 'react';
function ExploreItem({item}){
      const {title, image, description, price} = item;
      const location =  "Los Cabos";

    return(
      <>
      <div className="card featured-item">
        <div className="card-image-wrap">
          <img src={image} className="card-img-top" alt={location} />
          <div className="featured-item-title-wrap">
              <div className="card-title featured-item-title">{title}</div>
              <div className="card-price featured-item-price">{price}</div>
          </div>
        </div>
      </div>

      </>
    );
}

export default ExploreItem;
