define(function(require, exports) {
    var $ = require('jquery2'),
        bajs = require('bajs')($),
        live = require('wz.wap.ready')($, bajs),
        header = require('wz.wap.util/public')($,bajs,live);

        /*exports.setSearch = function(){
            searchForm = new bajs.ext.AjaxForm([
                {
                    tag : 'input',
                    require : true,
                    notice : '请输入搜索的关键字',
                    prop : {
                        name : 'q',
                        type : 'text',
                        value : '症状查找疾病',
                        className : 'searchTxt'
                    }
                }
            ], {
                event : function() {},
                xhr : {
                    url : '',
                    type : 'GET',
                    data : {
                    },
                    dataType : false
                }
            } ,{
                onReady : function() {
                    $('.searchForm').append(this._form);
                },
                submit : {
                    value : '搜索',
                    className : 'submit'
                }
            })
        }*/

    $(function(){
        var chaptertrun = new bajs.view.ChapterTrun([
                {
                    catalog : '.f1Tie a:nth-child(2)',
                    chapter : '.f1Bg',
                    adjust : 1
                },
                {
                    catalog : '.f1Tie a:nth-child(3)',
                    chapter : '.f2Bg',
                    adjust : 1
                },
                {
                    catalog : '.f1Tie a:nth-child(4)',
                    chapter : '.f3Bg',
                    adjust : 1
                },
                {
                    catalog : '.f1Tie a:nth-child(5)',
                    chapter : '.f4Bg',
                    adjust : 1
                },
                {
                    catalog : '.f1Tie a:nth-child(6)',
                    chapter : '.f5Bg',
                    adjust : 1
                },
                {
                    catalog : '.f1Tie a:nth-child(7)',
                    chapter : '.f6Bg',
                    adjust : 1
                }
            ], {
                adjust : 0
            }),
            banner = new bajs.view.EasySlider('.banner',{
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
            f8Box = new bajs.view.EasySlider('.f8Box',{
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
                navigation : {}
            }),
            listSplit = bajs.view.listSplit('.f6BoxList dl',3,'<li></li>'),
            f7BoxForm = new bajs.com.PageBooking('.f7BoxForm'),
            toggleTab = new bajs.view.ToggleTab('.f5Box h3 span','.f5Box dl',{
                event : 'click'
            }),
            lazyload = new bajs.view.LazyLoad('img[data-lazy]');
            $('.item .itemTie').click(function(){
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                    $(this).siblings('.itemCon').slideUp(200);
                }else{
                    $(this).addClass('active');
                    $(this).siblings('.itemCon').slideDown(200);
                    
                }
            })
            $('.item .itemCon').hide();
            $('.container .item:eq(0) .itemTie').addClass('active');
            console.log(0)
            $('.container .item:eq(0) .itemCon').show();

    })
})