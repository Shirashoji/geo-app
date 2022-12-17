import { useEffect, useState } from "react";
import { fetchGeoLoc } from "./APIs/GeoLocation";
import { fetchAllGeoInfo } from "./APIs/AllGeoInfo";
import Loading from "./Loading";
import BasicTable from "./Table";
import Map from "./Map";


function Main() {

    const [geo, setGeo] = useState(null);
    const [geoinfo, setGeoInfo] = useState(null);

    useEffect(() => {
        fetchGeoLoc().then((geo) => {
            setGeo(geo);
        });
    }, []);

    useEffect(() => {
        fetchAllGeoInfo().then((geoinfo) => {
            setGeoInfo(geoinfo);
        });
    }, []);

    if (geo == null || geoinfo == null) {
        return <Loading />;
    }
    return (
        <>
            <Map center={geo} />
            <BasicTable info={geoinfo} />
        </>
    );
}

export default Main;
