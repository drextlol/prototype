'use strict'

var modules = (function() {
    var self;
    self = {}

    /* Método */
    self.init = (function() {
        self.tabLinks();
        self.modal();
        self.gmaps();
    });

    /* Método de links em tabs */
    self.tabLinks = (function() {
        var ctnLnk, ctnTabLnk, ctnText, ctnTextTab;

        ctnTabLnk = $(".tabs .tabs-links");
        ctnLnk = ctnTabLnk.find('a');
        ctnText = $(".tabs-content");
        ctnTextTab = ctnText.find('.tab');

        $(ctnTabLnk).on('click', 'a', function(event) {
            event.preventDefault();

            var targetLnk = $(this).attr('href');

            ctnLnk.removeClass('active');
            $(this).addClass('active');

            ctnTextTab.removeClass('active');
            ctnText.find(targetLnk).addClass('active');
        });
    });

    /* Método de modal */
    self.modal = (function() {
        var ctnModal, ctnModalText, lnkshow, lnkClose;

        lnkshow = $(".mdl-show");
        lnkClose = $(".mdl-close");
        ctnModal = $(".modal");
        ctnModalText = $(".mdl");

        $(lnkshow).on('click', function(event) {
            event.preventDefault();

            var targetLnk = $(this).attr('href');

            $(ctnModalText).removeClass('active');
            ctnModal.find(targetLnk).addClass('active');
            ctnModal.addClass('active');
        });

        $(lnkClose).on('click', function(event) {
            event.preventDefault();
            ctnModal.removeClass('active');
        });

    });

    /* Método Google Maps */
    self.gmaps = (function() {
        // When the window has finished loading create our google map below
        google.maps.event.addDomListener(window, 'load', loadMap);

        function loadMap() {
        	var mapOptions, mapElement, map, marker, myLatlng;

            // Basic options for a simple Google Map
            // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions

            myLatlng = new google.maps.LatLng(-23.5497058,-46.638752419);

            mapOptions = {
                // How zoomed in you want the map to start at (always required)
                zoom: 17,

                // The latitude and longitude to center the map (always required)
                center: myLatlng, // New York

                // How you would like to style the map. 
                // This is where you would paste any style found on Snazzy Maps.
                styles: [{
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 17
                    }]
                }, {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 20
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 17
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 29
                    }, {
                        "weight": 0.2
                    }]
                }, {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 18
                    }]
                }, {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 16
                    }]
                }, {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 21
                    }]
                }, {
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "visibility": "on"
                    }, {
                        "color": "#000000"
                    }, {
                        "lightness": 16
                    }]
                }, {
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "saturation": 36
                    }, {
                        "color": "#000000"
                    }, {
                        "lightness": 40
                    }]
                }, {
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 19
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 20
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 17
                    }, {
                        "weight": 1.2
                    }]
                }]
            };

            // Get the HTML DOM element that will contain your map 
            // We are using a div with id="map" seen below in the <body>
            mapElement = document.getElementById('map');

            // Create the Google Map using out element and options defined above
            map = new google.maps.Map(mapElement, mapOptions);
            marker = new google.maps.Marker({
				position: myLatlng,
				map: map,
				icon: 'images/pin.png'
			});
        }
    });

    return self;
})();

modules.init();
