export async function fetchAllGeoInfo() {
    const response = await fetch('/api/geo-all');
    const data = await response.json();

    // console.log(data);
    // console.log(Object.keys(data));

    return data;
}
