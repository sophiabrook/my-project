define(function(require, exports) {
    var $ = require('jquery'),
        bajs = require('bajs')($),
        live = require('sg.pc.ready')($, bajs);
        //com = require('sg.pc.com/live/public')($, bajs, live);

    $(function(){
        var f5Box = new bajs.view.EasySlider('.f5Box',{
                autoplay : false,
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
            lazyload = new bajs.view.LazyLoad('img[data-lazy]');

    });
});