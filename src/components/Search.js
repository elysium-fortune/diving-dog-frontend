import {useEffect, useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'components/shared/Select';
import DateIcon from 'assets/images/Date.png';
import LocationIcon from 'assets/images/Location-icon.png';
import UserIcon from 'assets/images/user-icon.png';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLocations, fetchSearchResult, listingsSelector } from 'slices/listings';




function Search() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [locationOptions, setLocationOptions] = useState([]);
    const [travellers, setTravellers] = useState([]);
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

    }, [locations]);

    const handleSearchSubmit = () => {
        dispatch(fetchSearchResult());
    };

    // const locationOptions = [
    //   { value: '1', label: 'Los Cabos' },
    //   { value: '2', label: 'California' },
    //   { value: '3', label: 'Dubai' }
    // ];

    const travellerOptions = [
      { value: '1', label: '1' },
      { value: '2', label: '2' },
      { value: '3', label: '3' }
    ];

    useEffect(() => {
      //setLocations(locationOptions);
    }, []);


    return(
      <>
          <div className="search-bar-row">
            <div className='container'>
              <div className='row'>
                <div className="col-md-3 searchCol">
                    <div className="form-item location-item-group ">
                      <label>Things to do in</label>
                      <img src={LocationIcon}/>
                      <Select options={locationOptions}  />
                    </div>
                </div>
                <div className="col searchCol">
                    <div className="form-item start-date-item-group ">
                    <img src={DateIcon}/>
                        <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />
                    </div>
                </div>
                <div className="col searchCol">
                    <div className="form-item end-date-item-group ">
                    <img src={DateIcon}/>
                      <DatePicker selected={endDate} onChange={(date:Date) => setEndDate(date)} />
                    </div>
                </div>
                <div className="col searchCol">
                  <div className="form-item traveller-item-group ">
                  <img src={UserIcon}/>
                    <Select options={travellerOptions} />
                  </div>
                </div>
                <div className="col searchCol">
                  <div className="form-item submit-group ">
                    <button type="submit" className="btn btn-primary" onClick={handleSearchSubmit}>Search</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </>);
}

export default Search;
