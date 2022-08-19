import {useState, useEffect} from 'react';

function AdvertiseBox({className, title}) {
  return(
    <>
    <div className={"advertise-box "+className}>
        {title ? title: "Advertisement"}
    </div>
    </>
  )
}

export default AdvertiseBox;
