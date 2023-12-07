mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
container: "map", // container ID
style:"mapbox://styles/mapbox/streets-v12",
center: listing.geometry.coordinates, // starting position [lng, lat]
zoom: 8 // starting zoom
});

const marker = new mapboxgl.Marker({color:"red"})
.setLngLat(listing.geometry.coordinates)
.addTo(map);