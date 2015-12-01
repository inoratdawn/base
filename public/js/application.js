/**** Add application wide javascripts below this point  ******/

var app = {

    init: function() {
        this.initBase();
        this.initSocialr();
        this.initOwlCarousel();
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
            autoplay: true,
            stagePadding: 50
        });
    }
    
   
};

jQuery(document).ready(function(){
    app.init();
});

jQuery(window).on('resize',function(){
    //location.reload();
});