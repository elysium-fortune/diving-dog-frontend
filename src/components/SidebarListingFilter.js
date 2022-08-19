import {useEffect, useState} from 'react';
import { Formik, Field, Form } from 'formik';
import DatePicker from "react-datepicker";
import Select from 'components/shared/Select';
import AdvertiseBox from 'components/AdvertiseBox';
import MapImg from '../assets/images/map-img.jpg';
import SearchIcon from 'assets/images/Search-icon.png';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLocations, listingsSelector } from 'slices/listings';

function SidebarListingFilter() {
    const [filterBy, setFilterBy] = useState([]);
    const [recommeded, setRecommended] = useState([]);
    const [locationOptions, setLocationOptions] = useState([]);

    const dispatch = useDispatch();
    const { locations, loading, hasErrors } = useSelector(listingsSelector);

    useEffect(() => {
       dispatch(fetchLocations());
     }, [dispatch])

    useEffect(() => {
      if(locations.length){
          let locationsTemp = [];
          locations.forEach((item, i) => {
            locationsTemp.push({
              "value": item?.id,
              "label": item?.name
            });
          });
        setLocationOptions([...locationsTemp]);
      }

    }, [locations])

    const popularFilter = ["Free airport shuttle", "All-inclusive", "Sea view", "Villa", "Hotel resort"];
    const propertyClassFilter = [1, 2, 3, 4, 5];
    const budgetFilter = ["Less than $50", "$50 to $100", "$100 to $150", "$150 to $225", "Greater than $225"];
    const guestRatingFilter = ["Any", "Wonderful 4.5+", "Very good 4+", "Good 3.5+"];
    const popularLocationFilter = [ "Marina Cabo San Lucas", "Medano Beach", "The Arch", "Lover's Beach", "Cabo San Lucas Country Club", "Santa Maria Beach", "Cabo del Sol Golf", "Land's End", "San Lucas Bay"];
    const travelExperienceFilter = [
       {
         title:"LGBTQ welcoming",
         description:"See peoperties that pledge to make all guests feel safe, welcome and respected"
       },
       {
         title: "Business-friendly",
         description:"See properties with amenities to help you work comfortably, like WiFi and breakfast."
       },
       {
         title: "Family-friendly",
         description:"See properties that include family essentials like in-room conveniences and activities for the kids"
       }
    ];



    useEffect(() => {

    }, []);


    return(
      <>


      <Formik
    initialValues={{ name: '', email: '', subject: '', content: '' }}
    onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    }}
>
    {({ isSubmitting }) => (
      <>
        <Form>
          <div className='sidebar-map'><img src={MapImg}/></div>
          <div className='location-filter'>
            <h3>Search by location name</h3>
            <div className='location-filter-search'>
              <img src={SearchIcon}/>
              <Select options={locationOptions} />
            </div>
          </div>

        <h3>Filter by</h3>

        <h4>Popular filters</h4>
        {popularFilter.map((item, index) => <>
          <div className='input-popular-filter'>
          <Field id={"popular-filter-"+index} type="checkbox" name="popular-filter[]" value={item} />
          <label className="form-check-label" for={"popular-filter-"+index}>{item}</label>
          </div>
        </>)}

        <h4>Property class</h4>
        <div className='popular-filter-budget'>
        {propertyClassFilter.map((item, index) => <>
          <div className='input-popular-property'>
          <Field id={"property-rating-filter-"+index} type="checkbox" name="property-rating-filter[]" value={item} />
          <label className="form-check-label" for={"property-rating-filter-"+index}>{item}</label>
          </div>
        </>)}
        </div>
        <h4>Your Budget</h4>
        {budgetFilter.map((item, index) => <>
          <div className='input-popular-filter'>
          <Field id={"budget-filter-"+index} type="checkbox" name="budget-filter[]" value={item} />
          <label className="form-check-label" for={"budget-filter-"+index}>{item}</label>
          </div>
        </>)}

        <h4>Guest rating</h4>
        {guestRatingFilter.map((item, index) => <>
          <div className='input-popular-filter'>
          <Field id={"guest-rating-filter-"+index} type="checkbox" name="guest-rating-filter[]" value={item} />
          <label className="form-check-label" for={"budget-filter-"+index}>{item}</label>
          </div>
        </>)}

        <h4>Popular locations</h4>
        {popularLocationFilter.map((item, index) => <>
          <div className='input-popular-filter'>
          <Field id={"popular-location-filter-"+index} type="checkbox" name="popular-location-filter[]" value={item} />
          <label className="form-check-label" for={"budget-filter-"+index}>{item}</label>
          </div>
        </>)}


        <h4>Traveller experience</h4>
        {travelExperienceFilter.map((item, index) => <>
          <div className='input-popular-filter'>
          <Field id={"traveller-experience-filter-"+index} type="checkbox" name="traveller-experience-filter[]" value={item?.title} />
          <label className="form-check-label" for={"traveller-experience-filter-"+index}>

          <h5>{item?.title}</h5>
          <p>{item?.description}</p>
          </label>
          </div>
        </>)}

        </Form>

        <AdvertiseBox title="Advertise" className="sidebar-advertisement" />
        </>

    )}
</Formik>



      </>);
}

export default SidebarListingFilter;
