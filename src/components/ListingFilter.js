import {useEffect, useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'components/shared/Select';
import { useDispatch, useSelector } from 'react-redux'
import { fetchLocations, listingsSelector } from 'slices/listings'


function Search() {
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

    const recommendedByOptions = [
      { value: '1', label: '1' },
      { value: '2', label: '2' },
      { value: '3', label: '3' }
    ];

    useEffect(() => {

    }, []);


    return(
      <>
      <div className="filter-title">What we are paid impacts our sort order.</div>
      <div className="filter-bar-row row">
        <div className="col">
            <div className="form-item location-item-group ">
              <Select options={locationOptions} />
            </div>
        </div>
        <div className="col">
           <div className="form-item traveller-item-group ">
            <Select options={recommendedByOptions} />
          </div>
        </div>
        <div className="col">
          <div className="form-item submit-group ">
            <button type="submit" className="btn btn-primary">View In Map</button>
          </div>
        </div>

      </div>



      </>);
}

export default Search;
