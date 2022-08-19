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
import { Routes, Route, Link } from "react-router-dom";


function HomePage() {
  const dispatch = useDispatch()
  const { listings, locationsDetailed, loading, hasErrors } = useSelector(listingsSelector)
  const [exploreItems, setExploreItems] = useState([]);

  useEffect(() => {
        let exploreData = [
          {
            "title":"Los Cabos",
            "description":"A true highlight in Cabo San Lucas is diving with the local sea lions. These playful pups are regulars at many of the area’s dive sites and never fail to amuse and entertain with their mischievous antics.",
            "image":"https://bajasharkexperience.com/wp-content/uploads/2018/06/DSCN4614-1024x768.jpg"
          },
         {
           "title":"Los Cabos",
           "description":"Cabo Pulmo National Park is home to over 6,000 marine species. Principle among these are the area’s famous sea lions. In terms of other large species, the park also welcomes Humpback Whales, Mobulas and Whale Sharks.\r\n\r\n                                    Enormous groupers, turtles and large schools of jacks are easily found. Tropical fish are bountiful and even the occasional reef shark can be found stalking its prey nearby. Underwater photographers will marvel at the diversity of macro life found on this rare reef.\r\n\r\n                                    If you move a bit off the reef, you’ll be pleasantly surprised by garden eels, sticking their head out of the sand to stare at new visitors.",
           "image":"https://d2p1cf6997m1ir.cloudfront.net/media/c83opt/75/9b/759b2f4f79643971d0b3ba65ce8a2741.jpg"},
        {
           "title":"Dos Ojos (Quinatana Roo)",
           "description":"Dos Ojos is part of a flooded cave system located north of Tulum, on the Caribbean coast of the Yucatán Peninsula, in the state of Quintana Roo, Mexico.",
           "image":"https://voyageinstyle.net/wp-content/uploads/2019/07/Dive-DosOjos-Mexico4-1024x683.jpg"
        }];
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
      <div className="topbar-section home--1">
        <Topbar/>
        <Search/>
      </div>
        <Hero/>
      <div className="explore-section">
          <div className='container-outer'>
            <h3 className="sub-heading-dvdog">More to Explore</h3>
            <div className="row">
              {listings.length > 0 ? listings.map((item, index) =>
                <>
                <div className="col-md-4 expore-column">
                  <ExploreItem item={item} key={index}/>
                </div>
                </>) : ""}
            </div>
          </div>
      </div>
      <div className="iconbox-section">
        <IconBoxItem title="Change or cancel a booking." description="Make updates to your itinerary or cancel a booking." image={PencilIcon} />
        <IconBoxItem title="Use a credit or coupon." description="Apply a coupon code or credit a new trip." image={CreditCardIcon} />
        <IconBoxItem title="Track your refund." description="Check the status of a refund currently in progress." image={TruckIcon} />
      </div>
      <div className="explore-experiences-section home-1">
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
        <div className="subscribe-section">
          <div className='row'>
            <div className='col-md-6'>
              <SubscribeBox/>
            </div>
            <div className='col-md-6'>
              <FeaturedItem item={{price: "£150", ...exploreItems[0]}}/>
            </div>
          </div>
        </div>

          <Footer />
      </div>
    </>
  );
}

export default HomePage;
