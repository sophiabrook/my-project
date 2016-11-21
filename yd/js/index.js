define(function(require, exports) {
    var $ = require('jquery2'),
        bajs = require('bajs')($),
        live = require('yd.wap.ready')($, bajs),
        swiper = require('view.swiper')($, bajs),
        header = require('yd.wap.util/public-1')($,bajs);

    $(function(){
        var f4Box = new bajs.view.EasySlider('.f4Box .tabBox',{
                autoplay : true,
                effect : {
                    name : 'slide',
                    options : {
                        mode : 'x',
                        touch : true,
                        column : 1,
                        loop : 3
                    }
                },
                pagination : false,
                navigation : {},
                onReady : function() {
                    var that = this;
                    $('.f4Box .tab span').on('click', function() {
                        console.log(0)
                        var index = $(this).index();
                        $(this).addClass('active').siblings().removeClass('active');
                        that.slideTo(index);
                    }).eq(0).addClass('active');
                },
                onChangeStart : function (current, next){
                    $('.f4Box .tab span:eq('+ next +')').addClass('active').siblings().removeClass('active');
                }
            }),
            f5Box = new bajs.view.EasySlider('.f5Box',{
                autoplay : true,
                effect : {
                    name : 'slide',
                    options : {
                        mode : 'x',
                        touch : true,
                        column : 1,
                        loop : 3
                    }
                },
                pagination : true,
                navigation : {}
            }),
            f6BoxFrom = new bajs.com.PageBooking('.f6BoxFrom'),
            lazyload = new bajs.view.LazyLoad('img[data-lazy]');
    });
});
