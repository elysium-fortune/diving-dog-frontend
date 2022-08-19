import {useState, useEffect} from 'react';
import Header from 'partials/Header';
import Footer from 'partials/Footer';
import Topbar from 'partials/TopBar';
import Search from 'components/Search';
import ListingFilter from 'components/ListingFilter';
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
        },
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
        },
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
        }
      ];
        setExploreItems([...exploreData])
  }, []);



  return (
    <>
      <div className="page-wrap listing-page">
        <Header />
      <div className="topbar-section">
        <Topbar/>
        <Search/>
        <ListingFilter/>
      </div>
      <div className="explore-section">
          <div className="explore-section-title">More to Explore</div>
          <div className="row">
            {exploreItems.length > 0 ? exploreItems.map((item, index) =>
              <>
              <div className="col-md-4">
                <ExploreItem item={item} key={index}/>
              </div>
              </>) : ""}
          </div>
      </div>


        <div className="subscribe-section">
            <SubscribeBox/>
            <FeaturedItem item={{price: "£150", ...exploreItems[0]}}/>
        </div>

          <Footer />
      </div>
    </>
  );
}

export default HomePage;
