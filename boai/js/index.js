define(function(require, exports) {
    var $ = require('jquery'),
        bajs = require('bajs')($),
        live = require('boai.wap.ready')($, bajs),
        util = require('boai.wap.util/public-1')($, bajs),
        com = require('boai.wap.com/live/public')($, bajs, live);

    $(function(){
        var f4BoxList = new bajs.view.EasySlider('.f4BoxList',{
                autoplay : true,
                effect : {
                    name : 'slide',
                    options : {
                        mode : 'x',
                        column : 1,
                        touch : true,
                        loop : 3
                    }
                },
                pagination : true,
                navigation : {}
            }),
            f5BoxCon = new bajs.view.EasySlider('.f5BoxCon',{
                autoplay : true,
                effect : {
                    name : 'slide',
                    options : {
                        mode : 'x',
                        column : 1,
                        touch : true,
                        loop : 3
                    }
                },
                pagination : false,
                navigation : {}
            }),
            f8BoxForm = new bajs.com.PageBooking('.f8BoxForm'),
            lazyload = new bajs.view.LazyLoad('img[data-lazy]');
    
    });
        
});