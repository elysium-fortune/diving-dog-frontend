import {useState, useEffect} from 'react';
import Header from 'partials/Header';
import Footer from 'partials/Footer';
import FeaturedItem from 'components/items/FeaturedItem';
import SubscribeBox from 'components/SubscribeBox';
import { Routes, Route, Link } from "react-router-dom";
import AdvertiseBox from 'components/AdvertiseBox';

import DetailImageFirst from 'assets/images/detailtwo-1.jpg';
import DetailImageSmallOne from 'assets/images/detailtwo-2.jpg';
import DetailImageSmalltwo from 'assets/images/detailtwo-3.jpg';
import DetailImageSmallthree from 'assets/images/detailtwo-4.jpg';
import DetailImageSmallFive from 'assets/images/detailtwo-5.jpg';
import LoactionMapDetail from 'assets/images/map-detail.jpg';
import starrating from '../assets/images/start-review.png';
import Paymenticon1 from 'assets/images/Amex.jpg';
import Paymenticon2 from 'assets/images/Discover.jpg';
import Paymenticon3 from 'assets/images/Master.jpg';
import Paymenticon4 from 'assets/images/Visa.jpg';
import Paymenticon5 from 'assets/images/afterpay.jpg';
import Accordion from 'react-bootstrap/Accordion';
import SeeLeftArrow from 'assets/images/Down-Arrow.png';
import locationgrey from 'assets/images/Location-grey.png';
import {
  TabContent, TabPane, Nav,
  NavItem, NavLink, Row, Col
} from 'reactstrap';
import classnames from 'classnames';

