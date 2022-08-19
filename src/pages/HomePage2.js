import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListings, fetchLocations, fetchLocationsDetailed, listingsSelector } from 'slices/listings';
import Header from 'partials/Header';
import Topbar from 'partials/TopBar';
import Footer from 'partials/Footer';
import Search from 'components/Search';
import Hero from 'components/Hero';
import IconBoxItem from 'components/items/IconBoxItem';
import ExploreItem from 'components/items/ExploreItem';
import FeaturedItem from 'components/items/FeaturedItem';
import SubscribeBox from 'components/SubscribeBox';
import ExploreExperiencesItem from 'components/items/ExploreExperiencesItem';
import TruckIcon from 'assets/images/truck_icon.png';
import CreditCardIcon from 'assets/images/creditcard_icon.png';
import PencilIcon from 'assets/images/pencil_icon.png';
import Accordion from 'react-bootstrap/Accordion';
import Slider from "react-slick";
import RestoreReadMore from '../assets/images/dive-resorts.jpg';
import PlaceholderImage from '../assets/images/add-placeholder.jpg';
import PlaceholderImageFull from '../assets/images/add-place-full.jpg';
import AutherReview from '../assets/images/auther-review.png';
import TripLogo from '../assets/images/trip-logo.png';
import starrating from '../assets/images/start-review.png';
import ExploreItemSlider from "../components/items/ExploreItemSlider";




