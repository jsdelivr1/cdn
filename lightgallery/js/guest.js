! function(win, doc, body, ap, lazy) {
    ap.length && ap.lightGallery({
        selector: ".album-lightGallery"
    });
    lazy.length && lazy.lazyload();
    var QuestionBox = function(option) {
        var _this = this;
        this.question = option.question;
        this.confirm = option.confirm;
        ! function() {
            var s = '<div class="album-question">';
            s += '<div class="album-question-container">';
            s += '<div class="album-question-title album-question-bar">请回答问题</div><div class="album-question-close">×</div>';
            s += '<div class="album-question-body"><h5>访问此相册需要回答下面的问题</h5><p><lable>问题：</lable>' + _this.question + "</p><p><lable>答案：</lable><input type=text name=answer></p></div>";
            s += '<div class="album-question-footer album-question-bar"><d class=album-question-tips></d><span class="album-question-confirm">确认</span><span class="album-question-cancel">取消</span></div>';
            s += "</div>";
            s += "</div>";
            body.append(s);
            body.css("overflow", "hidden");
            var e = $("body > .album-question"),
                c = e.children(".album-question-container"),
                i = e.find("input");
            if (win.width() <= 400) {
                c.css("width", win.width() - 10 + "px")
            }
            c.css("margin-top", (win.height() / 2 - c.height() / 2) + "px").css("margin-left", (win.width() / 2 - c.width() / 2) + "px");
            i.focus();

            function close() {
                e.off("click", ".album-question-close,.album-question-cancel");
                e.remove();
                body.css("overflow", "auto")
            }!(function m(t, d) {
                $(t).mousedown(function(e) {
                    var isMove = true;
                    var div_x = e.pageX - $(d).offset().left;
                    var div_y = e.pageY - $(d).offset().top;
                    win.mousemove(function(e) {
                        if (isMove) {
                            $(d).css({
                                "margin-left": e.pageX - div_x,
                                "margin-top": e.pageY - div_y - win.scrollTop()
                            })
                        }
                    }).mouseup(function() {
                        isMove = false
                    })
                })
            })(".album-question-title", ".album-question-container");
            ! function(e) {
                e.on("click", ".album-question-close,.album-question-cancel", function() {
                    close()
                });
                e.on("click", ".album-question-confirm", function() {
                    if (i.val() === "") {
                        i.attr("placeholder", "请输入答案");
                        i.focus();
                        return false
                    } else {
                        _this.confirm.call(this, i.val(), function() {
                            close()
                        }, function(s) {
                            var t = e.find(".album-question-tips");
                            i.select();
                            t.html(s);
                            setTimeout(function() {
                                t.html("")
                            }, 1500)
                        })
                    }
                })
            }(e)
        }()
    };
    var events = {
        enterPassword: function(_this) {
            new QuestionBox({
                question: _this.data("question"),
                confirm: function(code, succeed, showmsg) {
                    $.ajax({
                        cache: false,
                        type: "POST",
                        url: ajaxurl + "album&type=viewAlbum&id=" + _this.data("album-id"),
                        data: {
                            code: code
                        },
                        dataType: "json",
                        success: function(res) {
                            if (res.code == 1) {
                                showmsg("验证成功");
                                setTimeout(function() {
                                    succeed();
                                    location.href = res.url
                                }, 500)
                            } else {
                                showmsg(res.msg)
                            }
                        },
                        error: function(r, t, e) {
                            alert("系统繁忙")
                        },
                    })
                }
            })
        },
        lcpbuy: function(){
            var a = $('.lcpbuy');
            $(this).prev().text().indexOf('元') !== - 1?a.click():layer.confirm(`确定花费<b style="color:#f60">${a.data('price')}</b>查看本相册内所有隐藏的图片吗？`,{icon:3},function(){
                a.click();
            });
        }
    };
    body.on("click", "[album-event]", function() {
        var e = $(this).attr("album-event");
        events[e] && events[e].call(this, $(this));
        return false
    });
    zbp.plugin.on("lcp.buy.success", "album", function(r) {
        setTimeout(function() {
            location.reload()
        }, 500)
    })
}($(window), $(document), $("body"), $("#album-photos"), $(".album-photos .album-bgimg"));