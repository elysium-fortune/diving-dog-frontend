import {useEffect, useState} from 'react';
import StarRatings from 'react-star-ratings';

function DDStarRating(props) {
    return(
      <>
        <StarRatings {...props} starRatedColor="#f4cd1e" />
      </>
    );
};

export default DDStarRating;
