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
        var map = new google.maps.Map($('#map')[0],{
            styles: [
                {stylers: [{ visibility: 'simplified' }]},
                {elementType: 'labels', stylers: [{ visibility: 'off' }]}
            ],
            scrollwheel: false
        });
        var markers = [];
        var bounds = new google.maps.LatLngBounds();
        var infowindow = new google.maps.InfoWindow();
        for(var i = 0; i < locations.length; i++) {
            var location = locations[i];
            var icon = new Marker(location.marker);
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
       
        
    }
   
};

jQuery(document).ready(function(){
    app.init();
    google.maps.event.addDomListener(window, 'load', app.initGoogleMaps);
});

jQuery(window).on('load',function(){
});