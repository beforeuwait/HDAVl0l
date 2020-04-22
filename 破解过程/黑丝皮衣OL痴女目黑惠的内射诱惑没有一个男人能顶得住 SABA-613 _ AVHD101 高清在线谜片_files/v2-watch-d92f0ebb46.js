console.log('watch开始！！！')

console.log('watch开始！！！')

function RVUNU(t) {
    function e(t) {
        var n = {
            WitFU: function(t, e) {
                return i[_0x59ac("0x86")](t, e)
            },
            SgSmP: _0x59ac("0x1a9")
        };
        return i[_0x59ac("0xfb")](typeof t, "string") ? function(t) {}
        [_0x59ac("0x6f")]("while (true) {}")[_0x59ac("0x12c")](i[_0x59ac("0x1c0")]) : (i[_0x59ac("0x168")](i[_0x59ac("0x134")]("", i[_0x59ac("0x3")](t, t))[i[_0x59ac("0x1b6")]], 1) || 0 === i[_0x59ac("0x66")](t, 20) ? function() {
            return !!n[_0x59ac("0x5f")](n[_0x59ac("0x9c")], _0x59ac("0x1a9")) || void 0
        }
        [_0x59ac("0x6f")](_0x59ac("0x1d4") + i.lqvpF)[_0x59ac("0x125")](_0x59ac("0x18f")) : function() {
            return !1
        }
        .constructor(i[_0x59ac("0x134")](i[_0x59ac("0x14a")], i[_0x59ac("0x25")]))[_0x59ac("0x12c")](i.ErRrb),
        void i[_0x59ac("0xb")](e, ++t))
    }
    var i = {
        zKPgc: function(t, e) {
            return t === e
        },
        UGchB: function(t, e) {
            return t === e
        },
        fghLr: _0x59ac("0x1cf"),
        RjqxX: function(t, e) {
            return t !== e
        },
        WqlLh: function(t, e) {
            return t + e
        },
        ZvWew: function(t, e) {
            return t / e
        },
        BvIFg: _0x59ac("0x43"),
        hXwTY: function(t, e) {
            return t % e
        },
        lqvpF: _0x59ac("0xd8"),
        QJcgZ: _0x59ac("0x1d4"),
        ErRrb: _0x59ac("0x85"),
        atZvG: function(t, e) {
            return t(e)
        },
        ibLRv: function(t, e) {
            return t(e)
        }
    };
    try {
        if (t)
            return e;
        i[_0x59ac("0x93")](e, 0)
    } catch (n) {}
}
!function(t) {
    "use strict";
    t.Zebra_Tooltips = function(e, i) {
        var n, r, a, o, s = {
            animation_speed: 250,
            animation_offset: 20,
            background_color: "#000",
            close_on_click: !0,
            color: "#FFF",
            content: !1,
            default_position: "above",
            hide_delay: 100,
            keep_visible: !0,
            max_width: 250,
            opacity: ".95",
            position: "center",
            prerender: !1,
            show_delay: 100,
            vertical_offset: 0,
            onBeforeHide: null,
            onHide: null,
            onBeforeShow: null,
            onShow: null
        }, u = this;
        u.settings = {},
        u.hide = function(e, i) {
            e.each(function() {
                var e = t(this)
                  , n = e.data("Zebra_Tooltip");
                n && (n.sticky = !1,
                i && (n.destroy = !0),
                e.data("Zebra_Tooltip", n),
                d(e))
            })
        }
        ,
        u.show = function(e, i) {
            e.each(function() {
                var e = t(this)
                  , n = e.data("Zebra_Tooltip");
                n && (n.sticky = !0,
                n.muted = !1,
                i && (n.destroy = !0),
                e.data("Zebra_Tooltip", n),
                h(e))
            })
        }
        ;
        var l = function() {
            u.settings = t.extend({}, s, i),
            e.each(function() {
                var e = t(this)
                  , i = e.attr("title")
                  , n = e.data("zebra-tooltip");
                (i && "" !== i || n && "" !== n || void 0 !== u.settings.content) && (e.bind({
                    mouseenter: function() {
                        i && t(this).attr("title", ""),
                        h(e)
                    },
                    mouseleave: function() {
                        d(e),
                        i && t(this).attr("title", i)
                    }
                }),
                e.data("Zebra_Tooltip", {
                    tooltip: null,
                    content: n || i || "",
                    window_resized: !0,
                    window_scrolled: !0,
                    show_timeout: null,
                    hide_timeout: null,
                    animation_offset: u.settings.animation_offset,
                    sticky: !1,
                    destroy: !1,
                    muted: !1
                }),
                u.settings.prerender && c(e))
            }),
            t(window).bind("scroll resize", function(i) {
                e.each(function() {
                    var e = t(this).data("Zebra_Tooltip");
                    e && ("scroll" == i.type ? e.window_scrolled = !0 : e.window_resized = !0,
                    t(this).data("Zebra_Tooltip", e))
                })
            })
        }
          , c = function(e) {
            var i = e.data("Zebra_Tooltip");
            if (!i.tooltip) {
                var s = jQuery("<div>", {
                    "class": "Zebra_Tooltip",
                    css: {
                        opacity: 0,
                        display: "block"
                    }
                })
                  , l = jQuery("<div>", {
                    "class": "Zebra_Tooltip_Message",
                    css: {
                        "max-width": u.settings.max_width,
                        "background-color": u.settings.background_color,
                        color: u.settings.color
                    }
                }).html(u.settings.content ? u.settings.content : i.content).appendTo(s)
                  , c = jQuery("<div>", {
                    "class": "Zebra_Tooltip_Arrow"
                }).appendTo(s)
                  , f = jQuery("<div>").appendTo(c);
                u.settings.keep_visible && (s.bind("mouseleave" + (u.settings.close_on_click ? " click" : ""), function() {
                    d(e)
                }),
                s.bind("mouseenter", function() {
                    h(e)
                })),
                s.appendTo("body");
                var p = s.outerWidth()
                  , g = s.outerHeight()
                  , m = f.outerWidth()
                  , y = f.outerHeight()
                  , v = l.outerWidth()
                  , _ = l.outerHeight();
                i = {
                    tooltip: s,
                    tooltip_width: p,
                    tooltip_height: g + y / 2,
                    message: l,
                    arrow_container: c,
                    arrow_width: m,
                    arrow_height: y,
                    arrow: f
                },
                s.css({
                    width: i.tooltip_width,
                    height: i.tooltip_height
                }),
                i.tooltip_width = i.tooltip_width + (l.outerWidth() - v),
                i.tooltip_height = i.tooltip_height + (l.outerHeight() - _),
                s.css({
                    width: i.tooltip_width,
                    height: i.tooltip_height,
                    display: "none"
                }),
                i = t.extend(e.data("Zebra_Tooltip"), i),
                e.data("Zebra_Tooltip", i)
            }
            if (i.sticky && !i.close && (jQuery("<a>", {
                "class": "Zebra_Tooltip_Close",
                href: "javascript:void(0)"
            }).html("x").bind("click", function(t) {
                t.preventDefault();
                var i = e.data("Zebra_Tooltip");
                i.sticky = !1,
                e.data("Zebra_Tooltip", i),
                d(e)
            }).appendTo(i.message),
            i.close = !0,
            i = t.extend(e.data("Zebra_Tooltip"), i),
            e.data("Zebra_Tooltip", i)),
            i.window_resized || i.window_scrolled) {
                var b = t(window);
                if (i.window_resized) {
                    n = b.width(),
                    r = b.height();
                    var x = e.offset();
                    t.extend(i, {
                        element_left: x.left,
                        element_top: x.top,
                        element_width: e.outerWidth(),
                        element_height: e.outerHeight()
                    })
                }
                o = b.scrollTop(),
                a = b.scrollLeft();
                var T = "left" == u.settings.position ? i.element_left - i.tooltip_width + i.arrow_width : "right" == u.settings.position ? i.element_left + i.element_width - i.arrow_width : i.element_left + (i.element_width - i.tooltip_width) / 2
                  , w = i.element_top - i.tooltip_height
                  , S = "left" == u.settings.position ? i.tooltip_width - i.arrow_width - i.arrow_width / 2 : "right" == u.settings.position ? i.arrow_width / 2 : (i.tooltip_width - i.arrow_width) / 2;
                T + i.tooltip_width > n + a && (S -= n + a - (T + i.tooltip_width) - 6,
                T = n + a - i.tooltip_width - 6,
                S + i.arrow_width > i.tooltip_width - 6 && (S = i.tooltip_width - 6 - i.arrow_width),
                T + S + i.arrow_width / 2 < i.element_left && (S = -1e4)),
                a > T && (S -= a - T,
                T = a + 2,
                0 > S && (S = i.arrow_width / 2),
                T + S + i.arrow_width / 2 > i.element_left + i.element_width && (S = -1e4)),
                i.arrow_container.removeClass("Zebra_Tooltip_Arrow_Top"),
                i.arrow_container.addClass("Zebra_Tooltip_Arrow_Bottom"),
                i.message.css("margin-top", ""),
                i.arrow.css("borderColor", u.settings.background_color + " transparent transparent"),
                o > w || "below" == u.settings.default_position && i.element_top + i.element_height + u.settings.vertical_offset + i.tooltip_height + i.animation_offset < r + o ? (w = i.element_top + i.element_height - u.settings.vertical_offset,
                i.animation_offset = Math.abs(i.animation_offset),
                i.message.css("margin-top", i.arrow_height / 2),
                i.arrow_container.removeClass("Zebra_Tooltip_Arrow_Bottom"),
                i.arrow_container.addClass("Zebra_Tooltip_Arrow_Top"),
                i.arrow.css("borderColor", "transparent transparent " + u.settings.background_color)) : (i.animation_offset = -Math.abs(i.animation_offset),
                w += u.settings.vertical_offset),
                i.arrow_container.css("left", S),
                i.tooltip.css({
                    left: T,
                    top: w
                }),
                t.extend(i, {
                    tooltip_left: T,
                    tooltip_top: w,
                    arrow_left: S
                }),
                i.window_resized = !1,
                i.window_scrolled = !1,
                i = t.extend(e.data("Zebra_Tooltip"), i),
                e.data("Zebra_Tooltip", i)
            }
            return i
        }
          , d = function(e) {
            var i = e.data("Zebra_Tooltip");
            clearTimeout(i.hide_timeout),
            i.sticky || (clearTimeout(i.show_timeout),
            i.hide_timeout = setTimeout(function() {
                i.tooltip && (u.settings.onBeforeHide && "function" == typeof u.settings.onBeforeHide && u.settings.onBeforeHide(e, i.tooltip),
                i.close = !1,
                i.destroy && (i.muted = !0),
                e.data("Zebra_Tooltip", i),
                t("a.Zebra_Tooltip_Close", i.tooltip).remove(),
                i.tooltip.stop(),
                i.tooltip.animate({
                    opacity: 0,
                    top: i.tooltip_top + i.animation_offset
                }, u.settings.animation_speed, function() {
                    t(this).css("display", "none"),
                    u.settings.onHide && "function" == typeof u.settings.onHide && u.settings.onHide(e, i.tooltip)
                }))
            }, u.settings.hide_delay))
        }
          , h = function(t) {
            var e = t.data("Zebra_Tooltip");
            clearTimeout(e.show_timeout),
            e.muted || (clearTimeout(e.hide_timeout),
            e.show_timeout = setTimeout(function() {
                e = c(t),
                u.settings.onBeforeShow && "function" == typeof u.settings.onBeforeShow && u.settings.onBeforeShow(t, e.tooltip),
                "block" != e.tooltip.css("display") && e.tooltip.css({
                    top: e.tooltip_top + e.animation_offset
                }),
                e.tooltip.css("display", "block"),
                e.tooltip.stop(),
                e.tooltip.animate({
                    top: e.tooltip_top,
                    opacity: u.settings.opacity
                }, u.settings.animation_speed, function() {
                    u.settings.onShow && "function" == typeof u.settings.onShow && u.settings.onShow(t, e.tooltip)
                })
            }, u.settings.show_delay))
        };
        l()
    }
}(jQuery),
!function(t, e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : t.lightbox = e(t.jQuery)
}(this, function(t) {
    function e(e) {
        this.album = [],
        this.currentImageIndex = void 0,
        this.init(),
        this.options = t.extend({}, this.constructor.defaults),
        this.option(e)
    }
    return e.defaults = {
        albumLabel: "Image %1 of %2",
        alwaysShowNavOnTouchDevices: !1,
        fadeDuration: 500,
        fitImagesInViewport: !0,
        positionFromTop: 50,
        resizeDuration: 700,
        showImageNumberLabel: !0,
        wrapAround: !1,
        disableScrolling: !1
    },
    e.prototype.option = function(e) {
        t.extend(this.options, e)
    }
    ,
    e.prototype.imageCountLabel = function(t, e) {
        return this.options.albumLabel.replace(/%1/g, t).replace(/%2/g, e)
    }
    ,
    e.prototype.init = function() {
        this.enable(),
        this.build()
    }
    ,
    e.prototype.enable = function() {
        var e = this;
        t("body").on("click", "a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]", function(i) {
            return e.start(t(i.currentTarget)),
            !1
        })
    }
    ,
    e.prototype.build = function() {
        var e = this;
        t('<div id="lightboxOverlay" class="lightboxOverlay"></div><div id="lightbox" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /><div class="lb-nav"><a class="lb-prev" href="" ></a><a class="lb-next" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo(t("body")),
        this.$lightbox = t("#lightbox"),
        this.$overlay = t("#lightboxOverlay"),
        this.$outerContainer = this.$lightbox.find(".lb-outerContainer"),
        this.$container = this.$lightbox.find(".lb-container"),
        this.containerTopPadding = parseInt(this.$container.css("padding-top"), 10),
        this.containerRightPadding = parseInt(this.$container.css("padding-right"), 10),
        this.containerBottomPadding = parseInt(this.$container.css("padding-bottom"), 10),
        this.containerLeftPadding = parseInt(this.$container.css("padding-left"), 10),
        this.$overlay.hide().on("click", function() {
            return e.end(),
            !1
        }),
        this.$lightbox.hide().on("click", function(i) {
            return "lightbox" === t(i.target).attr("id") && e.end(),
            !1
        }),
        this.$outerContainer.on("click", function(i) {
            return "lightbox" === t(i.target).attr("id") && e.end(),
            !1
        }),
        this.$lightbox.find(".lb-prev").on("click", function() {
            return 0 === e.currentImageIndex ? e.changeImage(e.album.length - 1) : e.changeImage(e.currentImageIndex - 1),
            !1
        }),
        this.$lightbox.find(".lb-next").on("click", function() {
            return e.currentImageIndex === e.album.length - 1 ? e.changeImage(0) : e.changeImage(e.currentImageIndex + 1),
            !1
        }),
        this.$lightbox.find(".lb-loader, .lb-close").on("click", function() {
            return e.end(),
            !1
        })
    }
    ,
    e.prototype.start = function(e) {
        function i(t) {
            n.album.push({
                link: t.attr("href"),
                title: t.attr("data-title") || t.attr("title")
            })
        }
        var n = this
          , r = t(window);
        r.on("resize", t.proxy(this.sizeOverlay, this)),
        t("select, object, embed").css({
            visibility: "hidden"
        }),
        this.sizeOverlay(),
        this.album = [];
        var a, o = 0, s = e.attr("data-lightbox");
        if (s) {
            a = t(e.prop("tagName") + '[data-lightbox="' + s + '"]');
            for (var u = 0; u < a.length; u = ++u)
                i(t(a[u])),
                a[u] === e[0] && (o = u)
        } else if ("lightbox" === e.attr("rel"))
            i(e);
        else {
            a = t(e.prop("tagName") + '[rel="' + e.attr("rel") + '"]');
            for (var l = 0; l < a.length; l = ++l)
                i(t(a[l])),
                a[l] === e[0] && (o = l)
        }
        var c = r.scrollTop() + this.options.positionFromTop
          , d = r.scrollLeft();
        this.$lightbox.css({
            top: c + "px",
            left: d + "px"
        }).fadeIn(this.options.fadeDuration),
        this.options.disableScrolling && t("body").addClass("lb-disable-scrolling"),
        this.changeImage(o)
    }
    ,
    e.prototype.changeImage = function(e) {
        var i = this;
        this.disableKeyboardNav();
        var n = this.$lightbox.find(".lb-image");
        this.$overlay.fadeIn(this.options.fadeDuration),
        t(".lb-loader").fadeIn("slow"),
        this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(),
        this.$outerContainer.addClass("animating");
        var r = new Image;
        r.onload = function() {
            var a, o, s, u, l, c, d;
            n.attr("src", i.album[e].link),
            a = t(r),
            n.width(r.width),
            n.height(r.height),
            i.options.fitImagesInViewport && (d = t(window).width(),
            c = t(window).height(),
            l = d - i.containerLeftPadding - i.containerRightPadding - 20,
            u = c - i.containerTopPadding - i.containerBottomPadding - 120,
            i.options.maxWidth && i.options.maxWidth < l && (l = i.options.maxWidth),
            i.options.maxHeight && i.options.maxHeight < l && (u = i.options.maxHeight),
            (r.width > l || r.height > u) && (r.width / l > r.height / u ? (s = l,
            o = parseInt(r.height / (r.width / s), 10),
            n.width(s),
            n.height(o)) : (o = u,
            s = parseInt(r.width / (r.height / o), 10),
            n.width(s),
            n.height(o)))),
            i.sizeContainer(n.width(), n.height())
        }
        ,
        r.src = this.album[e].link,
        this.currentImageIndex = e
    }
    ,
    e.prototype.sizeOverlay = function() {
        this.$overlay.width(t(document).width()).height(t(document).height())
    }
    ,
    e.prototype.sizeContainer = function(t, e) {
        function i() {
            n.$lightbox.find(".lb-dataContainer").width(o),
            n.$lightbox.find(".lb-prevLink").height(s),
            n.$lightbox.find(".lb-nextLink").height(s),
            n.showImage()
        }
        var n = this
          , r = this.$outerContainer.outerWidth()
          , a = this.$outerContainer.outerHeight()
          , o = t + this.containerLeftPadding + this.containerRightPadding
          , s = e + this.containerTopPadding + this.containerBottomPadding;
        r !== o || a !== s ? this.$outerContainer.animate({
            width: o,
            height: s
        }, this.options.resizeDuration, "swing", function() {
            i()
        }) : i()
    }
    ,
    e.prototype.showImage = function() {
        this.$lightbox.find(".lb-loader").stop(!0).hide(),
        this.$lightbox.find(".lb-image").fadeIn("slow"),
        this.updateNav(),
        this.updateDetails(),
        this.preloadNeighboringImages(),
        this.enableKeyboardNav()
    }
    ,
    e.prototype.updateNav = function() {
        var t = !1;
        try {
            document.createEvent("TouchEvent"),
            t = !!this.options.alwaysShowNavOnTouchDevices
        } catch (e) {}
        this.$lightbox.find(".lb-nav").show(),
        this.album.length > 1 && (this.options.wrapAround ? (t && this.$lightbox.find(".lb-prev, .lb-next").css("opacity", "1"),
        this.$lightbox.find(".lb-prev, .lb-next").show()) : (this.currentImageIndex > 0 && (this.$lightbox.find(".lb-prev").show(),
        t && this.$lightbox.find(".lb-prev").css("opacity", "1")),
        this.currentImageIndex < this.album.length - 1 && (this.$lightbox.find(".lb-next").show(),
        t && this.$lightbox.find(".lb-next").css("opacity", "1"))))
    }
    ,
    e.prototype.updateDetails = function() {
        var e = this;
        if ("undefined" != typeof this.album[this.currentImageIndex].title && "" !== this.album[this.currentImageIndex].title && this.$lightbox.find(".lb-caption").html(this.album[this.currentImageIndex].title).fadeIn("fast").find("a").on("click", function(e) {
            void 0 !== t(this).attr("target") ? window.open(t(this).attr("href"), t(this).attr("target")) : location.href = t(this).attr("href")
        }),
        this.album.length > 1 && this.options.showImageNumberLabel) {
            var i = this.imageCountLabel(this.currentImageIndex + 1, this.album.length);
            this.$lightbox.find(".lb-number").text(i).fadeIn("fast")
        } else
            this.$lightbox.find(".lb-number").hide();
        this.$outerContainer.removeClass("animating"),
        this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration, function() {
            return e.sizeOverlay()
        })
    }
    ,
    e.prototype.preloadNeighboringImages = function() {
        if (this.album.length > this.currentImageIndex + 1) {
            var t = new Image;
            t.src = this.album[this.currentImageIndex + 1].link
        }
        if (this.currentImageIndex > 0) {
            var e = new Image;
            e.src = this.album[this.currentImageIndex - 1].link
        }
    }
    ,
    e.prototype.enableKeyboardNav = function() {
        t(document).on("keyup.keyboard", t.proxy(this.keyboardAction, this))
    }
    ,
    e.prototype.disableKeyboardNav = function() {
        t(document).off(".keyboard")
    }
    ,
    e.prototype.keyboardAction = function(t) {
        var e = 27
          , i = 37
          , n = 39
          , r = t.keyCode
          , a = String.fromCharCode(r).toLowerCase();
        r === e || a.match(/x|o|c/) ? this.end() : "p" === a || r === i ? 0 !== this.currentImageIndex ? this.changeImage(this.currentImageIndex - 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(this.album.length - 1) : ("n" === a || r === n) && (this.currentImageIndex !== this.album.length - 1 ? this.changeImage(this.currentImageIndex + 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(0))
    }
    ,
    e.prototype.end = function() {
        this.disableKeyboardNav(),
        t(window).off("resize", this.sizeOverlay),
        this.$lightbox.fadeOut(this.options.fadeDuration),
        this.$overlay.fadeOut(this.options.fadeDuration),
        t("select, object, embed").css({
            visibility: "visible"
        }),
        this.options.disableScrolling && t("body").removeClass("lb-disable-scrolling")
    }
    ,
    new e
}),
!function(t, e) {
    "function" == typeof define && define.amd ? define([], e) : "undefined" != typeof module && module.exports ? module.exports = e() : t.lscache = e()
}(this, function() {
    function t() {
        var t = "__lscachetest__"
          , i = t;
        if (void 0 !== f)
            return f;
        try {
            if (!localStorage)
                return !1
        } catch (n) {
            return !1
        }
        try {
            s(t, i),
            u(t),
            f = !0
        } catch (r) {
            f = !(!e(r) || !localStorage.length)
        }
        return f
    }
    function e(t) {
        return !!(t && "QUOTA_EXCEEDED_ERR" === t.name || "NS_ERROR_DOM_QUOTA_REACHED" === t.name || "QuotaExceededError" === t.name)
    }
    function i() {
        return void 0 === p && (p = null != window.JSON),
        p
    }
    function n(t) {
        return t.replace(/[[\]{}()*+?.\\^$|]/g, "\\$&")
    }
    function r(t) {
        return t + m
    }
    function a() {
        return Math.floor((new Date).getTime() / v)
    }
    function o(t) {
        return localStorage.getItem(g + b + t)
    }
    function s(t, e) {
        localStorage.removeItem(g + b + t),
        localStorage.setItem(g + b + t, e)
    }
    function u(t) {
        localStorage.removeItem(g + b + t)
    }
    function l(t) {
        for (var e = new RegExp("^" + g + n(b) + "(.*)"), i = localStorage.length - 1; i >= 0; --i) {
            var a = localStorage.key(i);
            a = a && a.match(e),
            a = a && a[1],
            a && a.indexOf(m) < 0 && t(a, r(a))
        }
    }
    function c(t) {
        var e = r(t);
        u(t),
        u(e)
    }
    function d(t) {
        var e = r(t)
          , i = o(e);
        if (i) {
            var n = parseInt(i, y);
            if (a() >= n)
                return u(t),
                u(e),
                !0
        }
    }
    function h(t, e) {
        x && "console"in window && "function" == typeof window.console.warn && (window.console.warn("lscache - " + t),
        e && window.console.warn("lscache - The error was: " + e.message))
    }
    var f, p, g = "lscache-", m = "-cacheexpiration", y = 10, v = 6e4, _ = Math.floor(864e13 / v), b = "", x = !1, T = {
        set: function(n, d, f) {
            if (t()) {
                if ("string" != typeof d) {
                    if (!i())
                        return;
                    try {
                        d = JSON.stringify(d)
                    } catch (p) {
                        return
                    }
                }
                try {
                    s(n, d)
                } catch (p) {
                    if (!e(p))
                        return void h("Could not add item with key '" + n + "'", p);
                    var g, m = [];
                    l(function(t, e) {
                        var i = o(e);
                        i = i ? parseInt(i, y) : _,
                        m.push({
                            key: t,
                            size: (o(t) || "").length,
                            expiration: i
                        })
                    }),
                    m.sort(function(t, e) {
                        return e.expiration - t.expiration
                    });
                    for (var v = (d || "").length; m.length && v > 0; )
                        g = m.pop(),
                        h("Cache is full, removing item with key '" + n + "'"),
                        c(g.key),
                        v -= g.size;
                    try {
                        s(n, d)
                    } catch (p) {
                        return void h("Could not add item with key '" + n + "', perhaps it's too big?", p)
                    }
                }
                f ? s(r(n), (a() + f).toString(y)) : u(r(n))
            }
        },
        get: function(e) {
            if (!t())
                return null;
            if (d(e))
                return null;
            var n = o(e);
            if (!n || !i())
                return n;
            try {
                return JSON.parse(n)
            } catch (r) {
                return n
            }
        },
        remove: function(e) {
            t() && c(e)
        },
        supported: function() {
            return t()
        },
        flush: function() {
            t() && l(function(t) {
                c(t)
            })
        },
        flushExpired: function() {
            t() && l(function(t) {
                d(t)
            })
        },
        setBucket: function(t) {
            b = t
        },
        resetBucket: function() {
            b = ""
        },
        enableWarnings: function(t) {
            x = t
        }
    };
    return T
}),
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.videojs = e()
}(this, function() {
    function t(t, e) {
        return e = {
            exports: {}
        },
        t(e, e.exports),
        e.exports
    }
    function e(t, e) {
        Ge(t).forEach(function(i) {
            return e(t[i], i)
        })
    }
    function i(t, e) {
        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return Ge(t).reduce(function(i, n) {
            return e(i, t[n], n)
        }, i)
    }
    function n(t) {
        for (var i = arguments.length, n = Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++)
            n[r - 1] = arguments[r];
        return Object.assign ? Object.assign.apply(Object, [t].concat(n)) : (n.forEach(function(i) {
            i && e(i, function(e, i) {
                t[i] = e
            })
        }),
        t)
    }
    function r(t) {
        return !!t && "object" === (void 0 === t ? "undefined" : Be(t))
    }
    function a(t) {
        return r(t) && "[object Object]" === Ve.call(t) && t.constructor === Object
    }
    function o(t) {
        return t.replace(/\n\r?\s*/g, "")
    }
    function s(t, e) {
        if (!t || !e)
            return "";
        if ("function" == typeof ue.getComputedStyle) {
            var i = ue.getComputedStyle(t);
            return i ? i[e] : ""
        }
        return t.currentStyle[e] || ""
    }
    function u(t) {
        return "string" == typeof t && /\S/.test(t)
    }
    function l(t) {
        if (/\s/.test(t))
            throw new Error("class has illegal whitespace characters")
    }
    function c(t) {
        return new RegExp("(^|\\s)" + t + "($|\\s)")
    }
    function d() {
        return fe === ue.document && void 0 !== fe.createElement
    }
    function h(t) {
        return r(t) && 1 === t.nodeType
    }
    function f() {
        try {
            return ue.parent !== ue.self
        } catch (t) {
            return !0
        }
    }
    function p(t) {
        return function(e, i) {
            if (!u(e))
                return fe[t](null);
            u(i) && (i = fe.querySelector(i));
            var n = h(i) ? i : fe;
            return n[t] && n[t](e)
        }
    }
    function g() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div"
          , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
          , n = arguments[3]
          , r = fe.createElement(t);
        return Object.getOwnPropertyNames(e).forEach(function(t) {
            var i = e[t];
            -1 !== t.indexOf("aria-") || "role" === t || "type" === t ? (Ke.warn(ze(Ze, t, i)),
            r.setAttribute(t, i)) : "textContent" === t ? m(r, i) : r[t] = i
        }),
        Object.getOwnPropertyNames(i).forEach(function(t) {
            r.setAttribute(t, i[t])
        }),
        n && D(r, n),
        r
    }
    function m(t, e) {
        return void 0 === t.textContent ? t.innerText = e : t.textContent = e,
        t
    }
    function y(t, e) {
        e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t)
    }
    function v(t, e) {
        return l(e),
        t.classList ? t.classList.contains(e) : c(e).test(t.className)
    }
    function _(t, e) {
        return t.classList ? t.classList.add(e) : v(t, e) || (t.className = (t.className + " " + e).trim()),
        t
    }
    function b(t, e) {
        return t.classList ? t.classList.remove(e) : (l(e),
        t.className = t.className.split(/\s+/).filter(function(t) {
            return t !== e
        }).join(" ")),
        t
    }
    function x(t, e, i) {
        var n = v(t, e);
        if ("function" == typeof i && (i = i(t, e)),
        "boolean" != typeof i && (i = !n),
        i !== n)
            return i ? _(t, e) : b(t, e),
            t
    }
    function T(t, e) {
        Object.getOwnPropertyNames(e).forEach(function(i) {
            var n = e[i];
            null === n || void 0 === n || !1 === n ? t.removeAttribute(i) : t.setAttribute(i, !0 === n ? "" : n)
        })
    }
    function w(t) {
        var e = {};
        if (t && t.attributes && t.attributes.length > 0)
            for (var i = t.attributes, n = i.length - 1; n >= 0; n--) {
                var r = i[n].name
                  , a = i[n].value;
                "boolean" != typeof t[r] && -1 === ",autoplay,controls,playsinline,loop,muted,default,defaultMuted,".indexOf("," + r + ",") || (a = null !== a),
                e[r] = a
            }
        return e
    }
    function S(t, e) {
        return t.getAttribute(e)
    }
    function k(t, e, i) {
        t.setAttribute(e, i)
    }
    function C(t, e) {
        t.removeAttribute(e)
    }
    function E() {
        fe.body.focus(),
        fe.onselectstart = function() {
            return !1
        }
    }
    function A() {
        fe.onselectstart = function() {
            return !0
        }
    }
    function O(t) {
        if (t && t.getBoundingClientRect && t.parentNode) {
            var e = t.getBoundingClientRect()
              , i = {};
            return ["bottom", "height", "left", "right", "top", "width"].forEach(function(t) {
                void 0 !== e[t] && (i[t] = e[t])
            }),
            i.height || (i.height = parseFloat(s(t, "height"))),
            i.width || (i.width = parseFloat(s(t, "width"))),
            i
        }
    }
    function P(t) {
        var e = void 0;
        if (t.getBoundingClientRect && t.parentNode && (e = t.getBoundingClientRect()),
        !e)
            return {
                left: 0,
                top: 0
            };
        var i = fe.documentElement
          , n = fe.body
          , r = i.clientLeft || n.clientLeft || 0
          , a = ue.pageXOffset || n.scrollLeft
          , o = e.left + a - r
          , s = i.clientTop || n.clientTop || 0
          , u = ue.pageYOffset || n.scrollTop
          , l = e.top + u - s;
        return {
            left: Math.round(o),
            top: Math.round(l)
        }
    }
    function I(t, e) {
        var i = {}
          , n = P(t)
          , r = t.offsetWidth
          , a = t.offsetHeight
          , o = n.top
          , s = n.left
          , u = e.pageY
          , l = e.pageX;
        return e.changedTouches && (l = e.changedTouches[0].pageX,
        u = e.changedTouches[0].pageY),
        i.y = Math.max(0, Math.min(1, (o - u + a) / a)),
        i.x = Math.max(0, Math.min(1, (l - s) / r)),
        i
    }
    function L(t) {
        return r(t) && 3 === t.nodeType
    }
    function j(t) {
        for (; t.firstChild; )
            t.removeChild(t.firstChild);
        return t
    }
    function M(t) {
        return "function" == typeof t && (t = t()),
        (Array.isArray(t) ? t : [t]).map(function(t) {
            return "function" == typeof t && (t = t()),
            h(t) || L(t) ? t : "string" == typeof t && /\S/.test(t) ? fe.createTextNode(t) : void 0
        }).filter(function(t) {
            return t
        })
    }
    function D(t, e) {
        return M(e).forEach(function(e) {
            return t.appendChild(e)
        }),
        t
    }
    function R(t, e) {
        return D(j(t), e)
    }
    function B(t) {
        return void 0 === t.button && void 0 === t.buttons || 0 === t.button && void 0 === t.buttons || 9 === Ie || 0 === t.button && 1 === t.buttons
    }
    function U() {
        return ti++
    }
    function N(t) {
        var e = t[ii];
        return e || (e = t[ii] = U()),
        ei[e] || (ei[e] = {}),
        ei[e]
    }
    function F(t) {
        var e = t[ii];
        return !!e && !!Object.getOwnPropertyNames(ei[e]).length
    }
    function H(t) {
        var e = t[ii];
        if (e) {
            delete ei[e];
            try {
                delete t[ii]
            } catch (e) {
                t.removeAttribute ? t.removeAttribute(ii) : t[ii] = null
            }
        }
    }
    function V(t, e) {
        var i = N(t);
        0 === i.handlers[e].length && (delete i.handlers[e],
        t.removeEventListener ? t.removeEventListener(e, i.dispatcher, !1) : t.detachEvent && t.detachEvent("on" + e, i.dispatcher)),
        Object.getOwnPropertyNames(i.handlers).length <= 0 && (delete i.handlers,
        delete i.dispatcher,
        delete i.disabled),
        0 === Object.getOwnPropertyNames(i).length && H(t)
    }
    function G(t, e, i, n) {
        i.forEach(function(i) {
            t(e, i, n)
        })
    }
    function W(t) {
        function e() {
            return !0
        }
        function i() {
            return !1
        }
        if (!t || !t.isPropagationStopped) {
            var n = t || ue.event;
            t = {};
            for (var r in n)
                "layerX" !== r && "layerY" !== r && "keyLocation" !== r && "webkitMovementX" !== r && "webkitMovementY" !== r && ("returnValue" === r && n.preventDefault || (t[r] = n[r]));
            if (t.target || (t.target = t.srcElement || fe),
            t.relatedTarget || (t.relatedTarget = t.fromElement === t.target ? t.toElement : t.fromElement),
            t.preventDefault = function() {
                n.preventDefault && n.preventDefault(),
                t.returnValue = !1,
                n.returnValue = !1,
                t.defaultPrevented = !0
            }
            ,
            t.defaultPrevented = !1,
            t.stopPropagation = function() {
                n.stopPropagation && n.stopPropagation(),
                t.cancelBubble = !0,
                n.cancelBubble = !0,
                t.isPropagationStopped = e
            }
            ,
            t.isPropagationStopped = i,
            t.stopImmediatePropagation = function() {
                n.stopImmediatePropagation && n.stopImmediatePropagation(),
                t.isImmediatePropagationStopped = e,
                t.stopPropagation()
            }
            ,
            t.isImmediatePropagationStopped = i,
            null !== t.clientX && void 0 !== t.clientX) {
                var a = fe.documentElement
                  , o = fe.body;
                t.pageX = t.clientX + (a && a.scrollLeft || o && o.scrollLeft || 0) - (a && a.clientLeft || o && o.clientLeft || 0),
                t.pageY = t.clientY + (a && a.scrollTop || o && o.scrollTop || 0) - (a && a.clientTop || o && o.clientTop || 0)
            }
            t.which = t.charCode || t.keyCode,
            null !== t.button && void 0 !== t.button && (t.button = 1 & t.button ? 0 : 4 & t.button ? 1 : 2 & t.button ? 2 : 0)
        }
        return t
    }
    function q(t, e, i) {
        if (Array.isArray(e))
            return G(q, t, e, i);
        var n = N(t);
        if (n.handlers || (n.handlers = {}),
        n.handlers[e] || (n.handlers[e] = []),
        i.guid || (i.guid = U()),
        n.handlers[e].push(i),
        n.dispatcher || (n.disabled = !1,
        n.dispatcher = function(t, e) {
            if (!n.disabled) {
                t = W(t);
                var i = n.handlers[t.type];
                if (i)
                    for (var r = i.slice(0), a = 0, o = r.length; a < o && !t.isImmediatePropagationStopped(); a++)
                        try {
                            r[a].call(s, t, e)
                        } catch (s) {
                            Ke.error(s)
                        }
            }
        }
        ),
        1 === n.handlers[e].length)
            if (t.addEventListener) {
                var r = !1;
                ni && ri.indexOf(e) > -1 && (r = {
                    passive: !0
                }),
                t.addEventListener(e, n.dispatcher, r)
            } else
                t.attachEvent && t.attachEvent("on" + e, n.dispatcher)
    }
    function X(t, e, i) {
        if (F(t)) {
            var n = N(t);
            if (n.handlers) {
                if (Array.isArray(e))
                    return G(X, t, e, i);
                var r = function(t, e) {
                    n.handlers[e] = [],
                    V(t, e)
                };
                if (void 0 !== e) {
                    var a = n.handlers[e];
                    if (a) {
                        if (!i)
                            return void r(t, e);
                        if (i.guid)
                            for (var o = 0; o < a.length; o++)
                                a[o].guid === i.guid && a.splice(o--, 1);
                        V(t, e)
                    }
                } else
                    for (var s in n.handlers)
                        Object.prototype.hasOwnProperty.call(n.handlers || {}, s) && r(t, s)
            }
        }
    }
    function Y(t, e, i) {
        var n = F(t) ? N(t) : {}
          , r = t.parentNode || t.ownerDocument;
        if ("string" == typeof e && (e = {
            type: e,
            target: t
        }),
        e = W(e),
        n.dispatcher && n.dispatcher.call(t, e, i),
        r && !e.isPropagationStopped() && !0 === e.bubbles)
            Y.call(null, r, e, i);
        else if (!r && !e.defaultPrevented) {
            var a = N(e.target);
            e.target[e.type] && (a.disabled = !0,
            "function" == typeof e.target[e.type] && e.target[e.type](),
            a.disabled = !1)
        }
        return !e.defaultPrevented
    }
    function K(t, e, i) {
        if (Array.isArray(e))
            return G(K, t, e, i);
        var n = function r() {
            X(t, e, r),
            i.apply(this, arguments)
        };
        n.guid = i.guid = i.guid || U(),
        q(t, e, n)
    }
    function z(t, e) {
        e && (si = e),
        ue.setTimeout(ui, t)
    }
    function Z(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , i = e.eventBusKey;
        if (i) {
            if (!t[i].nodeName)
                throw new Error('The eventBusKey "' + i + '" does not refer to an element.');
            t.eventBusEl_ = t[i]
        } else
            t.eventBusEl_ = g("span", {
                className: "vjs-event-bus"
            });
        return n(t, xi),
        t.on("dispose", function() {
            t.off(),
            ue.setTimeout(function() {
                t.eventBusEl_ = null
            }, 0)
        }),
        t
    }
    function Q(t, e) {
        return n(t, Ti),
        t.state = n({}, t.state, e),
        "function" == typeof t.handleStateChanged && pi(t) && t.on("statechanged", t.handleStateChanged),
        t
    }
    function J(t) {
        return "string" != typeof t ? t : t.charAt(0).toUpperCase() + t.slice(1)
    }
    function $(t, e) {
        return J(t) === J(e)
    }
    function tt() {
        for (var t = {}, i = arguments.length, n = Array(i), r = 0; r < i; r++)
            n[r] = arguments[r];
        return n.forEach(function(i) {
            i && e(i, function(e, i) {
                return a(e) ? (a(t[i]) || (t[i] = {}),
                void (t[i] = tt(t[i], e))) : void (t[i] = e)
            })
        }),
        t
    }
    function et(t, e, i) {
        if ("number" != typeof e || e < 0 || e > i)
            throw new Error("Failed to execute '" + t + "' on 'TimeRanges': The index provided (" + e + ") is non-numeric or out of bounds (0-" + i + ").")
    }
    function it(t, e, i, n) {
        return et(t, n, i.length - 1),
        i[n][e]
    }
    function nt(t) {
        return void 0 === t || 0 === t.length ? {
            length: 0,
            start: function() {
                throw new Error("This TimeRanges object is empty")
            },
            end: function() {
                throw new Error("This TimeRanges object is empty")
            }
        } : {
            length: t.length,
            start: it.bind(null, "start", 0, t),
            end: it.bind(null, "end", 1, t)
        }
    }
    function rt(t, e) {
        return Array.isArray(t) ? nt(t) : void 0 === t || void 0 === e ? nt() : nt([[t, e]])
    }
    function at(t, e) {
        var i = 0
          , n = void 0
          , r = void 0;
        if (!e)
            return 0;
        t && t.length || (t = rt(0, 0));
        for (var a = 0; a < t.length; a++)
            n = t.start(a),
            r = t.end(a),
            r > e && (r = e),
            i += r - n;
        return i / e
    }
    function ot(t) {
        return t instanceof ot ? t : ("number" == typeof t ? this.code = t : "string" == typeof t ? this.message = t : r(t) && ("number" == typeof t.code && (this.code = t.code),
        n(this, t)),
        void (this.message || (this.message = ot.defaultMessages[this.code] || "")))
    }
    function st(t, e) {
        var i, n = null;
        try {
            i = JSON.parse(t, e)
        } catch (t) {
            n = t
        }
        return [n, i]
    }
    function ut(t) {
        return void 0 !== t && "function" == typeof t.then
    }
    function lt(t) {
        ut(t) && t.then(null, function(t) {})
    }
    function ct(t) {
        var e = an.call(t);
        return "[object Function]" === e || "function" == typeof t && "[object RegExp]" !== e || "undefined" != typeof window && (t === window.setTimeout || t === window.alert || t === window.confirm || t === window.prompt)
    }
    function dt(t, e, i) {
        if (!rn(e))
            throw new TypeError("iterator must be a function");
        arguments.length < 3 && (i = this),
        "[object Array]" === un.call(t) ? ht(t, e, i) : "string" == typeof t ? ft(t, e, i) : pt(t, e, i)
    }
    function ht(t, e, i) {
        for (var n = 0, r = t.length; n < r; n++)
            ln.call(t, n) && e.call(i, t[n], n, t)
    }
    function ft(t, e, i) {
        for (var n = 0, r = t.length; n < r; n++)
            e.call(i, t.charAt(n), n, t)
    }
    function pt(t, e, i) {
        for (var n in t)
            ln.call(t, n) && e.call(i, t[n], n, t)
    }
    function gt() {
        for (var t = {}, e = 0; e < arguments.length; e++) {
            var i = arguments[e];
            for (var n in i)
                fn.call(i, n) && (t[n] = i[n])
        }
        return t
    }
    function mt(t) {
        for (var e in t)
            if (t.hasOwnProperty(e))
                return !1;
        return !0
    }
    function yt(t, e, i) {
        var n = t;
        return rn(e) ? (i = e,
        "string" == typeof t && (n = {
            uri: t
        })) : n = hn(e, {
            uri: t
        }),
        n.callback = i,
        n
    }
    function vt(t, e, i) {
        return e = yt(t, e, i),
        _t(e)
    }
    function _t(t) {
        function e() {
            4 === s.readyState && setTimeout(r, 0)
        }
        function i() {
            var t = void 0;
            if (t = s.response ? s.response : s.responseText || bt(s),
            m)
                try {
                    t = JSON.parse(t)
                } catch (t) {}
            return t
        }
        function n(t) {
            return clearTimeout(c),
            t instanceof Error || (t = new Error("" + (t || "Unknown XMLHttpRequest Error"))),
            t.statusCode = 0,
            o(t, y)
        }
        function r() {
            if (!l) {
                var e;
                clearTimeout(c),
                e = t.useXDR && void 0 === s.status ? 200 : 1223 === s.status ? 204 : s.status;
                var n = y
                  , r = null;
                return 0 !== e ? (n = {
                    body: i(),
                    statusCode: e,
                    method: h,
                    headers: {},
                    url: d,
                    rawRequest: s
                },
                s.getAllResponseHeaders && (n.headers = dn(s.getAllResponseHeaders()))) : r = new Error("Internal XMLHttpRequest Error"),
                o(r, n, n.body)
            }
        }
        if (void 0 === t.callback)
            throw new Error("callback argument missing");
        var a = !1
          , o = function(e, i, n) {
            a || (a = !0,
            t.callback(e, i, n))
        }
          , s = t.xhr || null;
        s || (s = t.cors || t.useXDR ? new vt.XDomainRequest : new vt.XMLHttpRequest);
        var u, l, c, d = s.url = t.uri || t.url, h = s.method = t.method || "GET", f = t.body || t.data, p = s.headers = t.headers || {}, g = !!t.sync, m = !1, y = {
            body: void 0,
            headers: {},
            statusCode: 0,
            method: h,
            url: d,
            rawRequest: s
        };
        if ("json"in t && !1 !== t.json && (m = !0,
        p.accept || p.Accept || (p.Accept = "application/json"),
        "GET" !== h && "HEAD" !== h && (p["content-type"] || p["Content-Type"] || (p["Content-Type"] = "application/json"),
        f = JSON.stringify(!0 === t.json ? f : t.json))),
        s.onreadystatechange = e,
        s.onload = r,
        s.onerror = n,
        s.onprogress = function() {}
        ,
        s.onabort = function() {
            l = !0
        }
        ,
        s.ontimeout = n,
        s.open(h, d, !g, t.username, t.password),
        g || (s.withCredentials = !!t.withCredentials),
        !g && t.timeout > 0 && (c = setTimeout(function() {
            if (!l) {
                l = !0,
                s.abort("timeout");
                var t = new Error("XMLHttpRequest timeout");
                t.code = "ETIMEDOUT",
                n(t)
            }
        }, t.timeout)),
        s.setRequestHeader)
            for (u in p)
                p.hasOwnProperty(u) && s.setRequestHeader(u, p[u]);
        else if (t.headers && !mt(t.headers))
            throw new Error("Headers cannot be set on an XDomainRequest object");
        return "responseType"in t && (s.responseType = t.responseType),
        "beforeSend"in t && "function" == typeof t.beforeSend && t.beforeSend(s),
        s.send(f || null),
        s
    }
    function bt(t) {
        if ("document" === t.responseType)
            return t.responseXML;
        var e = t.responseXML && "parsererror" === t.responseXML.documentElement.nodeName;
        return "" !== t.responseType || e ? null : t.responseXML
    }
    function xt() {}
    function Tt(t, e) {
        this.name = "ParsingError",
        this.code = t.code,
        this.message = e || t.message
    }
    function wt(t) {
        function e(t, e, i, n) {
            return 3600 * (0 | t) + 60 * (0 | e) + (0 | i) + (0 | n) / 1e3
        }
        var i = t.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
        return i ? i[3] ? e(i[1], i[2], i[3].replace(":", ""), i[4]) : i[1] > 59 ? e(i[1], i[2], 0, i[4]) : e(0, i[1], i[2], i[4]) : null
    }
    function St() {
        this.values = Cn(null)
    }
    function kt(t, e, i, n) {
        var r = n ? t.split(n) : [t];
        for (var a in r)
            if ("string" == typeof r[a]) {
                var o = r[a].split(i);
                if (2 === o.length) {
                    var s = o[0]
                      , u = o[1];
                    e(s, u)
                }
            }
    }
    function Ct(t, e, i) {
        function n() {
            var e = wt(t);
            if (null === e)
                throw new Tt(Tt.Errors.BadTimeStamp,"Malformed timestamp: " + a);
            return t = t.replace(/^[^\sa-zA-Z-]+/, ""),
            e
        }
        function r() {
            t = t.replace(/^\s+/, "")
        }
        var a = t;
        if (r(),
        e.startTime = n(),
        r(),
        "-->" !== t.substr(0, 3))
            throw new Tt(Tt.Errors.BadTimeStamp,"Malformed time stamp (time stamps must be separated by '-->'): " + a);
        t = t.substr(3),
        r(),
        e.endTime = n(),
        r(),
        function(t, e) {
            var n = new St;
            kt(t, function(t, e) {
                switch (t) {
                case "region":
                    for (var r = i.length - 1; r >= 0; r--)
                        if (i[r].id === e) {
                            n.set(t, i[r].region);
                            break
                        }
                    break;
                case "vertical":
                    n.alt(t, e, ["rl", "lr"]);
                    break;
                case "line":
                    var a = e.split(",")
                      , o = a[0];
                    n.integer(t, o),
                    n.percent(t, o) && n.set("snapToLines", !1),
                    n.alt(t, o, ["auto"]),
                    2 === a.length && n.alt("lineAlign", a[1], ["start", "middle", "end"]);
                    break;
                case "position":
                    a = e.split(","),
                    n.percent(t, a[0]),
                    2 === a.length && n.alt("positionAlign", a[1], ["start", "middle", "end"]);
                    break;
                case "size":
                    n.percent(t, e);
                    break;
                case "align":
                    n.alt(t, e, ["start", "middle", "end", "left", "right"])
                }
            }, /:/, /\s/),
            e.region = n.get("region", null),
            e.vertical = n.get("vertical", ""),
            e.line = n.get("line", "auto"),
            e.lineAlign = n.get("lineAlign", "start"),
            e.snapToLines = n.get("snapToLines", !0),
            e.size = n.get("size", 100),
            e.align = n.get("align", "middle"),
            e.position = n.get("position", {
                start: 0,
                left: 0,
                middle: 50,
                end: 100,
                right: 100
            }, e.align),
            e.positionAlign = n.get("positionAlign", {
                start: "start",
                left: "start",
                middle: "middle",
                end: "end",
                right: "end"
            }, e.align)
        }(t, e)
    }
    function Et(t, e) {
        function i(t) {
            return En[t]
        }
        for (var n, r = t.document.createElement("div"), a = r, o = []; null !== (n = function() {
            if (!e)
                return null;
            var t = e.match(/^([^<]*)(<[^>]+>?)?/);
            return function(t) {
                return e = e.substr(t.length),
                t
            }(t[1] ? t[1] : t[2])
        }()); )
            if ("<" !== n[0])
                a.appendChild(t.document.createTextNode(function(t) {
                    for (; l = t.match(/&(amp|lt|gt|lrm|rlm|nbsp);/); )
                        t = t.replace(l[0], i);
                    return t
                }(n)));
            else {
                if ("/" === n[1]) {
                    o.length && o[o.length - 1] === n.substr(2).replace(">", "") && (o.pop(),
                    a = a.parentNode);
                    continue
                }
                var s, u = wt(n.substr(1, n.length - 2));
                if (u) {
                    s = t.document.createProcessingInstruction("timestamp", u),
                    a.appendChild(s);
                    continue
                }
                var l = n.match(/^<([^.\s\/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
                if (!l)
                    continue;
                if (!(s = function(e, i) {
                    var n = An[e];
                    if (!n)
                        return null;
                    var r = t.document.createElement(n);
                    r.localName = n;
                    var a = On[e];
                    return a && i && (r[a] = i.trim()),
                    r
                }(l[1], l[3])))
                    continue;
                if (!function(t, e) {
                    return !Pn[e.localName] || Pn[e.localName] === t.localName
                }(a, s))
                    continue;
                l[2] && (s.className = l[2].substr(1).replace(".", " ")),
                o.push(l[1]),
                a.appendChild(s),
                a = s
            }
        return r
    }
    function At(t) {
        for (var e = 0; e < In.length; e++) {
            var i = In[e];
            if (t >= i[0] && t <= i[1])
                return !0
        }
        return !1
    }
    function Ot(t) {
        function e(t, e) {
            for (var i = e.childNodes.length - 1; i >= 0; i--)
                t.push(e.childNodes[i])
        }
        function i(t) {
            if (!t || !t.length)
                return null;
            var n = t.pop()
              , r = n.textContent || n.innerText;
            if (r) {
                var a = r.match(/^.*(\n|\r)/);
                return a ? (t.length = 0,
                a[0]) : r
            }
            return "ruby" === n.tagName ? i(t) : n.childNodes ? (e(t, n),
            i(t)) : void 0
        }
        var n, r = [], a = "";
        if (!t || !t.childNodes)
            return "ltr";
        for (e(r, t); a = i(r); )
            for (var o = 0; o < a.length; o++)
                if (n = a.charCodeAt(o),
                At(n))
                    return "rtl";
        return "ltr"
    }
    function Pt(t) {
        if ("number" == typeof t.line && (t.snapToLines || t.line >= 0 && t.line <= 100))
            return t.line;
        if (!t.track || !t.track.textTrackList || !t.track.textTrackList.mediaElement)
            return -1;
        for (var e = t.track, i = e.textTrackList, n = 0, r = 0; r < i.length && i[r] !== e; r++)
            "showing" === i[r].mode && n++;
        return -1 * ++n
    }
    function It() {}
    function Lt(t, e, i) {
        var n = /MSIE\s8\.0/.test(navigator.userAgent)
          , r = "rgba(255, 255, 255, 1)"
          , a = "rgba(0, 0, 0, 0.8)";
        n && (r = "rgb(255, 255, 255)",
        a = "rgb(0, 0, 0)"),
        It.call(this),
        this.cue = e,
        this.cueDiv = Et(t, e.text);
        var o = {
            color: r,
            backgroundColor: a,
            position: "relative",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            display: "inline"
        };
        n || (o.writingMode = "" === e.vertical ? "horizontal-tb" : "lr" === e.vertical ? "vertical-lr" : "vertical-rl",
        o.unicodeBidi = "plaintext"),
        this.applyStyles(o, this.cueDiv),
        this.div = t.document.createElement("div"),
        o = {
            textAlign: "middle" === e.align ? "center" : e.align,
            font: i.font,
            whiteSpace: "pre-line",
            position: "absolute"
        },
        n || (o.direction = Ot(this.cueDiv),
        o.writingMode = "" === e.vertical ? "horizontal-tb" : "lr" === e.vertical ? "vertical-lr" : "vertical-rl".stylesunicodeBidi = "plaintext"),
        this.applyStyles(o),
        this.div.appendChild(this.cueDiv);
        var s = 0;
        switch (e.positionAlign) {
        case "start":
            s = e.position;
            break;
        case "middle":
            s = e.position - e.size / 2;
            break;
        case "end":
            s = e.position - e.size
        }
        "" === e.vertical ? this.applyStyles({
            left: this.formatStyle(s, "%"),
            width: this.formatStyle(e.size, "%")
        }) : this.applyStyles({
            top: this.formatStyle(s, "%"),
            height: this.formatStyle(e.size, "%")
        }),
        this.move = function(t) {
            this.applyStyles({
                top: this.formatStyle(t.top, "px"),
                bottom: this.formatStyle(t.bottom, "px"),
                left: this.formatStyle(t.left, "px"),
                right: this.formatStyle(t.right, "px"),
                height: this.formatStyle(t.height, "px"),
                width: this.formatStyle(t.width, "px")
            })
        }
    }
    function jt(t) {
        var e, i, n, r, a = /MSIE\s8\.0/.test(navigator.userAgent);
        if (t.div) {
            i = t.div.offsetHeight,
            n = t.div.offsetWidth,
            r = t.div.offsetTop;
            var o = (o = t.div.childNodes) && (o = o[0]) && o.getClientRects && o.getClientRects();
            t = t.div.getBoundingClientRect(),
            e = o ? Math.max(o[0] && o[0].height || 0, t.height / o.length) : 0
        }
        this.left = t.left,
        this.right = t.right,
        this.top = t.top || r,
        this.height = t.height || i,
        this.bottom = t.bottom || r + (t.height || i),
        this.width = t.width || n,
        this.lineHeight = void 0 !== e ? e : t.lineHeight,
        a && !this.lineHeight && (this.lineHeight = 13)
    }
    function Mt(t, e, i, n) {
        var r = new jt(e)
          , a = e.cue
          , o = Pt(a)
          , s = [];
        if (a.snapToLines) {
            var u;
            switch (a.vertical) {
            case "":
                s = ["+y", "-y"],
                u = "height";
                break;
            case "rl":
                s = ["+x", "-x"],
                u = "width";
                break;
            case "lr":
                s = ["-x", "+x"],
                u = "width"
            }
            var l = r.lineHeight
              , c = l * Math.round(o)
              , d = i[u] + l
              , h = s[0];
            Math.abs(c) > d && (c = c < 0 ? -1 : 1,
            c *= Math.ceil(d / l) * l),
            o < 0 && (c += "" === a.vertical ? i.height : i.width,
            s = s.reverse()),
            r.move(h, c)
        } else {
            var f = r.lineHeight / i.height * 100;
            switch (a.lineAlign) {
            case "middle":
                o -= f / 2;
                break;
            case "end":
                o -= f
            }
            switch (a.vertical) {
            case "":
                e.applyStyles({
                    top: e.formatStyle(o, "%")
                });
                break;
            case "rl":
                e.applyStyles({
                    left: e.formatStyle(o, "%")
                });
                break;
            case "lr":
                e.applyStyles({
                    right: e.formatStyle(o, "%")
                })
            }
            s = ["+y", "-x", "+x", "-y"],
            r = new jt(e)
        }
        var p = function(t, e) {
            for (var r, a = new jt(t), o = 1, s = 0; s < e.length; s++) {
                for (; t.overlapsOppositeAxis(i, e[s]) || t.within(i) && t.overlapsAny(n); )
                    t.move(e[s]);
                if (t.within(i))
                    return t;
                var u = t.intersectPercentage(i);
                o > u && (r = new jt(t),
                o = u),
                t = new jt(a)
            }
            return r || a
        }(r, s);
        e.move(p.toCSSCompatValues(i))
    }
    function Dt() {}
    function Rt(t) {
        return "string" == typeof t && !!Mn[t.toLowerCase()] && t.toLowerCase()
    }
    function Bt(t) {
        return "string" == typeof t && !!Dn[t.toLowerCase()] && t.toLowerCase()
    }
    function Ut(t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = arguments[e];
            for (var n in i)
                t[n] = i[n]
        }
        return t
    }
    function Nt(t, e, i) {
        var n = this
          , r = /MSIE\s8\.0/.test(navigator.userAgent)
          , a = {};
        r ? n = document.createElement("custom") : a.enumerable = !0,
        n.hasBeenReset = !1;
        var o = ""
          , s = !1
          , u = t
          , l = e
          , c = i
          , d = null
          , h = ""
          , f = !0
          , p = "auto"
          , g = "start"
          , m = 50
          , y = "middle"
          , v = 50
          , _ = "middle";
        if (Object.defineProperty(n, "id", Ut({}, a, {
            get: function() {
                return o
            },
            set: function(t) {
                o = "" + t
            }
        })),
        Object.defineProperty(n, "pauseOnExit", Ut({}, a, {
            get: function() {
                return s
            },
            set: function(t) {
                s = !!t
            }
        })),
        Object.defineProperty(n, "startTime", Ut({}, a, {
            get: function() {
                return u
            },
            set: function(t) {
                if ("number" != typeof t)
                    throw new TypeError("Start time must be set to a number.");
                u = t,
                this.hasBeenReset = !0
            }
        })),
        Object.defineProperty(n, "endTime", Ut({}, a, {
            get: function() {
                return l
            },
            set: function(t) {
                if ("number" != typeof t)
                    throw new TypeError("End time must be set to a number.");
                l = t,
                this.hasBeenReset = !0
            }
        })),
        Object.defineProperty(n, "text", Ut({}, a, {
            get: function() {
                return c
            },
            set: function(t) {
                c = "" + t,
                this.hasBeenReset = !0
            }
        })),
        Object.defineProperty(n, "region", Ut({}, a, {
            get: function() {
                return d
            },
            set: function(t) {
                d = t,
                this.hasBeenReset = !0
            }
        })),
        Object.defineProperty(n, "vertical", Ut({}, a, {
            get: function() {
                return h
            },
            set: function(t) {
                var e = Rt(t);
                if (!1 === e)
                    throw new SyntaxError("An invalid or illegal string was specified.");
                h = e,
                this.hasBeenReset = !0
            }
        })),
        Object.defineProperty(n, "snapToLines", Ut({}, a, {
            get: function() {
                return f
            },
            set: function(t) {
                f = !!t,
                this.hasBeenReset = !0
            }
        })),
        Object.defineProperty(n, "line", Ut({}, a, {
            get: function() {
                return p
            },
            set: function(t) {
                if ("number" != typeof t && t !== jn)
                    throw new SyntaxError("An invalid number or illegal string was specified.");
                p = t,
                this.hasBeenReset = !0
            }
        })),
        Object.defineProperty(n, "lineAlign", Ut({}, a, {
            get: function() {
                return g
            },
            set: function(t) {
                var e = Bt(t);
                if (!e)
                    throw new SyntaxError("An invalid or illegal string was specified.");
                g = e,
                this.hasBeenReset = !0
            }
        })),
        Object.defineProperty(n, "position", Ut({}, a, {
            get: function() {
                return m
            },
            set: function(t) {
                if (t < 0 || t > 100)
                    throw new Error("Position must be between 0 and 100.");
                m = t,
                this.hasBeenReset = !0
            }
        })),
        Object.defineProperty(n, "positionAlign", Ut({}, a, {
            get: function() {
                return y
            },
            set: function(t) {
                var e = Bt(t);
                if (!e)
                    throw new SyntaxError("An invalid or illegal string was specified.");
                y = e,
                this.hasBeenReset = !0
            }
        })),
        Object.defineProperty(n, "size", Ut({}, a, {
            get: function() {
                return v
            },
            set: function(t) {
                if (t < 0 || t > 100)
                    throw new Error("Size must be between 0 and 100.");
                v = t,
                this.hasBeenReset = !0
            }
        })),
        Object.defineProperty(n, "align", Ut({}, a, {
            get: function() {
                return _
            },
            set: function(t) {
                var e = Bt(t);
                if (!e)
                    throw new SyntaxError("An invalid or illegal string was specified.");
                _ = e,
                this.hasBeenReset = !0
            }
        })),
        n.displayState = void 0,
        r)
            return n
    }
    function Ft(t) {
        return "string" == typeof t && !!Bn[t.toLowerCase()] && t.toLowerCase()
    }
    function Ht(t) {
        return "number" == typeof t && t >= 0 && t <= 100
    }
    function Vt() {
        var t = 100
          , e = 3
          , i = 0
          , n = 100
          , r = 0
          , a = 100
          , o = "";
        Object.defineProperties(this, {
            width: {
                enumerable: !0,
                get: function() {
                    return t
                },
                set: function(e) {
                    if (!Ht(e))
                        throw new Error("Width must be between 0 and 100.");
                    t = e
                }
            },
            lines: {
                enumerable: !0,
                get: function() {
                    return e
                },
                set: function(t) {
                    if ("number" != typeof t)
                        throw new TypeError("Lines must be set to a number.");
                    e = t
                }
            },
            regionAnchorY: {
                enumerable: !0,
                get: function() {
                    return n
                },
                set: function(t) {
                    if (!Ht(t))
                        throw new Error("RegionAnchorX must be between 0 and 100.");
                    n = t
                }
            },
            regionAnchorX: {
                enumerable: !0,
                get: function() {
                    return i
                },
                set: function(t) {
                    if (!Ht(t))
                        throw new Error("RegionAnchorY must be between 0 and 100.");
                    i = t
                }
            },
            viewportAnchorY: {
                enumerable: !0,
                get: function() {
                    return a
                },
                set: function(t) {
                    if (!Ht(t))
                        throw new Error("ViewportAnchorY must be between 0 and 100.");
                    a = t
                }
            },
            viewportAnchorX: {
                enumerable: !0,
                get: function() {
                    return r
                },
                set: function(t) {
                    if (!Ht(t))
                        throw new Error("ViewportAnchorX must be between 0 and 100.");
                    r = t
                }
            },
            scroll: {
                enumerable: !0,
                get: function() {
                    return o
                },
                set: function(t) {
                    var e = Ft(t);
                    if (!1 === e)
                        throw new SyntaxError("An invalid or illegal string was specified.");
                    o = e
                }
            }
        })
    }
    function Gt(t, e, i, n) {
        var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}
          , a = t.textTracks();
        r.kind = e,
        i && (r.label = i),
        n && (r.language = n),
        r.tech = t;
        var o = new kn.text.TrackClass(r);
        return a.addTrack(o),
        o
    }
    function Wt(t, e) {
        Hn[t] = Hn[t] || [],
        Hn[t].push(e)
    }
    function qt(t, e, i) {
        t.setTimeout(function() {
            return Zt(e, Hn[e.type], i, t)
        }, 1)
    }
    function Xt(t, e) {
        t.forEach(function(t) {
            return t.setTech && t.setTech(e)
        })
    }
    function Yt(t, e, i) {
        return t.reduceRight(zt(i), e[i]())
    }
    function Kt(t, e, i, n) {
        return e[i](t.reduce(zt(i), n))
    }
    function zt(t) {
        return function(e, i) {
            return i[t] ? i[t](e) : e
        }
    }
    function Zt() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
          , i = arguments[2]
          , r = arguments[3]
          , a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : []
          , o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5]
          , s = e[0]
          , u = e.slice(1);
        if ("string" == typeof s)
            Zt(t, Hn[s], i, r, a, o);
        else if (s) {
            var l = s(r);
            l.setSource(n({}, t), function(e, n) {
                return e ? Zt(t, u, i, r, a, o) : (a.push(l),
                void Zt(n, t.type === n.type ? u : Hn[n.type], i, r, a, o))
            })
        } else
            u.length ? Zt(t, u, i, r, a, o) : o ? i(t, a) : Zt(t, Hn["*"], i, r, a, !0)
    }
    function Qt(t, e) {
        return "rgba(" + parseInt(t[1] + t[1], 16) + "," + parseInt(t[2] + t[2], 16) + "," + parseInt(t[3] + t[3], 16) + "," + e + ")"
    }
    function Jt(t, e, i) {
        try {
            t.style[e] = i
        } catch (t) {
            return
        }
    }
    function $t(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
        t = t < 0 ? 0 : t;
        var i = Math.floor(t % 60)
          , n = Math.floor(t / 60 % 60)
          , r = Math.floor(t / 3600)
          , a = Math.floor(e / 60 % 60)
          , o = Math.floor(e / 3600);
        return (isNaN(t) || t === 1 / 0) && (r = n = i = "-"),
        r = r > 0 || o > 0 ? r + ":" : "",
        n = ((r || a >= 10) && n < 10 ? "0" + n : n) + ":",
        i = i < 10 ? "0" + i : i,
        r + n + i
    }
    function te(t, e) {
        if (e && (t = e(t)),
        t && "none" !== t)
            return t
    }
    function ee(t, e) {
        return te(t.options[t.options.selectedIndex].value, e)
    }
    function ie(t, e, i) {
        if (e)
            for (var n = 0; n < t.options.length; n++)
                if (te(t.options[n].value, i) === e) {
                    t.selectedIndex = n;
                    break
                }
    }
    function ne(t, e, i) {
        var n = void 0;
        if ("string" == typeof t) {
            var a = ne.getPlayers();
            if (0 === t.indexOf("#") && (t = t.slice(1)),
            a[t])
                return e && Ke.warn('Player "' + t + '" is already initialised. Options will not be applied.'),
                i && a[t].ready(i),
                a[t];
            n = Qe("#" + t)
        } else
            n = t;
        if (!n || !n.nodeName)
            throw new TypeError("The element or ID supplied is not valid. (videojs)");
        if (n.player || ha.players[n.playerId])
            return n.player || ha.players[n.playerId];
        h(n) && !fe.body.contains(n) && Ke.warn("The element supplied is not included in the DOM"),
        e = e || {},
        ne.hooks("beforesetup").forEach(function(t) {
            var i = t(n, tt(e));
            return !r(i) || Array.isArray(i) ? void Ke.error("please return an object in beforesetup hooks") : void (e = tt(e, i))
        });
        var o = wi.getComponent("Player")
          , s = new o(n,e,i);
        return ne.hooks("setup").forEach(function(t) {
            return t(s)
        }),
        s
    }
    var re, ae = "6.5.1", oe = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    re = "undefined" != typeof window ? window : void 0 !== oe ? oe : "undefined" != typeof self ? self : {};
    var se, ue = re, le = {}, ce = (Object.freeze || Object)({
        "default": le
    }), de = ce && le || ce, he = void 0 !== oe ? oe : "undefined" != typeof window ? window : {};
    "undefined" != typeof document ? se = document : (se = he["__GLOBAL_DOCUMENT_CACHE@4"]) || (se = he["__GLOBAL_DOCUMENT_CACHE@4"] = de);
    var fe = se
      , pe = ue.navigator && ue.navigator.userAgent || ""
      , ge = /AppleWebKit\/([\d.]+)/i.exec(pe)
      , me = ge ? parseFloat(ge.pop()) : null
      , ye = /iPad/i.test(pe)
      , ve = /iPhone/i.test(pe) && !ye
      , _e = /iPod/i.test(pe)
      , be = ve || ye || _e
      , xe = function() {
        var t = pe.match(/OS (\d+)_/i);
        return t && t[1] ? t[1] : null
    }()
      , Te = /Android/i.test(pe)
      , we = function() {
        var t = pe.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
        if (!t)
            return null;
        var e = t[1] && parseFloat(t[1])
          , i = t[2] && parseFloat(t[2]);
        return e && i ? parseFloat(t[1] + "." + t[2]) : e || null
    }()
      , Se = Te && /webkit/i.test(pe) && we < 2.3
      , ke = Te && we < 5 && me < 537
      , Ce = /Firefox/i.test(pe)
      , Ee = /Edge/i.test(pe)
      , Ae = !Ee && /Chrome/i.test(pe)
      , Oe = function() {
        var t = pe.match(/Chrome\/(\d+)/);
        return t && t[1] ? parseFloat(t[1]) : null
    }()
      , Pe = /MSIE\s8\.0/.test(pe)
      , Ie = function() {
        var t = /MSIE\s(\d+)\.\d/.exec(pe)
          , e = t && parseFloat(t[1]);
        return !e && /Trident\/7.0/i.test(pe) && /rv:11.0/.test(pe) && (e = 11),
        e
    }()
      , Le = /Safari/i.test(pe) && !Ae && !Te && !Ee
      , je = Le || be
      , Me = d() && ("ontouchstart"in ue || ue.DocumentTouch && ue.document instanceof ue.DocumentTouch)
      , De = d() && "backgroundSize"in ue.document.createElement("video").style
      , Re = (Object.freeze || Object)({
        IS_IPAD: ye,
        IS_IPHONE: ve,
        IS_IPOD: _e,
        IS_IOS: be,
        IOS_VERSION: xe,
        IS_ANDROID: Te,
        ANDROID_VERSION: we,
        IS_OLD_ANDROID: Se,
        IS_NATIVE_ANDROID: ke,
        IS_FIREFOX: Ce,
        IS_EDGE: Ee,
        IS_CHROME: Ae,
        CHROME_VERSION: Oe,
        IS_IE8: Pe,
        IE_VERSION: Ie,
        IS_SAFARI: Le,
        IS_ANY_SAFARI: je,
        TOUCH_ENABLED: Me,
        BACKGROUND_SIZE_SUPPORTED: De
    })
      , Be = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
      , Ue = function(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
      , Ne = function(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
      , Fe = function(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
      , He = function(t, e) {
        return t.raw = e,
        t
    }
      , Ve = Object.prototype.toString
      , Ge = function(t) {
        return r(t) ? Object.keys(t) : []
    }
      , We = void 0
      , qe = "all"
      , Xe = []
      , Ye = function(t, e) {
        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !!Ie && Ie < 11
          , n = We.levels[qe]
          , a = new RegExp("^(" + n + ")$");
        "log" !== t && e.unshift(t.toUpperCase() + ":"),
        Xe && Xe.push([].concat(e)),
        e.unshift("VIDEOJS:");
        var o = ue.console && ue.console[t];
        o && n && a.test(t) && (i && (e = e.map(function(t) {
            if (r(t) || Array.isArray(t))
                try {
                    return JSON.stringify(t)
                } catch (e) {
                    return String(t)
                }
            return String(t)
        }).join(" ")),
        o.apply ? o[Array.isArray(e) ? "apply" : "call"](ue.console, e) : o(e))
    };
    We = function() {
        for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
            e[i] = arguments[i];
        Ye("log", e)
    }
    ,
    We.levels = {
        all: "log|warn|error",
        error: "error",
        off: "",
        warn: "warn|error",
        DEFAULT: qe
    },
    We.level = function(t) {
        if ("string" == typeof t) {
            if (!We.levels.hasOwnProperty(t))
                throw new Error('"' + t + '" in not a valid log level');
            qe = t
        }
        return qe
    }
    ,
    We.history = function() {
        return Xe ? [].concat(Xe) : []
    }
    ,
    We.history.clear = function() {
        Xe && (Xe.length = 0)
    }
    ,
    We.history.disable = function() {
        null !== Xe && (Xe.length = 0,
        Xe = null)
    }
    ,
    We.history.enable = function() {
        null === Xe && (Xe = [])
    }
    ,
    We.error = function() {
        for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
            e[i] = arguments[i];
        return Ye("error", e)
    }
    ,
    We.warn = function() {
        for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
            e[i] = arguments[i];
        return Ye("warn", e)
    }
    ;
    var Ke = We
      , ze = function(t) {
        for (var e = "", i = 0; i < arguments.length; i++)
            e += o(t[i]) + (arguments[i + 1] || "");
        return e
    }
      , Ze = He(["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."], ["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."])
      , Qe = p("querySelector")
      , Je = p("querySelectorAll")
      , $e = (Object.freeze || Object)({
        isReal: d,
        isEl: h,
        isInFrame: f,
        createEl: g,
        textContent: m,
        prependTo: y,
        hasClass: v,
        addClass: _,
        removeClass: b,
        toggleClass: x,
        setAttributes: T,
        getAttributes: w,
        getAttribute: S,
        setAttribute: k,
        removeAttribute: C,
        blockTextSelection: E,
        unblockTextSelection: A,
        getBoundingClientRect: O,
        findPosition: P,
        getPointerPosition: I,
        isTextNode: L,
        emptyEl: j,
        normalizeContent: M,
        appendContent: D,
        insertContent: R,
        isSingleLeftClick: B,
        $: Qe,
        $$: Je
    })
      , ti = 1
      , ei = {}
      , ii = "vdata" + (new Date).getTime()
      , ni = !1;
    !function() {
        try {
            var t = Object.defineProperty({}, "passive", {
                get: function() {
                    ni = !0
                }
            });
            ue.addEventListener("test", null, t),
            ue.removeEventListener("test", null, t)
        } catch (t) {}
    }();
    var ri = ["touchstart", "touchmove"]
      , ai = (Object.freeze || Object)({
        fixEvent: W,
        on: q,
        off: X,
        trigger: Y,
        one: K
    })
      , oi = !1
      , si = void 0
      , ui = function() {
        if (d()) {
            var t = fe.getElementsByTagName("video")
              , e = fe.getElementsByTagName("audio")
              , i = fe.getElementsByTagName("video-js")
              , n = [];
            if (t && t.length > 0)
                for (var r = 0, a = t.length; r < a; r++)
                    n.push(t[r]);
            if (e && e.length > 0)
                for (var o = 0, s = e.length; o < s; o++)
                    n.push(e[o]);
            if (i && i.length > 0)
                for (var u = 0, l = i.length; u < l; u++)
                    n.push(i[u]);
            if (n && n.length > 0)
                for (var c = 0, h = n.length; c < h; c++) {
                    var f = n[c];
                    if (!f || !f.getAttribute) {
                        z(1);
                        break
                    }
                    if (void 0 === f.player) {
                        var p = f.getAttribute("data-setup");
                        null !== p && si(f)
                    }
                }
            else
                oi || z(1)
        }
    };
    d() && "complete" === fe.readyState ? oi = !0 : K(ue, "load", function() {
        oi = !0
    });
    var li = function(t) {
        var e = fe.createElement("style");
        return e.className = t,
        e
    }
      , ci = function(t, e) {
        t.styleSheet ? t.styleSheet.cssText = e : t.textContent = e
    }
      , di = function(t, e, i) {
        e.guid || (e.guid = U());
        var n = function() {
            return e.apply(t, arguments)
        };
        return n.guid = i ? i + "_" + e.guid : e.guid,
        n
    }
      , hi = function(t, e) {
        var i = Date.now();
        return function() {
            var n = Date.now();
            n - i >= e && (t.apply(void 0, arguments),
            i = n)
        }
    }
      , fi = function() {};
    fi.prototype.allowedEvents_ = {},
    fi.prototype.on = function(t, e) {
        var i = this.addEventListener;
        this.addEventListener = function() {}
        ,
        q(this, t, e),
        this.addEventListener = i
    }
    ,
    fi.prototype.addEventListener = fi.prototype.on,
    fi.prototype.off = function(t, e) {
        X(this, t, e)
    }
    ,
    fi.prototype.removeEventListener = fi.prototype.off,
    fi.prototype.one = function(t, e) {
        var i = this.addEventListener;
        this.addEventListener = function() {}
        ,
        K(this, t, e),
        this.addEventListener = i
    }
    ,
    fi.prototype.trigger = function(t) {
        var e = t.type || t;
        "string" == typeof t && (t = {
            type: e
        }),
        t = W(t),
        this.allowedEvents_[e] && this["on" + e] && this["on" + e](t),
        Y(this, t)
    }
    ,
    fi.prototype.dispatchEvent = fi.prototype.trigger;
    var pi = function(t) {
        return t instanceof fi || !!t.eventBusEl_ && ["on", "one", "off", "trigger"].every(function(e) {
            return "function" == typeof t[e]
        })
    }
      , gi = function(t) {
        return "string" == typeof t && /\S/.test(t) || Array.isArray(t) && !!t.length
    }
      , mi = function(t) {
        if (!t.nodeName && !pi(t))
            throw new Error("Invalid target; must be a DOM node or evented object.")
    }
      , yi = function(t) {
        if (!gi(t))
            throw new Error("Invalid event type; must be a non-empty string or array.")
    }
      , vi = function(t) {
        if ("function" != typeof t)
            throw new Error("Invalid listener; must be a function.")
    }
      , _i = function(t, e) {
        var i = e.length < 3 || e[0] === t || e[0] === t.eventBusEl_
          , n = void 0
          , r = void 0
          , a = void 0;
        return i ? (n = t.eventBusEl_,
        e.length >= 3 && e.shift(),
        r = e[0],
        a = e[1]) : (n = e[0],
        r = e[1],
        a = e[2]),
        mi(n),
        yi(r),
        vi(a),
        a = di(t, a),
        {
            isTargetingSelf: i,
            target: n,
            type: r,
            listener: a
        }
    }
      , bi = function(t, e, i, n) {
        mi(t),
        t.nodeName ? ai[e](t, i, n) : t[e](i, n)
    }
      , xi = {
        on: function() {
            for (var t = this, e = arguments.length, i = Array(e), n = 0; n < e; n++)
                i[n] = arguments[n];
            var r = _i(this, i)
              , a = r.isTargetingSelf
              , o = r.target
              , s = r.type
              , u = r.listener;
            if (bi(o, "on", s, u),
            !a) {
                var l = function() {
                    return t.off(o, s, u)
                };
                l.guid = u.guid;
                var c = function() {
                    return t.off("dispose", l)
                };
                c.guid = u.guid,
                bi(this, "on", "dispose", l),
                bi(o, "on", "dispose", c)
            }
        },
        one: function() {
            for (var t = this, e = arguments.length, i = Array(e), n = 0; n < e; n++)
                i[n] = arguments[n];
            var r = _i(this, i)
              , a = r.isTargetingSelf
              , o = r.target
              , s = r.type
              , u = r.listener;
            if (a)
                bi(o, "one", s, u);
            else {
                var l = function c() {
                    for (var e = arguments.length, i = Array(e), n = 0; n < e; n++)
                        i[n] = arguments[n];
                    t.off(o, s, c),
                    u.apply(null, i)
                };
                l.guid = u.guid,
                bi(o, "one", s, l)
            }
        },
        off: function(t, e, i) {
            if (!t || gi(t))
                X(this.eventBusEl_, t, e);
            else {
                var n = t
                  , r = e;
                mi(n),
                yi(r),
                vi(i),
                i = di(this, i),
                this.off("dispose", i),
                n.nodeName ? (X(n, r, i),
                X(n, "dispose", i)) : pi(n) && (n.off(r, i),
                n.off("dispose", i))
            }
        },
        trigger: function(t, e) {
            return Y(this.eventBusEl_, t, e)
        }
    }
      , Ti = {
        state: {},
        setState: function(t) {
            var i = this;
            "function" == typeof t && (t = t());
            var n = void 0;
            return e(t, function(t, e) {
                i.state[e] !== t && (n = n || {},
                n[e] = {
                    from: i.state[e],
                    to: t
                }),
                i.state[e] = t
            }),
            n && pi(this) && this.trigger({
                changes: n,
                type: "statechanged"
            }),
            n
        }
    }
      , wi = function() {
        function t(e, i, n) {
            if (Ue(this, t),
            !e && this.play ? this.player_ = e = this : this.player_ = e,
            this.options_ = tt({}, this.options_),
            i = this.options_ = tt(this.options_, i),
            this.id_ = i.id || i.el && i.el.id,
            !this.id_) {
                var r = e && e.id && e.id() || "no_player";
                this.id_ = r + "_component_" + U()
            }
            this.name_ = i.name || null,
            i.el ? this.el_ = i.el : !1 !== i.createEl && (this.el_ = this.createEl()),
            !1 !== i.evented && Z(this, {
                eventBusKey: this.el_ ? "el_" : null
            }),
            Q(this, this.constructor.defaultState),
            this.children_ = [],
            this.childIndex_ = {},
            this.childNameIndex_ = {},
            !1 !== i.initChildren && this.initChildren(),
            this.ready(n),
            !1 !== i.reportTouchActivity && this.enableTouchActivity()
        }
        return t.prototype.dispose = function() {
            if (this.trigger({
                type: "dispose",
                bubbles: !1
            }),
            this.children_)
                for (var t = this.children_.length - 1; t >= 0; t--)
                    this.children_[t].dispose && this.children_[t].dispose();
            this.children_ = null,
            this.childIndex_ = null,
            this.childNameIndex_ = null,
            this.el_ && (this.el_.parentNode && this.el_.parentNode.removeChild(this.el_),
            H(this.el_),
            this.el_ = null),
            this.player_ = null
        }
        ,
        t.prototype.player = function() {
            return this.player_
        }
        ,
        t.prototype.options = function(t) {
            return Ke.warn("this.options() has been deprecated and will be moved to the constructor in 6.0"),
            t ? (this.options_ = tt(this.options_, t),
            this.options_) : this.options_
        }
        ,
        t.prototype.el = function() {
            return this.el_
        }
        ,
        t.prototype.createEl = function(t, e, i) {
            return g(t, e, i)
        }
        ,
        t.prototype.localize = function(t, e) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t
              , n = this.player_.language && this.player_.language()
              , r = this.player_.languages && this.player_.languages()
              , a = r && r[n]
              , o = n && n.split("-")[0]
              , s = r && r[o]
              , u = i;
            return a && a[t] ? u = a[t] : s && s[t] && (u = s[t]),
            e && (u = u.replace(/\{(\d+)\}/g, function(t, i) {
                var n = e[i - 1]
                  , r = n;
                return void 0 === n && (r = t),
                r
            })),
            u
        }
        ,
        t.prototype.contentEl = function() {
            return this.contentEl_ || this.el_
        }
        ,
        t.prototype.id = function() {
            return this.id_
        }
        ,
        t.prototype.name = function() {
            return this.name_
        }
        ,
        t.prototype.children = function() {
            return this.children_
        }
        ,
        t.prototype.getChildById = function(t) {
            return this.childIndex_[t]
        }
        ,
        t.prototype.getChild = function(t) {
            if (t)
                return t = J(t),
                this.childNameIndex_[t]
        }
        ,
        t.prototype.addChild = function(e) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.children_.length
              , r = void 0
              , a = void 0;
            if ("string" == typeof e) {
                a = J(e);
                var o = i.componentClass || a;
                i.name = a;
                var s = t.getComponent(o);
                if (!s)
                    throw new Error("Component " + o + " does not exist");
                if ("function" != typeof s)
                    return null;
                r = new s(this.player_ || this,i)
            } else
                r = e;
            if (this.children_.splice(n, 0, r),
            "function" == typeof r.id && (this.childIndex_[r.id()] = r),
            a = a || r.name && J(r.name()),
            a && (this.childNameIndex_[a] = r),
            "function" == typeof r.el && r.el()) {
                var u = this.contentEl().children
                  , l = u[n] || null;
                this.contentEl().insertBefore(r.el(), l)
            }
            return r
        }
        ,
        t.prototype.removeChild = function(t) {
            if ("string" == typeof t && (t = this.getChild(t)),
            t && this.children_) {
                for (var e = !1, i = this.children_.length - 1; i >= 0; i--)
                    if (this.children_[i] === t) {
                        e = !0,
                        this.children_.splice(i, 1);
                        break
                    }
                if (e) {
                    this.childIndex_[t.id()] = null,
                    this.childNameIndex_[t.name()] = null;
                    var n = t.el();
                    n && n.parentNode === this.contentEl() && this.contentEl().removeChild(t.el())
                }
            }
        }
        ,
        t.prototype.initChildren = function() {
            var e = this
              , i = this.options_.children;
            if (i) {
                var n = this.options_
                  , r = function(t) {
                    var i = t.name
                      , r = t.opts;
                    if (void 0 !== n[i] && (r = n[i]),
                    !1 !== r) {
                        !0 === r && (r = {}),
                        r.playerOptions = e.options_.playerOptions;
                        var a = e.addChild(i, r);
                        a && (e[i] = a)
                    }
                }
                  , a = void 0
                  , o = t.getComponent("Tech");
                a = Array.isArray(i) ? i : Object.keys(i),
                a.concat(Object.keys(this.options_).filter(function(t) {
                    return !a.some(function(e) {
                        return "string" == typeof e ? t === e : t === e.name
                    })
                })).map(function(t) {
                    var n = void 0
                      , r = void 0;
                    return "string" == typeof t ? (n = t,
                    r = i[n] || e.options_[n] || {}) : (n = t.name,
                    r = t),
                    {
                        name: n,
                        opts: r
                    }
                }).filter(function(e) {
                    var i = t.getComponent(e.opts.componentClass || J(e.name));
                    return i && !o.isTech(i)
                }).forEach(r)
            }
        }
        ,
        t.prototype.buildCSSClass = function() {
            return ""
        }
        ,
        t.prototype.ready = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (t)
                return this.isReady_ ? void (e ? t.call(this) : this.setTimeout(t, 1)) : (this.readyQueue_ = this.readyQueue_ || [],
                void this.readyQueue_.push(t))
        }
        ,
        t.prototype.triggerReady = function() {
            this.isReady_ = !0,
            this.setTimeout(function() {
                var t = this.readyQueue_;
                this.readyQueue_ = [],
                t && t.length > 0 && t.forEach(function(t) {
                    t.call(this)
                }, this),
                this.trigger("ready")
            }, 1)
        }
        ,
        t.prototype.$ = function(t, e) {
            return Qe(t, e || this.contentEl())
        }
        ,
        t.prototype.$$ = function(t, e) {
            return Je(t, e || this.contentEl())
        }
        ,
        t.prototype.hasClass = function(t) {
            return v(this.el_, t)
        }
        ,
        t.prototype.addClass = function(t) {
            _(this.el_, t)
        }
        ,
        t.prototype.removeClass = function(t) {
            b(this.el_, t)
        }
        ,
        t.prototype.toggleClass = function(t, e) {
            x(this.el_, t, e)
        }
        ,
        t.prototype.show = function() {
            this.removeClass("vjs-hidden")
        }
        ,
        t.prototype.hide = function() {
            this.addClass("vjs-hidden")
        }
        ,
        t.prototype.lockShowing = function() {
            this.addClass("vjs-lock-showing")
        }
        ,
        t.prototype.unlockShowing = function() {
            this.removeClass("vjs-lock-showing")
        }
        ,
        t.prototype.getAttribute = function(t) {
            return S(this.el_, t)
        }
        ,
        t.prototype.setAttribute = function(t, e) {
            k(this.el_, t, e)
        }
        ,
        t.prototype.removeAttribute = function(t) {
            C(this.el_, t)
        }
        ,
        t.prototype.width = function(t, e) {
            return this.dimension("width", t, e)
        }
        ,
        t.prototype.height = function(t, e) {
            return this.dimension("height", t, e)
        }
        ,
        t.prototype.dimensions = function(t, e) {
            this.width(t, !0),
            this.height(e)
        }
        ,
        t.prototype.dimension = function(t, e, i) {
            if (void 0 !== e)
                return null !== e && e === e || (e = 0),
                -1 !== ("" + e).indexOf("%") || -1 !== ("" + e).indexOf("px") ? this.el_.style[t] = e : this.el_.style[t] = "auto" === e ? "" : e + "px",
                void (i || this.trigger("componentresize"));
            if (!this.el_)
                return 0;
            var n = this.el_.style[t]
              , r = n.indexOf("px");
            return -1 !== r ? parseInt(n.slice(0, r), 10) : parseInt(this.el_["offset" + J(t)], 10)
        }
        ,
        t.prototype.currentDimension = function(t) {
            var e = 0;
            if ("width" !== t && "height" !== t)
                throw new Error("currentDimension only accepts width or height value");
            if ("function" == typeof ue.getComputedStyle) {
                var i = ue.getComputedStyle(this.el_);
                e = i.getPropertyValue(t) || i[t]
            }
            if (0 === (e = parseFloat(e))) {
                var n = "offset" + J(t);
                e = this.el_[n]
            }
            return e
        }
        ,
        t.prototype.currentDimensions = function() {
            return {
                width: this.currentDimension("width"),
                height: this.currentDimension("height")
            }
        }
        ,
        t.prototype.currentWidth = function() {
            return this.currentDimension("width")
        }
        ,
        t.prototype.currentHeight = function() {
            return this.currentDimension("height")
        }
        ,
        t.prototype.focus = function() {
            this.el_.focus()
        }
        ,
        t.prototype.blur = function() {
            this.el_.blur()
        }
        ,
        t.prototype.emitTapEvents = function() {
            var t = 0
              , e = null
              , i = void 0;
            this.on("touchstart", function(n) {
                1 === n.touches.length && (e = {
                    pageX: n.touches[0].pageX,
                    pageY: n.touches[0].pageY
                },
                t = (new Date).getTime(),
                i = !0)
            }),
            this.on("touchmove", function(t) {
                if (t.touches.length > 1)
                    i = !1;
                else if (e) {
                    var n = t.touches[0].pageX - e.pageX
                      , r = t.touches[0].pageY - e.pageY
                      , a = Math.sqrt(n * n + r * r);
                    a > 10 && (i = !1)
                }
            });
            var n = function() {
                i = !1
            };
            this.on("touchleave", n),
            this.on("touchcancel", n),
            this.on("touchend", function(n) {
                e = null,
                !0 === i && (new Date).getTime() - t < 200 && (n.preventDefault(),
                this.trigger("tap"))
            })
        }
        ,
        t.prototype.enableTouchActivity = function() {
            if (this.player() && this.player().reportUserActivity) {
                var t = di(this.player(), this.player().reportUserActivity)
                  , e = void 0;
                this.on("touchstart", function() {
                    t(),
                    this.clearInterval(e),
                    e = this.setInterval(t, 250)
                });
                var i = function(i) {
                    t(),
                    this.clearInterval(e)
                };
                this.on("touchmove", t),
                this.on("touchend", i),
                this.on("touchcancel", i)
            }
        }
        ,
        t.prototype.setTimeout = function(t, e) {
            var i = this;
            t = di(this, t);
            var n = ue.setTimeout(t, e)
              , r = function() {
                return i.clearTimeout(n)
            };
            return r.guid = "vjs-timeout-" + n,
            this.on("dispose", r),
            n
        }
        ,
        t.prototype.clearTimeout = function(t) {
            ue.clearTimeout(t);
            var e = function() {};
            return e.guid = "vjs-timeout-" + t,
            this.off("dispose", e),
            t
        }
        ,
        t.prototype.setInterval = function(t, e) {
            var i = this;
            t = di(this, t);
            var n = ue.setInterval(t, e)
              , r = function() {
                return i.clearInterval(n)
            };
            return r.guid = "vjs-interval-" + n,
            this.on("dispose", r),
            n
        }
        ,
        t.prototype.clearInterval = function(t) {
            ue.clearInterval(t);
            var e = function() {};
            return e.guid = "vjs-interval-" + t,
            this.off("dispose", e),
            t
        }
        ,
        t.prototype.requestAnimationFrame = function(t) {
            var e = this;
            if (this.supportsRaf_) {
                t = di(this, t);
                var i = ue.requestAnimationFrame(t)
                  , n = function() {
                    return e.cancelAnimationFrame(i)
                };
                return n.guid = "vjs-raf-" + i,
                this.on("dispose", n),
                i
            }
            return this.setTimeout(t, 1e3 / 60)
        }
        ,
        t.prototype.cancelAnimationFrame = function(t) {
            if (this.supportsRaf_) {
                ue.cancelAnimationFrame(t);
                var e = function() {};
                return e.guid = "vjs-raf-" + t,
                this.off("dispose", e),
                t
            }
            return this.clearTimeout(t)
        }
        ,
        t.registerComponent = function(e, i) {
            if ("string" != typeof e || !e)
                throw new Error('Illegal component name, "' + e + '"; must be a non-empty string.');
            var n = t.getComponent("Tech")
              , r = n && n.isTech(i)
              , a = t === i || t.prototype.isPrototypeOf(i.prototype);
            if (r || !a) {
                var o = void 0;
                throw o = r ? "techs must be registered using Tech.registerTech()" : "must be a Component subclass",
                new Error('Illegal component, "' + e + '"; ' + o + ".")
            }
            e = J(e),
            t.components_ || (t.components_ = {});
            var s = t.getComponent("Player");
            if ("Player" === e && s && s.players) {
                var u = s.players
                  , l = Object.keys(u);
                if (u && l.length > 0 && l.map(function(t) {
                    return u[t]
                }).every(Boolean))
                    throw new Error("Can not register Player component after player has been created.")
            }
            return t.components_[e] = i,
            i
        }
        ,
        t.getComponent = function(e) {
            if (e)
                return e = J(e),
                t.components_ && t.components_[e] ? t.components_[e] : void 0
        }
        ,
        t
    }();
    wi.prototype.supportsRaf_ = "function" == typeof ue.requestAnimationFrame && "function" == typeof ue.cancelAnimationFrame,
    wi.registerComponent("Component", wi);
    for (var Si = {}, ki = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], Ci = ki[0], Ei = void 0, Ai = 0; Ai < ki.length; Ai++)
        if (ki[Ai][1]in fe) {
            Ei = ki[Ai];
            break
        }
    if (Ei)
        for (var Oi = 0; Oi < Ei.length; Oi++)
            Si[Ci[Oi]] = Ei[Oi];
    ot.prototype.code = 0,
    ot.prototype.message = "",
    ot.prototype.status = null,
    ot.errorTypes = ["MEDIA_ERR_CUSTOM", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_ERR_ENCRYPTED"],
    ot.defaultMessages = {
        1: "You aborted the media playback",
        2: "A network error caused the media download to fail part-way.",
        3: "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",
        4: "The media could not be loaded, either because the server or network failed or because the format is not supported.",
        5: "The media is encrypted and we do not have the keys to decrypt it."
    };
    for (var Pi = 0; Pi < ot.errorTypes.length; Pi++)
        ot[ot.errorTypes[Pi]] = Pi,
        ot.prototype[ot.errorTypes[Pi]] = Pi;
    var Ii = st
      , Li = function(t) {
        return ["kind", "label", "language", "id", "inBandMetadataTrackDispatchType", "mode", "src"].reduce(function(e, i, n) {
            return t[i] && (e[i] = t[i]),
            e
        }, {
            cues: t.cues && Array.prototype.map.call(t.cues, function(t) {
                return {
                    startTime: t.startTime,
                    endTime: t.endTime,
                    text: t.text,
                    id: t.id
                }
            })
        })
    }
      , ji = function(t) {
        var e = t.$$("track")
          , i = Array.prototype.map.call(e, function(t) {
            return t.track
        });
        return Array.prototype.map.call(e, function(t) {
            var e = Li(t.track);
            return t.src && (e.src = t.src),
            e
        }).concat(Array.prototype.filter.call(t.textTracks(), function(t) {
            return -1 === i.indexOf(t)
        }).map(Li))
    }
      , Mi = function(t, e) {
        return t.forEach(function(t) {
            var i = e.addRemoteTextTrack(t).track;
            !t.src && t.cues && t.cues.forEach(function(t) {
                return i.addCue(t)
            })
        }),
        e.textTracks()
    }
      , Di = {
        textTracksToJson: ji,
        jsonToTextTracks: Mi,
        trackToJson_: Li
    }
      , Ri = "vjs-modal-dialog"
      , Bi = function(t) {
        function e(i, n) {
            Ue(this, e);
            var r = Fe(this, t.call(this, i, n));
            return r.opened_ = r.hasBeenOpened_ = r.hasBeenFilled_ = !1,
            r.closeable(!r.options_.uncloseable),
            r.content(r.options_.content),
            r.contentEl_ = g("div", {
                className: Ri + "-content"
            }, {
                role: "document"
            }),
            r.descEl_ = g("p", {
                className: Ri + "-description vjs-control-text",
                id: r.el().getAttribute("aria-describedby")
            }),
            m(r.descEl_, r.description()),
            r.el_.appendChild(r.descEl_),
            r.el_.appendChild(r.contentEl_),
            r
        }
        return Ne(e, t),
        e.prototype.createEl = function() {
            return t.prototype.createEl.call(this, "div", {
                className: this.buildCSSClass(),
                tabIndex: -1
            }, {
                "aria-describedby": this.id() + "_description",
                "aria-hidden": "true",
                "aria-label": this.label(),
                role: "dialog"
            })
        }
        ,
        e.prototype.dispose = function() {
            this.contentEl_ = null,
            this.descEl_ = null,
            this.previouslyActiveEl_ = null,
            t.prototype.dispose.call(this)
        }
        ,
        e.prototype.buildCSSClass = function() {
            return Ri + " vjs-hidden " + t.prototype.buildCSSClass.call(this)
        }
        ,
        e.prototype.handleKeyPress = function(t) {
            27 === t.which && this.closeable() && this.close()
        }
        ,
        e.prototype.label = function() {
            return this.localize(this.options_.label || "Modal Window")
        }
        ,
        e.prototype.description = function() {
            var t = this.options_.description || this.localize("This is a modal window.");
            return this.closeable() && (t += " " + this.localize("This modal can be closed by pressing the Escape key or activating the close button.")),
            t
        }
        ,
        e.prototype.open = function() {
            if (!this.opened_) {
                var t = this.player();
                this.trigger("beforemodalopen"),
                this.opened_ = !0,
                (this.options_.fillAlways || !this.hasBeenOpened_ && !this.hasBeenFilled_) && this.fill(),
                this.wasPlaying_ = !t.paused(),
                this.options_.pauseOnOpen && this.wasPlaying_ && t.pause(),
                this.closeable() && this.on(this.el_.ownerDocument, "keydown", di(this, this.handleKeyPress)),
                this.hadControls_ = t.controls(),
                t.controls(!1),
                this.show(),
                this.conditionalFocus_(),
                this.el().setAttribute("aria-hidden", "false"),
                this.trigger("modalopen"),
                this.hasBeenOpened_ = !0
            }
        }
        ,
        e.prototype.opened = function(t) {
            return "boolean" == typeof t && this[t ? "open" : "close"](),
            this.opened_
        }
        ,
        e.prototype.close = function() {
            if (this.opened_) {
                var t = this.player();
                this.trigger("beforemodalclose"),
                this.opened_ = !1,
                this.wasPlaying_ && this.options_.pauseOnOpen && t.play(),
                this.closeable() && this.off(this.el_.ownerDocument, "keydown", di(this, this.handleKeyPress)),
                this.hadControls_ && t.controls(!0),
                this.hide(),
                this.el().setAttribute("aria-hidden", "true"),
                this.trigger("modalclose"),
                this.conditionalBlur_(),
                this.options_.temporary && this.dispose()
            }
        }
        ,
        e.prototype.closeable = function(t) {
            if ("boolean" == typeof t) {
                var e = this.closeable_ = !!t
                  , i = this.getChild("closeButton");
                if (e && !i) {
                    var n = this.contentEl_;
                    this.contentEl_ = this.el_,
                    i = this.addChild("closeButton", {
                        controlText: "Close Modal Dialog"
                    }),
                    this.contentEl_ = n,
                    this.on(i, "close", this.close)
                }
                !e && i && (this.off(i, "close", this.close),
                this.removeChild(i),
                i.dispose())
            }
            return this.closeable_
        }
        ,
        e.prototype.fill = function() {
            this.fillWith(this.content())
        }
        ,
        e.prototype.fillWith = function(t) {
            var e = this.contentEl()
              , i = e.parentNode
              , n = e.nextSibling;
            this.trigger("beforemodalfill"),
            this.hasBeenFilled_ = !0,
            i.removeChild(e),
            this.empty(),
            R(e, t),
            this.trigger("modalfill"),
            n ? i.insertBefore(e, n) : i.appendChild(e);
            var r = this.getChild("closeButton");
            r && i.appendChild(r.el_)
        }
        ,
        e.prototype.empty = function() {
            this.trigger("beforemodalempty"),
            j(this.contentEl()),
            this.trigger("modalempty")
        }
        ,
        e.prototype.content = function(t) {
            return void 0 !== t && (this.content_ = t),
            this.content_
        }
        ,
        e.prototype.conditionalFocus_ = function() {
            var t = fe.activeElement
              , e = this.player_.el_;
            this.previouslyActiveEl_ = null,
            (e.contains(t) || e === t) && (this.previouslyActiveEl_ = t,
            this.focus(),
            this.on(fe, "keydown", this.handleKeyDown))
        }
        ,
        e.prototype.conditionalBlur_ = function() {
            this.previouslyActiveEl_ && (this.previouslyActiveEl_.focus(),
            this.previouslyActiveEl_ = null),
            this.off(fe, "keydown", this.handleKeyDown)
        }
        ,
        e.prototype.handleKeyDown = function(t) {
            if (9 === t.which) {
                for (var e = this.focusableEls_(), i = this.el_.querySelector(":focus"), n = void 0, r = 0; r < e.length; r++)
                    if (i === e[r]) {
                        n = r;
                        break
                    }
                fe.activeElement === this.el_ && (n = 0),
                t.shiftKey && 0 === n ? (e[e.length - 1].focus(),
                t.preventDefault()) : t.shiftKey || n !== e.length - 1 || (e[0].focus(),
                t.preventDefault())
            }
        }
        ,
        e.prototype.focusableEls_ = function() {
            var t = this.el_.querySelectorAll("*");
            return Array.prototype.filter.call(t, function(t) {
                return (t instanceof ue.HTMLAnchorElement || t instanceof ue.HTMLAreaElement) && t.hasAttribute("href") || (t instanceof ue.HTMLInputElement || t instanceof ue.HTMLSelectElement || t instanceof ue.HTMLTextAreaElement || t instanceof ue.HTMLButtonElement) && !t.hasAttribute("disabled") || t instanceof ue.HTMLIFrameElement || t instanceof ue.HTMLObjectElement || t instanceof ue.HTMLEmbedElement || t.hasAttribute("tabindex") && -1 !== t.getAttribute("tabindex") || t.hasAttribute("contenteditable")
            })
        }
        ,
        e
    }(wi);
    Bi.prototype.options_ = {
        pauseOnOpen: !0,
        temporary: !0
    },
    wi.registerComponent("ModalDialog", Bi);
    var Ui = function(t) {
        function e() {
            var i, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            Ue(this, e);
            var a = Fe(this, t.call(this));
            if (!r && (r = a,
            Pe)) {
                r = fe.createElement("custom");
                for (var o in e.prototype)
                    "constructor" !== o && (r[o] = e.prototype[o])
            }
            r.tracks_ = [],
            Object.defineProperty(r, "length", {
                get: function() {
                    return this.tracks_.length
                }
            });
            for (var s = 0; s < n.length; s++)
                r.addTrack(n[s]);
            return i = r,
            Fe(a, i)
        }
        return Ne(e, t),
        e.prototype.addTrack = function(t) {
            var e = this.tracks_.length;
            "" + e in this || Object.defineProperty(this, e, {
                get: function() {
                    return this.tracks_[e]
                }
            }),
            -1 === this.tracks_.indexOf(t) && (this.tracks_.push(t),
            this.trigger({
                track: t,
                type: "addtrack"
            }))
        }
        ,
        e.prototype.removeTrack = function(t) {
            for (var e = void 0, i = 0, n = this.length; i < n; i++)
                if (this[i] === t) {
                    e = this[i],
                    e.off && e.off(),
                    this.tracks_.splice(i, 1);
                    break
                }
            e && this.trigger({
                track: e,
                type: "removetrack"
            })
        }
        ,
        e.prototype.getTrackById = function(t) {
            for (var e = null, i = 0, n = this.length; i < n; i++) {
                var r = this[i];
                if (r.id === t) {
                    e = r;
                    break
                }
            }
            return e
        }
        ,
        e
    }(fi);
    Ui.prototype.allowedEvents_ = {
        change: "change",
        addtrack: "addtrack",
        removetrack: "removetrack"
    };
    for (var Ni in Ui.prototype.allowedEvents_)
        Ui.prototype["on" + Ni] = null;
    var Fi = function(t, e) {
        for (var i = 0; i < t.length; i++)
            Object.keys(t[i]).length && e.id !== t[i].id && (t[i].enabled = !1)
    }
      , Hi = function(t) {
        function e() {
            var i, n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            Ue(this, e);
            for (var a = void 0, o = r.length - 1; o >= 0; o--)
                if (r[o].enabled) {
                    Fi(r, r[o]);
                    break
                }
            if (Pe) {
                a = fe.createElement("custom");
                for (var s in Ui.prototype)
                    "constructor" !== s && (a[s] = Ui.prototype[s]);
                for (var u in e.prototype)
                    "constructor" !== u && (a[u] = e.prototype[u])
            }
            return a = i = Fe(this, t.call(this, r, a)),
            a.changing_ = !1,
            n = a,
            Fe(i, n)
        }
        return Ne(e, t),
        e.prototype.addTrack = function(e) {
            var i = this;
            e.enabled && Fi(this, e),
            t.prototype.addTrack.call(this, e),
            e.addEventListener && e.addEventListener("enabledchange", function() {
                i.changing_ || (i.changing_ = !0,
                Fi(i, e),
                i.changing_ = !1,
                i.trigger("change"))
            })
        }
        ,
        e
    }(Ui)
      , Vi = function(t, e) {
        for (var i = 0; i < t.length; i++)
            Object.keys(t[i]).length && e.id !== t[i].id && (t[i].selected = !1)
    }
      , Gi = function(t) {
        function e() {
            var i, n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            Ue(this, e);
            for (var a = void 0, o = r.length - 1; o >= 0; o--)
                if (r[o].selected) {
                    Vi(r, r[o]);
                    break
                }
            if (Pe) {
                a = fe.createElement("custom");
                for (var s in Ui.prototype)
                    "constructor" !== s && (a[s] = Ui.prototype[s]);
                for (var u in e.prototype)
                    "constructor" !== u && (a[u] = e.prototype[u])
            }
            return a = i = Fe(this, t.call(this, r, a)),
            a.changing_ = !1,
            Object.defineProperty(a, "selectedIndex", {
                get: function() {
                    for (var t = 0; t < this.length; t++)
                        if (this[t].selected)
                            return t;
                    return -1
                },
                set: function() {}
            }),
            n = a,
            Fe(i, n)
        }
        return Ne(e, t),
        e.prototype.addTrack = function(e) {
            var i = this;
            e.selected && Vi(this, e),
            t.prototype.addTrack.call(this, e),
            e.addEventListener && e.addEventListener("selectedchange", function() {
                i.changing_ || (i.changing_ = !0,
                Vi(i, e),
                i.changing_ = !1,
                i.trigger("change"))
            })
        }
        ,
        e
    }(Ui)
      , Wi = function(t) {
        function e() {
            var i, n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            Ue(this, e);
            var a = void 0;
            if (Pe) {
                a = fe.createElement("custom");
                for (var o in Ui.prototype)
                    "constructor" !== o && (a[o] = Ui.prototype[o]);
                for (var s in e.prototype)
                    "constructor" !== s && (a[s] = e.prototype[s])
            }
            return a = i = Fe(this, t.call(this, r, a)),
            n = a,
            Fe(i, n)
        }
        return Ne(e, t),
        e.prototype.addTrack = function(e) {
            t.prototype.addTrack.call(this, e),
            e.addEventListener("modechange", di(this, function() {
                this.trigger("change")
            })),
            -1 === ["metadata", "chapters"].indexOf(e.kind) && e.addEventListener("modechange", di(this, function() {
                this.trigger("selectedlanguagechange")
            }))
        }
        ,
        e
    }(Ui)
      , qi = function() {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            Ue(this, t);
            var i = this;
            if (Pe) {
                i = fe.createElement("custom");
                for (var n in t.prototype)
                    "constructor" !== n && (i[n] = t.prototype[n])
            }
            i.trackElements_ = [],
            Object.defineProperty(i, "length", {
                get: function() {
                    return this.trackElements_.length
                }
            });
            for (var r = 0, a = e.length; r < a; r++)
                i.addTrackElement_(e[r]);
            if (Pe)
                return i
        }
        return t.prototype.addTrackElement_ = function(t) {
            var e = this.trackElements_.length;
            "" + e in this || Object.defineProperty(this, e, {
                get: function() {
                    return this.trackElements_[e]
                }
            }),
            -1 === this.trackElements_.indexOf(t) && this.trackElements_.push(t)
        }
        ,
        t.prototype.getTrackElementByTrack_ = function(t) {
            for (var e = void 0, i = 0, n = this.trackElements_.length; i < n; i++)
                if (t === this.trackElements_[i].track) {
                    e = this.trackElements_[i];
                    break
                }
            return e
        }
        ,
        t.prototype.removeTrackElement_ = function(t) {
            for (var e = 0, i = this.trackElements_.length; e < i; e++)
                if (t === this.trackElements_[e]) {
                    this.trackElements_.splice(e, 1);
                    break
                }
        }
        ,
        t
    }()
      , Xi = function() {
        function t(e) {
            Ue(this, t);
            var i = this;
            if (Pe) {
                i = fe.createElement("custom");
                for (var n in t.prototype)
                    "constructor" !== n && (i[n] = t.prototype[n])
            }
            if (t.prototype.setCues_.call(i, e),
            Object.defineProperty(i, "length", {
                get: function() {
                    return this.length_
                }
            }),
            Pe)
                return i
        }
        return t.prototype.setCues_ = function(t) {
            var e = this.length || 0
              , i = 0
              , n = t.length;
            this.cues_ = t,
            this.length_ = t.length;
            var r = function(t) {
                "" + t in this || Object.defineProperty(this, "" + t, {
                    get: function() {
                        return this.cues_[t]
                    }
                })
            };
            if (e < n)
                for (i = e; i < n; i++)
                    r.call(this, i)
        }
        ,
        t.prototype.getCueById = function(t) {
            for (var e = null, i = 0, n = this.length; i < n; i++) {
                var r = this[i];
                if (r.id === t) {
                    e = r;
                    break
                }
            }
            return e
        }
        ,
        t
    }()
      , Yi = {
        alternative: "alternative",
        captions: "captions",
        main: "main",
        sign: "sign",
        subtitles: "subtitles",
        commentary: "commentary"
    }
      , Ki = {
        alternative: "alternative",
        descriptions: "descriptions",
        main: "main",
        "main-desc": "main-desc",
        translation: "translation",
        commentary: "commentary"
    }
      , zi = {
        subtitles: "subtitles",
        captions: "captions",
        descriptions: "descriptions",
        chapters: "chapters",
        metadata: "metadata"
    }
      , Zi = {
        disabled: "disabled",
        hidden: "hidden",
        showing: "showing"
    }
      , Qi = function(t) {
        function e() {
            var i, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            Ue(this, e);
            var r = Fe(this, t.call(this))
              , a = r;
            if (Pe) {
                a = fe.createElement("custom");
                for (var o in e.prototype)
                    "constructor" !== o && (a[o] = e.prototype[o])
            }
            var s = {
                id: n.id || "vjs_track_" + U(),
                kind: n.kind || "",
                label: n.label || "",
                language: n.language || ""
            };
            for (var u in s)
                !function(t) {
                    Object.defineProperty(a, t, {
                        get: function() {
                            return s[t]
                        },
                        set: function() {}
                    })
                }(u);
            return i = a,
            Fe(r, i)
        }
        return Ne(e, t),
        e
    }(fi)
      , Ji = function(t) {
        var e = ["protocol", "hostname", "port", "pathname", "search", "hash", "host"]
          , i = fe.createElement("a");
        i.href = t;
        var n = "" === i.host && "file:" !== i.protocol
          , r = void 0;
        n && (r = fe.createElement("div"),
        r.innerHTML = '<a href="' + t + '"></a>',
        i = r.firstChild,
        r.setAttribute("style", "display:none; position:absolute;"),
        fe.body.appendChild(r));
        for (var a = {}, o = 0; o < e.length; o++)
            a[e[o]] = i[e[o]];
        return "http:" === a.protocol && (a.host = a.host.replace(/:80$/, "")),
        "https:" === a.protocol && (a.host = a.host.replace(/:443$/, "")),
        a.protocol || (a.protocol = ue.location.protocol),
        n && fe.body.removeChild(r),
        a
    }
      , $i = function(t) {
        if (!t.match(/^https?:\/\//)) {
            var e = fe.createElement("div");
            e.innerHTML = '<a href="' + t + '">x</a>',
            t = e.firstChild.href
        }
        return t
    }
      , tn = function(t) {
        if ("string" == typeof t) {
            var e = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/i
              , i = e.exec(t);
            if (i)
                return i.pop().toLowerCase()
        }
        return ""
    }
      , en = function(t) {
        var e = ue.location
          , i = Ji(t);
        return (":" === i.protocol ? e.protocol : i.protocol) + i.host !== e.protocol + e.host
    }
      , nn = (Object.freeze || Object)({
        parseUrl: Ji,
        getAbsoluteURL: $i,
        getFileExtension: tn,
        isCrossOrigin: en
    })
      , rn = ct
      , an = Object.prototype.toString
      , on = t(function(t, e) {
        function i(t) {
            return t.replace(/^\s*|\s*$/g, "")
        }
        e = t.exports = i,
        e.left = function(t) {
            return t.replace(/^\s*/, "")
        }
        ,
        e.right = function(t) {
            return t.replace(/\s*$/, "")
        }
    })
      , sn = dt
      , un = Object.prototype.toString
      , ln = Object.prototype.hasOwnProperty
      , cn = function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }
      , dn = function(t) {
        if (!t)
            return {};
        var e = {};
        return sn(on(t).split("\n"), function(t) {
            var i = t.indexOf(":")
              , n = on(t.slice(0, i)).toLowerCase()
              , r = on(t.slice(i + 1));
            void 0 === e[n] ? e[n] = r : cn(e[n]) ? e[n].push(r) : e[n] = [e[n], r]
        }),
        e
    }
      , hn = gt
      , fn = Object.prototype.hasOwnProperty
      , pn = vt;
    vt.XMLHttpRequest = ue.XMLHttpRequest || xt,
    vt.XDomainRequest = "withCredentials"in new vt.XMLHttpRequest ? vt.XMLHttpRequest : ue.XDomainRequest,
    function(t, e) {
        for (var i = 0; i < t.length; i++)
            e(t[i])
    }(["get", "put", "post", "patch", "head", "delete"], function(t) {
        vt["delete" === t ? "del" : t] = function(e, i, n) {
            return i = yt(e, i, n),
            i.method = t.toUpperCase(),
            _t(i)
        }
    });
    var gn = function(t, e) {
        var i = new ue.WebVTT.Parser(ue,ue.vttjs,ue.WebVTT.StringDecoder())
          , n = [];
        i.oncue = function(t) {
            e.addCue(t)
        }
        ,
        i.onparsingerror = function(t) {
            n.push(t)
        }
        ,
        i.onflush = function() {
            e.trigger({
                type: "loadeddata",
                target: e
            })
        }
        ,
        i.parse(t),
        n.length > 0 && (ue.console && ue.console.groupCollapsed && ue.console.groupCollapsed("Text Track parsing errors for " + e.src),
        n.forEach(function(t) {
            return Ke.error(t)
        }),
        ue.console && ue.console.groupEnd && ue.console.groupEnd()),
        i.flush()
    }
      , mn = function(t, e) {
        var i = {
            uri: t
        }
          , n = en(t);
        n && (i.cors = n),
        pn(i, di(this, function(t, i, n) {
            if (t)
                return Ke.error(t, i);
            if (e.loaded_ = !0,
            "function" != typeof ue.WebVTT) {
                if (e.tech_) {
                    var r = function() {
                        return gn(n, e)
                    };
                    e.tech_.on("vttjsloaded", r),
                    e.tech_.on("vttjserror", function() {
                        Ke.error("vttjs failed to load, stopping trying to process " + e.src),
                        e.tech_.off("vttjsloaded", r)
                    })
                }
            } else
                gn(n, e)
        }))
    }
      , yn = function(t) {
        function e() {
            var i, n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (Ue(this, e),
            !r.tech)
                throw new Error("A tech was not provided.");
            var a = tt(r, {
                kind: zi[r.kind] || "subtitles",
                language: r.language || r.srclang || ""
            })
              , o = Zi[a.mode] || "disabled"
              , s = a["default"];
            "metadata" !== a.kind && "chapters" !== a.kind || (o = "hidden");
            var u = i = Fe(this, t.call(this, a));
            if (u.tech_ = a.tech,
            Pe)
                for (var l in e.prototype)
                    "constructor" !== l && (u[l] = e.prototype[l]);
            u.cues_ = [],
            u.activeCues_ = [];
            var c = new Xi(u.cues_)
              , d = new Xi(u.activeCues_)
              , h = !1
              , f = di(u, function() {
                this.activeCues,
                h && (this.trigger("cuechange"),
                h = !1)
            });
            return "disabled" !== o && u.tech_.ready(function() {
                u.tech_.on("timeupdate", f)
            }, !0),
            Object.defineProperty(u, "default", {
                get: function() {
                    return s
                },
                set: function() {}
            }),
            Object.defineProperty(u, "mode", {
                get: function() {
                    return o
                },
                set: function(t) {
                    var e = this;
                    Zi[t] && (o = t,
                    "showing" === o && this.tech_.ready(function() {
                        e.tech_.on("timeupdate", f)
                    }, !0),
                    this.trigger("modechange"))
                }
            }),
            Object.defineProperty(u, "cues", {
                get: function() {
                    return this.loaded_ ? c : null
                },
                set: function() {}
            }),
            Object.defineProperty(u, "activeCues", {
                get: function() {
                    if (!this.loaded_)
                        return null;
                    if (0 === this.cues.length)
                        return d;
                    for (var t = this.tech_.currentTime(), e = [], i = 0, n = this.cues.length; i < n; i++) {
                        var r = this.cues[i];
                        r.startTime <= t && r.endTime >= t ? e.push(r) : r.startTime === r.endTime && r.startTime <= t && r.startTime + .5 >= t && e.push(r)
                    }
                    if (h = !1,
                    e.length !== this.activeCues_.length)
                        h = !0;
                    else
                        for (var a = 0; a < e.length; a++)
                            -1 === this.activeCues_.indexOf(e[a]) && (h = !0);
                    return this.activeCues_ = e,
                    d.setCues_(this.activeCues_),
                    d
                },
                set: function() {}
            }),
            a.src ? (u.src = a.src,
            mn(a.src, u)) : u.loaded_ = !0,
            n = u,
            Fe(i, n)
        }
        return Ne(e, t),
        e.prototype.addCue = function(t) {
            var e = t;
            if (ue.vttjs && !(t instanceof ue.vttjs.VTTCue)) {
                e = new ue.vttjs.VTTCue(t.startTime,t.endTime,t.text);
                for (var i in t)
                    i in e || (e[i] = t[i]);
                e.id = t.id,
                e.originalCue_ = t
            }
            for (var n = this.tech_.textTracks(), r = 0; r < n.length; r++)
                n[r] !== this && n[r].removeCue(e);
            this.cues_.push(e),
            this.cues.setCues_(this.cues_)
        }
        ,
        e.prototype.removeCue = function(t) {
            for (var e = this.cues_.length; e--; ) {
                var i = this.cues_[e];
                if (i === t || i.originalCue_ && i.originalCue_ === t) {
                    this.cues_.splice(e, 1),
                    this.cues.setCues_(this.cues_);
                    break
                }
            }
        }
        ,
        e
    }(Qi);
    yn.prototype.allowedEvents_ = {
        cuechange: "cuechange"
    };
    var vn = function(t) {
        function e() {
            var i, n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            Ue(this, e);
            var a = tt(r, {
                kind: Ki[r.kind] || ""
            })
              , o = i = Fe(this, t.call(this, a))
              , s = !1;
            if (Pe)
                for (var u in e.prototype)
                    "constructor" !== u && (o[u] = e.prototype[u]);
            return Object.defineProperty(o, "enabled", {
                get: function() {
                    return s
                },
                set: function(t) {
                    "boolean" == typeof t && t !== s && (s = t,
                    this.trigger("enabledchange"))
                }
            }),
            a.enabled && (o.enabled = a.enabled),
            o.loaded_ = !0,
            n = o,
            Fe(i, n)
        }
        return Ne(e, t),
        e
    }(Qi)
      , _n = function(t) {
        function e() {
            var i, n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            Ue(this, e);
            var a = tt(r, {
                kind: Yi[r.kind] || ""
            })
              , o = i = Fe(this, t.call(this, a))
              , s = !1;
            if (Pe)
                for (var u in e.prototype)
                    "constructor" !== u && (o[u] = e.prototype[u]);
            return Object.defineProperty(o, "selected", {
                get: function() {
                    return s
                },
                set: function(t) {
                    "boolean" == typeof t && t !== s && (s = t,
                    this.trigger("selectedchange"))
                }
            }),
            a.selected && (o.selected = a.selected),
            n = o,
            Fe(i, n)
        }
        return Ne(e, t),
        e
    }(Qi)
      , bn = 0
      , xn = 2
      , Tn = function(t) {
        function e() {
            var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            Ue(this, e);
            var n = Fe(this, t.call(this))
              , r = void 0
              , a = n;
            if (Pe) {
                a = fe.createElement("custom");
                for (var o in e.prototype)
                    "constructor" !== o && (a[o] = e.prototype[o])
            }
            var s = new yn(i);
            if (a.kind = s.kind,
            a.src = s.src,
            a.srclang = s.language,
            a.label = s.label,
            a["default"] = s["default"],
            Object.defineProperty(a, "readyState", {
                get: function() {
                    return r
                }
            }),
            Object.defineProperty(a, "track", {
                get: function() {
                    return s
                }
            }),
            r = bn,
            s.addEventListener("loadeddata", function() {
                r = xn,
                a.trigger({
                    type: "load",
                    target: a
                })
            }),
            Pe) {
                var u;
                return u = a,
                Fe(n, u)
            }
            return n
        }
        return Ne(e, t),
        e
    }(fi);
    Tn.prototype.allowedEvents_ = {
        load: "load"
    },
    Tn.NONE = bn,
    Tn.LOADING = 1,
    Tn.LOADED = xn,
    Tn.ERROR = 3;
    var wn = {
        audio: {
            ListClass: Hi,
            TrackClass: vn,
            capitalName: "Audio"
        },
        video: {
            ListClass: Gi,
            TrackClass: _n,
            capitalName: "Video"
        },
        text: {
            ListClass: Wi,
            TrackClass: yn,
            capitalName: "Text"
        }
    };
    Object.keys(wn).forEach(function(t) {
        wn[t].getterName = t + "Tracks",
        wn[t].privateName = t + "Tracks_"
    });
    var Sn = {
        remoteText: {
            ListClass: Wi,
            TrackClass: yn,
            capitalName: "RemoteText",
            getterName: "remoteTextTracks",
            privateName: "remoteTextTracks_"
        },
        remoteTextEl: {
            ListClass: qi,
            TrackClass: Tn,
            capitalName: "RemoteTextTrackEls",
            getterName: "remoteTextTrackEls",
            privateName: "remoteTextTrackEls_"
        }
    }
      , kn = tt(wn, Sn);
    Sn.names = Object.keys(Sn),
    wn.names = Object.keys(wn),
    kn.names = [].concat(Sn.names).concat(wn.names);
    var Cn = Object.create || function() {
        function t() {}
        return function(e) {
            if (1 !== arguments.length)
                throw new Error("Object.create shim only accepts one parameter.");
            return t.prototype = e,
            new t
        }
    }();
    Tt.prototype = Cn(Error.prototype),
    Tt.prototype.constructor = Tt,
    Tt.Errors = {
        BadSignature: {
            code: 0,
            message: "Malformed WebVTT signature."
        },
        BadTimeStamp: {
            code: 1,
            message: "Malformed time stamp."
        }
    },
    St.prototype = {
        set: function(t, e) {
            this.get(t) || "" === e || (this.values[t] = e)
        },
        get: function(t, e, i) {
            return i ? this.has(t) ? this.values[t] : e[i] : this.has(t) ? this.values[t] : e
        },
        has: function(t) {
            return t in this.values
        },
        alt: function(t, e, i) {
            for (var n = 0; n < i.length; ++n)
                if (e === i[n]) {
                    this.set(t, e);
                    break
                }
        },
        integer: function(t, e) {
            /^-?\d+$/.test(e) && this.set(t, parseInt(e, 10))
        },
        percent: function(t, e) {
            return !!(e.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (e = parseFloat(e)) >= 0 && e <= 100) && (this.set(t, e),
            !0)
        }
    };
    var En = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&lrm;": "‎",
        "&rlm;": "‏",
        "&nbsp;": " "
    }
      , An = {
        c: "span",
        i: "i",
        b: "b",
        u: "u",
        ruby: "ruby",
        rt: "rt",
        v: "span",
        lang: "span"
    }
      , On = {
        v: "title",
        lang: "lang"
    }
      , Pn = {
        rt: "ruby"
    }
      , In = [[1470, 1470], [1472, 1472], [1475, 1475], [1478, 1478], [1488, 1514], [1520, 1524], [1544, 1544], [1547, 1547], [1549, 1549], [1563, 1563], [1566, 1610], [1645, 1647], [1649, 1749], [1765, 1766], [1774, 1775], [1786, 1805], [1807, 1808], [1810, 1839], [1869, 1957], [1969, 1969], [1984, 2026], [2036, 2037], [2042, 2042], [2048, 2069], [2074, 2074], [2084, 2084], [2088, 2088], [2096, 2110], [2112, 2136], [2142, 2142], [2208, 2208], [2210, 2220], [8207, 8207], [64285, 64285], [64287, 64296], [64298, 64310], [64312, 64316], [64318, 64318], [64320, 64321], [64323, 64324], [64326, 64449], [64467, 64829], [64848, 64911], [64914, 64967], [65008, 65020], [65136, 65140], [65142, 65276], [67584, 67589], [67592, 67592], [67594, 67637], [67639, 67640], [67644, 67644], [67647, 67669], [67671, 67679], [67840, 67867], [67872, 67897], [67903, 67903], [67968, 68023], [68030, 68031], [68096, 68096], [68112, 68115], [68117, 68119], [68121, 68147], [68160, 68167], [68176, 68184], [68192, 68223], [68352, 68405], [68416, 68437], [68440, 68466], [68472, 68479], [68608, 68680], [126464, 126467], [126469, 126495], [126497, 126498], [126500, 126500], [126503, 126503], [126505, 126514], [126516, 126519], [126521, 126521], [126523, 126523], [126530, 126530], [126535, 126535], [126537, 126537], [126539, 126539], [126541, 126543], [126545, 126546], [126548, 126548], [126551, 126551], [126553, 126553], [126555, 126555], [126557, 126557], [126559, 126559], [126561, 126562], [126564, 126564], [126567, 126570], [126572, 126578], [126580, 126583], [126585, 126588], [126590, 126590], [126592, 126601], [126603, 126619], [126625, 126627], [126629, 126633], [126635, 126651], [1114109, 1114109]];
    It.prototype.applyStyles = function(t, e) {
        e = e || this.div;
        for (var i in t)
            t.hasOwnProperty(i) && (e.style[i] = t[i])
    }
    ,
    It.prototype.formatStyle = function(t, e) {
        return 0 === t ? 0 : t + e
    }
    ,
    Lt.prototype = Cn(It.prototype),
    Lt.prototype.constructor = Lt,
    jt.prototype.move = function(t, e) {
        switch (e = void 0 !== e ? e : this.lineHeight,
        t) {
        case "+x":
            this.left += e,
            this.right += e;
            break;
        case "-x":
            this.left -= e,
            this.right -= e;
            break;
        case "+y":
            this.top += e,
            this.bottom += e;
            break;
        case "-y":
            this.top -= e,
            this.bottom -= e
        }
    }
    ,
    jt.prototype.overlaps = function(t) {
        return this.left < t.right && this.right > t.left && this.top < t.bottom && this.bottom > t.top
    }
    ,
    jt.prototype.overlapsAny = function(t) {
        for (var e = 0; e < t.length; e++)
            if (this.overlaps(t[e]))
                return !0;
        return !1
    }
    ,
    jt.prototype.within = function(t) {
        return this.top >= t.top && this.bottom <= t.bottom && this.left >= t.left && this.right <= t.right
    }
    ,
    jt.prototype.overlapsOppositeAxis = function(t, e) {
        switch (e) {
        case "+x":
            return this.left < t.left;
        case "-x":
            return this.right > t.right;
        case "+y":
            return this.top < t.top;
        case "-y":
            return this.bottom > t.bottom
        }
    }
    ,
    jt.prototype.intersectPercentage = function(t) {
        return Math.max(0, Math.min(this.right, t.right) - Math.max(this.left, t.left)) * Math.max(0, Math.min(this.bottom, t.bottom) - Math.max(this.top, t.top)) / (this.height * this.width)
    }
    ,
    jt.prototype.toCSSCompatValues = function(t) {
        return {
            top: this.top - t.top,
            bottom: t.bottom - this.bottom,
            left: this.left - t.left,
            right: t.right - this.right,
            height: this.height,
            width: this.width
        }
    }
    ,
    jt.getSimpleBoxPosition = function(t) {
        var e = t.div ? t.div.offsetHeight : t.tagName ? t.offsetHeight : 0
          , i = t.div ? t.div.offsetWidth : t.tagName ? t.offsetWidth : 0
          , n = t.div ? t.div.offsetTop : t.tagName ? t.offsetTop : 0;
        return t = t.div ? t.div.getBoundingClientRect() : t.tagName ? t.getBoundingClientRect() : t,
        {
            left: t.left,
            right: t.right,
            top: t.top || n,
            height: t.height || e,
            bottom: t.bottom || n + (t.height || e),
            width: t.width || i
        }
    }
    ,
    Dt.StringDecoder = function() {
        return {
            decode: function(t) {
                if (!t)
                    return "";
                if ("string" != typeof t)
                    throw new Error("Error - expected string data.");
                return decodeURIComponent(encodeURIComponent(t))
            }
        }
    }
    ,
    Dt.convertCueToDOMTree = function(t, e) {
        return t && e ? Et(t, e) : null
    }
    ,
    Dt.processCues = function(t, e, i) {
        if (!t || !e || !i)
            return null;
        for (; i.firstChild; )
            i.removeChild(i.firstChild);
        var n = t.document.createElement("div");
        if (n.style.position = "absolute",
        n.style.left = "0",
        n.style.right = "0",
        n.style.top = "0",
        n.style.bottom = "0",
        n.style.margin = "1.5%",
        i.appendChild(n),
        function(t) {
            for (var e = 0; e < t.length; e++)
                if (t[e].hasBeenReset || !t[e].displayState)
                    return !0;
            return !1
        }(e)) {
            var r = []
              , a = jt.getSimpleBoxPosition(n)
              , o = Math.round(.05 * a.height * 100) / 100
              , s = {
                font: o + "px sans-serif"
            };
            !function() {
                for (var i, o, u = 0; u < e.length; u++)
                    o = e[u],
                    i = new Lt(t,o,s),
                    n.appendChild(i.div),
                    Mt(t, i, a, r),
                    o.displayState = i.div,
                    r.push(jt.getSimpleBoxPosition(i))
            }()
        } else
            for (var u = 0; u < e.length; u++)
                n.appendChild(e[u].displayState)
    }
    ,
    Dt.Parser = function(t, e, i) {
        i || (i = e,
        e = {}),
        e || (e = {}),
        this.window = t,
        this.vttjs = e,
        this.state = "INITIAL",
        this.buffer = "",
        this.decoder = i || new TextDecoder("utf8"),
        this.regionList = []
    }
    ,
    Dt.Parser.prototype = {
        reportOrThrowError: function(t) {
            if (!(t instanceof Tt))
                throw t;
            this.onparsingerror && this.onparsingerror(t)
        },
        parse: function(t) {
            function e() {
                for (var t = r.buffer, e = 0; e < t.length && "\r" !== t[e] && "\n" !== t[e]; )
                    ++e;
                var i = t.substr(0, e);
                return "\r" === t[e] && ++e,
                "\n" === t[e] && ++e,
                r.buffer = t.substr(e),
                i
            }
            function i(t) {
                var e = new St;
                if (kt(t, function(t, i) {
                    switch (t) {
                    case "id":
                        e.set(t, i);
                        break;
                    case "width":
                        e.percent(t, i);
                        break;
                    case "lines":
                        e.integer(t, i);
                        break;
                    case "regionanchor":
                    case "viewportanchor":
                        var n = i.split(",");
                        if (2 !== n.length)
                            break;
                        var r = new St;
                        if (r.percent("x", n[0]),
                        r.percent("y", n[1]),
                        !r.has("x") || !r.has("y"))
                            break;
                        e.set(t + "X", r.get("x")),
                        e.set(t + "Y", r.get("y"));
                        break;
                    case "scroll":
                        e.alt(t, i, ["up"])
                    }
                }, /=/, /\s/),
                e.has("id")) {
                    var i = new (r.vttjs.VTTRegion || r.window.VTTRegion);
                    i.width = e.get("width", 100),
                    i.lines = e.get("lines", 3),
                    i.regionAnchorX = e.get("regionanchorX", 0),
                    i.regionAnchorY = e.get("regionanchorY", 100),
                    i.viewportAnchorX = e.get("viewportanchorX", 0),
                    i.viewportAnchorY = e.get("viewportanchorY", 100),
                    i.scroll = e.get("scroll", ""),
                    r.onregion && r.onregion(i),
                    r.regionList.push({
                        id: e.get("id"),
                        region: i
                    })
                }
            }
            function n(t) {
                var e = new St;
                kt(t, function(t, i) {
                    switch (t) {
                    case "MPEGT":
                        e.integer(t + "S", i);
                        break;
                    case "LOCA":
                        e.set(t + "L", wt(i))
                    }
                }, /[^\d]:/, /,/),
                r.ontimestampmap && r.ontimestampmap({
                    MPEGTS: e.get("MPEGTS"),
                    LOCAL: e.get("LOCAL")
                })
            }
            var r = this;
            t && (r.buffer += r.decoder.decode(t, {
                stream: !0
            }));
            try {
                var a;
                if ("INITIAL" === r.state) {
                    if (!/\r\n|\n/.test(r.buffer))
                        return this;
                    a = e();
                    var o = a.match(/^WEBVTT([ \t].*)?$/);
                    if (!o || !o[0])
                        throw new Tt(Tt.Errors.BadSignature);
                    r.state = "HEADER"
                }
                for (var s = !1; r.buffer; ) {
                    if (!/\r\n|\n/.test(r.buffer))
                        return this;
                    switch (s ? s = !1 : a = e(),
                    r.state) {
                    case "HEADER":
                        /:/.test(a) ? function(t) {
                            t.match(/X-TIMESTAMP-MAP/) ? kt(t, function(t, e) {
                                switch (t) {
                                case "X-TIMESTAMP-MAP":
                                    n(e)
                                }
                            }, /=/) : kt(t, function(t, e) {
                                switch (t) {
                                case "Region":
                                    i(e)
                                }
                            }, /:/)
                        }(a) : a || (r.state = "ID");
                        continue;
                    case "NOTE":
                        a || (r.state = "ID");
                        continue;
                    case "ID":
                        if (/^NOTE($|[ \t])/.test(a)) {
                            r.state = "NOTE";
                            break
                        }
                        if (!a)
                            continue;
                        if (r.cue = new (r.vttjs.VTTCue || r.window.VTTCue)(0,0,""),
                        r.state = "CUE",
                        -1 === a.indexOf("-->")) {
                            r.cue.id = a;
                            continue
                        }
                    case "CUE":
                        try {
                            Ct(a, r.cue, r.regionList)
                        } catch (t) {
                            r.reportOrThrowError(t),
                            r.cue = null,
                            r.state = "BADCUE";
                            continue
                        }
                        r.state = "CUETEXT";
                        continue;
                    case "CUETEXT":
                        var u = -1 !== a.indexOf("-->");
                        if (!a || u && (s = !0)) {
                            r.oncue && r.oncue(r.cue),
                            r.cue = null,
                            r.state = "ID";
                            continue
                        }
                        r.cue.text && (r.cue.text += "\n"),
                        r.cue.text += a;
                        continue;
                    case "BADCUE":
                        a || (r.state = "ID");
                        continue
                    }
                }
            } catch (t) {
                r.reportOrThrowError(t),
                "CUETEXT" === r.state && r.cue && r.oncue && r.oncue(r.cue),
                r.cue = null,
                r.state = "INITIAL" === r.state ? "BADWEBVTT" : "BADCUE"
            }
            return this
        },
        flush: function() {
            var t = this;
            try {
                if (t.buffer += t.decoder.decode(),
                (t.cue || "HEADER" === t.state) && (t.buffer += "\n\n",
                t.parse()),
                "INITIAL" === t.state)
                    throw new Tt(Tt.Errors.BadSignature)
            } catch (e) {
                t.reportOrThrowError(e)
            }
            return t.onflush && t.onflush(),
            this
        }
    };
    var Ln = Dt
      , jn = "auto"
      , Mn = {
        "": !0,
        lr: !0,
        rl: !0
    }
      , Dn = {
        start: !0,
        middle: !0,
        end: !0,
        left: !0,
        right: !0
    };
    Nt.prototype.getCueAsHTML = function() {
        return WebVTT.convertCueToDOMTree(window, this.text)
    }
    ;
    var Rn = Nt
      , Bn = {
        "": !0,
        up: !0
    }
      , Un = Vt
      , Nn = t(function(t) {
        var e = t.exports = {
            WebVTT: Ln,
            VTTCue: Rn,
            VTTRegion: Un
        };
        ue.vttjs = e,
        ue.WebVTT = e.WebVTT;
        var i = e.VTTCue
          , n = e.VTTRegion
          , r = ue.VTTCue
          , a = ue.VTTRegion;
        e.shim = function() {
            ue.VTTCue = i,
            ue.VTTRegion = n
        }
        ,
        e.restore = function() {
            ue.VTTCue = r,
            ue.VTTRegion = a
        }
        ,
        ue.VTTCue || e.shim()
    })
      , Fn = function(t) {
        function e() {
            var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {}
            ;
            Ue(this, e),
            i.reportTouchActivity = !1;
            var r = Fe(this, t.call(this, null, i, n));
            return r.hasStarted_ = !1,
            r.on("playing", function() {
                this.hasStarted_ = !0
            }),
            r.on("loadstart", function() {
                this.hasStarted_ = !1
            }),
            kn.names.forEach(function(t) {
                var e = kn[t];
                i && i[e.getterName] && (r[e.privateName] = i[e.getterName])
            }),
            r.featuresProgressEvents || r.manualProgressOn(),
            r.featuresTimeupdateEvents || r.manualTimeUpdatesOn(),
            ["Text", "Audio", "Video"].forEach(function(t) {
                !1 === i["native" + t + "Tracks"] && (r["featuresNative" + t + "Tracks"] = !1)
            }),
            !1 === i.nativeCaptions || !1 === i.nativeTextTracks ? r.featuresNativeTextTracks = !1 : !0 !== i.nativeCaptions && !0 !== i.nativeTextTracks || (r.featuresNativeTextTracks = !0),
            r.featuresNativeTextTracks || r.emulateTextTracks(),
            r.autoRemoteTextTracks_ = new kn.text.ListClass,
            r.initTrackListeners(),
            i.nativeControlsForTouch || r.emitTapEvents(),
            r.constructor && (r.name_ = r.constructor.name || "Unknown Tech"),
            r
        }
        return Ne(e, t),
        e.prototype.manualProgressOn = function() {
            this.on("durationchange", this.onDurationChange),
            this.manualProgress = !0,
            this.one("ready", this.trackProgress)
        }
        ,
        e.prototype.manualProgressOff = function() {
            this.manualProgress = !1,
            this.stopTrackingProgress(),
            this.off("durationchange", this.onDurationChange)
        }
        ,
        e.prototype.trackProgress = function(t) {
            this.stopTrackingProgress(),
            this.progressInterval = this.setInterval(di(this, function() {
                var t = this.bufferedPercent();
                this.bufferedPercent_ !== t && this.trigger("progress"),
                this.bufferedPercent_ = t,
                1 === t && this.stopTrackingProgress()
            }), 500)
        }
        ,
        e.prototype.onDurationChange = function(t) {
            this.duration_ = this.duration()
        }
        ,
        e.prototype.buffered = function() {
            return rt(0, 0)
        }
        ,
        e.prototype.bufferedPercent = function() {
            return at(this.buffered(), this.duration_)
        }
        ,
        e.prototype.stopTrackingProgress = function() {
            this.clearInterval(this.progressInterval)
        }
        ,
        e.prototype.manualTimeUpdatesOn = function() {
            this.manualTimeUpdates = !0,
            this.on("play", this.trackCurrentTime),
            this.on("pause", this.stopTrackingCurrentTime)
        }
        ,
        e.prototype.manualTimeUpdatesOff = function() {
            this.manualTimeUpdates = !1,
            this.stopTrackingCurrentTime(),
            this.off("play", this.trackCurrentTime),
            this.off("pause", this.stopTrackingCurrentTime)
        }
        ,
        e.prototype.trackCurrentTime = function() {
            this.currentTimeInterval && this.stopTrackingCurrentTime(),
            this.currentTimeInterval = this.setInterval(function() {
                this.trigger({
                    type: "timeupdate",
                    target: this,
                    manuallyTriggered: !0
                })
            }, 250)
        }
        ,
        e.prototype.stopTrackingCurrentTime = function() {
            this.clearInterval(this.currentTimeInterval),
            this.trigger({
                type: "timeupdate",
                target: this,
                manuallyTriggered: !0
            })
        }
        ,
        e.prototype.dispose = function() {
            this.clearTracks(wn.names),
            this.manualProgress && this.manualProgressOff(),
            this.manualTimeUpdates && this.manualTimeUpdatesOff(),
            t.prototype.dispose.call(this)
        }
        ,
        e.prototype.clearTracks = function(t) {
            var e = this;
            t = [].concat(t),
            t.forEach(function(t) {
                for (var i = e[t + "Tracks"]() || [], n = i.length; n--; ) {
                    var r = i[n];
                    "text" === t && e.removeRemoteTextTrack(r),
                    i.removeTrack(r)
                }
            })
        }
        ,
        e.prototype.cleanupAutoTextTracks = function() {
            for (var t = this.autoRemoteTextTracks_ || [], e = t.length; e--; ) {
                var i = t[e];
                this.removeRemoteTextTrack(i)
            }
        }
        ,
        e.prototype.reset = function() {}
        ,
        e.prototype.error = function(t) {
            return void 0 !== t && (this.error_ = new ot(t),
            this.trigger("error")),
            this.error_
        }
        ,
        e.prototype.played = function() {
            return this.hasStarted_ ? rt(0, 0) : rt()
        }
        ,
        e.prototype.setCurrentTime = function() {
            this.manualTimeUpdates && this.trigger({
                type: "timeupdate",
                target: this,
                manuallyTriggered: !0
            })
        }
        ,
        e.prototype.initTrackListeners = function() {
            var t = this;
            wn.names.forEach(function(e) {
                var i = wn[e]
                  , n = function() {
                    t.trigger(e + "trackchange")
                }
                  , r = t[i.getterName]();
                r.addEventListener("removetrack", n),
                r.addEventListener("addtrack", n),
                t.on("dispose", function() {
                    r.removeEventListener("removetrack", n),
                    r.removeEventListener("addtrack", n)
                })
            })
        }
        ,
        e.prototype.addWebVttScript_ = function() {
            var t = this;
            if (!ue.WebVTT)
                if (fe.body.contains(this.el())) {
                    if (!this.options_["vtt.js"] && a(Nn) && Object.keys(Nn).length > 0)
                        return void this.trigger("vttjsloaded");
                    var e = fe.createElement("script");
                    e.src = this.options_["vtt.js"] || "https://vjs.zencdn.net/vttjs/0.12.4/vtt.min.js",
                    e.onload = function() {
                        t.trigger("vttjsloaded")
                    }
                    ,
                    e.onerror = function() {
                        t.trigger("vttjserror")
                    }
                    ,
                    this.on("dispose", function() {
                        e.onload = null,
                        e.onerror = null
                    }),
                    ue.WebVTT = !0,
                    this.el().parentNode.appendChild(e)
                } else
                    this.ready(this.addWebVttScript_)
        }
        ,
        e.prototype.emulateTextTracks = function() {
            var t = this
              , e = this.textTracks()
              , i = this.remoteTextTracks()
              , n = function(t) {
                return e.addTrack(t.track)
            }
              , r = function(t) {
                return e.removeTrack(t.track)
            };
            i.on("addtrack", n),
            i.on("removetrack", r),
            this.addWebVttScript_();
            var a = function() {
                return t.trigger("texttrackchange")
            }
              , o = function() {
                a();
                for (var t = 0; t < e.length; t++) {
                    var i = e[t];
                    i.removeEventListener("cuechange", a),
                    "showing" === i.mode && i.addEventListener("cuechange", a)
                }
            };
            o(),
            e.addEventListener("change", o),
            e.addEventListener("addtrack", o),
            e.addEventListener("removetrack", o),
            this.on("dispose", function() {
                i.off("addtrack", n),
                i.off("removetrack", r),
                e.removeEventListener("change", o),
                e.removeEventListener("addtrack", o),
                e.removeEventListener("removetrack", o);
                for (var t = 0; t < e.length; t++)
                    e[t].removeEventListener("cuechange", a)
            })
        }
        ,
        e.prototype.addTextTrack = function(t, e, i) {
            if (!t)
                throw new Error("TextTrack kind is required but was not provided");
            return Gt(this, t, e, i)
        }
        ,
        e.prototype.createRemoteTextTrack = function(t) {
            var e = tt(t, {
                tech: this
            });
            return new Sn.remoteTextEl.TrackClass(e)
        }
        ,
        e.prototype.addRemoteTextTrack = function() {
            var t = this
              , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , i = arguments[1]
              , n = this.createRemoteTextTrack(e);
            return !0 !== i && !1 !== i && (Ke.warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js'),
            i = !0),
            this.remoteTextTrackEls().addTrackElement_(n),
            this.remoteTextTracks().addTrack(n.track),
            !0 !== i && this.ready(function() {
                return t.autoRemoteTextTracks_.addTrack(n.track)
            }),
            n
        }
        ,
        e.prototype.removeRemoteTextTrack = function(t) {
            var e = this.remoteTextTrackEls().getTrackElementByTrack_(t);
            this.remoteTextTrackEls().removeTrackElement_(e),
            this.remoteTextTracks().removeTrack(t),
            this.autoRemoteTextTracks_.removeTrack(t)
        }
        ,
        e.prototype.getVideoPlaybackQuality = function() {
            return {}
        }
        ,
        e.prototype.setPoster = function() {}
        ,
        e.prototype.playsinline = function() {}
        ,
        e.prototype.setPlaysinline = function() {}
        ,
        e.prototype.canPlayType = function() {
            return ""
        }
        ,
        e.canPlayType = function() {
            return ""
        }
        ,
        e.canPlaySource = function(t, i) {
            return e.canPlayType(t.type)
        }
        ,
        e.isTech = function(t) {
            return t.prototype instanceof e || t instanceof e || t === e
        }
        ,
        e.registerTech = function(t, i) {
            if (e.techs_ || (e.techs_ = {}),
            !e.isTech(i))
                throw new Error("Tech " + t + " must be a Tech");
            if (!e.canPlayType)
                throw new Error("Techs must have a static canPlayType method on them");
            if (!e.canPlaySource)
                throw new Error("Techs must have a static canPlaySource method on them");
            return t = J(t),
            e.techs_[t] = i,
            "Tech" !== t && e.defaultTechOrder_.push(t),
            i
        }
        ,
        e.getTech = function(t) {
            if (t)
                return t = J(t),
                e.techs_ && e.techs_[t] ? e.techs_[t] : ue && ue.videojs && ue.videojs[t] ? (Ke.warn("The " + t + " tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"),
                ue.videojs[t]) : void 0
        }
        ,
        e
    }(wi);
    kn.names.forEach(function(t) {
        var e = kn[t];
        Fn.prototype[e.getterName] = function() {
            return this[e.privateName] = this[e.privateName] || new e.ListClass,
            this[e.privateName]
        }
    }),
    Fn.prototype.featuresVolumeControl = !0,
    Fn.prototype.featuresFullscreenResize = !1,
    Fn.prototype.featuresPlaybackRate = !1,
    Fn.prototype.featuresProgressEvents = !1,
    Fn.prototype.featuresTimeupdateEvents = !1,
    Fn.prototype.featuresNativeTextTracks = !1,
    Fn.withSourceHandlers = function(t) {
        t.registerSourceHandler = function(e, i) {
            var n = t.sourceHandlers;
            n || (n = t.sourceHandlers = []),
            void 0 === i && (i = n.length),
            n.splice(i, 0, e)
        }
        ,
        t.canPlayType = function(e) {
            for (var i = t.sourceHandlers || [], n = void 0, r = 0; r < i.length; r++)
                if (n = i[r].canPlayType(e))
                    return n;
            return ""
        }
        ,
        t.selectSourceHandler = function(e, i) {
            for (var n = t.sourceHandlers || [], r = 0; r < n.length; r++)
                if (n[r].canHandleSource(e, i))
                    return n[r];
            return null
        }
        ,
        t.canPlaySource = function(e, i) {
            var n = t.selectSourceHandler(e, i);
            return n ? n.canHandleSource(e, i) : ""
        }
        ,
        ["seekable", "duration"].forEach(function(t) {
            var e = this[t];
            "function" == typeof e && (this[t] = function() {
                return this.sourceHandler_ && this.sourceHandler_[t] ? this.sourceHandler_[t].apply(this.sourceHandler_, arguments) : e.apply(this, arguments)
            }
            )
        }, t.prototype),
        t.prototype.setSource = function(e) {
            var i = t.selectSourceHandler(e, this.options_);
            i || (t.nativeSourceHandler ? i = t.nativeSourceHandler : Ke.error("No source hander found for the current source.")),
            this.disposeSourceHandler(),
            this.off("dispose", this.disposeSourceHandler),
            i !== t.nativeSourceHandler && (this.currentSource_ = e),
            this.sourceHandler_ = i.handleSource(e, this, this.options_),
            this.on("dispose", this.disposeSourceHandler)
        }
        ,
        t.prototype.disposeSourceHandler = function() {
            this.currentSource_ && (this.clearTracks(["audio", "video"]),
            this.currentSource_ = null),
            this.cleanupAutoTextTracks(),
            this.sourceHandler_ && (this.sourceHandler_.dispose && this.sourceHandler_.dispose(),
            this.sourceHandler_ = null)
        }
    }
    ,
    wi.registerComponent("Tech", Fn),
    Fn.registerTech("Tech", Fn),
    Fn.defaultTechOrder_ = [];
    var Hn = {}
      , Vn = {
        buffered: 1,
        currentTime: 1,
        duration: 1,
        seekable: 1,
        played: 1
    }
      , Gn = {
        setCurrentTime: 1
    }
      , Wn = function Ca(t) {
        if (Array.isArray(t)) {
            var e = [];
            t.forEach(function(t) {
                t = Ca(t),
                Array.isArray(t) ? e = e.concat(t) : r(t) && e.push(t)
            }),
            t = e
        } else
            t = "string" == typeof t && t.trim() ? [{
                src: t
            }] : r(t) && "string" == typeof t.src && t.src && t.src.trim() ? [t] : [];
        return t
    }
      , qn = function(t) {
        function e(i, n, r) {
            Ue(this, e);
            var a = tt({
                createEl: !1
            }, n)
              , o = Fe(this, t.call(this, i, a, r));
            if (n.playerOptions.sources && 0 !== n.playerOptions.sources.length)
                i.src(n.playerOptions.sources);
            else
                for (var s = 0, u = n.playerOptions.techOrder; s < u.length; s++) {
                    var l = J(u[s])
                      , c = Fn.getTech(l);
                    if (l || (c = wi.getComponent(l)),
                    c && c.isSupported()) {
                        i.loadTech_(l);
                        break
                    }
                }
            return o
        }
        return Ne(e, t),
        e
    }(wi);
    wi.registerComponent("MediaLoader", qn);
    var Xn = function(t) {
        function e(i, n) {
            Ue(this, e);
            var r = Fe(this, t.call(this, i, n));
            return r.emitTapEvents(),
            r.enable(),
            r
        }
        return Ne(e, t),
        e.prototype.createEl = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div"
              , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            i = n({
                innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
                className: this.buildCSSClass(),
                tabIndex: 0
            }, i),
            "button" === e && Ke.error("Creating a ClickableComponent with an HTML element of " + e + " is not supported; use a Button instead."),
            r = n({
                role: "button",
                "aria-live": "polite"
            }, r),
            this.tabIndex_ = i.tabIndex;
            var a = t.prototype.createEl.call(this, e, i, r);
            return this.createControlTextEl(a),
            a
        }
        ,
        e.prototype.dispose = function() {
            this.controlTextEl_ = null,
            t.prototype.dispose.call(this)
        }
        ,
        e.prototype.createControlTextEl = function(t) {
            return this.controlTextEl_ = g("span", {
                className: "vjs-control-text"
            }),
            t && t.appendChild(this.controlTextEl_),
            this.controlText(this.controlText_, t),
            this.controlTextEl_
        }
        ,
        e.prototype.controlText = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.el();
            if (void 0 === t)
                return this.controlText_ || "Need Text";
            var i = this.localize(t);
            this.controlText_ = t,
            m(this.controlTextEl_, i),
            this.nonIconControl || e.setAttribute("title", i)
        }
        ,
        e.prototype.buildCSSClass = function() {
            return "vjs-control vjs-button " + t.prototype.buildCSSClass.call(this)
        }
        ,
        e.prototype.enable = function() {
            this.enabled_ || (this.enabled_ = !0,
            this.removeClass("vjs-disabled"),
            this.el_.setAttribute("aria-disabled", "false"),
            void 0 !== this.tabIndex_ && this.el_.setAttribute("tabIndex", this.tabIndex_),
            this.on(["tap", "click"], this.handleClick),
            this.on("focus", this.handleFocus),
            this.on("blur", this.handleBlur))
        }
        ,
        e.prototype.disable = function() {
            this.enabled_ = !1,
            this.addClass("vjs-disabled"),
            this.el_.setAttribute("aria-disabled", "true"),
            void 0 !== this.tabIndex_ && this.el_.removeAttribute("tabIndex"),
            this.off(["tap", "click"], this.handleClick),
            this.off("focus", this.handleFocus),
            this.off("blur", this.handleBlur)
        }
        ,
        e.prototype.handleClick = function(t) {}
        ,
        e.prototype.handleFocus = function(t) {
            q(fe, "keydown", di(this, this.handleKeyPress))
        }
        ,
        e.prototype.handleKeyPress = function(e) {
            32 === e.which || 13 === e.which ? (e.preventDefault(),
            this.trigger("click")) : t.prototype.handleKeyPress && t.prototype.handleKeyPress.call(this, e)
        }
        ,
        e.prototype.handleBlur = function(t) {
            X(fe, "keydown", di(this, this.handleKeyPress))
        }
        ,
        e
    }(wi);
    wi.registerComponent("ClickableComponent", Xn);
    var Yn = function(t) {
        function e(i, n) {
            Ue(this, e);
            var r = Fe(this, t.call(this, i, n));
            return r.update(),
            i.on("posterchange", di(r, r.update)),
            r
        }
        return Ne(e, t),
        e.prototype.dispose = function() {
            this.player().off("posterchange", this.update),
            t.prototype.dispose.call(this)
        }
        ,
        e.prototype.createEl = function() {
            var t = g("div", {
                className: "vjs-poster",
                tabIndex: -1
            });
            return De || (this.fallbackImg_ = g("img"),
            t.appendChild(this.fallbackImg_)),
            t
        }
        ,
        e.prototype.update = function(t) {
            var e = this.player().poster();
            this.setSrc(e),
            e ? this.show() : this.hide()
        }
        ,
        e.prototype.setSrc = function(t) {
            if (this.fallbackImg_)
                this.fallbackImg_.src = t;
            else {
                var e = "";
                t && (e = 'url("' + t + '")'),
                this.el_.style.backgroundImage = e
            }
        }
        ,
        e.prototype.handleClick = function(t) {
            this.player_.controls() && (this.player_.paused() ? this.player_.play() : this.player_.pause())
        }
        ,
        e
    }(Xn);
    wi.registerComponent("PosterImage", Yn);
    var Kn = {
        monospace: "monospace",
        sansSerif: "sans-serif",
        serif: "serif",
        monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace',
        monospaceSerif: '"Courier New", monospace',
        proportionalSansSerif: "sans-serif",
        proportionalSerif: "serif",
        casual: '"Comic Sans MS", Impact, fantasy',
        script: '"Monotype Corsiva", cursive',
        smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif'
    }
      , zn = function(t) {
        function e(i, n, r) {
            Ue(this, e);
            var a = Fe(this, t.call(this, i, n, r));
            return i.on("loadstart", di(a, a.toggleDisplay)),
            i.on("texttrackchange", di(a, a.updateDisplay)),
            i.on("loadstart", di(a, a.preselectTrack)),
            i.ready(di(a, function() {
                if (i.tech_ && i.tech_.featuresNativeTextTracks)
                    return void this.hide();
                i.on("fullscreenchange", di(this, this.updateDisplay));
                for (var t = this.options_.playerOptions.tracks || [], e = 0; e < t.length; e++)
                    this.player_.addRemoteTextTrack(t[e], !0);
                this.preselectTrack()
            })),
            a
        }
        return Ne(e, t),
        e.prototype.preselectTrack = function() {
            for (var t = {
                captions: 1,
                subtitles: 1
            }, e = this.player_.textTracks(), i = this.player_.cache_.selectedLanguage, n = void 0, r = void 0, a = void 0, o = 0; o < e.length; o++) {
                var s = e[o];
                i && i.enabled && i.language === s.language ? s.kind === i.kind ? a = s : a || (a = s) : i && !i.enabled ? (a = null,
                n = null,
                r = null) : s["default"] && ("descriptions" !== s.kind || n ? s.kind in t && !r && (r = s) : n = s)
            }
            a ? a.mode = "showing" : r ? r.mode = "showing" : n && (n.mode = "showing")
        }
        ,
        e.prototype.toggleDisplay = function() {
            this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks ? this.hide() : this.show()
        }
        ,
        e.prototype.createEl = function() {
            return t.prototype.createEl.call(this, "div", {
                className: "vjs-text-track-display"
            }, {
                "aria-live": "off",
                "aria-atomic": "true"
            })
        }
        ,
        e.prototype.clearDisplay = function() {
            "function" == typeof ue.WebVTT && ue.WebVTT.processCues(ue, [], this.el_)
        }
        ,
        e.prototype.updateDisplay = function() {
            var t = this.player_.textTracks();
            this.clearDisplay();
            for (var e = null, i = null, n = t.length; n--; ) {
                var r = t[n];
                "showing" === r.mode && ("descriptions" === r.kind ? e = r : i = r)
            }
            i ? ("off" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "off"),
            this.updateForTrack(i)) : e && ("assertive" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "assertive"),
            this.updateForTrack(e))
        }
        ,
        e.prototype.updateForTrack = function(t) {
            if ("function" == typeof ue.WebVTT && t.activeCues) {
                for (var e = this.player_.textTrackSettings.getValues(), i = [], n = 0; n < t.activeCues.length; n++)
                    i.push(t.activeCues[n]);
                ue.WebVTT.processCues(ue, i, this.el_);
                for (var r = i.length; r--; ) {
                    var a = i[r];
                    if (a) {
                        var o = a.displayState;
                        if (e.color && (o.firstChild.style.color = e.color),
                        e.textOpacity && Jt(o.firstChild, "color", Qt(e.color || "#fff", e.textOpacity)),
                        e.backgroundColor && (o.firstChild.style.backgroundColor = e.backgroundColor),
                        e.backgroundOpacity && Jt(o.firstChild, "backgroundColor", Qt(e.backgroundColor || "#000", e.backgroundOpacity)),
                        e.windowColor && (e.windowOpacity ? Jt(o, "backgroundColor", Qt(e.windowColor, e.windowOpacity)) : o.style.backgroundColor = e.windowColor),
                        e.edgeStyle && ("dropshadow" === e.edgeStyle ? o.firstChild.style.textShadow = "2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px #222" : "raised" === e.edgeStyle ? o.firstChild.style.textShadow = "1px 1px #222, 2px 2px #222, 3px 3px #222" : "depressed" === e.edgeStyle ? o.firstChild.style.textShadow = "1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px #222" : "uniform" === e.edgeStyle && (o.firstChild.style.textShadow = "0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px #222")),
                        e.fontPercent && 1 !== e.fontPercent) {
                            var s = ue.parseFloat(o.style.fontSize);
                            o.style.fontSize = s * e.fontPercent + "px",
                            o.style.height = "auto",
                            o.style.top = "auto",
                            o.style.bottom = "2px"
                        }
                        e.fontFamily && "default" !== e.fontFamily && ("small-caps" === e.fontFamily ? o.firstChild.style.fontVariant = "small-caps" : o.firstChild.style.fontFamily = Kn[e.fontFamily])
                    }
                }
            }
        }
        ,
        e
    }(wi);
    wi.registerComponent("TextTrackDisplay", zn);
    var Zn = function(t) {
        function e() {
            return Ue(this, e),
            Fe(this, t.apply(this, arguments))
        }
        return Ne(e, t),
        e.prototype.createEl = function() {
            return t.prototype.createEl.call(this, "div", {
                className: "vjs-loading-spinner",
                dir: "ltr"
            })
        }
        ,
        e
    }(wi);
    wi.registerComponent("LoadingSpinner", Zn);
    var Qn = function(t) {
        function e() {
            return Ue(this, e),
            Fe(this, t.apply(this, arguments))
        }
        return Ne(e, t),
        e.prototype.createEl = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            t = "button",
            e = n({
                innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
                className: this.buildCSSClass()
            }, e),
            i = n({
                type: "button",
                "aria-live": "polite"
            }, i);
            var r = wi.prototype.createEl.call(this, t, e, i);
            return this.createControlTextEl(r),
            r
        }
        ,
        e.prototype.addChild = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , i = this.constructor.name;
            return Ke.warn("Adding an actionable (user controllable) child to a Button (" + i + ") is not supported; use a ClickableComponent instead."),
            wi.prototype.addChild.call(this, t, e)
        }
        ,
        e.prototype.enable = function() {
            t.prototype.enable.call(this),
            this.el_.removeAttribute("disabled")
        }
        ,
        e.prototype.disable = function() {
            t.prototype.disable.call(this),
            this.el_.setAttribute("disabled", "disabled")
        }
        ,
        e.prototype.handleKeyPress = function(e) {
            32 !== e.which && 13 !== e.which && t.prototype.handleKeyPress.call(this, e)
        }
        ,
        e
    }(Xn);
    wi.registerComponent("Button", Qn);
    var Jn = function(t) {
        function e(i, n) {
            Ue(this, e);
            var r = Fe(this, t.call(this, i, n));
            return r.mouseused_ = !1,
            r.on("mousedown", r.handleMouseDown),
            r
        }
        return Ne(e, t),
        e.prototype.buildCSSClass = function() {
            return "vjs-big-play-button"
        }
        ,
        e.prototype.handleClick = function(t) {
            var e = this.player_.play();
            if (!(this.mouseused_ && t.clientX && t.clientY)) {
                var i = this.player_.getChild("controlBar")
                  , n = i && i.getChild("playToggle");
                if (!n)
                    return void this.player_.focus();
                var r = function() {
                    return n.focus()
                };
                ut(e) ? e.then(r, function() {}) : this.setTimeout(r, 1)
            }
        }
        ,
        e.prototype.handleKeyPress = function(e) {
            this.mouseused_ = !1,
            t.prototype.handleKeyPress.call(this, e)
        }
        ,
        e.prototype.handleMouseDown = function(t) {
            this.mouseused_ = !0
        }
        ,
        e
    }(Qn);
    Jn.prototype.controlText_ = "Play Video",
    wi.registerComponent("BigPlayButton", Jn);
    var $n = function(t) {
        function e(i, n) {
            Ue(this, e);
            var r = Fe(this, t.call(this, i, n));
            return r.controlText(n && n.controlText || r.localize("Close")),
            r
        }
        return Ne(e, t),
        e.prototype.buildCSSClass = function() {
            return "vjs-close-button " + t.prototype.buildCSSClass.call(this)
        }
        ,
        e.prototype.handleClick = function(t) {
            this.trigger({
                type: "close",
                bubbles: !1
            })
        }
        ,
        e
    }(Qn);
    wi.registerComponent("CloseButton", $n);
    var tr = function(t) {
        function e(i, n) {
            Ue(this, e);
            var r = Fe(this, t.call(this, i, n));
            return r.on(i, "play", r.handlePlay),
            r.on(i, "pause", r.handlePause),
            r.on(i, "ended", r.handleEnded),
            r
        }
        return Ne(e, t),
        e.prototype.buildCSSClass = function() {
            return "vjs-play-control " + t.prototype.buildCSSClass.call(this)
        }
        ,
        e.prototype.handleClick = function(t) {
            this.player_.paused() ? this.player_.play() : this.player_.pause()
        }
        ,
        e.prototype.handleSeeked = function(t) {
            this.removeClass("vjs-ended"),
            this.player_.paused() ? this.handlePause(t) : this.handlePlay(t)
        }
        ,
        e.prototype.handlePlay = function(t) {
            this.removeClass("vjs-ended"),
            this.removeClass("vjs-paused"),
            this.addClass("vjs-playing"),
            this.controlText("Pause")
        }
        ,
        e.prototype.handlePause = function(t) {
            this.removeClass("vjs-playing"),
            this.addClass("vjs-paused"),
            this.controlText("Play")
        }
        ,
        e.prototype.handleEnded = function(t) {
            this.removeClass("vjs-playing"),
            this.addClass("vjs-ended"),
            this.controlText("Replay"),
            this.one(this.player_, "seeked", this.handleSeeked)
        }
        ,
        e
    }(Qn);
    tr.prototype.controlText_ = "Play",
    wi.registerComponent("PlayToggle", tr);
    var er = function(t) {
        function e(i, n) {
            Ue(this, e);
            var r = Fe(this, t.call(this, i, n));
            return r.throttledUpdateContent = hi(di(r, r.updateContent), 25),
            r.on(i, "timeupdate", r.throttledUpdateContent),
            r
        }
        return Ne(e, t),
        e.prototype.createEl = function(e) {
            var i = this.buildCSSClass()
              , n = t.prototype.createEl.call(this, "div", {
                className: i + " vjs-time-control vjs-control"
            });
            return this.contentEl_ = g("div", {
                className: i + "-display"
            }, {
                "aria-live": "off"
            }, g("span", {
                className: "vjs-control-text",
                textContent: this.localize(this.controlText_)
            })),
            this.updateTextNode_(),
            n.appendChild(this.contentEl_),
            n
        }
        ,
        e.prototype.dispose = function() {
            this.contentEl_ = null,
            this.textNode_ = null,
            t.prototype.dispose.call(this)
        }
        ,
        e.prototype.updateTextNode_ = function() {
            if (this.contentEl_) {
                for (; this.contentEl_.firstChild; )
                    this.contentEl_.removeChild(this.contentEl_.firstChild);
                this.textNode_ = fe.createTextNode(this.formattedTime_ || "0:00"),
                this.contentEl_.appendChild(this.textNode_)
            }
        }
        ,
        e.prototype.formatTime_ = function(t) {
            return $t(t)
        }
        ,
        e.prototype.updateFormattedTime_ = function(t) {
            var e = this.formatTime_(t);
            e !== this.formattedTime_ && (this.formattedTime_ = e,
            this.requestAnimationFrame(this.updateTextNode_))
        }
        ,
        e.prototype.updateContent = function(t) {}
        ,
        e
    }(wi);
    er.prototype.controlText_ = "Time",
    wi.registerComponent("TimeDisplay", er);
    var ir = function(t) {
        function e(i, n) {
            Ue(this, e);
            var r = Fe(this, t.call(this, i, n));
            return r.on(i, "ended", r.handleEnded),
            r
        }
        return Ne(e, t),
        e.prototype.buildCSSClass = function() {
            return "vjs-current-time"
        }
        ,
        e.prototype.updateContent = function(t) {
            var e = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
            this.updateFormattedTime_(e)
        }
        ,
        e.prototype.handleEnded = function(t) {
            this.player_.duration() && this.updateFormattedTime_(this.player_.duration())
        }
        ,
        e
    }(er);
    ir.prototype.controlText_ = "Current Time",
    wi.registerComponent("CurrentTimeDisplay", ir);
    var nr = function(t) {
        function e(i, n) {
            Ue(this, e);
            var r = Fe(this, t.call(this, i, n));
            return r.on(i, "durationchange", r.updateContent),
            r.on(i, "loadedmetadata", r.throttledUpdateContent),
            r
        }
        return Ne(e, t),
        e.prototype.buildCSSClass = function() {
            return "vjs-duration"
        }
        ,
        e.prototype.updateContent = function(t) {
            var e = this.player_.duration();
            e && this.duration_ !== e && (this.duration_ = e,
            this.updateFormattedTime_(e))
        }
        ,
        e
    }(er);
    nr.prototype.controlText_ = "Duration Time",
    wi.registerComponent("DurationDisplay", nr);
    var rr = function(t) {
        function e() {
            return Ue(this, e),
            Fe(this, t.apply(this, arguments))
        }
        return Ne(e, t),
        e.prototype.createEl = function() {
            return t.prototype.createEl.call(this, "div", {
                className: "vjs-time-control vjs-time-divider",
                innerHTML: "<div><span>/</span></div>"
            })
        }
        ,
        e
    }(wi);
    wi.registerComponent("TimeDivider", rr);
    var ar = function(t) {
        function e(i, n) {
            Ue(this, e);
            var r = Fe(this, t.call(this, i, n));
            return r.on(i, "durationchange", r.throttledUpdateContent),
            r.on(i, "ended", r.handleEnded),
            r
        }
        return Ne(e, t),
        e.prototype.buildCSSClass = function() {
            return "vjs-remaining-time"
        }
        ,
        e.prototype.formatTime_ = function(e) {
            return "-" + t.prototype.formatTime_.call(this, e)
        }
        ,
        e.prototype.updateContent = function(t) {
            this.player_.duration() && (this.player_.remainingTimeDisplay ? this.updateFormattedTime_(this.player_.remainingTimeDisplay()) : this.updateFormattedTime_(this.player_.remainingTime()))
        }
        ,
        e.prototype.handleEnded = function(t) {
            this.player_.duration() && this.updateFormattedTime_(0)
        }
        ,
        e
    }(er);
    ar.prototype.controlText_ = "Remaining Time",
    wi.registerComponent("RemainingTimeDisplay", ar);
    var or = function(t) {
        function e(i, n) {
            Ue(this, e);
            var r = Fe(this, t.call(this, i, n));
            return r.updateShowing(),
            r.on(r.player(), "durationchange", r.updateShowing),
            r
        }
        return Ne(e, t),
        e.prototype.createEl = function() {
            var e = t.prototype.createEl.call(this, "div", {
                className: "vjs-live-control vjs-control"
            });
            return this.contentEl_ = g("div", {
                className: "vjs-live-display",
                innerHTML: '<span class="vjs-control-text">' + this.localize("Stream Type") + "</span>" + this.localize("LIVE")
            }, {
                "aria-live": "off"
            }),
            e.appendChild(this.contentEl_),
            e
        }
        ,
        e.prototype.dispose = function() {
            this.contentEl_ = null,
            t.prototype.dispose.call(this)
        }
        ,
        e.prototype.updateShowing = function(t) {
            this.player().duration() === 1 / 0 ? this.show() : this.hide()
        }
        ,
        e
    }(wi);
    wi.registerComponent("LiveDisplay", or);
    var sr = function(t) {
        function e(i, n) {
            Ue(this, e);
            var r = Fe(this, t.call(this, i, n));
            return r.bar = r.getChild(r.options_.barName),
            r.vertical(!!r.options_.vertical),
            r.enable(),
            r
        }
        return Ne(e, t),
        e.prototype.enabled = function() {
            return this.enabled_
        }
        ,
        e.prototype.enable = function() {
            this.enabled() || (this.on("mousedown", this.handleMouseDown),
            this.on("touchstart", this.handleMouseDown),
            this.on("focus", this.handleFocus),
            this.on("blur", this.handleBlur),
            this.on("click", this.handleClick),
            this.on(this.player_, "controlsvisible", this.update),
            this.playerEvent && this.on(this.player_, this.playerEvent, this.update),
            this.removeClass("disabled"),
            this.setAttribute("tabindex", 0),
            this.enabled_ = !0)
        }
        ,
        e.prototype.disable = function() {
            if (this.enabled()) {
                var t = this.bar.el_.ownerDocument;
                this.off("mousedown", this.handleMouseDown),
                this.off("touchstart", this.handleMouseDown),
                this.off("focus", this.handleFocus),
                this.off("blur", this.handleBlur),
                this.off("click", this.handleClick),
                this.off(this.player_, "controlsvisible", this.update),
                this.off(t, "mousemove", this.handleMouseMove),
                this.off(t, "mouseup", this.handleMouseUp),
                this.off(t, "touchmove", this.handleMouseMove),
                this.off(t, "touchend", this.handleMouseUp),
                this.removeAttribute("tabindex"),
                this.addClass("disabled"),
                this.playerEvent && this.off(this.player_, this.playerEvent, this.update),
                this.enabled_ = !1
            }
        }
        ,
        e.prototype.createEl = function(e) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return i.className = i.className + " vjs-slider",
            i = n({
                tabIndex: 0
            }, i),
            r = n({
                role: "slider",
                "aria-valuenow": 0,
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                tabIndex: 0
            }, r),
            t.prototype.createEl.call(this, e, i, r)
        }
        ,
        e.prototype.handleMouseDown = function(t) {
            var e = this.bar.el_.ownerDocument;
            t.preventDefault(),
            E(),
            this.addClass("vjs-sliding"),
            this.trigger("slideractive"),
            this.on(e, "mousemove", this.handleMouseMove),
            this.on(e, "mouseup", this.handleMouseUp),
            this.on(e, "touchmove", this.handleMouseMove),
            this.on(e, "touchend", this.handleMouseUp),
            this.handleMouseMove(t)
        }
        ,
        e.prototype.handleMouseMove = function(t) {}
        ,
        e.prototype.handleMouseUp = function() {
            var t = this.bar.el_.ownerDocument;
            A(),
            this.removeClass("vjs-sliding"),
            this.trigger("sliderinactive"),
            this.off(t, "mousemove", this.handleMouseMove),
            this.off(t, "mouseup", this.handleMouseUp),
            this.off(t, "touchmove", this.handleMouseMove),
            this.off(t, "touchend", this.handleMouseUp),
            this.update()
        }
        ,
        e.prototype.update = function() {
            if (this.el_) {
                var t = this.getPercent()
                  , e = this.bar;
                if (e) {
                    ("number" != typeof t || t !== t || t < 0 || t === 1 / 0) && (t = 0);
                    var i = (100 * t).toFixed(2) + "%"
                      , n = e.el().style;
                    return this.vertical() ? n.height = i : n.width = i,
                    t
                }
            }
        }
        ,
        e.prototype.calculateDistance = function(t) {
            var e = I(this.el_, t);
            return this.vertical() ? e.y : e.x
        }
        ,
        e.prototype.handleFocus = function() {
            this.on(this.bar.el_.ownerDocument, "keydown", this.handleKeyPress)
        }
        ,
        e.prototype.handleKeyPress = function(t) {
            37 === t.which || 40 === t.which ? (t.preventDefault(),
            this.stepBack()) : 38 !== t.which && 39 !== t.which || (t.preventDefault(),
            this.stepForward())
        }
        ,
        e.prototype.handleBlur = function() {
            this.off(this.bar.el_.ownerDocument, "keydown", this.handleKeyPress)
        }
        ,
        e.prototype.handleClick = function(t) {
            t.stopImmediatePropagation(),
            t.preventDefault()
        }
        ,
        e.prototype.vertical = function(t) {
            return void 0 === t ? this.vertical_ || !1 : (this.vertical_ = !!t,
            void (this.vertical_ ? this.addClass("vjs-slider-vertical") : this.addClass("vjs-slider-horizontal")))
        }
        ,
        e
    }(wi);
    wi.registerComponent("Slider", sr);
    var ur = function(t) {
        function e(i, n) {
            Ue(this, e);
            var r = Fe(this, t.call(this, i, n));
            return r.partEls_ = [],
            r.on(i, "progress", r.update),
            r
        }
        return Ne(e, t),
        e.prototype.createEl = function() {
            return t.prototype.createEl.call(this, "div", {
                className: "vjs-load-progress",
                innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Loaded") + "</span>: 0%</span>"
            })
        }
        ,
        e.prototype.dispose = function() {
            this.partEls_ = null,
            t.prototype.dispose.call(this)
        }
        ,
        e.prototype.update = function(t) {
            var e = this.player_.buffered()
              , i = this.player_.duration()
              , n = this.player_.bufferedEnd()
              , r = this.partEls_
              , a = function(t, e) {
                var i = t / e || 0;
                return 100 * (i >= 1 ? 1 : i) + "%"
            };
            this.el_.style.width = a(n, i);
            for (var o = 0; o < e.length; o++) {
                var s = e.start(o)
                  , u = e.end(o)
                  , l = r[o];
                l || (l = this.el_.appendChild(g()),
                r[o] = l),
                l.style.left = a(s, n),
                l.style.width = a(u - s, n)
            }
            for (var c = r.length; c > e.length; c--)
                this.el_.removeChild(r[c - 1]);
            r.length = e.length
        }
        ,
        e
    }(wi);
    wi.registerComponent("LoadProgressBar", ur);
    var lr = function(t) {
        function e() {
            return Ue(this, e),
            Fe(this, t.apply(this, arguments))
        }
        return Ne(e, t),
        e.prototype.createEl = function() {
            return t.prototype.createEl.call(this, "div", {
                className: "vjs-time-tooltip"
            })
        }
        ,
        e.prototype.update = function(t, e, i) {
            var n = O(this.el_)
              , r = O(this.player_.el())
              , a = t.width * e;
            if (r && n) {
                var o = t.left - r.left + a
                  , s = t.width - a + (r.right - t.right)
                  , u = n.width / 2;
                o < u ? u += u - o : s < u && (u = s),
                u < 0 ? u = 0 : u > n.width && (u = n.width),
                this.el_.style.right = "-" + u + "px",
                m(this.el_, i)
            }
        }
        ,
        e
    }(wi);
    wi.registerComponent("TimeTooltip", lr);
    var cr = function(t) {
        function e() {
            return Ue(this, e),
            Fe(this, t.apply(this, arguments))
        }
        return Ne(e, t),
        e.prototype.createEl = function() {
            return t.prototype.createEl.call(this, "div", {
                className: "vjs-play-progress vjs-slider-bar",
                innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Progress") + "</span>: 0%</span>"
            })
        }
        ,
        e.prototype.update = function(t, e) {
            var i = this;
            this.rafId_ && this.cancelAnimationFrame(this.rafId_),
            this.rafId_ = this.requestAnimationFrame(function() {
                var n = i.player_.scrubbing() ? i.player_.getCache().currentTime : i.player_.currentTime()
                  , r = $t(n, i.player_.duration())
                  , a = i.getChild("timeTooltip");
                a && a.update(t, e, r)
            })
        }
        ,
        e
    }(wi);
    cr.prototype.options_ = {
        children: []
    },
    Ie && !(Ie > 8) || be || Te || cr.prototype.options_.children.push("timeTooltip"),
    wi.registerComponent("PlayProgressBar", cr);
    var dr = function(t) {
        function e(i, n) {
            Ue(this, e);
            var r = Fe(this, t.call(this, i, n));
            return r.update = hi(di(r, r.update), 25),
            r
        }
        return Ne(e, t),
        e.prototype.createEl = function() {
            return t.prototype.createEl.call(this, "div", {
                className: "vjs-mouse-display"
            })
        }
        ,
        e.prototype.update = function(t, e) {
            var i = this;
            this.rafId_ && this.cancelAnimationFrame(this.rafId_),
            this.rafId_ = this.requestAnimationFrame(function() {
                var n = i.player_.duration()
                  , r = $t(e * n, n);
                i.el_.style.left = t.width * e + "px",
                i.getChild("timeTooltip").update(t, e, r)
            })
        }
        ,
        e
    }(wi);
    dr.prototype.options_ = {
        children: ["timeTooltip"]
    },
    wi.registerComponent("MouseTimeDisplay", dr);
    var hr = 30
      , fr = function(t) {
        function e(i, n) {
            Ue(this, e);
            var r = Fe(this, t.call(this, i, n));
            return r.update = hi(di(r, r.update), hr),
            r.on(i, "timeupdate", r.update),
            r.on(i, "ended", r.handleEnded),
            r.updateInterval = null,
            r.on(i, ["playing"], function() {
                r.clearInterval(r.updateInterval),
                r.updateInterval = r.setInterval(function() {
                    r.requestAnimationFrame(function() {
                        r.update()
                    })
                }, hr)
            }),
            r.on(i, ["ended", "pause", "waiting"], function() {
                r.clearInterval(r.updateInterval)
            }),
            r.on(i, ["timeupdate", "ended"], r.update),
            r
        }
        return Ne(e, t),
        e.prototype.createEl = function() {
            return t.prototype.createEl.call(this, "div", {
                className: "vjs-progress-holder"
            }, {
                "aria-label": this.localize("Progress Bar")
            })
        }
        ,
        e.prototype.update_ = function(t, e) {
            var i = this.player_.duration();
            this.el_.setAttribute("aria-valuenow", (100 * e).toFixed(2)),
            this.el_.setAttribute("aria-valuetext", this.localize("progress bar timing: currentTime={1} duration={2}", [$t(t, i), $t(i, i)], "{1} of {2}")),
            this.bar.update(O(this.el_), e)
        }
        ,
        e.prototype.update = function(e) {
            var i = t.prototype.update.call(this);
            return this.update_(this.getCurrentTime_(), i),
            i
        }
        ,
        e.prototype.getCurrentTime_ = function() {
            return this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime()
        }
        ,
        e.prototype.handleEnded = function(t) {
            this.update_(this.player_.duration(), 1)
        }
        ,
        e.prototype.getPercent = function() {
            var t = this.getCurrentTime_() / this.player_.duration();
            return t >= 1 ? 1 : t
        }
        ,
        e.prototype.handleMouseDown = function(e) {
            B(e) && (this.player_.scrubbing(!0),
            this.videoWasPlaying = !this.player_.paused(),
            this.player_.pause(),
            t.prototype.handleMouseDown.call(this, e))
        }
        ,
        e.prototype.handleMouseMove = function(t) {
            if (B(t)) {
                var e = this.calculateDistance(t) * this.player_.duration();
                e === this.player_.duration() && (e -= .1),
                this.player_.currentTime(e)
            }
        }
        ,
        e.prototype.enable = function() {
            t.prototype.enable.call(this);
            var e = this.getChild("mouseTimeDisplay");
            e && e.show()
        }
        ,
        e.prototype.disable = function() {
            t.prototype.disable.call(this);
            var e = this.getChild("mouseTimeDisplay");
            e && e.hide()
        }
        ,
        e.prototype.handleMouseUp = function(e) {
            t.prototype.handleMouseUp.call(this, e),
            this.player_.scrubbing(!1),
            this.player_.trigger({
                type: "timeupdate",
                target: this,
                manuallyTriggered: !0
            }),
            this.videoWasPlaying && this.player_.play()
        }
        ,
        e.prototype.stepForward = function() {
            this.player_.currentTime(this.player_.currentTime() + 5)
        }
        ,
        e.prototype.stepBack = function() {
            this.player_.currentTime(this.player_.currentTime() - 5)
        }
        ,
        e.prototype.handleAction = function(t) {
            this.player_.paused() ? this.player_.play() : this.player_.pause()
        }
        ,
        e.prototype.handleKeyPress = function(e) {
            32 === e.which || 13 === e.which ? (e.preventDefault(),
            this.handleAction(e)) : t.prototype.handleKeyPress && t.prototype.handleKeyPress.call(this, e)
        }
        ,
        e
    }(sr);
    fr.prototype.options_ = {
        children: ["loadProgressBar", "playProgressBar"],
        barName: "playProgressBar"
    },
    Ie && !(Ie > 8) || be || Te || fr.prototype.options_.children.splice(1, 0, "mouseTimeDisplay"),
    fr.prototype.playerEvent = "timeupdate",
    wi.registerComponent("SeekBar", fr);
    var pr = function(t) {
        function e(i, n) {
            Ue(this, e);
            var r = Fe(this, t.call(this, i, n));
            return r.handleMouseMove = hi(di(r, r.handleMouseMove), 25),
            r.throttledHandleMouseSeek = hi(di(r, r.handleMouseSeek), 25),
            r.enable(),
            r
        }
        return Ne(e, t),
        e.prototype.createEl = function() {
            return t.prototype.createEl.call(this, "div", {
                className: "vjs-progress-control vjs-control"
            })
        }
        ,
        e.prototype.handleMouseMove = function(t) {
            var e = this.getChild("seekBar")
              , i = e.getChild("mouseTimeDisplay")
              , n = e.el()
              , r = O(n)
              , a = I(n, t).x;
            a > 1 ? a = 1 : a < 0 && (a = 0),
            i && i.update(r, a)
        }
        ,
        e.prototype.handleMouseSeek = function(t) {
            this.getChild("seekBar").handleMouseMove(t)
        }
        ,
        e.prototype.enabled = function() {
            return this.enabled_
        }
        ,
        e.prototype.disable = function() {
            this.children().forEach(function(t) {
                return t.disable && t.disable()
            }),
            this.enabled() && (this.off(["mousedown", "touchstart"], this.handleMouseDown),
            this.off(this.el_, "mousemove", this.handleMouseMove),
            this.handleMouseUp(),
            this.addClass("disabled"),
            this.enabled_ = !1)
        }
        ,
        e.prototype.enable = function() {
            this.children().forEach(function(t) {
                return t.enable && t.enable()
            }),
            this.enabled() || (this.on(["mousedown", "touchstart"], this.handleMouseDown),
            this.on(this.el_, "mousemove", this.handleMouseMove),
            this.removeClass("disabled"),
            this.enabled_ = !0)
        }
        ,
        e.prototype.handleMouseDown = function(t) {
            var e = this.el_.ownerDocument;
            this.on(e, "mousemove", this.throttledHandleMouseSeek),
            this.on(e, "touchmove", this.throttledHandleMouseSeek),
            this.on(e, "mouseup", this.handleMouseUp),
            this.on(e, "touchend", this.handleMouseUp)
        }
        ,
        e.prototype.handleMouseUp = function(t) {
            var e = this.el_.ownerDocument;
            this.off(e, "mousemove", this.throttledHandleMouseSeek),
            this.off(e, "touchmove", this.throttledHandleMouseSeek),
            this.off(e, "mouseup", this.handleMouseUp),
            this.off(e, "touchend", this.handleMouseUp)
        }
        ,
        e
    }(wi);
    pr.prototype.options_ = {
        children: ["seekBar"]
    },
    wi.registerComponent("ProgressControl", pr);
    var gr = function(t) {
        function e(i, n) {
            Ue(this, e);
            var r = Fe(this, t.call(this, i, n));
            return r.on(i, "fullscreenchange", r.handleFullscreenChange),
            r
        }
        return Ne(e, t),
        e.prototype.buildCSSClass = function() {
            return "vjs-fullscreen-control " + t.prototype.buildCSSClass.call(this)
        }
        ,
        e.prototype.handleFullscreenChange = function(t) {
            this.player_.isFullscreen() ? this.controlText("Non-Fullscreen") : this.controlText("Fullscreen")
        }
        ,
        e.prototype.handleClick = function(t) {
            this.player_.isFullscreen() ? this.player_.exitFullscreen() : this.player_.requestFullscreen()
        }
        ,
        e
    }(Qn);
    gr.prototype.controlText_ = "Fullscreen",
    wi.registerComponent("FullscreenToggle", gr);
    var mr = function(t, e) {
        e.tech_ && !e.tech_.featuresVolumeControl && t.addClass("vjs-hidden"),
        t.on(e, "loadstart", function() {
            e.tech_.featuresVolumeControl ? t.removeClass("vjs-hidden") : t.addClass("vjs-hidden")
        })
    }
      , yr = function(t) {
        function e() {
            return Ue(this, e),
            Fe(this, t.apply(this, arguments))
        }
        return Ne(e, t),
        e.prototype.createEl = function() {
            return t.prototype.createEl.call(this, "div", {
                className: "vjs-volume-level",
                innerHTML: '<span class="vjs-control-text"></span>'
            })
        }
        ,
        e
    }(wi);
    wi.registerComponent("VolumeLevel", yr);
    var vr = function(t) {
        function e(i, n) {
            Ue(this, e);
            var r = Fe(this, t.call(this, i, n));
            return r.on("slideractive", r.updateLastVolume_),
            r.on(i, "volumechange", r.updateARIAAttributes),
            i.ready(function() {
                return r.updateARIAAttributes()
            }),
            r
        }
        return Ne(e, t),
        e.prototype.createEl = function() {
            return t.prototype.createEl.call(this, "div", {
                className: "vjs-volume-bar vjs-slider-bar"
            }, {
                "aria-label": this.localize("Volume Level"),
                "aria-live": "polite"
            })
        }
        ,
        e.prototype.handleMouseDown = function(e) {
            B(e) && t.prototype.handleMouseDown.call(this, e)
        }
        ,
        e.prototype.handleMouseMove = function(t) {
            B(t) && (this.checkMuted(),
            this.player_.volume(this.calculateDistance(t)))
        }
        ,
        e.prototype.checkMuted = function() {
            this.player_.muted() && this.player_.muted(!1)
        }
        ,
        e.prototype.getPercent = function() {
            return this.player_.muted() ? 0 : this.player_.volume()
        }
        ,
        e.prototype.stepForward = function() {
            this.checkMuted(),
            this.player_.volume(this.player_.volume() + .1)
        }
        ,
        e.prototype.stepBack = function() {
            this.checkMuted(),
            this.player_.volume(this.player_.volume() - .1)
        }
        ,
        e.prototype.updateARIAAttributes = function(t) {
            var e = this.player_.muted() ? 0 : this.volumeAsPercentage_();
            this.el_.setAttribute("aria-valuenow", e),
            this.el_.setAttribute("aria-valuetext", e + "%")
        }
        ,
        e.prototype.volumeAsPercentage_ = function() {
            return Math.round(100 * this.player_.volume())
        }
        ,
        e.prototype.updateLastVolume_ = function() {
            var t = this
              , e = this.player_.volume();
            this.one("sliderinactive", function() {
                0 === t.player_.volume() && t.player_.lastVolume_(e)
            })
        }
        ,
        e
    }(sr);
    vr.prototype.options_ = {
        children: ["volumeLevel"],
        barName: "volumeLevel"
    },
    vr.prototype.playerEvent = "volumechange",
    wi.registerComponent("VolumeBar", vr);
    var _r = function(t) {
        function e(i) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            Ue(this, e),
            n.vertical = n.vertical || !1,
            (void 0 === n.volumeBar || a(n.volumeBar)) && (n.volumeBar = n.volumeBar || {},
            n.volumeBar.vertical = n.vertical);
            var r = Fe(this, t.call(this, i, n));
            return mr(r, i),
            r.throttledHandleMouseMove = hi(di(r, r.handleMouseMove), 25),
            r.on("mousedown", r.handleMouseDown),
            r.on("touchstart", r.handleMouseDown),
            r.on(r.volumeBar, ["focus", "slideractive"], function() {
                r.volumeBar.addClass("vjs-slider-active"),
                r.addClass("vjs-slider-active"),
                r.trigger("slideractive")
            }),
            r.on(r.volumeBar, ["blur", "sliderinactive"], function() {
                r.volumeBar.removeClass("vjs-slider-active"),
                r.removeClass("vjs-slider-active"),
                r.trigger("sliderinactive")
            }),
            r
        }
        return Ne(e, t),
        e.prototype.createEl = function() {
            var e = "vjs-volume-horizontal";
            return this.options_.vertical && (e = "vjs-volume-vertical"),
            t.prototype.createEl.call(this, "div", {
                className: "vjs-volume-control vjs-control " + e
            })
        }
        ,
        e.prototype.handleMouseDown = function(t) {
            var e = this.el_.ownerDocument;
            this.on(e, "mousemove", this.throttledHandleMouseMove),
            this.on(e, "touchmove", this.throttledHandleMouseMove),
            this.on(e, "mouseup", this.handleMouseUp),
            this.on(e, "touchend", this.handleMouseUp)
        }
        ,
        e.prototype.handleMouseUp = function(t) {
            var e = this.el_.ownerDocument;
            this.off(e, "mousemove", this.throttledHandleMouseMove),
            this.off(e, "touchmove", this.throttledHandleMouseMove),
            this.off(e, "mouseup", this.handleMouseUp),
            this.off(e, "touchend", this.handleMouseUp)
        }
        ,
        e.prototype.handleMouseMove = function(t) {
            this.volumeBar.handleMouseMove(t)
        }
        ,
        e
    }(wi);
    _r.prototype.options_ = {
        children: ["volumeBar"]
    },
    wi.registerComponent("VolumeControl", _r);
    var br = function(t) {
        function e(i, n) {
            Ue(this, e);
            var r = Fe(this, t.call(this, i, n));
            return mr(r, i),
            r.on(i, ["loadstart", "volumechange"], r.update),
            r
        }
        return Ne(e, t),
        e.prototype.buildCSSClass = function() {
            return "vjs-mute-control " + t.prototype.buildCSSClass.call(this)
        }
        ,
        e.prototype.handleClick = function(t) {
            var e = this.player_.volume()
              , i = this.player_.lastVolume_();
            if (0 === e) {
                var n = i < .1 ? .1 : i;
                this.player_.volume(n),
                this.player_.muted(!1)
            } else
                this.player_.muted(!this.player_.muted())
        }
        ,
        e.prototype.update = function(t) {
            this.updateIcon_(),
            this.updateControlText_()
        }
        ,
        e.prototype.updateIcon_ = function() {
            var t = this.player_.volume()
              , e = 3;
            0 === t || this.player_.muted() ? e = 0 : t < .33 ? e = 1 : t < .67 && (e = 2);
            for (var i = 0; i < 4; i++)
                b(this.el_, "vjs-vol-" + i);
            _(this.el_, "vjs-vol-" + e)
        }
        ,
        e.prototype.updateControlText_ = function() {
            var t = this.player_.muted() || 0 === this.player_.volume()
              , e = t ? "Unmute" : "Mute";
            this.controlText() !== e && this.controlText(e)
        }
        ,
        e
    }(Qn);
    br.prototype.controlText_ = "Mute",
    wi.registerComponent("MuteToggle", br);
    var xr = function(t) {
        function e(i) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            Ue(this, e),
            void 0 !== n.inline ? n.inline = n.inline : n.inline = !0,
            (void 0 === n.volumeControl || a(n.volumeControl)) && (n.volumeControl = n.volumeControl || {},
            n.volumeControl.vertical = !n.inline);
            var r = Fe(this, t.call(this, i, n));
            return mr(r, i),
            r.on(r.volumeControl, ["slideractive"], r.sliderActive_),
            r.on(r.muteToggle, "focus", r.sliderActive_),
            r.on(r.volumeControl, ["sliderinactive"], r.sliderInactive_),
            r.on(r.muteToggle, "blur", r.sliderInactive_),
            r
        }
        return Ne(e, t),
        e.prototype.sliderActive_ = function() {
            this.addClass("vjs-slider-active")
        }
        ,
        e.prototype.sliderInactive_ = function() {
            this.removeClass("vjs-slider-active")
        }
        ,
        e.prototype.createEl = function() {
            var e = "vjs-volume-panel-horizontal";
            return this.options_.inline || (e = "vjs-volume-panel-vertical"),
            t.prototype.createEl.call(this, "div", {
                className: "vjs-volume-panel vjs-control " + e
            })
        }
        ,
        e
    }(wi);
    xr.prototype.options_ = {
        children: ["muteToggle", "volumeControl"]
    },
    wi.registerComponent("VolumePanel", xr);
    var Tr = function(t) {
        function e(i, n) {
            Ue(this, e);
            var r = Fe(this, t.call(this, i, n));
            return n && (r.menuButton_ = n.menuButton),
            r.focusedChild_ = -1,
            r.on("keydown", r.handleKeyPress),
            r
        }
        return Ne(e, t),
        e.prototype.addItem = function(t) {
            this.addChild(t),
            t.on("click", di(this, function(e) {
                this.menuButton_ && (this.menuButton_.unpressButton(),
                "CaptionSettingsMenuItem" !== t.name() && this.menuButton_.focus())
            }))
        }
        ,
        e.prototype.createEl = function() {
            var e = this.options_.contentElType || "ul";
            this.contentEl_ = g(e, {
                className: "vjs-menu-content"
            }),
            this.contentEl_.setAttribute("role", "menu");
            var i = t.prototype.createEl.call(this, "div", {
                append: this.contentEl_,
                className: "vjs-menu"
            });
            return i.appendChild(this.contentEl_),
            q(i, "click", function(t) {
                t.preventDefault(),
                t.stopImmediatePropagation()
            }),
            i
        }
        ,
        e.prototype.dispose = function() {
            this.contentEl_ = null,
            t.prototype.dispose.call(this)
        }
        ,
        e.prototype.handleKeyPress = function(t) {
            37 === t.which || 40 === t.which ? (t.preventDefault(),
            this.stepForward()) : 38 !== t.which && 39 !== t.which || (t.preventDefault(),
            this.stepBack())
        }
        ,
        e.prototype.stepForward = function() {
            var t = 0;
            void 0 !== this.focusedChild_ && (t = this.focusedChild_ + 1),
            this.focus(t)
        }
        ,
        e.prototype.stepBack = function() {
            var t = 0;
            void 0 !== this.focusedChild_ && (t = this.focusedChild_ - 1),
            this.focus(t)
        }
        ,
        e.prototype.focus = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
              , e = this.children().slice();
            e.length && e[0].className && /vjs-menu-title/.test(e[0].className) && e.shift(),
            e.length > 0 && (t < 0 ? t = 0 : t >= e.length && (t = e.length - 1),
            this.focusedChild_ = t,
            e[t].el_.focus())
        }
        ,
        e
    }(wi);
    wi.registerComponent("Menu", Tr);
    var wr = function(t) {
        function e(i) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            Ue(this, e);
            var r = Fe(this, t.call(this, i, n));
            r.menuButton_ = new Qn(i,n),
            r.menuButton_.controlText(r.controlText_),
            r.menuButton_.el_.setAttribute("aria-haspopup", "true");
            var a = Qn.prototype.buildCSSClass();
            return r.menuButton_.el_.className = r.buildCSSClass() + " " + a,
            r.menuButton_.removeClass("vjs-control"),
            r.addChild(r.menuButton_),
            r.update(),
            r.enabled_ = !0,
            r.on(r.menuButton_, "tap", r.handleClick),
            r.on(r.menuButton_, "click", r.handleClick),
            r.on(r.menuButton_, "focus", r.handleFocus),
            r.on(r.menuButton_, "blur", r.handleBlur),
            r.on("keydown", r.handleSubmenuKeyPress),
            r
        }
        return Ne(e, t),
        e.prototype.update = function() {
            var t = this.createMenu();
            this.menu && (this.menu.dispose(),
            this.removeChild(this.menu)),
            this.menu = t,
            this.addChild(t),
            this.buttonPressed_ = !1,
            this.menuButton_.el_.setAttribute("aria-expanded", "false"),
            this.items && this.items.length <= this.hideThreshold_ ? this.hide() : this.show()
        }
        ,
        e.prototype.createMenu = function() {
            var t = new Tr(this.player_,{
                menuButton: this
            });
            if (this.hideThreshold_ = 0,
            this.options_.title) {
                var e = g("li", {
                    className: "vjs-menu-title",
                    innerHTML: J(this.options_.title),
                    tabIndex: -1
                });
                this.hideThreshold_ += 1,
                t.children_.unshift(e),
                y(e, t.contentEl())
            }
            if (this.items = this.createItems(),
            this.items)
                for (var i = 0; i < this.items.length; i++)
                    t.addItem(this.items[i]);
            return t
        }
        ,
        e.prototype.createItems = function() {}
        ,
        e.prototype.createEl = function() {
            return t.prototype.createEl.call(this, "div", {
                className: this.buildWrapperCSSClass()
            }, {})
        }
        ,
        e.prototype.buildWrapperCSSClass = function() {
            var e = "vjs-menu-button";
            return e += !0 === this.options_.inline ? "-inline" : "-popup",
            "vjs-menu-button " + e + " " + Qn.prototype.buildCSSClass() + " " + t.prototype.buildCSSClass.call(this)
        }
        ,
        e.prototype.buildCSSClass = function() {
            var e = "vjs-menu-button";
            return e += !0 === this.options_.inline ? "-inline" : "-popup",
            "vjs-menu-button " + e + " " + t.prototype.buildCSSClass.call(this)
        }
        ,
        e.prototype.controlText = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.menuButton_.el();
            return this.menuButton_.controlText(t, e)
        }
        ,
        e.prototype.handleClick = function(t) {
            this.one(this.menu.contentEl(), "mouseleave", di(this, function(t) {
                this.unpressButton(),
                this.el_.blur()
            })),
            this.buttonPressed_ ? this.unpressButton() : this.pressButton()
        }
        ,
        e.prototype.focus = function() {
            this.menuButton_.focus()
        }
        ,
        e.prototype.blur = function() {
            this.menuButton_.blur()
        }
        ,
        e.prototype.handleFocus = function() {
            q(fe, "keydown", di(this, this.handleKeyPress))
        }
        ,
        e.prototype.handleBlur = function() {
            X(fe, "keydown", di(this, this.handleKeyPress))
        }
        ,
        e.prototype.handleKeyPress = function(t) {
            27 === t.which || 9 === t.which ? (this.buttonPressed_ && this.unpressButton(),
            9 !== t.which && (t.preventDefault(),
            this.menuButton_.el_.focus())) : 38 !== t.which && 40 !== t.which || this.buttonPressed_ || (this.pressButton(),
            t.preventDefault())
        }
        ,
        e.prototype.handleSubmenuKeyPress = function(t) {
            27 !== t.which && 9 !== t.which || (this.buttonPressed_ && this.unpressButton(),
            9 !== t.which && (t.preventDefault(),
            this.menuButton_.el_.focus()))
        }
        ,
        e.prototype.pressButton = function() {
            this.enabled_ && (this.buttonPressed_ = !0,
            this.menu.lockShowing(),
            this.menuButton_.el_.setAttribute("aria-expanded", "true"),
            be || f() || this.menu.focus())
        }
        ,
        e.prototype.unpressButton = function() {
            this.enabled_ && (this.buttonPressed_ = !1,
            this.menu.unlockShowing(),
            this.menuButton_.el_.setAttribute("aria-expanded", "false"))
        }
        ,
        e.prototype.disable = function() {
            this.unpressButton(),
            this.enabled_ = !1,
            this.addClass("vjs-disabled"),
            this.menuButton_.disable()
        }
        ,
        e.prototype.enable = function() {
            this.enabled_ = !0,
            this.removeClass("vjs-disabled"),
            this.menuButton_.enable()
        }
        ,
        e
    }(wi);
    wi.registerComponent("MenuButton", wr);
    var Sr = function(t) {
        function e(i, n) {
            Ue(this, e);
            var r = n.tracks
              , a = Fe(this, t.call(this, i, n));
            if (a.items.length <= 1 && a.hide(),
            !r)
                return Fe(a);
            var o = di(a, a.update);
            return r.addEventListener("removetrack", o),
            r.addEventListener("addtrack", o),
            a.player_.on("ready", o),
            a.player_.on("dispose", function() {
                r.removeEventListener("removetrack", o),
                r.removeEventListener("addtrack", o)
            }),
            a
        }
        return Ne(e, t),
        e
    }(wr);
    wi.registerComponent("TrackButton", Sr);
    var kr = function(t) {
        function e(i, n) {
            Ue(this, e);
            var r = Fe(this, t.call(this, i, n));
            return r.selectable = n.selectable,
            r.selected(n.selected),
            r.selectable ? r.el_.setAttribute("role", "menuitemcheckbox") : r.el_.setAttribute("role", "menuitem"),
            r
        }
        return Ne(e, t),
        e.prototype.createEl = function(e, i, r) {
            return this.nonIconControl = !0,
            t.prototype.createEl.call(this, "li", n({
                className: "vjs-menu-item",
                innerHTML: '<span class="vjs-menu-item-text">' + this.localize(this.options_.label) + "</span>",
                tabIndex: -1
            }, i), r)
        }
        ,
        e.prototype.handleClick = function(t) {
            this.selected(!0)
        }
        ,
        e.prototype.selected = function(t) {
            this.selectable && (t ? (this.addClass("vjs-selected"),
            this.el_.setAttribute("aria-checked", "true"),
            this.controlText(", selected")) : (this.removeClass("vjs-selected"),
            this.el_.setAttribute("aria-checked", "false"),
            this.controlText("")))
        }
        ,
        e
    }(Xn);
    wi.registerComponent("MenuItem", kr);
    var Cr = function(t) {
        function e(i, n) {
            Ue(this, e);
            var r = n.track
              , a = i.textTracks();
            n.label = r.label || r.language || "Unknown",
            n.selected = "showing" === r.mode;
            var o = Fe(this, t.call(this, i, n));
            o.track = r;
            var s = function() {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                o.handleTracksChange.apply(o, e)
            }
              , u = function() {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                o.handleSelectedLanguageChange.apply(o, e)
            };
            if (i.on(["loadstart", "texttrackchange"], s),
            a.addEventListener("change", s),
            a.addEventListener("selectedlanguagechange", u),
            o.on("dispose", function() {
                i.off(["loadstart", "texttrackchange"], s),
                a.removeEventListener("change", s),
                a.removeEventListener("selectedlanguagechange", u)
            }),
            void 0 === a.onchange) {
                var l = void 0;
                o.on(["tap", "click"], function() {
                    if ("object" !== Be(ue.Event))
                        try {
                            l = new ue.Event("change")
                        } catch (t) {}
                    l || (l = fe.createEvent("Event"),
                    l.initEvent("change", !0, !0)),
                    a.dispatchEvent(l)
                })
            }
            return o.handleTracksChange(),
            o
        }
        return Ne(e, t),
        e.prototype.handleClick = function(e) {
            var i = this.track.kind
              , n = this.track.kinds
              , r = this.player_.textTracks();
            if (n || (n = [i]),
            t.prototype.handleClick.call(this, e),
            r)
                for (var a = 0; a < r.length; a++) {
                    var o = r[a];
                    o === this.track && n.indexOf(o.kind) > -1 ? "showing" !== o.mode && (o.mode = "showing") : "disabled" !== o.mode && (o.mode = "disabled")
                }
        }
        ,
        e.prototype.handleTracksChange = function(t) {
            this.selected("showing" === this.track.mode)
        }
        ,
        e.prototype.handleSelectedLanguageChange = function(t) {
            if ("showing" === this.track.mode) {
                var e = this.player_.cache_.selectedLanguage;
                if (e && e.enabled && e.language === this.track.language && e.kind !== this.track.kind)
                    return;
                this.player_.cache_.selectedLanguage = {
                    enabled: !0,
                    language: this.track.language,
                    kind: this.track.kind
                }
            }
        }
        ,
        e.prototype.dispose = function() {
            this.track = null,
            t.prototype.dispose.call(this)
        }
        ,
        e
    }(kr);
    wi.registerComponent("TextTrackMenuItem", Cr);
    var Er = function(t) {
        function e(i, n) {
            return Ue(this, e),
            n.track = {
                player: i,
                kind: n.kind,
                kinds: n.kinds,
                "default": !1,
                mode: "disabled"
            },
            n.kinds || (n.kinds = [n.kind]),
            n.label ? n.track.label = n.label : n.track.label = n.kinds.join(" and ") + " off",
            n.selectable = !0,
            Fe(this, t.call(this, i, n))
        }
        return Ne(e, t),
        e.prototype.handleTracksChange = function(t) {
            for (var e = this.player().textTracks(), i = !0, n = 0, r = e.length; n < r; n++) {
                var a = e[n];
                if (this.options_.kinds.indexOf(a.kind) > -1 && "showing" === a.mode) {
                    i = !1;
                    break
                }
            }
            this.selected(i)
        }
        ,
        e.prototype.handleSelectedLanguageChange = function(t) {
            for (var e = this.player().textTracks(), i = !0, n = 0, r = e.length; n < r; n++) {
                var a = e[n];
                if (["captions", "descriptions", "subtitles"].indexOf(a.kind) > -1 && "showing" === a.mode) {
                    i = !1;
                    break
                }
            }
            i && (this.player_.cache_.selectedLanguage = {
                enabled: !1
            })
        }
        ,
        e
    }(Cr);
    wi.registerComponent("OffTextTrackMenuItem", Er);
    var Ar = function(t) {
        function e(i) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return Ue(this, e),
            n.tracks = i.textTracks(),
            Fe(this, t.call(this, i, n))
        }
        return Ne(e, t),
        e.prototype.createItems = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
              , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Cr
              , i = void 0;
            this.label_ && (i = this.label_ + " off"),
            t.push(new Er(this.player_,{
                kinds: this.kinds_,
                kind: this.kind_,
                label: i
            })),
            this.hideThreshold_ += 1;
            var n = this.player_.textTracks();
            Array.isArray(this.kinds_) || (this.kinds_ = [this.kind_]);
            for (var r = 0; r < n.length; r++) {
                var a = n[r];
                if (this.kinds_.indexOf(a.kind) > -1) {
                    var o = new e(this.player_,{
                        track: a,
                        selectable: !0
                    });
                    o.addClass("vjs-" + a.kind + "-menu-item"),
                    t.push(o)
                }
            }
            return t
        }
        ,
        e
    }(Sr);
    wi.registerComponent("TextTrackButton", Ar);
    var Or = function(t) {
        function e(i, n) {
            Ue(this, e);
            var r = n.track
              , a = n.cue
              , o = i.currentTime();
            n.selectable = !0,
            n.label = a.text,
            n.selected = a.startTime <= o && o < a.endTime;
            var s = Fe(this, t.call(this, i, n));
            return s.track = r,
            s.cue = a,
            r.addEventListener("cuechange", di(s, s.update)),
            s
        }
        return Ne(e, t),
        e.prototype.handleClick = function(e) {
            t.prototype.handleClick.call(this),
            this.player_.currentTime(this.cue.startTime),
            this.update(this.cue.startTime)
        }
        ,
        e.prototype.update = function(t) {
            var e = this.cue
              , i = this.player_.currentTime();
            this.selected(e.startTime <= i && i < e.endTime)
        }
        ,
        e
    }(kr);
    wi.registerComponent("ChaptersTrackMenuItem", Or);
    var Pr = function(t) {
        function e(i, n, r) {
            return Ue(this, e),
            Fe(this, t.call(this, i, n, r))
        }
        return Ne(e, t),
        e.prototype.buildCSSClass = function() {
            return "vjs-chapters-button " + t.prototype.buildCSSClass.call(this)
        }
        ,
        e.prototype.buildWrapperCSSClass = function() {
            return "vjs-chapters-button " + t.prototype.buildWrapperCSSClass.call(this)
        }
        ,
        e.prototype.update = function(e) {
            this.track_ && (!e || "addtrack" !== e.type && "removetrack" !== e.type) || this.setTrack(this.findChaptersTrack()),
            t.prototype.update.call(this)
        }
        ,
        e.prototype.setTrack = function(t) {
            if (this.track_ !== t) {
                if (this.updateHandler_ || (this.updateHandler_ = this.update.bind(this)),
                this.track_) {
                    var e = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                    e && e.removeEventListener("load", this.updateHandler_),
                    this.track_ = null
                }
                if (this.track_ = t,
                this.track_) {
                    this.track_.mode = "hidden";
                    var i = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                    i && i.addEventListener("load", this.updateHandler_)
                }
            }
        }
        ,
        e.prototype.findChaptersTrack = function() {
            for (var t = this.player_.textTracks() || [], e = t.length - 1; e >= 0; e--) {
                var i = t[e];
                if (i.kind === this.kind_)
                    return i
            }
        }
        ,
        e.prototype.getMenuCaption = function() {
            return this.track_ && this.track_.label ? this.track_.label : this.localize(J(this.kind_))
        }
        ,
        e.prototype.createMenu = function() {
            return this.options_.title = this.getMenuCaption(),
            t.prototype.createMenu.call(this)
        }
        ,
        e.prototype.createItems = function() {
            var t = [];
            if (!this.track_)
                return t;
            var e = this.track_.cues;
            if (!e)
                return t;
            for (var i = 0, n = e.length; i < n; i++) {
                var r = e[i]
                  , a = new Or(this.player_,{
                    track: this.track_,
                    cue: r
                });
                t.push(a)
            }
            return t
        }
        ,
        e
    }(Ar);
    Pr.prototype.kind_ = "chapters",
    Pr.prototype.controlText_ = "Chapters",
    wi.registerComponent("ChaptersButton", Pr);
    var Ir = function(t) {
        function e(i, n, r) {
            Ue(this, e);
            var a = Fe(this, t.call(this, i, n, r))
              , o = i.textTracks()
              , s = di(a, a.handleTracksChange);
            return o.addEventListener("change", s),
            a.on("dispose", function() {
                o.removeEventListener("change", s)
            }),
            a
        }
        return Ne(e, t),
        e.prototype.handleTracksChange = function(t) {
            for (var e = this.player().textTracks(), i = !1, n = 0, r = e.length; n < r; n++) {
                var a = e[n];
                if (a.kind !== this.kind_ && "showing" === a.mode) {
                    i = !0;
                    break
                }
            }
            i ? this.disable() : this.enable()
        }
        ,
        e.prototype.buildCSSClass = function() {
            return "vjs-descriptions-button " + t.prototype.buildCSSClass.call(this)
        }
        ,
        e.prototype.buildWrapperCSSClass = function() {
            return "vjs-descriptions-button " + t.prototype.buildWrapperCSSClass.call(this)
        }
        ,
        e
    }(Ar);
    Ir.prototype.kind_ = "descriptions",
    Ir.prototype.controlText_ = "Descriptions",
    wi.registerComponent("DescriptionsButton", Ir);
    var Lr = function(t) {
        function e(i, n, r) {
            return Ue(this, e),
            Fe(this, t.call(this, i, n, r))
        }
        return Ne(e, t),
        e.prototype.buildCSSClass = function() {
            return "vjs-subtitles-button " + t.prototype.buildCSSClass.call(this)
        }
        ,
        e.prototype.buildWrapperCSSClass = function() {
            return "vjs-subtitles-button " + t.prototype.buildWrapperCSSClass.call(this)
        }
        ,
        e
    }(Ar);
    Lr.prototype.kind_ = "subtitles",
    Lr.prototype.controlText_ = "Subtitles",
    wi.registerComponent("SubtitlesButton", Lr);
    var jr = function(t) {
        function e(i, n) {
            Ue(this, e),
            n.track = {
                player: i,
                kind: n.kind,
                label: n.kind + " settings",
                selectable: !1,
                "default": !1,
                mode: "disabled"
            },
            n.selectable = !1,
            n.name = "CaptionSettingsMenuItem";
            var r = Fe(this, t.call(this, i, n));
            return r.addClass("vjs-texttrack-settings"),
            r.controlText(", opens " + n.kind + " settings dialog"),
            r
        }
        return Ne(e, t),
        e.prototype.handleClick = function(t) {
            this.player().getChild("textTrackSettings").open()
        }
        ,
        e
    }(Cr);
    wi.registerComponent("CaptionSettingsMenuItem", jr);
    var Mr = function(t) {
        function e(i, n, r) {
            return Ue(this, e),
            Fe(this, t.call(this, i, n, r))
        }
        return Ne(e, t),
        e.prototype.buildCSSClass = function() {
            return "vjs-captions-button " + t.prototype.buildCSSClass.call(this)
        }
        ,
        e.prototype.buildWrapperCSSClass = function() {
            return "vjs-captions-button " + t.prototype.buildWrapperCSSClass.call(this)
        }
        ,
        e.prototype.createItems = function() {
            var e = [];
            return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || (e.push(new jr(this.player_,{
                kind: this.kind_
            })),
            this.hideThreshold_ += 1),
            t.prototype.createItems.call(this, e)
        }
        ,
        e
    }(Ar);
    Mr.prototype.kind_ = "captions",
    Mr.prototype.controlText_ = "Captions",
    wi.registerComponent("CaptionsButton", Mr);
    var Dr = function(t) {
        function e() {
            return Ue(this, e),
            Fe(this, t.apply(this, arguments))
        }
        return Ne(e, t),
        e.prototype.createEl = function(e, i, r) {
            var a = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label);
            return "captions" === this.options_.track.kind && (a += '\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> ' + this.localize("Captions") + "</span>\n      "),
            a += "</span>",
            t.prototype.createEl.call(this, e, n({
                innerHTML: a
            }, i), r)
        }
        ,
        e
    }(Cr);
    wi.registerComponent("SubsCapsMenuItem", Dr);
    var Rr = function(t) {
        function e(i) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            Ue(this, e);
            var r = Fe(this, t.call(this, i, n));
            return r.label_ = "subtitles",
            ["en", "en-us", "en-ca", "fr-ca"].indexOf(r.player_.language_) > -1 && (r.label_ = "captions"),
            r.menuButton_.controlText(J(r.label_)),
            r
        }
        return Ne(e, t),
        e.prototype.buildCSSClass = function() {
            return "vjs-subs-caps-button " + t.prototype.buildCSSClass.call(this)
        }
        ,
        e.prototype.buildWrapperCSSClass = function() {
            return "vjs-subs-caps-button " + t.prototype.buildWrapperCSSClass.call(this)
        }
        ,
        e.prototype.createItems = function() {
            var e = [];
            return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || (e.push(new jr(this.player_,{
                kind: this.label_
            })),
            this.hideThreshold_ += 1),
            e = t.prototype.createItems.call(this, e, Dr)
        }
        ,
        e
    }(Ar);
    Rr.prototype.kinds_ = ["captions", "subtitles"],
    Rr.prototype.controlText_ = "Subtitles",
    wi.registerComponent("SubsCapsButton", Rr);
    var Br = function(t) {
        function e(i, n) {
            Ue(this, e);
            var r = n.track
              , a = i.audioTracks();
            n.label = r.label || r.language || "Unknown",
            n.selected = r.enabled;
            var o = Fe(this, t.call(this, i, n));
            o.track = r;
            var s = di(o, o.handleTracksChange);
            return a.addEventListener("change", s),
            o.on("dispose", function() {
                a.removeEventListener("change", s)
            }),
            o
        }
        return Ne(e, t),
        e.prototype.handleClick = function(e) {
            var i = this.player_.audioTracks();
            t.prototype.handleClick.call(this, e);
            for (var n = 0; n < i.length; n++) {
                var r = i[n];
                r.enabled = r === this.track
            }
        }
        ,
        e.prototype.handleTracksChange = function(t) {
            this.selected(this.track.enabled)
        }
        ,
        e
    }(kr);
    wi.registerComponent("AudioTrackMenuItem", Br);
    var Ur = function(t) {
        function e(i) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return Ue(this, e),
            n.tracks = i.audioTracks(),
            Fe(this, t.call(this, i, n))
        }
        return Ne(e, t),
        e.prototype.buildCSSClass = function() {
            return "vjs-audio-button " + t.prototype.buildCSSClass.call(this)
        }
        ,
        e.prototype.buildWrapperCSSClass = function() {
            return "vjs-audio-button " + t.prototype.buildWrapperCSSClass.call(this)
        }
        ,
        e.prototype.createItems = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            this.hideThreshold_ = 1;
            for (var e = this.player_.audioTracks(), i = 0; i < e.length; i++) {
                var n = e[i];
                t.push(new Br(this.player_,{
                    track: n,
                    selectable: !0
                }))
            }
            return t
        }
        ,
        e
    }(Sr);
    Ur.prototype.controlText_ = "Audio Track",
    wi.registerComponent("AudioTrackButton", Ur);
    var Nr = function(t) {
        function e(i, n) {
            Ue(this, e);
            var r = n.rate
              , a = parseFloat(r, 10);
            n.label = r,
            n.selected = 1 === a,
            n.selectable = !0;
            var o = Fe(this, t.call(this, i, n));
            return o.label = r,
            o.rate = a,
            o.on(i, "ratechange", o.update),
            o
        }
        return Ne(e, t),
        e.prototype.handleClick = function(e) {
            t.prototype.handleClick.call(this),
            this.player().playbackRate(this.rate)
        }
        ,
        e.prototype.update = function(t) {
            this.selected(this.player().playbackRate() === this.rate)
        }
        ,
        e
    }(kr);
    Nr.prototype.contentElType = "button",
    wi.registerComponent("PlaybackRateMenuItem", Nr);
    var Fr = function(t) {
        function e(i, n) {
            Ue(this, e);
            var r = Fe(this, t.call(this, i, n));
            return r.updateVisibility(),
            r.updateLabel(),
            r.on(i, "loadstart", r.updateVisibility),
            r.on(i, "ratechange", r.updateLabel),
            r
        }
        return Ne(e, t),
        e.prototype.createEl = function() {
            var e = t.prototype.createEl.call(this);
            return this.labelEl_ = g("div", {
                className: "vjs-playback-rate-value",
                innerHTML: "1x"
            }),
            e.appendChild(this.labelEl_),
            e
        }
        ,
        e.prototype.dispose = function() {
            this.labelEl_ = null,
            t.prototype.dispose.call(this)
        }
        ,
        e.prototype.buildCSSClass = function() {
            return "vjs-playback-rate " + t.prototype.buildCSSClass.call(this)
        }
        ,
        e.prototype.buildWrapperCSSClass = function() {
            return "vjs-playback-rate " + t.prototype.buildWrapperCSSClass.call(this)
        }
        ,
        e.prototype.createMenu = function() {
            var t = new Tr(this.player())
              , e = this.playbackRates();
            if (e)
                for (var i = e.length - 1; i >= 0; i--)
                    t.addChild(new Nr(this.player(),{
                        rate: e[i] + "x"
                    }));
            return t
        }
        ,
        e.prototype.updateARIAAttributes = function() {
            this.el().setAttribute("aria-valuenow", this.player().playbackRate())
        }
        ,
        e.prototype.handleClick = function(t) {
            for (var e = this.player().playbackRate(), i = this.playbackRates(), n = i[0], r = 0; r < i.length; r++)
                if (i[r] > e) {
                    n = i[r];
                    break
                }
            this.player().playbackRate(n)
        }
        ,
        e.prototype.playbackRates = function() {
            return this.options_.playbackRates || this.options_.playerOptions && this.options_.playerOptions.playbackRates
        }
        ,
        e.prototype.playbackRateSupported = function() {
            return this.player().tech_ && this.player().tech_.featuresPlaybackRate && this.playbackRates() && this.playbackRates().length > 0
        }
        ,
        e.prototype.updateVisibility = function(t) {
            this.playbackRateSupported() ? this.removeClass("vjs-hidden") : this.addClass("vjs-hidden")
        }
        ,
        e.prototype.updateLabel = function(t) {
            this.playbackRateSupported() && (this.labelEl_.innerHTML = this.player().playbackRate() + "x")
        }
        ,
        e
    }(wr);
    Fr.prototype.controlText_ = "Playback Rate",
    wi.registerComponent("PlaybackRateMenuButton", Fr);
    var Hr = function(t) {
        function e() {
            return Ue(this, e),
            Fe(this, t.apply(this, arguments))
        }
        return Ne(e, t),
        e.prototype.buildCSSClass = function() {
            return "vjs-spacer " + t.prototype.buildCSSClass.call(this)
        }
        ,
        e.prototype.createEl = function() {
            return t.prototype.createEl.call(this, "div", {
                className: this.buildCSSClass()
            })
        }
        ,
        e
    }(wi);
    wi.registerComponent("Spacer", Hr);
    var Vr = function(t) {
        function e() {
            return Ue(this, e),
            Fe(this, t.apply(this, arguments))
        }
        return Ne(e, t),
        e.prototype.buildCSSClass = function() {
            return "vjs-custom-control-spacer " + t.prototype.buildCSSClass.call(this)
        }
        ,
        e.prototype.createEl = function() {
            var e = t.prototype.createEl.call(this, {
                className: this.buildCSSClass()
            });
            return e.innerHTML = "&nbsp;",
            e
        }
        ,
        e
    }(Hr);
    wi.registerComponent("CustomControlSpacer", Vr);
    var Gr = function(t) {
        function e() {
            return Ue(this, e),
            Fe(this, t.apply(this, arguments))
        }
        return Ne(e, t),
        e.prototype.createEl = function() {
            return t.prototype.createEl.call(this, "div", {
                className: "vjs-control-bar",
                dir: "ltr"
            }, {
                role: "group"
            })
        }
        ,
        e
    }(wi);
    Gr.prototype.options_ = {
        children: ["playToggle", "volumePanel", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "liveDisplay", "remainingTimeDisplay", "customControlSpacer", "playbackRateMenuButton", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "fullscreenToggle"]
    },
    wi.registerComponent("ControlBar", Gr);
    var Wr = function(t) {
        function e(i, n) {
            Ue(this, e);
            var r = Fe(this, t.call(this, i, n));
            return r.on(i, "error", r.open),
            r
        }
        return Ne(e, t),
        e.prototype.buildCSSClass = function() {
            return "vjs-error-display " + t.prototype.buildCSSClass.call(this)
        }
        ,
        e.prototype.content = function() {
            var t = this.player().error();
            return t ? this.localize(t.message) : ""
        }
        ,
        e
    }(Bi);
    Wr.prototype.options_ = tt(Bi.prototype.options_, {
        pauseOnOpen: !1,
        fillAlways: !0,
        temporary: !1,
        uncloseable: !0
    }),
    wi.registerComponent("ErrorDisplay", Wr);
    var qr = ["#000", "Black"]
      , Xr = ["#00F", "Blue"]
      , Yr = ["#0FF", "Cyan"]
      , Kr = ["#0F0", "Green"]
      , zr = ["#F0F", "Magenta"]
      , Zr = ["#F00", "Red"]
      , Qr = ["#FFF", "White"]
      , Jr = ["#FF0", "Yellow"]
      , $r = ["1", "Opaque"]
      , ta = ["0.5", "Semi-Transparent"]
      , ea = ["0", "Transparent"]
      , ia = {
        backgroundColor: {
            selector: ".vjs-bg-color > select",
            id: "captions-background-color-%s",
            label: "Color",
            options: [qr, Qr, Zr, Kr, Xr, Jr, zr, Yr]
        },
        backgroundOpacity: {
            selector: ".vjs-bg-opacity > select",
            id: "captions-background-opacity-%s",
            label: "Transparency",
            options: [$r, ta, ea]
        },
        color: {
            selector: ".vjs-fg-color > select",
            id: "captions-foreground-color-%s",
            label: "Color",
            options: [Qr, qr, Zr, Kr, Xr, Jr, zr, Yr]
        },
        edgeStyle: {
            selector: ".vjs-edge-style > select",
            id: "%s",
            label: "Text Edge Style",
            options: [["none", "None"], ["raised", "Raised"], ["depressed", "Depressed"], ["uniform", "Uniform"], ["dropshadow", "Dropshadow"]]
        },
        fontFamily: {
            selector: ".vjs-font-family > select",
            id: "captions-font-family-%s",
            label: "Font Family",
            options: [["proportionalSansSerif", "Proportional Sans-Serif"], ["monospaceSansSerif", "Monospace Sans-Serif"], ["proportionalSerif", "Proportional Serif"], ["monospaceSerif", "Monospace Serif"], ["casual", "Casual"], ["script", "Script"], ["small-caps", "Small Caps"]]
        },
        fontPercent: {
            selector: ".vjs-font-percent > select",
            id: "captions-font-size-%s",
            label: "Font Size",
            options: [["0.50", "50%"], ["0.75", "75%"], ["1.00", "100%"], ["1.25", "125%"], ["1.50", "150%"], ["1.75", "175%"], ["2.00", "200%"], ["3.00", "300%"], ["4.00", "400%"]],
            "default": 2,
            parser: function(t) {
                return "1.00" === t ? null : Number(t)
            }
        },
        textOpacity: {
            selector: ".vjs-text-opacity > select",
            id: "captions-foreground-opacity-%s",
            label: "Transparency",
            options: [$r, ta]
        },
        windowColor: {
            selector: ".vjs-window-color > select",
            id: "captions-window-color-%s",
            label: "Color"
        },
        windowOpacity: {
            selector: ".vjs-window-opacity > select",
            id: "captions-window-opacity-%s",
            label: "Transparency",
            options: [ea, ta, $r]
        }
    };
    ia.windowColor.options = ia.backgroundColor.options;
    var na = function(t) {
        function n(i, r) {
            Ue(this, n),
            r.temporary = !1;
            var a = Fe(this, t.call(this, i, r));
            return a.updateDisplay = di(a, a.updateDisplay),
            a.fill(),
            a.hasBeenOpened_ = a.hasBeenFilled_ = !0,
            a.endDialog = g("p", {
                className: "vjs-control-text",
                textContent: a.localize("End of dialog window.")
            }),
            a.el().appendChild(a.endDialog),
            a.setDefaults(),
            void 0 === r.persistTextTrackSettings && (a.options_.persistTextTrackSettings = a.options_.playerOptions.persistTextTrackSettings),
            a.on(a.$(".vjs-done-button"), "click", function() {
                a.saveSettings(),
                a.close()
            }),
            a.on(a.$(".vjs-default-button"), "click", function() {
                a.setDefaults(),
                a.updateDisplay()
            }),
            e(ia, function(t) {
                a.on(a.$(t.selector), "change", a.updateDisplay)
            }),
            a.options_.persistTextTrackSettings && a.restoreSettings(),
            a
        }
        return Ne(n, t),
        n.prototype.dispose = function() {
            this.endDialog = null,
            t.prototype.dispose.call(this)
        }
        ,
        n.prototype.createElSelect_ = function(t) {
            var e = this
              , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "label"
              , r = ia[t]
              , a = r.id.replace("%s", this.id_);
            return ["<" + n + ' id="' + a + '" class="' + ("label" === n ? "vjs-label" : "") + '">', this.localize(r.label), "</" + n + ">", '<select aria-labelledby="' + ("" !== i ? i + " " : "") + a + '">'].concat(r.options.map(function(t) {
                var n = a + "-" + t[1];
                return ['<option id="' + n + '" value="' + t[0] + '" ', 'aria-labelledby="' + ("" !== i ? i + " " : "") + a + " " + n + '">', e.localize(t[1]), "</option>"].join("")
            })).concat("</select>").join("")
        }
        ,
        n.prototype.createElFgColor_ = function() {
            var t = "captions-text-legend-" + this.id_;
            return ['<fieldset class="vjs-fg-color vjs-track-setting">', '<legend id="' + t + '">', this.localize("Text"), "</legend>", this.createElSelect_("color", t), '<span class="vjs-text-opacity vjs-opacity">', this.createElSelect_("textOpacity", t), "</span>", "</fieldset>"].join("")
        }
        ,
        n.prototype.createElBgColor_ = function() {
            var t = "captions-background-" + this.id_;
            return ['<fieldset class="vjs-bg-color vjs-track-setting">', '<legend id="' + t + '">', this.localize("Background"), "</legend>", this.createElSelect_("backgroundColor", t), '<span class="vjs-bg-opacity vjs-opacity">', this.createElSelect_("backgroundOpacity", t), "</span>", "</fieldset>"].join("")
        }
        ,
        n.prototype.createElWinColor_ = function() {
            var t = "captions-window-" + this.id_;
            return ['<fieldset class="vjs-window-color vjs-track-setting">', '<legend id="' + t + '">', this.localize("Window"), "</legend>", this.createElSelect_("windowColor", t), '<span class="vjs-window-opacity vjs-opacity">', this.createElSelect_("windowOpacity", t), "</span>", "</fieldset>"].join("")
        }
        ,
        n.prototype.createElColors_ = function() {
            return g("div", {
                className: "vjs-track-settings-colors",
                innerHTML: [this.createElFgColor_(), this.createElBgColor_(), this.createElWinColor_()].join("")
            })
        }
        ,
        n.prototype.createElFont_ = function() {
            return g("div", {
                className: 'vjs-track-settings-font">',
                innerHTML: ['<fieldset class="vjs-font-percent vjs-track-setting">', this.createElSelect_("fontPercent", "", "legend"), "</fieldset>", '<fieldset class="vjs-edge-style vjs-track-setting">', this.createElSelect_("edgeStyle", "", "legend"), "</fieldset>", '<fieldset class="vjs-font-family vjs-track-setting">', this.createElSelect_("fontFamily", "", "legend"), "</fieldset>"].join("")
            })
        }
        ,
        n.prototype.createElControls_ = function() {
            var t = this.localize("restore all settings to the default values");
            return g("div", {
                className: "vjs-track-settings-controls",
                innerHTML: ['<button class="vjs-default-button" title="' + t + '">', this.localize("Reset"), '<span class="vjs-control-text"> ' + t + "</span>", "</button>", '<button class="vjs-done-button">' + this.localize("Done") + "</button>"].join("")
            })
        }
        ,
        n.prototype.content = function() {
            return [this.createElColors_(), this.createElFont_(), this.createElControls_()]
        }
        ,
        n.prototype.label = function() {
            return this.localize("Caption Settings Dialog")
        }
        ,
        n.prototype.description = function() {
            return this.localize("Beginning of dialog window. Escape will cancel and close the window.")
        }
        ,
        n.prototype.buildCSSClass = function() {
            return t.prototype.buildCSSClass.call(this) + " vjs-text-track-settings"
        }
        ,
        n.prototype.getValues = function() {
            var t = this;
            return i(ia, function(e, i, n) {
                var r = ee(t.$(i.selector), i.parser);
                return void 0 !== r && (e[n] = r),
                e
            }, {})
        }
        ,
        n.prototype.setValues = function(t) {
            var i = this;
            e(ia, function(e, n) {
                ie(i.$(e.selector), t[n], e.parser)
            })
        }
        ,
        n.prototype.setDefaults = function() {
            var t = this;
            e(ia, function(e) {
                var i = e.hasOwnProperty("default") ? e["default"] : 0;
                t.$(e.selector).selectedIndex = i
            })
        }
        ,
        n.prototype.restoreSettings = function() {
            var t = void 0;
            try {
                t = JSON.parse(ue.localStorage.getItem("vjs-text-track-settings"))
            } catch (t) {
                Ke.warn(t)
            }
            t && this.setValues(t)
        }
        ,
        n.prototype.saveSettings = function() {
            if (this.options_.persistTextTrackSettings) {
                var t = this.getValues();
                try {
                    Object.keys(t).length ? ue.localStorage.setItem("vjs-text-track-settings", JSON.stringify(t)) : ue.localStorage.removeItem("vjs-text-track-settings")
                } catch (t) {
                    Ke.warn(t)
                }
            }
        }
        ,
        n.prototype.updateDisplay = function() {
            var t = this.player_.getChild("textTrackDisplay");
            t && t.updateDisplay()
        }
        ,
        n.prototype.conditionalBlur_ = function() {
            this.previouslyActiveEl_ = null,
            this.off(fe, "keydown", this.handleKeyDown);
            var t = this.player_.controlBar
              , e = t && t.subsCapsButton
              , i = t && t.captionsButton;
            e ? e.focus() : i && i.focus()
        }
        ,
        n
    }(Bi);
    wi.registerComponent("TextTrackSettings", na);
    var ra = He(["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."], ["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."])
      , aa = function(t) {
        function e(i, n) {
            Ue(this, e);
            var r = Fe(this, t.call(this, i, n))
              , a = i.source
              , o = !1;
            if (a && (r.el_.currentSrc !== a.src || i.tag && 3 === i.tag.initNetworkState_) ? r.setSource(a) : r.handleLateInit_(r.el_),
            r.el_.hasChildNodes()) {
                for (var s = r.el_.childNodes, u = s.length, l = []; u--; ) {
                    var c = s[u];
                    "track" === c.nodeName.toLowerCase() && (r.featuresNativeTextTracks ? (r.remoteTextTrackEls().addTrackElement_(c),
                    r.remoteTextTracks().addTrack(c.track),
                    r.textTracks().addTrack(c.track),
                    o || r.el_.hasAttribute("crossorigin") || !en(c.src) || (o = !0)) : l.push(c))
                }
                for (var d = 0; d < l.length; d++)
                    r.el_.removeChild(l[d])
            }
            return r.proxyNativeTracks_(),
            r.featuresNativeTextTracks && o && Ke.warn(ze(ra)),
            r.restoreMetadataTracksInIOSNativePlayer_(),
            (Me || ve || ke) && !0 === i.nativeControlsForTouch && r.setControls(!0),
            r.proxyWebkitFullscreen_(),
            r.triggerReady(),
            r
        }
        return Ne(e, t),
        e.prototype.dispose = function() {
            e.disposeMediaElement(this.el_),
            this.options_ = null,
            t.prototype.dispose.call(this)
        }
        ,
        e.prototype.restoreMetadataTracksInIOSNativePlayer_ = function() {
            var t = this.textTracks()
              , e = void 0
              , i = function() {
                e = [];
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    "metadata" === n.kind && e.push({
                        track: n,
                        storedMode: n.mode
                    })
                }
            };
            i(),
            t.addEventListener("change", i),
            this.on("dispose", function() {
                return t.removeEventListener("change", i)
            });
            var n = function r() {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    "disabled" === n.track.mode && n.track.mode !== n.storedMode && (n.track.mode = n.storedMode)
                }
                t.removeEventListener("change", r)
            };
            this.on("webkitbeginfullscreen", function() {
                t.removeEventListener("change", i),
                t.removeEventListener("change", n),
                t.addEventListener("change", n)
            }),
            this.on("webkitendfullscreen", function() {
                t.removeEventListener("change", i),
                t.addEventListener("change", i),
                t.removeEventListener("change", n)
            })
        }
        ,
        e.prototype.proxyNativeTracks_ = function() {
            var t = this;
            wn.names.forEach(function(e) {
                var i = wn[e]
                  , n = t.el()[i.getterName]
                  , r = t[i.getterName]();
                if (t["featuresNative" + i.capitalName + "Tracks"] && n && n.addEventListener) {
                    var a = {
                        change: function(t) {
                            r.trigger({
                                type: "change",
                                target: r,
                                currentTarget: r,
                                srcElement: r
                            })
                        },
                        addtrack: function(t) {
                            r.addTrack(t.track)
                        },
                        removetrack: function(t) {
                            r.removeTrack(t.track)
                        }
                    }
                      , o = function() {
                        for (var t = [], e = 0; e < r.length; e++) {
                            for (var i = !1, a = 0; a < n.length; a++)
                                if (n[a] === r[e]) {
                                    i = !0;
                                    break
                                }
                            i || t.push(r[e])
                        }
                        for (; t.length; )
                            r.removeTrack(t.shift())
                    };
                    Object.keys(a).forEach(function(e) {
                        var i = a[e];
                        n.addEventListener(e, i),
                        t.on("dispose", function(t) {
                            return n.removeEventListener(e, i)
                        })
                    }),
                    t.on("loadstart", o),
                    t.on("dispose", function(e) {
                        return t.off("loadstart", o)
                    })
                }
            })
        }
        ,
        e.prototype.createEl = function() {
            var t = this.options_.tag;
            if (!t || !this.options_.playerElIngest && !this.movingMediaElementInDOM) {
                if (t) {
                    var i = t.cloneNode(!0);
                    t.parentNode && t.parentNode.insertBefore(i, t),
                    e.disposeMediaElement(t),
                    t = i
                } else {
                    t = fe.createElement("video");
                    var r = this.options_.tag && w(this.options_.tag)
                      , a = tt({}, r);
                    Me && !0 === this.options_.nativeControlsForTouch || delete a.controls,
                    T(t, n(a, {
                        id: this.options_.techId,
                        "class": "vjs-tech"
                    }))
                }
                t.playerId = this.options_.playerId
            }
            void 0 !== this.options_.preload && k(t, "preload", this.options_.preload);
            for (var o = ["loop", "muted", "playsinline", "autoplay"], s = o.length - 1; s >= 0; s--) {
                var u = o[s]
                  , l = this.options_[u];
                void 0 !== l && (l ? k(t, u, u) : C(t, u),
                t[u] = l)
            }
            return t
        }
        ,
        e.prototype.handleLateInit_ = function(t) {
            if (0 !== t.networkState && 3 !== t.networkState) {
                if (0 === t.readyState) {
                    var e = !1
                      , i = function() {
                        e = !0
                    };
                    this.on("loadstart", i);
                    var n = function() {
                        e || this.trigger("loadstart")
                    };
                    return this.on("loadedmetadata", n),
                    void this.ready(function() {
                        this.off("loadstart", i),
                        this.off("loadedmetadata", n),
                        e || this.trigger("loadstart")
                    })
                }
                var r = ["loadstart"];
                r.push("loadedmetadata"),
                t.readyState >= 2 && r.push("loadeddata"),
                t.readyState >= 3 && r.push("canplay"),
                t.readyState >= 4 && r.push("canplaythrough"),
                this.ready(function() {
                    r.forEach(function(t) {
                        this.trigger(t)
                    }, this)
                })
            }
        }
        ,
        e.prototype.setCurrentTime = function(t) {
            try {
                this.el_.currentTime = t
            } catch (t) {
                Ke(t, "Video is not ready. (Video.js)")
            }
        }
        ,
        e.prototype.duration = function() {
            var t = this;
            if (this.el_.duration === 1 / 0 && Te && Ae && 0 === this.el_.currentTime) {
                var e = function i() {
                    t.el_.currentTime > 0 && (t.el_.duration === 1 / 0 && t.trigger("durationchange"),
                    t.off("timeupdate", i))
                };
                return this.on("timeupdate", e),
                NaN
            }
            return this.el_.duration || NaN
        }
        ,
        e.prototype.width = function() {
            return this.el_.offsetWidth
        }
        ,
        e.prototype.height = function() {
            return this.el_.offsetHeight
        }
        ,
        e.prototype.proxyWebkitFullscreen_ = function() {
            var t = this;
            if ("webkitDisplayingFullscreen"in this.el_) {
                var e = function() {
                    this.trigger("fullscreenchange", {
                        isFullscreen: !1
                    })
                }
                  , i = function() {
                    "webkitPresentationMode"in this.el_ && "picture-in-picture" !== this.el_.webkitPresentationMode && (this.one("webkitendfullscreen", e),
                    this.trigger("fullscreenchange", {
                        isFullscreen: !0
                    }))
                };
                this.on("webkitbeginfullscreen", i),
                this.on("dispose", function() {
                    t.off("webkitbeginfullscreen", i),
                    t.off("webkitendfullscreen", e)
                })
            }
        }
        ,
        e.prototype.supportsFullScreen = function() {
            if ("function" == typeof this.el_.webkitEnterFullScreen) {
                var t = ue.navigator && ue.navigator.userAgent || "";
                if (/Android/.test(t) || !/Chrome|Mac OS X 10.5/.test(t))
                    return !0
            }
            return !1
        }
        ,
        e.prototype.enterFullScreen = function() {
            var t = this.el_;
            t.paused && t.networkState <= t.HAVE_METADATA ? (this.el_.play(),
            this.setTimeout(function() {
                t.pause(),
                t.webkitEnterFullScreen()
            }, 0)) : t.webkitEnterFullScreen()
        }
        ,
        e.prototype.exitFullScreen = function() {
            this.el_.webkitExitFullScreen()
        }
        ,
        e.prototype.src = function(t) {
            return void 0 === t ? this.el_.src : void this.setSrc(t)
        }
        ,
        e.prototype.reset = function() {
            e.resetMediaElement(this.el_)
        }
        ,
        e.prototype.currentSrc = function() {
            return this.currentSource_ ? this.currentSource_.src : this.el_.currentSrc
        }
        ,
        e.prototype.setControls = function(t) {
            this.el_.controls = !!t
        }
        ,
        e.prototype.addTextTrack = function(e, i, n) {
            return this.featuresNativeTextTracks ? this.el_.addTextTrack(e, i, n) : t.prototype.addTextTrack.call(this, e, i, n)
        }
        ,
        e.prototype.createRemoteTextTrack = function(e) {
            if (!this.featuresNativeTextTracks)
                return t.prototype.createRemoteTextTrack.call(this, e);
            var i = fe.createElement("track");
            return e.kind && (i.kind = e.kind),
            e.label && (i.label = e.label),
            (e.language || e.srclang) && (i.srclang = e.language || e.srclang),
            e["default"] && (i["default"] = e["default"]),
            e.id && (i.id = e.id),
            e.src && (i.src = e.src),
            i
        }
        ,
        e.prototype.addRemoteTextTrack = function(e, i) {
            var n = t.prototype.addRemoteTextTrack.call(this, e, i);
            return this.featuresNativeTextTracks && this.el().appendChild(n),
            n
        }
        ,
        e.prototype.removeRemoteTextTrack = function(e) {
            if (t.prototype.removeRemoteTextTrack.call(this, e),
            this.featuresNativeTextTracks)
                for (var i = this.$$("track"), n = i.length; n--; )
                    e !== i[n] && e !== i[n].track || this.el().removeChild(i[n])
        }
        ,
        e.prototype.getVideoPlaybackQuality = function() {
            if ("function" == typeof this.el().getVideoPlaybackQuality)
                return this.el().getVideoPlaybackQuality();
            var t = {};
            return void 0 !== this.el().webkitDroppedFrameCount && void 0 !== this.el().webkitDecodedFrameCount && (t.droppedVideoFrames = this.el().webkitDroppedFrameCount,
            t.totalVideoFrames = this.el().webkitDecodedFrameCount),
            ue.performance && "function" == typeof ue.performance.now ? t.creationTime = ue.performance.now() : ue.performance && ue.performance.timing && "number" == typeof ue.performance.timing.navigationStart && (t.creationTime = ue.Date.now() - ue.performance.timing.navigationStart),
            t
        }
        ,
        e
    }(Fn);
    if (d()) {
        aa.TEST_VID = fe.createElement("video");
        var oa = fe.createElement("track");
        oa.kind = "captions",
        oa.srclang = "en",
        oa.label = "English",
        aa.TEST_VID.appendChild(oa)
    }
    aa.isSupported = function() {
        try {
            aa.TEST_VID.volume = .5
        } catch (t) {
            return !1
        }
        return !(!aa.TEST_VID || !aa.TEST_VID.canPlayType)
    }
    ,
    aa.canPlayType = function(t) {
        return aa.TEST_VID.canPlayType(t)
    }
    ,
    aa.canPlaySource = function(t, e) {
        return aa.canPlayType(t.type)
    }
    ,
    aa.canControlVolume = function() {
        try {
            var t = aa.TEST_VID.volume;
            return aa.TEST_VID.volume = t / 2 + .1,
            t !== aa.TEST_VID.volume
        } catch (t) {
            return !1
        }
    }
    ,
    aa.canControlPlaybackRate = function() {
        if (Te && Ae && Oe < 58)
            return !1;
        try {
            var t = aa.TEST_VID.playbackRate;
            return aa.TEST_VID.playbackRate = t / 2 + .1,
            t !== aa.TEST_VID.playbackRate
        } catch (t) {
            return !1
        }
    }
    ,
    aa.supportsNativeTextTracks = function() {
        return je
    }
    ,
    aa.supportsNativeVideoTracks = function() {
        return !(!aa.TEST_VID || !aa.TEST_VID.videoTracks)
    }
    ,
    aa.supportsNativeAudioTracks = function() {
        return !(!aa.TEST_VID || !aa.TEST_VID.audioTracks)
    }
    ,
    aa.Events = ["loadstart", "suspend", "abort", "error", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "waiting", "seeking", "seeked", "ended", "durationchange", "timeupdate", "progress", "play", "pause", "ratechange", "resize", "volumechange"],
    aa.prototype.featuresVolumeControl = aa.canControlVolume(),
    aa.prototype.featuresPlaybackRate = aa.canControlPlaybackRate(),
    aa.prototype.movingMediaElementInDOM = !be,
    aa.prototype.featuresFullscreenResize = !0,
    aa.prototype.featuresProgressEvents = !0,
    aa.prototype.featuresTimeupdateEvents = !0,
    aa.prototype.featuresNativeTextTracks = aa.supportsNativeTextTracks(),
    aa.prototype.featuresNativeVideoTracks = aa.supportsNativeVideoTracks(),
    aa.prototype.featuresNativeAudioTracks = aa.supportsNativeAudioTracks();
    var sa = aa.TEST_VID && aa.TEST_VID.constructor.prototype.canPlayType
      , ua = /^application\/(?:x-|vnd\.apple\.)mpegurl/i
      , la = /^video\/mp4/i;
    aa.patchCanPlayType = function() {
        we >= 4 && !Ce ? aa.TEST_VID.constructor.prototype.canPlayType = function(t) {
            return t && ua.test(t) ? "maybe" : sa.call(this, t)
        }
        : Se && (aa.TEST_VID.constructor.prototype.canPlayType = function(t) {
            return t && la.test(t) ? "maybe" : sa.call(this, t)
        }
        )
    }
    ,
    aa.unpatchCanPlayType = function() {
        var t = aa.TEST_VID.constructor.prototype.canPlayType;
        return aa.TEST_VID.constructor.prototype.canPlayType = sa,
        t
    }
    ,
    aa.patchCanPlayType(),
    aa.disposeMediaElement = function(t) {
        if (t) {
            for (t.parentNode && t.parentNode.removeChild(t); t.hasChildNodes(); )
                t.removeChild(t.firstChild);
            t.removeAttribute("src"),
            "function" == typeof t.load && function() {
                try {
                    t.load()
                } catch (t) {}
            }()
        }
    }
    ,
    aa.resetMediaElement = function(t) {
        if (t) {
            for (var e = t.querySelectorAll("source"), i = e.length; i--; )
                t.removeChild(e[i]);
            t.removeAttribute("src"),
            "function" == typeof t.load && function() {
                try {
                    t.load()
                } catch (t) {}
            }()
        }
    }
    ,
    ["muted", "defaultMuted", "autoplay", "controls", "loop", "playsinline"].forEach(function(t) {
        aa.prototype[t] = function() {
            return this.el_[t] || this.el_.hasAttribute(t)
        }
    }),
    ["muted", "defaultMuted", "autoplay", "loop", "playsinline"].forEach(function(t) {
        aa.prototype["set" + J(t)] = function(e) {
            this.el_[t] = e,
            e ? this.el_.setAttribute(t, t) : this.el_.removeAttribute(t)
        }
    }),
    ["paused", "currentTime", "buffered", "volume", "poster", "preload", "error", "seeking", "seekable", "ended", "playbackRate", "defaultPlaybackRate", "played", "networkState", "readyState", "videoWidth", "videoHeight"].forEach(function(t) {
        aa.prototype[t] = function() {
            return this.el_[t]
        }
    }),
    ["volume", "src", "poster", "preload", "playbackRate", "defaultPlaybackRate"].forEach(function(t) {
        aa.prototype["set" + J(t)] = function(e) {
            this.el_[t] = e
        }
    }),
    ["pause", "load", "play"].forEach(function(t) {
        aa.prototype[t] = function() {
            return this.el_[t]()
        }
    }),
    Fn.withSourceHandlers(aa),
    aa.nativeSourceHandler = {},
    aa.nativeSourceHandler.canPlayType = function(t) {
        try {
            return aa.TEST_VID.canPlayType(t)
        } catch (t) {
            return ""
        }
    }
    ,
    aa.nativeSourceHandler.canHandleSource = function(t, e) {
        if (t.type)
            return aa.nativeSourceHandler.canPlayType(t.type);
        if (t.src) {
            var i = tn(t.src);
            return aa.nativeSourceHandler.canPlayType("video/" + i)
        }
        return ""
    }
    ,
    aa.nativeSourceHandler.handleSource = function(t, e, i) {
        e.setSrc(t.src)
    }
    ,
    aa.nativeSourceHandler.dispose = function() {}
    ,
    aa.registerSourceHandler(aa.nativeSourceHandler),
    Fn.registerTech("Html5", aa);
    var ca = He(["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "], ["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "])
      , da = ["progress", "abort", "suspend", "emptied", "stalled", "loadedmetadata", "loadeddata", "timeupdate", "ratechange", "resize", "volumechange", "texttrackchange"]
      , ha = function(t) {
        function e(i, r, a) {
            if (Ue(this, e),
            i.id = i.id || "vjs_video_" + U(),
            r = n(e.getTagSettings(i), r),
            r.initChildren = !1,
            r.createEl = !1,
            r.evented = !1,
            r.reportTouchActivity = !1,
            !r.language)
                if ("function" == typeof i.closest) {
                    var o = i.closest("[lang]");
                    o && o.getAttribute && (r.language = o.getAttribute("lang"))
                } else
                    for (var s = i; s && 1 === s.nodeType; ) {
                        if (w(s).hasOwnProperty("lang")) {
                            r.language = s.getAttribute("lang");
                            break
                        }
                        s = s.parentNode
                    }
            var u = Fe(this, t.call(this, null, r, a));
            if (u.isReady_ = !1,
            u.hasStarted_ = !1,
            u.userActive_ = !1,
            !u.options_ || !u.options_.techOrder || !u.options_.techOrder.length)
                throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");
            if (u.tag = i,
            u.tagAttributes = i && w(i),
            u.language(u.options_.language),
            r.languages) {
                var l = {};
                Object.getOwnPropertyNames(r.languages).forEach(function(t) {
                    l[t.toLowerCase()] = r.languages[t]
                }),
                u.languages_ = l
            } else
                u.languages_ = e.prototype.options_.languages;
            u.cache_ = {},
            u.poster_ = r.poster || "",
            u.controls_ = !!r.controls,
            u.cache_.lastVolume = 1,
            i.controls = !1,
            i.removeAttribute("controls"),
            u.scrubbing_ = !1,
            u.el_ = u.createEl(),
            Z(u, {
                eventBusKey: "el_"
            });
            var c = tt(u.options_);
            if (r.plugins) {
                var d = r.plugins;
                Object.keys(d).forEach(function(t) {
                    if ("function" != typeof this[t])
                        throw new Error('plugin "' + t + '" does not exist');
                    this[t](d[t])
                }, u)
            }
            u.options_.playerOptions = c,
            u.middleware_ = [],
            u.initChildren(),
            u.isAudio("audio" === i.nodeName.toLowerCase()),
            u.controls() ? u.addClass("vjs-controls-enabled") : u.addClass("vjs-controls-disabled"),
            u.el_.setAttribute("role", "region"),
            u.isAudio() ? u.el_.setAttribute("aria-label", u.localize("Audio Player")) : u.el_.setAttribute("aria-label", u.localize("Video Player")),
            u.isAudio() && u.addClass("vjs-audio"),
            u.flexNotSupported_() && u.addClass("vjs-no-flex"),
            be || u.addClass("vjs-workinghover"),
            e.players[u.id_] = u;
            var h = ae.split(".")[0];
            return u.addClass("vjs-v" + h),
            u.userActive(!0),
            u.reportUserActivity(),
            u.listenForUserActivity_(),
            u.on("fullscreenchange", u.handleFullscreenChange_),
            u.on("stageclick", u.handleStageClick_),
            u.changingSrc_ = !1,
            u.playWaitingForReady_ = !1,
            u.playOnLoadstart_ = null,
            u
        }
        return Ne(e, t),
        e.prototype.dispose = function() {
            this.trigger("dispose"),
            this.off("dispose"),
            this.styleEl_ && this.styleEl_.parentNode && (this.styleEl_.parentNode.removeChild(this.styleEl_),
            this.styleEl_ = null),
            e.players[this.id_] = null,
            this.tag && this.tag.player && (this.tag.player = null),
            this.el_ && this.el_.player && (this.el_.player = null),
            this.tech_ && this.tech_.dispose(),
            this.playerElIngest_ && (this.playerElIngest_ = null),
            this.tag && (this.tag = null),
            t.prototype.dispose.call(this)
        }
        ,
        e.prototype.createEl = function() {
            var e = this.tag
              , i = void 0
              , n = this.playerElIngest_ = e.parentNode && e.parentNode.hasAttribute && e.parentNode.hasAttribute("data-vjs-player")
              , r = "video-js" === this.tag.tagName.toLowerCase();
            n ? i = this.el_ = e.parentNode : r || (i = this.el_ = t.prototype.createEl.call(this, "div"));
            var a = w(e);
            if (r) {
                for (i = this.el_ = e,
                e = this.tag = fe.createElement("video"); i.children.length; )
                    e.appendChild(i.firstChild);
                v(i, "video-js") || _(i, "video-js"),
                i.appendChild(e),
                n = this.playerElIngest_ = i
            }
            if (e.setAttribute("tabindex", "-1"),
            e.removeAttribute("width"),
            e.removeAttribute("height"),
            Object.getOwnPropertyNames(a).forEach(function(t) {
                "class" === t ? (i.className += " " + a[t],
                r && (e.className += " " + a[t])) : (i.setAttribute(t, a[t]),
                r && e.setAttribute(t, a[t]))
            }),
            e.playerId = e.id,
            e.id += "_html5_api",
            e.className = "vjs-tech",
            e.player = i.player = this,
            this.addClass("vjs-paused"),
            !0 !== ue.VIDEOJS_NO_DYNAMIC_STYLE) {
                this.styleEl_ = li("vjs-styles-dimensions");
                var o = Qe(".vjs-styles-defaults")
                  , s = Qe("head");
                s.insertBefore(this.styleEl_, o ? o.nextSibling : s.firstChild)
            }
            this.width(this.options_.width),
            this.height(this.options_.height),
            this.fluid(this.options_.fluid),
            this.aspectRatio(this.options_.aspectRatio);
            for (var u = e.getElementsByTagName("a"), l = 0; l < u.length; l++) {
                var c = u.item(l);
                _(c, "vjs-hidden"),
                c.setAttribute("hidden", "hidden")
            }
            return e.initNetworkState_ = e.networkState,
            e.parentNode && !n && e.parentNode.insertBefore(i, e),
            y(e, i),
            this.children_.unshift(e),
            this.el_.setAttribute("lang", this.language_),
            this.el_ = i,
            i
        }
        ,
        e.prototype.width = function(t) {
            return this.dimension("width", t)
        }
        ,
        e.prototype.height = function(t) {
            return this.dimension("height", t)
        }
        ,
        e.prototype.dimension = function(t, e) {
            var i = t + "_";
            if (void 0 === e)
                return this[i] || 0;
            if ("" === e)
                return this[i] = void 0,
                void this.updateStyleEl_();
            var n = parseFloat(e);
            return isNaN(n) ? void Ke.error('Improper value "' + e + '" supplied for for ' + t) : (this[i] = n,
            void this.updateStyleEl_())
        }
        ,
        e.prototype.fluid = function(t) {
            return void 0 === t ? !!this.fluid_ : (this.fluid_ = !!t,
            t ? this.addClass("vjs-fluid") : this.removeClass("vjs-fluid"),
            this.updateStyleEl_(),
            void 0)
        }
        ,
        e.prototype.aspectRatio = function(t) {
            if (void 0 === t)
                return this.aspectRatio_;
            if (!/^\d+\:\d+$/.test(t))
                throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");
            this.aspectRatio_ = t,
            this.fluid(!0),
            this.updateStyleEl_()
        }
        ,
        e.prototype.updateStyleEl_ = function() {
            if (!0 === ue.VIDEOJS_NO_DYNAMIC_STYLE) {
                var t = "number" == typeof this.width_ ? this.width_ : this.options_.width
                  , e = "number" == typeof this.height_ ? this.height_ : this.options_.height
                  , i = this.tech_ && this.tech_.el();
                return void (i && (t >= 0 && (i.width = t),
                e >= 0 && (i.height = e)))
            }
            var n = void 0
              , r = void 0
              , a = void 0
              , o = void 0;
            a = void 0 !== this.aspectRatio_ && "auto" !== this.aspectRatio_ ? this.aspectRatio_ : this.videoWidth() > 0 ? this.videoWidth() + ":" + this.videoHeight() : "16:9";
            var s = a.split(":")
              , u = s[1] / s[0];
            n = void 0 !== this.width_ ? this.width_ : void 0 !== this.height_ ? this.height_ / u : this.videoWidth() || 300,
            r = void 0 !== this.height_ ? this.height_ : n * u,
            o = /^[^a-zA-Z]/.test(this.id()) ? "dimensions-" + this.id() : this.id() + "-dimensions",
            this.addClass(o),
            ci(this.styleEl_, "\n      ." + o + " {\n        width: " + n + "px;\n        height: " + r + "px;\n      }\n\n      ." + o + ".vjs-fluid {\n        padding-top: " + 100 * u + "%;\n      }\n    ")
        }
        ,
        e.prototype.loadTech_ = function(t, e) {
            var i = this;
            this.tech_ && this.unloadTech_();
            var r = J(t)
              , a = t.charAt(0).toLowerCase() + t.slice(1);
            "Html5" !== r && this.tag && (Fn.getTech("Html5").disposeMediaElement(this.tag),
            this.tag.player = null,
            this.tag = null),
            this.techName_ = r,
            this.isReady_ = !1;
            var o = {
                source: e,
                nativeControlsForTouch: this.options_.nativeControlsForTouch,
                playerId: this.id(),
                techId: this.id() + "_" + r + "_api",
                autoplay: this.options_.autoplay,
                playsinline: this.options_.playsinline,
                preload: this.options_.preload,
                loop: this.options_.loop,
                muted: this.options_.muted,
                poster: this.poster(),
                language: this.language(),
                playerElIngest: this.playerElIngest_ || !1,
                "vtt.js": this.options_["vtt.js"]
            };
            kn.names.forEach(function(t) {
                var e = kn[t];
                o[e.getterName] = i[e.privateName]
            }),
            n(o, this.options_[r]),
            n(o, this.options_[a]),
            n(o, this.options_[t.toLowerCase()]),
            this.tag && (o.tag = this.tag),
            e && e.src === this.cache_.src && this.cache_.currentTime > 0 && (o.startTime = this.cache_.currentTime);
            var s = Fn.getTech(t);
            if (!s)
                throw new Error("No Tech named '" + r + "' exists! '" + r + "' should be registered using videojs.registerTech()'");
            this.tech_ = new s(o),
            this.tech_.ready(di(this, this.handleTechReady_), !0),
            Di.jsonToTextTracks(this.textTracksJson_ || [], this.tech_),
            da.forEach(function(t) {
                i.on(i.tech_, t, i["handleTech" + J(t) + "_"])
            }),
            this.on(this.tech_, "loadstart", this.handleTechLoadStart_),
            this.on(this.tech_, "waiting", this.handleTechWaiting_),
            this.on(this.tech_, "canplay", this.handleTechCanPlay_),
            this.on(this.tech_, "canplaythrough", this.handleTechCanPlayThrough_),
            this.on(this.tech_, "playing", this.handleTechPlaying_),
            this.on(this.tech_, "ended", this.handleTechEnded_),
            this.on(this.tech_, "seeking", this.handleTechSeeking_),
            this.on(this.tech_, "seeked", this.handleTechSeeked_),
            this.on(this.tech_, "play", this.handleTechPlay_),
            this.on(this.tech_, "firstplay", this.handleTechFirstPlay_),
            this.on(this.tech_, "pause", this.handleTechPause_),
            this.on(this.tech_, "durationchange", this.handleTechDurationChange_),
            this.on(this.tech_, "fullscreenchange", this.handleTechFullscreenChange_),
            this.on(this.tech_, "error", this.handleTechError_),
            this.on(this.tech_, "loadedmetadata", this.updateStyleEl_),
            this.on(this.tech_, "posterchange", this.handleTechPosterChange_),
            this.on(this.tech_, "textdata", this.handleTechTextData_),
            this.usingNativeControls(this.techGet_("controls")),
            this.controls() && !this.usingNativeControls() && this.addTechControlsListeners_(),
            this.tech_.el().parentNode === this.el() || "Html5" === r && this.tag || y(this.tech_.el(), this.el()),
            this.tag && (this.tag.player = null,
            this.tag = null)
        }
        ,
        e.prototype.unloadTech_ = function() {
            var t = this;
            kn.names.forEach(function(e) {
                var i = kn[e];
                t[i.privateName] = t[i.getterName]()
            }),
            this.textTracksJson_ = Di.textTracksToJson(this.tech_),
            this.isReady_ = !1,
            this.tech_.dispose(),
            this.tech_ = !1
        }
        ,
        e.prototype.tech = function(t) {
            return void 0 === t && Ke.warn(ze(ca)),
            this.tech_
        }
        ,
        e.prototype.addTechControlsListeners_ = function() {
            this.removeTechControlsListeners_(),
            this.on(this.tech_, "mousedown", this.handleTechClick_),
            this.on(this.tech_, "touchstart", this.handleTechTouchStart_),
            this.on(this.tech_, "touchmove", this.handleTechTouchMove_),
            this.on(this.tech_, "touchend", this.handleTechTouchEnd_),
            this.on(this.tech_, "tap", this.handleTechTap_)
        }
        ,
        e.prototype.removeTechControlsListeners_ = function() {
            this.off(this.tech_, "tap", this.handleTechTap_),
            this.off(this.tech_, "touchstart", this.handleTechTouchStart_),
            this.off(this.tech_, "touchmove", this.handleTechTouchMove_),
            this.off(this.tech_, "touchend", this.handleTechTouchEnd_),
            this.off(this.tech_, "mousedown", this.handleTechClick_)
        }
        ,
        e.prototype.handleTechReady_ = function() {
            if (this.triggerReady(),
            this.cache_.volume && this.techCall_("setVolume", this.cache_.volume),
            this.handleTechPosterChange_(),
            this.handleTechDurationChange_(),
            (this.src() || this.currentSrc()) && this.tag && this.options_.autoplay && this.paused())
                try {
                    delete this.tag.poster
                } catch (t) {
                    Ke("deleting tag.poster throws in some browsers", t)
                }
        }
        ,
        e.prototype.handleTechLoadStart_ = function() {
            this.removeClass("vjs-ended"),
            this.removeClass("vjs-seeking"),
            this.error(null),
            this.paused() ? (this.hasStarted(!1),
            this.trigger("loadstart")) : (this.trigger("loadstart"),
            this.trigger("firstplay"))
        }
        ,
        e.prototype.hasStarted = function(t) {
            return void 0 === t ? this.hasStarted_ : void (t !== this.hasStarted_ && (this.hasStarted_ = t,
            this.hasStarted_ ? (this.addClass("vjs-has-started"),
            this.trigger("firstplay")) : this.removeClass("vjs-has-started")))
        }
        ,
        e.prototype.handleTechPlay_ = function() {
            this.removeClass("vjs-ended"),
            this.removeClass("vjs-paused"),
            this.addClass("vjs-playing"),
            this.hasStarted(!0),
            this.trigger("play")
        }
        ,
        e.prototype.handleTechWaiting_ = function() {
            var t = this;
            this.addClass("vjs-waiting"),
            this.trigger("waiting"),
            this.one("timeupdate", function() {
                return t.removeClass("vjs-waiting")
            })
        }
        ,
        e.prototype.handleTechCanPlay_ = function() {
            this.removeClass("vjs-waiting"),
            this.trigger("canplay")
        }
        ,
        e.prototype.handleTechCanPlayThrough_ = function() {
            this.removeClass("vjs-waiting"),
            this.trigger("canplaythrough")
        }
        ,
        e.prototype.handleTechPlaying_ = function() {
            this.removeClass("vjs-waiting"),
            this.trigger("playing")
        }
        ,
        e.prototype.handleTechSeeking_ = function() {
            this.addClass("vjs-seeking"),
            this.trigger("seeking")
        }
        ,
        e.prototype.handleTechSeeked_ = function() {
            this.removeClass("vjs-seeking"),
            this.trigger("seeked")
        }
        ,
        e.prototype.handleTechFirstPlay_ = function() {
            this.options_.starttime && (Ke.warn("Passing the `starttime` option to the player will be deprecated in 6.0"),
            this.currentTime(this.options_.starttime)),
            this.addClass("vjs-has-started"),
            this.trigger("firstplay")
        }
        ,
        e.prototype.handleTechPause_ = function() {
            this.removeClass("vjs-playing"),
            this.addClass("vjs-paused"),
            this.trigger("pause")
        }
        ,
        e.prototype.handleTechEnded_ = function() {
            this.addClass("vjs-ended"),
            this.options_.loop ? (this.currentTime(0),
            this.play()) : this.paused() || this.pause(),
            this.trigger("ended")
        }
        ,
        e.prototype.handleTechDurationChange_ = function() {
            this.duration(this.techGet_("duration"))
        }
        ,
        e.prototype.handleTechClick_ = function(t) {
            B(t) && this.controls_ && (this.paused() ? this.play() : this.pause())
        }
        ,
        e.prototype.handleTechTap_ = function() {
            this.userActive(!this.userActive())
        }
        ,
        e.prototype.handleTechTouchStart_ = function() {
            this.userWasActive = this.userActive()
        }
        ,
        e.prototype.handleTechTouchMove_ = function() {
            this.userWasActive && this.reportUserActivity()
        }
        ,
        e.prototype.handleTechTouchEnd_ = function(t) {
            t.preventDefault()
        }
        ,
        e.prototype.handleFullscreenChange_ = function() {
            this.isFullscreen() ? this.addClass("vjs-fullscreen") : this.removeClass("vjs-fullscreen")
        }
        ,
        e.prototype.handleStageClick_ = function() {
            this.reportUserActivity()
        }
        ,
        e.prototype.handleTechFullscreenChange_ = function(t, e) {
            e && this.isFullscreen(e.isFullscreen),
            this.trigger("fullscreenchange")
        }
        ,
        e.prototype.handleTechError_ = function() {
            var t = this.tech_.error();
            this.error(t)
        }
        ,
        e.prototype.handleTechTextData_ = function() {
            var t = null;
            arguments.length > 1 && (t = arguments[1]),
            this.trigger("textdata", t)
        }
        ,
        e.prototype.getCache = function() {
            return this.cache_
        }
        ,
        e.prototype.techCall_ = function(t, e) {
            this.ready(function() {
                if (t in Gn)
                    return Kt(this.middleware_, this.tech_, t, e);
                try {
                    this.tech_ && this.tech_[t](e)
                } catch (t) {
                    throw Ke(t),
                    t
                }
            }, !0)
        }
        ,
        e.prototype.techGet_ = function(t) {
            if (this.tech_ && this.tech_.isReady_) {
                if (t in Vn)
                    return Yt(this.middleware_, this.tech_, t);
                try {
                    return this.tech_[t]()
                } catch (e) {
                    if (void 0 === this.tech_[t])
                        throw Ke("Video.js: " + t + " method not defined for " + this.techName_ + " playback technology.", e),
                        e;
                    if ("TypeError" === e.name)
                        throw Ke("Video.js: " + t + " unavailable on " + this.techName_ + " playback technology element.", e),
                        this.tech_.isReady_ = !1,
                        e;
                    throw Ke(e),
                    e
                }
            }
        }
        ,
        e.prototype.play = function() {
            var t = this;
            if (this.playOnLoadstart_ && this.off("loadstart", this.playOnLoadstart_),
            this.isReady_) {
                if (!this.changingSrc_ && (this.src() || this.currentSrc()))
                    return this.techGet_("play");
                this.playOnLoadstart_ = function() {
                    t.playOnLoadstart_ = null,
                    lt(t.play())
                }
                ,
                this.one("loadstart", this.playOnLoadstart_)
            } else {
                if (this.playWaitingForReady_)
                    return;
                this.playWaitingForReady_ = !0,
                this.ready(function() {
                    t.playWaitingForReady_ = !1,
                    lt(t.play())
                })
            }
        }
        ,
        e.prototype.pause = function() {
            this.techCall_("pause")
        }
        ,
        e.prototype.paused = function() {
            return !1 !== this.techGet_("paused")
        }
        ,
        e.prototype.played = function() {
            return this.techGet_("played") || rt(0, 0)
        }
        ,
        e.prototype.scrubbing = function(t) {
            return void 0 === t ? this.scrubbing_ : (this.scrubbing_ = !!t,
            void (t ? this.addClass("vjs-scrubbing") : this.removeClass("vjs-scrubbing")))
        }
        ,
        e.prototype.currentTime = function(t) {
            return void 0 !== t ? void this.techCall_("setCurrentTime", t) : (this.cache_.currentTime = this.techGet_("currentTime") || 0,
            this.cache_.currentTime)
        }
        ,
        e.prototype.duration = function(t) {
            return void 0 === t ? void 0 !== this.cache_.duration ? this.cache_.duration : NaN : (t = parseFloat(t),
            t < 0 && (t = 1 / 0),
            t !== this.cache_.duration && (this.cache_.duration = t,
            t === 1 / 0 ? this.addClass("vjs-live") : this.removeClass("vjs-live"),
            this.trigger("durationchange")),
            void 0)
        }
        ,
        e.prototype.remainingTime = function() {
            return this.duration() - this.currentTime()
        }
        ,
        e.prototype.remainingTimeDisplay = function() {
            return Math.floor(this.duration()) - Math.floor(this.currentTime())
        }
        ,
        e.prototype.buffered = function() {
            var t = this.techGet_("buffered");
            return t && t.length || (t = rt(0, 0)),
            t
        }
        ,
        e.prototype.bufferedPercent = function() {
            return at(this.buffered(), this.duration())
        }
        ,
        e.prototype.bufferedEnd = function() {
            var t = this.buffered()
              , e = this.duration()
              , i = t.end(t.length - 1);
            return i > e && (i = e),
            i
        }
        ,
        e.prototype.volume = function(t) {
            var e = void 0;
            return void 0 !== t ? (e = Math.max(0, Math.min(1, parseFloat(t))),
            this.cache_.volume = e,
            this.techCall_("setVolume", e),
            void (e > 0 && this.lastVolume_(e))) : (e = parseFloat(this.techGet_("volume")),
            isNaN(e) ? 1 : e)
        }
        ,
        e.prototype.muted = function(t) {
            return void 0 !== t ? void this.techCall_("setMuted", t) : this.techGet_("muted") || !1
        }
        ,
        e.prototype.defaultMuted = function(t) {
            return void 0 !== t ? this.techCall_("setDefaultMuted", t) : this.techGet_("defaultMuted") || !1
        }
        ,
        e.prototype.lastVolume_ = function(t) {
            return void 0 !== t && 0 !== t ? void (this.cache_.lastVolume = t) : this.cache_.lastVolume
        }
        ,
        e.prototype.supportsFullScreen = function() {
            return this.techGet_("supportsFullScreen") || !1
        }
        ,
        e.prototype.isFullscreen = function(t) {
            return void 0 !== t ? void (this.isFullscreen_ = !!t) : !!this.isFullscreen_
        }
        ,
        e.prototype.requestFullscreen = function() {
            var t = Si;
            this.isFullscreen(!0),
            t.requestFullscreen ? (q(fe, t.fullscreenchange, di(this, function e(i) {
                this.isFullscreen(fe[t.fullscreenElement]),
                !1 === this.isFullscreen() && X(fe, t.fullscreenchange, e),
                this.trigger("fullscreenchange")
            })),
            this.el_[t.requestFullscreen]()) : this.tech_.supportsFullScreen() ? this.techCall_("enterFullScreen") : (this.enterFullWindow(),
            this.trigger("fullscreenchange"))
        }
        ,
        e.prototype.exitFullscreen = function() {
            var t = Si;
            this.isFullscreen(!1),
            t.requestFullscreen ? fe[t.exitFullscreen]() : this.tech_.supportsFullScreen() ? this.techCall_("exitFullScreen") : (this.exitFullWindow(),
            this.trigger("fullscreenchange"))
        }
        ,
        e.prototype.enterFullWindow = function() {
            this.isFullWindow = !0,
            this.docOrigOverflow = fe.documentElement.style.overflow,
            q(fe, "keydown", di(this, this.fullWindowOnEscKey)),
            fe.documentElement.style.overflow = "hidden",
            _(fe.body, "vjs-full-window"),
            this.trigger("enterFullWindow")
        }
        ,
        e.prototype.fullWindowOnEscKey = function(t) {
            27 === t.keyCode && (!0 === this.isFullscreen() ? this.exitFullscreen() : this.exitFullWindow())
        }
        ,
        e.prototype.exitFullWindow = function() {
            this.isFullWindow = !1,
            X(fe, "keydown", this.fullWindowOnEscKey),
            fe.documentElement.style.overflow = this.docOrigOverflow,
            b(fe.body, "vjs-full-window"),
            this.trigger("exitFullWindow")
        }
        ,
        e.prototype.canPlayType = function(t) {
            for (var e = void 0, i = 0, n = this.options_.techOrder; i < n.length; i++) {
                var r = n[i]
                  , a = Fn.getTech(r);
                if (a || (a = wi.getComponent(r)),
                a) {
                    if (a.isSupported() && (e = a.canPlayType(t)))
                        return e
                } else
                    Ke.error('The "' + r + '" tech is undefined. Skipped browser support check for that tech.')
            }
            return ""
        }
        ,
        e.prototype.selectSource = function(t) {
            var e = this
              , i = this.options_.techOrder.map(function(t) {
                return [t, Fn.getTech(t)]
            }).filter(function(t) {
                var e = t[0]
                  , i = t[1];
                return i ? i.isSupported() : (Ke.error('The "' + e + '" tech is undefined. Skipped browser support check for that tech.'),
                !1)
            })
              , n = function(t, e, i) {
                var n = void 0;
                return t.some(function(t) {
                    return e.some(function(e) {
                        if (n = i(t, e))
                            return !0
                    })
                }),
                n
            }
              , r = function(t, i) {
                var n = t[0];
                if (t[1].canPlaySource(i, e.options_[n.toLowerCase()]))
                    return {
                        source: i,
                        tech: n
                    }
            };
            return (this.options_.sourceOrder ? n(t, i, function(t) {
                return function(e, i) {
                    return t(i, e)
                }
            }(r)) : n(i, t, r)) || !1
        }
        ,
        e.prototype.src = function(t) {
            var e = this;
            if (void 0 === t)
                return this.cache_.src || "";
            var i = Wn(t);
            return i.length ? (this.cache_.sources = i,
            this.changingSrc_ = !0,
            this.cache_.source = i[0],
            qt(this, i[0], function(t, n) {
                return e.middleware_ = n,
                e.src_(t) ? i.length > 1 ? e.src(i.slice(1)) : (e.setTimeout(function() {
                    this.error({
                        code: 4,
                        message: this.localize(this.options_.notSupportedMessage)
                    })
                }, 0),
                void e.triggerReady()) : (e.changingSrc_ = !1,
                e.cache_.src = t.src,
                Xt(n, e.tech_),
                void 0)
            }),
            void 0) : void this.setTimeout(function() {
                this.error({
                    code: 4,
                    message: this.localize(this.options_.notSupportedMessage)
                })
            }, 0)
        }
        ,
        e.prototype.src_ = function(t) {
            var e = this.selectSource([t]);
            return !e || ($(e.tech, this.techName_) ? (this.ready(function() {
                this.tech_.constructor.prototype.hasOwnProperty("setSource") ? this.techCall_("setSource", t) : this.techCall_("src", t.src),
                "auto" === this.options_.preload && this.load()
            }, !0),
            !1) : (this.changingSrc_ = !0,
            this.loadTech_(e.tech, e.source),
            !1))
        }
        ,
        e.prototype.load = function() {
            this.techCall_("load")
        }
        ,
        e.prototype.reset = function() {
            this.loadTech_(this.options_.techOrder[0], null),
            this.techCall_("reset")
        }
        ,
        e.prototype.currentSources = function() {
            var t = this.currentSource()
              , e = [];
            return 0 !== Object.keys(t).length && e.push(t),
            this.cache_.sources || e
        }
        ,
        e.prototype.currentSource = function() {
            return this.cache_.source || {}
        }
        ,
        e.prototype.currentSrc = function() {
            return this.currentSource() && this.currentSource().src || ""
        }
        ,
        e.prototype.currentType = function() {
            return this.currentSource() && this.currentSource().type || ""
        }
        ,
        e.prototype.preload = function(t) {
            return void 0 !== t ? (this.techCall_("setPreload", t),
            void (this.options_.preload = t)) : this.techGet_("preload")
        }
        ,
        e.prototype.autoplay = function(t) {
            return void 0 !== t ? (this.techCall_("setAutoplay", t),
            void (this.options_.autoplay = t)) : this.techGet_("autoplay", t)
        }
        ,
        e.prototype.playsinline = function(t) {
            return void 0 !== t ? (this.techCall_("setPlaysinline", t),
            this.options_.playsinline = t,
            this) : this.techGet_("playsinline")
        }
        ,
        e.prototype.loop = function(t) {
            return void 0 !== t ? (this.techCall_("setLoop", t),
            void (this.options_.loop = t)) : this.techGet_("loop")
        }
        ,
        e.prototype.poster = function(t) {
            return void 0 === t ? this.poster_ : (t || (t = ""),
            this.poster_ = t,
            this.techCall_("setPoster", t),
            this.trigger("posterchange"),
            void 0)
        }
        ,
        e.prototype.handleTechPosterChange_ = function() {
            !this.poster_ && this.tech_ && this.tech_.poster && (this.poster_ = this.tech_.poster() || "",
            this.trigger("posterchange"))
        }
        ,
        e.prototype.controls = function(t) {
            return void 0 === t ? !!this.controls_ : (t = !!t,
            void (this.controls_ !== t && (this.controls_ = t,
            this.usingNativeControls() && this.techCall_("setControls", t),
            this.controls_ ? (this.removeClass("vjs-controls-disabled"),
            this.addClass("vjs-controls-enabled"),
            this.trigger("controlsenabled"),
            this.usingNativeControls() || this.addTechControlsListeners_()) : (this.removeClass("vjs-controls-enabled"),
            this.addClass("vjs-controls-disabled"),
            this.trigger("controlsdisabled"),
            this.usingNativeControls() || this.removeTechControlsListeners_()))))
        }
        ,
        e.prototype.usingNativeControls = function(t) {
            return void 0 === t ? !!this.usingNativeControls_ : (t = !!t,
            void (this.usingNativeControls_ !== t && (this.usingNativeControls_ = t,
            this.usingNativeControls_ ? (this.addClass("vjs-using-native-controls"),
            this.trigger("usingnativecontrols")) : (this.removeClass("vjs-using-native-controls"),
            this.trigger("usingcustomcontrols")))))
        }
        ,
        e.prototype.error = function(t) {
            return void 0 === t ? this.error_ || null : null === t ? (this.error_ = t,
            this.removeClass("vjs-error"),
            void (this.errorDisplay && this.errorDisplay.close())) : (this.error_ = new ot(t),
            this.addClass("vjs-error"),
            Ke.error("(CODE:" + this.error_.code + " " + ot.errorTypes[this.error_.code] + ")", this.error_.message, this.error_),
            void this.trigger("error"))
        }
        ,
        e.prototype.reportUserActivity = function(t) {
            this.userActivity_ = !0
        }
        ,
        e.prototype.userActive = function(t) {
            if (void 0 === t)
                return this.userActive_;
            if ((t = !!t) !== this.userActive_) {
                if (this.userActive_ = t,
                this.userActive_)
                    return this.userActivity_ = !0,
                    this.removeClass("vjs-user-inactive"),
                    this.addClass("vjs-user-active"),
                    void this.trigger("useractive");
                this.tech_ && this.tech_.one("mousemove", function(t) {
                    t.stopPropagation(),
                    t.preventDefault()
                }),
                this.userActivity_ = !1,
                this.removeClass("vjs-user-active"),
                this.addClass("vjs-user-inactive"),
                this.trigger("userinactive")
            }
        }
        ,
        e.prototype.listenForUserActivity_ = function() {
            var t = void 0
              , e = void 0
              , i = void 0
              , n = di(this, this.reportUserActivity)
              , r = function(t) {
                t.screenX === e && t.screenY === i || (e = t.screenX,
                i = t.screenY,
                n())
            }
              , a = function() {
                n(),
                this.clearInterval(t),
                t = this.setInterval(n, 250)
            }
              , o = function(e) {
                n(),
                this.clearInterval(t)
            };
            this.on("mousedown", a),
            this.on("mousemove", r),
            this.on("mouseup", o),
            this.on("keydown", n),
            this.on("keyup", n);
            var s = void 0;
            this.setInterval(function() {
                if (this.userActivity_) {
                    this.userActivity_ = !1,
                    this.userActive(!0),
                    this.clearTimeout(s);
                    var t = this.options_.inactivityTimeout;
                    t <= 0 || (s = this.setTimeout(function() {
                        this.userActivity_ || this.userActive(!1)
                    }, t))
                }
            }, 250)
        }
        ,
        e.prototype.playbackRate = function(t) {
            return void 0 !== t ? void this.techCall_("setPlaybackRate", t) : this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_("playbackRate") : 1
        }
        ,
        e.prototype.defaultPlaybackRate = function(t) {
            return void 0 !== t ? this.techCall_("setDefaultPlaybackRate", t) : this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_("defaultPlaybackRate") : 1
        }
        ,
        e.prototype.isAudio = function(t) {
            return void 0 !== t ? void (this.isAudio_ = !!t) : !!this.isAudio_
        }
        ,
        e.prototype.addTextTrack = function(t, e, i) {
            if (this.tech_)
                return this.tech_.addTextTrack(t, e, i)
        }
        ,
        e.prototype.addRemoteTextTrack = function(t, e) {
            if (this.tech_)
                return this.tech_.addRemoteTextTrack(t, e)
        }
        ,
        e.prototype.removeRemoteTextTrack = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , e = t.track
              , i = void 0 === e ? arguments[0] : e;
            if (this.tech_)
                return this.tech_.removeRemoteTextTrack(i)
        }
        ,
        e.prototype.getVideoPlaybackQuality = function() {
            return this.techGet_("getVideoPlaybackQuality")
        }
        ,
        e.prototype.videoWidth = function() {
            return this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth() || 0
        }
        ,
        e.prototype.videoHeight = function() {
            return this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight() || 0
        }
        ,
        e.prototype.language = function(t) {
            return void 0 === t ? this.language_ : void (this.language_ = String(t).toLowerCase())
        }
        ,
        e.prototype.languages = function() {
            return tt(e.prototype.options_.languages, this.languages_)
        }
        ,
        e.prototype.toJSON = function() {
            var t = tt(this.options_)
              , e = t.tracks;
            t.tracks = [];
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n = tt(n),
                n.player = void 0,
                t.tracks[i] = n
            }
            return t
        }
        ,
        e.prototype.createModal = function(t, e) {
            var i = this;
            e = e || {},
            e.content = t || "";
            var n = new Bi(this,e);
            return this.addChild(n),
            n.on("dispose", function() {
                i.removeChild(n)
            }),
            n.open(),
            n
        }
        ,
        e.getTagSettings = function(t) {
            var e = {
                sources: [],
                tracks: []
            }
              , i = w(t)
              , r = i["data-setup"];
            if (v(t, "vjs-fluid") && (i.fluid = !0),
            null !== r) {
                var a = Ii(r || "{}")
                  , o = a[0]
                  , s = a[1];
                o && Ke.error(o),
                n(i, s)
            }
            if (n(e, i),
            t.hasChildNodes())
                for (var u = t.childNodes, l = 0, c = u.length; l < c; l++) {
                    var d = u[l]
                      , h = d.nodeName.toLowerCase();
                    "source" === h ? e.sources.push(w(d)) : "track" === h && e.tracks.push(w(d))
                }
            return e
        }
        ,
        e.prototype.flexNotSupported_ = function() {
            var t = fe.createElement("i");
            return !("flexBasis"in t.style || "webkitFlexBasis"in t.style || "mozFlexBasis"in t.style || "msFlexBasis"in t.style || "msFlexOrder"in t.style)
        }
        ,
        e
    }(wi);
    kn.names.forEach(function(t) {
        var e = kn[t];
        ha.prototype[e.getterName] = function() {
            return this.tech_ ? this.tech_[e.getterName]() : (this[e.privateName] = this[e.privateName] || new e.ListClass,
            this[e.privateName])
        }
    }),
    ha.players = {};
    var fa = ue.navigator;
    ha.prototype.options_ = {
        techOrder: Fn.defaultTechOrder_,
        html5: {},
        flash: {},
        inactivityTimeout: 2e3,
        playbackRates: [],
        children: ["mediaLoader", "posterImage", "textTrackDisplay", "loadingSpinner", "bigPlayButton", "controlBar", "errorDisplay", "textTrackSettings"],
        language: fa && (fa.languages && fa.languages[0] || fa.userLanguage || fa.language) || "en",
        languages: {},
        notSupportedMessage: "No compatible source was found for this media."
    },
    ["ended", "seeking", "seekable", "networkState", "readyState"].forEach(function(t) {
        ha.prototype[t] = function() {
            return this.techGet_(t)
        }
    }),
    da.forEach(function(t) {
        ha.prototype["handleTech" + J(t) + "_"] = function() {
            return this.trigger(t)
        }
    }),
    wi.registerComponent("Player", ha);
    var pa = {}
      , ga = function(t) {
        return pa.hasOwnProperty(t)
    }
      , ma = function(t) {
        return ga(t) ? pa[t] : void 0
    }
      , ya = function(t, e) {
        t.activePlugins_ = t.activePlugins_ || {},
        t.activePlugins_[e] = !0
    }
      , va = function(t, e, i) {
        var n = (i ? "before" : "") + "pluginsetup";
        t.trigger(n, e),
        t.trigger(n + ":" + e.name, e)
    }
      , _a = function(t, e) {
        var i = function() {
            va(this, {
                name: t,
                plugin: e,
                instance: null
            }, !0);
            var i = e.apply(this, arguments);
            return ya(this, t),
            va(this, {
                name: t,
                plugin: e,
                instance: i
            }),
            i
        };
        return Object.keys(e).forEach(function(t) {
            i[t] = e[t]
        }),
        i
    }
      , ba = function(t, e) {
        return e.prototype.name = t,
        function() {
            va(this, {
                name: t,
                plugin: e,
                instance: null
            }, !0);
            for (var i = arguments.length, n = Array(i), r = 0; r < i; r++)
                n[r] = arguments[r];
            var a = new (Function.prototype.bind.apply(e, [null].concat([this].concat(n))));
            return this[t] = function() {
                return a
            }
            ,
            va(this, a.getEventHash()),
            a
        }
    }
      , xa = function() {
        function t(e) {
            if (Ue(this, t),
            this.constructor === t)
                throw new Error("Plugin must be sub-classed; not directly instantiated.");
            this.player = e,
            Z(this),
            delete this.trigger,
            Q(this, this.constructor.defaultState),
            ya(e, this.name),
            this.dispose = di(this, this.dispose),
            e.on("dispose", this.dispose)
        }
        return t.prototype.version = function() {
            return this.constructor.VERSION
        }
        ,
        t.prototype.getEventHash = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return t.name = this.name,
            t.plugin = this.constructor,
            t.instance = this,
            t
        }
        ,
        t.prototype.trigger = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return Y(this.eventBusEl_, t, this.getEventHash(e))
        }
        ,
        t.prototype.handleStateChanged = function(t) {}
        ,
        t.prototype.dispose = function() {
            var t = this.name
              , e = this.player;
            this.trigger("dispose"),
            this.off(),
            e.off("dispose", this.dispose),
            e.activePlugins_[t] = !1,
            this.player = this.state = null,
            e[t] = ba(t, pa[t])
        }
        ,
        t.isBasic = function(e) {
            var i = "string" == typeof e ? ma(e) : e;
            return "function" == typeof i && !t.prototype.isPrototypeOf(i.prototype)
        }
        ,
        t.registerPlugin = function(e, i) {
            if ("string" != typeof e)
                throw new Error('Illegal plugin name, "' + e + '", must be a string, was ' + (void 0 === e ? "undefined" : Be(e)) + ".");
            if (ga(e))
                Ke.warn('A plugin named "' + e + '" already exists. You may want to avoid re-registering plugins!');
            else if (ha.prototype.hasOwnProperty(e))
                throw new Error('Illegal plugin name, "' + e + '", cannot share a name with an existing player method!');
            if ("function" != typeof i)
                throw new Error('Illegal plugin for "' + e + '", must be a function, was ' + (void 0 === i ? "undefined" : Be(i)) + ".");
            return pa[e] = i,
            "plugin" !== e && (t.isBasic(i) ? ha.prototype[e] = _a(e, i) : ha.prototype[e] = ba(e, i)),
            i
        }
        ,
        t.deregisterPlugin = function(t) {
            if ("plugin" === t)
                throw new Error("Cannot de-register base plugin.");
            ga(t) && (delete pa[t],
            delete ha.prototype[t])
        }
        ,
        t.getPlugins = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.keys(pa)
              , e = void 0;
            return t.forEach(function(t) {
                var i = ma(t);
                i && (e = e || {},
                e[t] = i)
            }),
            e
        }
        ,
        t.getPluginVersion = function(t) {
            var e = ma(t);
            return e && e.VERSION || ""
        }
        ,
        t
    }();
    xa.getPlugin = ma,
    xa.BASE_PLUGIN_NAME = "plugin",
    xa.registerPlugin("plugin", xa),
    ha.prototype.usingPlugin = function(t) {
        return !!this.activePlugins_ && !0 === this.activePlugins_[t]
    }
    ,
    ha.prototype.hasPlugin = function(t) {
        return !!ga(t)
    }
    ;
    var Ta = function(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : Be(e)));
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (t.super_ = e)
    }
      , wa = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , i = function() {
            t.apply(this, arguments)
        }
          , n = {};
        "object" === (void 0 === e ? "undefined" : Be(e)) ? (e.constructor !== Object.prototype.constructor && (i = e.constructor),
        n = e) : "function" == typeof e && (i = e),
        Ta(i, t);
        for (var r in n)
            n.hasOwnProperty(r) && (i.prototype[r] = n[r]);
        return i
    };
    if ("undefined" == typeof HTMLVideoElement && d() && (fe.createElement("video"),
    fe.createElement("audio"),
    fe.createElement("track"),
    fe.createElement("video-js")),
    ne.hooks_ = {},
    ne.hooks = function(t, e) {
        return ne.hooks_[t] = ne.hooks_[t] || [],
        e && (ne.hooks_[t] = ne.hooks_[t].concat(e)),
        ne.hooks_[t]
    }
    ,
    ne.hook = function(t, e) {
        ne.hooks(t, e)
    }
    ,
    ne.hookOnce = function(t, e) {
        ne.hooks(t, [].concat(e).map(function(e) {
            return function i() {
                ne.removeHook(t, i),
                e.apply(void 0, arguments)
            }
        }))
    }
    ,
    ne.removeHook = function(t, e) {
        var i = ne.hooks(t).indexOf(e);
        return !(i <= -1 || (ne.hooks_[t] = ne.hooks_[t].slice(),
        ne.hooks_[t].splice(i, 1),
        0))
    }
    ,
    !0 !== ue.VIDEOJS_NO_DYNAMIC_STYLE && d()) {
        var Sa = Qe(".vjs-styles-defaults");
        if (!Sa) {
            Sa = li("vjs-styles-defaults");
            var ka = Qe("head");
            ka && ka.insertBefore(Sa, ka.firstChild),
            ci(Sa, "\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ")
        }
    }
    return z(1, ne),
    ne.VERSION = ae,
    ne.options = ha.prototype.options_,
    ne.getPlayers = function() {
        return ha.players
    }
    ,
    ne.players = ha.players,
    ne.getComponent = wi.getComponent,
    ne.registerComponent = function(t, e) {
        Fn.isTech(e) && Ke.warn("The " + t + " tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"),
        wi.registerComponent.call(wi, t, e)
    }
    ,
    ne.getTech = Fn.getTech,
    ne.registerTech = Fn.registerTech,
    ne.use = Wt,
    ne.browser = Re,
    ne.TOUCH_ENABLED = Me,
    ne.extend = wa,
    ne.mergeOptions = tt,
    ne.bind = di,
    ne.registerPlugin = xa.registerPlugin,
    ne.plugin = function(t, e) {
        return Ke.warn("videojs.plugin() is deprecated; use videojs.registerPlugin() instead"),
        xa.registerPlugin(t, e)
    }
    ,
    ne.getPlugins = xa.getPlugins,
    ne.getPlugin = xa.getPlugin,
    ne.getPluginVersion = xa.getPluginVersion,
    ne.addLanguage = function(t, e) {
        var i;
        return t = ("" + t).toLowerCase(),
        ne.options.languages = tt(ne.options.languages, (i = {},
        i[t] = e,
        i)),
        ne.options.languages[t]
    }
    ,
    ne.log = Ke,
    ne.createTimeRange = ne.createTimeRanges = rt,
    ne.formatTime = $t,
    ne.parseUrl = Ji,
    ne.isCrossOrigin = en,
    ne.EventTarget = fi,
    ne.on = q,
    ne.one = K,
    ne.off = X,
    ne.trigger = Y,
    ne.xhr = pn,
    ne.TextTrack = yn,
    ne.AudioTrack = vn,
    ne.VideoTrack = _n,
    ["isEl", "isTextNode", "createEl", "hasClass", "addClass", "removeClass", "toggleClass", "setAttributes", "getAttributes", "emptyEl", "appendContent", "insertContent"].forEach(function(t) {
        ne[t] = function() {
            return Ke.warn("videojs." + t + "() is deprecated; use videojs.dom." + t + "() instead"),
            $e[t].apply(null, arguments)
        }
    }),
    ne.computedStyle = s,
    ne.dom = $e,
    ne.url = nn,
    ne
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("video.js")) : "function" == typeof define && define.amd ? define(["video.js"], e) : t.videojsFlash = e(t.videojs)
}(this, function(t) {
    "use strict";
    function e(t) {
        return t.streamingFormats = {
            "rtmp/mp4": "MP4",
            "rtmp/flv": "FLV"
        },
        t.streamFromParts = function(t, e) {
            return t + "&" + e
        }
        ,
        t.streamToParts = function(t) {
            var e = {
                connection: "",
                stream: ""
            };
            if (!t)
                return e;
            var i = t.search(/&(?!\w+=)/)
              , n = void 0;
            return i !== -1 ? n = i + 1 : (i = n = t.lastIndexOf("/") + 1,
            0 === i && (i = n = t.length)),
            e.connection = t.substring(0, i),
            e.stream = t.substring(n, t.length),
            e
        }
        ,
        t.isStreamingType = function(e) {
            return e in t.streamingFormats
        }
        ,
        t.RTMP_RE = /^rtmp[set]?:\/\//i,
        t.isStreamingSrc = function(e) {
            return t.RTMP_RE.test(e)
        }
        ,
        t.rtmpSourceHandler = {},
        t.rtmpSourceHandler.canPlayType = function(e) {
            return t.isStreamingType(e) ? "maybe" : ""
        }
        ,
        t.rtmpSourceHandler.canHandleSource = function(e, i) {
            var n = t.rtmpSourceHandler.canPlayType(e.type);
            return n ? n : t.isStreamingSrc(e.src) ? "maybe" : ""
        }
        ,
        t.rtmpSourceHandler.handleSource = function(e, i, n) {
            var r = t.streamToParts(e.src);
            i.setRtmpConnection(r.connection),
            i.setRtmpStream(r.stream)
        }
        ,
        t.registerSourceHandler(t.rtmpSourceHandler),
        t
    }
    function i(t) {
        var e = t.charAt(0).toUpperCase() + t.slice(1);
        x["set" + e] = function(e) {
            return this.el_.vjs_setProperty(t, e)
        }
    }
    function n(t) {
        x[t] = function() {
            return this.el_.vjs_getProperty(t)
        }
    }
    t = "default"in t ? t["default"] : t;
    var r, a = "5.4.1", o = "2.0.1", s = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    r = "undefined" != typeof window ? window : "undefined" != typeof s ? s : "undefined" != typeof self ? self : {};
    for (var u = r, l = function(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }, c = function(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }, d = function(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }, h = t.getComponent("Tech"), f = t.dom, p = t.url, g = t.createTimeRange, m = t.mergeOptions, y = u && u.navigator || {}, v = function(t) {
        function e(i, n) {
            l(this, e);
            var r = d(this, t.call(this, i, n));
            return i.source && r.ready(function() {
                this.setSource(i.source)
            }, !0),
            i.startTime && r.ready(function() {
                this.load(),
                this.play(),
                this.currentTime(i.startTime)
            }, !0),
            u.videojs = u.videojs || {},
            u.videojs.Flash = u.videojs.Flash || {},
            u.videojs.Flash.onReady = e.onReady,
            u.videojs.Flash.onEvent = e.onEvent,
            u.videojs.Flash.onError = e.onError,
            r.on("seeked", function() {
                this.lastSeekTarget_ = void 0
            }),
            r
        }
        return c(e, t),
        e.prototype.createEl = function() {
            var t = this.options_;
            t.swf || (t.swf = "//vjs.zencdn.net/swf/" + a + "/video-js.swf");
            var i = t.techId
              , n = m({
                readyFunction: "videojs.Flash.onReady",
                eventProxyFunction: "videojs.Flash.onEvent",
                errorEventProxyFunction: "videojs.Flash.onError",
                autoplay: t.autoplay,
                preload: t.preload,
                loop: t.loop,
                muted: t.muted
            }, t.flashVars)
              , r = m({
                wmode: "opaque",
                bgcolor: "#000000"
            }, t.params)
              , o = m({
                id: i,
                name: i,
                "class": "vjs-tech"
            }, t.attributes);
            return this.el_ = e.embed(t.swf, n, r, o),
            this.el_.tech = this,
            this.el_
        }
        ,
        e.prototype.play = function() {
            this.ended() && this.setCurrentTime(0),
            this.el_.vjs_play()
        }
        ,
        e.prototype.pause = function() {
            this.el_.vjs_pause()
        }
        ,
        e.prototype.src = function(t) {
            return void 0 === t ? this.currentSrc() : this.setSrc(t)
        }
        ,
        e.prototype.setSrc = function(t) {
            var e = this;
            t = p.getAbsoluteURL(t),
            this.el_.vjs_src(t),
            this.autoplay() && this.setTimeout(function() {
                return e.play()
            }, 0)
        }
        ,
        e.prototype.seeking = function() {
            return void 0 !== this.lastSeekTarget_
        }
        ,
        e.prototype.setCurrentTime = function(e) {
            var i = this.seekable();
            i.length && (e = e > i.start(0) ? e : i.start(0),
            e = e < i.end(i.length - 1) ? e : i.end(i.length - 1),
            this.lastSeekTarget_ = e,
            this.trigger("seeking"),
            this.el_.vjs_setProperty("currentTime", e),
            t.prototype.setCurrentTime.call(this))
        }
        ,
        e.prototype.currentTime = function() {
            return this.seeking() ? this.lastSeekTarget_ || 0 : this.el_.vjs_getProperty("currentTime")
        }
        ,
        e.prototype.currentSrc = function() {
            return this.currentSource_ ? this.currentSource_.src : this.el_.vjs_getProperty("currentSrc")
        }
        ,
        e.prototype.duration = function i() {
            if (0 === this.readyState())
                return NaN;
            var i = this.el_.vjs_getProperty("duration");
            return i >= 0 ? i : 1 / 0
        }
        ,
        e.prototype.load = function() {
            this.el_.vjs_load()
        }
        ,
        e.prototype.poster = function() {
            this.el_.vjs_getProperty("poster")
        }
        ,
        e.prototype.setPoster = function() {}
        ,
        e.prototype.seekable = function() {
            var t = this.duration();
            return 0 === t ? g() : g(0, t)
        }
        ,
        e.prototype.buffered = function() {
            var t = this.el_.vjs_getProperty("buffered");
            return 0 === t.length ? g() : g(t[0][0], t[0][1])
        }
        ,
        e.prototype.supportsFullScreen = function() {
            return !1
        }
        ,
        e.prototype.enterFullScreen = function() {
            return !1
        }
        ,
        e.prototype.getVideoPlaybackQuality = function() {
            var t = this.el_.vjs_getProperty("getVideoPlaybackQuality");
            return u.performance && "function" == typeof u.performance.now ? t.creationTime = u.performance.now() : u.performance && u.performance.timing && "number" == typeof u.performance.timing.navigationStart && (t.creationTime = u.Date.now() - u.performance.timing.navigationStart),
            t
        }
        ,
        e
    }(h), _ = ["rtmpConnection", "rtmpStream", "preload", "defaultPlaybackRate", "playbackRate", "autoplay", "loop", "controls", "volume", "muted", "defaultMuted"], b = ["networkState", "readyState", "initialTime", "startOffsetTime", "paused", "ended", "videoWidth", "videoHeight"], x = v.prototype, T = 0; T < _.length; T++)
        n(_[T]),
        i(_[T]);
    for (var w = 0; w < b.length; w++)
        n(b[w]);
    return v.isSupported = function() {
        return v.version()[0] >= 10
    }
    ,
    h.withSourceHandlers(v),
    v.nativeSourceHandler = {},
    v.nativeSourceHandler.canPlayType = function(t) {
        return t in v.formats ? "maybe" : ""
    }
    ,
    v.nativeSourceHandler.canHandleSource = function(t, e) {
        function i(t) {
            var e = p.getFileExtension(t);
            return e ? "video/" + e : ""
        }
        var n = void 0;
        return n = t.type ? t.type.replace(/;.*/, "").toLowerCase() : i(t.src),
        v.nativeSourceHandler.canPlayType(n)
    }
    ,
    v.nativeSourceHandler.handleSource = function(t, e, i) {
        e.setSrc(t.src)
    }
    ,
    v.nativeSourceHandler.dispose = function() {}
    ,
    v.registerSourceHandler(v.nativeSourceHandler),
    v.formats = {
        "video/flv": "FLV",
        "video/x-flv": "FLV",
        "video/mp4": "MP4",
        "video/m4v": "MP4"
    },
    v.onReady = function(t) {
        var e = f.$("#" + t)
          , i = e && e.tech;
        i && i.el() && v.checkReady(i)
    }
    ,
    v.checkReady = function(t) {
        t.el() && (t.el().vjs_getProperty ? t.triggerReady() : this.setTimeout(function() {
            v.checkReady(t)
        }, 50))
    }
    ,
    v.onEvent = function(t, e) {
        var i = f.$("#" + t).tech
          , n = Array.prototype.slice.call(arguments, 2);
        i.setTimeout(function() {
            i.trigger(e, n)
        }, 1)
    }
    ,
    v.onError = function(t, e) {
        var i = f.$("#" + t).tech;
        return "srcnotfound" === e ? i.error(4) : void i.error("FLASH: " + e)
    }
    ,
    v.version = function() {
        var t = "0,0,0";
        try {
            t = new u.ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
        } catch (e) {
            try {
                y.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (t = (y.plugins["Shockwave Flash 2.0"] || y.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1])
            } catch (i) {}
        }
        return t.split(",")
    }
    ,
    v.embed = function(t, e, i, n) {
        var r = v.getEmbedCode(t, e, i, n)
          , a = f.createEl("div", {
            innerHTML: r
        }).childNodes[0];
        return a
    }
    ,
    v.getEmbedCode = function(t, e, i, n) {
        var r = '<object type="application/x-shockwave-flash" '
          , a = ""
          , o = ""
          , s = "";
        return e && Object.getOwnPropertyNames(e).forEach(function(t) {
            a += t + "=" + e[t] + "&amp;"
        }),
        i = m({
            movie: t,
            flashvars: a,
            allowScriptAccess: "always",
            allowNetworking: "all"
        }, i),
        Object.getOwnPropertyNames(i).forEach(function(t) {
            o += '<param name="' + t + '" value="' + i[t] + '" />'
        }),
        n = m({
            data: t,
            width: "100%",
            height: "100%"
        }, n),
        Object.getOwnPropertyNames(n).forEach(function(t) {
            s += t + '="' + n[t] + '" '
        }),
        "" + r + s + ">" + o + "</object>"
    }
    ,
    e(v),
    h.getTech("Flash") ? (t.log.warn("Not using videojs-flash as it appears to already be registered"),
    t.log.warn("videojs-flash should only be used with video.js@6 and above")) : t.registerTech("Flash", v),
    v.VERSION = o,
    v
}),
!function t(e, i, n) {
    function r(o, s) {
        if (!i[o]) {
            if (!e[o]) {
                var u = "function" == typeof require && require;
                if (!s && u)
                    return u(o, !0);
                if (a)
                    return a(o, !0);
                var l = new Error("Cannot find module '" + o + "'");
                throw l.code = "MODULE_NOT_FOUND",
                l
            }
            var c = i[o] = {
                exports: {}
            };
            e[o][0].call(c.exports, function(t) {
                var i = e[o][1][t];
                return r(i || t)
            }, c, c.exports, t, e, i, n)
        }
        return i[o].exports
    }
    for (var a = "function" == typeof require && require, o = 0; o < n.length; o++)
        r(n[o]);
    return r
}({
    1: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = function() {
            function t(t, e) {
                var i = []
                  , n = !0
                  , r = !1
                  , a = void 0;
                try {
                    for (var o, s = t[Symbol.iterator](); !(n = (o = s.next()).done) && (i.push(o.value),
                    !e || i.length !== e); n = !0)
                        ;
                } catch (u) {
                    r = !0,
                    a = u
                } finally {
                    try {
                        !n && s["return"] && s["return"]()
                    } finally {
                        if (r)
                            throw a
                    }
                }
                return i
            }
            return function(e, i) {
                if (Array.isArray(e))
                    return e;
                if (Symbol.iterator in Object(e))
                    return t(e, i);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }()
          , r = t(32)
          , a = function(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }(r)
          , o = function(t, e) {
            for (var i = t.cues, n = 0; n < i.length; n++) {
                var r = i[n];
                if (e >= r.adStartTime && e <= r.adEndTime)
                    return r
            }
            return null
        }
          , s = function(t, e) {
            var i = arguments.length <= 2 || void 0 === arguments[2] ? 0 : arguments[2];
            if (t.segments)
                for (var r = i, s = void 0, u = 0; u < t.segments.length; u++) {
                    var l = t.segments[u];
                    if (s || (s = o(e, r + l.duration / 2)),
                    s) {
                        if ("cueIn"in l) {
                            s.endTime = r,
                            s.adEndTime = r,
                            r += l.duration,
                            s = null;
                            continue
                        }
                        if (r < s.endTime) {
                            r += l.duration;
                            continue
                        }
                        s.endTime += l.duration
                    } else if ("cueOut"in l && (s = new a["default"].VTTCue(r,r + l.duration,l.cueOut),
                    s.adStartTime = r,
                    s.adEndTime = r + parseFloat(l.cueOut),
                    e.addCue(s)),
                    "cueOutCont"in l) {
                        var c = void 0
                          , d = void 0
                          , h = l.cueOutCont.split("/").map(parseFloat)
                          , f = n(h, 2);
                        c = f[0],
                        d = f[1],
                        s = new a["default"].VTTCue(r,r + l.duration,""),
                        s.adStartTime = r - c,
                        s.adEndTime = s.adStartTime + d,
                        e.addCue(s)
                    }
                    r += l.duration
                }
        };
        i["default"] = {
            updateAdCues: s,
            findAdCue: o
        },
        e.exports = i["default"]
    }
    , {}],
    2: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = function(t, e) {
            return t.start(e) + "-" + t.end(e)
        }
          , r = function(t, e) {
            var i = t.toString(16);
            return "00".substring(0, 2 - i.length) + i + (e % 2 ? " " : "")
        }
          , a = function(t) {
            return t >= 32 && t < 126 ? String.fromCharCode(t) : "."
        }
          , o = function(t) {
            var e = {};
            return Object.keys(t).forEach(function(i) {
                var n = t[i];
                ArrayBuffer.isView(n) ? e[i] = {
                    bytes: n.buffer,
                    byteOffset: n.byteOffset,
                    byteLength: n.byteLength
                } : e[i] = n
            }),
            e
        }
          , s = function(t) {
            var e = t.byterange || {
                length: 1 / 0,
                offset: 0
            };
            return [e.length, e.offset, t.resolvedUri].join(",")
        }
          , u = {
            hexDump: function(t) {
                for (var e = Array.prototype.slice.call(t), i = "", n = void 0, o = void 0, s = 0; s < e.length / 16; s++)
                    n = e.slice(16 * s, 16 * s + 16).map(r).join(""),
                    o = e.slice(16 * s, 16 * s + 16).map(a).join(""),
                    i += n + " " + o + "\n";
                return i
            },
            tagDump: function(t) {
                return u.hexDump(t.bytes)
            },
            textRanges: function(t) {
                var e = ""
                  , i = void 0;
                for (i = 0; i < t.length; i++)
                    e += n(t, i) + " ";
                return e
            },
            createTransferableMessage: o,
            initSegmentId: s
        };
        i["default"] = u,
        e.exports = i["default"]
    }
    , {}],
    3: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i["default"] = {
            GOAL_BUFFER_LENGTH: 30,
            MAX_GOAL_BUFFER_LENGTH: 60,
            GOAL_BUFFER_LENGTH_RATE: 1,
            BANDWIDTH_VARIANCE: 1.2,
            BUFFER_LOW_WATER_LINE: 0,
            MAX_BUFFER_LOW_WATER_LINE: 30,
            BUFFER_LOW_WATER_LINE_RATE: 1
        },
        e.exports = i["default"]
    }
    , {}],
    4: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t(32)
          , r = function(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }(n)
          , a = t(25)
          , o = t(2)
          , s = function(t) {
            t.onmessage = function(t) {
                var e = t.data
                  , i = new Uint8Array(e.encrypted.bytes,e.encrypted.byteOffset,e.encrypted.byteLength)
                  , n = new Uint32Array(e.key.bytes,e.key.byteOffset,e.key.byteLength / 4)
                  , s = new Uint32Array(e.iv.bytes,e.iv.byteOffset,e.iv.byteLength / 4);
                new a.Decrypter(i,n,s,function(t, i) {
                    r["default"].postMessage((0,
                    o.createTransferableMessage)({
                        source: e.source,
                        decrypted: i
                    }), [i.buffer])
                }
                )
            }
        };
        i["default"] = function(t) {
            return new s(t)
        }
        ,
        e.exports = i["default"]
    }
    , {}],
    5: [function(t, e, i) {
        (function(e) {
            "use strict";
            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            function r(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            function a(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var o = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value"in n && (n.writable = !0),
                        Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i),
                    n && t(e, n),
                    e
                }
            }()
              , s = function(t, e, i) {
                for (var n = !0; n; ) {
                    var r = t
                      , a = e
                      , o = i;
                    n = !1,
                    null === r && (r = Function.prototype);
                    var s = Object.getOwnPropertyDescriptor(r, a);
                    if (void 0 !== s) {
                        if ("value"in s)
                            return s.value;
                        var u = s.get;
                        return void 0 === u ? void 0 : u.call(o)
                    }
                    var l = Object.getPrototypeOf(r);
                    if (null === l)
                        return;
                    t = l,
                    e = a,
                    i = o,
                    n = !0,
                    s = l = void 0
                }
            }
              , u = t(9)
              , l = n(u)
              , c = t(11)
              , d = t(16)
              , h = n(d)
              , f = t(20)
              , p = n(f)
              , g = t(12)
              , m = n(g)
              , y = "undefined" != typeof window ? window.videojs : void 0 !== e ? e.videojs : null
              , v = n(y)
              , _ = t(1)
              , b = n(_)
              , x = t(18)
              , T = n(x)
              , w = t(65)
              , S = t(76)
              , k = n(S)
              , C = t(4)
              , E = n(C)
              , A = t(3)
              , O = n(A)
              , P = t(19)
              , I = t(6)
              , L = void 0
              , j = {
                videoCodec: "avc1",
                videoObjectTypeIndicator: ".4d400d",
                audioProfile: "2"
            }
              , M = ["mediaRequests", "mediaRequestsAborted", "mediaRequestsTimedout", "mediaRequestsErrored", "mediaTransferDuration", "mediaBytesTransferred"]
              , D = function(t) {
                return this.audioSegmentLoader_[t] + this.mainSegmentLoader_[t]
            }
              , R = function(t) {
                return t.replace(/avc1\.(\d+)\.(\d+)/i, function(t) {
                    return (0,
                    w.translateLegacyCodecs)([t])[0]
                })
            };
            i.mapLegacyAvcCodecs_ = R;
            var B = function(t, e, i) {
                return t + "/" + e + '; codecs="' + i.filter(function(t) {
                    return !!t
                }).join(", ") + '"'
            }
              , U = function(t) {
                return t.segments && t.segments.length && t.segments[0].map ? "mp4" : "mp2t"
            }
              , N = function(t) {
                var e = t.attributes || {};
                return e.CODECS ? (0,
                P.parseCodecs)(e.CODECS) : j
            }
              , F = function(t, e) {
                var i = U(e)
                  , n = N(e)
                  , r = e.attributes || {}
                  , a = !0
                  , o = !1;
                if (!e)
                    return [];
                if (t.mediaGroups.AUDIO && r.AUDIO) {
                    var s = t.mediaGroups.AUDIO[r.AUDIO];
                    if (s) {
                        o = !0,
                        a = !1;
                        for (var u in s)
                            if (!s[u].uri) {
                                a = !0;
                                break
                            }
                    }
                }
                o && !n.audioProfile && (v["default"].log.warn("Multiple audio tracks present but no audio codec string is specified. Attempting to use the default audio codec (mp4a.40.2)"),
                n.audioProfile = j.audioProfile);
                var l = {};
                n.videoCodec && (l.video = "" + n.videoCodec + n.videoObjectTypeIndicator),
                n.audioProfile && (l.audio = "mp4a.40." + n.audioProfile);
                var c = B("audio", i, [l.audio])
                  , d = B("video", i, [l.video])
                  , h = B("video", i, [l.video, l.audio]);
                return o ? !a && l.video ? [d, c] : [h, c] : l.video ? [h] : [c]
            };
            i.mimeTypesForPlaylist_ = F;
            var H = function(t) {
                function e(t) {
                    var i = this;
                    r(this, e),
                    s(Object.getPrototypeOf(e.prototype), "constructor", this).call(this);
                    var n = t.url
                      , a = t.withCredentials
                      , o = t.mode
                      , u = t.tech
                      , c = t.bandwidth
                      , d = t.externHls
                      , f = t.useCueTags
                      , g = t.blacklistDuration
                      , m = t.enableLowInitialPlaylist;
                    if (!n)
                        throw new Error("A non-empty playlist URL is required");
                    L = d,
                    this.withCredentials = a,
                    this.tech_ = u,
                    this.hls_ = u.hls,
                    this.mode_ = o,
                    this.useCueTags_ = f,
                    this.blacklistDuration = g,
                    this.enableLowInitialPlaylist = m,
                    this.useCueTags_ && (this.cueTagsTrack_ = this.tech_.addTextTrack("metadata", "ad-cues"),
                    this.cueTagsTrack_.inBandMetadataTrackDispatchType = ""),
                    this.requestOptions_ = {
                        withCredentials: this.withCredentials,
                        timeout: null
                    },
                    this.mediaTypes_ = (0,
                    I.createMediaTypes)(),
                    this.mediaSource = new v["default"].MediaSource({
                        mode: o
                    }),
                    this.mediaSource.addEventListener("sourceopen", this.handleSourceOpen_.bind(this)),
                    this.seekable_ = v["default"].createTimeRanges(),
                    this.hasPlayed_ = function() {
                        return !1
                    }
                    ,
                    this.syncController_ = new T["default"](t),
                    this.segmentMetadataTrack_ = u.addRemoteTextTrack({
                        kind: "metadata",
                        label: "segment-metadata"
                    }, !1).track,
                    this.decrypter_ = (0,
                    k["default"])(E["default"]);
                    var y = {
                        hls: this.hls_,
                        mediaSource: this.mediaSource,
                        currentTime: this.tech_.currentTime.bind(this.tech_),
                        seekable: function() {
                            return i.seekable()
                        },
                        seeking: function() {
                            return i.tech_.seeking()
                        },
                        duration: function() {
                            return i.mediaSource.duration
                        },
                        hasPlayed: function() {
                            return i.hasPlayed_()
                        },
                        goalBufferLength: function() {
                            return i.goalBufferLength()
                        },
                        bandwidth: c,
                        syncController: this.syncController_,
                        decrypter: this.decrypter_
                    };
                    this.masterPlaylistLoader_ = new l["default"](n,this.hls_,this.withCredentials),
                    this.setupMasterPlaylistLoaderListeners_(),
                    this.mainSegmentLoader_ = new h["default"](v["default"].mergeOptions(y, {
                        segmentMetadataTrack: this.segmentMetadataTrack_,
                        loaderType: "main"
                    }),t),
                    this.audioSegmentLoader_ = new h["default"](v["default"].mergeOptions(y, {
                        loaderType: "audio"
                    }),t),
                    this.subtitleSegmentLoader_ = new p["default"](v["default"].mergeOptions(y, {
                        loaderType: "vtt"
                    }),t),
                    this.setupSegmentLoaderListeners_(),
                    M.forEach(function(t) {
                        i[t + "_"] = D.bind(i, t)
                    }),
                    this.masterPlaylistLoader_.load()
                }
                return a(e, t),
                o(e, [{
                    key: "setupMasterPlaylistLoaderListeners_",
                    value: function() {
                        var t = this;
                        this.masterPlaylistLoader_.on("loadedmetadata", function() {
                            var e = t.masterPlaylistLoader_.media()
                              , i = 1.5 * t.masterPlaylistLoader_.targetDuration * 1e3;
                            (0,
                            c.isLowestEnabledRendition)(t.masterPlaylistLoader_.master, t.masterPlaylistLoader_.media()) ? t.requestOptions_.timeout = 0 : t.requestOptions_.timeout = i,
                            e.endList && "none" !== t.tech_.preload() && (t.mainSegmentLoader_.playlist(e, t.requestOptions_),
                            t.mainSegmentLoader_.load()),
                            (0,
                            I.setupMediaGroups)({
                                segmentLoaders: {
                                    AUDIO: t.audioSegmentLoader_,
                                    SUBTITLES: t.subtitleSegmentLoader_,
                                    main: t.mainSegmentLoader_
                                },
                                tech: t.tech_,
                                requestOptions: t.requestOptions_,
                                masterPlaylistLoader: t.masterPlaylistLoader_,
                                mode: t.mode_,
                                hls: t.hls_,
                                master: t.master(),
                                mediaTypes: t.mediaTypes_,
                                blacklistCurrentPlaylist: t.blacklistCurrentPlaylist.bind(t)
                            }),
                            t.triggerPresenceUsage_(t.master(), e);
                            try {
                                t.setupSourceBuffers_()
                            } catch (n) {
                                return v["default"].log.warn("Failed to create SourceBuffers", n),
                                t.mediaSource.endOfStream("decode")
                            }
                            t.setupFirstPlay(),
                            t.trigger("selectedinitialmedia")
                        }),
                        this.masterPlaylistLoader_.on("loadedplaylist", function() {
                            var e = t.masterPlaylistLoader_.media();
                            if (!e) {
                                var i = void 0;
                                return t.enableLowInitialPlaylist && (i = t.selectInitialPlaylist()),
                                i || (i = t.selectPlaylist()),
                                t.initialMedia_ = i,
                                void t.masterPlaylistLoader_.media(t.initialMedia_)
                            }
                            t.useCueTags_ && t.updateAdCues_(e),
                            t.mainSegmentLoader_.playlist(e, t.requestOptions_),
                            t.updateDuration(),
                            t.tech_.paused() || t.mainSegmentLoader_.load(),
                            e.endList || function() {
                                var e = function() {
                                    var e = t.seekable();
                                    0 !== e.length && t.mediaSource.addSeekableRange_(e.start(0), e.end(0))
                                };
                                t.duration() !== 1 / 0 ? function() {
                                    var i = function n() {
                                        t.duration() === 1 / 0 ? e() : t.tech_.one("durationchange", n)
                                    };
                                    t.tech_.one("durationchange", i)
                                }() : e()
                            }()
                        }),
                        this.masterPlaylistLoader_.on("error", function() {
                            t.blacklistCurrentPlaylist(t.masterPlaylistLoader_.error)
                        }),
                        this.masterPlaylistLoader_.on("mediachanging", function() {
                            t.mainSegmentLoader_.abort(),
                            t.mainSegmentLoader_.pause()
                        }),
                        this.masterPlaylistLoader_.on("mediachange", function() {
                            var e = t.masterPlaylistLoader_.media()
                              , i = 1.5 * t.masterPlaylistLoader_.targetDuration * 1e3;
                            (0,
                            c.isLowestEnabledRendition)(t.masterPlaylistLoader_.master, t.masterPlaylistLoader_.media()) ? t.requestOptions_.timeout = 0 : t.requestOptions_.timeout = i,
                            t.mainSegmentLoader_.playlist(e, t.requestOptions_),
                            t.mainSegmentLoader_.load(),
                            t.tech_.trigger({
                                type: "mediachange",
                                bubbles: !0
                            })
                        }),
                        this.masterPlaylistLoader_.on("playlistunchanged", function() {
                            var e = t.masterPlaylistLoader_.media();
                            t.stuckAtPlaylistEnd_(e) && (t.blacklistCurrentPlaylist({
                                message: "Playlist no longer updating."
                            }),
                            t.tech_.trigger("playliststuck"))
                        }),
                        this.masterPlaylistLoader_.on("renditiondisabled", function() {
                            t.tech_.trigger({
                                type: "usage",
                                name: "hls-rendition-disabled"
                            })
                        }),
                        this.masterPlaylistLoader_.on("renditionenabled", function() {
                            t.tech_.trigger({
                                type: "usage",
                                name: "hls-rendition-enabled"
                            })
                        })
                    }
                }, {
                    key: "triggerPresenceUsage_",
                    value: function(t, e) {
                        var i = t.mediaGroups || {}
                          , n = !0
                          , r = Object.keys(i.AUDIO);
                        for (var a in i.AUDIO)
                            for (var o in i.AUDIO[a]) {
                                var s = i.AUDIO[a][o];
                                s.uri || (n = !1)
                            }
                        n && this.tech_.trigger({
                            type: "usage",
                            name: "hls-demuxed"
                        }),
                        Object.keys(i.SUBTITLES).length && this.tech_.trigger({
                            type: "usage",
                            name: "hls-webvtt"
                        }),
                        L.Playlist.isAes(e) && this.tech_.trigger({
                            type: "usage",
                            name: "hls-aes"
                        }),
                        L.Playlist.isFmp4(e) && this.tech_.trigger({
                            type: "usage",
                            name: "hls-fmp4"
                        }),
                        r.length && Object.keys(i.AUDIO[r[0]]).length > 1 && this.tech_.trigger({
                            type: "usage",
                            name: "hls-alternate-audio"
                        }),
                        this.useCueTags_ && this.tech_.trigger({
                            type: "usage",
                            name: "hls-playlist-cue-tags"
                        })
                    }
                }, {
                    key: "setupSegmentLoaderListeners_",
                    value: function() {
                        var t = this;
                        this.mainSegmentLoader_.on("bandwidthupdate", function() {
                            var e = t.selectPlaylist()
                              , i = t.masterPlaylistLoader_.media()
                              , n = t.tech_.buffered()
                              , r = n.length ? n.end(n.length - 1) - t.tech_.currentTime() : 0
                              , a = t.bufferLowWaterLine();
                            (!i.endList || t.duration() < O["default"].MAX_BUFFER_LOW_WATER_LINE || e.attributes.BANDWIDTH < i.attributes.BANDWIDTH || r >= a) && t.masterPlaylistLoader_.media(e),
                            t.tech_.trigger("bandwidthupdate")
                        }),
                        this.mainSegmentLoader_.on("progress", function() {
                            t.trigger("progress")
                        }),
                        this.mainSegmentLoader_.on("error", function() {
                            t.blacklistCurrentPlaylist(t.mainSegmentLoader_.error())
                        }),
                        this.mainSegmentLoader_.on("syncinfoupdate", function() {
                            t.onSyncInfoUpdate_()
                        }),
                        this.mainSegmentLoader_.on("timestampoffset", function() {
                            t.tech_.trigger({
                                type: "usage",
                                name: "hls-timestamp-offset"
                            })
                        }),
                        this.audioSegmentLoader_.on("syncinfoupdate", function() {
                            t.onSyncInfoUpdate_()
                        }),
                        this.mainSegmentLoader_.on("ended", function() {
                            t.onEndOfStream()
                        }),
                        this.mainSegmentLoader_.on("earlyabort", function() {
                            t.blacklistCurrentPlaylist({
                                message: "Aborted early because there isn't enough bandwidth to complete the request without rebuffering."
                            }, 120)
                        }),
                        this.mainSegmentLoader_.on("reseteverything", function() {
                            t.tech_.trigger("hls-reset")
                        }),
                        this.mainSegmentLoader_.on("segmenttimemapping", function(e) {
                            t.tech_.trigger({
                                type: "hls-segment-time-mapping",
                                mapping: e.mapping
                            })
                        }),
                        this.audioSegmentLoader_.on("ended", function() {
                            t.onEndOfStream()
                        })
                    }
                }, {
                    key: "mediaSecondsLoaded_",
                    value: function() {
                        return Math.max(this.audioSegmentLoader_.mediaSecondsLoaded + this.mainSegmentLoader_.mediaSecondsLoaded)
                    }
                }, {
                    key: "load",
                    value: function() {
                        this.mainSegmentLoader_.load(),
                        this.mediaTypes_.AUDIO.activePlaylistLoader && this.audioSegmentLoader_.load(),
                        this.mediaTypes_.SUBTITLES.activePlaylistLoader && this.subtitleSegmentLoader_.load()
                    }
                }, {
                    key: "fastQualityChange_",
                    value: function() {
                        var t = this.selectPlaylist();
                        t !== this.masterPlaylistLoader_.media() && (this.masterPlaylistLoader_.media(t),
                        this.mainSegmentLoader_.resetLoader())
                    }
                }, {
                    key: "play",
                    value: function() {
                        if (!this.setupFirstPlay()) {
                            this.tech_.ended() && this.tech_.setCurrentTime(0),
                            this.hasPlayed_() && this.load();
                            var t = this.tech_.seekable();
                            return this.tech_.duration() === 1 / 0 && this.tech_.currentTime() < t.start(0) ? this.tech_.setCurrentTime(t.end(t.length - 1)) : void 0
                        }
                    }
                }, {
                    key: "setupFirstPlay",
                    value: function() {
                        var t = this
                          , e = this.masterPlaylistLoader_.media();
                        if (!e || this.tech_.paused() || this.hasPlayed_())
                            return !1;
                        if (!e.endList) {
                            var i = function() {
                                var e = t.seekable();
                                return e.length ? v["default"].browser.IE_VERSION && "html5" === t.mode_ && 0 === t.tech_.readyState() ? (t.tech_.one("loadedmetadata", function() {
                                    t.trigger("firstplay"),
                                    t.tech_.setCurrentTime(e.end(0)),
                                    t.hasPlayed_ = function() {
                                        return !0
                                    }
                                }),
                                {
                                    v: !1
                                }) : (t.trigger("firstplay"),
                                void t.tech_.setCurrentTime(e.end(0))) : {
                                    v: !1
                                }
                            }();
                            if ("object" == typeof i)
                                return i.v
                        }
                        return this.hasPlayed_ = function() {
                            return !0
                        }
                        ,
                        this.load(),
                        !0
                    }
                }, {
                    key: "handleSourceOpen_",
                    value: function() {
                        try {
                            this.setupSourceBuffers_()
                        } catch (t) {
                            return v["default"].log.warn("Failed to create Source Buffers", t),
                            this.mediaSource.endOfStream("decode")
                        }
                        this.tech_.autoplay() && this.tech_.play(),
                        this.trigger("sourceopen")
                    }
                }, {
                    key: "onEndOfStream",
                    value: function() {
                        var t = this.mainSegmentLoader_.ended_;
                        this.mediaTypes_.AUDIO.activePlaylistLoader && (t = t && this.audioSegmentLoader_.ended_),
                        t && this.mediaSource.endOfStream()
                    }
                }, {
                    key: "stuckAtPlaylistEnd_",
                    value: function(t) {
                        if (!this.seekable().length)
                            return !1;
                        var e = this.syncController_.getExpiredTime(t, this.mediaSource.duration);
                        if (null === e)
                            return !1;
                        var i = L.Playlist.playlistEnd(t, e)
                          , n = this.tech_.currentTime()
                          , r = this.tech_.buffered();
                        if (!r.length)
                            return i - n <= m["default"].SAFE_TIME_DELTA;
                        var a = r.end(r.length - 1);
                        return a - n <= m["default"].SAFE_TIME_DELTA && i - a <= m["default"].SAFE_TIME_DELTA
                    }
                }, {
                    key: "blacklistCurrentPlaylist",
                    value: function(t, e) {
                        void 0 === t && (t = {});
                        var i = void 0
                          , n = void 0;
                        if (i = t.playlist || this.masterPlaylistLoader_.media(),
                        e = e || t.blacklistDuration || this.blacklistDuration,
                        !i) {
                            this.error = t;
                            try {
                                return this.mediaSource.endOfStream("network")
                            } catch (r) {
                                return this.trigger("error")
                            }
                        }
                        var a = 1 === this.masterPlaylistLoader_.master.playlists.filter(c.isEnabled).length;
                        return a ? (v["default"].log.warn("Problem encountered with the current HLS playlist. Trying again since it is the final playlist."),
                        this.tech_.trigger("retryplaylist"),
                        this.masterPlaylistLoader_.load(a)) : (i.excludeUntil = Date.now() + 1e3 * e,
                        this.tech_.trigger("blacklistplaylist"),
                        this.tech_.trigger({
                            type: "usage",
                            name: "hls-rendition-blacklisted"
                        }),
                        n = this.selectPlaylist(),
                        v["default"].log.warn("Problem encountered with the current HLS playlist." + (t.message ? " " + t.message : "") + " Switching to another playlist."),
                        this.masterPlaylistLoader_.media(n))
                    }
                }, {
                    key: "pauseLoading",
                    value: function() {
                        this.mainSegmentLoader_.pause(),
                        this.mediaTypes_.AUDIO.activePlaylistLoader && this.audioSegmentLoader_.pause(),
                        this.mediaTypes_.SUBTITLES.activePlaylistLoader && this.subtitleSegmentLoader_.pause()
                    }
                }, {
                    key: "setCurrentTime",
                    value: function(t) {
                        var e = m["default"].findRange(this.tech_.buffered(), t);
                        return this.masterPlaylistLoader_ && this.masterPlaylistLoader_.media() && this.masterPlaylistLoader_.media().segments ? e && e.length && "flash" !== this.mode_ ? t : (this.mainSegmentLoader_.resetEverything(),
                        this.mainSegmentLoader_.abort(),
                        this.mediaTypes_.AUDIO.activePlaylistLoader && (this.audioSegmentLoader_.resetEverything(),
                        this.audioSegmentLoader_.abort()),
                        this.mediaTypes_.SUBTITLES.activePlaylistLoader && (this.subtitleSegmentLoader_.resetEverything(),
                        this.subtitleSegmentLoader_.abort()),
                        void this.load()) : 0
                    }
                }, {
                    key: "duration",
                    value: function() {
                        return this.masterPlaylistLoader_ ? this.mediaSource ? this.mediaSource.duration : L.Playlist.duration(this.masterPlaylistLoader_.media()) : 0
                    }
                }, {
                    key: "seekable",
                    value: function() {
                        return this.seekable_
                    }
                }, {
                    key: "onSyncInfoUpdate_",
                    value: function() {
                        var t = void 0
                          , e = void 0;
                        if (this.masterPlaylistLoader_) {
                            var i = this.masterPlaylistLoader_.media();
                            if (i) {
                                var n = this.syncController_.getExpiredTime(i, this.mediaSource.duration);
                                if (null !== n && (t = L.Playlist.seekable(i, n),
                                0 !== t.length)) {
                                    if (this.mediaTypes_.AUDIO.activePlaylistLoader) {
                                        if (i = this.mediaTypes_.AUDIO.activePlaylistLoader.media(),
                                        null === (n = this.syncController_.getExpiredTime(i, this.mediaSource.duration)))
                                            return;
                                        if (e = L.Playlist.seekable(i, n),
                                        0 === e.length)
                                            return
                                    }
                                    e ? e.start(0) > t.end(0) || t.start(0) > e.end(0) ? this.seekable_ = t : this.seekable_ = v["default"].createTimeRanges([[e.start(0) > t.start(0) ? e.start(0) : t.start(0), e.end(0) < t.end(0) ? e.end(0) : t.end(0)]]) : this.seekable_ = t,
                                    this.tech_.trigger("seekablechanged")
                                }
                            }
                        }
                    }
                }, {
                    key: "updateDuration",
                    value: function() {
                        var t = this
                          , e = this.mediaSource.duration
                          , i = L.Playlist.duration(this.masterPlaylistLoader_.media())
                          , n = this.tech_.buffered()
                          , r = function a() {
                            t.mediaSource.duration = i,
                            t.tech_.trigger("durationchange"),
                            t.mediaSource.removeEventListener("sourceopen", a)
                        };
                        n.length > 0 && (i = Math.max(i, n.end(n.length - 1))),
                        e !== i && ("open" !== this.mediaSource.readyState ? this.mediaSource.addEventListener("sourceopen", r) : r())
                    }
                }, {
                    key: "dispose",
                    value: function() {
                        var t = this;
                        this.decrypter_.terminate(),
                        this.masterPlaylistLoader_.dispose(),
                        this.mainSegmentLoader_.dispose(),
                        ["AUDIO", "SUBTITLES"].forEach(function(e) {
                            var i = t.mediaTypes_[e].groups;
                            for (var n in i)
                                i[n].forEach(function(t) {
                                    t.playlistLoader && t.playlistLoader.dispose()
                                })
                        }),
                        this.audioSegmentLoader_.dispose(),
                        this.subtitleSegmentLoader_.dispose()
                    }
                }, {
                    key: "master",
                    value: function() {
                        return this.masterPlaylistLoader_.master
                    }
                }, {
                    key: "media",
                    value: function() {
                        return this.masterPlaylistLoader_.media() || this.initialMedia_
                    }
                }, {
                    key: "setupSourceBuffers_",
                    value: function() {
                        var t = this.masterPlaylistLoader_.media()
                          , e = void 0;
                        if (t && "open" === this.mediaSource.readyState) {
                            if (e = F(this.masterPlaylistLoader_.master, t),
                            e.length < 1)
                                return this.error = "No compatible SourceBuffer configuration for the variant stream:" + t.resolvedUri,
                                this.mediaSource.endOfStream("decode");
                            this.mainSegmentLoader_.mimeType(e[0]),
                            e[1] && this.audioSegmentLoader_.mimeType(e[1]),
                            this.excludeIncompatibleVariants_(t)
                        }
                    }
                }, {
                    key: "excludeIncompatibleVariants_",
                    value: function(t) {
                        var e = this.masterPlaylistLoader_.master
                          , i = 2
                          , n = null
                          , r = void 0;
                        t.attributes.CODECS && (r = (0,
                        P.parseCodecs)(t.attributes.CODECS),
                        n = r.videoCodec,
                        i = r.codecCount),
                        e.playlists.forEach(function(t) {
                            var e = {
                                codecCount: 2,
                                videoCodec: null
                            };
                            if (t.attributes.CODECS) {
                                var r = t.attributes.CODECS;
                                e = (0,
                                P.parseCodecs)(r),
                                window.MediaSource && window.MediaSource.isTypeSupported && !window.MediaSource.isTypeSupported('video/mp4; codecs="' + R(r) + '"') && (t.excludeUntil = 1 / 0)
                            }
                            e.codecCount !== i && (t.excludeUntil = 1 / 0),
                            e.videoCodec !== n && (t.excludeUntil = 1 / 0)
                        })
                    }
                }, {
                    key: "updateAdCues_",
                    value: function(t) {
                        var e = 0
                          , i = this.seekable();
                        i.length && (e = i.start(0)),
                        b["default"].updateAdCues(t, this.cueTagsTrack_, e)
                    }
                }, {
                    key: "goalBufferLength",
                    value: function() {
                        var t = this.tech_.currentTime()
                          , e = O["default"].GOAL_BUFFER_LENGTH
                          , i = O["default"].GOAL_BUFFER_LENGTH_RATE
                          , n = Math.max(e, O["default"].MAX_GOAL_BUFFER_LENGTH);
                        return Math.min(e + t * i, n)
                    }
                }, {
                    key: "bufferLowWaterLine",
                    value: function() {
                        var t = this.tech_.currentTime()
                          , e = O["default"].BUFFER_LOW_WATER_LINE
                          , i = O["default"].BUFFER_LOW_WATER_LINE_RATE
                          , n = Math.max(e, O["default"].MAX_BUFFER_LOW_WATER_LINE);
                        return Math.min(e + t * i, n)
                    }
                }]),
                e
            }(v["default"].EventTarget);
            i.MasterPlaylistController = H
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    6: [function(t, e, i) {
        (function(e) {
            "use strict";
            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var r = "undefined" != typeof window ? window.videojs : void 0 !== e ? e.videojs : null
              , a = n(r)
              , o = t(9)
              , s = n(o)
              , u = function() {}
              , l = function(t) {
                var e = t["default"] ? "main" : "alternative";
                return t.characteristics && t.characteristics.indexOf("public.accessibility.describes-video") >= 0 && (e = "main-desc"),
                e
            }
              , c = function(t, e) {
                t.abort(),
                t.pause(),
                e && e.activePlaylistLoader && (e.activePlaylistLoader.pause(),
                e.activePlaylistLoader = null)
            };
            i.stopLoaders = c;
            var d = function(t, e) {
                e.activePlaylistLoader = t,
                t.load()
            };
            i.startLoaders = d;
            var h = function(t, e) {
                return function() {
                    var i = e.segmentLoaders
                      , n = i[t]
                      , r = i.main
                      , a = e.mediaTypes[t]
                      , o = a.activeTrack()
                      , s = a.activeGroup(o)
                      , u = a.activePlaylistLoader;
                    if (c(n, a),
                    s) {
                        if (!s.playlistLoader)
                            return void (u && r.resetEverything());
                        n.resyncLoader(),
                        d(s.playlistLoader, a)
                    }
                }
            };
            i.onGroupChanged = h;
            var f = function(t, e) {
                return function() {
                    var i = e.segmentLoaders
                      , n = i[t]
                      , r = i.main
                      , a = e.mediaTypes[t]
                      , o = a.activeTrack()
                      , s = a.activeGroup(o)
                      , u = a.activePlaylistLoader;
                    if (c(n, a),
                    s) {
                        if (!s.playlistLoader)
                            return void r.resetEverything();
                        if (u === s.playlistLoader)
                            return void d(s.playlistLoader, a);
                        n.track && n.track(o),
                        n.resetEverything(),
                        d(s.playlistLoader, a)
                    }
                }
            };
            i.onTrackChanged = f;
            var p = {
                AUDIO: function(t, e) {
                    return function() {
                        var i = e.segmentLoaders[t]
                          , n = e.mediaTypes[t]
                          , r = e.blacklistCurrentPlaylist;
                        c(i, n);
                        var o = n.activeTrack()
                          , s = n.activeGroup()
                          , u = (s.filter(function(t) {
                            return t["default"]
                        })[0] || s[0]).id
                          , l = n.tracks[u];
                        if (o === l)
                            return void r({
                                message: "Problem encountered loading the default audio track."
                            });
                        a["default"].log.warn("Problem encountered loading the alternate audio track.Switching back to default.");
                        for (var d in n.tracks)
                            n.tracks[d].enabled = n.tracks[d] === l;
                        n.onTrackChanged()
                    }
                },
                SUBTITLES: function(t, e) {
                    return function() {
                        var i = e.segmentLoaders[t]
                          , n = e.mediaTypes[t];
                        a["default"].log.warn("Problem encountered loading the subtitle track.Disabling subtitle track."),
                        c(i, n);
                        var r = n.activeTrack();
                        r && (r.mode = "disabled"),
                        n.onTrackChanged()
                    }
                }
            };
            i.onError = p;
            var g = {
                AUDIO: function(t, e, i) {
                    if (e) {
                        var n = i.tech
                          , r = i.requestOptions
                          , a = i.segmentLoaders[t];
                        e.on("loadedmetadata", function() {
                            var t = e.media();
                            a.playlist(t, r),
                            (!n.paused() || t.endList && "none" !== n.preload()) && a.load()
                        }),
                        e.on("loadedplaylist", function() {
                            a.playlist(e.media(), r),
                            n.paused() || a.load()
                        }),
                        e.on("error", p[t](t, i))
                    }
                },
                SUBTITLES: function(t, e, i) {
                    var n = i.tech
                      , r = i.requestOptions
                      , a = i.segmentLoaders[t]
                      , o = i.mediaTypes[t];
                    e.on("loadedmetadata", function() {
                        var t = e.media();
                        a.playlist(t, r),
                        a.track(o.activeTrack()),
                        (!n.paused() || t.endList && "none" !== n.preload()) && a.load()
                    }),
                    e.on("loadedplaylist", function() {
                        a.playlist(e.media(), r),
                        n.paused() || a.load()
                    }),
                    e.on("error", p[t](t, i))
                }
            };
            i.setupListeners = g;
            var m = {
                AUDIO: function(t, e) {
                    var i = e.mode
                      , n = e.hls
                      , r = e.segmentLoaders[t]
                      , o = e.requestOptions.withCredentials
                      , u = e.master.mediaGroups
                      , c = e.mediaTypes[t]
                      , d = c.groups
                      , h = c.tracks;
                    u[t] && 0 !== Object.keys(u[t]).length && "html5" === i || (u[t] = {
                        main: {
                            "default": {
                                "default": !0
                            }
                        }
                    });
                    for (var f in u[t]) {
                        d[f] || (d[f] = []);
                        for (var m in u[t][f]) {
                            var y = u[t][f][m]
                              , v = void 0;
                            if (v = y.resolvedUri ? new s["default"](y.resolvedUri,n,o) : null,
                            y = a["default"].mergeOptions({
                                id: m,
                                playlistLoader: v
                            }, y),
                            g[t](t, y.playlistLoader, e),
                            d[f].push(y),
                            "undefined" == typeof h[m]) {
                                var _ = new a["default"].AudioTrack({
                                    id: m,
                                    kind: l(y),
                                    enabled: !1,
                                    language: y.language,
                                    "default": y["default"],
                                    label: m
                                });
                                h[m] = _
                            }
                        }
                    }
                    r.on("error", p[t](t, e))
                },
                SUBTITLES: function(t, e) {
                    var i = e.tech
                      , n = e.hls
                      , r = e.segmentLoaders[t]
                      , o = e.requestOptions.withCredentials
                      , u = e.master.mediaGroups
                      , l = e.mediaTypes[t]
                      , c = l.groups
                      , d = l.tracks;
                    for (var h in u[t]) {
                        c[h] || (c[h] = []);
                        for (var f in u[t][h])
                            if (!u[t][h][f].forced) {
                                var m = u[t][h][f];
                                if (m = a["default"].mergeOptions({
                                    id: f,
                                    playlistLoader: new s["default"](m.resolvedUri,n,o)
                                }, m),
                                g[t](t, m.playlistLoader, e),
                                c[h].push(m),
                                "undefined" == typeof d[f]) {
                                    var y = i.addRemoteTextTrack({
                                        id: f,
                                        kind: "subtitles",
                                        enabled: !1,
                                        language: m.language,
                                        label: f
                                    }, !1).track;
                                    d[f] = y
                                }
                            }
                    }
                    r.on("error", p[t](t, e))
                },
                "CLOSED-CAPTIONS": function(t, e) {
                    var i = e.tech
                      , n = e.master.mediaGroups
                      , r = e.mediaTypes[t]
                      , o = r.groups
                      , s = r.tracks;
                    for (var u in n[t]) {
                        o[u] || (o[u] = []);
                        for (var l in n[t][u]) {
                            var c = n[t][u][l];
                            if (c.instreamId.match(/CC\d/) && (o[u].push(a["default"].mergeOptions({
                                id: l
                            }, c)),
                            "undefined" == typeof s[l])) {
                                var d = i.addRemoteTextTrack({
                                    id: c.instreamId,
                                    kind: "captions",
                                    enabled: !1,
                                    language: c.language,
                                    label: l
                                }, !1).track;
                                s[l] = d
                            }
                        }
                    }
                }
            };
            i.initialize = m;
            var y = function(t, e) {
                return function(i) {
                    var n = e.masterPlaylistLoader
                      , r = e.mediaTypes[t].groups
                      , a = n.media();
                    if (!a)
                        return null;
                    var o = null;
                    return a.attributes[t] && (o = r[a.attributes[t]]),
                    o = o || r.main,
                    void 0 === i ? o : null === i ? null : o.filter(function(t) {
                        return t.id === i.id
                    })[0] || null
                }
            };
            i.activeGroup = y;
            var v = {
                AUDIO: function(t, e) {
                    return function() {
                        var i = e.mediaTypes[t].tracks;
                        for (var n in i)
                            if (i[n].enabled)
                                return i[n];
                        return null
                    }
                },
                SUBTITLES: function(t, e) {
                    return function() {
                        var i = e.mediaTypes[t].tracks;
                        for (var n in i)
                            if ("showing" === i[n].mode)
                                return i[n];
                        return null
                    }
                }
            };
            i.activeTrack = v;
            var _ = function(t) {
                ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach(function(e) {
                    m[e](e, t)
                });
                var e = t.mediaTypes
                  , i = t.masterPlaylistLoader
                  , n = t.tech
                  , r = t.hls;
                ["AUDIO", "SUBTITLES"].forEach(function(i) {
                    e[i].activeGroup = y(i, t),
                    e[i].activeTrack = v[i](i, t),
                    e[i].onGroupChanged = h(i, t),
                    e[i].onTrackChanged = f(i, t)
                });
                var a = e.AUDIO.activeGroup()
                  , o = (a.filter(function(t) {
                    return t["default"]
                })[0] || a[0]).id;
                e.AUDIO.tracks[o].enabled = !0,
                e.AUDIO.onTrackChanged(),
                i.on("mediachange", function() {
                    ["AUDIO", "SUBTITLES"].forEach(function(t) {
                        return e[t].onGroupChanged()
                    })
                });
                var s = function() {
                    e.AUDIO.onTrackChanged(),
                    n.trigger({
                        type: "usage",
                        name: "hls-audio-change"
                    })
                };
                n.audioTracks().addEventListener("change", s),
                n.remoteTextTracks().addEventListener("change", e.SUBTITLES.onTrackChanged),
                r.on("dispose", function() {
                    n.audioTracks().removeEventListener("change", s),
                    n.remoteTextTracks().removeEventListener("change", e.SUBTITLES.onTrackChanged)
                }),
                n.clearTracks("audio");
                for (var u in e.AUDIO.tracks)
                    n.audioTracks().addTrack(e.AUDIO.tracks[u])
            };
            i.setupMediaGroups = _;
            var b = function() {
                var t = {};
                return ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach(function(e) {
                    t[e] = {
                        groups: {},
                        tracks: {},
                        activePlaylistLoader: null,
                        activeGroup: u,
                        activeTrack: u,
                        onGroupChanged: u,
                        onTrackChanged: u
                    }
                }),
                t
            };
            i.createMediaTypes = b
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    7: [function(t, e, i) {
        (function(e) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var n = "undefined" != typeof window ? window.videojs : void 0 !== e ? e.videojs : null
              , r = function(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }(n)
              , a = t(2)
              , o = {
                FAILURE: 2,
                TIMEOUT: -101,
                ABORTED: -102
            };
            i.REQUEST_ERRORS = o;
            var s = function(t) {
                var e = void 0;
                return e = t.offset + t.length - 1,
                "bytes=" + t.offset + "-" + e
            }
              , u = function(t) {
                var e = {};
                return t.byterange && (e.Range = s(t.byterange)),
                e
            }
              , l = function(t) {
                t.forEach(function(t) {
                    t.abort()
                })
            }
              , c = function(t) {
                return {
                    bandwidth: t.bandwidth,
                    bytesReceived: t.bytesReceived || 0,
                    roundTripTime: t.roundTripTime || 0
                }
            }
              , d = function(t) {
                var e = t.target
                  , i = Date.now() - e.requestTime
                  , n = {
                    bandwidth: 1 / 0,
                    bytesReceived: 0,
                    roundTripTime: i || 0
                };
                return n.bytesReceived = t.loaded,
                n.bandwidth = Math.floor(n.bytesReceived / n.roundTripTime * 8 * 1e3),
                n
            }
              , h = function(t, e) {
                return e.timedout ? {
                    status: e.status,
                    message: "HLS request timed-out at URL: " + e.uri,
                    code: o.TIMEOUT,
                    xhr: e
                } : e.aborted ? {
                    status: e.status,
                    message: "HLS request aborted at URL: " + e.uri,
                    code: o.ABORTED,
                    xhr: e
                } : t ? {
                    status: e.status,
                    message: "HLS request errored at URL: " + e.uri,
                    code: o.FAILURE,
                    xhr: e
                } : null
            }
              , f = function(t, e) {
                return function(i, n) {
                    var r = n.response
                      , a = h(i, n);
                    if (a)
                        return e(a, t);
                    if (16 !== r.byteLength)
                        return e({
                            status: n.status,
                            message: "Invalid HLS key at URL: " + n.uri,
                            code: o.FAILURE,
                            xhr: n
                        }, t);
                    var s = new DataView(r);
                    return t.key.bytes = new Uint32Array([s.getUint32(0), s.getUint32(4), s.getUint32(8), s.getUint32(12)]),
                    e(null, t)
                }
            }
              , p = function(t, e) {
                return function(i, n) {
                    var r = n.response
                      , a = h(i, n);
                    return a ? e(a, t) : 0 === r.byteLength ? e({
                        status: n.status,
                        message: "Empty HLS segment content at URL: " + n.uri,
                        code: o.FAILURE,
                        xhr: n
                    }, t) : (t.map.bytes = new Uint8Array(n.response),
                    e(null, t))
                }
            }
              , g = function(t, e) {
                return function(i, n) {
                    var r = n.response
                      , a = h(i, n);
                    return a ? e(a, t) : 0 === r.byteLength ? e({
                        status: n.status,
                        message: "Empty HLS segment content at URL: " + n.uri,
                        code: o.FAILURE,
                        xhr: n
                    }, t) : (t.stats = c(n),
                    t.key ? t.encryptedBytes = new Uint8Array(n.response) : t.bytes = new Uint8Array(n.response),
                    e(null, t))
                }
            }
              , m = function(t, e, i) {
                var n = function r(n) {
                    if (n.data.source === e.requestId) {
                        t.removeEventListener("message", r);
                        var a = n.data.decrypted;
                        return e.bytes = new Uint8Array(a.bytes,a.byteOffset,a.byteLength),
                        i(null, e)
                    }
                };
                t.addEventListener("message", n),
                t.postMessage((0,
                a.createTransferableMessage)({
                    source: e.requestId,
                    encrypted: e.encryptedBytes,
                    key: e.key.bytes,
                    iv: e.key.iv
                }), [e.encryptedBytes.buffer, e.key.bytes.buffer])
            }
              , y = function(t) {
                return t.reduce(function(t, e) {
                    return e.code > t.code ? e : t
                })
            }
              , v = function(t, e, i) {
                var n = []
                  , r = 0;
                return function(a, o) {
                    if (a && (l(t),
                    n.push(a)),
                    (r += 1) === t.length) {
                        if (o.endOfAllRequests = Date.now(),
                        n.length > 0) {
                            var s = y(n);
                            return i(s, o)
                        }
                        return o.encryptedBytes ? m(e, o, i) : i(null, o)
                    }
                }
            }
              , _ = function(t, e) {
                return function(i) {
                    return t.stats = r["default"].mergeOptions(t.stats, d(i)),
                    !t.stats.firstBytesReceivedAt && t.stats.bytesReceived && (t.stats.firstBytesReceivedAt = Date.now()),
                    e(i, t)
                }
            }
              , b = function(t, e, i, n, a, o) {
                var s = []
                  , c = v(s, i, o);
                if (n.key) {
                    var d = r["default"].mergeOptions(e, {
                        uri: n.key.resolvedUri,
                        responseType: "arraybuffer"
                    })
                      , h = f(n, c)
                      , m = t(d, h);
                    s.push(m)
                }
                if (n.map && !n.map.bytes) {
                    var y = r["default"].mergeOptions(e, {
                        uri: n.map.resolvedUri,
                        responseType: "arraybuffer",
                        headers: u(n.map)
                    })
                      , b = p(n, c)
                      , x = t(y, b);
                    s.push(x)
                }
                var T = r["default"].mergeOptions(e, {
                    uri: n.resolvedUri,
                    responseType: "arraybuffer",
                    headers: u(n)
                })
                  , w = g(n, c)
                  , S = t(T, w);
                return S.addEventListener("progress", _(n, a)),
                s.push(S),
                function() {
                    return l(s)
                }
            };
            i.mediaSegmentRequest = b
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    8: [function(t, e, i) {
        (function(n) {
            "use strict";
            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            function a(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var o = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value"in n && (n.writable = !0),
                        Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i),
                    n && t(e, n),
                    e
                }
            }()
              , s = t(32)
              , u = r(s)
              , l = t(12)
              , c = r(l)
              , d = "undefined" != typeof window ? window.videojs : void 0 !== n ? n.videojs : null
              , h = r(d)
              , f = ["seeking", "seeked", "pause", "playing", "error"]
              , p = function() {
                function t(e) {
                    var i = this;
                    a(this, t),
                    this.tech_ = e.tech,
                    this.seekable = e.seekable,
                    this.consecutiveUpdates = 0,
                    this.lastRecordedTime = null,
                    this.timer_ = null,
                    this.checkCurrentTimeTimeout_ = null,
                    e.debug && (this.logger_ = h["default"].log.bind(h["default"], "playback-watcher ->")),
                    this.logger_("initialize");
                    var n = function() {
                        return i.monitorCurrentTime_()
                    }
                      , r = function() {
                        return i.techWaiting_()
                    }
                      , o = function() {
                        return i.cancelTimer_()
                    }
                      , s = function() {
                        return i.fixesBadSeeks_()
                    };
                    this.tech_.on("seekablechanged", s),
                    this.tech_.on("waiting", r),
                    this.tech_.on(f, o),
                    this.tech_.on("canplay", n),
                    this.dispose = function() {
                        i.logger_("dispose"),
                        i.tech_.off("seekablechanged", s),
                        i.tech_.off("waiting", r),
                        i.tech_.off(f, o),
                        i.tech_.off("canplay", n),
                        i.checkCurrentTimeTimeout_ && u["default"].clearTimeout(i.checkCurrentTimeTimeout_),
                        i.cancelTimer_()
                    }
                }
                return o(t, [{
                    key: "monitorCurrentTime_",
                    value: function() {
                        this.checkCurrentTime_(),
                        this.checkCurrentTimeTimeout_ && u["default"].clearTimeout(this.checkCurrentTimeTimeout_),
                        this.checkCurrentTimeTimeout_ = u["default"].setTimeout(this.monitorCurrentTime_.bind(this), 250)
                    }
                }, {
                    key: "checkCurrentTime_",
                    value: function() {
                        if (this.tech_.seeking() && this.fixesBadSeeks_())
                            return this.consecutiveUpdates = 0,
                            void (this.lastRecordedTime = this.tech_.currentTime());
                        if (!this.tech_.paused() && !this.tech_.seeking()) {
                            var t = this.tech_.currentTime()
                              , e = this.tech_.buffered();
                            if (this.lastRecordedTime === t && (!e.length || t + c["default"].SAFE_TIME_DELTA >= e.end(e.length - 1)))
                                return this.techWaiting_();
                            this.consecutiveUpdates >= 5 && t === this.lastRecordedTime ? (this.consecutiveUpdates++,
                            this.waiting_()) : t === this.lastRecordedTime ? this.consecutiveUpdates++ : (this.consecutiveUpdates = 0,
                            this.lastRecordedTime = t)
                        }
                    }
                }, {
                    key: "cancelTimer_",
                    value: function() {
                        this.consecutiveUpdates = 0,
                        this.timer_ && (this.logger_("cancelTimer_"),
                        clearTimeout(this.timer_)),
                        this.timer_ = null
                    }
                }, {
                    key: "fixesBadSeeks_",
                    value: function() {
                        var t = this.tech_.seeking()
                          , e = this.seekable()
                          , i = this.tech_.currentTime()
                          , n = void 0;
                        return t && this.afterSeekableWindow_(e, i) && (n = e.end(e.length - 1)),
                        t && this.beforeSeekableWindow_(e, i) && (n = e.start(0) + c["default"].SAFE_TIME_DELTA),
                        void 0 !== n && (this.logger_("Trying to seek outside of seekable at time " + i + " with seekable range " + c["default"].printableRange(e) + ". Seeking to " + n + "."),
                        this.tech_.setCurrentTime(n),
                        !0)
                    }
                }, {
                    key: "waiting_",
                    value: function() {
                        if (!this.techWaiting_()) {
                            var t = this.tech_.currentTime()
                              , e = this.tech_.buffered()
                              , i = c["default"].findRange(e, t);
                            return i.length && t + 3 <= i.end(0) ? (this.cancelTimer_(),
                            this.tech_.setCurrentTime(t),
                            this.logger_("Stopped at " + t + " while inside a buffered region [" + i.start(0) + " -> " + i.end(0) + "]. Attempting to resume playback by seeking to the current time."),
                            void this.tech_.trigger({
                                type: "usage",
                                name: "hls-unknown-waiting"
                            })) : void 0
                        }
                    }
                }, {
                    key: "techWaiting_",
                    value: function() {
                        var t = this.seekable()
                          , e = this.tech_.currentTime();
                        if (this.tech_.seeking() && this.fixesBadSeeks_())
                            return !0;
                        if (this.tech_.seeking() || null !== this.timer_)
                            return !0;
                        if (this.beforeSeekableWindow_(t, e)) {
                            var i = t.end(t.length - 1);
                            return this.logger_("Fell out of live window at time " + e + ". Seeking to live point (seekable end) " + i),
                            this.cancelTimer_(),
                            this.tech_.setCurrentTime(i),
                            this.tech_.trigger({
                                type: "usage",
                                name: "hls-live-resync"
                            }),
                            !0
                        }
                        var n = this.tech_.buffered()
                          , r = c["default"].findNextRange(n, e);
                        if (this.videoUnderflow_(r, n, e))
                            return this.cancelTimer_(),
                            this.tech_.setCurrentTime(e),
                            this.tech_.trigger({
                                type: "usage",
                                name: "hls-video-underflow"
                            }),
                            !0;
                        if (r.length > 0) {
                            var a = r.start(0) - e;
                            return this.logger_("Stopped at " + e + ", setting timer for " + a + ", seeking to " + r.start(0)),
                            this.timer_ = setTimeout(this.skipTheGap_.bind(this), 1e3 * a, e),
                            !0
                        }
                        return !1
                    }
                }, {
                    key: "afterSeekableWindow_",
                    value: function(t, e) {
                        return !!t.length && e > t.end(t.length - 1) + c["default"].SAFE_TIME_DELTA
                    }
                }, {
                    key: "beforeSeekableWindow_",
                    value: function(t, e) {
                        return !!(t.length && t.start(0) > 0 && e < t.start(0) - c["default"].SAFE_TIME_DELTA)
                    }
                }, {
                    key: "videoUnderflow_",
                    value: function(t, e, i) {
                        if (0 === t.length) {
                            var n = this.gapFromVideoUnderflow_(e, i);
                            if (n)
                                return this.logger_("Encountered a gap in video from " + n.start + " to " + n.end + ". Seeking to current time " + i),
                                !0
                        }
                        return !1
                    }
                }, {
                    key: "skipTheGap_",
                    value: function(t) {
                        var e = this.tech_.buffered()
                          , i = this.tech_.currentTime()
                          , n = c["default"].findNextRange(e, i);
                        this.cancelTimer_(),
                        0 !== n.length && i === t && (this.logger_("skipTheGap_:", "currentTime:", i, "scheduled currentTime:", t, "nextRange start:", n.start(0)),
                        this.tech_.setCurrentTime(n.start(0) + c["default"].TIME_FUDGE_FACTOR),
                        this.tech_.trigger({
                            type: "usage",
                            name: "hls-gap-skip"
                        }))
                    }
                }, {
                    key: "gapFromVideoUnderflow_",
                    value: function(t, e) {
                        for (var i = c["default"].findGaps(t), n = 0; n < i.length; n++) {
                            var r = i.start(n)
                              , a = i.end(n);
                            if (e - r < 4 && e - r > 2)
                                return {
                                    start: r,
                                    end: a
                                }
                        }
                        return null
                    }
                }, {
                    key: "logger_",
                    value: function() {}
                }]),
                t
            }();
            i["default"] = p,
            e.exports = i["default"]
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    9: [function(t, e, i) {
        (function(e) {
            "use strict";
            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            function r(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            function a(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var o = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value"in n && (n.writable = !0),
                        Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i),
                    n && t(e, n),
                    e
                }
            }()
              , s = function(t, e, i) {
                for (var n = !0; n; ) {
                    var r = t
                      , a = e
                      , o = i;
                    n = !1,
                    null === r && (r = Function.prototype);
                    var s = Object.getOwnPropertyDescriptor(r, a);
                    if (void 0 !== s) {
                        if ("value"in s)
                            return s.value;
                        var u = s.get;
                        return void 0 === u ? void 0 : u.call(o)
                    }
                    var l = Object.getPrototypeOf(r);
                    if (null === l)
                        return;
                    t = l,
                    e = a,
                    i = o,
                    n = !0,
                    s = l = void 0
                }
            }
              , u = t(15)
              , l = n(u)
              , c = "undefined" != typeof window ? window.videojs : void 0 !== e ? e.videojs : null
              , d = t(33)
              , h = n(d)
              , f = t(32)
              , p = n(f)
              , g = function(t, e, i) {
                var n = e.slice();
                i = i || 0;
                for (var r = Math.min(t.length, e.length + i), a = i; a < r; a++)
                    n[a - i] = (0,
                    c.mergeOptions)(t[a], n[a - i]);
                return n
            };
            i.updateSegments = g;
            var m = function(t, e) {
                t.resolvedUri || (t.resolvedUri = (0,
                l["default"])(e, t.uri)),
                t.key && !t.key.resolvedUri && (t.key.resolvedUri = (0,
                l["default"])(e, t.key.uri)),
                t.map && !t.map.resolvedUri && (t.map.resolvedUri = (0,
                l["default"])(e, t.map.uri))
            };
            i.resolveSegmentUris = m;
            var y = function(t, e) {
                var i = (0,
                c.mergeOptions)(t, {})
                  , n = i.playlists.filter(function(t) {
                    return t.uri === e.uri
                })[0];
                if (!n)
                    return null;
                if (n.segments && e.segments && n.segments.length === e.segments.length && n.mediaSequence === e.mediaSequence)
                    return null;
                var r = (0,
                c.mergeOptions)(n, e);
                n.segments && (r.segments = g(n.segments, e.segments, e.mediaSequence - n.mediaSequence)),
                r.segments.forEach(function(t) {
                    m(t, r.resolvedUri)
                });
                for (var a = 0; a < i.playlists.length; a++)
                    i.playlists[a].uri === e.uri && (i.playlists[a] = r);
                return i.playlists[e.uri] = r,
                i
            };
            i.updateMaster = y;
            var v = function(t) {
                for (var e = t.playlists.length; e--; ) {
                    var i = t.playlists[e];
                    t.playlists[i.uri] = i,
                    i.resolvedUri = (0,
                    l["default"])(t.uri, i.uri),
                    i.attributes || (i.attributes = {},
                    c.log.warn("Invalid playlist STREAM-INF detected. Missing BANDWIDTH attribute."))
                }
            };
            i.setupMediaPlaylists = v;
            var _ = function(t) {
                ["AUDIO", "SUBTITLES"].forEach(function(e) {
                    for (var i in t.mediaGroups[e])
                        for (var n in t.mediaGroups[e][i]) {
                            var r = t.mediaGroups[e][i][n];
                            r.uri && (r.resolvedUri = (0,
                            l["default"])(t.uri, r.uri))
                        }
                })
            };
            i.resolveMediaGroupUris = _;
            var b = function(t, e) {
                var i = t.segments[t.segments.length - 1];
                return e && i && i.duration ? 1e3 * i.duration : 500 * (t.targetDuration || 10)
            };
            i.refreshDelay = b;
            var x = function(t) {
                function e(t, i, n) {
                    var a = this;
                    if (r(this, e),
                    s(Object.getPrototypeOf(e.prototype), "constructor", this).call(this),
                    this.srcUrl = t,
                    this.hls_ = i,
                    this.withCredentials = n,
                    !this.srcUrl)
                        throw new Error("A non-empty playlist URL is required");
                    this.state = "HAVE_NOTHING",
                    this.on("mediaupdatetimeout", function() {
                        "HAVE_METADATA" === a.state && (a.state = "HAVE_CURRENT_METADATA",
                        a.request = a.hls_.xhr({
                            uri: (0,
                            l["default"])(a.master.uri, a.media().uri),
                            withCredentials: a.withCredentials
                        }, function(t, e) {
                            if (a.request)
                                return t ? a.playlistRequestError(a.request, a.media().uri, "HAVE_METADATA") : void a.haveMetadata(a.request, a.media().uri)
                        }))
                    })
                }
                return a(e, t),
                o(e, [{
                    key: "playlistRequestError",
                    value: function(t, e, i) {
                        this.request = null,
                        i && (this.state = i),
                        this.error = {
                            playlist: this.master.playlists[e],
                            status: t.status,
                            message: "HLS playlist request error at URL: " + e,
                            responseText: t.responseText,
                            code: t.status >= 500 ? 4 : 2
                        },
                        this.trigger("error")
                    }
                }, {
                    key: "haveMetadata",
                    value: function(t, e) {
                        var i = this;
                        this.request = null,
                        this.state = "HAVE_METADATA";
                        var n = new h["default"].Parser;
                        n.push(t.responseText),
                        n.end(),
                        n.manifest.uri = e,
                        n.manifest.attributes = n.manifest.attributes || {};
                        var r = y(this.master, n.manifest);
                        this.targetDuration = n.manifest.targetDuration,
                        r ? (this.master = r,
                        this.media_ = this.master.playlists[n.manifest.uri]) : this.trigger("playlistunchanged"),
                        this.media().endList || (p["default"].clearTimeout(this.mediaUpdateTimeout),
                        this.mediaUpdateTimeout = p["default"].setTimeout(function() {
                            i.trigger("mediaupdatetimeout")
                        }, b(this.media(), !!r))),
                        this.trigger("loadedplaylist")
                    }
                }, {
                    key: "dispose",
                    value: function() {
                        this.stopRequest(),
                        p["default"].clearTimeout(this.mediaUpdateTimeout)
                    }
                }, {
                    key: "stopRequest",
                    value: function() {
                        if (this.request) {
                            var t = this.request;
                            this.request = null,
                            t.onreadystatechange = null,
                            t.abort()
                        }
                    }
                }, {
                    key: "media",
                    value: function(t) {
                        var e = this;
                        if (!t)
                            return this.media_;
                        if ("HAVE_NOTHING" === this.state)
                            throw new Error("Cannot switch media playlist from " + this.state);
                        var i = this.state;
                        if ("string" == typeof t) {
                            if (!this.master.playlists[t])
                                throw new Error("Unknown playlist URI: " + t);
                            t = this.master.playlists[t]
                        }
                        var n = !this.media_ || t.uri !== this.media_.uri;
                        if (this.master.playlists[t.uri].endList)
                            return this.request && (this.request.onreadystatechange = null,
                            this.request.abort(),
                            this.request = null),
                            this.state = "HAVE_METADATA",
                            this.media_ = t,
                            void (n && (this.trigger("mediachanging"),
                            this.trigger("mediachange")));
                        if (n) {
                            if (this.state = "SWITCHING_MEDIA",
                            this.request) {
                                if ((0,
                                l["default"])(this.master.uri, t.uri) === this.request.url)
                                    return;
                                this.request.onreadystatechange = null,
                                this.request.abort(),
                                this.request = null
                            }
                            this.media_ && this.trigger("mediachanging"),
                            this.request = this.hls_.xhr({
                                uri: (0,
                                l["default"])(this.master.uri, t.uri),
                                withCredentials: this.withCredentials
                            }, function(n, r) {
                                if (e.request) {
                                    if (n)
                                        return e.playlistRequestError(e.request, t.uri, i);
                                    e.haveMetadata(r, t.uri),
                                    "HAVE_MASTER" === i ? e.trigger("loadedmetadata") : e.trigger("mediachange")
                                }
                            })
                        }
                    }
                }, {
                    key: "pause",
                    value: function() {
                        this.stopRequest(),
                        p["default"].clearTimeout(this.mediaUpdateTimeout),
                        "HAVE_NOTHING" === this.state && (this.started = !1),
                        "SWITCHING_MEDIA" === this.state ? this.media_ ? this.state = "HAVE_METADATA" : this.state = "HAVE_MASTER" : "HAVE_CURRENT_METADATA" === this.state && (this.state = "HAVE_METADATA")
                    }
                }, {
                    key: "load",
                    value: function(t) {
                        var e = this;
                        p["default"].clearTimeout(this.mediaUpdateTimeout);
                        var i = this.media();
                        if (t) {
                            var n = i ? i.targetDuration / 2 * 1e3 : 5e3;
                            return void (this.mediaUpdateTimeout = p["default"].setTimeout(function() {
                                return e.load()
                            }, n))
                        }
                        return this.started ? void (i && !i.endList ? this.trigger("mediaupdatetimeout") : this.trigger("loadedplaylist")) : void this.start()
                    }
                }, {
                    key: "start",
                    value: function() {
                        var t = this;
                        this.started = !0,
                        this.request = this.hls_.xhr({
                            uri: this.srcUrl,
                            withCredentials: this.withCredentials
                        }, function(e, i) {
                            if (t.request) {
                                if (t.request = null,
                                e)
                                    return t.error = {
                                        status: i.status,
                                        message: "HLS playlist request error at URL: " + t.srcUrl,
                                        responseText: i.responseText,
                                        code: 2
                                    },
                                    "HAVE_NOTHING" === t.state && (t.started = !1),
                                    t.trigger("error");
                                var n = new h["default"].Parser;
                                return n.push(i.responseText),
                                n.end(),
                                t.state = "HAVE_MASTER",
                                n.manifest.uri = t.srcUrl,
                                n.manifest.playlists ? (t.master = n.manifest,
                                v(t.master),
                                _(t.master),
                                t.trigger("loadedplaylist"),
                                void (t.request || t.media(n.manifest.playlists[0]))) : (t.master = {
                                    mediaGroups: {
                                        AUDIO: {},
                                        VIDEO: {},
                                        "CLOSED-CAPTIONS": {},
                                        SUBTITLES: {}
                                    },
                                    uri: p["default"].location.href,
                                    playlists: [{
                                        uri: t.srcUrl
                                    }]
                                },
                                t.master.playlists[t.srcUrl] = t.master.playlists[0],
                                t.master.playlists[0].resolvedUri = t.srcUrl,
                                t.master.playlists[0].attributes = t.master.playlists[0].attributes || {},
                                t.haveMetadata(i, t.srcUrl),
                                t.trigger("loadedmetadata"))
                            }
                        })
                    }
                }]),
                e
            }(c.EventTarget);
            i["default"] = x
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    10: [function(t, e, i) {
        "use strict";
        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var r = t(3)
          , a = n(r)
          , o = t(11)
          , s = n(o)
          , u = t(19)
          , l = function(t, e) {
            var i = void 0;
            return t ? (i = window.getComputedStyle(t),
            i ? i[e] : "") : ""
        }
          , c = function(t, e) {
            var i = t.slice();
            t.sort(function(t, n) {
                var r = e(t, n);
                return 0 === r ? i.indexOf(t) - i.indexOf(n) : r
            })
        }
          , d = function(t, e) {
            var i = void 0
              , n = void 0;
            return t.attributes.BANDWIDTH && (i = t.attributes.BANDWIDTH),
            i = i || window.Number.MAX_VALUE,
            e.attributes.BANDWIDTH && (n = e.attributes.BANDWIDTH),
            n = n || window.Number.MAX_VALUE,
            i - n
        };
        i.comparePlaylistBandwidth = d;
        var h = function(t, e) {
            var i = void 0
              , n = void 0;
            return t.attributes.RESOLUTION && t.attributes.RESOLUTION.width && (i = t.attributes.RESOLUTION.width),
            i = i || window.Number.MAX_VALUE,
            e.attributes.RESOLUTION && e.attributes.RESOLUTION.width && (n = e.attributes.RESOLUTION.width),
            n = n || window.Number.MAX_VALUE,
            i === n && t.attributes.BANDWIDTH && e.attributes.BANDWIDTH ? t.attributes.BANDWIDTH - e.attributes.BANDWIDTH : i - n
        };
        i.comparePlaylistResolution = h;
        var f = function(t, e, i, n) {
            var r = t.playlists.map(function(t) {
                var e = void 0
                  , i = void 0
                  , n = void 0;
                return e = t.attributes.RESOLUTION && t.attributes.RESOLUTION.width,
                i = t.attributes.RESOLUTION && t.attributes.RESOLUTION.height,
                n = t.attributes.BANDWIDTH,
                n = n || window.Number.MAX_VALUE,
                {
                    bandwidth: n,
                    width: e,
                    height: i,
                    playlist: t
                }
            });
            c(r, function(t, e) {
                return t.bandwidth - e.bandwidth
            }),
            r = r.filter(function(t) {
                return !s["default"].isIncompatible(t.playlist)
            });
            var o = r.filter(function(t) {
                return s["default"].isEnabled(t.playlist)
            });
            o.length || (o = r.filter(function(t) {
                return !s["default"].isDisabled(t.playlist)
            }));
            var u = o.filter(function(t) {
                return t.bandwidth * a["default"].BANDWIDTH_VARIANCE < e
            })
              , l = u[u.length - 1]
              , d = u.filter(function(t) {
                return t.bandwidth === l.bandwidth
            })[0]
              , h = u.filter(function(t) {
                return t.width && t.height
            });
            c(h, function(t, e) {
                return t.width - e.width
            });
            var f = h.filter(function(t) {
                return t.width === i && t.height === n
            });
            l = f[f.length - 1];
            var p = f.filter(function(t) {
                return t.bandwidth === l.bandwidth
            })[0]
              , g = void 0
              , m = void 0
              , y = void 0;
            p || (g = h.filter(function(t) {
                return t.width > i || t.height > n
            }),
            m = g.filter(function(t) {
                return t.width === g[0].width && t.height === g[0].height
            }),
            l = m[m.length - 1],
            y = m.filter(function(t) {
                return t.bandwidth === l.bandwidth
            })[0]);
            var v = y || p || d || o[0] || r[0];
            return v ? v.playlist : null
        };
        i.simpleSelector = f;
        var p = function() {
            return f(this.playlists.master, this.systemBandwidth, parseInt(l(this.tech_.el(), "width"), 10), parseInt(l(this.tech_.el(), "height"), 10))
        };
        i.lastBandwidthSelector = p;
        var g = function(t) {
            var e = -1;
            if (t < 0 || t > 1)
                throw new Error("Moving average bandwidth decay must be between 0 and 1.");
            return function() {
                return e < 0 && (e = this.systemBandwidth),
                e = t * this.systemBandwidth + (1 - t) * e,
                f(this.playlists.master, e, parseInt(l(this.tech_.el(), "width"), 10), parseInt(l(this.tech_.el(), "height"), 10))
            }
        };
        i.movingAverageBandwidthSelector = g;
        var m = function(t) {
            var e = t.master
              , i = t.currentTime
              , n = t.bandwidth
              , r = t.duration
              , a = t.segmentDuration
              , o = t.timeUntilRebuffer
              , u = t.currentTimeline
              , l = t.syncController
              , h = e.playlists.filter(function(t) {
                return !s["default"].isIncompatible(t)
            })
              , f = h.filter(s["default"].isEnabled);
            f.length || (f = h.filter(function(t) {
                return !s["default"].isDisabled(t)
            }));
            var p = f.filter(s["default"].hasAttribute.bind(null, "BANDWIDTH"))
              , g = p.map(function(t) {
                var e = l.getSyncPoint(t, r, u, i)
                  , c = e ? 1 : 2;
                return {
                    playlist: t,
                    rebufferingImpact: s["default"].estimateSegmentRequestTime(a, n, t) * c - o
                }
            })
              , m = g.filter(function(t) {
                return t.rebufferingImpact <= 0
            });
            return c(m, function(t, e) {
                return d(e.playlist, t.playlist)
            }),
            m.length ? m[0] : (c(g, function(t, e) {
                return t.rebufferingImpact - e.rebufferingImpact
            }),
            g[0] || null)
        };
        i.minRebufferMaxBandwidthSelector = m;
        var y = function() {
            var t = this.playlists.master.playlists.filter(s["default"].isEnabled);
            return c(t, function(t, e) {
                return d(t, e)
            }),
            t.filter(function(t) {
                return (0,
                u.parseCodecs)(t.attributes.CODECS).videoCodec
            })[0] || null
        };
        i.lowestBitrateCompatibleVariantSelector = y
    }
    , {}],
    11: [function(t, e, i) {
        (function(e) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var n = "undefined" != typeof window ? window.videojs : void 0 !== e ? e.videojs : null
              , r = t(32)
              , a = function(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }(r)
              , o = function(t, e) {
                var i = 0
                  , n = e - t.mediaSequence
                  , r = t.segments[n];
                if (r) {
                    if ("undefined" != typeof r.start)
                        return {
                            result: r.start,
                            precise: !0
                        };
                    if ("undefined" != typeof r.end)
                        return {
                            result: r.end - r.duration,
                            precise: !0
                        }
                }
                for (; n--; ) {
                    if (r = t.segments[n],
                    "undefined" != typeof r.end)
                        return {
                            result: i + r.end,
                            precise: !0
                        };
                    if (i += r.duration,
                    "undefined" != typeof r.start)
                        return {
                            result: i + r.start,
                            precise: !0
                        }
                }
                return {
                    result: i,
                    precise: !1
                }
            }
              , s = function(t, e) {
                for (var i = 0, n = void 0, r = e - t.mediaSequence; r < t.segments.length; r++) {
                    if (n = t.segments[r],
                    "undefined" != typeof n.start)
                        return {
                            result: n.start - i,
                            precise: !0
                        };
                    if (i += n.duration,
                    "undefined" != typeof n.end)
                        return {
                            result: n.end - i,
                            precise: !0
                        }
                }
                return {
                    result: -1,
                    precise: !1
                }
            }
              , u = function(t, e, i) {
                var n = void 0
                  , r = void 0;
                return void 0 === e && (e = t.mediaSequence + t.segments.length),
                e < t.mediaSequence ? 0 : (n = o(t, e),
                n.precise ? n.result : (r = s(t, e),
                r.precise ? r.result : n.result + i))
            }
              , l = function(t, e, i) {
                if (!t)
                    return 0;
                if ("number" != typeof i && (i = 0),
                void 0 === e) {
                    if (t.totalDuration)
                        return t.totalDuration;
                    if (!t.endList)
                        return a["default"].Infinity
                }
                return u(t, e, i)
            };
            i.duration = l;
            var c = function(t, e, i) {
                var n = 0;
                if (e > i) {
                    var r = [i, e];
                    e = r[0],
                    i = r[1]
                }
                if (e < 0) {
                    for (var a = e; a < Math.min(0, i); a++)
                        n += t.targetDuration;
                    e = 0
                }
                for (var a = e; a < i; a++)
                    n += t.segments[a].duration;
                return n
            };
            i.sumDurations = c;
            var d = function(t) {
                if (!t.segments.length)
                    return 0;
                for (var e = t.segments.length - 1, i = t.segments[e].duration || t.targetDuration, n = i + 2 * t.targetDuration; e-- && !((i += t.segments[e].duration) >= n); )
                    ;
                return Math.max(0, e)
            };
            i.safeLiveIndex = d;
            var h = function(t, e, i) {
                if (!t || !t.segments)
                    return null;
                if (t.endList)
                    return l(t);
                if (null === e)
                    return null;
                e = e || 0;
                var n = i ? d(t) : t.segments.length;
                return u(t, t.mediaSequence + n, e)
            };
            i.playlistEnd = h;
            var f = function(t, e) {
                var i = e || 0
                  , r = h(t, e, !0);
                return null === r ? (0,
                n.createTimeRange)() : (0,
                n.createTimeRange)(i, r)
            };
            i.seekable = f;
            var p = function(t) {
                return t - Math.floor(t) == 0
            }
              , g = function(t, e) {
                if (p(e))
                    return e + .1 * t;
                for (var i = e.toString().split(".")[1].length, n = 1; n <= i; n++) {
                    var r = Math.pow(10, n)
                      , a = e * r;
                    if (p(a) || n === i)
                        return (a + t) / r
                }
            }
              , m = g.bind(null, 1)
              , y = g.bind(null, -1)
              , v = function(t, e, i, n) {
                var r = void 0
                  , a = void 0
                  , o = t.segments.length
                  , s = e - n;
                if (s < 0) {
                    if (i > 0)
                        for (r = i - 1; r >= 0; r--)
                            if (a = t.segments[r],
                            (s += y(a.duration)) > 0)
                                return {
                                    mediaIndex: r,
                                    startTime: n - c(t, i, r)
                                };
                    return {
                        mediaIndex: 0,
                        startTime: e
                    }
                }
                if (i < 0) {
                    for (r = i; r < 0; r++)
                        if ((s -= t.targetDuration) < 0)
                            return {
                                mediaIndex: 0,
                                startTime: e
                            };
                    i = 0
                }
                for (r = i; r < o; r++)
                    if (a = t.segments[r],
                    (s -= m(a.duration)) < 0)
                        return {
                            mediaIndex: r,
                            startTime: n + c(t, i, r)
                        };
                return {
                    mediaIndex: o - 1,
                    startTime: e
                }
            };
            i.getMediaInfoForTime = v;
            var _ = function(t) {
                return t.excludeUntil && t.excludeUntil > Date.now()
            };
            i.isBlacklisted = _;
            var b = function(t) {
                return t.excludeUntil && t.excludeUntil === 1 / 0
            };
            i.isIncompatible = b;
            var x = function(t) {
                var e = _(t);
                return !t.disabled && !e
            };
            i.isEnabled = x;
            var T = function(t) {
                return t.disabled
            };
            i.isDisabled = T;
            var w = function(t) {
                for (var e = 0; e < t.segments.length; e++)
                    if (t.segments[e].key)
                        return !0;
                return !1
            };
            i.isAes = w;
            var S = function(t) {
                for (var e = 0; e < t.segments.length; e++)
                    if (t.segments[e].map)
                        return !0;
                return !1
            };
            i.isFmp4 = S;
            var k = function(t, e) {
                return e.attributes && e.attributes[t]
            };
            i.hasAttribute = k;
            var C = function(t, e, i) {
                var n = arguments.length <= 3 || void 0 === arguments[3] ? 0 : arguments[3];
                return k("BANDWIDTH", i) ? (t * i.attributes.BANDWIDTH - 8 * n) / e : NaN
            };
            i.estimateSegmentRequestTime = C;
            var E = function(t, e) {
                if (1 === t.playlists.length)
                    return !0;
                var i = e.attributes.BANDWIDTH || Number.MAX_VALUE;
                return 0 === t.playlists.filter(function(t) {
                    return !!x(t) && (t.attributes.BANDWIDTH || 0) < i
                }).length
            };
            i.isLowestEnabledRendition = E,
            i["default"] = {
                duration: l,
                seekable: f,
                safeLiveIndex: d,
                getMediaInfoForTime: v,
                isEnabled: x,
                isDisabled: T,
                isBlacklisted: _,
                isIncompatible: b,
                playlistEnd: h,
                isAes: w,
                isFmp4: S,
                hasAttribute: k,
                estimateSegmentRequestTime: C,
                isLowestEnabledRendition: E
            }
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    12: [function(t, e, i) {
        (function(t) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var n = function() {
                function t(t, e) {
                    var i = []
                      , n = !0
                      , r = !1
                      , a = void 0;
                    try {
                        for (var o, s = t[Symbol.iterator](); !(n = (o = s.next()).done) && (i.push(o.value),
                        !e || i.length !== e); n = !0)
                            ;
                    } catch (u) {
                        r = !0,
                        a = u
                    } finally {
                        try {
                            !n && s["return"] && s["return"]()
                        } finally {
                            if (r)
                                throw a
                        }
                    }
                    return i
                }
                return function(e, i) {
                    if (Array.isArray(e))
                        return e;
                    if (Symbol.iterator in Object(e))
                        return t(e, i);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }()
              , r = "undefined" != typeof window ? window.videojs : void 0 !== t ? t.videojs : null
              , a = function(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }(r)
              , o = function(t, e) {
                var i = n(e, 2)
                  , r = i[0]
                  , a = i[1];
                return Math.min(Math.max(r, t), a)
            }
              , s = function(t, e) {
                var i = []
                  , n = void 0;
                if (t && t.length)
                    for (n = 0; n < t.length; n++)
                        e(t.start(n), t.end(n)) && i.push([t.start(n), t.end(n)]);
                return a["default"].createTimeRanges(i)
            }
              , u = function(t, e) {
                return s(t, function(t, i) {
                    return t - 1 / 30 <= e && i + 1 / 30 >= e
                })
            }
              , l = function(t, e) {
                return s(t, function(t) {
                    return t - 1 / 30 >= e
                })
            }
              , c = function(t) {
                if (t.length < 2)
                    return a["default"].createTimeRanges();
                for (var e = [], i = 1; i < t.length; i++) {
                    var n = t.end(i - 1)
                      , r = t.start(i);
                    e.push([n, r])
                }
                return a["default"].createTimeRanges(e)
            }
              , d = function(t, e) {
                var i = void 0
                  , n = void 0
                  , r = void 0
                  , a = []
                  , o = []
                  , s = function(t) {
                    return t[0] <= r && t[1] >= r
                };
                if (t)
                    for (i = 0; i < t.length; i++)
                        n = t.start(i),
                        r = t.end(i),
                        o.push([n, r]);
                if (e)
                    for (i = 0; i < e.length; i++)
                        n = e.start(i),
                        r = e.end(i),
                        o.some(s) || a.push(r);
                return 1 !== a.length ? null : a[0]
            }
              , h = function(t, e) {
                var i = null
                  , n = null
                  , r = 0
                  , o = []
                  , s = [];
                if (!(t && t.length && e && e.length))
                    return a["default"].createTimeRange();
                for (var u = t.length; u--; )
                    o.push({
                        time: t.start(u),
                        type: "start"
                    }),
                    o.push({
                        time: t.end(u),
                        type: "end"
                    });
                for (u = e.length; u--; )
                    o.push({
                        time: e.start(u),
                        type: "start"
                    }),
                    o.push({
                        time: e.end(u),
                        type: "end"
                    });
                for (o.sort(function(t, e) {
                    return t.time - e.time
                }),
                u = 0; u < o.length; u++)
                    "start" === o[u].type ? 2 === ++r && (i = o[u].time) : "end" === o[u].type && 1 === --r && (n = o[u].time),
                    null !== i && null !== n && (s.push([i, n]),
                    i = null,
                    n = null);
                return a["default"].createTimeRanges(s)
            }
              , f = function(t, e, i, n) {
                for (var r = e.end(0) - e.start(0), a = t.end(0) - t.start(0), o = r - a, s = h(t, n), u = h(e, n), l = 0, c = 0, d = s.length; d--; )
                    l += s.end(d) - s.start(d),
                    s.start(d) === i && (l += o);
                for (d = u.length; d--; )
                    c += u.end(d) - u.start(d);
                return Math.max(l, c) / r * 100
            }
              , p = function(t, e, i, n) {
                var r = t + e
                  , s = a["default"].createTimeRanges([[t, r]])
                  , u = a["default"].createTimeRanges([[o(t, [i, r]), r]]);
                if (u.start(0) === u.end(0))
                    return 0;
                var l = f(u, s, i, n);
                return isNaN(l) || l === 1 / 0 || l === -(1 / 0) ? 0 : l
            }
              , g = function(t) {
                var e = [];
                if (!t || !t.length)
                    return "";
                for (var i = 0; i < t.length; i++)
                    e.push(t.start(i) + " => " + t.end(i));
                return e.join(", ")
            }
              , m = function(t, e) {
                var i = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
                return ((t.length ? t.end(t.length - 1) : 0) - e) / i
            };
            i["default"] = {
                findRange: u,
                findNextRange: l,
                findGaps: c,
                findSoleUncommonTimeRangesEnd: d,
                getSegmentBufferedPercent: p,
                TIME_FUDGE_FACTOR: 1 / 30,
                SAFE_TIME_DELTA: .1,
                printableRange: g,
                timeUntilRebuffer: m
            },
            e.exports = i["default"]
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    13: [function(t, e, i) {
        (function(t) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var n = "undefined" != typeof window ? window.videojs : void 0 !== t ? t.videojs : null
              , r = function(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }(n)
              , a = {
                errorInterval: 30,
                getSource: function(t) {
                    return t(this.tech({
                        IWillNotUseThisInPlugins: !0
                    }).currentSource_)
                }
            }
              , o = function u(t, e) {
                var i = 0
                  , n = 0
                  , o = r["default"].mergeOptions(a, e);
                t.ready(function() {
                    t.trigger({
                        type: "usage",
                        name: "hls-error-reload-initialized"
                    })
                });
                var s = function() {
                    n && t.currentTime(n)
                }
                  , l = function(e) {
                    null !== e && void 0 !== e && (n = t.duration() !== 1 / 0 && t.currentTime() || 0,
                    t.one("loadedmetadata", s),
                    t.src(e),
                    t.trigger({
                        type: "usage",
                        name: "hls-error-reload"
                    }),
                    t.play())
                }
                  , c = function() {
                    return Date.now() - i < 1e3 * o.errorInterval ? void t.trigger({
                        type: "usage",
                        name: "hls-error-reload-canceled"
                    }) : o.getSource && "function" == typeof o.getSource ? (i = Date.now(),
                    o.getSource.call(t, l)) : void r["default"].log.error("ERROR: reloadSourceOnError - The option getSource must be a function!")
                }
                  , d = function f() {
                    t.off("loadedmetadata", s),
                    t.off("error", c),
                    t.off("dispose", f)
                }
                  , h = function(e) {
                    d(),
                    u(t, e)
                };
                t.on("error", c),
                t.on("dispose", d),
                t.reloadSourceOnError = h
            }
              , s = function(t) {
                o(this, t)
            };
            i["default"] = s,
            e.exports = i["default"]
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    14: [function(t, e, i) {
        "use strict";
        function n(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var r = t(11)
          , a = function(t, e, i) {
            return function(n) {
                var a = t.master.playlists[e]
                  , o = (0,
                r.isIncompatible)(a)
                  , s = (0,
                r.isEnabled)(a);
                return void 0 === n ? s : (n ? delete a.disabled : a.disabled = !0,
                n === s || o || (i(),
                n ? t.trigger("renditionenabled") : t.trigger("renditiondisabled")),
                n)
            }
        }
          , o = function u(t, e, i) {
            n(this, u);
            var r = t.masterPlaylistController_.fastQualityChange_.bind(t.masterPlaylistController_);
            if (e.attributes.RESOLUTION) {
                var o = e.attributes.RESOLUTION;
                this.width = o.width,
                this.height = o.height
            }
            this.bandwidth = e.attributes.BANDWIDTH,
            this.id = i,
            this.enabled = a(t.playlists, e.uri, r)
        }
          , s = function(t) {
            var e = t.playlists;
            t.representations = function() {
                return e.master.playlists.filter(function(t) {
                    return !(0,
                    r.isIncompatible)(t)
                }).map(function(e, i) {
                    return new o(t,e,e.uri)
                })
            }
        };
        i["default"] = s,
        e.exports = i["default"]
    }
    , {}],
    15: [function(t, e, i) {
        "use strict";
        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var r = t(63)
          , a = n(r)
          , o = t(32)
          , s = n(o)
          , u = function(t, e) {
            return /^[a-z]+:/i.test(e) ? e : (/\/\//i.test(t) || (t = a["default"].buildAbsoluteURL(s["default"].location.href, t)),
            a["default"].buildAbsoluteURL(t, e))
        };
        i["default"] = u,
        e.exports = i["default"]
    }
    , {}],
    16: [function(t, e, i) {
        (function(e) {
            "use strict";
            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            function r(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            function a(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var o = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value"in n && (n.writable = !0),
                        Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i),
                    n && t(e, n),
                    e
                }
            }()
              , s = function(t, e, i) {
                for (var n = !0; n; ) {
                    var r = t
                      , a = e
                      , o = i;
                    n = !1,
                    null === r && (r = Function.prototype);
                    var s = Object.getOwnPropertyDescriptor(r, a);
                    if (void 0 !== s) {
                        if ("value"in s)
                            return s.value;
                        var u = s.get;
                        return void 0 === u ? void 0 : u.call(o)
                    }
                    var l = Object.getPrototypeOf(r);
                    if (null === l)
                        return;
                    t = l,
                    e = a,
                    i = o,
                    n = !0,
                    s = l = void 0
                }
            }
              , u = t(11)
              , l = n(u)
              , c = "undefined" != typeof window ? window.videojs : void 0 !== e ? e.videojs : null
              , d = n(c)
              , h = t(17)
              , f = n(h)
              , p = t(3)
              , g = n(p)
              , m = t(32)
              , y = n(m)
              , v = t(72)
              , _ = n(v)
              , b = t(2)
              , x = t(7)
              , T = t(12)
              , w = t(10)
              , S = function(t, e, i) {
                if (!t || !e)
                    return !1;
                var n = t.segments
                  , r = i === n.length;
                return t.endList && "open" === e.readyState && r
            }
              , k = function(t) {
                return "number" == typeof t && isFinite(t)
            }
              , C = function(t, e, i) {
                return "main" === t && e && i ? i.containsAudio || i.containsVideo ? e.containsVideo && !i.containsVideo ? "Only audio found in segment when we expected video. We can't switch to audio only from a stream that had video. To get rid of this message, please add codec information to the manifest." : !e.containsVideo && i.containsVideo ? "Video found in segment when we expected only audio. We can't switch to a stream with video from an audio only stream. To get rid of this message, please add codec information to the manifest." : null : "Neither audio nor video found in segment." : null
            };
            i.illegalMediaSwitch = C;
            var E = function(t, e, i) {
                var n = void 0;
                return n = t.length && t.start(0) > 0 && t.start(0) < e ? t.start(0) : e - 30,
                Math.min(n, e - i)
            };
            i.safeBackBufferTrimTime = E;
            var A = function(t) {
                function e(t) {
                    var i = this
                      , n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                    if (r(this, e),
                    s(Object.getPrototypeOf(e.prototype), "constructor", this).call(this),
                    !t)
                        throw new TypeError("Initialization settings are required");
                    if ("function" != typeof t.currentTime)
                        throw new TypeError("No currentTime getter specified");
                    if (!t.mediaSource)
                        throw new TypeError("No MediaSource specified");
                    this.state = "INIT",
                    this.bandwidth = t.bandwidth,
                    this.throughput = {
                        rate: 0,
                        count: 0
                    },
                    this.roundTrip = NaN,
                    this.resetStats_(),
                    this.mediaIndex = null,
                    this.hasPlayed_ = t.hasPlayed,
                    this.currentTime_ = t.currentTime,
                    this.seekable_ = t.seekable,
                    this.seeking_ = t.seeking,
                    this.duration_ = t.duration,
                    this.mediaSource_ = t.mediaSource,
                    this.hls_ = t.hls,
                    this.loaderType_ = t.loaderType,
                    this.startingMedia_ = void 0,
                    this.segmentMetadataTrack_ = t.segmentMetadataTrack,
                    this.goalBufferLength_ = t.goalBufferLength,
                    this.checkBufferTimeout_ = null,
                    this.error_ = void 0,
                    this.currentTimeline_ = -1,
                    this.pendingSegment_ = null,
                    this.mimeType_ = null,
                    this.sourceUpdater_ = null,
                    this.xhrOptions_ = null,
                    this.activeInitSegmentId_ = null,
                    this.initSegments_ = {},
                    this.decrypter_ = t.decrypter,
                    this.syncController_ = t.syncController,
                    this.syncPoint_ = {
                        segmentIndex: 0,
                        time: 0
                    },
                    this.syncController_.on("syncinfoupdate", function() {
                        return i.trigger("syncinfoupdate")
                    }),
                    this.mediaSource_.addEventListener("sourceopen", function() {
                        return i.ended_ = !1
                    }),
                    this.fetchAtBuffer_ = !1,
                    n.debug && (this.logger_ = d["default"].log.bind(d["default"], "segment-loader", this.loaderType_, "->"))
                }
                return a(e, t),
                o(e, [{
                    key: "resetStats_",
                    value: function() {
                        this.mediaBytesTransferred = 0,
                        this.mediaRequests = 0,
                        this.mediaRequestsAborted = 0,
                        this.mediaRequestsTimedout = 0,
                        this.mediaRequestsErrored = 0,
                        this.mediaTransferDuration = 0,
                        this.mediaSecondsLoaded = 0
                    }
                }, {
                    key: "dispose",
                    value: function() {
                        this.state = "DISPOSED",
                        this.pause(),
                        this.abort_(),
                        this.sourceUpdater_ && this.sourceUpdater_.dispose(),
                        this.resetStats_()
                    }
                }, {
                    key: "abort",
                    value: function() {
                        return "WAITING" !== this.state ? void (this.pendingSegment_ && (this.pendingSegment_ = null)) : (this.abort_(),
                        this.state = "READY",
                        this.paused() || this.monitorBuffer_(),
                        void 0)
                    }
                }, {
                    key: "abort_",
                    value: function() {
                        this.pendingSegment_ && this.pendingSegment_.abortRequests(),
                        this.pendingSegment_ = null
                    }
                }, {
                    key: "error",
                    value: function(t) {
                        return void 0 !== t && (this.error_ = t),
                        this.pendingSegment_ = null,
                        this.error_
                    }
                }, {
                    key: "endOfStream",
                    value: function() {
                        this.ended_ = !0,
                        this.pause(),
                        this.trigger("ended")
                    }
                }, {
                    key: "buffered_",
                    value: function() {
                        return this.sourceUpdater_ ? this.sourceUpdater_.buffered() : d["default"].createTimeRanges()
                    }
                }, {
                    key: "initSegment",
                    value: function(t) {
                        var e = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1];
                        if (!t)
                            return null;
                        var i = (0,
                        b.initSegmentId)(t)
                          , n = this.initSegments_[i];
                        return e && !n && t.bytes && (this.initSegments_[i] = n = {
                            resolvedUri: t.resolvedUri,
                            byterange: t.byterange,
                            bytes: t.bytes
                        }),
                        n || t
                    }
                }, {
                    key: "couldBeginLoading_",
                    value: function() {
                        return this.playlist_ && (this.sourceUpdater_ || this.mimeType_ && "INIT" === this.state) && !this.paused()
                    }
                }, {
                    key: "load",
                    value: function() {
                        if (this.monitorBuffer_(),
                        this.playlist_) {
                            if (this.syncController_.setDateTimeMapping(this.playlist_),
                            "INIT" === this.state && this.couldBeginLoading_())
                                return this.init_();
                            !this.couldBeginLoading_() || "READY" !== this.state && "INIT" !== this.state || (this.state = "READY")
                        }
                    }
                }, {
                    key: "init_",
                    value: function() {
                        return this.state = "READY",
                        this.sourceUpdater_ = new f["default"](this.mediaSource_,this.mimeType_),
                        this.resetEverything(),
                        this.monitorBuffer_()
                    }
                }, {
                    key: "playlist",
                    value: function(t) {
                        var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                        if (t) {
                            var i = this.playlist_
                              , n = this.pendingSegment_;
                            if (this.playlist_ = t,
                            this.xhrOptions_ = e,
                            this.hasPlayed_() || (t.syncInfo = {
                                mediaSequence: t.mediaSequence,
                                time: 0
                            }),
                            this.trigger("syncinfoupdate"),
                            "INIT" === this.state && this.couldBeginLoading_())
                                return this.init_();
                            if (!i || i.uri !== t.uri)
                                return void (null !== this.mediaIndex && this.resyncLoader());
                            var r = t.mediaSequence - i.mediaSequence;
                            this.logger_("mediaSequenceDiff", r),
                            null !== this.mediaIndex && (this.mediaIndex -= r),
                            n && (n.mediaIndex -= r,
                            n.mediaIndex >= 0 && (n.segment = t.segments[n.mediaIndex])),
                            this.syncController_.saveExpiredSegmentInfo(i, t)
                        }
                    }
                }, {
                    key: "pause",
                    value: function() {
                        this.checkBufferTimeout_ && (y["default"].clearTimeout(this.checkBufferTimeout_),
                        this.checkBufferTimeout_ = null)
                    }
                }, {
                    key: "paused",
                    value: function() {
                        return null === this.checkBufferTimeout_
                    }
                }, {
                    key: "mimeType",
                    value: function(t) {
                        this.mimeType_ || (this.mimeType_ = t,
                        "INIT" === this.state && this.couldBeginLoading_() && this.init_())
                    }
                }, {
                    key: "resetEverything",
                    value: function() {
                        this.ended_ = !1,
                        this.resetLoader(),
                        this.remove(0, this.duration_()),
                        this.trigger("reseteverything")
                    }
                }, {
                    key: "resetLoader",
                    value: function() {
                        this.fetchAtBuffer_ = !1,
                        this.resyncLoader()
                    }
                }, {
                    key: "resyncLoader",
                    value: function() {
                        this.mediaIndex = null,
                        this.syncPoint_ = null,
                        this.abort()
                    }
                }, {
                    key: "remove",
                    value: function(t, e) {
                        this.sourceUpdater_ && this.sourceUpdater_.remove(t, e),
                        (0,
                        _["default"])(t, e, this.segmentMetadataTrack_)
                    }
                }, {
                    key: "monitorBuffer_",
                    value: function() {
                        this.checkBufferTimeout_ && y["default"].clearTimeout(this.checkBufferTimeout_),
                        this.checkBufferTimeout_ = y["default"].setTimeout(this.monitorBufferTick_.bind(this), 1)
                    }
                }, {
                    key: "monitorBufferTick_",
                    value: function() {
                        "READY" === this.state && this.fillBuffer_(),
                        this.checkBufferTimeout_ && y["default"].clearTimeout(this.checkBufferTimeout_),
                        this.checkBufferTimeout_ = y["default"].setTimeout(this.monitorBufferTick_.bind(this), 500)
                    }
                }, {
                    key: "fillBuffer_",
                    value: function() {
                        if (!this.sourceUpdater_.updating()) {
                            this.syncPoint_ || (this.syncPoint_ = this.syncController_.getSyncPoint(this.playlist_, this.duration_(), this.currentTimeline_, this.currentTime_()));
                            var t = this.checkBuffer_(this.buffered_(), this.playlist_, this.mediaIndex, this.hasPlayed_(), this.currentTime_(), this.syncPoint_);
                            if (t) {
                                if (S(this.playlist_, this.mediaSource_, t.mediaIndex))
                                    return void this.endOfStream();
                                (t.mediaIndex !== this.playlist_.segments.length - 1 || "ended" !== this.mediaSource_.readyState || this.seeking_()) && ((t.timeline !== this.currentTimeline_ || null !== t.startOfSegment && t.startOfSegment < this.sourceUpdater_.timestampOffset()) && (this.syncController_.reset(),
                                t.timestampOffset = t.startOfSegment),
                                this.loadSegment_(t))
                            }
                        }
                    }
                }, {
                    key: "checkBuffer_",
                    value: function(t, e, i, n, r, a) {
                        var o = 0
                          , s = void 0;
                        t.length && (o = t.end(t.length - 1));
                        var u = Math.max(0, o - r);
                        if (!e.segments.length)
                            return null;
                        if (u >= this.goalBufferLength_())
                            return null;
                        if (!n && u >= 1)
                            return null;
                        if (this.logger_("checkBuffer_", "mediaIndex:", i, "hasPlayed:", n, "currentTime:", r, "syncPoint:", a, "fetchAtBuffer:", this.fetchAtBuffer_, "bufferedTime:", u),
                        null === a)
                            return i = this.getSyncSegmentCandidate_(e),
                            this.logger_("getSync", "mediaIndex:", i),
                            this.generateSegmentInfo_(e, i, null, !0);
                        if (null !== i) {
                            this.logger_("walkForward", "mediaIndex:", i + 1);
                            var c = e.segments[i];
                            return s = c && c.end ? c.end : o,
                            this.generateSegmentInfo_(e, i + 1, s, !1)
                        }
                        if (this.fetchAtBuffer_) {
                            var d = l["default"].getMediaInfoForTime(e, o, a.segmentIndex, a.time);
                            i = d.mediaIndex,
                            s = d.startTime
                        } else {
                            var d = l["default"].getMediaInfoForTime(e, r, a.segmentIndex, a.time);
                            i = d.mediaIndex,
                            s = d.startTime
                        }
                        return this.logger_("getMediaIndexForTime", "mediaIndex:", i, "startOfSegment:", s),
                        this.generateSegmentInfo_(e, i, s, !1)
                    }
                }, {
                    key: "getSyncSegmentCandidate_",
                    value: function(t) {
                        var e = this;
                        if (-1 === this.currentTimeline_)
                            return 0;
                        var i = t.segments.map(function(t, e) {
                            return {
                                timeline: t.timeline,
                                segmentIndex: e
                            }
                        }).filter(function(t) {
                            return t.timeline === e.currentTimeline_
                        });
                        return i.length ? i[Math.min(i.length - 1, 1)].segmentIndex : Math.max(t.segments.length - 1, 0)
                    }
                }, {
                    key: "generateSegmentInfo_",
                    value: function(t, e, i, n) {
                        if (e < 0 || e >= t.segments.length)
                            return null;
                        var r = t.segments[e];
                        return {
                            requestId: "segment-loader-" + Math.random(),
                            uri: r.resolvedUri,
                            mediaIndex: e,
                            isSyncRequest: n,
                            startOfSegment: i,
                            playlist: t,
                            bytes: null,
                            encryptedBytes: null,
                            timestampOffset: null,
                            timeline: r.timeline,
                            duration: r.duration,
                            segment: r
                        }
                    }
                }, {
                    key: "abortRequestEarly_",
                    value: function(t) {
                        if (this.hls_.tech_.paused() || !this.xhrOptions_.timeout || !this.playlist_.attributes.BANDWIDTH)
                            return !1;
                        if (Date.now() - (t.firstBytesReceivedAt || Date.now()) < 1e3)
                            return !1;
                        var e = this.currentTime_()
                          , i = t.bandwidth
                          , n = this.pendingSegment_.duration
                          , r = l["default"].estimateSegmentRequestTime(n, i, this.playlist_, t.bytesReceived)
                          , a = (0,
                        T.timeUntilRebuffer)(this.buffered_(), e, this.hls_.tech_.playbackRate()) - 1;
                        if (r <= a)
                            return !1;
                        var o = (0,
                        w.minRebufferMaxBandwidthSelector)({
                            master: this.hls_.playlists.master,
                            currentTime: e,
                            bandwidth: i,
                            duration: this.duration_(),
                            segmentDuration: n,
                            timeUntilRebuffer: a,
                            currentTimeline: this.currentTimeline_,
                            syncController: this.syncController_
                        });
                        if (o) {
                            var s = r - a
                              , u = s - o.rebufferingImpact
                              , c = .5;
                            return a <= T.TIME_FUDGE_FACTOR && (c = 1),
                            !(!o.playlist || o.playlist.uri === this.playlist_.uri || u < c) && (this.bandwidth = o.playlist.attributes.BANDWIDTH * g["default"].BANDWIDTH_VARIANCE + 1,
                            this.abort(),
                            this.trigger("earlyabort"),
                            !0)
                        }
                    }
                }, {
                    key: "handleProgress_",
                    value: function(t, e) {
                        this.pendingSegment_ && e.requestId === this.pendingSegment_.requestId && !this.abortRequestEarly_(e.stats) && this.trigger("progress")
                    }
                }, {
                    key: "loadSegment_",
                    value: function(t) {
                        this.state = "WAITING",
                        this.pendingSegment_ = t,
                        this.trimBackBuffer_(t),
                        t.abortRequests = (0,
                        x.mediaSegmentRequest)(this.hls_.xhr, this.xhrOptions_, this.decrypter_, this.createSimplifiedSegmentObj_(t), this.handleProgress_.bind(this), this.segmentRequestFinished_.bind(this))
                    }
                }, {
                    key: "trimBackBuffer_",
                    value: function(t) {
                        var e = E(this.seekable_(), this.currentTime_(), this.playlist_.targetDuration || 10);
                        e > 0 && this.remove(0, e)
                    }
                }, {
                    key: "createSimplifiedSegmentObj_",
                    value: function(t) {
                        var e = t.segment
                          , i = {
                            resolvedUri: e.resolvedUri,
                            byterange: e.byterange,
                            requestId: t.requestId
                        };
                        if (e.key) {
                            var n = e.key.iv || new Uint32Array([0, 0, 0, t.mediaIndex + t.playlist.mediaSequence]);
                            i.key = {
                                resolvedUri: e.key.resolvedUri,
                                iv: n
                            }
                        }
                        return e.map && (i.map = this.initSegment(e.map)),
                        i
                    }
                }, {
                    key: "segmentRequestFinished_",
                    value: function(t, e) {
                        if (this.mediaRequests += 1,
                        e.stats && (this.mediaBytesTransferred += e.stats.bytesReceived,
                        this.mediaTransferDuration += e.stats.roundTripTime),
                        !this.pendingSegment_)
                            return void (this.mediaRequestsAborted += 1);
                        if (e.requestId === this.pendingSegment_.requestId) {
                            if (t)
                                return this.pendingSegment_ = null,
                                this.state = "READY",
                                t.code === x.REQUEST_ERRORS.ABORTED ? void (this.mediaRequestsAborted += 1) : (this.pause(),
                                t.code === x.REQUEST_ERRORS.TIMEOUT ? (this.mediaRequestsTimedout += 1,
                                this.bandwidth = 1,
                                this.roundTrip = NaN,
                                void this.trigger("bandwidthupdate")) : (this.mediaRequestsErrored += 1,
                                this.error(t),
                                void this.trigger("error")));
                            this.bandwidth = e.stats.bandwidth,
                            this.roundTrip = e.stats.roundTripTime,
                            e.map && (e.map = this.initSegment(e.map, !0)),
                            this.processSegmentResponse_(e)
                        }
                    }
                }, {
                    key: "processSegmentResponse_",
                    value: function(t) {
                        var e = this.pendingSegment_;
                        e.bytes = t.bytes,
                        t.map && (e.segment.map.bytes = t.map.bytes),
                        e.endOfAllRequests = t.endOfAllRequests,
                        this.handleSegment_()
                    }
                }, {
                    key: "handleSegment_",
                    value: function() {
                        var t = this;
                        if (!this.pendingSegment_)
                            return void (this.state = "READY");
                        var e = this.pendingSegment_
                          , i = e.segment
                          , n = this.syncController_.probeSegmentInfo(e);
                        "undefined" == typeof this.startingMedia_ && n && (n.containsAudio || n.containsVideo) && (this.startingMedia_ = {
                            containsAudio: n.containsAudio,
                            containsVideo: n.containsVideo
                        });
                        var r = C(this.loaderType_, this.startingMedia_, n);
                        if (r)
                            return this.error({
                                message: r,
                                blacklistDuration: 1 / 0
                            }),
                            void this.trigger("error");
                        if (e.isSyncRequest)
                            return this.trigger("syncinfoupdate"),
                            this.pendingSegment_ = null,
                            void (this.state = "READY");
                        null !== e.timestampOffset && e.timestampOffset !== this.sourceUpdater_.timestampOffset() && (this.sourceUpdater_.timestampOffset(e.timestampOffset),
                        this.trigger("timestampoffset"));
                        var a = this.syncController_.mappingForTimeline(e.timeline);
                        null !== a && this.trigger({
                            type: "segmenttimemapping",
                            mapping: a
                        }),
                        this.state = "APPENDING",
                        i.map && function() {
                            var e = (0,
                            b.initSegmentId)(i.map);
                            if (!t.activeInitSegmentId_ || t.activeInitSegmentId_ !== e) {
                                var n = t.initSegment(i.map);
                                t.sourceUpdater_.appendBuffer(n.bytes, function() {
                                    t.activeInitSegmentId_ = e
                                })
                            }
                        }(),
                        e.byteLength = e.bytes.byteLength,
                        "number" == typeof i.start && "number" == typeof i.end ? this.mediaSecondsLoaded += i.end - i.start : this.mediaSecondsLoaded += i.duration,
                        this.sourceUpdater_.appendBuffer(e.bytes, this.handleUpdateEnd_.bind(this))
                    }
                }, {
                    key: "handleUpdateEnd_",
                    value: function() {
                        if (this.logger_("handleUpdateEnd_", "segmentInfo:", this.pendingSegment_),
                        !this.pendingSegment_)
                            return this.state = "READY",
                            void (this.paused() || this.monitorBuffer_());
                        var t = this.pendingSegment_
                          , e = t.segment
                          , i = null !== this.mediaIndex;
                        return this.pendingSegment_ = null,
                        this.recordThroughput_(t),
                        this.addSegmentMetadataCue_(t),
                        this.state = "READY",
                        this.mediaIndex = t.mediaIndex,
                        this.fetchAtBuffer_ = !0,
                        this.currentTimeline_ = t.timeline,
                        this.trigger("syncinfoupdate"),
                        e.end && this.currentTime_() - e.end > 3 * t.playlist.targetDuration ? void this.resetEverything() : (i && this.trigger("bandwidthupdate"),
                        this.trigger("progress"),
                        S(t.playlist, this.mediaSource_, t.mediaIndex + 1) && this.endOfStream(),
                        this.paused() || this.monitorBuffer_(),
                        void 0)
                    }
                }, {
                    key: "recordThroughput_",
                    value: function(t) {
                        var e = this.throughput.rate
                          , i = Date.now() - t.endOfAllRequests + 1
                          , n = Math.floor(t.byteLength / i * 8 * 1e3);
                        this.throughput.rate += (n - e) / ++this.throughput.count
                    }
                }, {
                    key: "logger_",
                    value: function() {}
                }, {
                    key: "addSegmentMetadataCue_",
                    value: function(t) {
                        if (this.segmentMetadataTrack_) {
                            var e = t.segment
                              , i = e.start
                              , n = e.end;
                            if (k(i) && k(n)) {
                                (0,
                                _["default"])(i, n, this.segmentMetadataTrack_);
                                var r = y["default"].WebKitDataCue || y["default"].VTTCue
                                  , a = {
                                    uri: t.uri,
                                    timeline: t.timeline,
                                    playlist: t.playlist.uri,
                                    start: i,
                                    end: n
                                }
                                  , o = JSON.stringify(a)
                                  , s = new r(i,n,o);
                                s.value = a,
                                this.segmentMetadataTrack_.addCue(s)
                            }
                        }
                    }
                }]),
                e
            }(d["default"].EventTarget);
            i["default"] = A
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    17: [function(t, e, i) {
        (function(t) {
            "use strict";
            function n(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var r = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value"in n && (n.writable = !0),
                        Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i),
                    n && t(e, n),
                    e
                }
            }()
              , a = "undefined" != typeof window ? window.videojs : void 0 !== t ? t.videojs : null
              , o = function(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }(a)
              , s = function() {}
              , u = function() {
                function t(e, i) {
                    var r = this;
                    n(this, t);
                    var a = function() {
                        r.sourceBuffer_ = e.addSourceBuffer(i),
                        r.onUpdateendCallback_ = function() {
                            var t = r.pendingCallback_;
                            r.pendingCallback_ = null,
                            t && t(),
                            r.runCallback_()
                        }
                        ,
                        r.sourceBuffer_.addEventListener("updateend", r.onUpdateendCallback_),
                        r.runCallback_()
                    };
                    this.callbacks_ = [],
                    this.pendingCallback_ = null,
                    this.timestampOffset_ = 0,
                    this.mediaSource = e,
                    this.processedAppend_ = !1,
                    "closed" === e.readyState ? e.addEventListener("sourceopen", a) : a()
                }
                return r(t, [{
                    key: "abort",
                    value: function(t) {
                        var e = this;
                        this.processedAppend_ && this.queueCallback_(function() {
                            e.sourceBuffer_.abort()
                        }, t)
                    }
                }, {
                    key: "appendBuffer",
                    value: function(t, e) {
                        var i = this;
                        this.processedAppend_ = !0,
                        this.queueCallback_(function() {
                            i.sourceBuffer_.appendBuffer(t)
                        }, e)
                    }
                }, {
                    key: "buffered",
                    value: function() {
                        return this.sourceBuffer_ ? this.sourceBuffer_.buffered : o["default"].createTimeRanges()
                    }
                }, {
                    key: "remove",
                    value: function(t, e) {
                        var i = this;
                        this.processedAppend_ && this.queueCallback_(function() {
                            i.sourceBuffer_.remove(t, e)
                        }, s)
                    }
                }, {
                    key: "updating",
                    value: function() {
                        return !this.sourceBuffer_ || this.sourceBuffer_.updating || this.pendingCallback_
                    }
                }, {
                    key: "timestampOffset",
                    value: function(t) {
                        var e = this;
                        return void 0 !== t && (this.queueCallback_(function() {
                            e.sourceBuffer_.timestampOffset = t
                        }),
                        this.timestampOffset_ = t),
                        this.timestampOffset_
                    }
                }, {
                    key: "queueCallback_",
                    value: function(t, e) {
                        this.callbacks_.push([t.bind(this), e]),
                        this.runCallback_()
                    }
                }, {
                    key: "runCallback_",
                    value: function() {
                        var t = void 0;
                        !this.updating() && this.callbacks_.length && (t = this.callbacks_.shift(),
                        this.pendingCallback_ = t[1],
                        t[0]())
                    }
                }, {
                    key: "dispose",
                    value: function() {
                        this.sourceBuffer_.removeEventListener("updateend", this.onUpdateendCallback_),
                        this.sourceBuffer_ && "open" === this.mediaSource.readyState && this.sourceBuffer_.abort()
                    }
                }]),
                t
            }();
            i["default"] = u,
            e.exports = i["default"]
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    18: [function(t, e, i) {
        (function(e) {
            "use strict";
            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            function r(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            function a(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var o = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value"in n && (n.writable = !0),
                        Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i),
                    n && t(e, n),
                    e
                }
            }()
              , s = function(t, e, i) {
                for (var n = !0; n; ) {
                    var r = t
                      , a = e
                      , o = i;
                    n = !1,
                    null === r && (r = Function.prototype);
                    var s = Object.getOwnPropertyDescriptor(r, a);
                    if (void 0 !== s) {
                        if ("value"in s)
                            return s.value;
                        var u = s.get;
                        return void 0 === u ? void 0 : u.call(o)
                    }
                    var l = Object.getPrototypeOf(r);
                    if (null === l)
                        return;
                    t = l,
                    e = a,
                    i = o,
                    n = !0,
                    s = l = void 0
                }
            }
              , u = t(57)
              , l = n(u)
              , c = t(59)
              , d = t(11)
              , h = "undefined" != typeof window ? window.videojs : void 0 !== e ? e.videojs : null
              , f = n(h)
              , p = [{
                name: "VOD",
                run: function(t, e, i, n, r) {
                    return i !== 1 / 0 ? {
                        time: 0,
                        segmentIndex: 0
                    } : null
                }
            }, {
                name: "ProgramDateTime",
                run: function(t, e, i, n, r) {
                    return t.datetimeToDisplayTime && e.dateTimeObject ? {
                        time: e.dateTimeObject.getTime() / 1e3 + t.datetimeToDisplayTime,
                        segmentIndex: 0
                    } : null
                }
            }, {
                name: "Segment",
                run: function(t, e, i, n, r) {
                    var a = e.segments || []
                      , o = null
                      , s = null;
                    r = r || 0;
                    for (var u = 0; u < a.length; u++) {
                        var l = a[u];
                        if (l.timeline === n && "undefined" != typeof l.start) {
                            var c = Math.abs(r - l.start);
                            if (null !== s && s < c)
                                break;
                            (!o || null === s || s >= c) && (s = c,
                            o = {
                                time: l.start,
                                segmentIndex: u
                            })
                        }
                    }
                    return o
                }
            }, {
                name: "Discontinuity",
                run: function(t, e, i, n, r) {
                    var a = null;
                    if (r = r || 0,
                    e.discontinuityStarts && e.discontinuityStarts.length)
                        for (var o = null, s = 0; s < e.discontinuityStarts.length; s++) {
                            var u = e.discontinuityStarts[s]
                              , l = e.discontinuitySequence + s + 1
                              , c = t.discontinuities[l];
                            if (c) {
                                var d = Math.abs(r - c.time);
                                if (null !== o && o < d)
                                    break;
                                (!a || null === o || o >= d) && (o = d,
                                a = {
                                    time: c.time,
                                    segmentIndex: u
                                })
                            }
                        }
                    return a
                }
            }, {
                name: "Playlist",
                run: function(t, e, i, n, r) {
                    return e.syncInfo ? {
                        time: e.syncInfo.time,
                        segmentIndex: e.syncInfo.mediaSequence - e.mediaSequence
                    } : null
                }
            }];
            i.syncPointStrategies = p;
            var g = function(t) {
                function e() {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                    r(this, e),
                    s(Object.getPrototypeOf(e.prototype), "constructor", this).call(this),
                    this.inspectCache_ = void 0,
                    this.timelines = [],
                    this.discontinuities = [],
                    this.datetimeToDisplayTime = null,
                    t.debug && (this.logger_ = f["default"].log.bind(f["default"], "sync-controller ->"))
                }
                return a(e, t),
                o(e, [{
                    key: "getSyncPoint",
                    value: function(t, e, i, n) {
                        var r = this.runStrategies_(t, e, i, n);
                        return r.length ? this.selectSyncPoint_(r, {
                            key: "time",
                            value: n
                        }) : null
                    }
                }, {
                    key: "getExpiredTime",
                    value: function(t, e) {
                        if (!t || !t.segments)
                            return null;
                        var i = this.runStrategies_(t, e, t.discontinuitySequence, 0);
                        if (!i.length)
                            return null;
                        var n = this.selectSyncPoint_(i, {
                            key: "segmentIndex",
                            value: 0
                        });
                        return n.segmentIndex > 0 && (n.time *= -1),
                        Math.abs(n.time + (0,
                        d.sumDurations)(t, n.segmentIndex, 0))
                    }
                }, {
                    key: "runStrategies_",
                    value: function(t, e, i, n) {
                        for (var r = [], a = 0; a < p.length; a++) {
                            var o = p[a]
                              , s = o.run(this, t, e, i, n);
                            s && (s.strategy = o.name,
                            r.push({
                                strategy: o.name,
                                syncPoint: s
                            }),
                            this.logger_("syncPoint found via <" + o.name + ">:", s))
                        }
                        return r
                    }
                }, {
                    key: "selectSyncPoint_",
                    value: function(t, e) {
                        for (var i = t[0].syncPoint, n = Math.abs(t[0].syncPoint[e.key] - e.value), r = t[0].strategy, a = 1; a < t.length; a++) {
                            var o = Math.abs(t[a].syncPoint[e.key] - e.value);
                            o < n && (n = o,
                            i = t[a].syncPoint,
                            r = t[a].strategy)
                        }
                        return this.logger_("syncPoint with strategy <" + r + "> chosen: ", i),
                        i
                    }
                }, {
                    key: "saveExpiredSegmentInfo",
                    value: function(t, e) {
                        for (var i = e.mediaSequence - t.mediaSequence, n = i - 1; n >= 0; n--) {
                            var r = t.segments[n];
                            if (r && "undefined" != typeof r.start) {
                                e.syncInfo = {
                                    mediaSequence: t.mediaSequence + n,
                                    time: r.start
                                },
                                this.logger_("playlist sync:", e.syncInfo),
                                this.trigger("syncinfoupdate");
                                break
                            }
                        }
                    }
                }, {
                    key: "setDateTimeMapping",
                    value: function(t) {
                        if (!this.datetimeToDisplayTime && t.dateTimeObject) {
                            var e = t.dateTimeObject.getTime() / 1e3;
                            this.datetimeToDisplayTime = -e
                        }
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.inspectCache_ = void 0
                    }
                }, {
                    key: "probeSegmentInfo",
                    value: function(t) {
                        var e = t.segment
                          , i = t.playlist
                          , n = void 0;
                        return n = e.map ? this.probeMp4Segment_(t) : this.probeTsSegment_(t),
                        n && this.calculateSegmentTimeMapping_(t, n) && (this.saveDiscontinuitySyncInfo_(t),
                        i.syncInfo || (i.syncInfo = {
                            mediaSequence: i.mediaSequence + t.mediaIndex,
                            time: e.start
                        })),
                        n
                    }
                }, {
                    key: "probeMp4Segment_",
                    value: function(t) {
                        var e = t.segment
                          , i = l["default"].timescale(e.map.bytes)
                          , n = l["default"].startTime(i, t.bytes);
                        return null !== t.timestampOffset && (t.timestampOffset -= n),
                        {
                            start: n,
                            end: n + e.duration
                        }
                    }
                }, {
                    key: "probeTsSegment_",
                    value: function(t) {
                        var e = (0,
                        c.inspect)(t.bytes, this.inspectCache_)
                          , i = void 0
                          , n = void 0;
                        return e ? (e.video && 2 === e.video.length ? (this.inspectCache_ = e.video[1].dts,
                        i = e.video[0].dtsTime,
                        n = e.video[1].dtsTime) : e.audio && 2 === e.audio.length && (this.inspectCache_ = e.audio[1].dts,
                        i = e.audio[0].dtsTime,
                        n = e.audio[1].dtsTime),
                        {
                            start: i,
                            end: n,
                            containsVideo: e.video && 2 === e.video.length,
                            containsAudio: e.audio && 2 === e.audio.length
                        }) : null
                    }
                }, {
                    key: "timestampOffsetForTimeline",
                    value: function(t) {
                        return "undefined" == typeof this.timelines[t] ? null : this.timelines[t].time
                    }
                }, {
                    key: "mappingForTimeline",
                    value: function(t) {
                        return "undefined" == typeof this.timelines[t] ? null : this.timelines[t].mapping
                    }
                }, {
                    key: "calculateSegmentTimeMapping_",
                    value: function(t, e) {
                        var i = t.segment
                          , n = this.timelines[t.timeline];
                        if (null !== t.timestampOffset)
                            this.logger_("tsO:", t.timestampOffset),
                            n = {
                                time: t.startOfSegment,
                                mapping: t.startOfSegment - e.start
                            },
                            this.timelines[t.timeline] = n,
                            this.trigger("timestampoffset"),
                            i.start = t.startOfSegment,
                            i.end = e.end + n.mapping;
                        else {
                            if (!n)
                                return !1;
                            i.start = e.start + n.mapping,
                            i.end = e.end + n.mapping
                        }
                        return !0
                    }
                }, {
                    key: "saveDiscontinuitySyncInfo_",
                    value: function(t) {
                        var e = t.playlist
                          , i = t.segment;
                        if (i.discontinuity)
                            this.discontinuities[i.timeline] = {
                                time: i.start,
                                accuracy: 0
                            };
                        else if (e.discontinuityStarts.length)
                            for (var n = 0; n < e.discontinuityStarts.length; n++) {
                                var r = e.discontinuityStarts[n]
                                  , a = e.discontinuitySequence + n + 1
                                  , o = r - t.mediaIndex
                                  , s = Math.abs(o);
                                if (!this.discontinuities[a] || this.discontinuities[a].accuracy > s) {
                                    var u = void 0;
                                    u = o < 0 ? i.start - (0,
                                    d.sumDurations)(e, t.mediaIndex, r) : i.end + (0,
                                    d.sumDurations)(e, t.mediaIndex + 1, r),
                                    this.discontinuities[a] = {
                                        time: u,
                                        accuracy: s
                                    }
                                }
                            }
                    }
                }, {
                    key: "logger_",
                    value: function() {}
                }]),
                e
            }(f["default"].EventTarget);
            i["default"] = g
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    19: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = function() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0]
              , e = {
                codecCount: 0
            }
              , i = void 0;
            return e.codecCount = t.split(",").length,
            e.codecCount = e.codecCount || 2,
            i = /(^|\s|,)+(avc1)([^ ,]*)/i.exec(t),
            i && (e.videoCodec = i[2],
            e.videoObjectTypeIndicator = i[3]),
            e.audioProfile = /(^|\s|,)+mp4a.[0-9A-Fa-f]+\.([0-9A-Fa-f]+)/i.exec(t),
            e.audioProfile = e.audioProfile && e.audioProfile[2],
            e
        };
        i.parseCodecs = n
    }
    , {}],
    20: [function(t, e, i) {
        (function(n) {
            "use strict";
            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            function a(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            function o(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value"in n && (n.writable = !0),
                        Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i),
                    n && t(e, n),
                    e
                }
            }()
              , u = function(t, e, i) {
                for (var n = !0; n; ) {
                    var r = t
                      , a = e
                      , o = i;
                    n = !1,
                    null === r && (r = Function.prototype);
                    var s = Object.getOwnPropertyDescriptor(r, a);
                    if (void 0 !== s) {
                        if ("value"in s)
                            return s.value;
                        var u = s.get;
                        return void 0 === u ? void 0 : u.call(o)
                    }
                    var l = Object.getPrototypeOf(r);
                    if (null === l)
                        return;
                    t = l,
                    e = a,
                    i = o,
                    n = !0,
                    s = l = void 0
                }
            }
              , l = t(16)
              , c = r(l)
              , d = "undefined" != typeof window ? window.videojs : void 0 !== n ? n.videojs : null
              , h = r(d)
              , f = t(32)
              , p = r(f)
              , g = t(72)
              , m = r(g)
              , y = t(2)
              , v = new Uint8Array("\n\n".split("").map(function(t) {
                return t.charCodeAt(0)
            }))
              , _ = function(t) {
                return String.fromCharCode.apply(null, t)
            }
              , b = function(t) {
                function e(t) {
                    var i = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                    a(this, e),
                    u(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t, i),
                    this.mediaSource_ = null,
                    this.subtitlesTrack_ = null
                }
                return o(e, t),
                s(e, [{
                    key: "buffered_",
                    value: function() {
                        if (!this.subtitlesTrack_ || !this.subtitlesTrack_.cues.length)
                            return h["default"].createTimeRanges();
                        var t = this.subtitlesTrack_.cues
                          , e = t[0].startTime
                          , i = t[t.length - 1].startTime;
                        return h["default"].createTimeRanges([[e, i]])
                    }
                }, {
                    key: "initSegment",
                    value: function(t) {
                        var e = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1];
                        if (!t)
                            return null;
                        var i = (0,
                        y.initSegmentId)(t)
                          , n = this.initSegments_[i];
                        if (e && !n && t.bytes) {
                            var r = v.byteLength + t.bytes.byteLength
                              , a = new Uint8Array(r);
                            a.set(t.bytes),
                            a.set(v, t.bytes.byteLength),
                            this.initSegments_[i] = n = {
                                resolvedUri: t.resolvedUri,
                                byterange: t.byterange,
                                bytes: a
                            }
                        }
                        return n || t
                    }
                }, {
                    key: "couldBeginLoading_",
                    value: function() {
                        return this.playlist_ && this.subtitlesTrack_ && !this.paused()
                    }
                }, {
                    key: "init_",
                    value: function() {
                        return this.state = "READY",
                        this.resetEverything(),
                        this.monitorBuffer_()
                    }
                }, {
                    key: "track",
                    value: function(t) {
                        return void 0 === t ? this.subtitlesTrack_ : (this.subtitlesTrack_ = t,
                        "INIT" === this.state && this.couldBeginLoading_() && this.init_(),
                        this.subtitlesTrack_)
                    }
                }, {
                    key: "remove",
                    value: function(t, e) {
                        (0,
                        m["default"])(t, e, this.subtitlesTrack_)
                    }
                }, {
                    key: "fillBuffer_",
                    value: function() {
                        var t = this;
                        this.syncPoint_ || (this.syncPoint_ = this.syncController_.getSyncPoint(this.playlist_, this.duration_(), this.currentTimeline_, this.currentTime_()));
                        var e = this.checkBuffer_(this.buffered_(), this.playlist_, this.mediaIndex, this.hasPlayed_(), this.currentTime_(), this.syncPoint_);
                        if (e = this.skipEmptySegments_(e)) {
                            if (null === this.syncController_.timestampOffsetForTimeline(e.timeline)) {
                                var i = function() {
                                    t.state = "READY",
                                    t.paused() || t.monitorBuffer_()
                                };
                                return this.syncController_.one("timestampoffset", i),
                                void (this.state = "WAITING_ON_TIMELINE")
                            }
                            this.loadSegment_(e)
                        }
                    }
                }, {
                    key: "skipEmptySegments_",
                    value: function(t) {
                        for (; t && t.segment.empty; )
                            t = this.generateSegmentInfo_(t.playlist, t.mediaIndex + 1, t.startOfSegment + t.duration, t.isSyncRequest);
                        return t
                    }
                }, {
                    key: "handleSegment_",
                    value: function() {
                        var t = this;
                        if (!this.pendingSegment_ || !this.subtitlesTrack_)
                            return void (this.state = "READY");
                        this.state = "APPENDING";
                        var e = this.pendingSegment_
                          , i = e.segment;
                        if ("function" != typeof p["default"].WebVTT && this.subtitlesTrack_ && this.subtitlesTrack_.tech_) {
                            var n = function() {
                                var e = function() {
                                    t.handleSegment_()
                                };
                                return t.state = "WAITING_ON_VTTJS",
                                t.subtitlesTrack_.tech_.one("vttjsloaded", e),
                                t.subtitlesTrack_.tech_.one("vttjserror", function() {
                                    t.subtitlesTrack_.tech_.off("vttjsloaded", e),
                                    t.error({
                                        message: "Error loading vtt.js"
                                    }),
                                    t.state = "READY",
                                    t.pause(),
                                    t.trigger("error")
                                }),
                                {
                                    v: void 0
                                }
                            }();
                            if ("object" == typeof n)
                                return n.v
                        }
                        i.requested = !0;
                        try {
                            this.parseVTTCues_(e)
                        } catch (r) {
                            return this.error({
                                message: r.message
                            }),
                            this.state = "READY",
                            this.pause(),
                            this.trigger("error")
                        }
                        return this.updateTimeMapping_(e, this.syncController_.timelines[e.timeline], this.playlist_),
                        e.isSyncRequest ? (this.trigger("syncinfoupdate"),
                        this.pendingSegment_ = null,
                        void (this.state = "READY")) : (e.byteLength = e.bytes.byteLength,
                        this.mediaSecondsLoaded += i.duration,
                        e.cues.length && this.remove(e.cues[0].endTime, e.cues[e.cues.length - 1].endTime),
                        e.cues.forEach(function(e) {
                            t.subtitlesTrack_.addCue(e)
                        }),
                        this.handleUpdateEnd_(),
                        void 0)
                    }
                }, {
                    key: "parseVTTCues_",
                    value: function(t) {
                        var e = void 0
                          , i = !1;
                        "function" == typeof p["default"].TextDecoder ? e = new p["default"].TextDecoder("utf8") : (e = p["default"].WebVTT.StringDecoder(),
                        i = !0);
                        var n = new p["default"].WebVTT.Parser(p["default"],p["default"].vttjs,e);
                        if (t.cues = [],
                        t.timestampmap = {
                            MPEGTS: 0,
                            LOCAL: 0
                        },
                        n.oncue = t.cues.push.bind(t.cues),
                        n.ontimestampmap = function(e) {
                            return t.timestampmap = e
                        }
                        ,
                        n.onparsingerror = function(t) {
                            h["default"].log.warn("Error encountered when parsing cues: " + t.message)
                        }
                        ,
                        t.segment.map) {
                            var r = t.segment.map.bytes;
                            i && (r = _(r)),
                            n.parse(r)
                        }
                        var a = t.bytes;
                        i && (a = _(a)),
                        n.parse(a),
                        n.flush()
                    }
                }, {
                    key: "updateTimeMapping_",
                    value: function(t, e, i) {
                        var n = t.segment;
                        if (e) {
                            if (!t.cues.length)
                                return void (n.empty = !0);
                            var r = t.timestampmap
                              , a = r.MPEGTS / 9e4 - r.LOCAL + e.mapping;
                            if (t.cues.forEach(function(t) {
                                t.startTime += a,
                                t.endTime += a
                            }),
                            !i.syncInfo) {
                                var o = t.cues[0].startTime
                                  , s = t.cues[t.cues.length - 1].startTime;
                                i.syncInfo = {
                                    mediaSequence: i.mediaSequence + t.mediaIndex,
                                    time: Math.min(o, s - n.duration)
                                }
                            }
                        }
                    }
                }]),
                e
            }(c["default"]);
            i["default"] = b,
            e.exports = i["default"]
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    21: [function(t, e, i) {
        (function(t) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var n = "undefined" != typeof window ? window.videojs : void 0 !== t ? t.videojs : null
              , r = function(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }(n)
              , a = function() {
                return function t(e, i) {
                    e = (0,
                    n.mergeOptions)({
                        timeout: 45e3
                    }, e);
                    var a = t.beforeRequest || r["default"].Hls.xhr.beforeRequest;
                    if (a && "function" == typeof a) {
                        var o = a(e);
                        o && (e = o)
                    }
                    var s = (0,
                    n.xhr)(e, function(t, e) {
                        var n = s.response;
                        !t && n && (s.responseTime = Date.now(),
                        s.roundTripTime = s.responseTime - s.requestTime,
                        s.bytesReceived = n.byteLength || n.length,
                        s.bandwidth || (s.bandwidth = Math.floor(s.bytesReceived / s.roundTripTime * 8 * 1e3))),
                        t && "ETIMEDOUT" === t.code && (s.timedout = !0),
                        t || s.aborted || 200 === e.statusCode || 206 === e.statusCode || 0 === e.statusCode || (t = new Error("XHR Failed with a response of: " + (s && (n || s.responseText)))),
                        i(t, s)
                    })
                      , u = s.abort;
                    return s.abort = function() {
                        return s.aborted = !0,
                        u.apply(s, arguments)
                    }
                    ,
                    s.uri = e.uri,
                    s.requestTime = Date.now(),
                    s
                }
            };
            i["default"] = a,
            e.exports = i["default"]
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    22: [function(t, e, i) {
        "use strict";
        function n(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var r = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i),
                n && t(e, n),
                e
            }
        }()
          , a = function() {
            var t = [[[], [], [], [], []], [[], [], [], [], []]]
              , e = t[0]
              , i = t[1]
              , n = e[4]
              , r = i[4]
              , a = void 0
              , o = void 0
              , s = void 0
              , u = []
              , l = []
              , c = void 0
              , d = void 0
              , h = void 0
              , f = void 0
              , p = void 0
              , g = void 0;
            for (a = 0; a < 256; a++)
                l[(u[a] = a << 1 ^ 283 * (a >> 7)) ^ a] = a;
            for (o = s = 0; !n[o]; o ^= c || 1,
            s = l[s] || 1)
                for (f = s ^ s << 1 ^ s << 2 ^ s << 3 ^ s << 4,
                f = f >> 8 ^ 255 & f ^ 99,
                n[o] = f,
                r[f] = o,
                h = u[d = u[c = u[o]]],
                g = 16843009 * h ^ 65537 * d ^ 257 * c ^ 16843008 * o,
                p = 257 * u[f] ^ 16843008 * f,
                a = 0; a < 4; a++)
                    e[a][o] = p = p << 24 ^ p >>> 8,
                    i[a][f] = g = g << 24 ^ g >>> 8;
            for (a = 0; a < 5; a++)
                e[a] = e[a].slice(0),
                i[a] = i[a].slice(0);
            return t
        }
          , o = null
          , s = function() {
            function t(e) {
                n(this, t),
                o || (o = a()),
                this._tables = [[o[0][0].slice(), o[0][1].slice(), o[0][2].slice(), o[0][3].slice(), o[0][4].slice()], [o[1][0].slice(), o[1][1].slice(), o[1][2].slice(), o[1][3].slice(), o[1][4].slice()]];
                var i = void 0
                  , r = void 0
                  , s = void 0
                  , u = void 0
                  , l = void 0
                  , c = this._tables[0][4]
                  , d = this._tables[1]
                  , h = e.length
                  , f = 1;
                if (4 !== h && 6 !== h && 8 !== h)
                    throw new Error("Invalid aes key size");
                for (u = e.slice(0),
                l = [],
                this._key = [u, l],
                i = h; i < 4 * h + 28; i++)
                    s = u[i - 1],
                    (i % h == 0 || 8 === h && i % h == 4) && (s = c[s >>> 24] << 24 ^ c[s >> 16 & 255] << 16 ^ c[s >> 8 & 255] << 8 ^ c[255 & s],
                    i % h == 0 && (s = s << 8 ^ s >>> 24 ^ f << 24,
                    f = f << 1 ^ 283 * (f >> 7))),
                    u[i] = u[i - h] ^ s;
                for (r = 0; i; r++,
                i--)
                    s = u[3 & r ? i : i - 4],
                    l[r] = i <= 4 || r < 4 ? s : d[0][c[s >>> 24]] ^ d[1][c[s >> 16 & 255]] ^ d[2][c[s >> 8 & 255]] ^ d[3][c[255 & s]]
            }
            return r(t, [{
                key: "decrypt",
                value: function(t, e, i, n, r, a) {
                    var o = this._key[1]
                      , s = t ^ o[0]
                      , u = n ^ o[1]
                      , l = i ^ o[2]
                      , c = e ^ o[3]
                      , d = void 0
                      , h = void 0
                      , f = void 0
                      , p = o.length / 4 - 2
                      , g = void 0
                      , m = 4
                      , y = this._tables[1]
                      , v = y[0]
                      , _ = y[1]
                      , b = y[2]
                      , x = y[3]
                      , T = y[4];
                    for (g = 0; g < p; g++)
                        d = v[s >>> 24] ^ _[u >> 16 & 255] ^ b[l >> 8 & 255] ^ x[255 & c] ^ o[m],
                        h = v[u >>> 24] ^ _[l >> 16 & 255] ^ b[c >> 8 & 255] ^ x[255 & s] ^ o[m + 1],
                        f = v[l >>> 24] ^ _[c >> 16 & 255] ^ b[s >> 8 & 255] ^ x[255 & u] ^ o[m + 2],
                        c = v[c >>> 24] ^ _[s >> 16 & 255] ^ b[u >> 8 & 255] ^ x[255 & l] ^ o[m + 3],
                        m += 4,
                        s = d,
                        u = h,
                        l = f;
                    for (g = 0; g < 4; g++)
                        r[(3 & -g) + a] = T[s >>> 24] << 24 ^ T[u >> 16 & 255] << 16 ^ T[l >> 8 & 255] << 8 ^ T[255 & c] ^ o[m++],
                        d = s,
                        s = u,
                        u = l,
                        l = c,
                        c = d
                }
            }]),
            t
        }();
        i["default"] = s,
        e.exports = i["default"]
    }
    , {}],
    23: [function(t, e, i) {
        "use strict";
        function n(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i),
                n && t(e, n),
                e
            }
        }()
          , o = function(t, e, i) {
            for (var n = !0; n; ) {
                var r = t
                  , a = e
                  , o = i;
                n = !1,
                null === r && (r = Function.prototype);
                var s = Object.getOwnPropertyDescriptor(r, a);
                if (void 0 !== s) {
                    if ("value"in s)
                        return s.value;
                    var u = s.get;
                    return void 0 === u ? void 0 : u.call(o)
                }
                var l = Object.getPrototypeOf(r);
                if (null === l)
                    return;
                t = l,
                e = a,
                i = o,
                n = !0,
                s = l = void 0
            }
        }
          , s = t(26)
          , u = function(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }(s)
          , l = function(t) {
            function e() {
                n(this, e),
                o(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, u["default"]),
                this.jobs = [],
                this.delay = 1,
                this.timeout_ = null
            }
            return r(e, t),
            a(e, [{
                key: "processJob_",
                value: function() {
                    this.jobs.shift()(),
                    this.jobs.length ? this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay) : this.timeout_ = null
                }
            }, {
                key: "push",
                value: function(t) {
                    this.jobs.push(t),
                    this.timeout_ || (this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay))
                }
            }]),
            e
        }(u["default"]);
        i["default"] = l,
        e.exports = i["default"]
    }
    , {}],
    24: [function(t, e, i) {
        "use strict";
        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        function r(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i),
                n && t(e, n),
                e
            }
        }()
          , o = t(22)
          , s = n(o)
          , u = t(23)
          , l = n(u)
          , c = t(28)
          , d = function(t) {
            return t << 24 | (65280 & t) << 8 | (16711680 & t) >> 8 | t >>> 24
        }
          , h = function(t, e, i) {
            var n = new Int32Array(t.buffer,t.byteOffset,t.byteLength >> 2)
              , r = new s["default"](Array.prototype.slice.call(e))
              , a = new Uint8Array(t.byteLength)
              , o = new Int32Array(a.buffer)
              , u = void 0
              , l = void 0
              , c = void 0
              , h = void 0
              , f = void 0
              , p = void 0
              , g = void 0
              , m = void 0
              , y = void 0;
            for (u = i[0],
            l = i[1],
            c = i[2],
            h = i[3],
            y = 0; y < n.length; y += 4)
                f = d(n[y]),
                p = d(n[y + 1]),
                g = d(n[y + 2]),
                m = d(n[y + 3]),
                r.decrypt(f, p, g, m, o, y),
                o[y] = d(o[y] ^ u),
                o[y + 1] = d(o[y + 1] ^ l),
                o[y + 2] = d(o[y + 2] ^ c),
                o[y + 3] = d(o[y + 3] ^ h),
                u = f,
                l = p,
                c = g,
                h = m;
            return a
        };
        i.decrypt = h;
        var f = function() {
            function t(e, i, n, a) {
                r(this, t);
                var o = t.STEP
                  , s = new Int32Array(e.buffer)
                  , u = new Uint8Array(e.byteLength)
                  , h = 0;
                for (this.asyncStream_ = new l["default"],
                this.asyncStream_.push(this.decryptChunk_(s.subarray(h, h + o), i, n, u)),
                h = o; h < s.length; h += o)
                    n = new Uint32Array([d(s[h - 4]), d(s[h - 3]), d(s[h - 2]), d(s[h - 1])]),
                    this.asyncStream_.push(this.decryptChunk_(s.subarray(h, h + o), i, n, u));
                this.asyncStream_.push(function() {
                    a(null, (0,
                    c.unpad)(u))
                })
            }
            return a(t, [{
                key: "decryptChunk_",
                value: function(t, e, i, n) {
                    return function() {
                        var r = h(t, e, i);
                        n.set(r, t.byteOffset)
                    }
                }
            }], [{
                key: "STEP",
                get: function() {
                    return 32e3
                }
            }]),
            t
        }();
        i.Decrypter = f,
        i["default"] = {
            Decrypter: f,
            decrypt: h
        }
    }
    , {}],
    25: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t(24)
          , r = t(23)
          , a = function(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }(r);
        i["default"] = {
            decrypt: n.decrypt,
            Decrypter: n.Decrypter,
            AsyncStream: a["default"]
        },
        e.exports = i["default"]
    }
    , {}],
    26: [function(t, e, i) {
        "use strict";
        function n(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var r = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i),
                n && t(e, n),
                e
            }
        }()
          , a = function() {
            function t() {
                n(this, t),
                this.listeners = {}
            }
            return r(t, [{
                key: "on",
                value: function(t, e) {
                    this.listeners[t] || (this.listeners[t] = []),
                    this.listeners[t].push(e)
                }
            }, {
                key: "off",
                value: function(t, e) {
                    var i = void 0;
                    return !!this.listeners[t] && (i = this.listeners[t].indexOf(e),
                    this.listeners[t].splice(i, 1),
                    i > -1)
                }
            }, {
                key: "trigger",
                value: function(t) {
                    var e = void 0
                      , i = void 0
                      , n = void 0
                      , r = void 0;
                    if (e = this.listeners[t])
                        if (2 === arguments.length)
                            for (n = e.length,
                            i = 0; i < n; ++i)
                                e[i].call(this, arguments[1]);
                        else
                            for (r = Array.prototype.slice.call(arguments, 1),
                            n = e.length,
                            i = 0; i < n; ++i)
                                e[i].apply(this, r)
                }
            }, {
                key: "dispose",
                value: function() {
                    this.listeners = {}
                }
            }, {
                key: "pipe",
                value: function(t) {
                    this.on("data", function(e) {
                        t.push(e)
                    })
                }
            }]),
            t
        }();
        i["default"] = a,
        e.exports = i["default"]
    }
    , {}],
    27: [function(t, e, i) {
        "use strict";
        var n;
        e.exports = function(t) {
            var e = n[t.byteLength % 16 || 0]
              , i = new Uint8Array(t.byteLength + e.length);
            return i.set(t),
            i.set(e, t.byteLength),
            i
        }
        ,
        n = [[16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16], [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15], [14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14], [13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13], [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12], [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10], [9, 9, 9, 9, 9, 9, 9, 9, 9], [8, 8, 8, 8, 8, 8, 8, 8], [7, 7, 7, 7, 7, 7, 7], [6, 6, 6, 6, 6, 6], [5, 5, 5, 5, 5], [4, 4, 4, 4], [3, 3, 3], [2, 2], [1]]
    }
    , {}],
    28: [function(t, e, i) {
        "use strict";
        i.pad = t(27),
        i.unpad = t(29)
    }
    , {}],
    29: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            return t.subarray(0, t.byteLength - t[t.byteLength - 1])
        }
    }
    , {}],
    30: [function(t, e, i) {}
    , {}],
    31: [function(t, e, i) {
        (function(i) {
            var n, r = void 0 !== i ? i : "undefined" != typeof window ? window : {}, a = t(30);
            "undefined" != typeof document ? n = document : (n = r["__GLOBAL_DOCUMENT_CACHE@4"]) || (n = r["__GLOBAL_DOCUMENT_CACHE@4"] = a),
            e.exports = n
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    32: [function(t, e, i) {
        (function(t) {
            var i;
            i = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {},
            e.exports = i
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    33: [function(t, e, i) {
        "use strict";
        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        var r = t(34)
          , a = n(r)
          , o = t(35)
          , s = n(o)
          , u = t(36)
          , l = n(u);
        e.exports = {
            LineStream: a["default"],
            ParseStream: s["default"],
            Parser: l["default"]
        }
    }
    , {}],
    34: [function(t, e, i) {
        "use strict";
        function n(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function a(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var o = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i),
                n && t(e, n),
                e
            }
        }()
          , s = t(37)
          , u = function(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }(s)
          , l = function(t) {
            function e() {
                n(this, e);
                var t = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return t.buffer = "",
                t
            }
            return a(e, t),
            o(e, [{
                key: "push",
                value: function(t) {
                    var e = void 0;
                    for (this.buffer += t,
                    e = this.buffer.indexOf("\n"); e > -1; e = this.buffer.indexOf("\n"))
                        this.trigger("data", this.buffer.substring(0, e)),
                        this.buffer = this.buffer.substring(e + 1)
                }
            }]),
            e
        }(u["default"]);
        i["default"] = l
    }
    , {}],
    35: [function(t, e, i) {
        "use strict";
        function n(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function a(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var o = function() {
            function t(t, e) {
                var i = []
                  , n = !0
                  , r = !1
                  , a = void 0;
                try {
                    for (var o, s = t[Symbol.iterator](); !(n = (o = s.next()).done) && (i.push(o.value),
                    !e || i.length !== e); n = !0)
                        ;
                } catch (u) {
                    r = !0,
                    a = u
                } finally {
                    try {
                        !n && s["return"] && s["return"]()
                    } finally {
                        if (r)
                            throw a
                    }
                }
                return i
            }
            return function(e, i) {
                if (Array.isArray(e))
                    return e;
                if (Symbol.iterator in Object(e))
                    return t(e, i);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }()
          , s = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i),
                n && t(e, n),
                e
            }
        }()
          , u = t(37)
          , l = function(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }(u)
          , c = function() {
            return new RegExp('(?:^|,)((?:[^=]*)=(?:"[^"]*"|[^,]*))')
        }
          , d = function(t) {
            for (var e = t.split(c()), i = {}, n = e.length, r = void 0; n--; )
                "" !== e[n] && (r = /([^=]*)=(.*)/.exec(e[n]).slice(1),
                r[0] = r[0].replace(/^\s+|\s+$/g, ""),
                r[1] = r[1].replace(/^\s+|\s+$/g, ""),
                r[1] = r[1].replace(/^['"](.*)['"]$/g, "$1"),
                i[r[0]] = r[1]);
            return i
        }
          , h = function(t) {
            function e() {
                return n(this, e),
                r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this))
            }
            return a(e, t),
            s(e, [{
                key: "push",
                value: function(t) {
                    var e = void 0
                      , i = void 0;
                    if (t = t.replace(/^[\u0000\s]+|[\u0000\s]+$/g, ""),
                    0 !== t.length) {
                        if ("#" !== t[0])
                            return void this.trigger("data", {
                                type: "uri",
                                uri: t
                            });
                        if (0 !== t.indexOf("#EXT"))
                            return void this.trigger("data", {
                                type: "comment",
                                text: t.slice(1)
                            });
                        if (t = t.replace("\r", ""),
                        e = /^#EXTM3U/.exec(t))
                            return void this.trigger("data", {
                                type: "tag",
                                tagType: "m3u"
                            });
                        if (e = /^#EXTINF:?([0-9\.]*)?,?(.*)?$/.exec(t))
                            return i = {
                                type: "tag",
                                tagType: "inf"
                            },
                            e[1] && (i.duration = parseFloat(e[1])),
                            e[2] && (i.title = e[2]),
                            void this.trigger("data", i);
                        if (e = /^#EXT-X-TARGETDURATION:?([0-9.]*)?/.exec(t))
                            return i = {
                                type: "tag",
                                tagType: "targetduration"
                            },
                            e[1] && (i.duration = parseInt(e[1], 10)),
                            void this.trigger("data", i);
                        if (e = /^#ZEN-TOTAL-DURATION:?([0-9.]*)?/.exec(t))
                            return i = {
                                type: "tag",
                                tagType: "totalduration"
                            },
                            e[1] && (i.duration = parseInt(e[1], 10)),
                            void this.trigger("data", i);
                        if (e = /^#EXT-X-VERSION:?([0-9.]*)?/.exec(t))
                            return i = {
                                type: "tag",
                                tagType: "version"
                            },
                            e[1] && (i.version = parseInt(e[1], 10)),
                            void this.trigger("data", i);
                        if (e = /^#EXT-X-MEDIA-SEQUENCE:?(\-?[0-9.]*)?/.exec(t))
                            return i = {
                                type: "tag",
                                tagType: "media-sequence"
                            },
                            e[1] && (i.number = parseInt(e[1], 10)),
                            void this.trigger("data", i);
                        if (e = /^#EXT-X-DISCONTINUITY-SEQUENCE:?(\-?[0-9.]*)?/.exec(t))
                            return i = {
                                type: "tag",
                                tagType: "discontinuity-sequence"
                            },
                            e[1] && (i.number = parseInt(e[1], 10)),
                            void this.trigger("data", i);
                        if (e = /^#EXT-X-PLAYLIST-TYPE:?(.*)?$/.exec(t))
                            return i = {
                                type: "tag",
                                tagType: "playlist-type"
                            },
                            e[1] && (i.playlistType = e[1]),
                            void this.trigger("data", i);
                        if (e = /^#EXT-X-BYTERANGE:?([0-9.]*)?@?([0-9.]*)?/.exec(t))
                            return i = {
                                type: "tag",
                                tagType: "byterange"
                            },
                            e[1] && (i.length = parseInt(e[1], 10)),
                            e[2] && (i.offset = parseInt(e[2], 10)),
                            void this.trigger("data", i);
                        if (e = /^#EXT-X-ALLOW-CACHE:?(YES|NO)?/.exec(t))
                            return i = {
                                type: "tag",
                                tagType: "allow-cache"
                            },
                            e[1] && (i.allowed = !/NO/.test(e[1])),
                            void this.trigger("data", i);
                        if (e = /^#EXT-X-MAP:?(.*)$/.exec(t)) {
                            if (i = {
                                type: "tag",
                                tagType: "map"
                            },
                            e[1]) {
                                var n = d(e[1]);
                                if (n.URI && (i.uri = n.URI),
                                n.BYTERANGE) {
                                    var r = n.BYTERANGE.split("@")
                                      , a = o(r, 2)
                                      , s = a[0]
                                      , u = a[1];
                                    i.byterange = {},
                                    s && (i.byterange.length = parseInt(s, 10)),
                                    u && (i.byterange.offset = parseInt(u, 10))
                                }
                            }
                            return void this.trigger("data", i)
                        }
                        if (e = /^#EXT-X-STREAM-INF:?(.*)$/.exec(t)) {
                            if (i = {
                                type: "tag",
                                tagType: "stream-inf"
                            },
                            e[1]) {
                                if (i.attributes = d(e[1]),
                                i.attributes.RESOLUTION) {
                                    var l = i.attributes.RESOLUTION.split("x")
                                      , c = {};
                                    l[0] && (c.width = parseInt(l[0], 10)),
                                    l[1] && (c.height = parseInt(l[1], 10)),
                                    i.attributes.RESOLUTION = c
                                }
                                i.attributes.BANDWIDTH && (i.attributes.BANDWIDTH = parseInt(i.attributes.BANDWIDTH, 10)),
                                i.attributes["PROGRAM-ID"] && (i.attributes["PROGRAM-ID"] = parseInt(i.attributes["PROGRAM-ID"], 10))
                            }
                            return void this.trigger("data", i)
                        }
                        if (e = /^#EXT-X-MEDIA:?(.*)$/.exec(t))
                            return i = {
                                type: "tag",
                                tagType: "media"
                            },
                            e[1] && (i.attributes = d(e[1])),
                            void this.trigger("data", i);
                        if (e = /^#EXT-X-ENDLIST/.exec(t))
                            return void this.trigger("data", {
                                type: "tag",
                                tagType: "endlist"
                            });
                        if (e = /^#EXT-X-DISCONTINUITY/.exec(t))
                            return void this.trigger("data", {
                                type: "tag",
                                tagType: "discontinuity"
                            });
                        if (e = /^#EXT-X-PROGRAM-DATE-TIME:?(.*)$/.exec(t))
                            return i = {
                                type: "tag",
                                tagType: "program-date-time"
                            },
                            e[1] && (i.dateTimeString = e[1],
                            i.dateTimeObject = new Date(e[1])),
                            void this.trigger("data", i);
                        if (e = /^#EXT-X-KEY:?(.*)$/.exec(t))
                            return i = {
                                type: "tag",
                                tagType: "key"
                            },
                            e[1] && (i.attributes = d(e[1]),
                            i.attributes.IV && ("0x" === i.attributes.IV.substring(0, 2).toLowerCase() && (i.attributes.IV = i.attributes.IV.substring(2)),
                            i.attributes.IV = i.attributes.IV.match(/.{8}/g),
                            i.attributes.IV[0] = parseInt(i.attributes.IV[0], 16),
                            i.attributes.IV[1] = parseInt(i.attributes.IV[1], 16),
                            i.attributes.IV[2] = parseInt(i.attributes.IV[2], 16),
                            i.attributes.IV[3] = parseInt(i.attributes.IV[3], 16),
                            i.attributes.IV = new Uint32Array(i.attributes.IV))),
                            void this.trigger("data", i);
                        if (e = /^#EXT-X-CUE-OUT-CONT:?(.*)?$/.exec(t))
                            return i = {
                                type: "tag",
                                tagType: "cue-out-cont"
                            },
                            e[1] ? i.data = e[1] : i.data = "",
                            void this.trigger("data", i);
                        if (e = /^#EXT-X-CUE-OUT:?(.*)?$/.exec(t))
                            return i = {
                                type: "tag",
                                tagType: "cue-out"
                            },
                            e[1] ? i.data = e[1] : i.data = "",
                            void this.trigger("data", i);
                        if (e = /^#EXT-X-CUE-IN:?(.*)?$/.exec(t))
                            return i = {
                                type: "tag",
                                tagType: "cue-in"
                            },
                            e[1] ? i.data = e[1] : i.data = "",
                            void this.trigger("data", i);
                        this.trigger("data", {
                            type: "tag",
                            data: t.slice(4)
                        })
                    }
                }
            }]),
            e
        }(l["default"]);
        i["default"] = h
    }
    , {}],
    36: [function(t, e, i) {
        "use strict";
        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        function r(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function a(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function o(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i)
                    Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
            }
            return t
        }
          , u = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i),
                n && t(e, n),
                e
            }
        }()
          , l = t(37)
          , c = n(l)
          , d = t(34)
          , h = n(d)
          , f = t(35)
          , p = n(f)
          , g = function(t) {
            function e() {
                r(this, e);
                var t = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                t.lineStream = new h["default"],
                t.parseStream = new p["default"],
                t.lineStream.pipe(t.parseStream);
                var i = t
                  , n = []
                  , o = {}
                  , u = void 0
                  , l = void 0
                  , c = function() {}
                  , d = {
                    AUDIO: {},
                    VIDEO: {},
                    "CLOSED-CAPTIONS": {},
                    SUBTITLES: {}
                }
                  , f = 0;
                return t.manifest = {
                    allowCache: !0,
                    discontinuityStarts: [],
                    segments: []
                },
                t.parseStream.on("data", function(t) {
                    var e = void 0
                      , r = void 0;
                    ({
                        tag: function() {
                            (({
                                "allow-cache": function() {
                                    this.manifest.allowCache = t.allowed,
                                    "allowed"in t || (this.trigger("info", {
                                        message: "defaulting allowCache to YES"
                                    }),
                                    this.manifest.allowCache = !0)
                                },
                                byterange: function() {
                                    var e = {};
                                    "length"in t && (o.byterange = e,
                                    e.length = t.length,
                                    "offset"in t || (this.trigger("info", {
                                        message: "defaulting offset to zero"
                                    }),
                                    t.offset = 0)),
                                    "offset"in t && (o.byterange = e,
                                    e.offset = t.offset)
                                },
                                endlist: function() {
                                    this.manifest.endList = !0
                                },
                                inf: function() {
                                    "mediaSequence"in this.manifest || (this.manifest.mediaSequence = 0,
                                    this.trigger("info", {
                                        message: "defaulting media sequence to zero"
                                    })),
                                    "discontinuitySequence"in this.manifest || (this.manifest.discontinuitySequence = 0,
                                    this.trigger("info", {
                                        message: "defaulting discontinuity sequence to zero"
                                    })),
                                    t.duration > 0 && (o.duration = t.duration),
                                    0 === t.duration && (o.duration = .01,
                                    this.trigger("info", {
                                        message: "updating zero segment duration to a small value"
                                    })),
                                    this.manifest.segments = n
                                },
                                key: function() {
                                    return t.attributes ? "NONE" === t.attributes.METHOD ? void (l = null) : t.attributes.URI ? (t.attributes.METHOD || this.trigger("warn", {
                                        message: "defaulting key method to AES-128"
                                    }),
                                    l = {
                                        method: t.attributes.METHOD || "AES-128",
                                        uri: t.attributes.URI
                                    },
                                    void ("undefined" != typeof t.attributes.IV && (l.iv = t.attributes.IV))) : void this.trigger("warn", {
                                        message: "ignoring key declaration without URI"
                                    }) : void this.trigger("warn", {
                                        message: "ignoring key declaration without attribute list"
                                    })
                                },
                                "media-sequence": function() {
                                    return isFinite(t.number) ? void (this.manifest.mediaSequence = t.number) : void this.trigger("warn", {
                                        message: "ignoring invalid media sequence: " + t.number
                                    })
                                },
                                "discontinuity-sequence": function() {
                                    return isFinite(t.number) ? (this.manifest.discontinuitySequence = t.number,
                                    void (f = t.number)) : void this.trigger("warn", {
                                        message: "ignoring invalid discontinuity sequence: " + t.number
                                    })
                                },
                                "playlist-type": function() {
                                    return /VOD|EVENT/.test(t.playlistType) ? void (this.manifest.playlistType = t.playlistType) : void this.trigger("warn", {
                                        message: "ignoring unknown playlist type: " + t.playlist
                                    })
                                },
                                map: function() {
                                    u = {},
                                    t.uri && (u.uri = t.uri),
                                    t.byterange && (u.byterange = t.byterange)
                                },
                                "stream-inf": function() {
                                    return this.manifest.playlists = n,
                                    this.manifest.mediaGroups = this.manifest.mediaGroups || d,
                                    t.attributes ? (o.attributes || (o.attributes = {}),
                                    void s(o.attributes, t.attributes)) : void this.trigger("warn", {
                                        message: "ignoring empty stream-inf attributes"
                                    })
                                },
                                media: function() {
                                    if (this.manifest.mediaGroups = this.manifest.mediaGroups || d,
                                    !(t.attributes && t.attributes.TYPE && t.attributes["GROUP-ID"] && t.attributes.NAME))
                                        return void this.trigger("warn", {
                                            message: "ignoring incomplete or missing media group"
                                        });
                                    var i = this.manifest.mediaGroups[t.attributes.TYPE];
                                    i[t.attributes["GROUP-ID"]] = i[t.attributes["GROUP-ID"]] || {},
                                    e = i[t.attributes["GROUP-ID"]],
                                    r = {
                                        "default": /yes/i.test(t.attributes.DEFAULT)
                                    },
                                    r["default"] ? r.autoselect = !0 : r.autoselect = /yes/i.test(t.attributes.AUTOSELECT),
                                    t.attributes.LANGUAGE && (r.language = t.attributes.LANGUAGE),
                                    t.attributes.URI && (r.uri = t.attributes.URI),
                                    t.attributes["INSTREAM-ID"] && (r.instreamId = t.attributes["INSTREAM-ID"]),
                                    t.attributes.CHARACTERISTICS && (r.characteristics = t.attributes.CHARACTERISTICS),
                                    t.attributes.FORCED && (r.forced = /yes/i.test(t.attributes.FORCED)),
                                    e[t.attributes.NAME] = r
                                },
                                discontinuity: function() {
                                    f += 1,
                                    o.discontinuity = !0,
                                    this.manifest.discontinuityStarts.push(n.length)
                                },
                                "program-date-time": function() {
                                    this.manifest.dateTimeString = t.dateTimeString,
                                    this.manifest.dateTimeObject = t.dateTimeObject
                                },
                                targetduration: function() {
                                    return !isFinite(t.duration) || t.duration < 0 ? void this.trigger("warn", {
                                        message: "ignoring invalid target duration: " + t.duration
                                    }) : void (this.manifest.targetDuration = t.duration)
                                },
                                totalduration: function() {
                                    return !isFinite(t.duration) || t.duration < 0 ? void this.trigger("warn", {
                                        message: "ignoring invalid total duration: " + t.duration
                                    }) : void (this.manifest.totalDuration = t.duration)
                                },
                                "cue-out": function() {
                                    o.cueOut = t.data
                                },
                                "cue-out-cont": function() {
                                    o.cueOutCont = t.data
                                },
                                "cue-in": function() {
                                    o.cueIn = t.data
                                }
                            })[t.tagType] || c).call(i)
                        },
                        uri: function() {
                            o.uri = t.uri,
                            n.push(o),
                            !this.manifest.targetDuration || "duration"in o || (this.trigger("warn", {
                                message: "defaulting segment duration to the target duration"
                            }),
                            o.duration = this.manifest.targetDuration),
                            l && (o.key = l),
                            o.timeline = f,
                            u && (o.map = u),
                            o = {}
                        },
                        comment: function() {}
                    })[t.type].call(i)
                }),
                t
            }
            return o(e, t),
            u(e, [{
                key: "push",
                value: function(t) {
                    this.lineStream.push(t)
                }
            }, {
                key: "end",
                value: function() {
                    this.lineStream.push("\n")
                }
            }]),
            e
        }(c["default"]);
        i["default"] = g
    }
    , {}],
    37: [function(t, e, i) {
        "use strict";
        function n(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var r = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i),
                n && t(e, n),
                e
            }
        }()
          , a = function() {
            function t() {
                n(this, t),
                this.listeners = {}
            }
            return r(t, [{
                key: "on",
                value: function(t, e) {
                    this.listeners[t] || (this.listeners[t] = []),
                    this.listeners[t].push(e)
                }
            }, {
                key: "off",
                value: function(t, e) {
                    if (!this.listeners[t])
                        return !1;
                    var i = this.listeners[t].indexOf(e);
                    return this.listeners[t].splice(i, 1),
                    i > -1
                }
            }, {
                key: "trigger",
                value: function(t) {
                    var e = this.listeners[t]
                      , i = void 0
                      , n = void 0
                      , r = void 0;
                    if (e)
                        if (2 === arguments.length)
                            for (n = e.length,
                            i = 0; i < n; ++i)
                                e[i].call(this, arguments[1]);
                        else
                            for (r = Array.prototype.slice.call(arguments, 1),
                            n = e.length,
                            i = 0; i < n; ++i)
                                e[i].apply(this, r)
                }
            }, {
                key: "dispose",
                value: function() {
                    this.listeners = {}
                }
            }, {
                key: "pipe",
                value: function(t) {
                    this.on("data", function(e) {
                        t.push(e)
                    })
                }
            }]),
            t
        }();
        i["default"] = a
    }
    , {}],
    38: [function(t, e, i) {
        "use strict";
        var n, r = t(62);
        n = function() {
            var t = new Uint8Array
              , e = 0;
            n.prototype.init.call(this),
            this.setTimestamp = function(t) {
                e = t
            }
            ,
            this.parseId3TagSize = function(t, e) {
                var i = t[e + 6] << 21 | t[e + 7] << 14 | t[e + 8] << 7 | t[e + 9];
                return (16 & t[e + 5]) >> 4 ? i + 20 : i + 10
            }
            ,
            this.parseAdtsSize = function(t, e) {
                var i = (224 & t[e + 5]) >> 5
                  , n = t[e + 4] << 3;
                return 6144 & t[e + 3] | n | i
            }
            ,
            this.push = function(i) {
                var n, r, a, o, s = 0, u = 0;
                for (t.length ? (o = t.length,
                t = new Uint8Array(i.byteLength + o),
                t.set(t.subarray(0, o)),
                t.set(i, o)) : t = i; t.length - u >= 3; )
                    if (t[u] !== "I".charCodeAt(0) || t[u + 1] !== "D".charCodeAt(0) || t[u + 2] !== "3".charCodeAt(0))
                        if (!0 & t[u] && 240 == (240 & t[u + 1])) {
                            if (t.length - u < 7)
                                break;
                            if ((s = this.parseAdtsSize(t, u)) > t.length)
                                break;
                            a = {
                                type: "audio",
                                data: t.subarray(u, u + s),
                                pts: e,
                                dts: e
                            },
                            this.trigger("data", a),
                            u += s
                        } else
                            u++;
                    else {
                        if (t.length - u < 10)
                            break;
                        if ((s = this.parseId3TagSize(t, u)) > t.length)
                            break;
                        r = {
                            type: "timed-metadata",
                            data: t.subarray(u, u + s)
                        },
                        this.trigger("data", r),
                        u += s
                    }
                n = t.length - u,
                t = n > 0 ? t.subarray(u) : new Uint8Array
            }
        }
        ,
        n.prototype = new r,
        e.exports = n
    }
    , {}],
    39: [function(t, e, i) {
        "use strict";
        var n = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350]
          , r = function(t) {
            return t[0] << 21 | t[1] << 14 | t[2] << 7 | t[3]
        }
          , a = function(t, e, i) {
            var n, r = "";
            for (n = e; n < i; n++)
                r += "%" + ("00" + t[n].toString(16)).slice(-2);
            return r
        }
          , o = function(t, e, i) {
            return unescape(a(t, e, i))
        }
          , s = function(t, e) {
            var i = t[e + 6] << 21 | t[e + 7] << 14 | t[e + 8] << 7 | t[e + 9];
            return (16 & t[e + 5]) >> 4 ? i + 20 : i + 10
        }
          , u = function(t, e) {
            var i = (224 & t[e + 5]) >> 5
              , n = t[e + 4] << 3;
            return 6144 & t[e + 3] | n | i
        }
          , l = function(t, e) {
            return t[e] === "I".charCodeAt(0) && t[e + 1] === "D".charCodeAt(0) && t[e + 2] === "3".charCodeAt(0) ? "timed-metadata" : !0 & t[e] && 240 == (240 & t[e + 1]) ? "audio" : null
        }
          , c = function(t) {
            for (var e = 0; e + 5 < t.length; ) {
                if (255 === t[e] && 240 == (246 & t[e + 1]))
                    return n[(60 & t[e + 2]) >>> 2];
                e++
            }
            return null
        }
          , d = function(t) {
            var e, i, n;
            e = 10,
            64 & t[5] && (e += 4,
            e += r(t.subarray(10, 14)));
            do {
                if ((i = r(t.subarray(e + 4, e + 8))) < 1)
                    return null;
                if ("PRIV" === String.fromCharCode(t[e], t[e + 1], t[e + 2], t[e + 3])) {
                    n = t.subarray(e + 10, e + i + 10);
                    for (var a = 0; a < n.byteLength; a++)
                        if (0 === n[a]) {
                            var s = o(n, 0, a);
                            if ("com.apple.streaming.transportStreamTimestamp" === s) {
                                var u = n.subarray(a + 1)
                                  , l = (1 & u[3]) << 30 | u[4] << 22 | u[5] << 14 | u[6] << 6 | u[7] >>> 2;
                                return l *= 4,
                                l += 3 & u[7]
                            }
                            break
                        }
                }
                e += 10,
                e += i
            } while (e < t.byteLength);return null
        };
        e.exports = {
            parseId3TagSize: s,
            parseAdtsSize: u,
            parseType: l,
            parseSampleRate: c,
            parseAacTimestamp: d
        }
    }
    , {}],
    40: [function(t, e, i) {
        "use strict";
        var n, r = t(62), a = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
        n = function() {
            var t;
            n.prototype.init.call(this),
            this.push = function(e) {
                var i, n, r, o, s, u, l = 0, c = 0;
                if ("audio" === e.type)
                    for (t ? (o = t,
                    t = new Uint8Array(o.byteLength + e.data.byteLength),
                    t.set(o),
                    t.set(e.data, o.byteLength)) : t = e.data; l + 5 < t.length; )
                        if (255 === t[l] && 240 == (246 & t[l + 1])) {
                            if (n = 2 * (1 & ~t[l + 1]),
                            i = (3 & t[l + 3]) << 11 | t[l + 4] << 3 | (224 & t[l + 5]) >> 5,
                            s = 1024 * (1 + (3 & t[l + 6])),
                            u = 9e4 * s / a[(60 & t[l + 2]) >>> 2],
                            r = l + i,
                            t.byteLength < r)
                                return;
                            if (this.trigger("data", {
                                pts: e.pts + c * u,
                                dts: e.dts + c * u,
                                sampleCount: s,
                                audioobjecttype: 1 + (t[l + 2] >>> 6 & 3),
                                channelcount: (1 & t[l + 2]) << 2 | (192 & t[l + 3]) >>> 6,
                                samplerate: a[(60 & t[l + 2]) >>> 2],
                                samplingfrequencyindex: (60 & t[l + 2]) >>> 2,
                                samplesize: 16,
                                data: t.subarray(l + 7 + n, r)
                            }),
                            t.byteLength === r)
                                return void (t = void 0);
                            c++,
                            t = t.subarray(r)
                        } else
                            l++
            }
            ,
            this.flush = function() {
                this.trigger("done")
            }
        }
        ,
        n.prototype = new r,
        e.exports = n
    }
    , {}],
    41: [function(t, e, i) {
        "use strict";
        var n, r, a, o = t(62), s = t(61);
        r = function() {
            var t, e, i = 0;
            r.prototype.init.call(this),
            this.push = function(n) {
                var r;
                for (e ? (r = new Uint8Array(e.byteLength + n.data.byteLength),
                r.set(e),
                r.set(n.data, e.byteLength),
                e = r) : e = n.data; i < e.byteLength - 3; i++)
                    if (1 === e[i + 2]) {
                        t = i + 5;
                        break
                    }
                for (; t < e.byteLength; )
                    switch (e[t]) {
                    case 0:
                        if (0 !== e[t - 1]) {
                            t += 2;
                            break
                        }
                        if (0 !== e[t - 2]) {
                            t++;
                            break
                        }
                        i + 3 !== t - 2 && this.trigger("data", e.subarray(i + 3, t - 2));
                        do
                            t++;
                        while (1 !== e[t] && t < e.length);i = t - 2,
                        t += 3;
                        break;
                    case 1:
                        if (0 !== e[t - 1] || 0 !== e[t - 2]) {
                            t += 3;
                            break
                        }
                        this.trigger("data", e.subarray(i + 3, t - 2)),
                        i = t - 2,
                        t += 3;
                        break;
                    default:
                        t += 3
                    }
                e = e.subarray(i),
                t -= i,
                i = 0
            }
            ,
            this.flush = function() {
                e && e.byteLength > 3 && this.trigger("data", e.subarray(i + 3)),
                e = null,
                i = 0,
                this.trigger("done")
            }
        }
        ,
        r.prototype = new o,
        a = {
            100: !0,
            110: !0,
            122: !0,
            244: !0,
            44: !0,
            83: !0,
            86: !0,
            118: !0,
            128: !0,
            138: !0,
            139: !0,
            134: !0
        },
        n = function() {
            var t, e, i, o, u, l, c, d = new r;
            n.prototype.init.call(this),
            t = this,
            this.push = function(t) {
                "video" === t.type && (e = t.trackId,
                i = t.pts,
                o = t.dts,
                d.push(t))
            }
            ,
            d.on("data", function(n) {
                var r = {
                    trackId: e,
                    pts: i,
                    dts: o,
                    data: n
                };
                switch (31 & n[0]) {
                case 5:
                    r.nalUnitType = "slice_layer_without_partitioning_rbsp_idr";
                    break;
                case 6:
                    r.nalUnitType = "sei_rbsp",
                    r.escapedRBSP = u(n.subarray(1));
                    break;
                case 7:
                    r.nalUnitType = "seq_parameter_set_rbsp",
                    r.escapedRBSP = u(n.subarray(1)),
                    r.config = l(r.escapedRBSP);
                    break;
                case 8:
                    r.nalUnitType = "pic_parameter_set_rbsp";
                    break;
                case 9:
                    r.nalUnitType = "access_unit_delimiter_rbsp"
                }
                t.trigger("data", r)
            }),
            d.on("done", function() {
                t.trigger("done")
            }),
            this.flush = function() {
                d.flush()
            }
            ,
            c = function(t, e) {
                var i, n, r = 8, a = 8;
                for (i = 0; i < t; i++)
                    0 !== a && (n = e.readExpGolomb(),
                    a = (r + n + 256) % 256),
                    r = 0 === a ? r : a
            }
            ,
            u = function(t) {
                for (var e, i, n = t.byteLength, r = [], a = 1; a < n - 2; )
                    0 === t[a] && 0 === t[a + 1] && 3 === t[a + 2] ? (r.push(a + 2),
                    a += 2) : a++;
                if (0 === r.length)
                    return t;
                e = n - r.length,
                i = new Uint8Array(e);
                var o = 0;
                for (a = 0; a < e; o++,
                a++)
                    o === r[0] && (o++,
                    r.shift()),
                    i[a] = t[o];
                return i
            }
            ,
            l = function(t) {
                var e, i, n, r, o, u, l, d, h, f, p, g, m, y = 0, v = 0, _ = 0, b = 0, x = 1;
                if (e = new s(t),
                i = e.readUnsignedByte(),
                r = e.readUnsignedByte(),
                n = e.readUnsignedByte(),
                e.skipUnsignedExpGolomb(),
                a[i] && (o = e.readUnsignedExpGolomb(),
                3 === o && e.skipBits(1),
                e.skipUnsignedExpGolomb(),
                e.skipUnsignedExpGolomb(),
                e.skipBits(1),
                e.readBoolean()))
                    for (p = 3 !== o ? 8 : 12,
                    m = 0; m < p; m++)
                        e.readBoolean() && (m < 6 ? c(16, e) : c(64, e));
                if (e.skipUnsignedExpGolomb(),
                0 === (u = e.readUnsignedExpGolomb()))
                    e.readUnsignedExpGolomb();
                else if (1 === u)
                    for (e.skipBits(1),
                    e.skipExpGolomb(),
                    e.skipExpGolomb(),
                    l = e.readUnsignedExpGolomb(),
                    m = 0; m < l; m++)
                        e.skipExpGolomb();
                if (e.skipUnsignedExpGolomb(),
                e.skipBits(1),
                d = e.readUnsignedExpGolomb(),
                h = e.readUnsignedExpGolomb(),
                f = e.readBits(1),
                0 === f && e.skipBits(1),
                e.skipBits(1),
                e.readBoolean() && (y = e.readUnsignedExpGolomb(),
                v = e.readUnsignedExpGolomb(),
                _ = e.readUnsignedExpGolomb(),
                b = e.readUnsignedExpGolomb()),
                e.readBoolean() && e.readBoolean()) {
                    switch (e.readUnsignedByte()) {
                    case 1:
                        g = [1, 1];
                        break;
                    case 2:
                        g = [12, 11];
                        break;
                    case 3:
                        g = [10, 11];
                        break;
                    case 4:
                        g = [16, 11];
                        break;
                    case 5:
                        g = [40, 33];
                        break;
                    case 6:
                        g = [24, 11];
                        break;
                    case 7:
                        g = [20, 11];
                        break;
                    case 8:
                        g = [32, 11];
                        break;
                    case 9:
                        g = [80, 33];
                        break;
                    case 10:
                        g = [18, 11];
                        break;
                    case 11:
                        g = [15, 11];
                        break;
                    case 12:
                        g = [64, 33];
                        break;
                    case 13:
                        g = [160, 99];
                        break;
                    case 14:
                        g = [4, 3];
                        break;
                    case 15:
                        g = [3, 2];
                        break;
                    case 16:
                        g = [2, 1];
                        break;
                    case 255:
                        g = [e.readUnsignedByte() << 8 | e.readUnsignedByte(), e.readUnsignedByte() << 8 | e.readUnsignedByte()]
                    }
                    g && (x = g[0] / g[1])
                }
                return {
                    profileIdc: i,
                    levelIdc: n,
                    profileCompatibility: r,
                    width: Math.ceil((16 * (d + 1) - 2 * y - 2 * v) * x),
                    height: (2 - f) * (h + 1) * 16 - 2 * _ - 2 * b
                }
            }
        }
        ,
        n.prototype = new o,
        e.exports = {
            H264Stream: n,
            NalByteStream: r
        }
    }
    , {}],
    42: [function(t, e, i) {
        var n = [33, 16, 5, 32, 164, 27]
          , r = [33, 65, 108, 84, 1, 2, 4, 8, 168, 2, 4, 8, 17, 191, 252]
          , a = function(t) {
            for (var e = []; t--; )
                e.push(0);
            return e
        }
          , o = {
            96e3: [n, [227, 64], a(154), [56]],
            88200: [n, [231], a(170), [56]],
            64e3: [n, [248, 192], a(240), [56]],
            48e3: [n, [255, 192], a(268), [55, 148, 128], a(54), [112]],
            44100: [n, [255, 192], a(268), [55, 163, 128], a(84), [112]],
            32e3: [n, [255, 192], a(268), [55, 234], a(226), [112]],
            24e3: [n, [255, 192], a(268), [55, 255, 128], a(268), [111, 112], a(126), [224]],
            16e3: [n, [255, 192], a(268), [55, 255, 128], a(268), [111, 255], a(269), [223, 108], a(195), [1, 192]],
            12e3: [r, a(268), [3, 127, 248], a(268), [6, 255, 240], a(268), [13, 255, 224], a(268), [27, 253, 128], a(259), [56]],
            11025: [r, a(268), [3, 127, 248], a(268), [6, 255, 240], a(268), [13, 255, 224], a(268), [27, 255, 192], a(268), [55, 175, 128], a(108), [112]],
            8e3: [r, a(268), [3, 121, 16], a(47), [7]]
        };
        e.exports = function(t) {
            return Object.keys(t).reduce(function(e, i) {
                return e[i] = new Uint8Array(t[i].reduce(function(t, e) {
                    return t.concat(e)
                }, [])),
                e
            }, {})
        }(o)
    }
    , {}],
    43: [function(t, e, i) {
        "use strict";
        var n = t(62)
          , r = function(t) {
            this.numberOfTracks = 0,
            this.metadataStream = t.metadataStream,
            this.videoTags = [],
            this.audioTags = [],
            this.videoTrack = null,
            this.audioTrack = null,
            this.pendingCaptions = [],
            this.pendingMetadata = [],
            this.pendingTracks = 0,
            this.processedTracks = 0,
            r.prototype.init.call(this),
            this.push = function(t) {
                return t.text ? this.pendingCaptions.push(t) : t.frames ? this.pendingMetadata.push(t) : ("video" === t.track.type && (this.videoTrack = t.track,
                this.videoTags = t.tags,
                this.pendingTracks++),
                void ("audio" === t.track.type && (this.audioTrack = t.track,
                this.audioTags = t.tags,
                this.pendingTracks++)))
            }
        };
        r.prototype = new n,
        r.prototype.flush = function(t) {
            var e, i, n, r, a = {
                tags: {},
                captions: [],
                captionStreams: {},
                metadata: []
            };
            if (this.pendingTracks < this.numberOfTracks) {
                if ("VideoSegmentStream" !== t && "AudioSegmentStream" !== t)
                    return;
                if (0 === this.pendingTracks && ++this.processedTracks < this.numberOfTracks)
                    return
            }
            if (this.processedTracks += this.pendingTracks,
            this.pendingTracks = 0,
            !(this.processedTracks < this.numberOfTracks)) {
                for (this.videoTrack ? r = this.videoTrack.timelineStartInfo.pts : this.audioTrack && (r = this.audioTrack.timelineStartInfo.pts),
                a.tags.videoTags = this.videoTags,
                a.tags.audioTags = this.audioTags,
                n = 0; n < this.pendingCaptions.length; n++)
                    i = this.pendingCaptions[n],
                    i.startTime = i.startPts - r,
                    i.startTime /= 9e4,
                    i.endTime = i.endPts - r,
                    i.endTime /= 9e4,
                    a.captionStreams[i.stream] = !0,
                    a.captions.push(i);
                for (n = 0; n < this.pendingMetadata.length; n++)
                    e = this.pendingMetadata[n],
                    e.cueTime = e.pts - r,
                    e.cueTime /= 9e4,
                    a.metadata.push(e);
                a.metadata.dispatchType = this.metadataStream.dispatchType,
                this.videoTrack = null,
                this.audioTrack = null,
                this.videoTags = [],
                this.audioTags = [],
                this.pendingCaptions.length = 0,
                this.pendingMetadata.length = 0,
                this.pendingTracks = 0,
                this.processedTracks = 0,
                this.trigger("data", a),
                this.trigger("done")
            }
        }
        ,
        e.exports = r
    }
    , {}],
    44: [function(t, e, i) {
        "use strict";
        var n = t(45)
          , r = function(t, e, i) {
            var r, a, o, s = new Uint8Array(9), u = new DataView(s.buffer);
            return t = t || 0,
            e = void 0 === e || e,
            i = void 0 === i || i,
            u.setUint8(0, 70),
            u.setUint8(1, 76),
            u.setUint8(2, 86),
            u.setUint8(3, 1),
            u.setUint8(4, (e ? 4 : 0) | (i ? 1 : 0)),
            u.setUint32(5, s.byteLength),
            t <= 0 ? (a = new Uint8Array(s.byteLength + 4),
            a.set(s),
            a.set([0, 0, 0, 0], s.byteLength),
            a) : (r = new n(n.METADATA_TAG),
            r.pts = r.dts = 0,
            r.writeMetaDataDouble("duration", t),
            o = r.finalize().length,
            a = new Uint8Array(s.byteLength + o),
            a.set(s),
            a.set(u.byteLength, o),
            a)
        };
        e.exports = r
    }
    , {}],
    45: [function(t, e, i) {
        "use strict";
        var n;
        n = function(t, e) {
            var i, r = 0, a = 16384, o = function(t, e) {
                var i, n = t.position + e;
                n < t.bytes.byteLength || (i = new Uint8Array(2 * n),
                i.set(t.bytes.subarray(0, t.position), 0),
                t.bytes = i,
                t.view = new DataView(t.bytes.buffer))
            }, s = n.widthBytes || new Uint8Array("width".length), u = n.heightBytes || new Uint8Array("height".length), l = n.videocodecidBytes || new Uint8Array("videocodecid".length);
            if (!n.widthBytes) {
                for (i = 0; i < "width".length; i++)
                    s[i] = "width".charCodeAt(i);
                for (i = 0; i < "height".length; i++)
                    u[i] = "height".charCodeAt(i);
                for (i = 0; i < "videocodecid".length; i++)
                    l[i] = "videocodecid".charCodeAt(i);
                n.widthBytes = s,
                n.heightBytes = u,
                n.videocodecidBytes = l
            }
            switch (this.keyFrame = !1,
            t) {
            case n.VIDEO_TAG:
                this.length = 16,
                a *= 6;
                break;
            case n.AUDIO_TAG:
                this.length = 13,
                this.keyFrame = !0;
                break;
            case n.METADATA_TAG:
                this.length = 29,
                this.keyFrame = !0;
                break;
            default:
                throw new Error("Unknown FLV tag type")
            }
            this.bytes = new Uint8Array(a),
            this.view = new DataView(this.bytes.buffer),
            this.bytes[0] = t,
            this.position = this.length,
            this.keyFrame = e,
            this.pts = 0,
            this.dts = 0,
            this.writeBytes = function(t, e, i) {
                var n, r = e || 0;
                i = i || t.byteLength,
                n = r + i,
                o(this, i),
                this.bytes.set(t.subarray(r, n), this.position),
                this.position += i,
                this.length = Math.max(this.length, this.position)
            }
            ,
            this.writeByte = function(t) {
                o(this, 1),
                this.bytes[this.position] = t,
                this.position++,
                this.length = Math.max(this.length, this.position)
            }
            ,
            this.writeShort = function(t) {
                o(this, 2),
                this.view.setUint16(this.position, t),
                this.position += 2,
                this.length = Math.max(this.length, this.position)
            }
            ,
            this.negIndex = function(t) {
                return this.bytes[this.length - t]
            }
            ,
            this.nalUnitSize = function() {
                return 0 === r ? 0 : this.length - (r + 4)
            }
            ,
            this.startNalUnit = function() {
                if (r > 0)
                    throw new Error("Attempted to create new NAL wihout closing the old one");
                r = this.length,
                this.length += 4,
                this.position = this.length
            }
            ,
            this.endNalUnit = function(t) {
                var e, i;
                this.length === r + 4 ? this.length -= 4 : r > 0 && (e = r + 4,
                i = this.length - e,
                this.position = r,
                this.view.setUint32(this.position, i),
                this.position = this.length,
                t && t.push(this.bytes.subarray(e, e + i))),
                r = 0
            }
            ,
            this.writeMetaDataDouble = function(t, e) {
                var i;
                if (o(this, 2 + t.length + 9),
                this.view.setUint16(this.position, t.length),
                this.position += 2,
                "width" === t)
                    this.bytes.set(s, this.position),
                    this.position += 5;
                else if ("height" === t)
                    this.bytes.set(u, this.position),
                    this.position += 6;
                else if ("videocodecid" === t)
                    this.bytes.set(l, this.position),
                    this.position += 12;
                else
                    for (i = 0; i < t.length; i++)
                        this.bytes[this.position] = t.charCodeAt(i),
                        this.position++;
                this.position++,
                this.view.setFloat64(this.position, e),
                this.position += 8,
                this.length = Math.max(this.length, this.position),
                ++r
            }
            ,
            this.writeMetaDataBoolean = function(t, e) {
                var i;
                for (o(this, 2),
                this.view.setUint16(this.position, t.length),
                this.position += 2,
                i = 0; i < t.length; i++)
                    o(this, 1),
                    this.bytes[this.position] = t.charCodeAt(i),
                    this.position++;
                o(this, 2),
                this.view.setUint8(this.position, 1),
                this.position++,
                this.view.setUint8(this.position, e ? 1 : 0),
                this.position++,
                this.length = Math.max(this.length, this.position),
                ++r
            }
            ,
            this.finalize = function() {
                var t, i;
                switch (this.bytes[0]) {
                case n.VIDEO_TAG:
                    this.bytes[11] = 7 | (this.keyFrame || e ? 16 : 32),
                    this.bytes[12] = e ? 0 : 1,
                    t = this.pts - this.dts,
                    this.bytes[13] = (16711680 & t) >>> 16,
                    this.bytes[14] = (65280 & t) >>> 8,
                    this.bytes[15] = (255 & t) >>> 0;
                    break;
                case n.AUDIO_TAG:
                    this.bytes[11] = 175,
                    this.bytes[12] = e ? 0 : 1;
                    break;
                case n.METADATA_TAG:
                    this.position = 11,
                    this.view.setUint8(this.position, 2),
                    this.position++,
                    this.view.setUint16(this.position, 10),
                    this.position += 2,
                    this.bytes.set([111, 110, 77, 101, 116, 97, 68, 97, 116, 97], this.position),
                    this.position += 10,
                    this.bytes[this.position] = 8,
                    this.position++,
                    this.view.setUint32(this.position, r),
                    this.position = this.length,
                    this.bytes.set([0, 0, 9], this.position),
                    this.position += 3,
                    this.length = this.position
                }
                return i = this.length - 11,
                this.bytes[1] = (16711680 & i) >>> 16,
                this.bytes[2] = (65280 & i) >>> 8,
                this.bytes[3] = (255 & i) >>> 0,
                this.bytes[4] = (16711680 & this.dts) >>> 16,
                this.bytes[5] = (65280 & this.dts) >>> 8,
                this.bytes[6] = (255 & this.dts) >>> 0,
                this.bytes[7] = (4278190080 & this.dts) >>> 24,
                this.bytes[8] = 0,
                this.bytes[9] = 0,
                this.bytes[10] = 0,
                o(this, 4),
                this.view.setUint32(this.length, this.length),
                this.length += 4,
                this.position += 4,
                this.bytes = this.bytes.subarray(0, this.length),
                this.frameTime = n.frameTime(this.bytes),
                this
            }
        }
        ,
        n.AUDIO_TAG = 8,
        n.VIDEO_TAG = 9,
        n.METADATA_TAG = 18,
        n.isAudioFrame = function(t) {
            return n.AUDIO_TAG === t[0]
        }
        ,
        n.isVideoFrame = function(t) {
            return n.VIDEO_TAG === t[0]
        }
        ,
        n.isMetaData = function(t) {
            return n.METADATA_TAG === t[0]
        }
        ,
        n.isKeyFrame = function(t) {
            return n.isVideoFrame(t) ? 23 === t[11] : !!n.isAudioFrame(t) || !!n.isMetaData(t)
        }
        ,
        n.frameTime = function(t) {
            var e = t[4] << 16;
            return e |= t[5] << 8,
            e |= t[6] << 0,
            e |= t[7] << 24
        }
        ,
        e.exports = n
    }
    , {}],
    46: [function(t, e, i) {
        e.exports = {
            tag: t(45),
            Transmuxer: t(48),
            getFlvHeader: t(44)
        }
    }
    , {}],
    47: [function(t, e, i) {
        "use strict";
        var n = function() {
            var t = this;
            this.list = [],
            this.push = function(t) {
                this.list.push({
                    bytes: t.bytes,
                    dts: t.dts,
                    pts: t.pts,
                    keyFrame: t.keyFrame,
                    metaDataTag: t.metaDataTag
                })
            }
            ,
            Object.defineProperty(this, "length", {
                get: function() {
                    return t.list.length
                }
            })
        };
        e.exports = n
    }
    , {}],
    48: [function(t, e, i) {
        "use strict";
        var n, r, a, o, s, u, l = t(62), c = t(45), d = t(50), h = t(40), f = t(41).H264Stream, p = t(43), g = t(47);
        o = function(t, e) {
            "number" == typeof e.pts && (void 0 === t.timelineStartInfo.pts ? t.timelineStartInfo.pts = e.pts : t.timelineStartInfo.pts = Math.min(t.timelineStartInfo.pts, e.pts)),
            "number" == typeof e.dts && (void 0 === t.timelineStartInfo.dts ? t.timelineStartInfo.dts = e.dts : t.timelineStartInfo.dts = Math.min(t.timelineStartInfo.dts, e.dts))
        }
        ,
        s = function(t, e) {
            var i = new c(c.METADATA_TAG);
            return i.dts = e,
            i.pts = e,
            i.writeMetaDataDouble("videocodecid", 7),
            i.writeMetaDataDouble("width", t.width),
            i.writeMetaDataDouble("height", t.height),
            i
        }
        ,
        u = function(t, e) {
            var i, n = new c(c.VIDEO_TAG,(!0));
            for (n.dts = e,
            n.pts = e,
            n.writeByte(1),
            n.writeByte(t.profileIdc),
            n.writeByte(t.profileCompatibility),
            n.writeByte(t.levelIdc),
            n.writeByte(255),
            n.writeByte(225),
            n.writeShort(t.sps[0].length),
            n.writeBytes(t.sps[0]),
            n.writeByte(t.pps.length),
            i = 0; i < t.pps.length; ++i)
                n.writeShort(t.pps[i].length),
                n.writeBytes(t.pps[i]);
            return n
        }
        ,
        a = function(t) {
            var e, i = [], n = [];
            a.prototype.init.call(this),
            this.push = function(e) {
                o(t, e),
                t && (t.audioobjecttype = e.audioobjecttype,
                t.channelcount = e.channelcount,
                t.samplerate = e.samplerate,
                t.samplingfrequencyindex = e.samplingfrequencyindex,
                t.samplesize = e.samplesize,
                t.extraData = t.audioobjecttype << 11 | t.samplingfrequencyindex << 7 | t.channelcount << 3),
                e.pts = Math.round(e.pts / 90),
                e.dts = Math.round(e.dts / 90),
                i.push(e)
            }
            ,
            this.flush = function() {
                var r, a, o, s = new g;
                if (0 === i.length)
                    return void this.trigger("done", "AudioSegmentStream");
                for (o = -(1 / 0); i.length; )
                    r = i.shift(),
                    n.length && r.pts >= n[0] && (o = n.shift(),
                    this.writeMetaDataTags(s, o)),
                    (t.extraData !== e || r.pts - o >= 1e3) && (this.writeMetaDataTags(s, r.pts),
                    e = t.extraData,
                    o = r.pts),
                    a = new c(c.AUDIO_TAG),
                    a.pts = r.pts,
                    a.dts = r.dts,
                    a.writeBytes(r.data),
                    s.push(a.finalize());
                n.length = 0,
                e = null,
                this.trigger("data", {
                    track: t,
                    tags: s.list
                }),
                this.trigger("done", "AudioSegmentStream")
            }
            ,
            this.writeMetaDataTags = function(e, i) {
                var n;
                n = new c(c.METADATA_TAG),
                n.pts = i,
                n.dts = i,
                n.writeMetaDataDouble("audiocodecid", 10),
                n.writeMetaDataBoolean("stereo", 2 === t.channelcount),
                n.writeMetaDataDouble("audiosamplerate", t.samplerate),
                n.writeMetaDataDouble("audiosamplesize", 16),
                e.push(n.finalize()),
                n = new c(c.AUDIO_TAG,(!0)),
                n.pts = i,
                n.dts = i,
                n.view.setUint16(n.position, t.extraData),
                n.position += 2,
                n.length = Math.max(n.length, n.position),
                e.push(n.finalize())
            }
            ,
            this.onVideoKeyFrame = function(t) {
                n.push(t)
            }
        }
        ,
        a.prototype = new l,
        r = function(t) {
            var e, i, n = [];
            r.prototype.init.call(this),
            this.finishFrame = function(n, r) {
                if (r) {
                    if (e && t && t.newMetadata && (r.keyFrame || 0 === n.length)) {
                        var a = s(e, r.dts).finalize()
                          , o = u(t, r.dts).finalize();
                        a.metaDataTag = o.metaDataTag = !0,
                        n.push(a),
                        n.push(o),
                        t.newMetadata = !1,
                        this.trigger("keyframe", r.dts)
                    }
                    r.endNalUnit(),
                    n.push(r.finalize()),
                    i = null
                }
            }
            ,
            this.push = function(e) {
                o(t, e),
                e.pts = Math.round(e.pts / 90),
                e.dts = Math.round(e.dts / 90),
                n.push(e)
            }
            ,
            this.flush = function() {
                for (var r, a = new g; n.length && "access_unit_delimiter_rbsp" !== n[0].nalUnitType; )
                    n.shift();
                if (0 === n.length)
                    return void this.trigger("done", "VideoSegmentStream");
                for (; n.length; )
                    r = n.shift(),
                    "seq_parameter_set_rbsp" === r.nalUnitType ? (t.newMetadata = !0,
                    e = r.config,
                    t.width = e.width,
                    t.height = e.height,
                    t.sps = [r.data],
                    t.profileIdc = e.profileIdc,
                    t.levelIdc = e.levelIdc,
                    t.profileCompatibility = e.profileCompatibility,
                    i.endNalUnit()) : "pic_parameter_set_rbsp" === r.nalUnitType ? (t.newMetadata = !0,
                    t.pps = [r.data],
                    i.endNalUnit()) : "access_unit_delimiter_rbsp" === r.nalUnitType ? (i && this.finishFrame(a, i),
                    i = new c(c.VIDEO_TAG),
                    i.pts = r.pts,
                    i.dts = r.dts) : ("slice_layer_without_partitioning_rbsp_idr" === r.nalUnitType && (i.keyFrame = !0),
                    i.endNalUnit()),
                    i.startNalUnit(),
                    i.writeBytes(r.data);
                i && this.finishFrame(a, i),
                this.trigger("data", {
                    track: t,
                    tags: a.list
                }),
                this.trigger("done", "VideoSegmentStream")
            }
        }
        ,
        r.prototype = new l,
        n = function(t) {
            var e, i, o, s, u, l, c, g, m, y, v, _, b = this;
            n.prototype.init.call(this),
            t = t || {},
            this.metadataStream = new d.MetadataStream,
            t.metadataStream = this.metadataStream,
            e = new d.TransportPacketStream,
            i = new d.TransportParseStream,
            o = new d.ElementaryStream,
            s = new d.TimestampRolloverStream("video"),
            u = new d.TimestampRolloverStream("audio"),
            l = new d.TimestampRolloverStream("timed-metadata"),
            c = new h,
            g = new f,
            _ = new p(t),
            e.pipe(i).pipe(o),
            o.pipe(s).pipe(g),
            o.pipe(u).pipe(c),
            o.pipe(l).pipe(this.metadataStream).pipe(_),
            v = new d.CaptionStream,
            g.pipe(v).pipe(_),
            o.on("data", function(t) {
                var e, i, n;
                if ("metadata" === t.type) {
                    for (e = t.tracks.length; e--; )
                        "video" === t.tracks[e].type ? i = t.tracks[e] : "audio" === t.tracks[e].type && (n = t.tracks[e]);
                    i && !m && (_.numberOfTracks++,
                    m = new r(i),
                    g.pipe(m).pipe(_)),
                    n && !y && (_.numberOfTracks++,
                    y = new a(n),
                    c.pipe(y).pipe(_),
                    m && m.on("keyframe", y.onVideoKeyFrame))
                }
            }),
            this.push = function(t) {
                e.push(t)
            }
            ,
            this.flush = function() {
                e.flush()
            }
            ,
            this.resetCaptions = function() {
                v.reset()
            }
            ,
            _.on("data", function(t) {
                b.trigger("data", t)
            }),
            _.on("done", function() {
                b.trigger("done")
            })
        }
        ,
        n.prototype = new l,
        e.exports = n
    }
    , {}],
    49: [function(t, e, i) {
        "use strict";
        var n = t(62)
          , r = function(t) {
            for (var e = 0, i = {
                payloadType: -1,
                payloadSize: 0
            }, n = 0, r = 0; e < t.byteLength && 128 !== t[e]; ) {
                for (; 255 === t[e]; )
                    n += 255,
                    e++;
                for (n += t[e++]; 255 === t[e]; )
                    r += 255,
                    e++;
                if (r += t[e++],
                !i.payload && 4 === n) {
                    i.payloadType = n,
                    i.payloadSize = r,
                    i.payload = t.subarray(e, e + r);
                    break
                }
                e += r,
                n = 0,
                r = 0
            }
            return i
        }
          , a = function(t) {
            return 181 !== t.payload[0] ? null : 49 != (t.payload[1] << 8 | t.payload[2]) ? null : "GA94" !== String.fromCharCode(t.payload[3], t.payload[4], t.payload[5], t.payload[6]) ? null : 3 !== t.payload[7] ? null : t.payload.subarray(8, t.payload.length - 1)
        }
          , o = function(t, e) {
            var i, n, r, a, o = [];
            if (!(64 & e[0]))
                return o;
            for (n = 31 & e[0],
            i = 0; i < n; i++)
                r = 3 * i,
                a = {
                    type: 3 & e[r + 2],
                    pts: t
                },
                4 & e[r + 2] && (a.ccData = e[r + 3] << 8 | e[r + 4],
                o.push(a));
            return o
        }
          , s = function() {
            s.prototype.init.call(this),
            this.captionPackets_ = [],
            this.ccStreams_ = [new h(0,0), new h(0,1), new h(1,0), new h(1,1)],
            this.reset(),
            this.ccStreams_.forEach(function(t) {
                t.on("data", this.trigger.bind(this, "data")),
                t.on("done", this.trigger.bind(this, "done"))
            }, this)
        };
        s.prototype = new n,
        s.prototype.push = function(t) {
            var e, i;
            if ("sei_rbsp" === t.nalUnitType && (e = r(t.escapedRBSP),
            4 === e.payloadType && (i = a(e)))) {
                if (t.dts < this.latestDts_)
                    return void (this.ignoreNextEqualDts_ = !0);
                if (t.dts === this.latestDts_ && this.ignoreNextEqualDts_)
                    return void (this.ignoreNextEqualDts_ = !1);
                this.captionPackets_ = this.captionPackets_.concat(o(t.pts, i)),
                this.latestDts_ = t.dts
            }
        }
        ,
        s.prototype.flush = function() {
            return this.captionPackets_.length ? (this.captionPackets_.forEach(function(t, e) {
                t.presortIndex = e
            }),
            this.captionPackets_.sort(function(t, e) {
                return t.pts === e.pts ? t.presortIndex - e.presortIndex : t.pts - e.pts
            }),
            this.captionPackets_.forEach(function(t) {
                t.type < 2 && this.dispatchCea608Packet(t)
            }, this),
            this.captionPackets_.length = 0,
            this.ccStreams_.forEach(function(t) {
                t.flush()
            }, this),
            void 0) : void this.ccStreams_.forEach(function(t) {
                t.flush()
            }, this)
        }
        ,
        s.prototype.reset = function() {
            this.latestDts_ = null,
            this.ignoreNextEqualDts_ = !1,
            this.activeCea608Channel_ = [null, null],
            this.ccStreams_.forEach(function(t) {
                t.reset()
            })
        }
        ,
        s.prototype.dispatchCea608Packet = function(t) {
            this.setsChannel1Active(t) ? this.activeCea608Channel_[t.type] = 0 : this.setsChannel2Active(t) && (this.activeCea608Channel_[t.type] = 1),
            null !== this.activeCea608Channel_[t.type] && this.ccStreams_[(t.type << 1) + this.activeCea608Channel_[t.type]].push(t)
        }
        ,
        s.prototype.setsChannel1Active = function(t) {
            return 4096 == (30720 & t.ccData)
        }
        ,
        s.prototype.setsChannel2Active = function(t) {
            return 6144 == (30720 & t.ccData)
        }
        ;
        var u = {
            42: 225,
            92: 233,
            94: 237,
            95: 243,
            96: 250,
            123: 231,
            124: 247,
            125: 209,
            126: 241,
            127: 9608,
            304: 174,
            305: 176,
            306: 189,
            307: 191,
            308: 8482,
            309: 162,
            310: 163,
            311: 9834,
            312: 224,
            313: 160,
            314: 232,
            315: 226,
            316: 234,
            317: 238,
            318: 244,
            319: 251,
            544: 193,
            545: 201,
            546: 211,
            547: 218,
            548: 220,
            549: 252,
            550: 8216,
            551: 161,
            552: 42,
            553: 39,
            554: 8212,
            555: 169,
            556: 8480,
            557: 8226,
            558: 8220,
            559: 8221,
            560: 192,
            561: 194,
            562: 199,
            563: 200,
            564: 202,
            565: 203,
            566: 235,
            567: 206,
            568: 207,
            569: 239,
            570: 212,
            571: 217,
            572: 249,
            573: 219,
            574: 171,
            575: 187,
            800: 195,
            801: 227,
            802: 205,
            803: 204,
            804: 236,
            805: 210,
            806: 242,
            807: 213,
            808: 245,
            809: 123,
            810: 125,
            811: 92,
            812: 94,
            813: 95,
            814: 124,
            815: 126,
            816: 196,
            817: 228,
            818: 214,
            819: 246,
            820: 223,
            821: 165,
            822: 164,
            823: 9474,
            824: 197,
            825: 229,
            826: 216,
            827: 248,
            828: 9484,
            829: 9488,
            830: 9492,
            831: 9496
        }
          , l = function(t) {
            return null === t ? "" : (t = u[t] || t,
            String.fromCharCode(t))
        }
          , c = [4352, 4384, 4608, 4640, 5376, 5408, 5632, 5664, 5888, 5920, 4096, 4864, 4896, 5120, 5152]
          , d = function() {
            for (var t = [], e = 15; e--; )
                t.push("");
            return t
        }
          , h = function(t, e) {
            h.prototype.init.call(this),
            this.field_ = t || 0,
            this.dataChannel_ = e || 0,
            this.name_ = "CC" + (1 + (this.field_ << 1 | this.dataChannel_)),
            this.setConstants(),
            this.reset(),
            this.push = function(t) {
                var e, i, n, r, a;
                if ((e = 32639 & t.ccData) === this.lastControlCode_)
                    return void (this.lastControlCode_ = null);
                if (4096 == (61440 & e) ? this.lastControlCode_ = e : e !== this.PADDING_ && (this.lastControlCode_ = null),
                n = e >>> 8,
                r = 255 & e,
                e !== this.PADDING_)
                    if (e === this.RESUME_CAPTION_LOADING_)
                        this.mode_ = "popOn";
                    else if (e === this.END_OF_CAPTION_)
                        this.clearFormatting(t.pts),
                        this.flushDisplayed(t.pts),
                        i = this.displayed_,
                        this.displayed_ = this.nonDisplayed_,
                        this.nonDisplayed_ = i,
                        this.startPts_ = t.pts;
                    else if (e === this.ROLL_UP_2_ROWS_)
                        this.topRow_ = 13,
                        this.mode_ = "rollUp";
                    else if (e === this.ROLL_UP_3_ROWS_)
                        this.topRow_ = 12,
                        this.mode_ = "rollUp";
                    else if (e === this.ROLL_UP_4_ROWS_)
                        this.topRow_ = 11,
                        this.mode_ = "rollUp";
                    else if (e === this.CARRIAGE_RETURN_)
                        this.clearFormatting(t.pts),
                        this.flushDisplayed(t.pts),
                        this.shiftRowsUp_(),
                        this.startPts_ = t.pts;
                    else if (e === this.BACKSPACE_)
                        "popOn" === this.mode_ ? this.nonDisplayed_[14] = this.nonDisplayed_[14].slice(0, -1) : this.displayed_[14] = this.displayed_[14].slice(0, -1);
                    else if (e === this.ERASE_DISPLAYED_MEMORY_)
                        this.flushDisplayed(t.pts),
                        this.displayed_ = d();
                    else if (e === this.ERASE_NON_DISPLAYED_MEMORY_)
                        this.nonDisplayed_ = d();
                    else if (e === this.RESUME_DIRECT_CAPTIONING_)
                        this.mode_ = "paintOn";
                    else if (this.isSpecialCharacter(n, r))
                        n = (3 & n) << 8,
                        a = l(n | r),
                        this[this.mode_](t.pts, a),
                        this.column_++;
                    else if (this.isExtCharacter(n, r))
                        "popOn" === this.mode_ ? this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1) : this.displayed_[14] = this.displayed_[14].slice(0, -1),
                        n = (3 & n) << 8,
                        a = l(n | r),
                        this[this.mode_](t.pts, a),
                        this.column_++;
                    else if (this.isMidRowCode(n, r))
                        this.clearFormatting(t.pts),
                        this[this.mode_](t.pts, " "),
                        this.column_++,
                        14 == (14 & r) && this.addFormatting(t.pts, ["i"]),
                        1 == (1 & r) && this.addFormatting(t.pts, ["u"]);
                    else if (this.isOffsetControlCode(n, r))
                        this.column_ += 3 & r;
                    else if (this.isPAC(n, r)) {
                        var o = c.indexOf(7968 & e);
                        o !== this.row_ && (this.clearFormatting(t.pts),
                        this.row_ = o),
                        1 & r && -1 === this.formatting_.indexOf("u") && this.addFormatting(t.pts, ["u"]),
                        16 == (16 & e) && (this.column_ = 4 * ((14 & e) >> 1)),
                        this.isColorPAC(r) && 14 == (14 & r) && this.addFormatting(t.pts, ["i"])
                    } else
                        this.isNormalChar(n) && (0 === r && (r = null),
                        a = l(n),
                        a += l(r),
                        this[this.mode_](t.pts, a),
                        this.column_ += a.length)
            }
        };
        h.prototype = new n,
        h.prototype.flushDisplayed = function(t) {
            var e = this.displayed_.map(function(t) {
                return t.trim()
            }).join("\n").replace(/^\n+|\n+$/g, "");
            e.length && this.trigger("data", {
                startPts: this.startPts_,
                endPts: t,
                text: e,
                stream: this.name_
            })
        }
        ,
        h.prototype.reset = function() {
            this.mode_ = "popOn",
            this.topRow_ = 0,
            this.startPts_ = 0,
            this.displayed_ = d(),
            this.nonDisplayed_ = d(),
            this.lastControlCode_ = null,
            this.column_ = 0,
            this.row_ = 14,
            this.formatting_ = []
        }
        ,
        h.prototype.setConstants = function() {
            0 === this.dataChannel_ ? (this.BASE_ = 16,
            this.EXT_ = 17,
            this.CONTROL_ = (20 | this.field_) << 8,
            this.OFFSET_ = 23) : 1 === this.dataChannel_ && (this.BASE_ = 24,
            this.EXT_ = 25,
            this.CONTROL_ = (28 | this.field_) << 8,
            this.OFFSET_ = 31),
            this.PADDING_ = 0,
            this.RESUME_CAPTION_LOADING_ = 32 | this.CONTROL_,
            this.END_OF_CAPTION_ = 47 | this.CONTROL_,
            this.ROLL_UP_2_ROWS_ = 37 | this.CONTROL_,
            this.ROLL_UP_3_ROWS_ = 38 | this.CONTROL_,
            this.ROLL_UP_4_ROWS_ = 39 | this.CONTROL_,
            this.CARRIAGE_RETURN_ = 45 | this.CONTROL_,
            this.RESUME_DIRECT_CAPTIONING_ = 41 | this.CONTROL_,
            this.BACKSPACE_ = 33 | this.CONTROL_,
            this.ERASE_DISPLAYED_MEMORY_ = 44 | this.CONTROL_,
            this.ERASE_NON_DISPLAYED_MEMORY_ = 46 | this.CONTROL_
        }
        ,
        h.prototype.isSpecialCharacter = function(t, e) {
            return t === this.EXT_ && e >= 48 && e <= 63
        }
        ,
        h.prototype.isExtCharacter = function(t, e) {
            return (t === this.EXT_ + 1 || t === this.EXT_ + 2) && e >= 32 && e <= 63
        }
        ,
        h.prototype.isMidRowCode = function(t, e) {
            return t === this.EXT_ && e >= 32 && e <= 47
        }
        ,
        h.prototype.isOffsetControlCode = function(t, e) {
            return t === this.OFFSET_ && e >= 33 && e <= 35
        }
        ,
        h.prototype.isPAC = function(t, e) {
            return t >= this.BASE_ && t < this.BASE_ + 8 && e >= 64 && e <= 127
        }
        ,
        h.prototype.isColorPAC = function(t) {
            return t >= 64 && t <= 79 || t >= 96 && t <= 127
        }
        ,
        h.prototype.isNormalChar = function(t) {
            return t >= 32 && t <= 127
        }
        ,
        h.prototype.addFormatting = function(t, e) {
            this.formatting_ = this.formatting_.concat(e);
            var i = e.reduce(function(t, e) {
                return t + "<" + e + ">"
            }, "");
            this[this.mode_](t, i)
        }
        ,
        h.prototype.clearFormatting = function(t) {
            if (this.formatting_.length) {
                var e = this.formatting_.reverse().reduce(function(t, e) {
                    return t + "</" + e + ">"
                }, "");
                this.formatting_ = [],
                this[this.mode_](t, e)
            }
        }
        ,
        h.prototype.popOn = function(t, e) {
            var i = this.nonDisplayed_[this.row_];
            i += e,
            this.nonDisplayed_[this.row_] = i
        }
        ,
        h.prototype.rollUp = function(t, e) {
            var i = this.displayed_[14];
            i += e,
            this.displayed_[14] = i
        }
        ,
        h.prototype.shiftRowsUp_ = function() {
            var t;
            for (t = 0; t < this.topRow_; t++)
                this.displayed_[t] = "";
            for (t = this.topRow_; t < 14; t++)
                this.displayed_[t] = this.displayed_[t + 1];
            this.displayed_[14] = ""
        }
        ,
        h.prototype.paintOn = function() {}
        ,
        e.exports = {
            CaptionStream: s,
            Cea608Stream: h
        }
    }
    , {}],
    50: [function(t, e, i) {
        "use strict";
        var n, r, a, o = t(62), s = t(49), u = t(53), l = t(54).TimestampRolloverStream, c = t(53);
        n = function() {
            var t = new Uint8Array(188)
              , e = 0;
            n.prototype.init.call(this),
            this.push = function(i) {
                var n, r = 0, a = 188;
                for (e ? (n = new Uint8Array(i.byteLength + e),
                n.set(t.subarray(0, e)),
                n.set(i, e),
                e = 0) : n = i; a < n.byteLength; )
                    71 !== n[r] || 71 !== n[a] ? (r++,
                    a++) : (this.trigger("data", n.subarray(r, a)),
                    r += 188,
                    a += 188);
                r < n.byteLength && (t.set(n.subarray(r), 0),
                e = n.byteLength - r)
            }
            ,
            this.flush = function() {
                188 === e && 71 === t[0] && (this.trigger("data", t),
                e = 0),
                this.trigger("done")
            }
        }
        ,
        n.prototype = new o,
        r = function() {
            var t, e, i, n;
            r.prototype.init.call(this),
            n = this,
            this.packetsWaitingForPmt = [],
            this.programMapTable = void 0,
            t = function(t, n) {
                var r = 0;
                n.payloadUnitStartIndicator && (r += t[r] + 1),
                "pat" === n.type ? e(t.subarray(r), n) : i(t.subarray(r), n)
            }
            ,
            e = function(t, e) {
                e.section_number = t[7],
                e.last_section_number = t[8],
                n.pmtPid = (31 & t[10]) << 8 | t[11],
                e.pmtPid = n.pmtPid
            }
            ,
            i = function(t, e) {
                var i, r, a, o;
                if (1 & t[5]) {
                    for (n.programMapTable = {
                        video: null,
                        audio: null,
                        "timed-metadata": {}
                    },
                    i = (15 & t[1]) << 8 | t[2],
                    r = 3 + i - 4,
                    a = (15 & t[10]) << 8 | t[11],
                    o = 12 + a; o < r; ) {
                        var s = t[o]
                          , l = (31 & t[o + 1]) << 8 | t[o + 2];
                        s === u.H264_STREAM_TYPE && null === n.programMapTable.video ? n.programMapTable.video = l : s === u.ADTS_STREAM_TYPE && null === n.programMapTable.audio ? n.programMapTable.audio = l : s === u.METADATA_STREAM_TYPE && (n.programMapTable["timed-metadata"][l] = s),
                        o += 5 + ((15 & t[o + 3]) << 8 | t[o + 4])
                    }
                    e.programMapTable = n.programMapTable
                }
            }
            ,
            this.push = function(e) {
                var i = {}
                  , n = 4;
                if (i.payloadUnitStartIndicator = !!(64 & e[1]),
                i.pid = 31 & e[1],
                i.pid <<= 8,
                i.pid |= e[2],
                (48 & e[3]) >>> 4 > 1 && (n += e[n] + 1),
                0 === i.pid)
                    i.type = "pat",
                    t(e.subarray(n), i),
                    this.trigger("data", i);
                else if (i.pid === this.pmtPid)
                    for (i.type = "pmt",
                    t(e.subarray(n), i),
                    this.trigger("data", i); this.packetsWaitingForPmt.length; )
                        this.processPes_.apply(this, this.packetsWaitingForPmt.shift());
                else
                    void 0 === this.programMapTable ? this.packetsWaitingForPmt.push([e, n, i]) : this.processPes_(e, n, i)
            }
            ,
            this.processPes_ = function(t, e, i) {
                i.pid === this.programMapTable.video ? i.streamType = u.H264_STREAM_TYPE : i.pid === this.programMapTable.audio ? i.streamType = u.ADTS_STREAM_TYPE : i.streamType = this.programMapTable["timed-metadata"][i.pid],
                i.type = "pes",
                i.data = t.subarray(e),
                this.trigger("data", i)
            }
        }
        ,
        r.prototype = new o,
        r.STREAM_TYPES = {
            h264: 27,
            adts: 15
        },
        a = function() {
            var t = this
              , e = {
                data: [],
                size: 0
            }
              , i = {
                data: [],
                size: 0
            }
              , n = {
                data: [],
                size: 0
            }
              , r = function(t, e) {
                var i;
                e.packetLength = 6 + (t[4] << 8 | t[5]),
                e.dataAlignmentIndicator = 0 != (4 & t[6]),
                i = t[7],
                192 & i && (e.pts = (14 & t[9]) << 27 | (255 & t[10]) << 20 | (254 & t[11]) << 12 | (255 & t[12]) << 5 | (254 & t[13]) >>> 3,
                e.pts *= 4,
                e.pts += (6 & t[13]) >>> 1,
                e.dts = e.pts,
                64 & i && (e.dts = (14 & t[14]) << 27 | (255 & t[15]) << 20 | (254 & t[16]) << 12 | (255 & t[17]) << 5 | (254 & t[18]) >>> 3,
                e.dts *= 4,
                e.dts += (6 & t[18]) >>> 1)),
                e.data = t.subarray(9 + t[8])
            }
              , o = function(e, i, n) {
                var a, o = new Uint8Array(e.size), s = {
                    type: i
                }, u = 0, l = 0, c = !1;
                if (e.data.length && !(e.size < 9)) {
                    for (s.trackId = e.data[0].pid,
                    u = 0; u < e.data.length; u++)
                        a = e.data[u],
                        o.set(a.data, l),
                        l += a.data.byteLength;
                    r(o, s),
                    c = "video" === i || s.packetLength <= e.size,
                    (n || c) && (e.size = 0,
                    e.data.length = 0),
                    c && t.trigger("data", s)
                }
            };
            a.prototype.init.call(this),
            this.push = function(r) {
                ({
                    pat: function() {},
                    pes: function() {
                        var t, a;
                        switch (r.streamType) {
                        case u.H264_STREAM_TYPE:
                        case c.H264_STREAM_TYPE:
                            t = e,
                            a = "video";
                            break;
                        case u.ADTS_STREAM_TYPE:
                            t = i,
                            a = "audio";
                            break;
                        case u.METADATA_STREAM_TYPE:
                            t = n,
                            a = "timed-metadata";
                            break;
                        default:
                            return
                        }
                        r.payloadUnitStartIndicator && o(t, a, !0),
                        t.data.push(r),
                        t.size += r.data.byteLength
                    },
                    pmt: function() {
                        var e = {
                            type: "metadata",
                            tracks: []
                        }
                          , i = r.programMapTable;
                        null !== i.video && e.tracks.push({
                            timelineStartInfo: {
                                baseMediaDecodeTime: 0
                            },
                            id: +i.video,
                            codec: "avc",
                            type: "video"
                        }),
                        null !== i.audio && e.tracks.push({
                            timelineStartInfo: {
                                baseMediaDecodeTime: 0
                            },
                            id: +i.audio,
                            codec: "adts",
                            type: "audio"
                        }),
                        t.trigger("data", e)
                    }
                })[r.type]()
            }
            ,
            this.flush = function() {
                o(e, "video"),
                o(i, "audio"),
                o(n, "timed-metadata"),
                this.trigger("done")
            }
        }
        ,
        a.prototype = new o;
        var d = {
            PAT_PID: 0,
            MP2T_PACKET_LENGTH: 188,
            TransportPacketStream: n,
            TransportParseStream: r,
            ElementaryStream: a,
            TimestampRolloverStream: l,
            CaptionStream: s.CaptionStream,
            Cea608Stream: s.Cea608Stream,
            MetadataStream: t(51)
        };
        for (var h in u)
            u.hasOwnProperty(h) && (d[h] = u[h]);
        e.exports = d
    }
    , {}],
    51: [function(t, e, i) {
        "use strict";
        var n, r = t(62), a = t(53), o = function(t, e, i) {
            var n, r = "";
            for (n = e; n < i; n++)
                r += "%" + ("00" + t[n].toString(16)).slice(-2);
            return r
        }, s = function(t, e, i) {
            return decodeURIComponent(o(t, e, i))
        }, u = function(t, e, i) {
            return unescape(o(t, e, i))
        }, l = function(t) {
            return t[0] << 21 | t[1] << 14 | t[2] << 7 | t[3]
        }, c = {
            TXXX: function(t) {
                var e;
                if (3 === t.data[0]) {
                    for (e = 1; e < t.data.length; e++)
                        if (0 === t.data[e]) {
                            t.description = s(t.data, 1, e),
                            t.value = s(t.data, e + 1, t.data.length).replace(/\0*$/, "");
                            break
                        }
                    t.data = t.value
                }
            },
            WXXX: function(t) {
                var e;
                if (3 === t.data[0])
                    for (e = 1; e < t.data.length; e++)
                        if (0 === t.data[e]) {
                            t.description = s(t.data, 1, e),
                            t.url = s(t.data, e + 1, t.data.length);
                            break
                        }
            },
            PRIV: function(t) {
                var e;
                for (e = 0; e < t.data.length; e++)
                    if (0 === t.data[e]) {
                        t.owner = u(t.data, 0, e);
                        break
                    }
                t.privateData = t.data.subarray(e + 1),
                t.data = t.privateData
            }
        };
        n = function(t) {
            var e, i = {
                debug: !(!t || !t.debug),
                descriptor: t && t.descriptor
            }, r = 0, o = [], s = 0;
            if (n.prototype.init.call(this),
            this.dispatchType = a.METADATA_STREAM_TYPE.toString(16),
            i.descriptor)
                for (e = 0; e < i.descriptor.length; e++)
                    this.dispatchType += ("00" + i.descriptor[e].toString(16)).slice(-2);
            this.push = function(t) {
                var e, n, a, u, d, h;
                if ("timed-metadata" === t.type) {
                    if (t.dataAlignmentIndicator && (s = 0,
                    o.length = 0),
                    0 === o.length && (t.data.length < 10 || t.data[0] !== "I".charCodeAt(0) || t.data[1] !== "D".charCodeAt(0) || t.data[2] !== "3".charCodeAt(0)))
                        return console.log('妈卖批!');
                    if (o.push(t),
                    s += t.data.byteLength,
                    1 === o.length && (r = l(t.data.subarray(6, 10)),
                    r += 10),
                    !(s < r)) {
                        for (e = {
                            data: new Uint8Array(r),
                            frames: [],
                            pts: o[0].pts,
                            dts: o[0].dts
                        },
                        d = 0; d < r; )
                            e.data.set(o[0].data.subarray(0, r - d), d),
                            d += o[0].data.byteLength,
                            s -= o[0].data.byteLength,
                            o.shift();
                        n = 10,
                        64 & e.data[5] && (n += 4,
                        n += l(e.data.subarray(10, 14)),
                        r -= l(e.data.subarray(16, 20)));
                        do {
                            if ((a = l(e.data.subarray(n + 4, n + 8))) < 1)
                                return;
                            if (h = String.fromCharCode(e.data[n], e.data[n + 1], e.data[n + 2], e.data[n + 3]),
                            u = {
                                id: h,
                                data: e.data.subarray(n + 10, n + a + 10)
                            },
                            u.key = u.id,
                            c[u.id] && (c[u.id](u),
                            "com.apple.streaming.transportStreamTimestamp" === u.owner)) {
                                var f = u.data
                                  , p = (1 & f[3]) << 30 | f[4] << 22 | f[5] << 14 | f[6] << 6 | f[7] >>> 2;
                                p *= 4,
                                p += 3 & f[7],
                                u.timeStamp = p,
                                void 0 === e.pts && void 0 === e.dts && (e.pts = u.timeStamp,
                                e.dts = u.timeStamp),
                                this.trigger("timestamp", u)
                            }
                            e.frames.push(u),
                            n += 10,
                            n += a
                        } while (n < r);this.trigger("data", e)
                    }
                }
            }
        }
        ,
        n.prototype = new r,
        e.exports = n
    }
    , {}],
    52: [function(t, e, i) {
        "use strict";
        var n = t(53)
          , r = function(t) {
            var e = 31 & t[1];
            return e <<= 8,
            e |= t[2]
        }
          , a = function(t) {
            return !!(64 & t[1])
        }
          , o = function(t) {
            var e = 0;
            return (48 & t[3]) >>> 4 > 1 && (e += t[4] + 1),
            e
        }
          , s = function(t, e) {
            var i = r(t);
            return 0 === i ? "pat" : i === e ? "pmt" : e ? "pes" : null
        }
          , u = function(t) {
            var e = a(t)
              , i = 4 + o(t);
            return e && (i += t[i] + 1),
            (31 & t[i + 10]) << 8 | t[i + 11]
        }
          , l = function(t) {
            var e = {}
              , i = a(t)
              , n = 4 + o(t);
            if (i && (n += t[n] + 1),
            1 & t[n + 5]) {
                var r, s, u;
                r = (15 & t[n + 1]) << 8 | t[n + 2],
                s = 3 + r - 4,
                u = (15 & t[n + 10]) << 8 | t[n + 11];
                for (var l = 12 + u; l < s; ) {
                    var c = n + l;
                    e[(31 & t[c + 1]) << 8 | t[c + 2]] = t[c],
                    l += 5 + ((15 & t[c + 3]) << 8 | t[c + 4])
                }
                return e
            }
        }
          , c = function(t, e) {
            switch (e[r(t)]) {
            case n.H264_STREAM_TYPE:
                return "video";
            case n.ADTS_STREAM_TYPE:
                return "audio";
            case n.METADATA_STREAM_TYPE:
                return "timed-metadata";
            default:
                return null
            }
        }
          , d = function(t) {
            if (!a(t))
                return null;
            var e = 4 + o(t);
            if (e >= t.byteLength)
                return null;
            var i, n = null;
            return i = t[e + 7],
            192 & i && (n = {},
            n.pts = (14 & t[e + 9]) << 27 | (255 & t[e + 10]) << 20 | (254 & t[e + 11]) << 12 | (255 & t[e + 12]) << 5 | (254 & t[e + 13]) >>> 3,
            n.pts *= 4,
            n.pts += (6 & t[e + 13]) >>> 1,
            n.dts = n.pts,
            64 & i && (n.dts = (14 & t[e + 14]) << 27 | (255 & t[e + 15]) << 20 | (254 & t[e + 16]) << 12 | (255 & t[e + 17]) << 5 | (254 & t[e + 18]) >>> 3,
            n.dts *= 4,
            n.dts += (6 & t[e + 18]) >>> 1)),
            n
        }
          , h = function(t) {
            switch (t) {
            case 5:
                return "slice_layer_without_partitioning_rbsp_idr";
            case 6:
                return "sei_rbsp";
            case 7:
                return "seq_parameter_set_rbsp";
            case 8:
                return "pic_parameter_set_rbsp";
            case 9:
                return "access_unit_delimiter_rbsp";
            default:
                return null
            }
        }
          , f = function(t) {
            for (var e, i = 4 + o(t), n = t.subarray(i), r = 0, a = 0, s = !1; a < n.byteLength - 3; a++)
                if (1 === n[a + 2]) {
                    r = a + 5;
                    break
                }
            for (; r < n.byteLength; )
                switch (n[r]) {
                case 0:
                    if (0 !== n[r - 1]) {
                        r += 2;
                        break
                    }
                    if (0 !== n[r - 2]) {
                        r++;
                        break
                    }
                    a + 3 !== r - 2 && "slice_layer_without_partitioning_rbsp_idr" === (e = h(31 & n[a + 3])) && (s = !0);
                    do
                        r++;
                    while (1 !== n[r] && r < n.length);a = r - 2,
                    r += 3;
                    break;
                case 1:
                    if (0 !== n[r - 1] || 0 !== n[r - 2]) {
                        r += 3;
                        break
                    }
                    e = h(31 & n[a + 3]),
                    "slice_layer_without_partitioning_rbsp_idr" === e && (s = !0),
                    a = r - 2,
                    r += 3;
                    break;
                default:
                    r += 3
                }
            return n = n.subarray(a),
            r -= a,
            a = 0,
            n && n.byteLength > 3 && "slice_layer_without_partitioning_rbsp_idr" === (e = h(31 & n[a + 3])) && (s = !0),
            s
        };
        e.exports = {
            parseType: s,
            parsePat: u,
            parsePmt: l,
            parsePayloadUnitStartIndicator: a,
            parsePesType: c,
            parsePesTime: d,
            videoPacketContainsKeyFrame: f
        }
    }
    , {}],
    53: [function(t, e, i) {
        "use strict";
        e.exports = {
            H264_STREAM_TYPE: 27,
            ADTS_STREAM_TYPE: 15,
            METADATA_STREAM_TYPE: 21
        }
    }
    , {}],
    54: [function(t, e, i) {
        "use strict";
        var n = t(62)
          , r = function(t, e) {
            var i = 1;
            for (t > e && (i = -1); Math.abs(e - t) > 4294967296; )
                t += 8589934592 * i;
            return t
        }
          , a = function(t) {
            var e, i;
            a.prototype.init.call(this),
            this.type_ = t,
            this.push = function(t) {
                t.type === this.type_ && (void 0 === i && (i = t.dts),
                t.dts = r(t.dts, i),
                t.pts = r(t.pts, i),
                e = t.dts,
                this.trigger("data", t))
            }
            ,
            this.flush = function() {
                i = e,
                this.trigger("done")
            }
            ,
            this.discontinuity = function() {
                i = void 0,
                e = void 0
            }
        };
        a.prototype = new n,
        e.exports = {
            TimestampRolloverStream: a,
            handleRollover: r
        }
    }
    , {}],
    55: [function(t, e, i) {
        e.exports = {
            generator: t(56),
            Transmuxer: t(58).Transmuxer,
            AudioSegmentStream: t(58).AudioSegmentStream,
            VideoSegmentStream: t(58).VideoSegmentStream
        }
    }
    , {}],
    56: [function(t, e, i) {
        "use strict";
        var n, r, a, o, s, u, l, c, d, h, f, p, g, m, y, v, _, b, x, T, w, S, k, C, E, A, O, P, I, L, j, M, D, R, B, U, N = Math.pow(2, 32) - 1;
        !function() {
            var t;
            if (k = {
                avc1: [],
                avcC: [],
                btrt: [],
                dinf: [],
                dref: [],
                esds: [],
                ftyp: [],
                hdlr: [],
                mdat: [],
                mdhd: [],
                mdia: [],
                mfhd: [],
                minf: [],
                moof: [],
                moov: [],
                mp4a: [],
                mvex: [],
                mvhd: [],
                sdtp: [],
                smhd: [],
                stbl: [],
                stco: [],
                stsc: [],
                stsd: [],
                stsz: [],
                stts: [],
                styp: [],
                tfdt: [],
                tfhd: [],
                traf: [],
                trak: [],
                trun: [],
                trex: [],
                tkhd: [],
                vmhd: []
            },
            "undefined" != typeof Uint8Array) {
                for (t in k)
                    k.hasOwnProperty(t) && (k[t] = [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)]);
                C = new Uint8Array(["i".charCodeAt(0), "s".charCodeAt(0), "o".charCodeAt(0), "m".charCodeAt(0)]),
                A = new Uint8Array(["a".charCodeAt(0), "v".charCodeAt(0), "c".charCodeAt(0), "1".charCodeAt(0)]),
                E = new Uint8Array([0, 0, 0, 1]),
                O = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
                P = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]),
                I = {
                    video: O,
                    audio: P
                },
                M = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
                j = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]),
                D = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]),
                R = D,
                B = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                U = D,
                L = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0])
            }
        }(),
        n = function(t) {
            var e, i, n, r = [], a = 0;
            for (e = 1; e < arguments.length; e++)
                r.push(arguments[e]);
            for (e = r.length; e--; )
                a += r[e].byteLength;
            for (i = new Uint8Array(a + 8),
            n = new DataView(i.buffer,i.byteOffset,i.byteLength),
            n.setUint32(0, i.byteLength),
            i.set(t, 4),
            e = 0,
            a = 8; e < r.length; e++)
                i.set(r[e], a),
                a += r[e].byteLength;
            return i
        }
        ,
        r = function() {
            return n(k.dinf, n(k.dref, M))
        }
        ,
        a = function(t) {
            return n(k.esds, new Uint8Array([0, 0, 0, 0, 3, 25, 0, 0, 0, 4, 17, 64, 21, 0, 6, 0, 0, 0, 218, 192, 0, 0, 218, 192, 5, 2, t.audioobjecttype << 3 | t.samplingfrequencyindex >>> 1, t.samplingfrequencyindex << 7 | t.channelcount << 3, 6, 1, 2]))
        }
        ,
        o = function() {
            return n(k.ftyp, C, E, C, A)
        }
        ,
        v = function(t) {
            return n(k.hdlr, I[t])
        }
        ,
        s = function(t) {
            return n(k.mdat, t)
        }
        ,
        y = function(t) {
            var e = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 0, 1, 95, 144, t.duration >>> 24 & 255, t.duration >>> 16 & 255, t.duration >>> 8 & 255, 255 & t.duration, 85, 196, 0, 0]);
            return t.samplerate && (e[12] = t.samplerate >>> 24 & 255,
            e[13] = t.samplerate >>> 16 & 255,
            e[14] = t.samplerate >>> 8 & 255,
            e[15] = 255 & t.samplerate),
            n(k.mdhd, e)
        }
        ,
        m = function(t) {
            return n(k.mdia, y(t), v(t.type), l(t))
        }
        ,
        u = function(t) {
            return n(k.mfhd, new Uint8Array([0, 0, 0, 0, (4278190080 & t) >> 24, (16711680 & t) >> 16, (65280 & t) >> 8, 255 & t]))
        }
        ,
        l = function(t) {
            return n(k.minf, "video" === t.type ? n(k.vmhd, L) : n(k.smhd, j), r(), b(t))
        }
        ,
        c = function(t, e) {
            for (var i = [], r = e.length; r--; )
                i[r] = T(e[r]);
            return n.apply(null, [k.moof, u(t)].concat(i))
        }
        ,
        d = function(t) {
            for (var e = t.length, i = []; e--; )
                i[e] = p(t[e]);
            return n.apply(null, [k.moov, f(4294967295)].concat(i).concat(h(t)))
        }
        ,
        h = function(t) {
            for (var e = t.length, i = []; e--; )
                i[e] = w(t[e]);
            return n.apply(null, [k.mvex].concat(i))
        }
        ,
        f = function(t) {
            var e = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 1, 95, 144, (4278190080 & t) >> 24, (16711680 & t) >> 16, (65280 & t) >> 8, 255 & t, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
            return n(k.mvhd, e)
        }
        ,
        _ = function(t) {
            var e, i, r = t.samples || [], a = new Uint8Array(4 + r.length);
            for (i = 0; i < r.length; i++)
                e = r[i].flags,
                a[i + 4] = e.dependsOn << 4 | e.isDependedOn << 2 | e.hasRedundancy;
            return n(k.sdtp, a)
        }
        ,
        b = function(t) {
            return n(k.stbl, x(t), n(k.stts, U), n(k.stsc, R), n(k.stsz, B), n(k.stco, D))
        }
        ,
        function() {
            var t, e;
            x = function(i) {
                return n(k.stsd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]), "video" === i.type ? t(i) : e(i))
            }
            ,
            t = function(t) {
                var e, i = t.sps || [], r = t.pps || [], a = [], o = [];
                for (e = 0; e < i.length; e++)
                    a.push((65280 & i[e].byteLength) >>> 8),
                    a.push(255 & i[e].byteLength),
                    a = a.concat(Array.prototype.slice.call(i[e]));
                for (e = 0; e < r.length; e++)
                    o.push((65280 & r[e].byteLength) >>> 8),
                    o.push(255 & r[e].byteLength),
                    o = o.concat(Array.prototype.slice.call(r[e]));
                return n(k.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & t.width) >> 8, 255 & t.width, (65280 & t.height) >> 8, 255 & t.height, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 19, 118, 105, 100, 101, 111, 106, 115, 45, 99, 111, 110, 116, 114, 105, 98, 45, 104, 108, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), n(k.avcC, new Uint8Array([1, t.profileIdc, t.profileCompatibility, t.levelIdc, 255].concat([i.length]).concat(a).concat([r.length]).concat(o))), n(k.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])))
            }
            ,
            e = function(t) {
                return n(k.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & t.channelcount) >> 8, 255 & t.channelcount, (65280 & t.samplesize) >> 8, 255 & t.samplesize, 0, 0, 0, 0, (65280 & t.samplerate) >> 8, 255 & t.samplerate, 0, 0]), a(t))
            }
        }(),
        g = function(t) {
            var e = new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, (4278190080 & t.id) >> 24, (16711680 & t.id) >> 16, (65280 & t.id) >> 8, 255 & t.id, 0, 0, 0, 0, (4278190080 & t.duration) >> 24, (16711680 & t.duration) >> 16, (65280 & t.duration) >> 8, 255 & t.duration, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, (65280 & t.width) >> 8, 255 & t.width, 0, 0, (65280 & t.height) >> 8, 255 & t.height, 0, 0]);
            return n(k.tkhd, e)
        }
        ,
        T = function(t) {
            var e, i, r, a, o, s, u;
            return e = n(k.tfhd, new Uint8Array([0, 0, 0, 58, (4278190080 & t.id) >> 24, (16711680 & t.id) >> 16, (65280 & t.id) >> 8, 255 & t.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])),
            s = Math.floor(t.baseMediaDecodeTime / (N + 1)),
            u = Math.floor(t.baseMediaDecodeTime % (N + 1)),
            i = n(k.tfdt, new Uint8Array([1, 0, 0, 0, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s, u >>> 24 & 255, u >>> 16 & 255, u >>> 8 & 255, 255 & u])),
            o = 92,
            "audio" === t.type ? (r = S(t, o),
            n(k.traf, e, i, r)) : (a = _(t),
            r = S(t, a.length + o),
            n(k.traf, e, i, r, a))
        }
        ,
        p = function(t) {
            return t.duration = t.duration || 4294967295,
            n(k.trak, g(t), m(t))
        }
        ,
        w = function(t) {
            var e = new Uint8Array([0, 0, 0, 0, (4278190080 & t.id) >> 24, (16711680 & t.id) >> 16, (65280 & t.id) >> 8, 255 & t.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]);
            return "video" !== t.type && (e[e.length - 1] = 0),
            n(k.trex, e)
        }
        ,
        function() {
            var t, e, i;
            i = function(t, e) {
                var i = 0
                  , n = 0
                  , r = 0
                  , a = 0;
                return t.length && (void 0 !== t[0].duration && (i = 1),
                void 0 !== t[0].size && (n = 2),
                void 0 !== t[0].flags && (r = 4),
                void 0 !== t[0].compositionTimeOffset && (a = 8)),
                [0, 0, i | n | r | a, 1, (4278190080 & t.length) >>> 24, (16711680 & t.length) >>> 16, (65280 & t.length) >>> 8, 255 & t.length, (4278190080 & e) >>> 24, (16711680 & e) >>> 16, (65280 & e) >>> 8, 255 & e]
            }
            ,
            e = function(t, e) {
                var r, a, o, s;
                for (a = t.samples || [],
                e += 20 + 16 * a.length,
                r = i(a, e),
                s = 0; s < a.length; s++)
                    o = a[s],
                    r = r.concat([(4278190080 & o.duration) >>> 24, (16711680 & o.duration) >>> 16, (65280 & o.duration) >>> 8, 255 & o.duration, (4278190080 & o.size) >>> 24, (16711680 & o.size) >>> 16, (65280 & o.size) >>> 8, 255 & o.size, o.flags.isLeading << 2 | o.flags.dependsOn, o.flags.isDependedOn << 6 | o.flags.hasRedundancy << 4 | o.flags.paddingValue << 1 | o.flags.isNonSyncSample, 61440 & o.flags.degradationPriority, 15 & o.flags.degradationPriority, (4278190080 & o.compositionTimeOffset) >>> 24, (16711680 & o.compositionTimeOffset) >>> 16, (65280 & o.compositionTimeOffset) >>> 8, 255 & o.compositionTimeOffset]);
                return n(k.trun, new Uint8Array(r))
            }
            ,
            t = function(t, e) {
                var r, a, o, s;
                for (a = t.samples || [],
                e += 20 + 8 * a.length,
                r = i(a, e),
                s = 0; s < a.length; s++)
                    o = a[s],
                    r = r.concat([(4278190080 & o.duration) >>> 24, (16711680 & o.duration) >>> 16, (65280 & o.duration) >>> 8, 255 & o.duration, (4278190080 & o.size) >>> 24, (16711680 & o.size) >>> 16, (65280 & o.size) >>> 8, 255 & o.size]);
                return n(k.trun, new Uint8Array(r))
            }
            ,
            S = function(i, n) {
                return "audio" === i.type ? t(i, n) : e(i, n)
            }
        }(),
        e.exports = {
            ftyp: o,
            mdat: s,
            moof: c,
            moov: d,
            initSegment: function(t) {
                var e, i = o(), n = d(t);
                return e = new Uint8Array(i.byteLength + n.byteLength),
                e.set(i),
                e.set(n, i.byteLength),
                e
            }
        }
    }
    , {}],
    57: [function(t, e, i) {
        "use strict";
        var n, r, a, o;
        n = function(t, e) {
            var i, a, o, s, u, l = [];
            if (!e.length)
                return null;
            for (i = 0; i < t.byteLength; )
                a = t[i] << 24,
                a |= t[i + 1] << 16,
                a |= t[i + 2] << 8,
                a |= t[i + 3],
                o = r(t.subarray(i + 4, i + 8)),
                s = a > 1 ? i + a : t.byteLength,
                o === e[0] && (1 === e.length ? l.push(t.subarray(i + 8, s)) : (u = n(t.subarray(i + 8, s), e.slice(1)),
                u.length && (l = l.concat(u)))),
                i = s;
            return l
        }
        ,
        r = function(t) {
            var e = "";
            return e += String.fromCharCode(t[0]),
            e += String.fromCharCode(t[1]),
            e += String.fromCharCode(t[2]),
            e += String.fromCharCode(t[3])
        }
        ,
        a = function(t) {
            var e = {};
            return n(t, ["moov", "trak"]).reduce(function(t, e) {
                var i, r, a, o, s;
                return (i = n(e, ["tkhd"])[0]) ? (r = i[0],
                a = 0 === r ? 12 : 20,
                o = i[a] << 24 | i[a + 1] << 16 | i[a + 2] << 8 | i[a + 3],
                (s = n(e, ["mdia", "mdhd"])[0]) ? (r = s[0],
                a = 0 === r ? 12 : 20,
                t[o] = s[a] << 24 | s[a + 1] << 16 | s[a + 2] << 8 | s[a + 3],
                t) : null) : null
            }, e)
        }
        ,
        o = function(t, e) {
            var i, r, a;
            return i = n(e, ["moof", "traf"]),
            r = [].concat.apply([], i.map(function(e) {
                return n(e, ["tfhd"]).map(function(i) {
                    var r, a, o;
                    return r = i[4] << 24 | i[5] << 16 | i[6] << 8 | i[7],
                    a = t[r] || 9e4,
                    o = n(e, ["tfdt"]).map(function(t) {
                        var e, i;
                        return e = t[0],
                        i = t[4] << 24 | t[5] << 16 | t[6] << 8 | t[7],
                        1 === e && (i *= Math.pow(2, 32),
                        i += t[8] << 24 | t[9] << 16 | t[10] << 8 | t[11]),
                        i
                    })[0],
                    (o = o || 1 / 0) / a
                })
            })),
            a = Math.min.apply(null, r),
            isFinite(a) ? a : 0
        }
        ,
        e.exports = {
            parseType: r,
            timescale: a,
            startTime: o
        }
    }
    , {}],
    58: [function(t, e, i) {
        "use strict";
        var n, r, a, o, s, u, l, c, d, h, f, p = t(62), g = t(56), m = t(50), y = t(40), v = t(41).H264Stream, _ = t(38), b = t(42), x = t(60), T = ["audioobjecttype", "channelcount", "samplerate", "samplingfrequencyindex", "samplesize"], w = ["width", "height", "profileIdc", "levelIdc", "profileCompatibility"];
        s = function() {
            return {
                size: 0,
                flags: {
                    isLeading: 0,
                    dependsOn: 1,
                    isDependedOn: 0,
                    hasRedundancy: 0,
                    degradationPriority: 0
                }
            }
        }
        ,
        u = function(t) {
            return t[0] === "I".charCodeAt(0) && t[1] === "D".charCodeAt(0) && t[2] === "3".charCodeAt(0)
        }
        ,
        h = function(t, e) {
            var i;
            if (t.length !== e.length)
                return !1;
            for (i = 0; i < t.length; i++)
                if (t[i] !== e[i])
                    return !1;
            return !0
        }
        ,
        f = function(t) {
            var e, i, n = 0;
            for (e = 0; e < t.length; e++)
                i = t[e],
                n += i.data.byteLength;
            return n
        }
        ,
        r = function(t) {
            var e = []
              , i = 0
              , n = 0
              , a = 0
              , o = 1 / 0;
            r.prototype.init.call(this),
            this.push = function(i) {
                l(t, i),
                t && T.forEach(function(e) {
                    t[e] = i[e]
                }),
                e.push(i)
            }
            ,
            this.setEarliestDts = function(e) {
                n = e - t.timelineStartInfo.baseMediaDecodeTime
            }
            ,
            this.setVideoBaseMediaDecodeTime = function(t) {
                o = t
            }
            ,
            this.setAudioAppendStart = function(t) {
                a = t
            }
            ,
            this.flush = function() {
                var n, r, a, o;
                return 0 === e.length ? void this.trigger("done", "AudioSegmentStream") : (n = this.trimAdtsFramesByEarliestDts_(e),
                t.baseMediaDecodeTime = d(t),
                this.prefixWithSilence_(t, n),
                t.samples = this.generateSampleTable_(n),
                a = g.mdat(this.concatenateFrameData_(n)),
                e = [],
                r = g.moof(i, [t]),
                o = new Uint8Array(r.byteLength + a.byteLength),
                i++,
                o.set(r),
                o.set(a, r.byteLength),
                c(t),
                this.trigger("data", {
                    track: t,
                    boxes: o
                }),
                this.trigger("done", "AudioSegmentStream"),
                void 0)
            }
            ,
            this.prefixWithSilence_ = function(t, e) {
                var i, n, r, s = 0, u = 0, l = 0, c = 0;
                if (e.length && (i = x.audioTsToVideoTs(t.baseMediaDecodeTime, t.samplerate),
                s = Math.ceil(9e4 / (t.samplerate / 1024)),
                a && o && (u = i - Math.max(a, o),
                l = Math.floor(u / s),
                c = l * s),
                !(l < 1 || c > 45e3))) {
                    for (n = b[t.samplerate],
                    n || (n = e[0].data),
                    r = 0; r < l; r++)
                        e.splice(r, 0, {
                            data: n
                        });
                    t.baseMediaDecodeTime -= Math.floor(x.videoTsToAudioTs(c, t.samplerate))
                }
            }
            ,
            this.trimAdtsFramesByEarliestDts_ = function(e) {
                return t.minSegmentDts >= n ? e : (t.minSegmentDts = 1 / 0,
                e.filter(function(e) {
                    return e.dts >= n && (t.minSegmentDts = Math.min(t.minSegmentDts, e.dts),
                    t.minSegmentPts = t.minSegmentDts,
                    !0)
                }))
            }
            ,
            this.generateSampleTable_ = function(t) {
                var e, i, n = [];
                for (e = 0; e < t.length; e++)
                    i = t[e],
                    n.push({
                        size: i.data.byteLength,
                        duration: 1024
                    });
                return n
            }
            ,
            this.concatenateFrameData_ = function(t) {
                var e, i, n = 0, r = new Uint8Array(f(t));
                for (e = 0; e < t.length; e++)
                    i = t[e],
                    r.set(i.data, n),
                    n += i.data.byteLength;
                return r
            }
        }
        ,
        r.prototype = new p,
        n = function(t, e) {
            var i, r, a = 0, o = [], u = [];
            e = e || {},
            n.prototype.init.call(this),
            delete t.minPTS,
            this.gopCache_ = [],
            this.push = function(e) {
                l(t, e),
                "seq_parameter_set_rbsp" !== e.nalUnitType || i || (i = e.config,
                t.sps = [e.data],
                w.forEach(function(e) {
                    t[e] = i[e]
                }, this)),
                "pic_parameter_set_rbsp" !== e.nalUnitType || r || (r = e.data,
                t.pps = [e.data]),
                o.push(e)
            }
            ,
            this.flush = function() {
                for (var i, n, r, s, h, f; o.length && "access_unit_delimiter_rbsp" !== o[0].nalUnitType; )
                    o.shift();
                if (0 === o.length)
                    return this.resetStream_(),
                    void this.trigger("done", "VideoSegmentStream");
                if (i = this.groupNalsIntoFrames_(o),
                r = this.groupFramesIntoGops_(i),
                r[0][0].keyFrame || (n = this.getGopForFusion_(o[0], t),
                n ? (r.unshift(n),
                r.byteLength += n.byteLength,
                r.nalCount += n.nalCount,
                r.pts = n.pts,
                r.dts = n.dts,
                r.duration += n.duration) : r = this.extendFirstKeyFrame_(r)),
                u.length) {
                    var p;
                    if (!(p = e.alignGopsAtEnd ? this.alignGopsAtEnd_(r) : this.alignGopsAtStart_(r)))
                        return this.gopCache_.unshift({
                            gop: r.pop(),
                            pps: t.pps,
                            sps: t.sps
                        }),
                        this.gopCache_.length = Math.min(6, this.gopCache_.length),
                        o = [],
                        this.resetStream_(),
                        void this.trigger("done", "VideoSegmentStream");
                    c(t),
                    r = p
                }
                l(t, r),
                t.samples = this.generateSampleTable_(r),
                h = g.mdat(this.concatenateNalData_(r)),
                t.baseMediaDecodeTime = d(t),
                this.trigger("processedGopsInfo", r.map(function(t) {
                    return {
                        pts: t.pts,
                        dts: t.dts,
                        byteLength: t.byteLength
                    }
                })),
                this.gopCache_.unshift({
                    gop: r.pop(),
                    pps: t.pps,
                    sps: t.sps
                }),
                this.gopCache_.length = Math.min(6, this.gopCache_.length),
                o = [],
                this.trigger("baseMediaDecodeTime", t.baseMediaDecodeTime),
                this.trigger("timelineStartInfo", t.timelineStartInfo),
                s = g.moof(a, [t]),
                f = new Uint8Array(s.byteLength + h.byteLength),
                a++,
                f.set(s),
                f.set(h, s.byteLength),
                this.trigger("data", {
                    track: t,
                    boxes: f
                }),
                this.resetStream_(),
                this.trigger("done", "VideoSegmentStream")
            }
            ,
            this.resetStream_ = function() {
                c(t),
                i = void 0,
                r = void 0
            }
            ,
            this.getGopForFusion_ = function(e) {
                var i, n, r, a, o, s = 1 / 0;
                for (o = 0; o < this.gopCache_.length; o++)
                    a = this.gopCache_[o],
                    r = a.gop,
                    t.pps && h(t.pps[0], a.pps[0]) && t.sps && h(t.sps[0], a.sps[0]) && (r.dts < t.timelineStartInfo.dts || (i = e.dts - r.dts - r.duration) >= -1e4 && i <= 45e3 && (!n || s > i) && (n = a,
                    s = i));
                return n ? n.gop : null
            }
            ,
            this.extendFirstKeyFrame_ = function(t) {
                var e;
                return !t[0][0].keyFrame && t.length > 1 && (e = t.shift(),
                t.byteLength -= e.byteLength,
                t.nalCount -= e.nalCount,
                t[0][0].dts = e.dts,
                t[0][0].pts = e.pts,
                t[0][0].duration += e.duration),
                t
            }
            ,
            this.groupNalsIntoFrames_ = function(t) {
                var e, i, n = [], r = [];
                for (n.byteLength = 0,
                e = 0; e < t.length; e++)
                    i = t[e],
                    "access_unit_delimiter_rbsp" === i.nalUnitType ? (n.length && (n.duration = i.dts - n.dts,
                    r.push(n)),
                    n = [i],
                    n.byteLength = i.data.byteLength,
                    n.pts = i.pts,
                    n.dts = i.dts) : ("slice_layer_without_partitioning_rbsp_idr" === i.nalUnitType && (n.keyFrame = !0),
                    n.duration = i.dts - n.dts,
                    n.byteLength += i.data.byteLength,
                    n.push(i));
                return r.length && (!n.duration || n.duration <= 0) && (n.duration = r[r.length - 1].duration),
                r.push(n),
                r
            }
            ,
            this.groupFramesIntoGops_ = function(t) {
                var e, i, n = [], r = [];
                for (n.byteLength = 0,
                n.nalCount = 0,
                n.duration = 0,
                n.pts = t[0].pts,
                n.dts = t[0].dts,
                r.byteLength = 0,
                r.nalCount = 0,
                r.duration = 0,
                r.pts = t[0].pts,
                r.dts = t[0].dts,
                e = 0; e < t.length; e++)
                    i = t[e],
                    i.keyFrame ? (n.length && (r.push(n),
                    r.byteLength += n.byteLength,
                    r.nalCount += n.nalCount,
                    r.duration += n.duration),
                    n = [i],
                    n.nalCount = i.length,
                    n.byteLength = i.byteLength,
                    n.pts = i.pts,
                    n.dts = i.dts,
                    n.duration = i.duration) : (n.duration += i.duration,
                    n.nalCount += i.length,
                    n.byteLength += i.byteLength,
                    n.push(i));
                return r.length && n.duration <= 0 && (n.duration = r[r.length - 1].duration),
                r.byteLength += n.byteLength,
                r.nalCount += n.nalCount,
                r.duration += n.duration,
                r.push(n),
                r
            }
            ,
            this.generateSampleTable_ = function(t, e) {
                var i, n, r, a, o, u = e || 0, l = [];
                for (i = 0; i < t.length; i++)
                    for (a = t[i],
                    n = 0; n < a.length; n++)
                        o = a[n],
                        r = s(),
                        r.dataOffset = u,
                        r.compositionTimeOffset = o.pts - o.dts,
                        r.duration = o.duration,
                        r.size = 4 * o.length,
                        r.size += o.byteLength,
                        o.keyFrame && (r.flags.dependsOn = 2),
                        u += r.size,
                        l.push(r);
                return l
            }
            ,
            this.concatenateNalData_ = function(t) {
                var e, i, n, r, a, o, s = 0, u = t.byteLength, l = t.nalCount, c = u + 4 * l, d = new Uint8Array(c), h = new DataView(d.buffer);
                for (e = 0; e < t.length; e++)
                    for (r = t[e],
                    i = 0; i < r.length; i++)
                        for (a = r[i],
                        n = 0; n < a.length; n++)
                            o = a[n],
                            h.setUint32(s, o.data.byteLength),
                            s += 4,
                            d.set(o.data, s),
                            s += o.data.byteLength;
                return d
            }
            ,
            this.alignGopsAtStart_ = function(t) {
                var e, i, n, r, a, o, s, l;
                for (a = t.byteLength,
                o = t.nalCount,
                s = t.duration,
                e = i = 0; e < u.length && i < t.length && (n = u[e],
                r = t[i],
                n.pts !== r.pts); )
                    r.pts > n.pts ? e++ : (i++,
                    a -= r.byteLength,
                    o -= r.nalCount,
                    s -= r.duration);
                return 0 === i ? t : i === t.length ? null : (l = t.slice(i),
                l.byteLength = a,
                l.duration = s,
                l.nalCount = o,
                l.pts = l[0].pts,
                l.dts = l[0].dts,
                l)
            }
            ,
            this.alignGopsAtEnd_ = function(t) {
                var e, i, n, r, a, o;
                for (e = u.length - 1,
                i = t.length - 1,
                a = null,
                o = !1; e >= 0 && i >= 0; ) {
                    if (n = u[e],
                    r = t[i],
                    n.pts === r.pts) {
                        o = !0;
                        break
                    }
                    n.pts > r.pts ? e-- : (e === u.length - 1 && (a = i),
                    i--)
                }
                if (!o && null === a)
                    return null;
                var s;
                if (0 === (s = o ? i : a))
                    return t;
                var l = t.slice(s)
                  , c = l.reduce(function(t, e) {
                    return t.byteLength += e.byteLength,
                    t.duration += e.duration,
                    t.nalCount += e.nalCount,
                    t
                }, {
                    byteLength: 0,
                    duration: 0,
                    nalCount: 0
                });
                return l.byteLength = c.byteLength,
                l.duration = c.duration,
                l.nalCount = c.nalCount,
                l.pts = l[0].pts,
                l.dts = l[0].dts,
                l
            }
            ,
            this.alignGopsWith = function(t) {
                u = t
            }
        }
        ,
        n.prototype = new p,
        l = function(t, e) {
            "number" == typeof e.pts && (void 0 === t.timelineStartInfo.pts && (t.timelineStartInfo.pts = e.pts),
            void 0 === t.minSegmentPts ? t.minSegmentPts = e.pts : t.minSegmentPts = Math.min(t.minSegmentPts, e.pts),
            void 0 === t.maxSegmentPts ? t.maxSegmentPts = e.pts : t.maxSegmentPts = Math.max(t.maxSegmentPts, e.pts)),
            "number" == typeof e.dts && (void 0 === t.timelineStartInfo.dts && (t.timelineStartInfo.dts = e.dts),
            void 0 === t.minSegmentDts ? t.minSegmentDts = e.dts : t.minSegmentDts = Math.min(t.minSegmentDts, e.dts),
            void 0 === t.maxSegmentDts ? t.maxSegmentDts = e.dts : t.maxSegmentDts = Math.max(t.maxSegmentDts, e.dts))
        }
        ,
        c = function(t) {
            delete t.minSegmentDts,
            delete t.maxSegmentDts,
            delete t.minSegmentPts,
            delete t.maxSegmentPts
        }
        ,
        d = function(t) {
            var e, i, n = t.minSegmentDts - t.timelineStartInfo.dts;
            return e = t.timelineStartInfo.baseMediaDecodeTime,
            e += n,
            e = Math.max(0, e),
            "audio" === t.type && (i = t.samplerate / 9e4,
            e *= i,
            e = Math.floor(e)),
            e
        }
        ,
        o = function(t, e) {
            this.numberOfTracks = 0,
            this.metadataStream = e,
            "undefined" != typeof t.remux ? this.remuxTracks = !!t.remux : this.remuxTracks = !0,
            this.pendingTracks = [],
            this.videoTrack = null,
            this.pendingBoxes = [],
            this.pendingCaptions = [],
            this.pendingMetadata = [],
            this.pendingBytes = 0,
            this.emittedTracks = 0,
            o.prototype.init.call(this),
            this.push = function(t) {
                return t.text ? this.pendingCaptions.push(t) : t.frames ? this.pendingMetadata.push(t) : (this.pendingTracks.push(t.track),
                this.pendingBoxes.push(t.boxes),
                this.pendingBytes += t.boxes.byteLength,
                "video" === t.track.type && (this.videoTrack = t.track),
                void ("audio" === t.track.type && (this.audioTrack = t.track)))
            }
        }
        ,
        o.prototype = new p,
        o.prototype.flush = function(t) {
            var e, i, n, r, a = 0, o = {
                captions: [],
                captionStreams: {},
                metadata: [],
                info: {}
            }, s = 0;
            if (this.pendingTracks.length < this.numberOfTracks) {
                if ("VideoSegmentStream" !== t && "AudioSegmentStream" !== t)
                    return;
                if (this.remuxTracks)
                    return;
                if (0 === this.pendingTracks.length)
                    return void (++this.emittedTracks >= this.numberOfTracks && (this.trigger("done"),
                    this.emittedTracks = 0))
            }
            for (this.videoTrack ? (s = this.videoTrack.timelineStartInfo.pts,
            w.forEach(function(t) {
                o.info[t] = this.videoTrack[t]
            }, this)) : this.audioTrack && (s = this.audioTrack.timelineStartInfo.pts,
            T.forEach(function(t) {
                o.info[t] = this.audioTrack[t]
            }, this)),
            1 === this.pendingTracks.length ? o.type = this.pendingTracks[0].type : o.type = "combined",
            this.emittedTracks += this.pendingTracks.length,
            n = g.initSegment(this.pendingTracks),
            o.initSegment = new Uint8Array(n.byteLength),
            o.initSegment.set(n),
            o.data = new Uint8Array(this.pendingBytes),
            r = 0; r < this.pendingBoxes.length; r++)
                o.data.set(this.pendingBoxes[r], a),
                a += this.pendingBoxes[r].byteLength;
            for (r = 0; r < this.pendingCaptions.length; r++)
                e = this.pendingCaptions[r],
                e.startTime = e.startPts - s,
                e.startTime /= 9e4,
                e.endTime = e.endPts - s,
                e.endTime /= 9e4,
                o.captionStreams[e.stream] = !0,
                o.captions.push(e);
            for (r = 0; r < this.pendingMetadata.length; r++)
                i = this.pendingMetadata[r],
                i.cueTime = i.pts - s,
                i.cueTime /= 9e4,
                o.metadata.push(i);
            o.metadata.dispatchType = this.metadataStream.dispatchType,
            this.pendingTracks.length = 0,
            this.videoTrack = null,
            this.pendingBoxes.length = 0,
            this.pendingCaptions.length = 0,
            this.pendingBytes = 0,
            this.pendingMetadata.length = 0,
            this.trigger("data", o),
            this.emittedTracks >= this.numberOfTracks && (this.trigger("done"),
            this.emittedTracks = 0)
        }
        ,
        a = function(t) {
            var e, i, s = this, l = !0;
            a.prototype.init.call(this),
            t = t || {},
            this.baseMediaDecodeTime = t.baseMediaDecodeTime || 0,
            this.transmuxPipeline_ = {},
            this.setupAacPipeline = function() {
                var e = {};
                this.transmuxPipeline_ = e,
                e.type = "aac",
                e.metadataStream = new m.MetadataStream,
                e.aacStream = new _,
                e.audioTimestampRolloverStream = new m.TimestampRolloverStream("audio"),
                e.timedMetadataTimestampRolloverStream = new m.TimestampRolloverStream("timed-metadata"),
                e.adtsStream = new y,
                e.coalesceStream = new o(t,e.metadataStream),
                e.headOfPipeline = e.aacStream,
                e.aacStream.pipe(e.audioTimestampRolloverStream).pipe(e.adtsStream),
                e.aacStream.pipe(e.timedMetadataTimestampRolloverStream).pipe(e.metadataStream).pipe(e.coalesceStream),
                e.metadataStream.on("timestamp", function(t) {
                    e.aacStream.setTimestamp(t.timeStamp)
                }),
                e.aacStream.on("data", function(t) {
                    "timed-metadata" !== t.type || e.audioSegmentStream || (i = i || {
                        timelineStartInfo: {
                            baseMediaDecodeTime: s.baseMediaDecodeTime
                        },
                        codec: "adts",
                        type: "audio"
                    },
                    e.coalesceStream.numberOfTracks++,
                    e.audioSegmentStream = new r(i),
                    e.adtsStream.pipe(e.audioSegmentStream).pipe(e.coalesceStream))
                }),
                e.coalesceStream.on("data", this.trigger.bind(this, "data")),
                e.coalesceStream.on("done", this.trigger.bind(this, "done"))
            }
            ,
            this.setupTsPipeline = function() {
                var a = {};
                this.transmuxPipeline_ = a,
                a.type = "ts",
                a.metadataStream = new m.MetadataStream,
                a.packetStream = new m.TransportPacketStream,
                a.parseStream = new m.TransportParseStream,
                a.elementaryStream = new m.ElementaryStream,
                a.videoTimestampRolloverStream = new m.TimestampRolloverStream("video"),
                a.audioTimestampRolloverStream = new m.TimestampRolloverStream("audio"),
                a.timedMetadataTimestampRolloverStream = new m.TimestampRolloverStream("timed-metadata"),
                a.adtsStream = new y,
                a.h264Stream = new v,
                a.captionStream = new m.CaptionStream,
                a.coalesceStream = new o(t,a.metadataStream),
                a.headOfPipeline = a.packetStream,
                a.packetStream.pipe(a.parseStream).pipe(a.elementaryStream),
                a.elementaryStream.pipe(a.videoTimestampRolloverStream).pipe(a.h264Stream),
                a.elementaryStream.pipe(a.audioTimestampRolloverStream).pipe(a.adtsStream),
                a.elementaryStream.pipe(a.timedMetadataTimestampRolloverStream).pipe(a.metadataStream).pipe(a.coalesceStream),
                a.h264Stream.pipe(a.captionStream).pipe(a.coalesceStream),
                a.elementaryStream.on("data", function(o) {
                    var u;
                    if ("metadata" === o.type) {
                        for (u = o.tracks.length; u--; )
                            e || "video" !== o.tracks[u].type ? i || "audio" !== o.tracks[u].type || (i = o.tracks[u],
                            i.timelineStartInfo.baseMediaDecodeTime = s.baseMediaDecodeTime) : (e = o.tracks[u],
                            e.timelineStartInfo.baseMediaDecodeTime = s.baseMediaDecodeTime);
                        e && !a.videoSegmentStream && (a.coalesceStream.numberOfTracks++,
                        a.videoSegmentStream = new n(e,t),
                        a.videoSegmentStream.on("timelineStartInfo", function(t) {
                            i && (i.timelineStartInfo = t,
                            a.audioSegmentStream.setEarliestDts(t.dts))
                        }),
                        a.videoSegmentStream.on("processedGopsInfo", s.trigger.bind(s, "gopInfo")),
                        a.videoSegmentStream.on("baseMediaDecodeTime", function(t) {
                            i && a.audioSegmentStream.setVideoBaseMediaDecodeTime(t)
                        }),
                        a.h264Stream.pipe(a.videoSegmentStream).pipe(a.coalesceStream)),
                        i && !a.audioSegmentStream && (a.coalesceStream.numberOfTracks++,
                        a.audioSegmentStream = new r(i),
                        a.adtsStream.pipe(a.audioSegmentStream).pipe(a.coalesceStream))
                    }
                }),
                a.coalesceStream.on("data", this.trigger.bind(this, "data")),
                a.coalesceStream.on("done", this.trigger.bind(this, "done"))
            }
            ,
            this.setBaseMediaDecodeTime = function(t) {
                var n = this.transmuxPipeline_;
                this.baseMediaDecodeTime = t,
                i && (i.timelineStartInfo.dts = void 0,
                i.timelineStartInfo.pts = void 0,
                c(i),
                i.timelineStartInfo.baseMediaDecodeTime = t,
                n.audioTimestampRolloverStream && n.audioTimestampRolloverStream.discontinuity()),
                e && (n.videoSegmentStream && (n.videoSegmentStream.gopCache_ = [],
                n.videoTimestampRolloverStream.discontinuity()),
                e.timelineStartInfo.dts = void 0,
                e.timelineStartInfo.pts = void 0,
                c(e),
                n.captionStream.reset(),
                e.timelineStartInfo.baseMediaDecodeTime = t),
                n.timedMetadataTimestampRolloverStream && n.timedMetadataTimestampRolloverStream.discontinuity()
            }
            ,
            this.setAudioAppendStart = function(t) {
                i && this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(t)
            }
            ,
            this.alignGopsWith = function(t) {
                e && this.transmuxPipeline_.videoSegmentStream && this.transmuxPipeline_.videoSegmentStream.alignGopsWith(t)
            }
            ,
            this.push = function(t) {
                if (l) {
                    var e = u(t);
                    e && "aac" !== this.transmuxPipeline_.type ? this.setupAacPipeline() : e || "ts" === this.transmuxPipeline_.type || this.setupTsPipeline(),
                    l = !1
                }
                this.transmuxPipeline_.headOfPipeline.push(t)
            }
            ,
            this.flush = function() {
                l = !0,
                this.transmuxPipeline_.headOfPipeline.flush()
            }
            ,
            this.resetCaptions = function() {
                this.transmuxPipeline_.captionStream && this.transmuxPipeline_.captionStream.reset()
            }
        }
        ,
        a.prototype = new p,
        e.exports = {
            Transmuxer: a,
            VideoSegmentStream: n,
            AudioSegmentStream: r,
            AUDIO_PROPERTIES: T,
            VIDEO_PROPERTIES: w
        }
    }
    , {}],
    59: [function(t, e, i) {
        "use strict";
        var n = t(53)
          , r = t(54).handleRollover
          , a = {};
        a.ts = t(52),
        a.aac = t(39);
        var o = function(t) {
            return t[0] === "I".charCodeAt(0) && t[1] === "D".charCodeAt(0) && t[2] === "3".charCodeAt(0)
        }
          , s = function(t, e) {
            for (var i, n = 0, r = 188; r < t.byteLength; )
                if (71 !== t[n] || 71 !== t[r])
                    n++,
                    r++;
                else {
                    switch (i = t.subarray(n, r),
                    a.ts.parseType(i, e.pid)) {
                    case "pat":
                        e.pid || (e.pid = a.ts.parsePat(i));
                        break;
                    case "pmt":
                        e.table || (e.table = a.ts.parsePmt(i))
                    }
                    if (e.pid && e.table)
                        return;
                    n += 188,
                    r += 188
                }
        }
          , u = function(t, e, i) {
            for (var n, r, o, s, u = 0, l = 188, c = !1; l < t.byteLength; )
                if (71 !== t[u] || 71 !== t[l])
                    u++,
                    l++;
                else {
                    switch (n = t.subarray(u, l),
                    a.ts.parseType(n, e.pid)) {
                    case "pes":
                        r = a.ts.parsePesType(n, e.table),
                        o = a.ts.parsePayloadUnitStartIndicator(n),
                        "audio" === r && o && (s = a.ts.parsePesTime(n)) && (s.type = "audio",
                        i.audio.push(s),
                        c = !0)
                    }
                    if (c)
                        break;
                    u += 188,
                    l += 188
                }
            for (l = t.byteLength,
            u = l - 188,
            c = !1; u >= 0; )
                if (71 !== t[u] || 71 !== t[l])
                    u--,
                    l--;
                else {
                    switch (n = t.subarray(u, l),
                    a.ts.parseType(n, e.pid)) {
                    case "pes":
                        r = a.ts.parsePesType(n, e.table),
                        o = a.ts.parsePayloadUnitStartIndicator(n),
                        "audio" === r && o && (s = a.ts.parsePesTime(n)) && (s.type = "audio",
                        i.audio.push(s),
                        c = !0)
                    }
                    if (c)
                        break;
                    u -= 188,
                    l -= 188
                }
        }
          , l = function(t, e, i) {
            for (var n, r, o, s, u, l, c, d = 0, h = 188, f = !1, p = {
                data: [],
                size: 0
            }; h < t.byteLength; )
                if (71 !== t[d] || 71 !== t[h])
                    d++,
                    h++;
                else {
                    switch (n = t.subarray(d, h),
                    a.ts.parseType(n, e.pid)) {
                    case "pes":
                        if (r = a.ts.parsePesType(n, e.table),
                        o = a.ts.parsePayloadUnitStartIndicator(n),
                        "video" === r && (o && !f && (s = a.ts.parsePesTime(n)) && (s.type = "video",
                        i.video.push(s),
                        f = !0),
                        !i.firstKeyFrame)) {
                            if (o && 0 !== p.size) {
                                for (u = new Uint8Array(p.size),
                                l = 0; p.data.length; )
                                    c = p.data.shift(),
                                    u.set(c, l),
                                    l += c.byteLength;
                                a.ts.videoPacketContainsKeyFrame(u) && (i.firstKeyFrame = a.ts.parsePesTime(u),
                                i.firstKeyFrame.type = "video"),
                                p.size = 0
                            }
                            p.data.push(n),
                            p.size += n.byteLength
                        }
                    }
                    if (f && i.firstKeyFrame)
                        break;
                    d += 188,
                    h += 188
                }
            for (h = t.byteLength,
            d = h - 188,
            f = !1; d >= 0; )
                if (71 !== t[d] || 71 !== t[h])
                    d--,
                    h--;
                else {
                    switch (n = t.subarray(d, h),
                    a.ts.parseType(n, e.pid)) {
                    case "pes":
                        r = a.ts.parsePesType(n, e.table),
                        o = a.ts.parsePayloadUnitStartIndicator(n),
                        "video" === r && o && (s = a.ts.parsePesTime(n)) && (s.type = "video",
                        i.video.push(s),
                        f = !0)
                    }
                    if (f)
                        break;
                    d -= 188,
                    h -= 188
                }
        }
          , c = function(t, e) {
            if (t.audio && t.audio.length) {
                var i = e;
                void 0 === i && (i = t.audio[0].dts),
                t.audio.forEach(function(t) {
                    t.dts = r(t.dts, i),
                    t.pts = r(t.pts, i),
                    t.dtsTime = t.dts / 9e4,
                    t.ptsTime = t.pts / 9e4
                })
            }
            if (t.video && t.video.length) {
                var n = e;
                if (void 0 === n && (n = t.video[0].dts),
                t.video.forEach(function(t) {
                    t.dts = r(t.dts, n),
                    t.pts = r(t.pts, n),
                    t.dtsTime = t.dts / 9e4,
                    t.ptsTime = t.pts / 9e4
                }),
                t.firstKeyFrame) {
                    var a = t.firstKeyFrame;
                    a.dts = r(a.dts, n),
                    a.pts = r(a.pts, n),
                    a.dtsTime = a.dts / 9e4,
                    a.ptsTime = a.dts / 9e4
                }
            }
        }
          , d = function(t) {
            for (var e, i = !1, n = 0, r = null, o = null, s = 0, u = 0; t.length - u >= 3; ) {
                switch (a.aac.parseType(t, u)) {
                case "timed-metadata":
                    if (t.length - u < 10) {
                        i = !0;
                        break
                    }
                    if ((s = a.aac.parseId3TagSize(t, u)) > t.length) {
                        i = !0;
                        break
                    }
                    null === o && (e = t.subarray(u, u + s),
                    o = a.aac.parseAacTimestamp(e)),
                    u += s;
                    break;
                case "audio":
                    if (t.length - u < 7) {
                        i = !0;
                        break
                    }
                    if ((s = a.aac.parseAdtsSize(t, u)) > t.length) {
                        i = !0;
                        break
                    }
                    null === r && (e = t.subarray(u, u + s),
                    r = a.aac.parseSampleRate(e)),
                    n++,
                    u += s;
                    break;
                default:
                    u++
                }
                if (i)
                    return null
            }
            if (null === r || null === o)
                return null;
            var l = 9e4 / r;
            return {
                audio: [{
                    type: "audio",
                    dts: o,
                    pts: o
                }, {
                    type: "audio",
                    dts: o + 1024 * n * l,
                    pts: o + 1024 * n * l
                }]
            }
        }
          , h = function(t) {
            var e = {
                pid: null,
                table: null
            }
              , i = {};
            s(t, e);
            for (var r in e.table)
                if (e.table.hasOwnProperty(r)) {
                    var a = e.table[r];
                    switch (a) {
                    case n.H264_STREAM_TYPE:
                        i.video = [],
                        l(t, e, i),
                        0 === i.video.length && delete i.video;
                        break;
                    case n.ADTS_STREAM_TYPE:
                        i.audio = [],
                        u(t, e, i),
                        0 === i.audio.length && delete i.audio
                    }
                }
            return i
        }
          , f = function(t, e) {
            var i, n = o(t);
            return (i = n ? d(t) : h(t)) && (i.audio || i.video) ? (c(i, e),
            i) : null
        };
        e.exports = {
            inspect: f
        }
    }
    , {}],
    60: [function(t, e, i) {
        var n, r, a, o, s, u;
        n = function(t) {
            return 9e4 * t
        }
        ,
        r = function(t, e) {
            return t * e
        }
        ,
        a = function(t) {
            return t / 9e4
        }
        ,
        o = function(t, e) {
            return t / e
        }
        ,
        s = function(t, e) {
            return n(o(t, e))
        }
        ,
        u = function(t, e) {
            return r(a(t), e)
        }
        ,
        e.exports = {
            secondsToVideoTs: n,
            secondsToAudioTs: r,
            videoTsToSeconds: a,
            audioTsToSeconds: o,
            audioTsToVideoTs: s,
            videoTsToAudioTs: u
        }
    }
    , {}],
    61: [function(t, e, i) {
        "use strict";
        var n;
        n = function(t) {
            var e = t.byteLength
              , i = 0
              , n = 0;
            this.length = function() {
                return 8 * e
            }
            ,
            this.bitsAvailable = function() {
                return 8 * e + n
            }
            ,
            this.loadWord = function() {
                var r = t.byteLength - e
                  , a = new Uint8Array(4)
                  , o = Math.min(4, e);
                if (0 === o)
                    throw new Error("no bytes available");
                a.set(t.subarray(r, r + o)),
                i = new DataView(a.buffer).getUint32(0),
                n = 8 * o,
                e -= o
            }
            ,
            this.skipBits = function(t) {
                var r;
                n > t ? (i <<= t,
                n -= t) : (t -= n,
                r = Math.floor(t / 8),
                t -= 8 * r,
                e -= r,
                this.loadWord(),
                i <<= t,
                n -= t)
            }
            ,
            this.readBits = function(t) {
                var r = Math.min(n, t)
                  , a = i >>> 32 - r;
                return n -= r,
                n > 0 ? i <<= r : e > 0 && this.loadWord(),
                r = t - r,
                r > 0 ? a << r | this.readBits(r) : a
            }
            ,
            this.skipLeadingZeros = function() {
                var t;
                for (t = 0; t < n; ++t)
                    if (0 != (i & 2147483648 >>> t))
                        return i <<= t,
                        n -= t,
                        t;
                return this.loadWord(),
                t + this.skipLeadingZeros()
            }
            ,
            this.skipUnsignedExpGolomb = function() {
                this.skipBits(1 + this.skipLeadingZeros())
            }
            ,
            this.skipExpGolomb = function() {
                this.skipBits(1 + this.skipLeadingZeros())
            }
            ,
            this.readUnsignedExpGolomb = function() {
                var t = this.skipLeadingZeros();
                return this.readBits(t + 1) - 1
            }
            ,
            this.readExpGolomb = function() {
                var t = this.readUnsignedExpGolomb();
                return 1 & t ? 1 + t >>> 1 : -1 * (t >>> 1)
            }
            ,
            this.readBoolean = function() {
                return 1 === this.readBits(1)
            }
            ,
            this.readUnsignedByte = function() {
                return this.readBits(8)
            }
            ,
            this.loadWord()
        }
        ,
        e.exports = n
    }
    , {}],
    62: [function(t, e, i) {
        "use strict";
        var n = function() {
            this.init = function() {
                var t = {};
                this.on = function(e, i) {
                    t[e] || (t[e] = []),
                    t[e] = t[e].concat(i)
                }
                ,
                this.off = function(e, i) {
                    var n;
                    return !!t[e] && (n = t[e].indexOf(i),
                    t[e] = t[e].slice(),
                    t[e].splice(n, 1),
                    n > -1)
                }
                ,
                this.trigger = function(e) {
                    var i, n, r, a;
                    if (i = t[e])
                        if (2 === arguments.length)
                            for (r = i.length,
                            n = 0; n < r; ++n)
                                i[n].call(this, arguments[1]);
                        else {
                            for (a = [],
                            n = arguments.length,
                            n = 1; n < arguments.length; ++n)
                                a.push(arguments[n]);
                            for (r = i.length,
                            n = 0; n < r; ++n)
                                i[n].apply(this, a)
                        }
                }
                ,
                this.dispose = function() {
                    t = {}
                }
            }
        };
        n.prototype.pipe = function(t) {
            return this.on("data", function(e) {
                t.push(e)
            }),
            this.on("done", function(e) {
                t.flush(e)
            }),
            t
        }
        ,
        n.prototype.push = function(t) {
            this.trigger("data", t)
        }
        ,
        n.prototype.flush = function(t) {
            this.trigger("done", t)
        }
        ,
        e.exports = n
    }
    , {}],
    63: [function(t, e, i) {
        !function(t) {
            var n = {
                buildAbsoluteURL: function(t, e) {
                    if (e = e.trim(),
                    /^[a-z]+:/i.test(e))
                        return e;
                    var i = null
                      , r = null
                      , a = /^([^#]*)(.*)$/.exec(e);
                    a && (r = a[2],
                    e = a[1]);
                    var o = /^([^\?]*)(.*)$/.exec(e);
                    o && (i = o[2],
                    e = o[1]);
                    var s = /^([^#]*)(.*)$/.exec(t);
                    s && (t = s[1]);
                    var u = /^([^\?]*)(.*)$/.exec(t);
                    u && (t = u[1]);
                    var l = /^(([a-z]+:)?\/\/[^:\/]+(:[0-9]+)?)?(\/?.*)$/i.exec(t);
                    if (!l)
                        throw new Error("Error trying to parse base URL.");
                    var c = l[2] || ""
                      , d = l[1] || ""
                      , h = l[4];
                    0 !== h.indexOf("/") && "" !== d && (h = "/" + h);
                    var f = null;
                    return f = /^\/\//.test(e) ? c + "//" + n.buildAbsolutePath("", e.substring(2)) : /^\//.test(e) ? d + "/" + n.buildAbsolutePath("", e.substring(1)) : n.buildAbsolutePath(d + h, e),
                    i && (f += i),
                    r && (f += r),
                    f
                },
                buildAbsolutePath: function(t, e) {
                    for (var i, n, r = e, a = "", o = t.replace(/[^\/]*$/, r.replace(/(\/|^)(?:\.?\/+)+/g, "$1")), s = 0; (n = o.indexOf("/../", s)) > -1; s = n + i)
                        i = /^\/(?:\.\.\/)*/.exec(o.slice(n))[0].length,
                        a = (a + o.substring(s, n)).replace(new RegExp("(?:\\/+[^\\/]*){0," + (i - 1) / 3 + "}$"), "/");
                    return a + o.substr(s)
                }
            };
            "object" == typeof i && "object" == typeof e ? e.exports = n : "function" == typeof define && define.amd ? define([], function() {
                return n
            }) : "object" == typeof i ? i.URLToolkit = n : t.URLToolkit = n
        }(this)
    }
    , {}],
    64: [function(t, e, i) {
        (function(n) {
            "use strict";
            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var a = t(32)
              , o = r(a)
              , s = "undefined" != typeof window ? window.videojs : void 0 !== n ? n.videojs : null
              , u = r(s)
              , l = function(t) {
                Object.defineProperties(t.frame, {
                    id: {
                        get: function() {
                            return u["default"].log.warn("cue.frame.id is deprecated. Use cue.value.key instead."),
                            t.value.key
                        }
                    },
                    value: {
                        get: function() {
                            return u["default"].log.warn("cue.frame.value is deprecated. Use cue.value.data instead."),
                            t.value.data
                        }
                    },
                    privateData: {
                        get: function() {
                            return u["default"].log.warn("cue.frame.privateData is deprecated. Use cue.value.data instead."),
                            t.value.data
                        }
                    }
                })
            }
              , c = function(t) {
                return isNaN(t) || Math.abs(t) === 1 / 0 ? Number.MAX_VALUE : t
            }
              , d = function(t, e, i) {
                var n = o["default"].WebKitDataCue || o["default"].VTTCue;
                e && e.forEach(function(t) {
                    var e = t.stream;
                    this.inbandTextTracks_[e].addCue(new n(t.startTime + this.timestampOffset,t.endTime + this.timestampOffset,t.text))
                }, t),
                i && function() {
                    var e = c(t.mediaSource_.duration);
                    i.forEach(function(t) {
                        var e = t.cueTime + this.timestampOffset;
                        t.frames.forEach(function(t) {
                            var i = new n(e,e,t.value || t.url || t.data || "");
                            i.frame = t,
                            i.value = t,
                            l(i),
                            this.metadataTrack_.addCue(i)
                        }, this)
                    }, t),
                    t.metadataTrack_ && t.metadataTrack_.cues && t.metadataTrack_.cues.length && function() {
                        for (var i = t.metadataTrack_.cues, n = [], r = 0; r < i.length; r++)
                            i[r] && n.push(i[r]);
                        var a = n.reduce(function(t, e) {
                            var i = t[e.startTime] || [];
                            return i.push(e),
                            t[e.startTime] = i,
                            t
                        }, {})
                          , o = Object.keys(a).sort(function(t, e) {
                            return Number(t) - Number(e)
                        });
                        o.forEach(function(t, i) {
                            var n = a[t]
                              , r = Number(o[i + 1]) || e;
                            n.forEach(function(t) {
                                t.endTime = r
                            })
                        })
                    }()
                }()
            };
            i["default"] = {
                addTextTrackData: d,
                durationOfVideo: c
            },
            e.exports = i["default"]
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    65: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = function(t) {
            return /mp4a\.\d+.\d+/i.test(t)
        }
          , r = function(t) {
            return /avc1\.[\da-f]+/i.test(t)
        }
          , a = function(t) {
            var e = {
                type: "",
                parameters: {}
            }
              , i = t.trim().split(";");
            return e.type = i.shift().trim(),
            i.forEach(function(t) {
                var i = t.trim().split("=");
                if (i.length > 1) {
                    var n = i[0].replace(/"/g, "").trim()
                      , r = i[1].replace(/"/g, "").trim();
                    e.parameters[n] = r
                }
            }),
            e
        }
          , o = function(t) {
            return t.map(function(t) {
                return t.replace(/avc1\.(\d+)\.(\d+)/i, function(t, e, i) {
                    return "avc1." + ("00" + Number(e).toString(16)).slice(-2) + "00" + ("00" + Number(i).toString(16)).slice(-2)
                })
            })
        };
        i["default"] = {
            isAudioCodec: n,
            parseContentType: a,
            isVideoCodec: r,
            translateLegacyCodecs: o
        },
        e.exports = i["default"]
    }
    , {}],
    66: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = function(t, e, i) {
            var n = e.player_;
            if (i.captions && i.captions.length) {
                t.inbandTextTracks_ || (t.inbandTextTracks_ = {});
                for (var r in i.captionStreams)
                    if (!t.inbandTextTracks_[r]) {
                        n.tech_.trigger({
                            type: "usage",
                            name: "hls-608"
                        });
                        var a = n.textTracks().getTrackById(r);
                        t.inbandTextTracks_[r] = a || n.addRemoteTextTrack({
                            kind: "captions",
                            id: r,
                            label: r
                        }, !1).track
                    }
            }
            i.metadata && i.metadata.length && !t.metadataTrack_ && (t.metadataTrack_ = n.addRemoteTextTrack({
                kind: "metadata",
                label: "Timed Metadata"
            }, !1).track,
            t.metadataTrack_.inBandMetadataTrackDispatchType = i.metadata.dispatchType)
        };
        i["default"] = n,
        e.exports = i["default"]
    }
    , {}],
    67: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = {
            TIME_BETWEEN_CHUNKS: 1,
            BYTES_PER_CHUNK: 32768
        };
        i["default"] = n,
        e.exports = i["default"]
    }
    , {}],
    68: [function(t, e, i) {
        (function(n) {
            "use strict";
            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            function a(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            function o(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value"in n && (n.writable = !0),
                        Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i),
                    n && t(e, n),
                    e
                }
            }()
              , u = function(t, e, i) {
                for (var n = !0; n; ) {
                    var r = t
                      , a = e
                      , o = i;
                    n = !1,
                    null === r && (r = Function.prototype);
                    var s = Object.getOwnPropertyDescriptor(r, a);
                    if (void 0 !== s) {
                        if ("value"in s)
                            return s.value;
                        var u = s.get;
                        return void 0 === u ? void 0 : u.call(o)
                    }
                    var l = Object.getPrototypeOf(r);
                    if (null === l)
                        return;
                    t = l,
                    e = a,
                    i = o,
                    n = !0,
                    s = l = void 0
                }
            }
              , l = t(31)
              , c = r(l)
              , d = "undefined" != typeof window ? window.videojs : void 0 !== n ? n.videojs : null
              , h = r(d)
              , f = t(69)
              , p = r(f)
              , g = t(67)
              , m = r(g)
              , y = t(65)
              , v = function(t) {
                function e() {
                    var t = this;
                    a(this, e),
                    u(Object.getPrototypeOf(e.prototype), "constructor", this).call(this),
                    this.sourceBuffers = [],
                    this.readyState = "closed",
                    this.on(["sourceopen", "webkitsourceopen"], function(e) {
                        t.swfObj = c["default"].getElementById(e.swfId),
                        t.player_ = (0,
                        h["default"])(t.swfObj.parentNode),
                        t.tech_ = t.swfObj.tech,
                        t.readyState = "open",
                        t.tech_.on("seeking", function() {
                            for (var e = t.sourceBuffers.length; e--; )
                                t.sourceBuffers[e].abort()
                        }),
                        t.swfObj && t.swfObj.vjs_load()
                    })
                }
                return o(e, t),
                s(e, [{
                    key: "addSeekableRange_",
                    value: function() {}
                }, {
                    key: "addSourceBuffer",
                    value: function(t) {
                        var e = (0,
                        y.parseContentType)(t)
                          , i = void 0;
                        if ("video/mp2t" !== e.type && "audio/mp2t" !== e.type)
                            throw new Error("NotSupportedError (Video.js)");
                        return i = new p["default"](this),
                        this.sourceBuffers.push(i),
                        i
                    }
                }, {
                    key: "endOfStream",
                    value: function(t) {
                        "network" === t ? this.tech_.error(2) : "decode" === t && this.tech_.error(3),
                        "ended" !== this.readyState && (this.readyState = "ended",
                        this.swfObj.vjs_endOfStream())
                    }
                }]),
                e
            }(h["default"].EventTarget);
            i["default"] = v;
            try {
                Object.defineProperty(v.prototype, "duration", {
                    get: function() {
                        return this.swfObj ? this.swfObj.vjs_getProperty("duration") : NaN
                    },
                    set: function(t) {
                        var e = void 0
                          , i = this.swfObj.vjs_getProperty("duration");
                        if (this.swfObj.vjs_setProperty("duration", t),
                        t < i)
                            for (e = 0; e < this.sourceBuffers.length; e++)
                                this.sourceBuffers[e].remove(t, i);
                        return t
                    }
                })
            } catch (_) {
                v.prototype.duration = NaN
            }
            for (var b in m["default"])
                v[b] = m["default"][b];
            e.exports = i["default"]
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    69: [function(t, e, i) {
        (function(n) {
            "use strict";
            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            function a(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            function o(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value"in n && (n.writable = !0),
                        Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i),
                    n && t(e, n),
                    e
                }
            }()
              , u = function(t, e, i) {
                for (var n = !0; n; ) {
                    var r = t
                      , a = e
                      , o = i;
                    n = !1,
                    null === r && (r = Function.prototype);
                    var s = Object.getOwnPropertyDescriptor(r, a);
                    if (void 0 !== s) {
                        if ("value"in s)
                            return s.value;
                        var u = s.get;
                        return void 0 === u ? void 0 : u.call(o)
                    }
                    var l = Object.getPrototypeOf(r);
                    if (null === l)
                        return;
                    t = l,
                    e = a,
                    i = o,
                    n = !0,
                    s = l = void 0
                }
            }
              , l = t(32)
              , c = r(l)
              , d = "undefined" != typeof window ? window.videojs : void 0 !== n ? n.videojs : null
              , h = r(d)
              , f = t(46)
              , p = r(f)
              , g = t(72)
              , m = r(g)
              , y = t(66)
              , v = r(y)
              , _ = t(64)
              , b = t(70)
              , x = r(b)
              , T = t(76)
              , w = r(T)
              , S = t(67)
              , k = r(S)
              , C = function(t) {
                c["default"].setTimeout(t, k["default"].TIME_BETWEEN_CHUNKS)
            }
              , E = function() {
                return Math.random().toString(36).slice(2, 8)
            }
              , A = function(t, e) {
                ("number" != typeof e || e < 0) && (e = 0);
                var i = Math.pow(10, e);
                return Math.round(t * i) / i
            }
              , O = function(t) {
                function e(t) {
                    var i = this;
                    a(this, e),
                    u(Object.getPrototypeOf(e.prototype), "constructor", this).call(this);
                    var n = void 0;
                    this.chunkSize_ = k["default"].BYTES_PER_CHUNK,
                    this.buffer_ = [],
                    this.bufferSize_ = 0,
                    this.basePtsOffset_ = NaN,
                    this.mediaSource_ = t,
                    this.audioBufferEnd_ = NaN,
                    this.videoBufferEnd_ = NaN,
                    this.updating = !1,
                    this.timestampOffset_ = 0,
                    n = c["default"].btoa(String.fromCharCode.apply(null, Array.prototype.slice.call(p["default"].getFlvHeader())));
                    var r = this.mediaSource_.player_.id().replace(/[^a-zA-Z0-9]/g, "_");
                    this.flashEncodedHeaderName_ = "vjs_flashEncodedHeader_" + r + E(),
                    this.flashEncodedDataName_ = "vjs_flashEncodedData_" + r + E(),
                    c["default"][this.flashEncodedHeaderName_] = function() {
                        return delete c["default"][i.flashEncodedHeaderName_],
                        n
                    }
                    ,
                    this.mediaSource_.swfObj.vjs_appendChunkReady(this.flashEncodedHeaderName_),
                    this.transmuxer_ = (0,
                    w["default"])(x["default"]),
                    this.transmuxer_.postMessage({
                        action: "init",
                        options: {}
                    }),
                    this.transmuxer_.onmessage = function(t) {
                        "data" === t.data.action && i.receiveBuffer_(t.data.segment)
                    }
                    ,
                    this.one("updateend", function() {
                        i.mediaSource_.tech_.trigger("loadedmetadata")
                    }),
                    Object.defineProperty(this, "timestampOffset", {
                        get: function() {
                            return this.timestampOffset_
                        },
                        set: function(t) {
                            "number" == typeof t && t >= 0 && (this.timestampOffset_ = t,
                            this.mediaSource_.swfObj.vjs_discontinuity(),
                            this.basePtsOffset_ = NaN,
                            this.audioBufferEnd_ = NaN,
                            this.videoBufferEnd_ = NaN,
                            this.transmuxer_.postMessage({
                                action: "reset"
                            }))
                        }
                    }),
                    Object.defineProperty(this, "buffered", {
                        get: function() {
                            if (!(this.mediaSource_ && this.mediaSource_.swfObj && "vjs_getProperty"in this.mediaSource_.swfObj))
                                return h["default"].createTimeRange();
                            var t = this.mediaSource_.swfObj.vjs_getProperty("buffered");
                            return t && t.length && (t[0][0] = A(t[0][0], 3),
                            t[0][1] = A(t[0][1], 3)),
                            h["default"].createTimeRanges(t)
                        }
                    }),
                    this.mediaSource_.player_.on("seeked", function() {
                        if ((0,
                        m["default"])(0, 1 / 0, i.metadataTrack_),
                        i.inbandTextTracks_)
                            for (var t in i.inbandTextTracks_)
                                (0,
                                m["default"])(0, 1 / 0, i.inbandTextTracks_[t])
                    });
                    var o = this.onHlsReset_.bind(this);
                    this.mediaSource_.player_.tech_.on("hls-reset", o),
                    this.mediaSource_.player_.tech_.hls.on("dispose", function() {
                        i.transmuxer_.terminate(),
                        i.mediaSource_.player_.tech_.off("hls-reset", o)
                    })
                }
                return o(e, t),
                s(e, [{
                    key: "appendBuffer",
                    value: function(t) {
                        var e = void 0;
                        if (this.updating)
                            throw e = new Error("SourceBuffer.append() cannot be called while an update is in progress"),
                            e.name = "InvalidStateError",
                            e.code = 11,
                            e;
                        this.updating = !0,
                        this.mediaSource_.readyState = "open",
                        this.trigger({
                            type: "update"
                        }),
                        this.transmuxer_.postMessage({
                            action: "push",
                            data: t.buffer,
                            byteOffset: t.byteOffset,
                            byteLength: t.byteLength
                        }, [t.buffer]),
                        this.transmuxer_.postMessage({
                            action: "flush"
                        })
                    }
                }, {
                    key: "abort",
                    value: function() {
                        this.buffer_ = [],
                        this.bufferSize_ = 0,
                        this.mediaSource_.swfObj.vjs_abort(),
                        this.updating && (this.updating = !1,
                        this.trigger({
                            type: "updateend"
                        }))
                    }
                }, {
                    key: "remove",
                    value: function(t, e) {
                        if ((0,
                        m["default"])(t, e, this.metadataTrack_),
                        this.inbandTextTracks_)
                            for (var i in this.inbandTextTracks_)
                                (0,
                                m["default"])(t, e, this.inbandTextTracks_[i]);
                        this.trigger({
                            type: "update"
                        }),
                        this.trigger({
                            type: "updateend"
                        })
                    }
                }, {
                    key: "receiveBuffer_",
                    value: function(t) {
                        var e = this;
                        (0,
                        v["default"])(this, this.mediaSource_, t),
                        (0,
                        _.addTextTrackData)(this, t.captions, t.metadata),
                        C(function() {
                            var i = e.convertTagsToData_(t);
                            0 === e.buffer_.length && C(e.processBuffer_.bind(e)),
                            i && (e.buffer_.push(i),
                            e.bufferSize_ += i.byteLength)
                        })
                    }
                }, {
                    key: "processBuffer_",
                    value: function() {
                        var t = this
                          , e = k["default"].BYTES_PER_CHUNK;
                        if (!this.buffer_.length)
                            return void (!1 !== this.updating && (this.updating = !1,
                            this.trigger({
                                type: "updateend"
                            })));
                        var i = this.buffer_[0].subarray(0, e);
                        i.byteLength < e || this.buffer_[0].byteLength === e ? this.buffer_.shift() : this.buffer_[0] = this.buffer_[0].subarray(e),
                        this.bufferSize_ -= i.byteLength;
                        for (var n = [], r = i.byteLength, a = 0; a < r; a++)
                            n.push(String.fromCharCode(i[a]));
                        var o = c["default"].btoa(n.join(""));
                        c["default"][this.flashEncodedDataName_] = function() {
                            return C(t.processBuffer_.bind(t)),
                            delete c["default"][t.flashEncodedDataName_],
                            o
                        }
                        ,
                        this.mediaSource_.swfObj.vjs_appendChunkReady(this.flashEncodedDataName_)
                    }
                }, {
                    key: "convertTagsToData_",
                    value: function(t) {
                        var e = 0
                          , i = this.mediaSource_.tech_
                          , n = 0
                          , r = void 0
                          , a = t.tags.videoTags
                          , o = t.tags.audioTags;
                        if (isNaN(this.basePtsOffset_) && (a.length || o.length)) {
                            var s = a[0] || {
                                pts: 1 / 0
                            }
                              , u = o[0] || {
                                pts: 1 / 0
                            };
                            this.basePtsOffset_ = Math.min(u.pts, s.pts)
                        }
                        i.seeking() && (this.videoBufferEnd_ = NaN,
                        this.audioBufferEnd_ = NaN),
                        isNaN(this.videoBufferEnd_) ? (i.buffered().length && (n = i.buffered().end(0) - this.timestampOffset),
                        i.seeking() && (n = Math.max(n, i.currentTime() - this.timestampOffset)),
                        n *= 1e3,
                        n += this.basePtsOffset_) : n = this.videoBufferEnd_ + .1;
                        var l = a.length;
                        if (l && a[l - 1].pts >= n) {
                            for (; --l; ) {
                                var c = a[l];
                                if (!(c.pts > n) && (c.keyFrame || c.metaDataTag))
                                    break
                            }
                            for (; l && a[l - 1].metaDataTag; )
                                l--
                        }
                        var d = a.slice(l)
                          , h = void 0;
                        for (h = isNaN(this.audioBufferEnd_) ? n : this.audioBufferEnd_ + .1,
                        d.length && (h = Math.min(h, d[0].pts)),
                        l = 0; l < o.length && !(o[l].pts >= h); )
                            l++;
                        var f = o.slice(l);
                        f.length && (this.audioBufferEnd_ = f[f.length - 1].pts),
                        d.length && (this.videoBufferEnd_ = d[d.length - 1].pts);
                        var p = this.getOrderedTags_(d, f);
                        if (0 !== p.length) {
                            if (p[0].pts < n && i.seeking()) {
                                var g = i.currentTime()
                                  , m = (n - p[0].pts) / 1e3
                                  , y = g - m;
                                y < 1 / 30 && (y = 0);
                                try {
                                    this.mediaSource_.swfObj.vjs_adjustCurrentTime(y)
                                } catch (v) {}
                            }
                            for (var _ = 0; _ < p.length; _++)
                                e += p[_].bytes.byteLength;
                            r = new Uint8Array(e);
                            for (var _ = 0, b = 0; _ < p.length; _++)
                                r.set(p[_].bytes, b),
                                b += p[_].bytes.byteLength;
                            return r
                        }
                    }
                }, {
                    key: "getOrderedTags_",
                    value: function(t, e) {
                        for (var i = void 0, n = []; t.length || e.length; )
                            i = t.length ? e.length && e[0].dts < t[0].dts ? e.shift() : t.shift() : e.shift(),
                            n.push(i);
                        return n
                    }
                }, {
                    key: "onHlsReset_",
                    value: function() {
                        this.transmuxer_.postMessage({
                            action: "resetCaptions"
                        })
                    }
                }]),
                e
            }(h["default"].EventTarget);
            i["default"] = O,
            e.exports = i["default"]
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    70: [function(t, e, i) {
        "use strict";
        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        function r(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i),
                n && t(e, n),
                e
            }
        }()
          , o = t(32)
          , s = n(o)
          , u = t(46)
          , l = n(u)
          , c = function(t) {
            t.on("data", function(t) {
                s["default"].postMessage({
                    action: "data",
                    segment: t
                })
            }),
            t.on("done", function(t) {
                s["default"].postMessage({
                    action: "done"
                })
            })
        }
          , d = function() {
            function t(e) {
                r(this, t),
                this.options = e || {},
                this.init()
            }
            return a(t, [{
                key: "init",
                value: function() {
                    this.transmuxer && this.transmuxer.dispose(),
                    this.transmuxer = new l["default"].Transmuxer(this.options),
                    c(this.transmuxer)
                }
            }, {
                key: "push",
                value: function(t) {
                    var e = new Uint8Array(t.data,t.byteOffset,t.byteLength);
                    this.transmuxer.push(e)
                }
            }, {
                key: "reset",
                value: function() {
                    this.init()
                }
            }, {
                key: "flush",
                value: function() {
                    this.transmuxer.flush()
                }
            }, {
                key: "resetCaptions",
                value: function() {
                    this.transmuxer.resetCaptions()
                }
            }]),
            t
        }()
          , h = function(t) {
            t.onmessage = function(t) {
                return "init" === t.data.action && t.data.options ? void (this.messageHandlers = new d(t.data.options)) : (this.messageHandlers || (this.messageHandlers = new d),
                void (t.data && t.data.action && "init" !== t.data.action && this.messageHandlers[t.data.action] && this.messageHandlers[t.data.action](t.data)))
            }
        };
        i["default"] = function(t) {
            return new h(t)
        }
        ,
        e.exports = i["default"]
    }
    , {}],
    71: [function(t, e, i) {
        (function(n) {
            "use strict";
            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            function a(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            function o(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value"in n && (n.writable = !0),
                        Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i),
                    n && t(e, n),
                    e
                }
            }()
              , u = function(t, e, i) {
                for (var n = !0; n; ) {
                    var r = t
                      , a = e
                      , o = i;
                    n = !1,
                    null === r && (r = Function.prototype);
                    var s = Object.getOwnPropertyDescriptor(r, a);
                    if (void 0 !== s) {
                        if ("value"in s)
                            return s.value;
                        var u = s.get;
                        return void 0 === u ? void 0 : u.call(o)
                    }
                    var l = Object.getPrototypeOf(r);
                    if (null === l)
                        return;
                    t = l,
                    e = a,
                    i = o,
                    n = !0,
                    s = l = void 0
                }
            }
              , l = t(32)
              , c = r(l)
              , d = t(31)
              , h = r(d)
              , f = "undefined" != typeof window ? window.videojs : void 0 !== n ? n.videojs : null
              , p = r(f)
              , g = t(75)
              , m = r(g)
              , y = t(64)
              , v = t(65)
              , _ = function(t) {
                function e() {
                    var t = this;
                    a(this, e),
                    u(Object.getPrototypeOf(e.prototype), "constructor", this).call(this);
                    var i = void 0;
                    this.nativeMediaSource_ = new c["default"].MediaSource;
                    for (i in this.nativeMediaSource_)
                        i in e.prototype || "function" != typeof this.nativeMediaSource_[i] || (this[i] = this.nativeMediaSource_[i].bind(this.nativeMediaSource_));
                    this.duration_ = NaN,
                    Object.defineProperty(this, "duration", {
                        get: function() {
                            return this.duration_ === 1 / 0 ? this.duration_ : this.nativeMediaSource_.duration
                        },
                        set: function(t) {
                            if (this.duration_ = t,
                            t !== 1 / 0)
                                return void (this.nativeMediaSource_.duration = t)
                        }
                    }),
                    Object.defineProperty(this, "seekable", {
                        get: function() {
                            return this.duration_ === 1 / 0 ? p["default"].createTimeRanges([[0, this.nativeMediaSource_.duration]]) : this.nativeMediaSource_.seekable
                        }
                    }),
                    Object.defineProperty(this, "readyState", {
                        get: function() {
                            return this.nativeMediaSource_.readyState
                        }
                    }),
                    Object.defineProperty(this, "activeSourceBuffers", {
                        get: function() {
                            return this.activeSourceBuffers_
                        }
                    }),
                    this.sourceBuffers = [],
                    this.activeSourceBuffers_ = [],
                    this.updateActiveSourceBuffers_ = function() {
                        if (t.activeSourceBuffers_.length = 0,
                        1 === t.sourceBuffers.length) {
                            var e = t.sourceBuffers[0];
                            return e.appendAudioInitSegment_ = !0,
                            e.audioDisabled_ = !e.audioCodec_,
                            void t.activeSourceBuffers_.push(e)
                        }
                        for (var i = !1, n = !0, r = 0; r < t.player_.audioTracks().length; r++) {
                            var a = t.player_.audioTracks()[r];
                            if (a.enabled && "main" !== a.kind) {
                                i = !0,
                                n = !1;
                                break
                            }
                        }
                        t.sourceBuffers.forEach(function(e) {
                            if (e.appendAudioInitSegment_ = !0,
                            e.videoCodec_ && e.audioCodec_)
                                e.audioDisabled_ = i;
                            else if (e.videoCodec_ && !e.audioCodec_)
                                e.audioDisabled_ = !0,
                                n = !1;
                            else if (!e.videoCodec_ && e.audioCodec_ && (e.audioDisabled_ = n,
                            n))
                                return;
                            t.activeSourceBuffers_.push(e)
                        })
                    }
                    ,
                    this.onPlayerMediachange_ = function() {
                        t.sourceBuffers.forEach(function(t) {
                            t.appendAudioInitSegment_ = !0
                        })
                    }
                    ,
                    this.onHlsReset_ = function() {
                        t.sourceBuffers.forEach(function(t) {
                            t.transmuxer_ && t.transmuxer_.postMessage({
                                action: "resetCaptions"
                            })
                        })
                    }
                    ,
                    this.onHlsSegmentTimeMapping_ = function(e) {
                        t.sourceBuffers.forEach(function(t) {
                            return t.timeMapping_ = e.mapping
                        })
                    }
                    ,
                    ["sourceopen", "sourceclose", "sourceended"].forEach(function(t) {
                        this.nativeMediaSource_.addEventListener(t, this.trigger.bind(this))
                    }, this),
                    this.on("sourceopen", function(e) {
                        var i = h["default"].querySelector('[src="' + t.url_ + '"]');
                        i && (t.player_ = (0,
                        p["default"])(i.parentNode),
                        t.player_.tech_.on("hls-reset", t.onHlsReset_),
                        t.player_.tech_.on("hls-segment-time-mapping", t.onHlsSegmentTimeMapping_),
                        t.player_.audioTracks && t.player_.audioTracks() && (t.player_.audioTracks().on("change", t.updateActiveSourceBuffers_),
                        t.player_.audioTracks().on("addtrack", t.updateActiveSourceBuffers_),
                        t.player_.audioTracks().on("removetrack", t.updateActiveSourceBuffers_)),
                        t.player_.on("mediachange", t.onPlayerMediachange_))
                    }),
                    this.on("sourceended", function(e) {
                        for (var i = (0,
                        y.durationOfVideo)(t.duration), n = 0; n < t.sourceBuffers.length; n++) {
                            var r = t.sourceBuffers[n]
                              , a = r.metadataTrack_ && r.metadataTrack_.cues;
                            a && a.length && (a[a.length - 1].endTime = i)
                        }
                    }),
                    this.on("sourceclose", function(t) {
                        this.sourceBuffers.forEach(function(t) {
                            t.transmuxer_ && t.transmuxer_.terminate()
                        }),
                        this.sourceBuffers.length = 0,
                        this.player_ && (this.player_.audioTracks && this.player_.audioTracks() && (this.player_.audioTracks().off("change", this.updateActiveSourceBuffers_),
                        this.player_.audioTracks().off("addtrack", this.updateActiveSourceBuffers_),
                        this.player_.audioTracks().off("removetrack", this.updateActiveSourceBuffers_)),
                        this.player_.el_ && (this.player_.off("mediachange", this.onPlayerMediachange_),
                        this.player_.tech_.off("hls-reset", this.onHlsReset_),
                        this.player_.tech_.off("hls-segment-time-mapping", this.onHlsSegmentTimeMapping_)))
                    })
                }
                return o(e, t),
                s(e, [{
                    key: "addSeekableRange_",
                    value: function(t, e) {
                        var i = void 0;
                        if (this.duration !== 1 / 0)
                            throw i = new Error("MediaSource.addSeekableRange() can only be invoked when the duration is Infinity"),
                            i.name = "InvalidStateError",
                            i.code = 11,
                            i;
                        (e > this.nativeMediaSource_.duration || isNaN(this.nativeMediaSource_.duration)) && (this.nativeMediaSource_.duration = e)
                    }
                }, {
                    key: "addSourceBuffer",
                    value: function(t) {
                        var e = void 0
                          , i = (0,
                        v.parseContentType)(t);
                        if (/^(video|audio)\/mp2t$/i.test(i.type)) {
                            var n = [];
                            i.parameters && i.parameters.codecs && (n = i.parameters.codecs.split(","),
                            n = (0,
                            v.translateLegacyCodecs)(n),
                            n = n.filter(function(t) {
                                return (0,
                                v.isAudioCodec)(t) || (0,
                                v.isVideoCodec)(t)
                            })),
                            0 === n.length && (n = ["avc1.4d400d", "mp4a.40.2"]),
                            e = new m["default"](this,n),
                            0 !== this.sourceBuffers.length && (this.sourceBuffers[0].createRealSourceBuffers_(),
                            e.createRealSourceBuffers_(),
                            this.sourceBuffers[0].audioDisabled_ = !0)
                        } else
                            e = this.nativeMediaSource_.addSourceBuffer(t);
                        return this.sourceBuffers.push(e),
                        e
                    }
                }]),
                e
            }(p["default"].EventTarget);
            i["default"] = _,
            e.exports = i["default"]
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    72: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = function(t, e, i) {
            var n = void 0
              , r = void 0;
            if (i && i.cues)
                for (n = i.cues.length; n--; )
                    r = i.cues[n],
                    r.startTime <= e && r.endTime >= t && i.removeCue(r)
        };
        i["default"] = n,
        e.exports = i["default"]
    }
    , {}],
    73: [function(t, e, i) {
        "use strict";
        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        function r(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i),
                n && t(e, n),
                e
            }
        }()
          , o = t(32)
          , s = n(o)
          , u = t(55)
          , l = n(u)
          , c = function(t) {
            t.on("data", function(t) {
                var e = t.initSegment;
                t.initSegment = {
                    data: e.buffer,
                    byteOffset: e.byteOffset,
                    byteLength: e.byteLength
                };
                var i = t.data;
                t.data = i.buffer,
                s["default"].postMessage({
                    action: "data",
                    segment: t,
                    byteOffset: i.byteOffset,
                    byteLength: i.byteLength
                }, [t.data])
            }),
            t.captionStream && t.captionStream.on("data", function(t) {
                s["default"].postMessage({
                    action: "caption",
                    data: t
                })
            }),
            t.on("done", function(t) {
                s["default"].postMessage({
                    action: "done"
                })
            }),
            t.on("gopInfo", function(t) {
                s["default"].postMessage({
                    action: "gopInfo",
                    gopInfo: t
                })
            })
        }
          , d = function() {
            function t(e) {
                r(this, t),
                this.options = e || {},
                this.init()
            }
            return a(t, [{
                key: "init",
                value: function() {
                    this.transmuxer && this.transmuxer.dispose(),
                    this.transmuxer = new l["default"].Transmuxer(this.options),
                    c(this.transmuxer)
                }
            }, {
                key: "push",
                value: function(t) {
                    var e = new Uint8Array(t.data,t.byteOffset,t.byteLength);
                    this.transmuxer.push(e)
                }
            }, {
                key: "reset",
                value: function() {
                    this.init()
                }
            }, {
                key: "setTimestampOffset",
                value: function(t) {
                    var e = t.timestampOffset || 0;
                    this.transmuxer.setBaseMediaDecodeTime(Math.round(9e4 * e))
                }
            }, {
                key: "setAudioAppendStart",
                value: function(t) {
                    this.transmuxer.setAudioAppendStart(Math.ceil(9e4 * t.appendStart))
                }
            }, {
                key: "flush",
                value: function(t) {
                    this.transmuxer.flush()
                }
            }, {
                key: "resetCaptions",
                value: function() {
                    this.transmuxer.resetCaptions()
                }
            }, {
                key: "alignGopsWith",
                value: function(t) {
                    this.transmuxer.alignGopsWith(t.gopsToAlignWith.slice())
                }
            }]),
            t
        }()
          , h = function(t) {
            t.onmessage = function(t) {
                return "init" === t.data.action && t.data.options ? void (this.messageHandlers = new d(t.data.options)) : (this.messageHandlers || (this.messageHandlers = new d),
                void (t.data && t.data.action && "init" !== t.data.action && this.messageHandlers[t.data.action] && this.messageHandlers[t.data.action](t.data)))
            }
        };
        i["default"] = function(t) {
            return new h(t)
        }
        ,
        e.exports = i["default"]
    }
    , {}],
    74: [function(t, e, i) {
        (function(e) {
            "use strict";
            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var r = t(32)
              , a = n(r)
              , o = t(68)
              , s = n(o)
              , u = t(71)
              , l = n(u)
              , c = "undefined" != typeof window ? window.videojs : void 0 !== e ? e.videojs : null
              , d = n(c)
              , h = 0
              , f = {
                mode: "auto"
            };
            d["default"].mediaSources = {};
            var p = function(t, e) {
                var i = d["default"].mediaSources[t];
                if (!i)
                    throw new Error("Media Source not found (Video.js)");
                i.trigger({
                    type: "sourceopen",
                    swfId: e
                })
            }
              , g = function() {
                return !!a["default"].MediaSource && !!a["default"].MediaSource.isTypeSupported && a["default"].MediaSource.isTypeSupported('video/mp4;codecs="avc1.4d400d,mp4a.40.2"')
            }
              , m = function(t) {
                var e = d["default"].mergeOptions(f, t);
                if (this.MediaSource = {
                    open: p,
                    supportsNativeMediaSources: g
                },
                "html5" === e.mode || "auto" === e.mode && g())
                    return new l["default"];
                if (d["default"].getTech("Flash"))
                    return new s["default"];
                throw new Error("Cannot use Flash or Html5 to create a MediaSource for this video")
            };
            i.MediaSource = m,
            m.open = p,
            m.supportsNativeMediaSources = g;
            var y = {
                createObjectURL: function(t) {
                    var e = void 0;
                    return t instanceof l["default"] ? (e = a["default"].URL.createObjectURL(t.nativeMediaSource_),
                    t.url_ = e,
                    e) : t instanceof s["default"] ? (e = "blob:vjs-media-source/" + h,
                    h++,
                    d["default"].mediaSources[e] = t,
                    e) : (e = a["default"].URL.createObjectURL(t),
                    t.url_ = e,
                    e)
                }
            };
            i.URL = y,
            d["default"].MediaSource = m,
            d["default"].URL = y
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    75: [function(t, e, i) {
        (function(e) {
            "use strict";
            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            function r(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            function a(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var o = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value"in n && (n.writable = !0),
                        Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i),
                    n && t(e, n),
                    e
                }
            }()
              , s = function(t, e, i) {
                for (var n = !0; n; ) {
                    var r = t
                      , a = e
                      , o = i;
                    n = !1,
                    null === r && (r = Function.prototype);
                    var s = Object.getOwnPropertyDescriptor(r, a);
                    if (void 0 !== s) {
                        if ("value"in s)
                            return s.value;
                        var u = s.get;
                        return void 0 === u ? void 0 : u.call(o)
                    }
                    var l = Object.getPrototypeOf(r);
                    if (null === l)
                        return;
                    t = l,
                    e = a,
                    i = o,
                    n = !0,
                    s = l = void 0
                }
            }
              , u = "undefined" != typeof window ? window.videojs : void 0 !== e ? e.videojs : null
              , l = n(u)
              , c = t(66)
              , d = n(c)
              , h = t(72)
              , f = n(h)
              , p = t(64)
              , g = t(76)
              , m = n(g)
              , y = t(73)
              , v = n(y)
              , _ = t(65)
              , b = function(t, e) {
                var i = t.addSourceBuffer(e)
                  , n = Object.create(null);
                n.updating = !1,
                n.realBuffer_ = i;
                for (var r in i)
                    !function(t) {
                        "function" == typeof i[t] ? n[t] = function() {
                            return i[t].apply(i, arguments)
                        }
                        : "undefined" == typeof n[t] && Object.defineProperty(n, t, {
                            get: function() {
                                return i[t]
                            },
                            set: function(e) {
                                return i[t] = e
                            }
                        })
                    }(r);
                return n
            }
              , x = function(t, e, i) {
                if (!e || !t.length)
                    return [];
                var n = Math.ceil(9e4 * (e.currentTime() - i + 3))
                  , r = void 0;
                for (r = 0; r < t.length && !(t[r].pts > n); r++)
                    ;
                return t.slice(r)
            };
            i.gopsSafeToAlignWith = x;
            var T = function(t, e, i) {
                if (!e.length)
                    return t;
                if (i)
                    return e.slice();
                var n = e[0].pts
                  , r = 0;
                for (r; r < t.length && !(t[r].pts >= n); r++)
                    ;
                return t.slice(0, r).concat(e)
            };
            i.updateGopBuffer = T;
            var w = function(t, e, i, n) {
                for (var r = Math.ceil(9e4 * (e - n)), a = Math.ceil(9e4 * (i - n)), o = t.slice(), s = t.length; s-- && !(t[s].pts <= a); )
                    ;
                if (-1 === s)
                    return o;
                for (var u = s + 1; u-- && !(t[u].pts <= r); )
                    ;
                return u = Math.max(u, 0),
                o.splice(u, s - u + 1),
                o
            };
            i.removeGopBuffer = w;
            var S = function(t) {
                function e(t, i) {
                    var n = this;
                    r(this, e),
                    s(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, l["default"].EventTarget),
                    this.timestampOffset_ = 0,
                    this.pendingBuffers_ = [],
                    this.bufferUpdating_ = !1,
                    this.mediaSource_ = t,
                    this.codecs_ = i,
                    this.audioCodec_ = null,
                    this.videoCodec_ = null,
                    this.audioDisabled_ = !1,
                    this.appendAudioInitSegment_ = !0,
                    this.gopBuffer_ = [],
                    this.timeMapping_ = 0,
                    this.safeAppend_ = l["default"].browser.IE_VERSION >= 11;
                    var a = {
                        remux: !1,
                        alignGopsAtEnd: this.safeAppend_
                    };
                    this.codecs_.forEach(function(t) {
                        (0,
                        _.isAudioCodec)(t) ? n.audioCodec_ = t : (0,
                        _.isVideoCodec)(t) && (n.videoCodec_ = t)
                    }),
                    this.transmuxer_ = (0,
                    m["default"])(v["default"]),
                    this.transmuxer_.postMessage({
                        action: "init",
                        options: a
                    }),
                    this.transmuxer_.onmessage = function(t) {
                        return "data" === t.data.action ? n.data_(t) : "done" === t.data.action ? n.done_(t) : "gopInfo" === t.data.action ? n.appendGopInfo_(t) : void 0
                    }
                    ,
                    Object.defineProperty(this, "timestampOffset", {
                        get: function() {
                            return this.timestampOffset_
                        },
                        set: function(t) {
                            "number" == typeof t && t >= 0 && (this.timestampOffset_ = t,
                            this.appendAudioInitSegment_ = !0,
                            this.gopBuffer_.length = 0,
                            this.timeMapping_ = 0,
                            this.transmuxer_.postMessage({
                                action: "setTimestampOffset",
                                timestampOffset: t
                            }))
                        }
                    }),
                    Object.defineProperty(this, "appendWindowStart", {
                        get: function() {
                            return (this.videoBuffer_ || this.audioBuffer_).appendWindowStart
                        },
                        set: function(t) {
                            this.videoBuffer_ && (this.videoBuffer_.appendWindowStart = t),
                            this.audioBuffer_ && (this.audioBuffer_.appendWindowStart = t)
                        }
                    }),
                    Object.defineProperty(this, "updating", {
                        get: function() {
                            return !!(this.bufferUpdating_ || !this.audioDisabled_ && this.audioBuffer_ && this.audioBuffer_.updating || this.videoBuffer_ && this.videoBuffer_.updating)
                        }
                    }),
                    Object.defineProperty(this, "buffered", {
                        get: function() {
                            var t = null
                              , e = null
                              , i = 0
                              , n = []
                              , r = [];
                            if (!this.videoBuffer_ && !this.audioBuffer_)
                                return l["default"].createTimeRange();
                            if (!this.videoBuffer_)
                                return this.audioBuffer_.buffered;
                            if (!this.audioBuffer_)
                                return this.videoBuffer_.buffered;
                            if (this.audioDisabled_)
                                return this.videoBuffer_.buffered;
                            if (0 === this.videoBuffer_.buffered.length && 0 === this.audioBuffer_.buffered.length)
                                return l["default"].createTimeRange();
                            for (var a = this.videoBuffer_.buffered, o = this.audioBuffer_.buffered, s = a.length; s--; )
                                n.push({
                                    time: a.start(s),
                                    type: "start"
                                }),
                                n.push({
                                    time: a.end(s),
                                    type: "end"
                                });
                            for (s = o.length; s--; )
                                n.push({
                                    time: o.start(s),
                                    type: "start"
                                }),
                                n.push({
                                    time: o.end(s),
                                    type: "end"
                                });
                            for (n.sort(function(t, e) {
                                return t.time - e.time
                            }),
                            s = 0; s < n.length; s++)
                                "start" === n[s].type ? 2 === ++i && (t = n[s].time) : "end" === n[s].type && 1 === --i && (e = n[s].time),
                                null !== t && null !== e && (r.push([t, e]),
                                t = null,
                                e = null);
                            return l["default"].createTimeRanges(r)
                        }
                    })
                }
                return a(e, t),
                o(e, [{
                    key: "data_",
                    value: function(t) {
                        var e = t.data.segment;
                        e.data = new Uint8Array(e.data,t.data.byteOffset,t.data.byteLength),
                        e.initSegment = new Uint8Array(e.initSegment.data,e.initSegment.byteOffset,e.initSegment.byteLength),
                        (0,
                        d["default"])(this, this.mediaSource_, e),
                        this.pendingBuffers_.push(e)
                    }
                }, {
                    key: "done_",
                    value: function(t) {
                        return "closed" === this.mediaSource_.readyState ? void (this.pendingBuffers_.length = 0) : void this.processPendingSegments_()
                    }
                }, {
                    key: "createRealSourceBuffers_",
                    value: function() {
                        var t = this
                          , e = ["audio", "video"];
                        e.forEach(function(i) {
                            if (t[i + "Codec_"] && !t[i + "Buffer_"]) {
                                var n = null;
                                if (t.mediaSource_[i + "Buffer_"])
                                    n = t.mediaSource_[i + "Buffer_"],
                                    n.updating = !1;
                                else {
                                    var r = i + "Codec_"
                                      , a = i + '/mp4;codecs="' + t[r] + '"';
                                    n = b(t.mediaSource_.nativeMediaSource_, a),
                                    t.mediaSource_[i + "Buffer_"] = n
                                }
                                t[i + "Buffer_"] = n,
                                ["update", "updatestart", "updateend"].forEach(function(r) {
                                    n.addEventListener(r, function() {
                                        if ("audio" !== i || !t.audioDisabled_)
                                            return "updateend" === r && (t[i + "Buffer_"].updating = !1),
                                            e.every(function(e) {
                                                return !("audio" !== e || !t.audioDisabled_) || i === e || !t[e + "Buffer_"] || !t[e + "Buffer_"].updating
                                            }) ? t.trigger(r) : void 0
                                    })
                                })
                            }
                        })
                    }
                }, {
                    key: "appendBuffer",
                    value: function(t) {
                        if (this.bufferUpdating_ = !0,
                        this.audioBuffer_ && this.audioBuffer_.buffered.length) {
                            var e = this.audioBuffer_.buffered;
                            this.transmuxer_.postMessage({
                                action: "setAudioAppendStart",
                                appendStart: e.end(e.length - 1)
                            })
                        }
                        this.videoBuffer_ && this.transmuxer_.postMessage({
                            action: "alignGopsWith",
                            gopsToAlignWith: x(this.gopBuffer_, this.mediaSource_.player_, this.timeMapping_)
                        }),
                        this.transmuxer_.postMessage({
                            action: "push",
                            data: t.buffer,
                            byteOffset: t.byteOffset,
                            byteLength: t.byteLength
                        }, [t.buffer]),
                        this.transmuxer_.postMessage({
                            action: "flush"
                        })
                    }
                }, {
                    key: "appendGopInfo_",
                    value: function(t) {
                        this.gopBuffer_ = T(this.gopBuffer_, t.data.gopInfo, this.safeAppend_)
                    }
                }, {
                    key: "remove",
                    value: function(t, e) {
                        if (this.videoBuffer_ && (this.videoBuffer_.updating = !0,
                        this.videoBuffer_.remove(t, e),
                        this.gopBuffer_ = w(this.gopBuffer_, t, e, this.timeMapping_)),
                        !this.audioDisabled_ && this.audioBuffer_ && (this.audioBuffer_.updating = !0,
                        this.audioBuffer_.remove(t, e)),
                        (0,
                        f["default"])(t, e, this.metadataTrack_),
                        this.inbandTextTracks_)
                            for (var i in this.inbandTextTracks_)
                                (0,
                                f["default"])(t, e, this.inbandTextTracks_[i])
                    }
                }, {
                    key: "processPendingSegments_",
                    value: function() {
                        var t = {
                            video: {
                                segments: [],
                                bytes: 0
                            },
                            audio: {
                                segments: [],
                                bytes: 0
                            },
                            captions: [],
                            metadata: []
                        };
                        t = this.pendingBuffers_.reduce(function(t, e) {
                            var i = e.type
                              , n = e.data
                              , r = e.initSegment;
                            return t[i].segments.push(n),
                            t[i].bytes += n.byteLength,
                            t[i].initSegment = r,
                            e.captions && (t.captions = t.captions.concat(e.captions)),
                            e.info && (t[i].info = e.info),
                            e.metadata && (t.metadata = t.metadata.concat(e.metadata)),
                            t
                        }, t),
                        this.videoBuffer_ || this.audioBuffer_ || (0 === t.video.bytes && (this.videoCodec_ = null),
                        0 === t.audio.bytes && (this.audioCodec_ = null),
                        this.createRealSourceBuffers_()),
                        t.audio.info && this.mediaSource_.trigger({
                            type: "audioinfo",
                            info: t.audio.info
                        }),
                        t.video.info && this.mediaSource_.trigger({
                            type: "videoinfo",
                            info: t.video.info
                        }),
                        this.appendAudioInitSegment_ && (!this.audioDisabled_ && this.audioBuffer_ && (t.audio.segments.unshift(t.audio.initSegment),
                        t.audio.bytes += t.audio.initSegment.byteLength),
                        this.appendAudioInitSegment_ = !1);
                        var e = !1;
                        this.videoBuffer_ && t.video.bytes ? (t.video.segments.unshift(t.video.initSegment),
                        t.video.bytes += t.video.initSegment.byteLength,
                        this.concatAndAppendSegments_(t.video, this.videoBuffer_),
                        (0,
                        p.addTextTrackData)(this, t.captions, t.metadata)) : !this.videoBuffer_ || !this.audioDisabled_ && this.audioBuffer_ || (e = !0),
                        !this.audioDisabled_ && this.audioBuffer_ && this.concatAndAppendSegments_(t.audio, this.audioBuffer_),
                        this.pendingBuffers_.length = 0,
                        e && this.trigger("updateend"),
                        this.bufferUpdating_ = !1
                    }
                }, {
                    key: "concatAndAppendSegments_",
                    value: function(t, e) {
                        var i = 0
                          , n = void 0;
                        if (t.bytes) {
                            n = new Uint8Array(t.bytes),
                            t.segments.forEach(function(t) {
                                n.set(t, i),
                                i += t.byteLength
                            });
                            try {
                                e.updating = !0,
                                e.appendBuffer(n)
                            } catch (r) {
                                this.mediaSource_.player_ && this.mediaSource_.player_.error({
                                    code: -3,
                                    type: "APPEND_BUFFER_ERR",
                                    message: r.message,
                                    originalError: r
                                })
                            }
                        }
                    }
                }, {
                    key: "abort",
                    value: function() {
                        this.videoBuffer_ && this.videoBuffer_.abort(),
                        !this.audioDisabled_ && this.audioBuffer_ && this.audioBuffer_.abort(),
                        this.transmuxer_ && this.transmuxer_.postMessage({
                            action: "reset"
                        }),
                        this.pendingBuffers_.length = 0,
                        this.bufferUpdating_ = !1
                    }
                }]),
                e
            }(l["default"].EventTarget);
            i["default"] = S
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    76: [function(t, e, i) {
        var n = arguments[3]
          , r = arguments[4]
          , a = arguments[5]
          , o = JSON.stringify;
        e.exports = function(t) {
            for (var e, i = Object.keys(a), s = 0, u = i.length; s < u; s++) {
                var l = i[s];
                if (a[l].exports === t) {
                    e = l;
                    break
                }
            }
            if (!e) {
                e = Math.floor(Math.pow(16, 8) * Math.random()).toString(16);
                for (var c = {}, s = 0, u = i.length; s < u; s++) {
                    var l = i[s];
                    c[l] = l
                }
                r[e] = [Function(["require", "module", "exports"], "(" + t + ")(self)"), c]
            }
            var d = Math.floor(Math.pow(16, 8) * Math.random()).toString(16)
              , h = {};
            h[e] = e,
            r[d] = [Function(["require"], "require(" + o(e) + ")(self)"), h];
            var f = "(" + n + ")({" + Object.keys(r).map(function(t) {
                return o(t) + ":[" + r[t][0] + "," + o(r[t][1]) + "]"
            }).join(",") + "},{},[" + o(d) + "])"
              , p = window.URL || window.webkitURL || window.mozURL || window.msURL;
            return new Worker(p.createObjectURL(new Blob([f],{
                type: "text/javascript"
            })))
        }
    }
    , {}],
    77: [function(t, e, i) {
        (function(i) {
            "use strict";
            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            function r(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            function a(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            var o = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value"in n && (n.writable = !0),
                        Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i),
                    n && t(e, n),
                    e
                }
            }()
              , s = function(t, e, i) {
                for (var n = !0; n; ) {
                    var r = t
                      , a = e
                      , o = i;
                    n = !1,
                    null === r && (r = Function.prototype);
                    var s = Object.getOwnPropertyDescriptor(r, a);
                    if (void 0 !== s) {
                        if ("value"in s)
                            return s.value;
                        var u = s.get;
                        return void 0 === u ? void 0 : u.call(o)
                    }
                    var l = Object.getPrototypeOf(r);
                    if (null === l)
                        return;
                    t = l,
                    e = a,
                    i = o,
                    n = !0,
                    s = l = void 0
                }
            }
              , u = t(31)
              , l = n(u)
              , c = t(9)
              , d = n(c)
              , h = t(11)
              , f = n(h)
              , p = t(21)
              , g = n(p)
              , m = t(25)
              , y = t(2)
              , v = n(y)
              , _ = t(74)
              , b = t(33)
              , x = n(b)
              , T = "undefined" != typeof window ? window.videojs : void 0 !== i ? i.videojs : null
              , w = n(T)
              , S = t(5)
              , k = t(3)
              , C = n(k)
              , E = t(14)
              , A = n(E)
              , O = t(32)
              , P = n(O)
              , I = t(8)
              , L = n(I)
              , j = t(13)
              , M = n(j)
              , D = t(10)
              , R = {
                PlaylistLoader: d["default"],
                Playlist: f["default"],
                Decrypter: m.Decrypter,
                AsyncStream: m.AsyncStream,
                decrypt: m.decrypt,
                utils: v["default"],
                STANDARD_PLAYLIST_SELECTOR: D.lastBandwidthSelector,
                INITIAL_PLAYLIST_SELECTOR: D.lowestBitrateCompatibleVariantSelector,
                comparePlaylistBandwidth: D.comparePlaylistBandwidth,
                comparePlaylistResolution: D.comparePlaylistResolution,
                xhr: (0,
                g["default"])()
            };
            ["GOAL_BUFFER_LENGTH", "MAX_GOAL_BUFFER_LENGTH", "GOAL_BUFFER_LENGTH_RATE", "BUFFER_LOW_WATER_LINE", "MAX_BUFFER_LOW_WATER_LINE", "BUFFER_LOW_WATER_LINE_RATE", "BANDWIDTH_VARIANCE"].forEach(function(t) {
                Object.defineProperty(R, t, {
                    get: function() {
                        return w["default"].log.warn("using Hls." + t + " is UNSAFE be sure you know what you are doing"),
                        C["default"][t]
                    },
                    set: function(e) {
                        return w["default"].log.warn("using Hls." + t + " is UNSAFE be sure you know what you are doing"),
                        "number" != typeof e || e < 0 ? void w["default"].log.warn("value of Hls." + t + " must be greater than or equal to 0") : void (C["default"][t] = e)
                    }
                })
            });
            var B = function(t, e) {
                for (var i = e.media(), n = -1, r = 0; r < t.length; r++)
                    if (t[r].id === i.uri) {
                        n = r;
                        break
                    }
                t.selectedIndex_ = n,
                t.trigger({
                    selectedIndex: n,
                    type: "change"
                })
            }
              , U = function(t, e) {
                e.representations().forEach(function(e) {
                    t.addQualityLevel(e)
                }),
                B(t, e.playlists)
            };
            R.canPlaySource = function() {
                return w["default"].log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")
            }
            ,
            R.supportsNativeHls = function() {
                var t = l["default"].createElement("video");
                return !!w["default"].getTech("Html5").isSupported() && ["application/vnd.apple.mpegurl", "audio/mpegurl", "audio/x-mpegurl", "application/x-mpegurl", "video/x-mpegurl", "video/mpegurl", "application/mpegurl"].some(function(e) {
                    return /maybe|probably/i.test(t.canPlayType(e))
                })
            }(),
            R.isSupported = function() {
                return w["default"].log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")
            }
            ;
            var N = w["default"].getComponent("Component")
              , F = function(t) {
                function e(t, i, n) {
                    var a = this;
                    if (r(this, e),
                    s(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, i, n.hls),
                    i.options_ && i.options_.playerId) {
                        var o = (0,
                        w["default"])(i.options_.playerId);
                        o.hasOwnProperty("hls") || Object.defineProperty(o, "hls", {
                            get: function() {
                                return w["default"].log.warn("player.hls is deprecated. Use player.tech_.hls instead."),
                                i.trigger({
                                    type: "usage",
                                    name: "hls-player-access"
                                }),
                                a
                            }
                        })
                    }
                    if (this.tech_ = i,
                    this.source_ = t,
                    this.stats = {},
                    this.ignoreNextSeekingEvent_ = !1,
                    this.setOptions_(),
                    this.options_.overrideNative && (i.featuresNativeVideoTracks || i.featuresNativeAudioTracks))
                        throw new Error("Overriding native HLS requires emulated tracks. See https://git.io/vMpjB");
                    this.on(l["default"], ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"], function(t) {
                        var e = l["default"].fullscreenElement || l["default"].webkitFullscreenElement || l["default"].mozFullScreenElement || l["default"].msFullscreenElement;
                        e && e.contains(a.tech_.el()) && a.masterPlaylistController_.fastQualityChange_()
                    }),
                    this.on(this.tech_, "seeking", function() {
                        return this.ignoreNextSeekingEvent_ ? void (this.ignoreNextSeekingEvent_ = !1) : void this.setCurrentTime(this.tech_.currentTime())
                    }),
                    this.on(this.tech_, "error", function() {
                        this.masterPlaylistController_ && this.masterPlaylistController_.pauseLoading()
                    }),
                    this.on(this.tech_, "play", this.play)
                }
                return a(e, t),
                o(e, [{
                    key: "setOptions_",
                    value: function() {
                        var t = this;
                        this.options_.withCredentials = this.options_.withCredentials || !1,
                        "number" != typeof this.options_.blacklistDuration && (this.options_.blacklistDuration = 300),
                        "number" != typeof this.options_.bandwidth && (this.options_.bandwidth = 4194304),
                        this.options_.enableLowInitialPlaylist = this.options_.enableLowInitialPlaylist && 4194304 === this.options_.bandwidth,
                        ["withCredentials", "bandwidth"].forEach(function(e) {
                            "undefined" != typeof t.source_[e] && (t.options_[e] = t.source_[e])
                        }),
                        this.bandwidth = this.options_.bandwidth
                    }
                }, {
                    key: "src",
                    value: function(t) {
                        var e = this;
                        t && (this.setOptions_(),
                        this.options_.url = this.source_.src,
                        this.options_.tech = this.tech_,
                        this.options_.externHls = R,
                        this.masterPlaylistController_ = new S.MasterPlaylistController(this.options_),
                        this.playbackWatcher_ = new L["default"](w["default"].mergeOptions(this.options_, {
                            seekable: function() {
                                return e.seekable()
                            }
                        })),
                        this.masterPlaylistController_.on("error", function() {
                            w["default"].players[e.tech_.options_.playerId].error(e.masterPlaylistController_.error)
                        }),
                        this.masterPlaylistController_.selectPlaylist = this.selectPlaylist ? this.selectPlaylist.bind(this) : R.STANDARD_PLAYLIST_SELECTOR.bind(this),
                        this.masterPlaylistController_.selectInitialPlaylist = R.INITIAL_PLAYLIST_SELECTOR.bind(this),
                        this.playlists = this.masterPlaylistController_.masterPlaylistLoader_,
                        this.mediaSource = this.masterPlaylistController_.mediaSource,
                        Object.defineProperties(this, {
                            selectPlaylist: {
                                get: function() {
                                    return this.masterPlaylistController_.selectPlaylist
                                },
                                set: function(t) {
                                    this.masterPlaylistController_.selectPlaylist = t.bind(this)
                                }
                            },
                            throughput: {
                                get: function() {
                                    return this.masterPlaylistController_.mainSegmentLoader_.throughput.rate
                                },
                                set: function(t) {
                                    this.masterPlaylistController_.mainSegmentLoader_.throughput.rate = t,
                                    this.masterPlaylistController_.mainSegmentLoader_.throughput.count = 1
                                }
                            },
                            bandwidth: {
                                get: function() {
                                    return this.masterPlaylistController_.mainSegmentLoader_.bandwidth
                                },
                                set: function(t) {
                                    this.masterPlaylistController_.mainSegmentLoader_.bandwidth = t,
                                    this.masterPlaylistController_.mainSegmentLoader_.throughput = {
                                        rate: 0,
                                        count: 0
                                    }
                                }
                            },
                            systemBandwidth: {
                                get: function() {
                                    var t = 1 / (this.bandwidth || 1)
                                      , e = void 0;
                                    return e = this.throughput > 0 ? 1 / this.throughput : 0,
                                    Math.floor(1 / (t + e))
                                },
                                set: function() {
                                    w["default"].log.error('The "systemBandwidth" property is read-only')
                                }
                            }
                        }),
                        Object.defineProperties(this.stats, {
                            bandwidth: {
                                get: function() {
                                    return e.bandwidth || 0
                                },
                                enumerable: !0
                            },
                            mediaRequests: {
                                get: function() {
                                    return e.masterPlaylistController_.mediaRequests_() || 0
                                },
                                enumerable: !0
                            },
                            mediaRequestsAborted: {
                                get: function() {
                                    return e.masterPlaylistController_.mediaRequestsAborted_() || 0
                                },
                                enumerable: !0
                            },
                            mediaRequestsTimedout: {
                                get: function() {
                                    return e.masterPlaylistController_.mediaRequestsTimedout_() || 0
                                },
                                enumerable: !0
                            },
                            mediaRequestsErrored: {
                                get: function() {
                                    return e.masterPlaylistController_.mediaRequestsErrored_() || 0
                                },
                                enumerable: !0
                            },
                            mediaTransferDuration: {
                                get: function() {
                                    return e.masterPlaylistController_.mediaTransferDuration_() || 0
                                },
                                enumerable: !0
                            },
                            mediaBytesTransferred: {
                                get: function() {
                                    return e.masterPlaylistController_.mediaBytesTransferred_() || 0
                                },
                                enumerable: !0
                            },
                            mediaSecondsLoaded: {
                                get: function() {
                                    return e.masterPlaylistController_.mediaSecondsLoaded_() || 0
                                },
                                enumerable: !0
                            }
                        }),
                        this.tech_.one("canplay", this.masterPlaylistController_.setupFirstPlay.bind(this.masterPlaylistController_)),
                        this.masterPlaylistController_.on("selectedinitialmedia", function() {
                            (0,
                            A["default"])(e)
                        }),
                        this.on(this.masterPlaylistController_, "progress", function() {
                            this.tech_.trigger("progress")
                        }),
                        this.on(this.masterPlaylistController_, "firstplay", function() {
                            this.ignoreNextSeekingEvent_ = !0
                        }),
                        this.tech_.ready(function() {
                            return e.setupQualityLevels_()
                        }),
                        this.tech_.el() && this.tech_.src(w["default"].URL.createObjectURL(this.masterPlaylistController_.mediaSource)))
                    }
                }, {
                    key: "setupQualityLevels_",
                    value: function() {
                        var t = this
                          , e = w["default"].players[this.tech_.options_.playerId];
                        e && e.qualityLevels && (this.qualityLevels_ = e.qualityLevels(),
                        this.masterPlaylistController_.on("selectedinitialmedia", function() {
                            U(t.qualityLevels_, t)
                        }),
                        this.playlists.on("mediachange", function() {
                            B(t.qualityLevels_, t.playlists)
                        }))
                    }
                }, {
                    key: "play",
                    value: function() {
                        this.masterPlaylistController_.play()
                    }
                }, {
                    key: "setCurrentTime",
                    value: function(t) {
                        this.masterPlaylistController_.setCurrentTime(t)
                    }
                }, {
                    key: "duration",
                    value: function() {
                        return this.masterPlaylistController_.duration()
                    }
                }, {
                    key: "seekable",
                    value: function() {
                        return this.masterPlaylistController_.seekable()
                    }
                }, {
                    key: "dispose",
                    value: function() {
                        this.playbackWatcher_ && this.playbackWatcher_.dispose(),
                        this.masterPlaylistController_ && this.masterPlaylistController_.dispose(),
                        this.qualityLevels_ && this.qualityLevels_.dispose(),
                        s(Object.getPrototypeOf(e.prototype), "dispose", this).call(this)
                    }
                }]),
                e
            }(N)
              , H = function G(t) {
                return {
                    canHandleSource: function(e) {
                        var i = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1]
                          , n = w["default"].mergeOptions(w["default"].options, i);
                        return (!n.hls || !n.hls.mode || n.hls.mode === t) && G.canPlayType(e.type, n)
                    },
                    handleSource: function(e, i) {
                        var n = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2]
                          , r = w["default"].mergeOptions(w["default"].options, n, {
                            hls: {
                                mode: t
                            }
                        });
                        return "flash" === t && i.setTimeout(function() {
                            i.trigger("loadstart")
                        }, 1),
                        i.hls = new F(e,i,r),
                        i.hls.xhr = (0,
                        g["default"])(),
                        i.hls.src(e.src),
                        i.hls
                    },
                    canPlayType: function(t) {
                        var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1]
                          , i = w["default"].mergeOptions(w["default"].options, e);
                        return G.canPlayType(t, i) ? "maybe" : ""
                    }
                }
            };
            H.canPlayType = function(t, e) {
                if (w["default"].browser.IE_VERSION && w["default"].browser.IE_VERSION <= 10)
                    return !1;
                var i = /^(audio|video|application)\/(x-|vnd\.apple\.)?mpegurl/i;
                return !(!e.hls.overrideNative && R.supportsNativeHls) && i.test(t)
            }
            ,
            "undefined" != typeof w["default"].MediaSource && "undefined" != typeof w["default"].URL || (w["default"].MediaSource = _.MediaSource,
            w["default"].URL = _.URL);
            var V = w["default"].getTech("Flash");
            _.MediaSource.supportsNativeMediaSources() && w["default"].getTech("Html5").registerSourceHandler(H("html5"), 0),
            P["default"].Uint8Array && V && V.registerSourceHandler(H("flash")),
            w["default"].HlsHandler = F,
            w["default"].HlsSourceHandler = H,
            w["default"].Hls = R,
            w["default"].use || w["default"].registerComponent("Hls", R),
            w["default"].m3u8 = x["default"],
            w["default"].options.hls = w["default"].options.hls || {},
            w["default"].registerPlugin ? w["default"].registerPlugin("reloadSourceOnError", M["default"]) : w["default"].plugin("reloadSourceOnError", M["default"]),
            e.exports = {
                Hls: R,
                HlsHandler: F,
                HlsSourceHandler: H
            }
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}]
}, {}, [77]),
!function e(t, i, n) {
    function r(o, s) {
        if (!i[o]) {
            if (!t[o]) {
                var u = "function" == typeof require && require;
                if (!s && u)
                    return u(o, !0);
                if (a)
                    return a(o, !0);
                var l = new Error("Cannot find module '" + o + "'");
                throw l.code = "MODULE_NOT_FOUND",
                l
            }
            var c = i[o] = {
                exports: {}
            };
            t[o][0].call(c.exports, function(e) {
                var i = t[o][1][e];
                return r(i ? i : e)
            }, c, c.exports, e, t, i, n)
        }
        return i[o].exports
    }
    for (var a = "function" == typeof require && require, o = 0; o < n.length; o++)
        r(n[o]);
    return r
}({
    1: [function(t, e, i) {
        (function(e) {
            "use strict";
            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            function r(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            function a(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }
            function o(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            i.__esModule = !0;
            var s = "undefined" != typeof window ? window.videojs : "undefined" != typeof e ? e.videojs : null
              , u = n(s)
              , l = t(4)
              , c = n(l)
              , d = t(2)
              , h = n(d)
              , f = function(t) {
                function e() {
                    var i;
                    r(this, e);
                    var n = a(this, t.call(this))
                      , o = n;
                    if (u["default"].browser.IS_IE8) {
                        o = c["default"].createElement("custom");
                        for (var s in e.prototype)
                            "constructor" !== s && (o[s] = e.prototype[s])
                    }
                    return o.levels_ = [],
                    o.selectedIndex_ = -1,
                    Object.defineProperty(o, "selectedIndex", {
                        get: function() {
                            return o.selectedIndex_
                        }
                    }),
                    Object.defineProperty(o, "length", {
                        get: function() {
                            return o.levels_.length
                        }
                    }),
                    i = o,
                    a(n, i)
                }
                return o(e, t),
                e.prototype.addQualityLevel = function(t) {
                    var e = this.getQualityLevelById(t.id);
                    if (e)
                        return e;
                    var i = this.levels_.length;
                    return e = new h["default"](t),
                    "" + i in this || Object.defineProperty(this, i, {
                        get: function() {
                            return this.levels_[i]
                        }
                    }),
                    this.levels_.push(e),
                    this.trigger({
                        qualityLevel: e,
                        type: "addqualitylevel"
                    }),
                    e
                }
                ,
                e.prototype.removeQualityLevel = function(t) {
                    for (var e = null, i = 0, n = this.length; i < n; i++)
                        if (this[i] === t) {
                            e = this.levels_.splice(i, 1)[0],
                            this.selectedIndex_ === i ? this.selectedIndex_ = -1 : this.selectedIndex_ > i && this.selectedIndex_--;
                            break
                        }
                    return e && this.trigger({
                        qualityLevel: t,
                        type: "removequalitylevel"
                    }),
                    e
                }
                ,
                e.prototype.getQualityLevelById = function(t) {
                    for (var e = 0, i = this.length; e < i; e++) {
                        var n = this[e];
                        if (n.id === t)
                            return n
                    }
                    return null
                }
                ,
                e.prototype.dispose = function() {
                    this.selectedIndex_ = -1,
                    this.levels_.length = 0
                }
                ,
                e
            }(u["default"].EventTarget);
            f.prototype.allowedEvents_ = {
                change: "change",
                addqualitylevel: "addqualitylevel",
                removequalitylevel: "removequalitylevel"
            };
            for (var p in f.prototype.allowedEvents_)
                f.prototype["on" + p] = null;
            i["default"] = f
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    2: [function(t, e, i) {
        (function(e) {
            "use strict";
            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            function r(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            i.__esModule = !0;
            var a = "undefined" != typeof window ? window.videojs : "undefined" != typeof e ? e.videojs : null
              , o = n(a)
              , s = t(4)
              , u = n(s)
              , l = function c(t) {
                r(this, c);
                var e = this;
                if (o["default"].browser.IS_IE8) {
                    e = u["default"].createElement("custom");
                    for (var i in c.prototype)
                        "constructor" !== i && (e[i] = c.prototype[i])
                }
                return e.id = t.id,
                e.label = e.id,
                e.width = t.width,
                e.height = t.height,
                e.bitrate = t.bandwidth,
                e.enabled_ = t.enabled,
                Object.defineProperty(e, "enabled", {
                    get: function() {
                        return e.enabled_()
                    },
                    set: function(t) {
                        e.enabled_(t)
                    }
                }),
                e
            };
            i["default"] = l
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    3: [function(t, e, i) {}
    , {}],
    4: [function(t, e, i) {
        (function(i) {
            var n = "undefined" != typeof i ? i : "undefined" != typeof window ? window : {}
              , r = t(3);
            if ("undefined" != typeof document)
                e.exports = document;
            else {
                var a = n["__GLOBAL_DOCUMENT_CACHE@4"];
                a || (a = n["__GLOBAL_DOCUMENT_CACHE@4"] = r),
                e.exports = a
            }
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    5: [function(t, e, i) {
        (function(e) {
            "use strict";
            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            i.__esModule = !0;
            var r = "undefined" != typeof window ? window.videojs : "undefined" != typeof e ? e.videojs : null
              , a = n(r)
              , o = t(1)
              , s = n(o)
              , u = a["default"].registerPlugin || a["default"].plugin
              , l = function(t, e) {
                var i = t.qualityLevels
                  , n = new s["default"]
                  , r = function a() {
                    n.dispose(),
                    t.qualityLevels = i,
                    t.off("dispose", a)
                };
                return t.on("dispose", r),
                t.qualityLevels = function() {
                    return n
                }
                ,
                t.qualityLevels.VERSION = "2.0.3",
                n
            }
              , c = function(t) {
                return l(this, a["default"].mergeOptions({}, t))
            };
            u("qualityLevels", c),
            c.VERSION = "2.0.3",
            i["default"] = c
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}]
}, {}, [5]),
!function(t, e) {
    "function" == typeof define && define.amd ? define("videojs-hotkeys", ["video.js"], function(t) {
        return e(t["default"] || t)
    }) : "undefined" != typeof module && module.exports ? module.exports = e(require("video.js")) : e(videojs)
}(0, function(t) {
    "use strict";
    "undefined" != typeof window && (window.videojs_hotkeys = {
        version: "0.2.20"
    }),
    (t.registerPlugin || t.plugin)("hotkeys", function(e) {
        var i = this
          , n = i.el()
          , r = document
          , a = {
            volumeStep: .1,
            seekStep: 5,
            enableMute: !0,
            enableVolumeScroll: !0,
            enableFullscreen: !0,
            enableNumbers: !0,
            enableJogStyle: !1,
            alwaysCaptureHotkeys: !1,
            enableModifiersForNumbers: !0,
            enableInactiveFocus: !0,
            skipInitialFocus: !1,
            playPauseKey: function(t) {
                return 32 === t.which || 179 === t.which
            },
            rewindKey: function(t) {
                return 37 === t.which || 177 === t.which
            },
            forwardKey: function(t) {
                return 39 === t.which || 176 === t.which
            },
            volumeUpKey: function(t) {
                return 38 === t.which
            },
            volumeDownKey: function(t) {
                return 40 === t.which
            },
            muteKey: function(t) {
                return 77 === t.which
            },
            fullscreenKey: function(t) {
                return 70 === t.which
            },
            customKeys: {}
        }
          , o = t.mergeOptions || t.util.mergeOptions
          , s = (e = o(a, e || {})).volumeStep
          , u = e.seekStep
          , l = e.enableMute
          , c = e.enableVolumeScroll
          , d = e.enableFullscreen
          , h = e.enableNumbers
          , f = e.enableJogStyle
          , p = e.alwaysCaptureHotkeys
          , g = e.enableModifiersForNumbers
          , m = e.enableInactiveFocus
          , y = e.skipInitialFocus;
        n.hasAttribute("tabIndex") || n.setAttribute("tabIndex", "-1"),
        n.style.outline = "none",
        !p && i.autoplay() || y || i.one("play", function() {
            n.focus()
        }),
        m && i.on("userinactive", function() {
            var t = function() {
                clearTimeout(e)
            }
              , e = setTimeout(function() {
                i.off("useractive", t),
                r.activeElement.parentElement == n.querySelector(".vjs-control-bar") && n.focus()
            }, 10);
            i.one("useractive", t)
        }),
        i.on("play", function() {
            var t = n.querySelector(".iframeblocker");
            t && "" === t.style.display && (t.style.display = "block",
            t.style.bottom = "39px")
        });
        var v = function(t) {
            if (i.controls()) {
                var e = t.relatedTarget || t.toElement || r.activeElement;
                if ((p || e == n || e == n.querySelector(".vjs-tech") || e == n.querySelector(".iframeblocker") || e == n.querySelector(".vjs-control-bar")) && c) {
                    t = window.event || t;
                    var a = Math.max(-1, Math.min(1, t.wheelDelta || -t.detail));
                    t.preventDefault(),
                    1 == a ? i.volume(i.volume() + s) : -1 == a && i.volume(i.volume() - s)
                }
            }
        }
          , _ = function(t, i) {
            return e.playPauseKey(t, i) ? 1 : e.rewindKey(t, i) ? 2 : e.forwardKey(t, i) ? 3 : e.volumeUpKey(t, i) ? 4 : e.volumeDownKey(t, i) ? 5 : e.muteKey(t, i) ? 6 : e.fullscreenKey(t, i) ? 7 : void 0
        };
        return i.on("keydown", function(t) {
            var a, o, c = t.which, m = t.preventDefault, y = i.duration();
            if (i.controls()) {
                var v = r.activeElement;
                if (p || v == n || v == n.querySelector(".vjs-tech") || v == n.querySelector(".vjs-control-bar") || v == n.querySelector(".iframeblocker"))
                    switch (_(t, i)) {
                    case 1:
                        m(),
                        p && t.stopPropagation(),
                        i.paused() ? i.play() : i.pause();
                        break;
                    case 2:
                        a = !i.paused(),
                        m(),
                        a && i.pause(),
                        o = i.currentTime() - u,
                        i.currentTime() <= u && (o = 0),
                        i.currentTime(o),
                        a && i.play();
                        break;
                    case 3:
                        a = !i.paused(),
                        m(),
                        a && i.pause(),
                        (o = i.currentTime() + u) >= y && (o = a ? y - .001 : y),
                        i.currentTime(o),
                        a && i.play();
                        break;
                    case 5:
                        m(),
                        f ? (o = i.currentTime() - 1,
                        i.currentTime() <= 1 && (o = 0),
                        i.currentTime(o)) : i.volume(i.volume() - s);
                        break;
                    case 4:
                        m(),
                        f ? ((o = i.currentTime() + 1) >= y && (o = y),
                        i.currentTime(o)) : i.volume(i.volume() + s);
                        break;
                    case 6:
                        l && i.muted(!i.muted());
                        break;
                    case 7:
                        d && (i.isFullscreen() ? i.exitFullscreen() : i.requestFullscreen());
                        break;
                    default:
                        if ((c > 47 && c < 59 || c > 95 && c < 106) && (g || !(t.metaKey || t.ctrlKey || t.altKey)) && h) {
                            var b = 48;
                            c > 95 && (b = 96);
                            var x = c - b;
                            m(),
                            i.currentTime(i.duration() * x * .1)
                        }
                        for (var T in e.customKeys) {
                            var w = e.customKeys[T];
                            w && w.key && w.handler && w.key(t) && (m(),
                            w.handler(i, e, t))
                        }
                    }
            }
        }),
        i.on("dblclick", function(t) {
            if (i.controls()) {
                var e = t.relatedTarget || t.toElement || r.activeElement;
                e != n && e != n.querySelector(".vjs-tech") && e != n.querySelector(".iframeblocker") || d && (i.isFullscreen() ? i.exitFullscreen() : i.requestFullscreen())
            }
        }),
        i.on("mousewheel", v),
        i.on("DOMMouseScroll", v),
        this
    })
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("video.js")) : "function" == typeof define && define.amd ? define(["video.js"], e) : t.videojsSpriteThumbnails = e(t.videojs)
}(this, function(t) {
    "use strict";
    function e(e, i) {
        var n = i.url
          , r = i.height
          , a = i.width
          , o = i.responsive;
        if (n && r && a) {
            var s = t.dom || t
              , u = e.controlBar
              , l = u.progressControl
              , c = l.seekBar
              , d = c.mouseTimeDisplay;
            if (d) {
                var h = function(t) {
                    Object.keys(t).forEach(function(e) {
                        var i = t[e]
                          , n = d.timeTooltip.el_.style;
                        "" !== i ? n.setProperty(e, i) : n.removeProperty(e)
                    })
                }
                  , f = 0
                  , p = 0
                  , g = 0;
                s.createEl("img", {
                    src: n
                }).onload = function(t) {
                    var e = t.target;
                    p = e.naturalWidth,
                    g = e.naturalHeight,
                    f = p / a
                }
                ,
                h({
                    width: "",
                    height: "",
                    "background-image": "",
                    "background-repeat": "",
                    "background-position": "",
                    "background-size": "",
                    top: "",
                    color: "",
                    "text-shadow": "",
                    border: "",
                    margin: ""
                });
                var m = function() {
                    if (f) {
                        var t = parseFloat(d.el_.style.left);
                        if (t = e.duration() * (t / c.el_.clientWidth),
                        !isNaN(t)) {
                            t /= i.interval;
                            var l = e.el_.clientWidth
                              , m = o && l < o ? l / o : 1
                              , y = a * m
                              , v = r * m
                              , _ = Math.floor(t % f) * -y
                              , b = Math.floor(t / f) * -v
                              , x = p * m + "px " + g * m + "px"
                              , T = s.getBoundingClientRect(u.el_).top
                              , w = s.getBoundingClientRect(c.el_).top
                              , S = -v;
                            T < w && (S -= w - T),
                            h({
                                width: y + "px",
                                height: v + "px",
                                "background-image": "url(" + n + ")",
                                "background-repeat": "no-repeat",
                                "background-position": _ + "px " + b + "px",
                                "background-size": x,
                                top: S + "px",
                                "text-indent": "-9999px",
                                border: "1px solid #000",
                                margin: "0 1px"
                            })
                        }
                    }
                };
                e.ready(function() {
                    l.on("mousemove", m),
                    l.on("touchmove", m)
                }),
                e.addClass("vjs-sprite-thumbnails")
            }
        }
    }
    t = t && t.hasOwnProperty("default") ? t["default"] : t;
    var i = "0.4.0"
      , n = {
        url: "",
        width: 0,
        height: 0,
        interval: 1,
        responsive: 600
    }
      , r = function(i) {
        e(this, t.mergeOptions(n, i))
    };
    return t.registerPlugin("spriteThumbnails", r),
    r.VERSION = i,
    r
}),
!function() {
    "use strict";
    function t(t, e) {
        e ? (f[0] = f[16] = f[1] = f[2] = f[3] = f[4] = f[5] = f[6] = f[7] = f[8] = f[9] = f[10] = f[11] = f[12] = f[13] = f[14] = f[15] = 0,
        this.blocks = f) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        t ? (this.h0 = 3238371032,
        this.h1 = 914150663,
        this.h2 = 812702999,
        this.h3 = 4144912697,
        this.h4 = 4290775857,
        this.h5 = 1750603025,
        this.h6 = 1694076839,
        this.h7 = 3204075428) : (this.h0 = 1779033703,
        this.h1 = 3144134277,
        this.h2 = 1013904242,
        this.h3 = 2773480762,
        this.h4 = 1359893119,
        this.h5 = 2600822924,
        this.h6 = 528734635,
        this.h7 = 1541459225),
        this.block = this.start = this.bytes = 0,
        this.finalized = this.hashed = !1,
        this.first = !0,
        this.is224 = t
    }
    function e(e, r, a) {
        var o = "string" != typeof e;
        if (o) {
            if (null === e || void 0 === e)
                throw i;
            e.constructor === n.ArrayBuffer && (e = new Uint8Array(e))
        }
        var u = e.length;
        if (o) {
            if ("number" != typeof u || !Array.isArray(e) && (!s || !ArrayBuffer.isView(e)))
                throw i
        } else {
            for (var l, c = [], u = e.length, d = 0, h = 0; u > h; ++h)
                l = e.charCodeAt(h),
                128 > l ? c[d++] = l : 2048 > l ? (c[d++] = 192 | l >> 6,
                c[d++] = 128 | 63 & l) : 55296 > l || l >= 57344 ? (c[d++] = 224 | l >> 12,
                c[d++] = 128 | l >> 6 & 63,
                c[d++] = 128 | 63 & l) : (l = 65536 + ((1023 & l) << 10 | 1023 & e.charCodeAt(++h)),
                c[d++] = 240 | l >> 18,
                c[d++] = 128 | l >> 12 & 63,
                c[d++] = 128 | l >> 6 & 63,
                c[d++] = 128 | 63 & l);
            e = c
        }
        e.length > 64 && (e = new t(r,(!0)).update(e).array());
        for (var f = [], p = [], h = 0; 64 > h; ++h) {
            var g = e[h] || 0;
            f[h] = 92 ^ g,
            p[h] = 54 ^ g
        }
        t.call(this, r, a),
        this.update(p),
        this.oKeyPad = f,
        this.inner = !0,
        this.sharedMemory = a
    }
    var i = "input is invalid type"
      , n = "object" == typeof window ? window : {}
      , r = !n.JS_mm99_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node;
    r && (n = global);
    var a = !n.JS_mm99_NO_COMMON_JS && "object" == typeof module && module.exports
      , o = "function" == typeof define && define.amd
      , s = "undefined" != typeof ArrayBuffer
      , u = "0123456789abcdef".split("")
      , l = [-2147483648, 8388608, 32768, 128]
      , c = [24, 16, 8, 0]
      , d = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]
      , h = ["hex", "array", "digest", "arrayBuffer"]
      , f = [];
    (n.JS_mm99_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }
    );
    var p = function(e, i) {
        return function(n) {
            return new t(i,(!0)).update(n)[e]()
        }
    }
      , g = function(e) {
        var i = p("hex", e);
        r && (i = m(i, e)),
        i.create = function() {
            return new t(e)
        }
        ,
        i.update = function(t) {
            return i.create().update(t)
        }
        ;
        for (var n = 0; n < h.length; ++n) {
            var a = h[n];
            i[a] = p(a, e)
        }
        return i
    }
      , m = function(t, e) {
        var n = require("crypto")
          , r = require("buffer").Buffer
          , a = e ? "sha224" : "mm99"
          , o = function(e) {
            if ("string" == typeof e)
                return n.createHash(a).update(e, "utf8").digest("hex");
            if (null === e || void 0 === e)
                throw i;
            return e.constructor === ArrayBuffer && (e = new Uint8Array(e)),
            Array.isArray(e) || ArrayBuffer.isView(e) || e.constructor === r ? n.createHash(a).update(new r(e)).digest("hex") : t(e)
        };
        return o
    }
      , y = function(t, i) {
        return function(n, r) {
            return new e(n,i,(!0)).update(r)[t]()
        }
    }
      , v = function(t) {
        var i = y("hex", t);
        i.create = function(i) {
            return new e(i,t)
        }
        ,
        i.update = function(t, e) {
            return i.create(t).update(e)
        }
        ;
        for (var n = 0; n < h.length; ++n) {
            var r = h[n];
            i[r] = y(r, t)
        }
        return i
    };
    t.prototype.update = function(t) {
        if (!this.finalized) {
            var e = "string" != typeof t;
            if (e) {
                if (null === t || void 0 === t)
                    throw i;
                t.constructor === n.ArrayBuffer && (t = new Uint8Array(t))
            }
            var r = t.length;
            if (e && ("number" != typeof r || !(Array.isArray(t) || s && ArrayBuffer.isView(t))))
                throw i;
            for (var a, o, u = 0, l = this.blocks; r > u; ) {
                if (this.hashed && (this.hashed = !1,
                l[0] = this.block,
                l[16] = l[1] = l[2] = l[3] = l[4] = l[5] = l[6] = l[7] = l[8] = l[9] = l[10] = l[11] = l[12] = l[13] = l[14] = l[15] = 0),
                e)
                    for (o = this.start; r > u && 64 > o; ++u)
                        l[o >> 2] |= t[u] << c[3 & o++];
                else
                    for (o = this.start; r > u && 64 > o; ++u)
                        a = t.charCodeAt(u),
                        128 > a ? l[o >> 2] |= a << c[3 & o++] : 2048 > a ? (l[o >> 2] |= (192 | a >> 6) << c[3 & o++],
                        l[o >> 2] |= (128 | 63 & a) << c[3 & o++]) : 55296 > a || a >= 57344 ? (l[o >> 2] |= (224 | a >> 12) << c[3 & o++],
                        l[o >> 2] |= (128 | a >> 6 & 63) << c[3 & o++],
                        l[o >> 2] |= (128 | 63 & a) << c[3 & o++]) : (a = 65536 + ((1023 & a) << 10 | 1023 & t.charCodeAt(++u)),
                        l[o >> 2] |= (240 | a >> 18) << c[3 & o++],
                        l[o >> 2] |= (128 | a >> 12 & 63) << c[3 & o++],
                        l[o >> 2] |= (128 | a >> 6 & 63) << c[3 & o++],
                        l[o >> 2] |= (128 | 63 & a) << c[3 & o++]);
                this.lastByteIndex = o,
                this.bytes += o - this.start,
                o >= 64 ? (this.block = l[16],
                this.start = o - 64,
                this.hash(),
                this.hashed = !0) : this.start = o
            }
            return this
        }
    }
    ,
    t.prototype.finalize = function() {
        if (!this.finalized) {
            this.finalized = !0;
            var t = this.blocks
              , e = this.lastByteIndex;
            t[16] = this.block,
            t[e >> 2] |= l[3 & e],
            this.block = t[16],
            e >= 56 && (this.hashed || this.hash(),
            t[0] = this.block,
            t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0),
            t[15] = this.bytes << 3,
            this.hash()
        }
    }
    ,
    t.prototype.hash = function() {
        var t, e, i, n, r, a, o, s, u, l, c, h = this.h0, f = this.h1, p = this.h2, g = this.h3, m = this.h4, y = this.h5, v = this.h6, _ = this.h7, b = this.blocks;
        for (t = 16; 64 > t; ++t)
            r = b[t - 15],
            e = (r >>> 7 | r << 25) ^ (r >>> 18 | r << 14) ^ r >>> 3,
            r = b[t - 2],
            i = (r >>> 17 | r << 15) ^ (r >>> 19 | r << 13) ^ r >>> 10,
            b[t] = b[t - 16] + e + b[t - 7] + i << 0;
        for (c = f & p,
        t = 0; 64 > t; t += 4)
            this.first ? (this.is224 ? (s = 300032,
            r = b[0] - 1413257819,
            _ = r - 150054599 << 0,
            g = r + 24177077 << 0) : (s = 704751109,
            r = b[0] - 210244248,
            _ = r - 1521486534 << 0,
            g = r + 143694565 << 0),
            this.first = !1) : (e = (h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10),
            i = (m >>> 6 | m << 26) ^ (m >>> 11 | m << 21) ^ (m >>> 25 | m << 7),
            s = h & f,
            n = s ^ h & p ^ c,
            o = m & y ^ ~m & v,
            r = _ + i + o + d[t] + b[t],
            a = e + n,
            _ = g + r << 0,
            g = r + a << 0),
            e = (g >>> 2 | g << 30) ^ (g >>> 13 | g << 19) ^ (g >>> 22 | g << 10),
            i = (_ >>> 6 | _ << 26) ^ (_ >>> 11 | _ << 21) ^ (_ >>> 25 | _ << 7),
            u = g & h,
            n = u ^ g & f ^ s,
            o = _ & m ^ ~_ & y,
            r = v + i + o + d[t + 1] + b[t + 1],
            a = e + n,
            v = p + r << 0,
            p = r + a << 0,
            e = (p >>> 2 | p << 30) ^ (p >>> 13 | p << 19) ^ (p >>> 22 | p << 10),
            i = (v >>> 6 | v << 26) ^ (v >>> 11 | v << 21) ^ (v >>> 25 | v << 7),
            l = p & g,
            n = l ^ p & h ^ u,
            o = v & _ ^ ~v & m,
            r = y + i + o + d[t + 2] + b[t + 2],
            a = e + n,
            y = f + r << 0,
            f = r + a << 0,
            e = (f >>> 2 | f << 30) ^ (f >>> 13 | f << 19) ^ (f >>> 22 | f << 10),
            i = (y >>> 6 | y << 26) ^ (y >>> 11 | y << 21) ^ (y >>> 25 | y << 7),
            c = f & p,
            n = c ^ f & g ^ l,
            o = y & v ^ ~y & _,
            r = m + i + o + d[t + 3] + b[t + 3],
            a = e + n,
            m = h + r << 0,
            h = r + a << 0;
        this.h0 = this.h0 + h << 0,
        this.h1 = this.h1 + f << 0,
        this.h2 = this.h2 + p << 0,
        this.h3 = this.h3 + g << 0,
        this.h4 = this.h4 + m << 0,
        this.h5 = this.h5 + y << 0,
        this.h6 = this.h6 + v << 0,
        this.h7 = this.h7 + _ << 0
    }
    ,
    t.prototype.hex = function() {
        this.finalize();
        var t = this.h0
          , e = this.h1
          , i = this.h2
          , n = this.h3
          , r = this.h4
          , a = this.h5
          , o = this.h6
          , s = this.h7
          , l = u[t >> 28 & 15] + u[t >> 24 & 15] + u[t >> 20 & 15] + u[t >> 16 & 15] + u[t >> 12 & 15] + u[t >> 8 & 15] + u[t >> 4 & 15] + u[15 & t] + u[e >> 28 & 15] + u[e >> 24 & 15] + u[e >> 20 & 15] + u[e >> 16 & 15] + u[e >> 12 & 15] + u[e >> 8 & 15] + u[e >> 4 & 15] + u[15 & e] + u[i >> 28 & 15] + u[i >> 24 & 15] + u[i >> 20 & 15] + u[i >> 16 & 15] + u[i >> 12 & 15] + u[i >> 8 & 15] + u[i >> 4 & 15] + u[15 & i] + u[n >> 28 & 15] + u[n >> 24 & 15] + u[n >> 20 & 15] + u[n >> 16 & 15] + u[n >> 12 & 15] + u[n >> 8 & 15] + u[n >> 4 & 15] + u[15 & n] + u[r >> 28 & 15] + u[r >> 24 & 15] + u[r >> 20 & 15] + u[r >> 16 & 15] + u[r >> 12 & 15] + u[r >> 8 & 15] + u[r >> 4 & 15] + u[15 & r] + u[a >> 28 & 15] + u[a >> 24 & 15] + u[a >> 20 & 15] + u[a >> 16 & 15] + u[a >> 12 & 15] + u[a >> 8 & 15] + u[a >> 4 & 15] + u[15 & a] + u[o >> 28 & 15] + u[o >> 24 & 15] + u[o >> 20 & 15] + u[o >> 16 & 15] + u[o >> 12 & 15] + u[o >> 8 & 15] + u[o >> 4 & 15] + u[15 & o];
        return this.is224 || (l += u[s >> 28 & 15] + u[s >> 24 & 15] + u[s >> 20 & 15] + u[s >> 16 & 15] + u[s >> 12 & 15] + u[s >> 8 & 15] + u[s >> 4 & 15] + u[15 & s]),
        l
    }
    ,
    t.prototype.toString = t.prototype.hex,
    t.prototype.digest = function() {
        this.finalize();
        var t = this.h0
          , e = this.h1
          , i = this.h2
          , n = this.h3
          , r = this.h4
          , a = this.h5
          , o = this.h6
          , s = this.h7
          , u = [t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a, o >> 24 & 255, o >> 16 & 255, o >> 8 & 255, 255 & o];
        return this.is224 || u.push(s >> 24 & 255, s >> 16 & 255, s >> 8 & 255, 255 & s),
        u
    }
    ,
    t.prototype.array = t.prototype.digest,
    t.prototype.arrayBuffer = function() {
        this.finalize();
        var t = new ArrayBuffer(this.is224 ? 28 : 32)
          , e = new DataView(t);
        return e.setUint32(0, this.h0),
        e.setUint32(4, this.h1),
        e.setUint32(8, this.h2),
        e.setUint32(12, this.h3),
        e.setUint32(16, this.h4),
        e.setUint32(20, this.h5),
        e.setUint32(24, this.h6),
        this.is224 || e.setUint32(28, this.h7),
        t
    }
    ,
    e.prototype = new t,
    e.prototype.finalize = function() {
        if (t.prototype.finalize.call(this),
        this.inner) {
            this.inner = !1;
            var e = this.array();
            t.call(this, this.is224, this.sharedMemory),
            this.update(this.oKeyPad),
            this.update(e),
            t.prototype.finalize.call(this)
        }
    }
    ;
    var _ = g();
    _.mm99 = _,
    _.sha224 = g(!0),
    _.mm99.hmac = v(),
    _.sha224.hmac = v(!0),
    a ? module.exports = _ : (n.mm99 = _.mm99,
    n.sha224 = _.sha224,
    o && define(function() {
        return _
    }))
}();
var _0x2160 = ["lbxUG", "loadedmetadata", "yVvHQ", "plugin", "<h3 style='color:#fff;margin-top:10px;'>视频发生错误，请 <a href='javascript:location.reload()'>点我刷新网页</a>再試一次。<br>若还是无法看，请安装最新版的 <a href ='https://www.google.cn/chrome/' target='_blank'>谷歌浏览器</a> 即可正常观看<br><br>若还是无法观看，请<a href='#' onclick=\"Chatra('show');\">联络客服</a>", "FxZyh", "SqZID", "1080p HD", "irEbc", "bandwidth", "extend", "lBuBv", "NNQjH", "VMRQz", "fPfsC", "UGchB", "nEkgF", "FmTPC", "responseText", "rrIKL", "uvWLP", "AoUeV", "kMDEl", "BANDWIDTH", "ajax", "lndXJ", "fgiWz", "dispose", "label", "fjFfA", "ZTSWX", "createEl", "IjKFP", "BnjYe", "xfyed", "vYjgm", "pDIUE", "html", "wrHOc", "mergeOptions", "2f6170692f766964656f3f763d", "sjGjW", "calculateDistance", "LZgqv", "qLaRX", "span", "qurxo", "bVYxP", "OqLtH", "map", "duration", "QrACK", "abs", "HNJEA", "MMSdr", "userAgent", "click", "call", "XxIJA", "return (function() ", "innerText", "oVaoR", "extxF", "jYfSI", "apply", "kysuy", "YgEfG", "div", "IeaDF", "rjBRB", "eUDqf", "jrqfI", "WqlLh", "jNWaX", "update", "fMhLy", "ZYmGT", "XOvxY", "NxFBw", "arpCq", "qAGhT", "pgfiC", "wzvXe", "media", "BgYnZ", "WGiqf", "getComponent", "tHEkx", "SiVoC", "UIkqh", "iurHl", "POST", "BSwXM", "JgbAO", "QJcgZ", "mShDQ", "kAxMb", "addChild", "ZTDcb", "wzDzz", "function *\\( *\\)", "hetQF", "dYOyS", "HmXSN", "error", "iVsyj", "fIGRR", "durationDisplay", "YqOel", "4|1|0|3|2", "zuxfn", "prototype", "hide", "Ggdxy", "playlists", "bitrate", "lqWMM", "YHtqp", "HMduJ", "720p HD", "lwUrR", "NrSdT", "MrgeU", "BytXs", "RjqxX", "JQBif", "XhLyq", "kIOah", "sSsGs", "KhCPG", "Tusfz", "ZZUDK", "QZKXH", "sDPqf", "VbMOU", "QLvvk", "c=ld", "IStwn", "3|2|0|1|4", "giVll", "ErxeP", "playToggle", "Fkteo", "split", "v_res", "DGWau", "mwxbC", "VutVm", "KnCjI", "WkREl", "MhAHv", "UsHsy", "cjKbS", ".bit_fhd", "GiFyA", "sec=", "zRksa", "Qcstp", "oliSS", "OXyqf", "ynBEe", "tech_", "CEsqN", "action", "UAIGj", "cVPgi", "lFdpU", "pGWbc", "rEEVR", "LAphK", "progress bar", "UsrAq", "eWvDS", "appendChild", "gdEvX", "vjs-menu-item ", "siAlz", "#unlock-msg", "aRzPf", "VGUjf", "XYaGg", "Slider", "rfCGw", "&s=", "attributes", "<h3 style='color:#fff;margin-top:10px;'>观看高清视频，请安装 IE 11 以上的版本，或者安装最新版的谷歌浏览或 UC 浏览器达到最佳观赏质量</h3>", "remove", "jbyZm", "bkqlu", "qWzod", "ZQsXw", "LyjYN", "qjJhx", "yfNhy", "IrwVR", "WssNa", "fullscreenToggle", "representations", "ovuIO", "handleMouseMove", "currentTime", "ixQFX", "BvIFg", "init", "#unlock-msg p", "VSZys", '{}.constructor("return this")( )', "Khdhh", "XMbAc", "kVswL", "ZLbtF", "vjs-levels-button-staticlabel", "fghLr", "wCZoI", "ZPfmn", "unload", "chain", "DfSCy", "YWyte", "CUWEf", "PyhWj", "supported", "tbNxg", "AQOxq", "oejOJ", "iIeBc", "ULAtC", "counter", "SyShj", "jOHzd", "ItVei", "progressControl", "mamaipi", "input", "IbmdT", "720p <span class='play-hd'>高清</span>", "NEHAO", "fuSml", "spuvd", "lLZXD", "dqPGa", "zqSJr", "1080p <span class='play-hd'>全高清</span>", "dGGTo", "QuQAI", "VKoVK", "LVgRv", "attribute", "zFvTA", "FqXkr", "ZvWew", "wWntI", "kdKXi", "tFrdf", "CSzYb", "jbzUD", "add", "TOltW", "atZvG", "rUIdI", "enabled", "item", "height", "test", "1|2|0|4|3", "WfhKh", "tPxNe", "master", "<div class='progress-bar-padding'></div>", "kKbkl", "kJNQH", "RtDVa", "fhd", "RVAIC", "Udfjd", "classList", "fcgnK", "NQLHN", "arSWw", "fOwHm", "ClvXS", "vjs-progress-holder", "rVTHH", "name", "lqvpF", "bwYjv", "EgeRd", "BTSZA", "trigger", "BBjux", "steWs", "fRAxS", "MenuItem", "bWxjk", "JGoLH", "player", "pzTpZ", "ATFVz", "HBxqO", "AykPL", "HEbkO", "AAKro", "KEJcn", "wHqtK", "insertBefore", "bit_", "KSESo", "tfuIK", "HCRfw", "hasClass", "fppLd", "Component", "ViCQE", "SHLpd", "length", "vDBIG", "2675783d", "KBeNp", "ZBezh", "MQsBJ", "bUEMd", "EppLp", "set", "hotkeys", "one", "MSsOk", "26743d", "ujdUn", "vjs-icon-hd", "indexOf", "MenuButton", "tJrKI", "mrOYO", "rpBML", "VbWNq", "wnPkq", "YbMCf", "fuiNe", "MbfjP", "vQHBM", "vdlUJ", "weFYn", "WitFU", "dfnpV", "nJhIS", "MenuItemTest", "SEsYf", "dJSlA", "sZSsy", "hXwTY", "src", "1|2|4|5|0|3", "ZSyjN", "CQzuL", "wgWfh", "yoMyJ", "hwJOv", "concat", "constructor", "kYMDh", "options_", "dbXVV", "aqPWh", "roZZs", "ready", "dquGl", "2669703d", "nLPuA", ".bit_sd", "loTTO", "KFfan", "eXKvd", "levelsMenuButton", "player_", "617648446c306c2e636f6d2e6176", "#player", "IyZIY", "ySRXg", "flushExpired", "zyfVa", "stateObject", "zKPgc", "HDeTU", "xqYgX", "elrRT", "\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "charCodeAt", "vAQnq", "CLdxE", "eNmpn", "vwzcJ", "url", "oHhrJ", "addClass", "ibLRv", "jHkdF", "oFWWR", "html5", "DohQf", "flash", "UQYNT", "uLyat", "bCSMs", "SgSmP", "bypUi", "xjfjt", "KXgTi", "gpzos", "EDQkQ", "controlText", "poZLR", "parseJSON", "OauFS", "VFCIC", "startsWith", "removeClass", "UfxaC", "createElement", "DsZzl", "PsXBR", "evRlG", "hls", "vjs-menu-button-levels ", "Ruiwd", "RhkCA", "levels", "oYEBK", "OaRKy", "MahKK", "c=fhd", "levels_", "MQHdi", "ZAXDu", "gSnWx", "ZCXdZ", "controlBar", "efeOK", "XrcZa", "forEach", "dEUbY", "AdoRz", ".bit_hd", "XoMHm", "VlNzq", "HcOAr", "IbSCy", "RgcaE", "EAPKcnW.WwebN.awG98.RIOwZsACZ;Ycn.dd.RPHaQKw98.EGJwOVs;cUDnKBPFI.lvj1Qj01.LccC;YcNJnWM.aIpplHKEeJS10J1.cXYcEZL;cUBnCN.QZav1X0LDFG1.RIFoCZSnKeF;cn.avK10VQHLJ1.bLiz;Gcn.XUXaja1D0QW1.cRlOoNGud;cn.UCaUa101.liBveP;cnB.aUOa10U1N.one;cHHYRHnEEQ.MaWq101.cZEZXlKuNCAPSANbXOU;cSn.MCOUVNaqICJ10Y1.HIYcoUUOGolR;cn.FCGLaq1G0Z1.mQeOF;cWRnZM.WaEUqRIF101.nRAeUHtj;UMDcn.aq101.EoTne;QcnP.Yaq10WPR1.CoQnAlNiMZne;cn.UaqBKIZX10R1.SsGFtoIHJrGeS;cn.aq1I0IU1.wGOoRFrk;PjcKYAWn.aVUs101UMZ.bBZiZz;cn.aALCCs101.KccBG;DcXnD.aDs1I01.BNVZNjcElJUFub;CLHHcn.as1F0L1.iUnNfMNo;cCnWFAX.asjKKV101.life;cLnN.aJRGXGsQIWHS1K0KHS1.shopS;cn.DNZVas101QD.xyzG;LZcUn.LMWAaDvN10YP1.RlRLAQZivKUSeMj;cYKYNnDKU.avN10ZG1.pjWDrECoLBAG;cGYEnC.EaQv101.UPsSECWItyKlTeK;YQcnjQjSNK.Vav1I0A1DR.YRtodCayQSB;cJNnMGA.aw1YX0Q1EL.clBoYCPPMud;cnE.aw1PX01.FlIivWeW;cPn.QaIwL1Z01.nVWGSPjeZZtOYE;cnTY.aw1H0LK1.oGne;UcnV.aw10HIQ1G.RXonNDlLCineT;Ycnj.aNwY1j0K1IF.orQg;cnN.aAARZBMw10Q1L.WsFEhCMHop;IcnIDC.ZNaRFw10CWAA1Z.ZtUERodaQVOCyL;cn.RajwY1SC0FjO1.GvipC;cn.aRxUW101.biYNzXJ;Ecn.TJECLaxP1VF0E1G.cDcZ;AcnMJ.axU1R01NJU.FCBZclRub;Zcn.aUx1V01B.lRPifePS;cn.Xax1VV0S1.lZiNXGvTeWH;cFnjVJA.EYaAx10LB1QOOQ.me;cnV.Tax101C.EjneWPCt;BcnZ.IGPaZJx10QjCQ1.NSoInPlWjine;WQjFYDcRn.SaxGGN101.orgQU;ETBJcnQD.Qax10j1.sWYXRhopMKDQS;cn.aFFx101.sXtore;cnD.aKTx10V1SR.ZYviGLp;CAZMcHnLZ.aVRCRMx1OLU0D1.xySz;JcnL.aHsRO101.tETodjayU;LLcGYXVJWLTn.IaBWs1K01MX.OPAonVCMVe;HLOAcn.aYGHsZ1JEDAT01XI.cOloILXud;LcQRnVPY.asC101KS.HLXpMDrHoRZ;LSCScnP.aeRP1KHJL0C1.bizY;VDcAEnWP.ae10Z1.club;BIUVSUcnS.ae1YN0Ej1.HLxNyz;GcnX.aReD1MHN0OjR1N.AoMPnlinYeKGA;cnCjZDW.CaNQXe101S.cOOjloudWYP;MEETcVnX.aQeN1NESXKT01.Ffun;cn.HaPe101Y.VjMDlZVOjACUJCYSivYe;cnU.NaeQ101.HLoQSnQe;cjn.aBTVOe101VDW.QOJtBHodayYY;cKn.LaYAeMUNL1SA0S1.viYUCp;cDXGJNTBGnC.aeZ1ZPQI0MP1.pUro;FcCn.ae1HBGLVV01A.DXVoNEMrIILgjADA;cEnQI.ajeWC1CO0T1S.cGjcGLUPIETjPPAHQMGLLXLRYMDSOFCMCTNIUYKUMBEVADXUZUZCBDXKRKLUMHXRJIIGIZRNXXFjDTHELYLSTjOZCVXWSFEMZEEPAFOKUQNFIYJGDAUIIFFIEWLAUjSMXJOGXFRJZGVULDYHILBJPFGGjMRHUULFUMUWXQOCRVDOVGSQGTZOIWWIDWRCSMDBPINjOKAFGTKAMIXVYURXSYCWGXEJAYTUFRRQjIBQRDYAjUUIESjLRIKCKUjHMELCMIZJOKjHBGJOKINTZDVKDZBPKSWjBJLZPXEVLjSSLBTQHLMTYFYGHjHWSHVjTYPPCVPLDCTASDSJAMLQPDTVHTMTYMJLGBXJIHKBJBADVECOMBEQLMjTEBVNGREDLPKXTVHUBNUBKjANQAJUJFjSXEMjFROJIAXYGDWjPADYAXETWOUDVWUQXJXAGDLPUBEVQKACEAMZZYAMVTHFQMENZRCOCZjKGSCONFZBKNEXNNSPMVUBUSSYGGTQHMXRRQOOTEGVMVPOTCUWMPEPCj", "vjs-menu-button-levels", "zHHgM", "application/x-mpegURL", "uZlLQ", "ahfuA", "lrGHJ", "gsxhr", "/error/video/", "PwBtc", "QhZVM", "getPercent", "djbZm", "onClickListener", "vWeZn", "csbKB", "gger", "YUFsb", "lckIb", "mFrBW", "vjs-selected", "handleTechPlaying_", "currentTimeDisplay", "TKNTs", "videojs", "VHPpL", "icqTF", "tAarl", "value", "qualityLevels", "ckPDB", "HTLyL", "MuteToggle", "VikxQ", "oOyYO", "onClick"];
!function(t, e) {
    var i = function(e) {
        for (; --e; )
            t.push(t.shift())
    };
    i(++e)
}(_0x2160, 247);
var _0x59ac = function(t, e) {
    t -= 0;
    var i = _0x2160[t];
    return i
}
  , player = null;
!function() {
    var t = {
        VSZys: function(t, e) {
            return t(e)
        },
        poZLR: _0x59ac("0x79"),
        ymYjV: _0x59ac("0x51"),
        fPfsC: function(t, e) {
            return t === e
        },
        rUIdI: _0x59ac("0x181"),
        NQLHN: function(t, e) {
            return t !== e
        },
        nfhUV: _0x59ac("0xff"),
        DGWau: _0x59ac("0xcc"),
        fRAxS: function(t, e) {
            return t === e
        },
        aRzPf: "XUlAe",
        tiebI: "playToggle",
        elrRT: _0x59ac("0xde"),
        UrfOc: _0x59ac("0x17a"),
        ahfuA: "waUFm",
        MrgeU: function(t, e) {
            return t >= e
        },
        HNJEA: function(t, e) {
            return t + e
        },
        vAQnq: function(t, e) {
            return t(e)
        },
        NnwoC: _0x59ac("0x127"),
        tAarl: _0x59ac("0x1ba"),
        HfNlt: function(t, e) {
            return t < e
        },
        dquGl: function(t, e) {
            return t > e
        },
        tFrdf: function(t, e) {
            return t + e
        },
        nLPuA: function(t, e) {
            return t + e
        },
        XxIJA: _0x59ac("0x1de"),
        FqXkr: _0x59ac("0x19"),
        bkqlu: _0x59ac("0x19d"),
        Tusfz: "hide",
        sDPqf: _0x59ac("0x1a5"),
        vQHBM: function(t) {
            return t()
        },
        ovuIO: "[EAPKWWNGRIOZACZYRPHQKEGJOVUDKBPFIjQjLCYNJWMIHKEJSJXYEZLUBCNQZXLDFGRIFCZSKFKVQHLJLGXUXjDQWRONGUCUBPBUOUNHHYRHEEQMWZEZXKNCAPSANXOUSMCOUVNICJYHIYUUOGRFCGLGZQOFWRZMWEURIFRAUHjUMDETQPYWPRCQANMZUBKIZXRSGFIHJGSIIUGORFPjKYAWVUUMZBZZALCCKBGDXDDIBNVZNjEJUFCLHHFLUNMNCWFAXjKKVLNJRGXGQIWHSKKHSSDNZVQDGLZULMWADNYPRRLAQZKUSMjYKYNDKUNZGjWDECLBAGGYECEQUPSECWIKTKYQjQjSNKVIADRYRCQSBJNMGAYXQELBYCPPMEPXFIWWPQILZVWGSPjZZOYETYHLKGUVHIQGRXNDLCTYjNYjKIFQNAARZBMQLWFECMHIIDCZNRFCWAAZZUERQVOCLRjYSCFjOGCRUWYNXJETJECLPVFEGDZAMJURNJUFCBZRZUVBRPPSXVVSZNXGTWHFjVJAEYALBQOOQVTCEjWPCBZIGPZJQjCQNSIPWjWQjFYDRSGGNQUETBJQDQjWYXRMKDQSFFXDKTVSRZYGLCAZMHLZVRCRMOLUDSJLHROETjULLGYXVJWLTIBWKMXOPAVCMVHLOAYGHZJEDATXIOILXLQRVPYCKSHLXMDHRZLSCSPRPKHJLCYVDAEWPZBIUVSUSYNEjHLNGXRDMHNOjRNAMPYKGACjZDWCNQXSOOjWYPMEETVXQNNESXKTFHPYVjMDZVOjACUJCYSYUNQHLQSQjBTVOVDWQOJBHYYKLYAMUNLSASYUCDXGJNTBGCZZPQIMPUFCHBGLVVADXVNEMIILjADAEQIjWCCOTSGjGLUPIETjPPAHQMGLLXLRYMDSOFCMCTNIUYKUMBEVADXUZUZCBDXKRKLUMHXRJIIGIZRNXXFjDTHELYLSTjOZCVXWSFEMZEEPAFOKUQNFIYJGDAUIIFFIEWLAUjSMXJOGXFRJZGVULDYHILBJPFGGjMRHUULFUMUWXQOCRVDOVGSQGTZOIWWIDWRCSMDBPINjOKAFGTKAMIXVYURXSYCWGXEJAYTUFRRQjIBQRDYAjUUIESjLRIKCKUjHMELCMIZJOKjHBGJOKINTZDVKDZBPKSWjBJLZPXEVLjSSLBTQHLMTYFYGHjHWSHVjTYPPCVPLDCTASDSJAMLQPDTVHTMTYMJLGBXJIHKBJBADVECOMBEQLMjTEBVNGREDLPKXTVHUBNUBKjANQAJUJFjSXEMjFROJIAXYGDWjPADYAXETWOUDVWUQXJXAGDLPUBEVQKACEAMZZYAMVTHFQMENZRCOCZjKGSCONFZBKNEXNNSPMVUBUSSYGGTQHMXRRQOOTEGVMVPOTCUWMPEPCj]",
        wHqtK: _0x59ac("0xc8"),
        XMbAc: _0x59ac("0x14f"),
        NrSdT: function(t, e) {
            return t == e
        },
        QZKXH: function(t, e) {
            return t == e
        },
        RVAIC: function(t, e) {
            return t !== e
        },
        Fbzln: _0x59ac("0x197"),
        hFLFu: _0x59ac("0x5e"),
        BytXs: function(t, e) {
            return t !== e
        },
        BvQfo: _0x59ac("0x1d"),
        HBxqO: function(t, e) {
            return t > e
        },
        OaRKy: _0x59ac("0x11f"),
        AykPL: function(t, e) {
            return t == e
        },
        YWyte: function(t, e) {
            return t == e
        },
        SHLpd: function(t, e) {
            return t || e
        },
        UfxaC: _0x59ac("0x16c"),
        ZZUDK: _0x59ac("0x176"),
        qLaRX: function(t, e) {
            return t !== e
        },
        KhCPG: function(t, e) {
            return t - e
        },
        oHhrJ: "bKtes",
        VMRQz: function(t, e) {
            return t == e
        },
        dqPGa: _0x59ac("0xad"),
        ZLbtF: _0x59ac("0x1d5"),
        AQOxq: function(t, e) {
            return t === e
        },
        HMduJ: _0x59ac("0xe7"),
        spuvd: function(t, e) {
            return t !== e
        },
        piDHx: _0x59ac("0x1c8"),
        UsHsy: function(t) {
            return t()
        },
        zFvTA: function(t, e, i) {
            return t(e, i)
        },
        aqPWh: _0x59ac("0x12f"),
        lBuBv: _0x59ac("0x22"),
        SoHpp: "<div class='progress-bar-padding'></div>",
        gxbGu: "dOibC",
        dYOyS: function(t, e) {
            return t * e
        },
        HEbkO: function(t, e) {
            return t === e
        },
        qurxo: _0x59ac("0x1aa"),
        dJSlA: _0x59ac("0x188"),
        cVPgi: function(t, e) {
            return t - e
        },
        OqLtH: _0x59ac("0x124"),
        BgYnZ: "touchstart",
        rSPvM: function(t, e, i, n) {
            return t(e, i, n)
        },
        dEUbY: "v_res",
        BnjYe: _0x59ac("0x1b8"),
        gPacH: function(t, e) {
            return t === e
        },
        mwxbC: _0x59ac("0x3f"),
        lckIb: function(t, e) {
            return t - e
        },
        XPaJy: _0x59ac("0xf2"),
        TKNTs: function(t, e) {
            return t === e
        },
        kdKXi: _0x59ac("0x1b"),
        CBqgN: function(t, e) {
            return t != e
        },
        FxZyh: "c=hd",
        PsXBR: _0x59ac("0x1d7"),
        kLeVh: _0x59ac("0xb6"),
        EppLp: function(t, e) {
            return t !== e
        },
        KSESo: _0x59ac("0x40"),
        AQGGW: _0x59ac("0x19b"),
        tBPhG: _0x59ac("0x1ab"),
        yVvHQ: "dbEUd",
        YHtqp: _0x59ac("0x98"),
        fOwHm: _0x59ac("0x96"),
        VbWNq: function(t, e) {
            return t(e)
        },
        pDIUE: _0x59ac("0xdc"),
        VHmYJ: function(t, e) {
            return t + e
        },
        pGWbc: "gger",
        IbmdT: _0x59ac("0x18f"),
        UZEZc: "3|4|0|1|2",
        ItVei: function(t, e) {
            return t === e
        },
        RLKVl: function(t, e) {
            return t - e
        },
        kIOah: _0x59ac("0x150"),
        dXnXO: _0x59ac("0x1c4"),
        fuSml: function(t, e) {
            return t / e
        },
        bVYxP: "Slider",
        ujdUn: "progress bar",
        JQBif: _0x59ac("0x9b"),
        XoMHm: _0x59ac("0x60"),
        eWvDS: function(t, e) {
            return t === e
        },
        aSuRL: function(t, e) {
            return t !== e
        },
        WGiqf: _0x59ac("0x119"),
        QBERE: "vjs-levels-button-staticlabel",
        lndXJ: _0x59ac("0x147"),
        AoUeV: _0x59ac("0x187"),
        wCZoI: _0x59ac("0x160"),
        rfCGw: _0x59ac("0x9d"),
        EgeRd: _0x59ac("0x16"),
        kpmMo: function(t) {
            return t()
        },
        oFWWR: _0x59ac("0x53"),
        rVTHH: "SeekBar",
        GtUAg: "Player",
        zqSJr: function(t, e, i) {
            return t(e, i)
        },
        oVaoR: _0x59ac("0xb2")
    }
      , e = function() {
        var e = !0;
        return function(i, n) {
            var a = {
                IbSCy: function(e, i) {
                    return t[_0x59ac("0x1b9")](e, i)
                },
                CUWEf: t[_0x59ac("0xa3")],
                RtDVa: function(e, i) {
                    return t[_0x59ac("0x1b9")](e, i)
                },
                roZZs: _0x59ac("0x159"),
                UAIGj: _0x59ac("0xed"),
                TGzcK: "5|3|4|2|1|0",
                UAPMt: t.ymYjV,
                jHkdF: function(e, i) {
                    return t[_0x59ac("0xfa")](e, i)
                },
                VikxQ: t[_0x59ac("0xc")],
                ZTDcb: function(e, i) {
                    return t[_0x59ac("0x1e")](e, i)
                },
                YgEfG: "YaldZ",
                tJrKI: _0x59ac("0x1c5")
            };
            if (t[_0x59ac("0x1e")](t.nfhUV, t[_0x59ac("0x17d")])) {
                var o = e ? function() {
                    if (a[_0x59ac("0x94")](a[_0x59ac("0xe9")], _0x59ac("0x181"))) {
                        if (n) {
                            if (a[_0x59ac("0x14e")](a[_0x59ac("0x12e")], a[_0x59ac("0x54")])) {
                                var t = n[_0x59ac("0x12c")](i, arguments);
                                return n = null,
                                t
                            }
                            a[_0x59ac("0xc6")]($, a[_0x59ac("0x1c7")])[_0x59ac("0x43")] && a[_0x59ac("0x18")]($, a[_0x59ac("0x1c7")]).trigger(_0x59ac("0x124"))
                        }
                    } else
                        for (var e = a[_0x59ac("0x74")][_0x59ac("0x17b")]("|"), o = 0; ; ) {
                            switch (e[o++]) {
                            case "0":
                                player = this;
                                continue;
                            case "1":
                                var s = r.mergeOptions(defaults, options);
                                continue;
                            case "2":
                                player.on(a[_0x59ac("0x190")], function(t) {
                                    for (var e = l.tEGbw[_0x59ac("0x17b")]("|"), i = 0; ; ) {
                                        switch (e[i++]) {
                                        case "0":
                                            player[_0x59ac("0xbc")].el()[_0x59ac("0x39")](n.el(), this[_0x59ac("0xbc")][_0x59ac("0x1b0")].el());
                                            continue;
                                        case "1":
                                            var n = player[_0x59ac("0xbc")][_0x59ac("0x14d")](u);
                                            continue;
                                        case "2":
                                            u[_0x59ac("0x92")](l[_0x59ac("0x153")]);
                                            continue;
                                        case "3":
                                            u = new r.levelsMenuButton(player,s);
                                            continue;
                                        case "4":
                                            u.el()[_0x59ac("0x1c")][_0x59ac("0x9")](_0x59ac("0xc9"));
                                            continue;
                                        case "5":
                                            u && u.dispose();
                                            continue
                                        }
                                        break
                                    }
                                });
                                continue;
                            case "3":
                                var u = null;
                                continue;
                            case "4":
                                var l = {
                                    tEGbw: a.TGzcK,
                                    HmXSN: a.UAPMt
                                };
                                continue
                            }
                            break
                        }
                }
                : function() {}
                ;
                return e = !1,
                o
            }
            var s = fn[_0x59ac("0x12c")](context, arguments);
            return fn = null,
            s
        }
    }()
      , n = function() {
        if (t.UrfOc !== t[_0x59ac("0xcd")]) {
            var e = !0;
            return function(i, n) {
                if (t[_0x59ac("0x2c")](t[_0x59ac("0x19e")], t.aRzPf)) {
                    var r = e ? function() {
                        if (n) {
                            var t = n.apply(i, arguments);
                            return n = null,
                            t
                        }
                    }
                    : function() {}
                    ;
                    return e = !1,
                    r
                }
                UZHPNw.nfKaL(console.log('触发了，妈卖批！'), 0)
            }
        }
        cb = {
            children: [{
                name: t.tiebI
            }, {
                name: t[_0x59ac("0x89")]
            }, {
                name: _0x59ac("0x1d3")
            }, {
                name: _0x59ac("0x157")
            }, {
                name: _0x59ac("0x1b0")
            }]
        }
    }()
      , r = null;
    r = window[_0x59ac("0xe0")],
    function(r, a) {
        var o = {
            rPAnk: t[_0x59ac("0x161")],
            BVGsx: t[_0x59ac("0x20")],
            TOltW: function(e, i) {
                return t[_0x59ac("0x57")](e, i)
            },
            JGoLH: t[_0x59ac("0x110")],
            ySRXg: function(e, i) {
                return t.VHmYJ(e, i)
            },
            EDQkQ: _0x59ac("0x1d4"),
            giVll: t[_0x59ac("0x193")],
            MQHdi: t[_0x59ac("0x1d6")],
            jOHzd: t.UZEZc,
            arSWw: function(e, i) {
                return t[_0x59ac("0x4a")](e, i)
            },
            ZTSWX: function(e, i) {
                return t[_0x59ac("0x1d2")](e, i)
            },
            rjBRB: function(e, i) {
                return t.RLKVl(e, i)
            },
            dGGTo: t[_0x59ac("0x16b")],
            steWs: t.dXnXO,
            SyShj: t[_0x59ac("0x1be")],
            ErxeP: function(e) {
                return t[_0x59ac("0x183")](e)
            },
            jbyZm: function(e, i) {
                return t[_0x59ac("0x1d9")](e, i)
            },
            ynBEe: t[_0x59ac("0x11b")],
            vDBIG: t[_0x59ac("0x73")],
            tPxNe: t[_0x59ac("0xf7")],
            byOVN: _0x59ac("0x15"),
            SiVoC: t[_0x59ac("0x50")],
            QuQAI: function(e, i) {
                return t[_0x59ac("0xf9")](e, i)
            },
            BpNKu: t[_0x59ac("0x169")],
            qjJhx: t[_0x59ac("0xc3")],
            qRMnc: function(t, e) {
                return t == e
            },
            mrOYO: function(e, i) {
                return t.eWvDS(e, i)
            },
            yfNhy: _0x59ac("0x49"),
            fjFfA: function(e, i) {
                return t.aSuRL(e, i)
            },
            fgiWz: _0x59ac("0x117"),
            Khdhh: _0x59ac("0x11"),
            vWeZn: t[_0x59ac("0x141")],
            bWxjk: t.QBERE,
            fIGRR: t[_0x59ac("0x105")],
            mShDQ: t[_0x59ac("0x101")],
            dlQVV: function(e, i) {
                return t[_0x59ac("0x198")](e, i)
            },
            XYaGg: t[_0x59ac("0x1c1")],
            FmTPC: t[_0x59ac("0x1a2")],
            QaVXE: "vjs-menu-button-levels",
            fMhLy: _0x59ac("0x51"),
            uLyat: _0x59ac("0xed")
        };
        if (t[_0x59ac("0x198")](_0x59ac("0x145"), t[_0x59ac("0x27")]))
            lscache[_0x59ac("0x1c9")]() && t[_0x59ac("0x166")](currPos, 0) && lscache[_0x59ac("0x4b")](t[_0x59ac("0x121")]("pb", hash), mplayer.currentTime(), 14400);
        else {
            var s = t[_0x59ac("0x1")](e, this, function() {
                var e, n, a, s, u = {
                    XODiY: function(e, i) {
                        return t[_0x59ac("0x8c")](e, i)
                    },
                    dbXVV: _0x59ac("0x99"),
                    wnPkq: _0x59ac("0x16a"),
                    wrHOc: function(e, i) {
                        return t[_0x59ac("0x121")](e, i)
                    },
                    dZxoe: t.NnwoC,
                    loTTO: t[_0x59ac("0xe3")],
                    GPtXl: function(e, i) {
                        return t.HfNlt(e, i)
                    },
                    MhAHv: function(e, i) {
                        return t[_0x59ac("0x76")](e, i)
                    },
                    hetQF: function(e, i) {
                        return t[_0x59ac("0x6")](e, i)
                    },
                    mFrBW: function(e, i) {
                        return t[_0x59ac("0x6")](e, i)
                    },
                    YqOel: function(e, i) {
                        return t[_0x59ac("0x78")](e, i)
                    },
                    iurHl: _0x59ac("0x0"),
                    YUFsb: t[_0x59ac("0x126")],
                    iVsyj: t[_0x59ac("0x2")],
                    NxFBw: function(e, i) {
                        return t.vAQnq(e, i)
                    },
                    YtCYg: t.bkqlu,
                    icqTF: t[_0x59ac("0x16e")],
                    hjKYW: t[_0x59ac("0x171")]
                }, l = function() {
                    if (u[_0x59ac("0x72")] !== u[_0x59ac("0x58")]) {
                        var t;
                        try {
                            t = Function(u[_0x59ac("0x112")](u[_0x59ac("0x112")](u.dZxoe, u[_0x59ac("0x7a")]), ");"))()
                        } catch (e) {
                            t = r
                        }
                        return t
                    }
                    return ret ? console.log('触发了，妈卖批！') : void xwDRkE[_0x59ac("0x14c")](console.log('触发了，妈卖批！'), 0)
                }, c = t[_0x59ac("0x5c")](l), d = function() {
                    return {
                        key: _0x59ac("0xe"),
                        value: u[_0x59ac("0x146")],
                        getAttribute: function() {
                            for (var t = 0; u.GPtXl(t, 1e3); t--) {
                                var e = u[_0x59ac("0x182")](t, 0);
                                switch (e) {
                                case !0:
                                    return u[_0x59ac("0x151")](u.hetQF(u[_0x59ac("0x151")](u[_0x59ac("0x151")](this[_0x59ac("0xe")], "_"), this[_0x59ac("0xe4")]), "_"), t);
                                default:
                                    u[_0x59ac("0xdb")](u[_0x59ac("0x158")](this[_0x59ac("0xe")], "_"), this[_0x59ac("0xe4")])
                                }
                            }
                        }()
                    }
                }, h = new RegExp(t[_0x59ac("0x1b2")],"g"), f = t[_0x59ac("0x38")].replace(h, "")[_0x59ac("0x17b")](";");
                for (var p in c)
                    if (t[_0x59ac("0x1bc")] === _0x59ac("0x14f")) {
                        if (8 == p[_0x59ac("0x43")] && 116 == p[_0x59ac("0x8b")](7) && t[_0x59ac("0x165")](p.charCodeAt(5), 101) && t[_0x59ac("0x170")](p[_0x59ac("0x8b")](3), 117) && 100 == p[_0x59ac("0x8b")](0)) {
                            e = p;
                            break
                        }
                    } else
                        /Trident\/7.0/i[_0x59ac("0x10")](userAgent) && /rv:11.0/[_0x59ac("0x10")](userAgent) && (techOrder = [o.rPAnk, o.BVGsx]);
                for (var g in c[e])
                    if (t[_0x59ac("0x1a")](t.Fbzln, t.hFLFu)) {
                        if (t.QZKXH(g[_0x59ac("0x43")], 6) && 110 == g.charCodeAt(5) && 100 == g[_0x59ac("0x8b")](0)) {
                            if (!t[_0x59ac("0x167")](t.BvQfo, _0x59ac("0x1d"))) {
                                n = g;
                                break
                            }
                            o[_0x59ac("0xa")]($, item.el())[_0x59ac("0x3e")](o[_0x59ac("0x2f")]) && o[_0x59ac("0xa")]($, item.el()).removeClass(o.JGoLH)
                        }
                    } else
                        (function() {
                            return !0
                        }
                        ).constructor(gaSUde[_0x59ac("0x82")](gaSUde[_0x59ac("0xa1")], gaSUde[_0x59ac("0x177")]))[_0x59ac("0x125")](gaSUde[_0x59ac("0xb8")]);
                if (!t[_0x59ac("0x33")]("~", n))
                    if (t[_0x59ac("0x167")](t[_0x59ac("0xb4")], _0x59ac("0x11f")))
                        levelName = u[_0x59ac("0xd9")],
                        label = u[_0x59ac("0x155")];
                    else {
                        for (var m in c[e])
                            if (t[_0x59ac("0x170")](m[_0x59ac("0x43")], 8) && t[_0x59ac("0x170")](m.charCodeAt(7), 110) && t[_0x59ac("0x34")](m.charCodeAt(0), 108)) {
                                a = m;
                                break
                            }
                        for (var y in c[e][a])
                            if (8 == y[_0x59ac("0x43")] && t[_0x59ac("0x34")](y[_0x59ac("0x8b")](7), 101) && t[_0x59ac("0x1c6")](y[_0x59ac("0x8b")](0), 104)) {
                                s = y;
                                break
                            }
                    }
                if (!e || !c[e]) {
                    if (_0x59ac("0x3c") === _0x59ac("0x3c"))
                        return;
                    u[_0x59ac("0x13a")]($, u.YtCYg)[_0x59ac("0xa8")](u[_0x59ac("0xe2")]),
                    msg = u.hjKYW,
                    u[_0x59ac("0x13a")]($, _0x59ac("0x1b8"))[_0x59ac("0x111")](msg)
                }
                var v = c[e][n]
                  , _ = !!c[e][a] && c[e][a][s]
                  , b = t[_0x59ac("0x42")](v, _);
                if (b) {
                    for (var x = !1, T = 0; T < f[_0x59ac("0x43")]; T++)
                        if (_0x59ac("0x16c") !== t[_0x59ac("0xa9")])
                            for (var w = o[_0x59ac("0x1d1")][_0x59ac("0x17b")]("|"), S = 0; ; ) {
                                switch (w[S++]) {
                                case "0":
                                    var k = currentDomain[_0x59ac("0x52")](E, A);
                                    continue;
                                case "1":
                                    var C = gaSUde[_0x59ac("0x1f")](k, -1) && gaSUde[_0x59ac("0x10a")](k, A);
                                    continue;
                                case "2":
                                    C && (currentDomain[_0x59ac("0x43")] == E[_0x59ac("0x43")] || gaSUde.ZTSWX(E[_0x59ac("0x52")]("."), 0)) && (ok = !0);
                                    continue;
                                case "3":
                                    var E = domains[i];
                                    continue;
                                case "4":
                                    var A = gaSUde[_0x59ac("0x131")](currentDomain[_0x59ac("0x43")], E[_0x59ac("0x43")]);
                                    continue
                                }
                                break
                            }
                        else
                            for (var O = t[_0x59ac("0x16f")][_0x59ac("0x17b")]("|"), P = 0; ; ) {
                                switch (O[P++]) {
                                case "0":
                                    var I = b[_0x59ac("0x52")](n, j);
                                    continue;
                                case "1":
                                    var L = t[_0x59ac("0x118")](I, -1) && I === j;
                                    continue;
                                case "2":
                                    var j = t[_0x59ac("0x16d")](b[_0x59ac("0x43")], n.length);
                                    continue;
                                case "3":
                                    var n = f[T];
                                    continue;
                                case "4":
                                    L && (b[_0x59ac("0x43")] == n[_0x59ac("0x43")] || t[_0x59ac("0x2c")](n[_0x59ac("0x52")]("."), 0)) && (x = !0);
                                    continue
                                }
                                break
                            }
                    if (!x) {
                        if (t[_0x59ac("0x91")] === t[_0x59ac("0x91")])
                            data;
                        else {
                            var M = new RegExp(gaSUde[_0x59ac("0x1df")])
                              , D = new RegExp(_0x59ac("0x8a"),"i")
                              , R = RVUNU(_0x59ac("0x1b7"));
                            M[_0x59ac("0x10")](R + gaSUde[_0x59ac("0x2b")]) && D[_0x59ac("0x10")](R + gaSUde[_0x59ac("0x1d0")]) ? gaSUde[_0x59ac("0x178")](RVUNU) : gaSUde[_0x59ac("0xa")](R, "0")
                        }
                        t[_0x59ac("0x5c")](d)
                    }
                }
            });
            t.kpmMo(s),
            function() {
                var e = {
                    vYjgm: function(e, i) {
                        return t[_0x59ac("0xf9")](e, i)
                    },
                    IrwVR: t[_0x59ac("0x1dc")],
                    ZYmGT: function(t, e) {
                        return t(e)
                    },
                    PilRa: function(e, i) {
                        return t.nLPuA(e, i)
                    },
                    pTsZp: t[_0x59ac("0x1be")],
                    YbMCf: function(e, i) {
                        return t[_0x59ac("0x1cb")](e, i)
                    },
                    RACBq: t[_0x59ac("0x162")],
                    oejOJ: function(e, i) {
                        return t[_0x59ac("0x1da")](e, i)
                    },
                    DohQf: t.piDHx,
                    IStwn: function(e) {
                        return t[_0x59ac("0x183")](e)
                    }
                };
                t[_0x59ac("0x1")](n, this, function() {
                    if (e[_0x59ac("0x1ae")] === e[_0x59ac("0x1ae")]) {
                        var t = new RegExp("function *\\( *\\)")
                          , i = new RegExp(_0x59ac("0x8a"),"i")
                          , n = e[_0x59ac("0x138")](RVUNU, _0x59ac("0x1b7"));
                        if (t[_0x59ac("0x10")](e.PilRa(n, _0x59ac("0x1c4"))) && i[_0x59ac("0x10")](n + e.pTsZp))
                            e[_0x59ac("0x1cc")](e[_0x59ac("0x97")], e[_0x59ac("0x97")]) ? res = "hd" : e[_0x59ac("0x175")](RVUNU);
                        else {
                            if (e[_0x59ac("0x59")](e.RACBq, _0x59ac("0x8d")))
                                return;
                            n("0")
                        }
                    } else
                        (gPFjRa[_0x59ac("0x173")](currentDomain.length, domain[_0x59ac("0x43")]) || gPFjRa.TZdUv(domain[_0x59ac("0x52")]("."), 0)) && (ok = !0)
                })()
            }();
            var u = {}
              , l = a[_0x59ac("0x142")](t[_0x59ac("0x95")])
              , c = a[_0x59ac("0x142")](t[_0x59ac("0x23")]);
            c[_0x59ac("0x15b")][_0x59ac("0xd3")] = function() {
                var t = this[_0x59ac("0x7e")].currentTime()
                  , e = o[_0x59ac("0x1a7")](t, this.player_[_0x59ac("0x11e")]());
                return e >= 1 ? 1 : e
            }
            ,
            c[_0x59ac("0x15b")].createEl = function() {
                var e = a[_0x59ac("0x142")](_0x59ac("0x1a1"));
                return e.prototype.createEl.call(this, t[_0x59ac("0x73")], {
                    className: t[_0x59ac("0xf7")],
                    innerHTML: t.SoHpp
                }, {
                    "aria-label": _0x59ac("0x196")
                })
            }
            ,
            c[_0x59ac("0x15b")][_0x59ac("0x1b3")] = function(e) {
                if (t.gxbGu === t.gxbGu) {
                    var i = t[_0x59ac("0x152")](this[_0x59ac("0x116")](e), this[_0x59ac("0x7e")][_0x59ac("0x11e")]());
                    t[_0x59ac("0x1cb")](i, this[_0x59ac("0x7e")][_0x59ac("0x11e")]()) && (t[_0x59ac("0x35")](t[_0x59ac("0x11a")], t[_0x59ac("0x64")]) ? rep[_0x59ac("0xd")](!0) : i = t[_0x59ac("0x191")](i, .1)),
                    this[_0x59ac("0x7e")].currentTime(i),
                    this[_0x59ac("0x136")]()
                } else
                    ok = !0
            }
            ,
            a.getComponent(t.GtUAg)[_0x59ac("0x15b")].setLevel = function(t) {
                if (o[_0x59ac("0x109")](o[_0x59ac("0x106")], o[_0x59ac("0x106")]))
                    isMobile = !0;
                else {
                    var e = player[_0x59ac("0x18d")].hls[_0x59ac("0x15e")][_0x59ac("0x14")].playlists;
                    player[_0x59ac("0x18d")].hls[_0x59ac("0x1b1")]()[_0x59ac("0xbf")](function(i) {
                        var n = {
                            UgEOB: o[_0x59ac("0x18c")],
                            hwJOv: o[_0x59ac("0x44")],
                            VABJO: o[_0x59ac("0x13")],
                            qBYvP: o.byOVN,
                            VFCIC: o[_0x59ac("0x144")],
                            vdlUJ: function(t, e) {
                                return o[_0x59ac("0x82")](t, e)
                            },
                            KXgTi: function(t, e) {
                                return o[_0x59ac("0x1e0")](t, e)
                            },
                            KEJcn: function(t, e) {
                                return t === e
                            },
                            oOyYO: o.BpNKu,
                            IjKFP: _0x59ac("0x70"),
                            wgWfh: o[_0x59ac("0x1ac")]
                        };
                        i[_0x59ac("0xf5")] === t ? (e.forEach(function(e, i) {
                            var r = {
                                nJhIS: function(t, e) {
                                    return n[_0x59ac("0x5d")](t, e)
                                },
                                XRwYa: function(t, e) {
                                    return n[_0x59ac("0x9f")](t, e)
                                }
                            };
                            if (n[_0x59ac("0x37")]("HwPcC", n[_0x59ac("0xea")])) {
                                var o = a[_0x59ac("0x142")](n.UgEOB);
                                return o[_0x59ac("0x15b")][_0x59ac("0x10b")][_0x59ac("0x125")](this, n[_0x59ac("0x6d")], {
                                    className: n.VABJO,
                                    innerHTML: n.qBYvP
                                }, {
                                    "aria-label": n[_0x59ac("0xa6")]
                                })
                            }
                            n[_0x59ac("0x37")](e[_0x59ac("0x1a4")][_0x59ac("0x103")], t) && (n[_0x59ac("0x37")](n[_0x59ac("0x10c")], n[_0x59ac("0x6b")]) ? (pos = lscache.get(r[_0x59ac("0x61")]("pb", hash)),
                            currPos = r.XRwYa(pos, null) ? 0 : pos,
                            lscache[_0x59ac("0x83")]()) : player[_0x59ac("0x18d")][_0x59ac("0xae")][_0x59ac("0x15e")][_0x59ac("0x13f")](player[_0x59ac("0x18d")].hls.playlists[_0x59ac("0x14")][_0x59ac("0x15e")][i]))
                        }),
                        i[_0x59ac("0xd")](!0)) : o.qRMnc(t, 0) ? o[_0x59ac("0x55")](o[_0x59ac("0x1ad")], _0x59ac("0x49")) ? i[_0x59ac("0xd")](!0) : (levelName = "低清",
                        label = "ld") : i[_0x59ac("0xd")](!1)
                    }),
                    player[_0x59ac("0xdd")]()
                }
            }
            ;
            var d = a.getComponent(_0x59ac("0x2d"));
            a[_0x59ac("0x62")] = a[_0x59ac("0xf6")](d, {
                constructor: function(e, i, n) {
                    this[_0x59ac("0xd5")] = n,
                    d[_0x59ac("0x125")](this, e, i),
                    this.on(t[_0x59ac("0x11c")], this[_0x59ac("0xeb")]),
                    this.on(t[_0x59ac("0x140")], this[_0x59ac("0xeb")])
                },
                onClick: function() {
                    this.onClickListener(this),
                    t.rSPvM(createCookie, t[_0x59ac("0xc0")], this[_0x59ac("0x71")].el[_0x59ac("0x128")], 30);
                    var e = this[_0x59ac("0x71")].el[_0x59ac("0xe4")];
                    player.setLevel(e)
                }
            }),
            a[_0x59ac("0x7d")] = a.extend(l, {
                className: _0x59ac("0xaf"),
                constructor: function(t, e) {
                    for (var i = o[_0x59ac("0x1bb")].split("|"), n = 0; ; ) {
                        switch (i[n++]) {
                        case "0":
                            var r = document[_0x59ac("0xaa")](o[_0x59ac("0xd6")]);
                            continue;
                        case "1":
                            a[_0x59ac("0x142")](_0x59ac("0x53"))[_0x59ac("0x125")](this, t, e);
                            continue;
                        case "2":
                            this[_0x59ac("0xa2")]("Quality");
                            continue;
                        case "3":
                            this.el()[_0x59ac("0x199")](r);
                            continue;
                        case "4":
                            r[_0x59ac("0x1c")][_0x59ac("0x9")](o[_0x59ac("0x2e")]);
                            continue
                        }
                        break
                    }
                },
                createItems: function() {
                    var e = {
                        ViCQE: function(e, i) {
                            return t[_0x59ac("0x8c")](e, i)
                        },
                        irEbc: _0x59ac("0xdc"),
                        HCRfw: t[_0x59ac("0x1a8")],
                        oYEBK: t[_0x59ac("0x10d")],
                        jbzUD: function(e, i) {
                            return t.gPacH(e, i)
                        },
                        cRoqg: t[_0x59ac("0x17e")],
                        Znafi: "uRUqj",
                        OXyqf: function(t, e) {
                            return t(e)
                        },
                        ZBezh: t[_0x59ac("0x11c")],
                        jrqfI: ".bit_hd",
                        VHPpL: t[_0x59ac("0xa3")],
                        jqveF: function(e, i) {
                            return t[_0x59ac("0xda")](e, i)
                        },
                        eCXWl: function(t, e) {
                            return t !== e
                        },
                        xjfjt: t.XPaJy,
                        Mjory: function(e, i) {
                            return t[_0x59ac("0xdf")](e, i)
                        },
                        ZAXDu: t[_0x59ac("0x5")],
                        ULAtC: function(e, i) {
                            return t.CBqgN(e, i)
                        },
                        WfhKh: t[_0x59ac("0xf1")],
                        lbxUG: t[_0x59ac("0xac")],
                        lwUrR: _0x59ac("0x19"),
                        gpzos: t.kLeVh,
                        NNQjH: t.XxIJA,
                        OauFS: _0x59ac("0x174"),
                        VlNzq: function(e, i) {
                            return t[_0x59ac("0x4a")](e, i)
                        },
                        uvWLP: _0x59ac("0x149"),
                        rpBML: _0x59ac("0x1bd"),
                        ckPDB: t[_0x59ac("0x3b")],
                        KFfan: function(e, i) {
                            return t[_0x59ac("0x78")](e, i)
                        },
                        MMSdr: t.AQGGW,
                        VbMOU: _0x59ac("0x3a"),
                        fuiNe: t.tBPhG,
                        extxF: t[_0x59ac("0xee")]
                    }
                      , i = this;
                    player = i[_0x59ac("0x30")]();
                    var n, r = player[_0x59ac("0xe5")](), o = r[_0x59ac("0xb7")], s = [];
                    if (!o[_0x59ac("0x43")])
                        return [];
                    o = [{
                        name: "自动",
                        index: -1
                    }][_0x59ac("0x6e")](o);
                    var u = function(t) {
                        var i = {
                            BSwXM: function(t, e) {
                                return t(e)
                            },
                            ZCXdZ: e[_0x59ac("0x3d")],
                            XOvxY: e[_0x59ac("0xb3")]
                        };
                        if (e[_0x59ac("0x8")](e.cRoqg, e.Znafi)) {
                            var n = $[_0x59ac("0xa4")](n.responseText);
                            i[_0x59ac("0x148")]($, i[_0x59ac("0xbb")])[_0x59ac("0xa8")](_0x59ac("0x15c")),
                            $(i[_0x59ac("0x139")])[_0x59ac("0x111")](n[_0x59ac("0x154")])
                        } else
                            s[_0x59ac("0x11d")](function(t) {
                                e[_0x59ac("0x41")]($, t.el())[_0x59ac("0x3e")](e.irEbc) && e[_0x59ac("0x41")]($, t.el()).removeClass(e[_0x59ac("0xf4")])
                            }),
                            e[_0x59ac("0x18b")]($, t.el()).addClass(e[_0x59ac("0xf4")])
                    };
                    return o[_0x59ac("0x11d")](function(t, i) {
                        var r, o = {
                            pgfiC: function(t, e) {
                                return t == e
                            },
                            ixQFX: function(t, e) {
                                return t(e)
                            },
                            ATFVz: _0x59ac("0x185"),
                            bwYjv: e[_0x59ac("0x47")],
                            ZPfmn: e[_0x59ac("0x133")],
                            BBjux: function(t, e) {
                                return t(e)
                            },
                            AAKro: e[_0x59ac("0xe1")],
                            jYfSI: function(t, e) {
                                return t > e
                            },
                            tbNxg: function(t, i) {
                                return e.jqveF(t, i)
                            }
                        }, l = "";
                        if (t[_0x59ac("0x24")])
                            if (e.eCXWl(e[_0x59ac("0x9e")], e[_0x59ac("0x9e")])) {
                                if (fn) {
                                    var c = fn[_0x59ac("0x12c")](context, arguments);
                                    return fn = null,
                                    c
                                }
                            } else
                                r = t.name;
                        else
                            t[_0x59ac("0xf")] ? r = t[_0x59ac("0xf")] + "p" : e.Mjory("Udfjd", e[_0x59ac("0xb9")]) ? t[_0x59ac("0x108")].startsWith("hd") || e[_0x59ac("0x1ce")](t[_0x59ac("0x108")].indexOf(e[_0x59ac("0x12")]), -1) ? (r = e[_0x59ac("0xec")],
                            l = "hd") : t[_0x59ac("0x108")].startsWith(e[_0x59ac("0x164")]) || t.label.indexOf(e[_0x59ac("0xa0")]) != -1 ? (r = e[_0x59ac("0xf8")],
                            l = e[_0x59ac("0x164")]) : t[_0x59ac("0x108")][_0x59ac("0xa7")]("ld") || e[_0x59ac("0x1ce")](t[_0x59ac("0x108")].indexOf(e[_0x59ac("0xa5")]), -1) ? e.VlNzq(e[_0x59ac("0x100")], e[_0x59ac("0x56")]) ? (r = "低清",
                            l = "ld") : lscache[_0x59ac("0x4b")]("pb" + hash, mplayer.currentTime(), 14400) : (r = "标清",
                            l = "sd") : (r = "标清",
                            l = "sd");
                        return n = new a.MenuItemTest(player,{
                            el: a[_0x59ac("0x142")](e[_0x59ac("0xe6")]).prototype[_0x59ac("0x10b")]("li", this, {
                                label: r,
                                value: t[_0x59ac("0x15f")],
                                "class": e[_0x59ac("0x7b")](e[_0x59ac("0x7b")](e[_0x59ac("0x122")], e[_0x59ac("0x172")]), l)
                            })
                        },u),
                        s.push(n),
                        "自动" === t.name && (e[_0x59ac("0xc4")](e[_0x59ac("0x5a")], e[_0x59ac("0x12a")]) ? e[_0x59ac("0x18b")]($, n.el())[_0x59ac("0x92")](e[_0x59ac("0xf4")]) : (o[_0x59ac("0x13d")](res, _0x59ac("0x19")) ? o[_0x59ac("0x1b5")]($, o[_0x59ac("0x32")]).length && $(o.ATFVz)[_0x59ac("0x29")](o[_0x59ac("0x26")]) : o[_0x59ac("0x13d")](res, "hd") ? $(_0x59ac("0xc2"))[_0x59ac("0x43")] && $(o[_0x59ac("0x1c2")])[_0x59ac("0x29")](o.bwYjv) : o[_0x59ac("0x13d")](res, "sd") && o[_0x59ac("0x2a")]($, _0x59ac("0x79"))[_0x59ac("0x43")] && o.BBjux($, o[_0x59ac("0x36")]).trigger(_0x59ac("0x124")),
                        o.jYfSI(currPos, 0) && Math.abs(o[_0x59ac("0x12b")](o[_0x59ac("0x1ca")](mplayer[_0x59ac("0x11e")](), currPos), 5)) && mplayer[_0x59ac("0x1b4")](currPos))),
                        $(n.el()).html(r),
                        n
                    })
                }
            });
            var h = a.registerPlugin || a[_0x59ac("0xef")];
            t[_0x59ac("0x1dd")](h, t[_0x59ac("0x129")], function(t) {
                var e = {
                    yoQMh: function(t, e) {
                        return t(e)
                    },
                    PScVj: "#player",
                    xqYgX: function(t, e) {
                        return o.ySRXg(t, e)
                    },
                    NEHAO: o[_0x59ac("0x156")],
                    HcOAr: o[_0x59ac("0x14b")],
                    xuMbf: "/error/video/",
                    Ruiwd: function(t, e) {
                        return o.dlQVV(t, e)
                    },
                    lvYBX: o[_0x59ac("0x1a0")],
                    uZJvy: o[_0x59ac("0xfd")],
                    KxlcA: o.QaVXE,
                    ZBQye: o[_0x59ac("0x137")]
                }
                  , i = a[_0x59ac("0x113")](u, t);
                player = this;
                var n = null;
                player.on(o[_0x59ac("0x9a")], function(t) {
                    var r = {
                        eXKvd: function(t, i) {
                            return e.yoQMh(t, i)
                        },
                        ahfiF: e.PScVj,
                        BTSZA: "<h3 style='color:#fff;margin-top:10px;'>视频发生错误，请 <a href='javascript:location.reload()'>点我刷新网页</a>再試一次。<br>若还是无法看，请安装最新版的 <a href ='https://www.google.cn/chrome/' target='_blank'>谷歌浏览器</a> 即可正常观看<br><br>若还是无法观看，请<a href='#' onclick=\"Chatra('show');\">联络客服</a>",
                        YqVpZ: function(t, i) {
                            return e[_0x59ac("0x88")](t, i)
                        },
                        RhkCA: e[_0x59ac("0x1d8")],
                        lLZXD: e[_0x59ac("0xc5")],
                        arpCq: e.xuMbf
                    };
                    if (e[_0x59ac("0xb0")](e.lvYBX, e.uZJvy))
                        r[_0x59ac("0x7c")]($, r.ahfiF).html(r[_0x59ac("0x28")]),
                        currPos = -1,
                        lscache.remove("pb" + hash),
                        lscache[_0x59ac("0x4b")](r.YqVpZ("pb", hash), 0, 14400),
                        $.ajax({
                            type: r[_0x59ac("0xb1")],
                            data: r[_0x59ac("0x1db")] + mplayer[_0x59ac("0x1b4")](),
                            url: r.YqVpZ(r[_0x59ac("0x13b")], hash)
                        });
                    else
                        for (var o = _0x59ac("0x68").split("|"), s = 0; ; ) {
                            switch (o[s++]) {
                            case "0":
                                var u = player.controlBar[_0x59ac("0x14d")](n);
                                continue;
                            case "1":
                                n && n[_0x59ac("0x107")]();
                                continue;
                            case "2":
                                n = new (a[_0x59ac("0x7d")])(player,i);
                                continue;
                            case "3":
                                player[_0x59ac("0xbc")].el()[_0x59ac("0x39")](u.el(), this[_0x59ac("0xbc")][_0x59ac("0x1b0")].el());
                                continue;
                            case "4":
                                n.el()[_0x59ac("0x1c")][_0x59ac("0x9")](e.KxlcA);
                                continue;
                            case "5":
                                n.addClass(e.ZBQye);
                                continue
                            }
                            break
                        }
                })
            })
        }
    }(window, r)
}(),
$(document)[_0x59ac("0x75")](function() {
    var t = {
        jNWaX: "3|4|1|0|2",
        gsxhr: _0x59ac("0x1bf"),
        cjKbS: _0x59ac("0x119"),
        kysuy: "MenuButton",
        HfKXm: "Quality",
        oliSS: function(t, e) {
            return t(e)
        },
        iIeBc: ".bit_hd",
        pzTpZ: _0x59ac("0x124"),
        KnCjI: function(t, e) {
            return t == e
        },
        QhZVM: "fhd",
        kJNQH: _0x59ac("0x185"),
        Qcstp: _0x59ac("0x102"),
        IeaDF: function(t, e) {
            return t(e)
        },
        HDeTU: _0x59ac("0x79"),
        wzvXe: function(t, e) {
            return t > e
        },
        GiFyA: function(t, e) {
            return t - e
        },
        rEEVR: function(t, e) {
            return t >= e
        },
        eUDqf: function(t, e) {
            return t(e)
        },
        KBeNp: _0x59ac("0x80"),
        qAGhT: function(t, e) {
            return t + e
        },
        VKoVK: function(t, e) {
            return t + e
        },
        MbfjP: _0x59ac("0xd0"),
        gSnWx: function(t, e) {
            return t === e
        },
        RgcaE: _0x59ac("0x1e2"),
        KozVE: _0x59ac("0x154"),
        WvZRo: _0x59ac("0x1d7"),
        CQzuL: function(t, e) {
            return t != e
        },
        sjGjW: _0x59ac("0x21"),
        LAphK: function(t, e) {
            return t !== e
        },
        PwBtc: _0x59ac("0x4"),
        xfyed: _0x59ac("0x19d"),
        tHEkx: _0x59ac("0x15c"),
        IyZIY: function(t, e) {
            return t(e)
        },
        HloQm: "#unlock-msg p",
        zyfVa: _0x59ac("0x163"),
        yoMyJ: function(t, e) {
            return t + e
        },
        SyWaS: function(t, e) {
            return t + e
        },
        CSzYb: function(t, e) {
            return t + e
        },
        zuxfn: function(t, e) {
            return t + e
        },
        zHHgM: _0x59ac("0x45"),
        ZSyjN: _0x59ac("0x1a3"),
        VGUjf: _0x59ac("0x7f"),
        Ggdxy: function(t, e) {
            return t !== e
        },
        nEkgF: "MZJNn",
        djbZm: _0x59ac("0x96"),
        WssNa: _0x59ac("0x17f"),
        gdEvX: _0x59ac("0x98"),
        JlHdb: _0x59ac("0xbd"),
        eNmpn: _0x59ac("0x18e"),
        MQsBJ: _0x59ac("0x179"),
        lFdpU: _0x59ac("0xde"),
        vwzcJ: _0x59ac("0x1b0"),
        DsZzl: function(t, e, i, n) {
            return t(e, i, n)
        },
        KOLCI: "my-player",
        lrGHJ: _0x59ac("0x1a5"),
        bakcq: function(t, e) {
            return t(e)
        }
    }
      , e = t.IyZIY(readCookie, _0x59ac("0x17c"))
      , i = !1
      , n = !1
      , r = navigator[_0x59ac("0x123")];
    /Android/i[_0x59ac("0x10")](r) && (i = !0),
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i[_0x59ac("0x10")](r) && (n = !0),
    
   	t[_0x59ac("0x180")](e, _0x59ac("0xf3")) ? e = "fhd" : e == t[_0x59ac("0x84")] ? e = "hd" : "标清" == e && (e = "sd");
    var tmp = t['IyZIY'](mm99, 'avHDl0l.com.av6vo8KD53Zk415875203622120015');
    var a = t[_0x59ac("0x6c")](t[_0x59ac("0x6c")](t.SyWaS(t.CSzYb(t.CSzYb(t[_0x59ac("0x7")](t[_0x59ac("0x15a")](t[_0x59ac("0x81")](avs, _0x59ac("0x114")), hash), t[_0x59ac("0x81")](avs, _0x59ac("0x77"))), ip), t[_0x59ac("0x81")](avs, _0x59ac("0x4f"))) + etime, t[_0x59ac("0x81")](avs, t[_0x59ac("0xca")])) + ux, t[_0x59ac("0x69")]), t[_0x59ac("0x81")](mm99, avs(t[_0x59ac("0x19f")]) + hash + etime + ux))
      , o = 0;

    if (lscache.supported())
        if (t[_0x59ac("0x15d")]("MZJNn", t[_0x59ac("0xfc")]))
            for (var s = t[_0x59ac("0x135")][_0x59ac("0x17b")]("|"), u = 0; ; ) {
                switch (s[u++]) {
                case "0":
                    l[_0x59ac("0x1c")].add(t[_0x59ac("0xcf")]);
                    continue;
                case "1":
                    var l = document[_0x59ac("0xaa")](t[_0x59ac("0x184")]);
                    continue;
                case "2":
                    this.el()[_0x59ac("0x199")](l);
                    continue;
                case "3":
                    videojs.getComponent(t[_0x59ac("0x12d")])[_0x59ac("0x125")](this, player, options);
                    continue;
                case "4":
                    this[_0x59ac("0xa2")](t.HfKXm);
                    continue
                }
                break
            }
        else
            pos = lscache.get(t[_0x59ac("0x15a")]("pb", hash)),
            o = null == pos ? 0 : pos,
            lscache[_0x59ac("0x83")]();
    var c = isIE();
    if (techOrder = [t[_0x59ac("0xd4")], "flash"],
    c && (t[_0x59ac("0x15d")](t[_0x59ac("0x1af")], t[_0x59ac("0x1af")]) ? t.oliSS($, t.iIeBc)[_0x59ac("0x43")] && $(".bit_hd")[_0x59ac("0x29")](t.pzTpZ) : /Trident\/7.0/i[_0x59ac("0x10")](r) && /rv:11.0/[_0x59ac("0x10")](r) && (techOrder = [t[_0x59ac("0x19a")], "html5"])),
    !c || c > 10) {
        if (t.JlHdb === t[_0x59ac("0x8e")])
            return !1;
        i ? cb = {
            children: [{
                name: t[_0x59ac("0x48")]
            }, {
                name: t[_0x59ac("0x192")]
            }, {
                name: _0x59ac("0x1d3")
            }, {
                name: _0x59ac("0x157")
            }, {
                name: t[_0x59ac("0x8f")]
            }]
        } : cb = {
            children: [{
                name: t[_0x59ac("0x48")]
            }, {
                name: "progressControl"
            }, {
                name: _0x59ac("0x157")
            }, {
                name: _0x59ac("0xe8")
            }, {
                name: "volumeControl"
            }, {
                name: t[_0x59ac("0x8f")]
            }]
        };
        var d = t[_0x59ac("0xab")](videojs, t.KOLCI, {
            controlBar: cb,
            techOrder: techOrder,
            plugins: {
                levels: {}
            }
        }, function() {
            var i = {
                AdoRz: function(e, i) {
                    return t[_0x59ac("0x132")](e, i)
                },
                MahKK: t[_0x59ac("0x46")],
                sZSsy: _0x59ac("0xf0"),
                RPWVB: function(e, i) {
                    return t[_0x59ac("0x13c")](e, i)
                },
                csbKB: function(t, e) {
                    return t + e
                },
                siAlz: function(e, i) {
                    return t.VKoVK(e, i)
                },
                aCkZM: function(e, i) {
                    return t[_0x59ac("0x1e1")](e, i)
                },
                SEsYf: t[_0x59ac("0x5b")]
            };
            if (!t[_0x59ac("0xba")](t.RgcaE, t[_0x59ac("0xc7")]))
                return console.log('触发了，妈卖批！');
            var n = this;
            this[_0x59ac("0x4c")]({
                volumeStep: .1,
                seekStep: 5,
                enableModifiersForNumbers: !1,
                enableVolumeScroll: !1
            }),
            n[_0x59ac("0x4d")]("loadedmetadata", function() {
                t[_0x59ac("0x180")](e, t[_0x59ac("0xd2")]) ? t[_0x59ac("0x18a")]($, t.kJNQH)[_0x59ac("0x43")] && $(t[_0x59ac("0x17")])[_0x59ac("0x29")]("click") : t.KnCjI(e, "hd") ? t[_0x59ac("0x189")] === t[_0x59ac("0x189")] ? t[_0x59ac("0x130")]($, t[_0x59ac("0x1cd")])[_0x59ac("0x43")] && $(".bit_hd").trigger(t[_0x59ac("0x31")]) : result("0") : t.KnCjI(e, "sd") && $(t[_0x59ac("0x87")])[_0x59ac("0x43")] && $(t[_0x59ac("0x87")]).trigger(t[_0x59ac("0x31")]),
                t[_0x59ac("0x13e")](o, 0) && Math[_0x59ac("0x120")](t.wzvXe(t[_0x59ac("0x186")](n[_0x59ac("0x11e")](), o), 5)) && n[_0x59ac("0x1b4")](o)
            }),
            n.on(t.KozVE, function() {
                for (var t = "0|2|1|3|4"[_0x59ac("0x17b")]("|"), e = 0; ; ) {
                    switch (t[e++]) {
                    case "0":
                        i[_0x59ac("0xc1")]($, i[_0x59ac("0xb5")])[_0x59ac("0x111")](i[_0x59ac("0x65")]);
                        continue;
                    case "1":
                        lscache[_0x59ac("0x1a6")](i.RPWVB("pb", hash));
                        continue;
                    case "2":
                        o = -1;
                        continue;
                    case "3":
                        lscache[_0x59ac("0x4b")](i[_0x59ac("0xd7")]("pb", hash), 0, 14400);
                        continue;
                    case "4":
                        $[_0x59ac("0x104")]({
                            type: _0x59ac("0x147"),
                            data: i[_0x59ac("0x19c")](_0x59ac("0x187"), n.currentTime()),
                            url: i.aCkZM(i[_0x59ac("0x63")], hash)
                        });
                        continue
                    }
                    break
                }
            }),
            t.eUDqf($, window).on(_0x59ac("0x1c3"), function() {
                lscache[_0x59ac("0x1c9")]() && t[_0x59ac("0x194")](o, 0) && lscache[_0x59ac("0x4b")]("pb" + hash, n[_0x59ac("0x1b4")](), 14400)
            })
        });
        $.ajax({
            url: a,
            success: function(e) {
                var i = {
                    XrcZa: t.WvZRo
                };
                d[_0x59ac("0x67")]({
                    src: e[_0x59ac("0x90")],
                    type: _0x59ac("0xcb")
                }, {
                    hls: !0
                }),
                !n && t[_0x59ac("0x6a")](thumbUrl, "") && (_0x59ac("0x4e") !== t[_0x59ac("0x115")] ? d.spriteThumbnails({
                    interval: 60,
                    url: thumbUrl,
                    width: 180,
                    height: 120
                }) : (levelName = i[_0x59ac("0xbe")],
                label = "hd"))
            },
            error: function(i) {
                if (t[_0x59ac("0x195")](t[_0x59ac("0xd1")], t.PwBtc))
                    e = _0x59ac("0x19");
                else {
                    var i = $[_0x59ac("0xa4")](i[_0x59ac("0xfe")]);
                    t[_0x59ac("0x132")]($, t[_0x59ac("0x10e")]).removeClass(t[_0x59ac("0x143")]),
                    t.IyZIY($, t.HloQm)[_0x59ac("0x111")](i[_0x59ac("0x154")])
                }
            }
        })
    } else
        t[_0x59ac("0x81")]($, t[_0x59ac("0x10e")])[_0x59ac("0xa8")](t[_0x59ac("0x143")]),
        msg = t[_0x59ac("0xce")],
        t.bakcq($, _0x59ac("0x1b8"))[_0x59ac("0x111")](msg)
});

console.log('虚线')


console.log('虚线')