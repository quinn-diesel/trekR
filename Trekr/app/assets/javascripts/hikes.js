
console.log("loaded.");

$(document).ready(function(){

    console.log("loaded.");

     var mymap = L.map('mapid').setView([51.505, -0.09], 13);

     L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(mymap);

    L.marker([51.5, -0.09]).addTo(mymap)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();


}); // doc ready
