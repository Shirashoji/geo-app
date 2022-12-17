export async function fetchAllGeoInfo() {
    // const response = await fetch('http://ip-api.com/json/');
    const response = await fetch('http://ip-api.com/json/?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,offset,currency,isp,org,as,asname,reverse,mobile,proxy,hosting,query');
    const data = await response.json();

    // console.log(data);
    // console.log(Object.keys(data));

    return data;
}
