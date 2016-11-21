define(function(require, exports) {
    var $ = require('jquery2'),
        bajs = require('bajs')($),
        live = require('sg.wap.ready')($, bajs),
        swiper = require('view.swiper')($, bajs),
        util = require('sg.wap.util/public')($, bajs),
        WechatAPI = require('ext.wechatapi')($, bajs);

    $(function(){
        var insertQRcode = new bajs.view.insertQRcode({
                wrapper : '.f7Box dt',
                size : 75,
                text : bajs.coll.api.WeChat.qrurl + bajs.cache.qrcode.wechat
            }),
            lazyload = new bajs.view.LazyLoad('img[data-lazy]');
    })
})