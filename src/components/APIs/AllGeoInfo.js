// export async function fetchAllGeoInfo() {
async function fetchAllGeoInfo() {
    const response = await fetch('http://ip-api.com/json/?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,offset,currency,isp,org,as,asname,reverse,mobile,proxy,hosting,query');
    const data = await response.json();
    // return JSON.parse(data);
    console.log(JSON.parse(data));
}
fetchAllGeoInfo()