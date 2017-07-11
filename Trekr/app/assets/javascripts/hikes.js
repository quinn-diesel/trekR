
console.log("loaded.");


var sm;  // scribblemaps object

$(document).ready(function(){

    console.log("loaded.");

window.onresize = function(event){
    resizeDiv();
}

function resizeDiv(){
    vpw = $(window).width();
    $('#mapid').css({'width': vpw});
}

if( $('.hikes.index').length ){
  // page-specific code to run

    //
    // var mymap = L.map('mapid').setView([-33.804122, 151.246096], 13);
    //
    // var googleTerrain = L.tileLayer('http://{s}.google.com/vt/key={accessToken}&lyrs=p&x={x}&y={y}&z={z}',{
    //     maxZoom: 20,
    //     subdomains:['mt0','mt1','mt2','mt3'],
    //     accessToken: 'AIzaSyB4e1KgLbKlIWzhOiPoJcBW6v_02e6fwCg'
    // }).addTo(mymap);
    //
    //
    // L.marker([-33.804122, 151.246096]).addTo(mymap)
    //    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    //    .openPopup();
    //
    //
    // var points = [
    //     [-33.804122, 151.246096],
    //     [-33.806985, 151.251374],
    //     [-33.798827, 151.282705]
    // ];
    //
    // var leafletPoints = [];
    //
    // for(var i = 0; i < points.length; i++) {
    //   var point = points[i];
    //   var p = new L.LatLng(point[0], point[1]);
    //   leafletPoints.push( p );
    // }
    //
    // var firstpolyline = new L.Polyline(leafletPoints, {
    //     color: 'red',
    //     weight: 3,
    //     opacity: 0.5,
    //     smoothFactor: 1
    // });
    // firstpolyline.addTo(mymap);

    // Try to init Scribble Maps after Leaflet is loaded




    window.scribblemaps = {
          settings: {
              baseAPI: 'leaflet',
            //   baseLayerType: "<YourMapTypeID>",
            //   token: 'AIzaSyB4e1KgLbKlIWzhOiPoJcBW6v_02e6fwCg',
              accessToken: 'AIzaSyB4e1KgLbKlIWzhOiPoJcBW6v_02e6fwCg',
              baseLayer: 'http://mt0.google.com/vt/key=AIzaSyB4e1KgLbKlIWzhOiPoJcBW6v_02e6fwCg&lyrs=p&x={x}&y={y}&z={z}',
               //'https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/256/{z}/{x}/{y}@2x?access_token=<Your Mapbox Token>'
          }
      }

    //   var sm = new ScribbleMap(document.getElementById('mapid'));
             sm = new ScribbleMap('mapid', {
                searchControl: true,
                lineSettingsControl: true,
                mapTypeControl: true,
                fillColorControl: false,
                lineColorControl: false,
                zoomControl: true,
                tools: ["menu", "edit", "drag", "eraser", "fill",
                        "scribble", "line",
                        "polygon", "label", "marker", "image"],
                defaultTool: "edit",
                startCenter: [ -33.804122, 151.246069 ],
                startZoom: 7,
                // startMapType: "road",
                disableZoom: false,
                settings: {
                    baseAPI: 'leaflet',
                    accessToken: 'AIzaSyB4e1KgLbKlIWzhOiPoJcBW6v_02e6fwCg',
                    baseLayer: 'http://mt0.google.com/vt/key=AIzaSyB4e1KgLbKlIWzhOiPoJcBW6v_02e6fwCg&lyrs=p&x={x}&y={y}&z={z}'
                },

            });



        // sm.map.addListener("overlay_added", function(event){
        //     var overlay = event.data;
        //     var coords = overlay.getCoords();
        //     console.log(coords);
        // });

        $('#saveHike').on('click', function(){

            // Save hike path if a path has been drawn
            var overlays = sm.map.getOverlays();

            if(overlays.length > 0){
                // TODO: Make sure this overlay is actually a path/line ??
                var first_path = overlays[0];
                var path_coords = first_path.getCoords();

                var ajax_data = [];

                for (var i = 0; i < path_coords.length; i++) {
                    var coord = path_coords[i];
                    // console.log('lat:', coord.lat(), 'lng:', coord.lng());
                    var point = {
                      lat: coord.lat(),
                      lng: coord.lng()
                    };
                    ajax_data.push( point );
                }
                console.log(ajax_data);

                // Make AJAX call using $.ajax()

                // Define Rails route to accept a POST to some url i.e. ""/hike/savepoints"

                // In the action for that route, process params (try a raise "hell")

                // Do an each over this array of objects and Waypoint.create for each



            } // overlays.length test

        });





}
//
// window.scribblemaps = {
//     settings:
//         {
//             "baseAPI": "google",
//             "key": "AIzaSyB4e1KgLbKlIWzhOiPoJcBW6v_02e6fwCg"
//         }
// }
//
//
//
// window.onload = function () {
//             var sm = new ScribbleMap(document.getElementById('mapid'));
//         }
// }

}); // doc ready
//
// var gmapsLoaded = function(){
//     window.scribblemaps = {
//        settings:
//            {
//                "baseAPI": "google",
//                "key": "AIzaSyB4e1KgLbKlIWzhOiPoJcBW6v_02e6fwCg"
//            }
//     }
//     var sm = new ScribbleMap(document.getElementById('mapid'));
// };
