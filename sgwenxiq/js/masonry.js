/**
 * jQuery Masonry v2.0.110517 beta
 * The flip-side of CSS Floats.
 * jQuery plugin that rearranges item elements to a grid.
 * http://masonry.desandro.com
 *
 * Licensed under the MIT license.
 * Copyright 2011 David DeSandro
 */
define(function(require) {
    return function($, bajs) {
        (function(a, b, c) {
            var d = b.event,
                e;
            d.special.smartresize = {
                setup: function() {
                    b(this).bind("resize", d.special.smartresize.handler)
                },
                teardown: function() {
                    b(this).unbind("resize", d.special.smartresize.handler)
                },
                handler: function(a, b) {
                    var c = this,
                        d = arguments;
                    a.type = "smartresize", e && clearTimeout(e), e = setTimeout(function() {
                        jQuery.event.handle.apply(c, d)
                    }, b === "execAsap" ? 0 : 100)
                }
            }, b.fn.smartresize = function(a) {
                return a ? this.bind("smartresize", a) : this.trigger("smartresize", ["execAsap"])
            }, b.Mason = function(a, c) {
                this.element = b(c), this._create(a), this._init()
            };
            var f = ["position", "height"];
            b.Mason.settings = {
                isResizable: !0,
                isAnimated: !1,
                animationOptions: {
                    queue: !1,
                    duration: 500
                },
                gutterWidth: 0,
                isRTL: !1,
                isFitWidth: !1
            }, b.Mason.prototype = {
                _getBricks: function(a) {
                    var b = this.options.itemSelector,
                        c = b ? a.filter(b).add(a.find(b)) : a;
                    c.css({
                        position: "absolute"
                    }).addClass("masonry-brick");
                    return c
                },
                _create: function(c) {
                    this.options = b.extend(!0, {}, b.Mason.settings, c), this.styleQueue = [], this.reloadItems();
                    var d = this.element[0].style;
                    this.originalStyle = {};
                    for (var e = 0, g = f.length; e < g; e++) {
                        var h = f[e];
                        this.originalStyle[h] = d[h] || null
                    }
                    this.element.css({
                        position: "relative"
                    }), this.horizontalDirection = this.options.isRTL ? "right" : "left", this.offset = {};
                    var i = b(document.createElement("div"));
                    this.element.prepend(i), this.offset.y = Math.round(i.position().top), this.options.isRTL ? this.offset.x = Math.round(i.position().left) : (i.css({
                        "float": "right",
                        display: "inline-block"
                    }), this.offset.x = Math.round(this.element.outerWidth() - i.position().left)), i.remove();
                    var j = this;
                    setTimeout(function() {
                        j.element.addClass("masonry")
                    }, 0), this.options.isResizable && b(a).bind("smartresize.masonry", function() {
                        j.resize()
                    })
                },
                _init: function(a) {
                    this.reLayout(a)
                },
                option: function(a, c) {
                    if (b.isPlainObject(a)) this.options = b.extend(!0, this.options, a);
                    else {
                        if (a && typeof c == "undefined") return this.options[a];
                        this.options[a] = c
                    }
                    return this
                },
                layout: function(a, c) {
                    var d, e, f, g, h, i;
                    for (var j = 0, k = a.length; j < k; j++) {
                        d = b(a[j]), e = Math.ceil(d.outerWidth(!0) / this.columnWidth), e = Math.min(e, this.cols);
                        if (e === 1) this._placeBrick(d, this.cols, this.colYs);
                        else {
                            f = this.cols + 1 - e, g = [];
                            for (i = 0; i < f; i++) h = this.colYs.slice(i, i + e), g[i] = Math.max.apply(Math, h);
                            this._placeBrick(d, f, g)
                        }
                    }
                    var l = {};
                    l.height = Math.max.apply(Math, this.colYs) - this.offset.y, this.options.isFitWidth && (l.width = this.cols * this.columnWidth - this.options.gutterWidth), this.styleQueue.push({
                        $el: this.element,
                        style: l
                    });
                    var m = this.isLaidOut ? this.options.isAnimated ? "animate" : "css" : "css",
                        n = this.options.animationOptions,
                        o;
                    for (j = 0, k = this.styleQueue.length; j < k; j++) o = this.styleQueue[j], o.$el[m](o.style, n);
                    this.styleQueue = [], c && c.call(a), this.isLaidOut = !0;
                    return this
                },
                _getColumns: function() {
                    var a = this.options.isFitWidth ? this.element.parent() : this.element,
                        b = a.width();
                    this.columnWidth = this.options.columnWidth || this.$bricks.outerWidth(!0) || b, this.columnWidth += this.options.gutterWidth, this.cols = Math.floor((b + this.options.gutterWidth) / this.columnWidth), this.cols = Math.max(this.cols, 1);
                    return this
                },
                _placeBrick: function(a, b, c) {
                    var d = Math.min.apply(Math, c),
                        e = d + a.outerHeight(!0),
                        f = c.length,
                        g = f,
                        h = this.cols + 1 - f,
                        i = {};
                    while (f--) c[f] === d && (g = f);
                    i.top = d, i[this.horizontalDirection] = this.columnWidth * g + this.offset.x, this.styleQueue.push({
                        $el: a,
                        style: i
                    });
                    for (f = 0; f < h; f++) this.colYs[g + f] = e
                },
                resize: function() {
                    var a = this.cols;
                    this._getColumns("masonry"), this.cols !== a && this._reloadLayout()
                },
                reLayout: function(a) {
                    this._getColumns("masonry"), this._reloadLayout(a)
                },
                _reloadLayout: function(a) {
                    var b = this.cols;
                    this.colYs = [];
                    while (b--) this.colYs.push(this.offset.y);
                    this.layout(this.$bricks, a)
                },
                reloadItems: function() {
                    this.$bricks = this._getBricks(this.element.children())
                },
                reload: function(a) {
                    this.reloadItems(), this.reLayout(a)
                },
                appended: function(a, b) {
                    var c = this._getBricks(a);
                    this.$bricks = this.$bricks.add(c), this.layout(c, b)
                },
                remove: function(a) {
                    this.$bricks = this.$bricks.not(a), a.remove()
                },
                destroy: function() {
                    this.$bricks.removeClass("masonry-brick").each(function() {
                        this.style.position = null, this.style.top = null, this.style.left = null
                    });
                    var c = this.element[0].style;
                    for (var d = 0, e = f.length; d < e; d++) {
                        var g = f[d];
                        c[g] = this.originalStyle[g]
                    }
                    this.element.unbind(".masonry").removeClass("masonry").removeData("masonry"), b(a).unbind(".masonry")
                }
            }, b.fn.imagesLoaded = function(a) {
                console.log(a)
                var b = this.find("img"),
                    d = b.length,
                    e = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
                    f = this;
                if (!d) {
                    a.call(this);
                    return this
                }
                b.bind("load", function() {
                    --d <= 0 && this.src !== e && a.call(f)
                }).each(function() {
                    if (this.complete || this.complete === c) {
                        var a = this.src;
                        this.src = e, this.src = a
                    }
                });
                return this
            }, b.fn.masonry = function(a) {
                if (typeof a == "string") {
                    var c = Array.prototype.slice.call(arguments, 1);
                    return this.each(function() {
                        var d = b.data(this, "masonry");
                        if (!d) return b.error("cannot call methods on masonry prior to initialization; attempted to call method '" + a + "'");
                        if (!b.isFunction(d[a]) || a.charAt(0) === "_") return b.error("no such method '" + a + "' for masonry instance");
                        d[a].apply(d, c)
                    })
                }
                return this.each(function() {
                    var c = b.data(this, "masonry");
                    c ? c.option(a || {})._init() : b.data(this, "masonry", new b.Mason(a, this))
                })
            }
        })
    }
})
//(function(a,b,c){var d=b.event,e;d.special.smartresize={setup:function(){b(this).bind("resize",d.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",d.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",e&&clearTimeout(e),e=setTimeout(function(){jQuery.event.handle.apply(c,d)},b==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Mason=function(a,c){this.element=b(c),this._create(a),this._init()};var f=["position","height"];b.Mason.settings={isResizable:!0,isAnimated:!1,animationOptions:{queue:!1,duration:500},gutterWidth:0,isRTL:!1,isFitWidth:!1},b.Mason.prototype={_getBricks:function(a){var b=this.options.itemSelector,c=b?a.filter(b).add(a.find(b)):a;c.css({position:"absolute"}).addClass("masonry-brick");return c},_create:function(c){this.options=b.extend(!0,{},b.Mason.settings,c),this.styleQueue=[],this.reloadItems();var d=this.element[0].style;this.originalStyle={};for(var e=0,g=f.length;e<g;e++){var h=f[e];this.originalStyle[h]=d[h]||null}this.element.css({position:"relative"}),this.horizontalDirection=this.options.isRTL?"right":"left",this.offset={};var i=b(document.createElement("div"));this.element.prepend(i),this.offset.y=Math.round(i.position().top),this.options.isRTL?this.offset.x=Math.round(i.position().left):(i.css({"float":"right",display:"inline-block"}),this.offset.x=Math.round(this.element.outerWidth()-i.position().left)),i.remove();var j=this;setTimeout(function(){j.element.addClass("masonry")},0),this.options.isResizable&&b(a).bind("smartresize.masonry",function(){j.resize()})},_init:function(a){this.reLayout(a)},option:function(a,c){if(b.isPlainObject(a))this.options=b.extend(!0,this.options,a);else{if(a&&typeof c=="undefined")return this.options[a];this.options[a]=c}return this},layout:function(a,c){var d,e,f,g,h,i;for(var j=0,k=a.length;j<k;j++){d=b(a[j]),e=Math.ceil(d.outerWidth(!0)/this.columnWidth),e=Math.min(e,this.cols);if(e===1)this._placeBrick(d,this.cols,this.colYs);else{f=this.cols+1-e,g=[];for(i=0;i<f;i++)h=this.colYs.slice(i,i+e),g[i]=Math.max.apply(Math,h);this._placeBrick(d,f,g)}}var l={};l.height=Math.max.apply(Math,this.colYs)-this.offset.y,this.options.isFitWidth&&(l.width=this.cols*this.columnWidth-this.options.gutterWidth),this.styleQueue.push({$el:this.element,style:l});var m=this.isLaidOut?this.options.isAnimated?"animate":"css":"css",n=this.options.animationOptions,o;for(j=0,k=this.styleQueue.length;j<k;j++)o=this.styleQueue[j],o.$el[m](o.style,n);this.styleQueue=[],c&&c.call(a),this.isLaidOut=!0;return this},_getColumns:function(){var a=this.options.isFitWidth?this.element.parent():this.element,b=a.width();this.columnWidth=this.options.columnWidth||this.$bricks.outerWidth(!0)||b,this.columnWidth+=this.options.gutterWidth,this.cols=Math.floor((b+this.options.gutterWidth)/this.columnWidth),this.cols=Math.max(this.cols,1);return this},_placeBrick:function(a,b,c){var d=Math.min.apply(Math,c),e=d+a.outerHeight(!0),f=c.length,g=f,h=this.cols+1-f,i={};while(f--)c[f]===d&&(g=f);i.top=d,i[this.horizontalDirection]=this.columnWidth*g+this.offset.x,this.styleQueue.push({$el:a,style:i});for(f=0;f<h;f++)this.colYs[g+f]=e},resize:function(){var a=this.cols;this._getColumns("masonry"),this.cols!==a&&this._reloadLayout()},reLayout:function(a){this._getColumns("masonry"),this._reloadLayout(a)},_reloadLayout:function(a){var b=this.cols;this.colYs=[];while(b--)this.colYs.push(this.offset.y);this.layout(this.$bricks,a)},reloadItems:function(){this.$bricks=this._getBricks(this.element.children())},reload:function(a){this.reloadItems(),this.reLayout(a)},appended:function(a,b){var c=this._getBricks(a);this.$bricks=this.$bricks.add(c),this.layout(c,b)},remove:function(a){this.$bricks=this.$bricks.not(a),a.remove()},destroy:function(){this.$bricks.removeClass("masonry-brick").each(function(){this.style.position=null,this.style.top=null,this.style.left=null});var c=this.element[0].style;for(var d=0,e=f.length;d<e;d++){var g=f[d];c[g]=this.originalStyle[g]}this.element.unbind(".masonry").removeClass("masonry").removeData("masonry"),b(a).unbind(".masonry")}},b.fn.imagesLoaded=function(a){var b=this.find("img"),d=b.length,e="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",f=this;if(!d){a.call(this);return this}b.bind("load",function(){--d<=0&&this.src!==e&&a.call(f)}).each(function(){if(this.complete||this.complete===c){var a=this.src;this.src=e,this.src=a}});return this},b.fn.masonry=function(a){if(typeof a=="string"){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=b.data(this,"masonry");if(!d)return b.error("cannot call methods on masonry prior to initialization; attempted to call method '"+a+"'");if(!b.isFunction(d[a])||a.charAt(0)==="_")return b.error("no such method '"+a+"' for masonry instance");d[a].apply(d,c)})}return this.each(function(){var c=b.data(this,"masonry");c?c.option(a||{})._init():b.data(this,"masonry",new b.Mason(a,this))})}})(window,jQuery);
