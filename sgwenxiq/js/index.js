define(function(require, exports) {
    var $ = require('jquery'),
        bajs = require('bajs')($),
        live = require('sg.pc.ready')($, bajs);
        //masonry = require('./masonry')($,bajs);
        //com = require('sg.pc.com/live/public')($, bajs, live);

    $(function(){
        var insertQRcode = new bajs.view.insertQRcode({
                wrapper : '.f7Box dt',
                size : 150,
                text : bajs.coll.api.WeChat.qrurl + bajs.cache.qrcode.wechat   
            }),
            f6BoxList = new bajs.view.listSplit('.f6BoxList dl', 2,'<li></li>'),
            lazyload = new bajs.view.LazyLoad('img[data-lazy]');
            $('.f6BoxList li:nth-child(2n-1)').addClass('mar49');

    });
});