export async function fetchGeoLoc() {
  const response = await fetch('/api/geo');
  const data = await response.json();
  
  return {
    lat: data.lat,
    lng: data.lon,
  };
}