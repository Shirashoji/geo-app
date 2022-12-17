export async function fetchGeoLoc() {
  const response = await fetch('http://ip-api.com/json/');
  const data = await response.json();
  return {
    lat: data.lat,
    lng: data.lon,
  };
}