function ListingDetail2() {

  // State for current active Tab
  const [currentActiveTab, setCurrentActiveTab] = useState('1');
  
  // Toggle active state for Tab
  const toggle = tab => {
      if (currentActiveTab !== tab) setCurrentActiveTab(tab);
  }


  const [exploreItems, setExploreItems] = useState([]);

  const options = [
    { value: 'recommended', label: 'Recommended' },
    { value: 'latest', label: 'Latest' },
    { value: 'popular', label: 'Popular' }
  ];
  const location =  "Los Cabos";

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



  return (
    <>
      <div className="page-wrap ">
        <Header />
    <div className='listing-detail-2'>
      <div className="container">
        <div className='seeall-back'>
              <a href="#"><img src={SeeLeftArrow}/>See All Properties</a>
        </div>
        <div className="row Property-img-row">
          <div className='col-6 Property-img-box property-list-one'>
          <div className='property-detail-big-img'>
            <div className="location-badge"> <img src={locationgrey}/>{location}</div>
            <img src={DetailImageFirst}/>
            </div>

          </div> 
          <div className='col-6 Property-img-box property-list-two'>
            <div className='row'>
                <div className='col-6 Property-img-box'>
                <div className='property-detail-img'><img src={DetailImageSmallOne}/></div>
                </div> 
                <div className='col-6 Property-img-box'>
                <div className='property-detail-img'><img src={DetailImageSmalltwo}/></div>
                </div>
                <div className='col-6 Property-img-box'>
                <div className='property-detail-img'><img src={DetailImageSmallthree}/></div>
                </div>
                <div className='col-6 Property-img-box'>
                <div className='property-detail-img'><img src={DetailImageSmallFive}/></div>
                </div>                
            </div> 
            <div className='show-all-pic' > <a href="#" className='btn btn-primary'>Show all photos</a></div>            
          </div>         
        </div>
        <div className='detail-three-tabs'>
        <div className='main-detail-tab'>
			<Nav tabs>
				<NavItem>
					<NavLink	className={classnames({	active: currentActiveTab === '1'	})}
						onClick={() => { toggle('1'); }}
					>
						Overview 
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						className={classnames({
							active:
								currentActiveTab === '2'
						})}
						onClick={() => { toggle('2'); }}
					>
						Policies
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						className={classnames({
							active:
								currentActiveTab === '3'
						})}
						onClick={() => { toggle('3'); }}
					>
						Reviews
					</NavLink>
				</NavItem>
			</Nav>
      <div className='review-nav-tab'>
       <p>5.0/5 Excellent <span>  <span><img src={starrating}/><img src={starrating}/><img src={starrating}/><img src={starrating}/><img src={starrating}/></span> <a href="#">See All 180 Reviews</a> </span></p>
      </div>
</div>
			<TabContent activeTab={currentActiveTab}>
				<TabPane tabId="1">
					<Row>
					 <div className='tabbing-box tabbing-pop-first'>
            <div className='row'>
                <div className='col-md-8'>
                    <div className='tab-cont'>
                      <div className=' tabbing-pop-first-text'>
                        <h3>What is the diving like in Los Cabos?</h3>
                        <p>A true highlight in Cabo San Lucas is diving with the local sea lions. These playful pups are regulars at many of the area's dive sites and never fail to amuse and entertain with their mischievous antics. In Cabo, water temperatures range from 68°F/20°C in March to 84°F/29°C in August/September.</p>
                      </div>
                        <div className='Popular-Amenities'>
                            <h4>Popular Amenities</h4>
                            <ul>
                                <li>All-inclusive</li>
                                <li>Spa</li>
                                <li>Free WiFi</li>
                                <li>Pool</li>
                            </ul>
                            <ul>
                                <li>Parking included</li>
                                <li>Air conditioning</li>
                                <li>Laundry</li>
                                <li>Restaurant</li>
                            </ul>
                            <a href="#" className='see-all-list'> See All </a>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='tab-map'>
                    <div className='tab-map-img'><img src={LoactionMapDetail}/></div>
                    <p>Cabo San Lucas, Baja California Sur, Mexico</p>
                    <a href="#" className='btn btn-primary'>View in Map</a>
                    </div>
                </div>
                <div className='col-12 full-Amenities'>
                <div className='Popular-Amenities'>
                    <div className='popular-bottom-list column-8'>
                        <h4>Cleaning and safety practices</h4>
                        <div className='popular-ul-box'>
                        <div className='popular-ul'>
                            <ul>
                                <li>Cleaned with disinfectant</li>
                                <li>Hand sanitiser provided</li>
                                <li>Personal protective equipment</li>
                                <li>Social distancing</li>
                            </ul>
                            <a href="#" className='see-all-list'> See All </a>
                            </div>
                            <div className='popular-ul'>
                            <ul>
                                <li>Safety measures</li>
                                <li>Masks available</li>
                                <li>Temperature checks available</li>
                                <li>Enhanced cleanliness measures</li>
                            </ul>
                            </div>
                            </div>
                        </div>
                        <div className='popular-bottom-list column-4'>
                        <h4>Explore the area</h4>
                        
                        <ul>
                            <li>Location Name <span>18 min drive</span></li>
                            <li>Other Location Name <span>20 min drive</span></li>
                            <li>Location Name <span>20 min drive</span></li>
                            <li>Location Name <span>24 min drive</span></li>
                        </ul>
                        
                        </div>
                    </div>
                    <div className='book-now-btn'>
                        <h3>£500</h3>
                        <a href="#" className='btn btn-pprimary'>Book Now</a>
                    </div>
                </div>
            </div>
        </div>
					</Row>
				</TabPane>
				<TabPane tabId="2">
					<Row>
            <div className='tabbing-box'>
            <div className='tabbing-policy-box'>
            <div className='row'>
                <div className='col tab-policy-left'>
                   <h3>Policies</h3>
                </div>
                <div className='check-tab-list'>
                <div className='col'>
                <div className='Popular-Amenities'>
                    <h4>Check-in</h4>                    
                    <ul>
                        <li>Check-in from 4:00 PM - midnight</li>
                        <li>Late check-in subject to availability</li>
                        <li>Minimum check-in age - 18 </li>
                     </ul>
                    </div>
                   
                </div>
                <div className='col'>
                <div className='Popular-Amenities'>
                    <h4>Check-OUt</h4>
                    <ul>
                        <li>Check-out before 11:00 AM</li>
                     </ul>
                     </div>
                </div>
                <div className='col'>
                <div className='Popular-Amenities'>
                    <h4>Children and extra beds</h4>
                    <ul>
                        <li>Children are welcome</li>
                        <li>Rollaway/extra beds are available for £10/N</li>
                        <li>Free cots (infant beds)</li>
                     </ul>
                     </div>
                </div>
                <div className='col'>
                <div className='Popular-Amenities'>
                    <h4>Pets</h4>
                    <ul>
                        <li>No pets or service animals allowed</li>
                     </ul>
                     </div>
                </div>
                <div className='col'>
                <div className='Popular-Amenities'>
                    <h4>Access methods</h4>
                    <ul>
                        <li>Staffed front desk</li>
                     </ul>
                     </div>
                </div>
                <div className='col'>
                <div className='Popular-Amenities'>
                    <h4>Special check-in instructions</h4>
                    <ul>
                        <li>Front desk staff will greet guests on arrival</li>
                     </ul>
                     </div>
                </div>
                <div className='col-12'>
                <div className='Popular-Amenities'>
                    <h4>Payment types at the property</h4>
                    <img src={Paymenticon1}/>
                    <img src={Paymenticon2}/>
                    <img src={Paymenticon3}/>
                    <img src={Paymenticon4}/>
                    <img src={Paymenticon5}/>

                    </div>
                </div>
                </div>
               
            </div>
            </div>
        </div>
            <div className='tabbing-important-info-box'>
            <div className='row'>

                <div className='col tab-policy-left'>
                    <h3>Important<br/>
                    information</h3>
                </div>
                <div className='check-tab-list'>
                <div className='Popular-Amenities'>
                   <h4>Optional extras</h4>
                   <p>The following fees and deposits are charged by the property at the time of service, check-in or check-out. </p>
                   <p>- Fee for buffet breakfast: USD 42 for adults and USD 21 for children (approximately)
                    - Rollaway bed fee: USD 26.0 per night.</p>
                    <p>The above list may not be comprehensive. Fees and deposits may not include tax and are subject to change. </p>

                    <h4>You need to know</h4>
                    <p>Extra-person charges may apply and vary depending on property policy. </p>
                    <p>Government-issued photo identification and a credit card, debit card or cash deposit may be required at check-in for incidental charges. </p>
                    <p>Special requests are subject to availability upon check-in and may incur additional charges; special requests cannot be guaranteed. </p>
                    <p>This property accepts credit cards, debit cards and cash. </p>
                    <p>Safety features at this property include window guards. </p>

                    <h4>We should mention</h4>
                    <p>Reservations are required for massage services and spa treatments; reservations can be made by contacting the property prior to arrival, using the
                    contact information on the booking confirmation.</p>
                    <p>Only registered guests are allowed in the guestrooms.</p>
                    <p>The property has connecting/adjoining rooms, which are subject to availability and can be requested by contacting the property using the number
                        on the booking confirmation.</p>
                        <p>No pets and no service animals are allowed at this property.</p>
                        <p>Guests under 16 years old are not allowed in the spa.</p>
                    
                </div>
                </div>
            </div>
        </div>
          <div className='tabbing-faq-box'>
          <div className='tabbing-policy-box'>
            <div className='row'>
             <div className='col tab-policy-left'>
                <h3>FAQs</h3>
              </div>
              <div className='check-tab-list'>
       <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>What is Major Keys to Success?</Accordion.Header>
                  <Accordion.Body>Lorem Khaled Ipsum is a major key to success. Major key, don’t fall for the trap, stay focused. It’s the ones closest to you that want to see you fail.
                  I told you all this before, when you have a swimming pool, do not use chlorine, use salt water.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>To succeed you must believe. When you believe?</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                    est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>You will succeed. Egg whites, turkey sausage, wheat toast, water?</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                    est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Lorem Khaled Ipsum is a major key to success. Major key?</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                    est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>It’s important to use cocoa butter. It’s the key to more success?</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                    est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>Wraith talk. I’m giving you cloth talk, cloth. Special cloth alert, cut from a special cloth.</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                    est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion> 
              </div>
            </div>
          </div>
      </div>
					</Row>
				</TabPane>
				<TabPane tabId="3">
					<Row>
        <div className='tabbing-box'>
          <div className='tabbing-review-box'>
            <div className='row'>
             <div className='col tab-policy-left'>
                <h2>5.0</h2>
                <span>Excellent</span>
                <p>180 Reviews</p>
                <p>Verified Reviews</p>
                <a href="#" className='btn btn-primary'>Write a review</a>
              </div>
              <div className='check-tab-list'>
                <div className='Popular-Amenities'>
                    <h4>  5/5 Excellent      <span>8 Mar 2022</span></h4>  
                    <p>Lorem Khaled Ipsum is a major key to success. Major key, don’t fall for the trap, stay focused. It’s the ones closest to you that want to see you fail.
                    I told you all this before, when you have a swimming pool, do not use chlorine, use salt water<br/>
                    <strong>- Name Surname</strong></p>
                    <p>Stayed 1 week in Mar 2022<br/>
                    Liked: Cleanliness, staff & service, amenities, property conditions & facilities.</p>
                </div>
                <div className='Popular-Amenities'>
                    <h4>  5/5 Excellent      <span>8 Mar 2022</span></h4>  
                    <p>Lorem Khaled Ipsum is a major key to success. Major key, don’t fall for the trap, stay focused. It’s the ones closest to you that want to see you fail.
                    I told you all this before, when you have a swimming pool, do not use chlorine, use salt water<br/>
                    <strong>- Name Surname</strong></p>
                    <p>Stayed 1 week in Mar 2022<br/>
                    Liked: Cleanliness, staff & service, amenities, property conditions & facilities.</p>
                </div>
                <div className='Popular-Amenities'>
                    <h4>  5/5 Excellent      <span>8 Mar 2022</span></h4>  
                    <p>Lorem Khaled Ipsum is a major key to success. Major key, don’t fall for the trap, stay focused. It’s the ones closest to you that want to see you fail.
                    I told you all this before, when you have a swimming pool, do not use chlorine, use salt water<br/>
                    <strong>- Name Surname</strong></p>
                    <p>Stayed 1 week in Mar 2022<br/>
                    Liked: Cleanliness, staff & service, amenities, property conditions & facilities.</p>
                </div>
                <div className='Popular-Amenities'>
                    <h4>  5/5 Excellent      <span>8 Mar 2022</span></h4>  
                    <p>Lorem Khaled Ipsum is a major key to success. Major key, don’t fall for the trap, stay focused. It’s the ones closest to you that want to see you fail.
                    I told you all this before, when you have a swimming pool, do not use chlorine, use salt water<br/>
                    <strong>- Name Surname</strong></p>
                    <p>Stayed 1 week in Mar 2022<br/>
                    Liked: Cleanliness, staff & service, amenities, property conditions & facilities.</p>
                </div>
                <a href="#" className='btn btn-primary'>See all reviews</a>
              </div>
            </div>
          </div>
        </div>
					</Row>
				</TabPane>
			</TabContent>
		</div >

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

export default ListingDetail2;
