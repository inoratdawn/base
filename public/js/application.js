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
        
        var pins = [{
            "pin": {
                "path": "M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z"
            },
            "bubble": {
                "path": "M17.501,35.670 L11.968,26.165 L5.053,26.165 C2.208,26.165 -0.106,24.084 -0.106,21.524 L-0.106,4.632 C-0.106,2.073 2.208,-0.009 5.053,-0.009 L29.947,-0.009 C32.792,-0.009 35.106,2.073 35.106,4.632 L35.106,21.524 C35.106,24.084 32.792,26.165 29.947,26.165 L23.033,26.165 L17.501,35.670 ZM5.053,2.563 C3.639,2.563 2.487,3.491 2.487,4.632 L2.487,21.524 C2.487,22.666 3.639,23.593 5.053,23.593 L13.461,23.593 L17.497,30.527 L21.531,23.593 L29.945,23.593 C31.360,23.593 32.511,22.666 32.511,21.524 L32.511,4.632 C32.511,3.491 31.357,2.563 29.945,2.563 L5.053,2.563 Z"
            }
        }];

        var locations = [
            { 
                "title": "Bondi Beach", 
                "latitude": "-33.890542", 
                "longitude": "151.274856", 
                "pin": "pin", 
                "icon": "<i class='fa fa-diamond'></i>",
                "color": "blue"
            },
            { 
                "title": "Coogee Beach", 
                "latitude": "-33.923036", 
                "longitude": "151.259052", 
                "pin": "pin", 
                "icon": "<i class='fa fa-star'></i>",
                "color": "pink"
            },
            { 
                "title": "Cronulla Beach", 
                "latitude": "-34.028249", 
                "longitude": "151.157507", 
                "pin": "pin", 
                "icon": "<i class='fa fa-hashtag'></i>",
                "color": "green"
            },
            { 
                "title": "Manly Beach", 
                "latitude": "-33.80010128657071", 
                "longitude": "151.28747820854187", 
                "pin": "pin", 
                "icon": "<i class='fa fa-ban'></i>",
                "color": "orange"
            },
            { 
                "title": "Maroubra Beach", 
                "latitude": "-33.950198", 
                "longitude": "151.259302", 
                "pin": "bubble", 
                "icon": "<i class='fa fa-bicycle'></i>",
                "color": "red"
            }
        ];
        
        
        /* ----- */
        
        function CustomMarker(options) {
            var mrk = new google.maps.Marker({
                position: options.position, 
                map: options.map,
                icon: options.icon
            });
            this.latlng = options.position;	
            this.setMap(options.map);
            this.map_icon_label = options.map_icon_label;
            return mrk;
        }

        CustomMarker.prototype = new google.maps.OverlayView();
        CustomMarker.prototype.draw = function() {
            var self = this;
            var div = this.div;
            var panes = this.getPanes();
            var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
            if (!div) {
                var div = this.div = jQuery('<div/>', {
                    class: 'marker',
                    css: {
                        width: "25px",
                        height: "25px",
                        textAlign: "center",
                        position: "absolute",
                        background: "pink"
                    },
                    append: this.map_icon_label
                }).appendTo(panes.overlayImage);
                google.maps.event.addDomListener(div, "click", function(event) {			
                    google.maps.event.trigger(self, "click");
                });
            }
            var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
            if(point) {
                $(div).css("left",point.x);
                $(div).css("top",point.y);
            }

        };

        CustomMarker.prototype.remove = function() {
            if (this.div) {
                this.div.parentNode.removeChild(this.div);
                this.div = null;
            }	
        };

        CustomMarker.prototype.getPosition = function() {
            return this.latlng;	
        };

        /* ----- */
        
        
        var map = new google.maps.Map(document.getElementById('map'),{
            center: new google.maps.LatLng(-33.890542,151.274856),
            zoom: 5,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        });
        var markers = [];
        var bounds = new google.maps.LatLngBounds();
        var infowindow = new google.maps.InfoWindow();
        for(var i = 0; i < locations.length; i++) {
            var location = locations[i];
            
            var opts = {
                position: new google.maps.LatLng(location.latitude,location.longitude), 
                map: map,
                icon: {
                    //path: pins[0][location.pin]['path'],
                    fillColor: location.color,
                    fillOpacity: 1,
                    strokeColor: '',
                    strokeWeight: 0,
                    //anchor: new google.maps.Point(0, 0),
                    scale: 1
                },
                map_icon_label: location.icon
            };
            
            
            var marker = new CustomMarker(opts);

            bounds.extend(opts.position);
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