function HomePage2() {
  const dispatch = useDispatch()
  const { listings, locationsDetailed, loading, hasErrors } = useSelector(listingsSelector)
  const [exploreItems, setExploreItems] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

  };

  useEffect(() => {
        let exploreData = [
        {
            "location":"Los Cabos",
            "title":"What is the diving like in Los Cabos?",
            "description":"A true highlight in Cabo San Lucas is diving with the local sea lions. These playful pups are regulars at many of the area’s dive sites and never fail to amuse and entertain with their mischievous antics.",
            "image":"https://bajasharkexperience.com/wp-content/uploads/2018/06/DSCN4614-1024x768.jpg"
         },
         {
           "location":"Los Cabos",
           "title":"What is the diving like in Los Cabos?",
           "description":"Cabo Pulmo National Park is home to over 6,000 marine species. Principle among these are the area’s famous sea lions. In terms of other large species, the park also welcomes Humpback Whales, Mobulas and Whale Sharks.\r\n\r\n                                    Enormous groupers, turtles and large schools of jacks are easily found. Tropical fish are bountiful and even the occasional reef shark can be found stalking its prey nearby. Underwater photographers will marvel at the diversity of macro life found on this rare reef.\r\n\r\n                                    If you move a bit off the reef, you’ll be pleasantly surprised by garden eels, sticking their head out of the sand to stare at new visitors.",
           "image":"https://d2p1cf6997m1ir.cloudfront.net/media/c83opt/75/9b/759b2f4f79643971d0b3ba65ce8a2741.jpg"},
        {
           "location":"Dos Ojos (Quinatana Roo)",
           "title":"What is the diving like in Los Cabos?",
           "description":"Dos Ojos is part of a flooded cave system located north of Tulum, on the Caribbean coast of the Yucatán Peninsula, in the state of Quintana Roo, Mexico.",
           "image":"https://voyageinstyle.net/wp-content/uploads/2019/07/Dive-DosOjos-Mexico4-1024x683.jpg"
        },
        {
          "location":"Los Cabos",
          "title":"What is the diving like in Los Cabos?",
          "description":"Cabo Pulmo National Park is home to over 6,000 marine species. Principle among these are the area’s famous sea lions. In terms of other large species, the park also welcomes Humpback Whales, Mobulas and Whale Sharks.\r\n\r\n                                    Enormous groupers, turtles and large schools of jacks are easily found. Tropical fish are bountiful and even the occasional reef shark can be found stalking its prey nearby. Underwater photographers will marvel at the diversity of macro life found on this rare reef.\r\n\r\n                                    If you move a bit off the reef, you’ll be pleasantly surprised by garden eels, sticking their head out of the sand to stare at new visitors.",
          "image":"https://d2p1cf6997m1ir.cloudfront.net/media/c83opt/75/9b/759b2f4f79643971d0b3ba65ce8a2741.jpg"},
       {
          "location":"Dos Ojos (Quinatana Roo)",
          "title":"What is the diving like in Los Cabos?",
          "description":"Dos Ojos is part of a flooded cave system located north of Tulum, on the Caribbean coast of the Yucatán Peninsula, in the state of Quintana Roo, Mexico.",
          "image":"https://voyageinstyle.net/wp-content/uploads/2019/07/Dive-DosOjos-Mexico4-1024x683.jpg"
       }
      ];
        setExploreItems([...exploreData])
  }, []);

  useEffect(() => {
     dispatch(fetchListings());
     dispatch(fetchLocationsDetailed());
   }, [dispatch])

  return (
    <>
      <div className="page-wrap home-page">
        <Header />
      <div className="hero-two-section">
        <Hero/>
        <div className="topbar-section topbar-2">
          <Topbar/>
          <Search/>
        </div>
      </div>
      <div className="Rating-bottom-box">
        <p>Cabo San Lucas Diving Reviews</p>
        <span><img src={starrating}/><img src={starrating}/><img src={starrating}/><img src={starrating}/><img src={starrating}/></span>
        <h3>5.0</h3>
        <p><span>180(reviews)</span></p>
      </div>
      <div className="explore-experiences-section explore-experiences-home-2">
      <div className="explore-section-title">More to Explore</div>

          <div className="explore-home-row">
          <Slider {...settings}>
            {listings.length > 0 ? listings.map((item, index) =>
              <>
              <div className="slide-expolore">
                <ExploreItemSlider item={item} key={index}/>
              </div>
              </>) : ""}
          </Slider>
          </div>

        </div>
        <div className="iconbox-section iconbox-home-2">
        <IconBoxItem title="Change or cancel a booking." description="Make updates to your itinerary or cancel a booking." image={PencilIcon} />
        <IconBoxItem title="Use a credit or coupon." description="Apply a coupon code or credit a new trip." image={CreditCardIcon} />
        <IconBoxItem title="Track your refund." description="Check the status of a refund currently in progress." image={TruckIcon} />
      </div>
      <div className="explore-experiences-section explore-discover-home-2">
          <div className="explore-section-title">Discover Diving Dog Experiences</div>
          <div className="row">
            {locationsDetailed[0] ? <>
              <div className="col-md-6">
                <ExploreExperiencesItem item={locationsDetailed[0]} key={0}/>
              </div> </> : ""}

            {locationsDetailed[1] ? <>
              <div className="col-md-6">
                <ExploreExperiencesItem item={locationsDetailed[1]} key={1}/>
              </div> </> : ""}

            {locationsDetailed[2] ? <>
              <div className="col-md-12">
                <ExploreExperiencesItem item={locationsDetailed[2]} key={2}/>
              </div> </> : ""}
          </div>
          <div className="explore-section-discover">
              <h4>Explore this beautiful world with Diving Dog.</h4>
              <p>Discover new places and experiences</p>
          </div>
        </div>

      <div className="diving-info">
          <div className="container">
          <div className="explore-section-title"> More Information</div>
            <div className="row">
              <div className="col-md-6">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>How I can get there?</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                    est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Is there any special discounts available?</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                    est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>What is the best time to visit there?</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                    est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>How many peoples can come in a group?</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                    est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              </div>
              <div className="col-md-6">
                <div className="addvertise-box">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="addvertise-box">
                      <img src={RestoreReadMore} />

                      </div>
                    </div>
                    <div className="col-md-6">
                    <div className="addvertise-box">
                    <img src={PlaceholderImage} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <div className="diving-placeholder">
                <img src={PlaceholderImageFull}/>
              </div>
          </div>
      </div>


      {/* <div className="explore-section explore-home-2">
        <div className="container">
        <div className="explore-section-title">Discover Diving Dog Experiences</div>
          <div className="row">
            {exploreItems.length > 0 ? exploreItems.map((item, index) =>
              <>
              <div className="col-md-4">
                <ExploreItem item={item} key={index}/>
              </div>
              </>) : ""}
          </div>
      </div>
      </div> */}


        <div className="subscribe-section subscribe-section-home-2">
          <div className="row">
            <div className="col-md-6">
               <SubscribeBox/>
            </div>
            <div className="col-md-6">
              <FeaturedItem item={{price: "£150", ...exploreItems[0]}}/>
             </div>
             </div>
        </div>
        <div className="review-section">
          <div className="container">
          <div className="row">
            <div className="col-md-3">
            <div className="trip-logo-ing">
              <img src={TripLogo}/>
              </div>
            </div>
            <div className="col-md-9">
            <div className="explore-section-title">Real Reviews</div>
              <div className="row">
                 <div className="col-md-6">
                   <div className="review-box">
                     <div className="review-img">
                       <img src={AutherReview}/>
                     </div>
                     <div className="review-text">
                       <p><em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo .</em></p>
                        <p><strong> Customer Name </strong><br></br> <strong>Date</strong></p>
                     </div>
                   </div>
                </div>
                <div className="col-md-6">
                <div className="review-box">
                     <div className="review-img">
                       <img src={AutherReview}/>
                     </div>
                     <div className="review-text">
                       <p><em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo .</em></p>
                       <p><strong> Customer Name </strong><br></br> <strong>Date</strong></p>
                     </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
          <Footer />
      </div>
    </>
  );
}

export default HomePage2;
