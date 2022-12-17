import { useEffect, useState } from "react";
import {fetchGeoLoc} from "./APIs/GeoIP";
import Map from "./Map";


function Main() {
    
    const [geo, setGeo] = useState(null);
    useEffect(() => {
        fetchGeoLoc().then((geo) => {
            setGeo(geo);
        });
    }, []);

    
    
    const center = {
      lat: 35.6531143,
      lng: 139.5434701,
    };


    return (
        <Map center={geo}/>
    );
}

export default Main;
