import {useEffect, useState} from 'react';
import StarRatings from 'components/shared/StarRating';
import locationgrey from 'assets/images/Location-grey.png';

function ExploreItemHpme3({item}){
      const {title, image, description, price, dateOfOpening, bookEnabled} = item;
      const location =  "Los Cabos";
      const rating = 4;


    return(
      <>
      <div className="card explore-item">
        <div className="card-image-wrap">
          <div className="location-badge"> <img src={locationgrey}/>{title}</div>
          <h5 className="card-title explore-item-title">{title}</h5>
          <img src={image} className="card-img-top" alt={location} />
        </div>
        <div className="card-body">
            <div className='home3-list'>
                <div className="explore-item-description">
                <h3>What is the diving like in {title}?</h3>
                <p className="card-text">{description}</p>
            </div>
            <div className='list-booking'>
                <h3>£500</h3>
                <button className='btn btn-primary'>Book Now</button>
                <p>Date of opening : <br/>
                    Aug 2022</p>
            </div>
            </div>


          <div className='read-descrpt-rating'>
            <div className='description-read'>
            <a href="#" className="btn btn-primary">Read More</a>
            </div>
          <div className="explore-item-review">
          <div className="ratings">{rating}/5</div>
                <div className='star-rating-box'>
                    <StarRatings
                    rating={rating}
                    starRatedColor="yellow"
                    numberOfStars={5}
                    name='rating'
                    />
                     <div className="reviews">180(reviews)</div>
              </div>


          </div>
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
 {/* it will use for view all button */}
      {/* <div className='viewallbtn'>
      <button className='btn btn-primary'>View All</button>
      </div> */}

      </>
    );
}

export default ExploreItemHpme3;
