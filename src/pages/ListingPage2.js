import {useState, useEffect} from 'react';
import Header from 'partials/Header';
import Footer from 'partials/Footer';
import Topbar from 'partials/TopBar';
import Search from 'components/Search';
import SidebarListingFilter from 'components/SidebarListingFilter';
import Hero from 'components/Hero';
import IconBoxItem from 'components/items/IconBoxItem';
import ExploreMapItem from 'components/items/ExploreMapItem';
import FeaturedItem from 'components/items/FeaturedItem';
import SubscribeBox from 'components/SubscribeBox';
import ExploreExperiencesItem from 'components/items/ExploreExperiencesItem';
import TruckIcon from 'assets/images/truck_icon.png';
import CreditCardIcon from 'assets/images/creditcard_icon.png';
import PencilIcon from 'assets/images/pencil_icon.png';
import DownArrow from '../assets/images/Down-Arrow.png';
import { Routes, Route, Link } from "react-router-dom";
import Select from 'components/shared/Select';
import AdvertiseBox from 'components/AdvertiseBox';


function ListingPage2() {
  const [exploreItems, setExploreItems] = useState([]);

  const options = [
    { value: 'recommended', label: 'Recommended' },
    { value: 'latest', label: 'Latest' },
    { value: 'popular', label: 'Popular' }
  ];

  useEffect(() => {
        let exploreData = [
        {
          "title" : "What is diving like in Los Cabos?",
          "location":"Los Cabos",
          "description":"A true highlight in Cabo San Lucas is diving with the local sea lions. These playful pups are regulars at many of the area’s dive sites and never fail to amuse and entertain with their mischievous antics.",
          "image":"https://bajasharkexperience.com/wp-content/uploads/2018/06/DSCN4614-1024x768.jpg"
          },
        {
           "title" : "What is diving like in Los Cabos?",
           "location":"Los Cabos",
           "description":"Cabo Pulmo National Park is home to over 6,000 marine species. Principle among these are the area’s famous sea lions. In terms of other large species, the park also welcomes Humpback Whales, Mobulas and Whale Sharks.\r\n\r\n                                    Enormous groupers, turtles and large schools of jacks are easily found. Tropical fish are bountiful and even the occasional reef shark can be found stalking its prey nearby. Underwater photographers will marvel at the diversity of macro life found on this rare reef.\r\n\r\n                                    If you move a bit off the reef, you’ll be pleasantly surprised by garden eels, sticking their head out of the sand to stare at new visitors.",
           "image":"https://d2p1cf6997m1ir.cloudfront.net/media/c83opt/75/9b/759b2f4f79643971d0b3ba65ce8a2741.jpg"},
        {
           "title" : "What is diving like in Los Cabos?",
           "location":"Dos Ojos (Quinatana Roo)",
           "description":"Dos Ojos is part of a flooded cave system located north of Tulum, on the Caribbean coast of the Yucatán Peninsula, in the state of Quintana Roo, Mexico.",
           "image":"https://voyageinstyle.net/wp-content/uploads/2019/07/Dive-DosOjos-Mexico4-1024x683.jpg"
        },
        {
          "title" : "What is diving like in Los Cabos?",
          "location":"Los Cabos",
          "description":"A true highlight in Cabo San Lucas is diving with the local sea lions. These playful pups are regulars at many of the area’s dive sites and never fail to amuse and entertain with their mischievous antics.",
          "image":"https://bajasharkexperience.com/wp-content/uploads/2018/06/DSCN4614-1024x768.jpg"
          },
        {
           "title" : "What is diving like in Los Cabos?",
           "location":"Los Cabos",
           "description":"Cabo Pulmo National Park is home to over 6,000 marine species. Principle among these are the area’s famous sea lions. In terms of other large species, the park also welcomes Humpback Whales, Mobulas and Whale Sharks.\r\n\r\n                                    Enormous groupers, turtles and large schools of jacks are easily found. Tropical fish are bountiful and even the occasional reef shark can be found stalking its prey nearby. Underwater photographers will marvel at the diversity of macro life found on this rare reef.\r\n\r\n                                    If you move a bit off the reef, you’ll be pleasantly surprised by garden eels, sticking their head out of the sand to stare at new visitors.",
           "image":"https://d2p1cf6997m1ir.cloudfront.net/media/c83opt/75/9b/759b2f4f79643971d0b3ba65ce8a2741.jpg"},
        {
           "title" : "What is diving like in Los Cabos?",
           "location":"Dos Ojos (Quinatana Roo)",
           "description":"Dos Ojos is part of a flooded cave system located north of Tulum, on the Caribbean coast of the Yucatán Peninsula, in the state of Quintana Roo, Mexico.",
           "image":"https://voyageinstyle.net/wp-content/uploads/2019/07/Dive-DosOjos-Mexico4-1024x683.jpg"
        },
        {
          "title" : "What is diving like in Los Cabos?",
          "location":"Los Cabos",
          "description":"A true highlight in Cabo San Lucas is diving with the local sea lions. These playful pups are regulars at many of the area’s dive sites and never fail to amuse and entertain with their mischievous antics.",
          "image":"https://bajasharkexperience.com/wp-content/uploads/2018/06/DSCN4614-1024x768.jpg"
          },
        {
          "title" : "What is diving like in Los Cabos?",
           "location":"Los Cabos",
           "description":"Cabo Pulmo National Park is home to over 6,000 marine species. Principle among these are the area’s famous sea lions. In terms of other large species, the park also welcomes Humpback Whales, Mobulas and Whale Sharks.\r\n\r\n                                    Enormous groupers, turtles and large schools of jacks are easily found. Tropical fish are bountiful and even the occasional reef shark can be found stalking its prey nearby. Underwater photographers will marvel at the diversity of macro life found on this rare reef.\r\n\r\n                                    If you move a bit off the reef, you’ll be pleasantly surprised by garden eels, sticking their head out of the sand to stare at new visitors.",
           "image":"https://d2p1cf6997m1ir.cloudfront.net/media/c83opt/75/9b/759b2f4f79643971d0b3ba65ce8a2741.jpg"},
        {
           "title" : "What is diving like in Los Cabos?",
           "location":"Dos Ojos (Quinatana Roo)",
           "description":"Dos Ojos is part of a flooded cave system located north of Tulum, on the Caribbean coast of the Yucatán Peninsula, in the state of Quintana Roo, Mexico.",
           "image":"https://voyageinstyle.net/wp-content/uploads/2019/07/Dive-DosOjos-Mexico4-1024x683.jpg"
        }
      ];
        setExploreItems([...exploreData])
  }, []);


  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      <div className="page-wrap listing-page">
        <Header />
      <div className="topbar-section listing-two-page">
        <div className='ting-top-inner'>
        <Topbar/>
        <Search/>
        </div>
      </div>



    <div className={isActive ? "listingTwoContent" : "listingTwoContent active"}>
      <div className="container main-content">
        <div className="row main-content-row">
            <div className="explore-filters ">
               <SidebarListingFilter/>
            </div>
            <div className="explore-section sort-order">
                <div className="row sort-order-row">
                  <div className="col">
                    <h2>What we are paid impacts our order.</h2>
                  </div>
                  <div className="col">
                    <div className='recom-selctr'>
                      <div className='recommend-selector'>
                        <img src={DownArrow}/>
                        <Select options={options} />
                        </div>
                        <div className='togglebtn'>
                          <button onClick={handleToggle}>
                            <span></span>
                            <span></span>
                            <span></span>
                          </button>
                        </div>
                      </div>
                  </div>
                </div>
                <div className="order-explore">
                <div className="row" >
                  {exploreItems.length > 0 ? exploreItems.map((item, index) =>
                    <>
                    <div className="col-md-6">
                      <ExploreMapItem item={{bookEnabled:true, dateOfOpening: "Aug 2022" ,price: "£150", ...exploreItems[0]}} key={index}/>
                    </div>
                    </>) : ""}

                    <div className="col-md-12 viewallbtn ">
                        <button className="btn btn-primary">View All</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className="advertise-section-bottom">
          <div className="advertise-section">
            <AdvertiseBox title="Advertisement" className="full-banner-advertisement" />
          </div>
        </div>
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
      </div>
      </div>



          <Footer />
      </div>
    </>
  );
}

export default ListingPage2;
