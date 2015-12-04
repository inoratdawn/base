/**** Add application wide javascripts below this point  ******/

var app = {

    init: function() {
        this.initBase();
        this.initSocialr();
        this.initOwlCarousel();
        //this.initGoogleMaps();
    },

    // Mobile Nav
    initBase: function() {

        // Scroll To
        $('#demo-navigation ul li a').click(function(event) {
            //$('#demo-navigation ul li a').removeClass('current');
            //$(this).addClass('current');
            $.scrollTo($(this).attr("href"), {
                duration: 500
            });
            return false;
        });
        
    },

    initSocialr: function(){
        
        if(!$('#socialr').socialr) return false;
        
        $("#socialr").socialr({
            title: "BASE.DEV",
            url: "http://google.com/",
            shares: ['twitter','facebook','linkedin','googleplus'],
            via: "inoratdawn",
            hashtags: "base,dev,localhost",
            icon: true,
            count: false,
            label: true
        });
        
        /*$("#socialr_2").socialr({
            title: "BASE.DEV",
            url: "http://google.com/",
            shares: ['twitter','facebook','linkedin','googleplus'],
            hashtags: "base,dev,localhost",
            icon: true,
            count: false
        });
        
        $("#socialr_3").socialr({
            title: "BASE.DEV",
            url: "http://google.com/",
            shares: ['twitter','facebook','linkedin','googleplus'],
            hashtags: "base,dev,localhost",
            icon: true,
            count: false
        });*/
        
    },
    
    initOwlCarousel: function(){
        
        if(!$('.owl-carousel').owlCarousel) return false;
        
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 1,
            nav: true,
            items: 1,
            dots: true,
            nav: false,
            autoplay: false
        });
    },
    
    initGoogleMaps: function() {
        
        
        var locations = [
            { 
                "title": "Home", 
                "latitude": "52.514108", 
                "longitude": "-1.834418", 
                "pin": "pin", 
                "icon": "<i class='fa fa-star'></i>",
                "color": "blue"
            },
            { 
                "title": "Star City", 
                "latitude": "52.505479", 
                "longitude": "-1.856490", 
                "pin": "shield", 
                "icon": "<i class='fa fa-star'></i>",
                "color": "green"
            },
            { 
                "title": "Fazeley Street", 
                "latitude": "52.479347", 
                "longitude": "-1.884740", 
                "pin": "bubble", 
                "icon": "<i class='fa fa-star'></i>",
                "color": "purple"
            }
        ];
        
        
        /* ----- */
        
        function Marker(custom) {
            var markers = [{
                "pin": {
                    "path": "M46.8,142.9c0.8,0.8,1.5,1.3,2.2,1.7l0,0l1.4,0.4l1.4-0.4l0,0c0.7-0.4,1.4-0.9,2.2-1.7c0,0,41.6-42.7,45.8-79.8 c0.3-1.9,0.4-3.8,0.4-5.8c0-26.2-22.5-47.4-50.1-47.4C22.4,9.9-0.1,31.1-0.1,57.3c0,2,0.2,4,0.4,5.9 C4.6,100.2,46.8,142.9,46.8,142.9z",
                    "point" : { x: 55, y: 150 },
                    "icon" : { x: 1, y: 19 }
                },
                "shield": {
                    "path": "M91.890,36.797 C92.502,28.979 94.876,21.852 99.011,15.415 L83.160,0.010 C78.106,4.302 72.363,6.601 65.930,6.908 C59.957,7.521 54.367,6.448 49.160,3.689 C43.800,6.295 38.209,7.368 32.390,6.908 C26.263,6.448 20.827,4.379 16.079,0.700 L0.227,15.875 C4.056,22.618 6.200,29.593 6.660,36.797 C6.813,40.169 5.817,44.844 3.673,50.821 C2.448,54.040 1.529,56.876 0.917,59.328 C0.457,61.781 0.151,63.697 -0.002,65.076 C-0.156,71.360 1.682,77.032 5.511,82.090 C8.421,85.922 13.322,90.060 20.214,94.505 C27.565,98.184 33.232,100.483 37.214,101.403 C37.674,101.556 38.248,101.824 38.937,102.207 C39.626,102.591 40.200,102.859 40.660,103.012 L43.876,104.391 C46.480,105.924 48.241,107.457 49.160,108.990 C50.232,107.304 51.993,105.771 54.444,104.391 C56.435,103.625 57.890,103.012 58.809,102.552 C60.340,101.939 61.182,101.556 61.335,101.403 C62.254,101.096 63.403,100.636 64.782,100.023 L69.836,98.184 C73.664,96.958 76.498,95.732 78.336,94.505 C84.921,90.060 89.746,85.998 92.809,82.320 C96.638,77.262 98.552,71.514 98.552,65.076 C98.246,62.164 96.944,57.566 94.647,51.281 C92.502,44.997 91.583,40.169 91.890,36.797 L91.890,36.797 Z",
                    "point" : { x: 55, y: 110 },
                    "icon" : { x: 1, y: 10 }
                },
                "bubble": {
                    "path": "M54.7,117.7l-13-21.9H18.4c-15,0-15,0-15-16.3V20c0-16.3,0-16.3,15-16.3H91c15.1,0,15,0.8,15,16.3v59.4 c0,16.1,0,16.1-15,16.3H67.7L54.7,117.7z",
                    "point" : { x: 55, y: 110 },
                    "icon" : { x: 0, y: 10 }
                }
            }];
            return markers[0][custom];
        }
        
        function CustomMarker(options) {
            var mrk = new google.maps.Marker({
                position: options.position, 
                map: options.map,
                icon: options.icon
            });
            this.setMap(options.map);
            this.latlng = options.position;	
            this.map_icon_label = options.map_icon_label;
            this.map_icon_position = options.map_icon_position;
            this.div = jQuery('<div/>', {
                class: 'marker',
                css: {
                    width: "30px",
                    height: "30px",
                    textAlign: "center",
                    position: "absolute",
                    display: "block"
                },
                append: this.map_icon_label
            });
            return mrk;
        }

        CustomMarker.prototype = new google.maps.OverlayView();
        CustomMarker.prototype.onAdd = function() {
            $(this.div).appendTo(this.getPanes().overlayImage);
            this.listeners = [
                google.maps.event.addListener(this, 'position_changed', function() { this.draw(); }),
                google.maps.event.addListener(this, 'text_changed', function() { this.draw(); }),
                google.maps.event.addListener(this, 'zindex_changed', function() { this.draw(); })
            ];
        };
        CustomMarker.prototype.draw = function() {
            var self = this;
            var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
            if(point) {
                $(this.div).css("left",point.x-($(this.div).width()/2)-this.map_icon_position.x);
                $(this.div).css("top",point.y-($(this.div).height())-this.map_icon_position.y);
            }

        };
        /*CustomMarker.prototype.getPosition = function() {
            return this.latlng;	
        };*/

        /* ----- */
        
        
        var map = new google.maps.Map(document.getElementById('map'),{
            styles: [
                {stylers: [{ visibility: 'simplified' }]},
                {elementType: 'labels', stylers: [{ visibility: 'off' }]}
            ]
        });
        var markers = [];
        var bounds = new google.maps.LatLngBounds();
        var infowindow = new google.maps.InfoWindow();
        for(var i = 0; i < locations.length; i++) {
            var location = locations[i];
            var icon = new Marker(location.pin);
            var position = new google.maps.LatLng(location.latitude,location.longitude);
            var marker = new CustomMarker({
                position: position, 
                map: map,
                icon: {
                    path: icon['path'],
                    fillColor: location.color,
                    fillOpacity: 1,
                    strokeColor: '',
                    strokeWeight: 0,
                    anchor: new google.maps.Point(icon['point']['x'], icon['point']['y']),
                    scale: 4/10
                },
                map_icon_label: location.icon,
                map_icon_position: {
                    x: icon['icon']['x'],
                    y: icon['icon']['y']
                }
            });

            bounds.extend(position);
            markers.push(marker);
            
            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    infowindow.setContent(locations[i].title);
                    infowindow.open(map, marker);
                }
            })(marker, i));
        }
        map.fitBounds(bounds);
        
    },
    
    loadGoogleMaps: function() {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&'+'callback=app.initGoogleMaps';
        document.body.appendChild(script);
    }
    
   
};

jQuery(document).ready(function(){
    app.init();
});

jQuery(window).on('load',function(){
    app.loadGoogleMaps();
});

jQuery(window).on('resize',function(){
    //location.reload();
});