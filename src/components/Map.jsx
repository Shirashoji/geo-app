import { GoogleMap, LoadScript, InfoWindow, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "50vh",
};



function Map(props) {
  const { center } = props;

  return (
    <>
      <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={17}
        >
          <Marker position={center} />

        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default Map;