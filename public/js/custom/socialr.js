(function(window, $, undefined) {
	
    function Social(element,instance,values,defaults) {

        this.id = instance+'-'+(new Date().getTime()).toString(36);
        this.class = 'socialr_'+instance;
        this.title = instance;
        this.element = element;
        this.url = defaults.url;
        this.share_url = "";
        this.label = "";
        this.icon = "";
        this.shares = [];
        
        this.init = function() {
            this.setShareURL(); // Set the share URL
            if(defaults.label) this.setLabel(); // Show label
            if(defaults.icon) this.setIcon(); // Show icon
        };
        
        
        this.create = function() {

            _id = this.id;
            
            _div = $('<div/>', {
                id: _id,
                class: 'socialr_each',
                html: ''
            });
            
            _link = $('<a/>',{
                id: this.instance,
                href: this.share_url,
                class: this.class
            }).appendTo(_div);

            if(defaults.icon) {
                $('<i/>',{
                    class: this.icon
                }).appendTo(_link);
            }
            
            if(defaults.label) {
                $('<span/>',{
                    class: 'socialr_label',
                    text: this.label
                }).appendTo(_link);
            }
            
            if(defaults.count) {
                $('<span/>',{
                    class: 'socialr_count',
                    text: ''
                }).appendTo(_div);
            }

            $(this.element).addClass('socialr').append(_div);

            return _div;

        };
        
        
        this.setShareURL = function() {
            _link = values.shareURL.base;
            _params = jQuery.param(values.shareURL.params);
            _url = _link + _params;
            this.share_url = _url;
        };
        
        this.setLabel = function() {
            _label = values.label;
            this.label = _label;
        };
        
        this.setIcon = function() {
            _icon = values.icon;
            this.icon = _icon;
        };
        
        this.getCount = function() {
            getCount(this.id);
        }
        
        function getCount(id) {
            if(values.countURL !== false) {
                $.ajax({
                    type: values.countURL.type,
                    url: values.countURL.base,
                    data: values.countURL.params,
                    dataType: 'json',
                    /*headers: {
                        "Access-Control-Allow-Origin": "*\n"
                    },*/
                    //crossDomain: true,
                    success: function(data) {
                        addCount(id,data[values.countURL.return]);
                    },
                    error: function() {
                        console.log('error...');
                    }
                });
            } else {
                return false;
            }
        }
        
        function addCount(id,count) {
            _id = '#'+id+' .socialr_count';
            $('#'+id+' .socialr_count').show().text(count);
        }

        

    }
    
      


	$.fn.socialr = function(options){
        
        // Default parameters
		var defaults = $.extend({
			title : $.trim($("meta[name='description']").attr("content")) || "Google",
			url : $.trim(window.location.href) || "http://google.com/",
            shares: ['twitter','facebook'],
            hashtags: "",
            via: "", 
            icon: true,
            label: true,
            count: true
		},options);
        
        // Return instance
        return this.each(function(){
			
            _element = $(this);
            _shares = defaults.shares;
            _title = defaults.title;
            _url = defaults.url;
            _return = [];

            $.each(_shares, function(i,ref) {
                _social = shareData(ref);
                
                if(_social !== undefined) {
                    _each = new Social(_element,ref,_social,defaults);
                    _each.init();
                    _each.create(); // Create element
                    if(defaults.count) {
                        _each.getCount(); // Now add the count to it
                    }
                    
                }
            });
            
		});
        
        
        function shareData(social) {
            
            _data = { 
                twitter: {
                    label: "Tweet",
                    icon: "fa fa-twitter",
                    shareURL: {
                        base: "https://twitter.com/share?",
                        params: {
                            url: defaults.url,
                            text: defaults.text,
                            via: defaults.via,
                            hashtags: defaults.hashtags
                        }
                    },
                    countURL: false
                },
                facebook: {
                    label: "Like",
                    icon: "fa fa-facebook",
                    shareURL: {
                        base: "https://facebook.com/sharer/sharer.php?",
                        params: {
                            u: defaults.url
                        }
                    },
                    countURL: {
                        base: "http://graph.facebook.com/?",
                        params: {
                            id: defaults.url
                        }, 
                        type: 'GET',
                        return: 'shares'
                    }
                },
                linkedin: {
                    label: "Share",
                    icon: "fa fa-linkedin",
                    shareURL: {
                        base: "https://www.linkedin.com/shareArticle?",
                        params: {
                            title: defaults.title,
                            
                            url: defaults.url,
                            source: "http://base.dev/",
                            mini: true
                        }
                    },
                    countURL: false
                    /*countURL: {
                        base: "https://www.linkedin.com/countserv/count/share?",
                        params: {
                            url: defaults.url,
                            format: 'json'
                        },
                        type: 'GET',
                        return: 'count'
                    }*/
                },
                googleplus: {
                    label: "+1",
                    icon: "fa fa-google-plus",
                    shareURL: {
                        base: "https://plus.google.com/share?",
                        params: {
                            url: defaults.url
                        }
                    },
                    countURL: {
                        base: "https://cors-anywhere.herokuapp.com/https://plusone.google.com/_/+1/fastbutton?",
                        params: {
                            url: defaults.url
                        },
                        type: 'GET',
                        return: 'count'
                    }

                }
            };
            
            return _data[social];

        }
 
    };

}(window, jQuery));
