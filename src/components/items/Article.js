import {useEffect, useState} from 'react';
import StarRatings from 'react-star-ratings';
import locationgrey from 'assets/images/Location-grey.png';
import ArticleImg from 'assets/images/article-img.jpg';


function Article(){
    return(
      <>
   <div className='container'>
       <h2>Latest Tips & Articles</h2>
       <div className='row'>
           <div className='col-md-4'>
               <div className='aritcle-box'>
                    <div className='aritcle-img'>
                   <img src={ArticleImg}/>
                   </div>
                   <div className='aritcle-text'>
                    <span className='article-date'>Date : 07-03-2022</span>
                    <h3>What you have to take with you while visiting Los Cabos?</h3>
                    <a href="btn btn-primary">Read More</a>
                     </div>
               </div>
           </div>
           <div className='col-md-4'>
               <div className='aritcle-box'>
                    <div className='aritcle-img'>
                   <img src={ArticleImg}/>
                   </div>
                   <div className='aritcle-text'>
                    <span className='article-date'>Date : 07-03-2022</span>
                    <h3>What you have to take with you while visiting Los Cabos?</h3>
                    <a href="btn btn-primary">Read More</a>
                     </div>
               </div>
           </div>
           <div className='col-md-4'>
               <div className='aritcle-box'>
                    <div className='aritcle-img'>
                   <img src={ArticleImg}/>
                   </div>
                   <div className='aritcle-text'>
                    <span className='article-date'>Date : 07-03-2022</span>
                    <h3>What you have to take with you while visiting Los Cabos?</h3>
                    <a href="btn btn-primary">Read More</a>
                     </div>
               </div>
           </div>
       </div>
   </div>
      </>
    );
}

export default Article;
