/**** Add application wide javascripts below this point  ******/

var app = {

    init: function() {
        this.initBase();
    },

    // Mobile Nav
    initBase: function() {

        
        $("#socialr").socialr({
            title: "BASE.DEV",
            url: "http://google.com/",
            shares: ['twitter','facebook','linkedin','googleplus'],
            via: "inoratdawn",
            hashtags: "base,dev,localhost",
            icon: true,
            count: true,
            label: false
        });
        
        $("#socialr_2").socialr({
            title: "BASE.DEV",
            url: "http://google.com/",
            shares: ['twitter','facebook','linkedin','googleplus'],
            hashtags: "base,dev,localhost",
            icon: true,
            count: false
            //label: true
        });
        
        $("#socialr_3").socialr({
            title: "BASE.DEV",
            url: "http://google.com/",
            shares: ['twitter','facebook','linkedin','googleplus'],
            hashtags: "base,dev,localhost",
            icon: true,
            count: false
            //label: true
        });
        
        
        
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
    
   
   
    initSliders: function(){
        /*
        // sticky slider for sidepanel
        var sticky = jQuery(".sticky_side_panel");
        if(sticky.length){
            var sticky_offset_y = sticky.offset().top,
                sticky_offset_x = sticky.offset().left,
                sticky_top = 0,
                sticky_width = sticky.outerWidth();

            jQuery(window).on("resize",function(){
                if (jQuery(window).width() > 1025) {
                    sticky_offset_x = sticky.offset().left;
                } else {
                    sticky.removeClass('sticky').css({
                        width:'',
                        left:'',
                        top:''
                    });
                    sticky.siblings(".columns").removeClass("end");
                }
            });
            if(jQuery(".sub_nav_wrapper").length){
                sticky_offset_y -= 75; //75 a magic number of the nav wrapper + padding
                sticky_top = 75;
            }
            jQuery(window).on("scroll",function(e){
                if (jQuery(window).width() > 1025) {
                    if (window.scrollY >= sticky_offset_y) {
                        sticky.addClass('sticky').css({
                            width:sticky_width,
                            left:sticky_offset_x,
                            top:sticky_top
                        });
                        sticky.siblings(".columns").addClass("end");
                    } else {
                        sticky.removeClass('sticky').css({
                            width:'',
                            left:'',
                            top:''
                        });
                        sticky.siblings(".columns").removeClass("end");
                    }
                }
            });
        }
        */

        
    },
    
   
};

jQuery(document).ready(function(){
    app.init();
});

jQuery(window).on('resize',function(){
    //location.reload();
});