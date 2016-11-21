define(function(require, exports) {
    var $ = require('jquery2'),
        bajs = require('bajs')($),
        live = require('wz.wap.ready')($, bajs),
        header = require('wz.wap.util/public')($,bajs,live);

    exports.setSearch = function(){
            searchForm = new bajs.ext.AjaxForm([
                {
                    tag : 'input',
                    require : bajs.regex.phone,
                    notice : '请输入您的手机号码',
                    prop : {
                        name : 'tel',
                        type : 'text',
                        value : '请输入您的手机号码',
                        className : 'searchTxt'
                    }
                },
                {
                    tag : 'input',
                    require : true,
                    notice : '请输入查询密码',
                    prop : {
                        name : 'tel',
                        type : 'text',
                        value : '请输入查询密码',
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
                    $('.f5BoxForm').append(this._form);
                    $('.f5BoxForm dl:nth-child(1) dd').append('<input type="button" value="获取密码" class="pass">');
                },
                submit : {
                    value : '查询',
                    className : 'submit'
                }
            })
        }
        
    $(function(){
        exports.setSearch();
        var banner = new bajs.view.EasySlider('.banner',{
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
            f3Box = new bajs.view.EasySlider('.f3Box .tabBox',{
                autoplay : false,
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
                    $('.f3Box .tab span').on('click', function() {
                        var index = $(this).index();
                        $(this).addClass('active').siblings().removeClass('active');
                        that.slideTo(index);
                    }).eq(0).addClass('active');
                },
                onChangeStart : function (current, next){
                    $('.f3Box .tab span:eq('+ next +')').addClass('active').siblings().removeClass('active');
                }
            }),
            f6BoxList = new bajs.view.EasySlider('.f6BoxList',{
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
            f7BoxForm = new bajs.com.PageBooking('.f7BoxForm'),
            lazyload = new bajs.view.LazyLoad('img[data-lazy]');

    })
})