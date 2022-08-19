import {useEffect, useState} from 'react';
import StarRatings from 'components/shared/StarRating';
import locationgrey from 'assets/images/Location-grey.png';

function ExploreItem({item}){
      const {title, image, description, price, dateOfOpening, bookEnabled} = item;
      const location =  "Los Cabos";
      const rating = 4;


    return(
      <>
      <div className="card explore-item">
        <div className="card-image-wrap">
          <div className="location-badge"> <img src={locationgrey}/>{location}</div>
          <h5 className="card-title explore-item-title">{title}</h5>
          <img src={image} className="card-img-top" alt={location} />
        </div>
        <div className="card-body">
          <div className="explore-item-description">
            <p className="card-text">{description}</p>
            <a href="#" className="btn btn-primary">Read More</a>
          </div>
          <div className="explore-item-review">
              <div className="ratings">{rating}/5</div>
              <StarRatings
              rating={rating}
              starRatedColor="yellow"
              numberOfStars={5}
              name='rating'
            />
            <div className="reviews">180(reviews)</div>
          </div>
    { price || dateOfOpening || bookEnabled ? <div className="explore-item-booking row">
            {price ? <div className="explore-item-price col-md-4">
              {price}
            </div> : ""}
            {dateOfOpening ? <div className="explore-item-open-date col-md-4">
              Date of Opening:<br/>
              {dateOfOpening}
            </div> : ""}
            {bookEnabled ? <div className="explore-item-book-wrap col-md-4">
              <a href="#" className="btn btn-primary">Book</a>
            </div> : ""}
          </div>
          : ""
        }


        </div>
      </div>

      </>
    );
}

export default ExploreItem;
