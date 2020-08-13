// Map
var mymap = L.map('mapid').setView([39.9394040, 116.4000926], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 15,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiaGV5b3VsaSIsImEiOiJjam5yYXlrcWswNXhqM2twcDdybGVkcjBkIn0.J-EmBvUasDMfvES2SEVldQ'
}).addTo(mymap);

var marker = L.marker([39.9394040, 116.4000926]).addTo(mymap);
