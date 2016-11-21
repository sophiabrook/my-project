define(function(require, exports) {
    var $ = require('jquery'),
        bajs = require('bajs')($),
        live = require('yd.pc.ready')($, bajs);
        //top = require('yd.pc.util/public/top-1')($, bajs);
        //com = require('yd.pc.com/live/public.kouqiang')($, bajs, live);
    exports.setFrom = function(){
        var from = new bajs.ext.AjaxForm([
                {
                    tag : 'input',
                    title : '姓名',
                    require : bajs.regex.uname,
                    notice : '请输入您的姓名',
                    prop : {
                        name : 'name',
                        type : 'text',
                        value : '请输入您的姓名',
                        className : 'text'
                    }
                },{
                    tag : 'input',
                    title : '人数',
                    require : true,
                    notice : '请输入您的人数',
                    prop : {
                        name : 'num',
                        type : 'text',
                        value : '请输入您的人数',
                        className : 'text'
                    }
                },{
                    tag : 'input',
                    title : '年龄',
                    require : true,
                    notice : '请输入您的年龄',
                    prop : {
                        name : 'age',
                        type : 'text',
                        value : '请输入您的年龄',
                        className : 'text'
                    }
                },{
                    tag : 'input',
                    title : '电话号码',
                    require : bajs.regex.phone,
                    notice : '请输入您的电话号码',
                    prop : {
                        name : 'tel',
                        type : 'text',
                        value : '请输入您的电话号码',
                        className : 'text'
                    }
                },{
                    tag : 'input',
                    title : '预约时间',
                    require : bajs.regex.date,
                    notice : '请输入您的来院时间',
                    prop : {
                        name : 'date',
                        type : 'text',
                        value : '请输入您的来院时间',
                        className : 'text'
                    }
                }
            ],{
                event : function() {},
                xhr : {
                    url : '',
                    type : 'GET',
                    data : {
                    },
                    dataType : false
                }
            },{
                onReady : function() {
                    console.log(0)
                    $('.f2BoxFrom').append(this._form);
                },
                submit : {
                    value : '提交',
                    className : 'submit'
                } 
            })
    }
    exports.setSearch = function(){
        var searchForm = new bajs.ext.AjaxForm([
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
                $('.search').append(this._form);
            },
            submit : {
                value : '搜索',
                className : 'submit'
            }
        })
    }
    $(function(){
        exports.setSearch();
        exports.setFrom();
        var chaptertrun = new bajs.view.ChapterTrun([
                {
                    catalog : '.navBox a:nth-child(1)',
                    chapter : '.f1Box',
                    adjust : 1
                },
                {
                    catalog : '.navBox a:nth-child(2)',
                    chapter : '.f2Bg',
                    adjust : 1
                },
                {
                    catalog : '.navBox a:nth-child(3)',
                    chapter : '.f3Bg',
                    adjust : 1
                },
                {
                    catalog : '.navBox a:nth-child(4)',
                    chapter : '.f4Bg',
                    adjust : 60
                },
                {
                    catalog : '.navBox a:nth-child(5)',
                    chapter : '.f4BoxCon',
                    adjust : -120
                },
                {
                    catalog : '.navBox a:nth-child(6)',
                    chapter : '.f5Bg',
                    adjust : 1
                }
            ], {
                //adjust : 0
            }),
            f1BoxL = new bajs.view.EasySlider('.f1BoxL',{
                autoplay : true,
                effect : {
                    name : 'slide',
                    options : {
                    }
                },
                pagination : true,
                navigation : {}
            }),
            callForm = new bajs.com.LiteCall('.f1BoxCall', '免费拨打'),
            f2BoxCon = new bajs.view.EasySlider('.f2BoxCon',{
                autoplay : true,
                effect : {
                    name : 'slide',
                    options : {
                        mode : 'Y'
                    }
                },
                pagination : false,
                navigation : {}
            }),
            f4BoxList = new bajs.view.EasySlider('.f4BoxList',{
                autoplay : true,
                effect : {
                    name : 'slide',
                    options : {
                    }
                },
                pagination : false,
                navigation : {}
            }),
            f5BoxL = new bajs.view.ToggleTab('.f5BoxL .tab span','.f5BoxL .tabCon'),
            lazyload = new bajs.view.LazyLoad('img[data-lazy]');
        
    });
        
});