function loasCaptchaJs() {
    $.getScript("//g.alicdn.com/sd/smartCaptcha/0.0.4/index.js", function () {
        $.getScript("//g.alicdn.com/sd/nvc/1.1.112/guide.js", function () {
            window.useAliVerify && loadSmartCaptcha()
        })
    })
}

function setCookie(a, b, c, d, e, f) {
    document.cookie = a + "=" + encodeURIComponent(b) + (c ? "; expires=" + c : "") + (d ? "; path=" + d : "") + (e ? "; domain=" + e : "") + (f ? "; secure" : "")
}

function replace_specialChar(a) {
    var b, c;
    for (b = 0; b < spChars.length; b++) c = new RegExp("(\\" + spChars[b] + ")", "g"), a = a.replace(c, spToChars[b]);
    return /^[A-Za-z\s\.,]+$/.test(a) && (a = a.replace(/\s+/g, " ")), a = a.replace(/[^\x09\x0A\x0D\x20-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]/gi, ""), $.trim(a)
}

function getKsAnswer(a) {
    return a ? (a = a.dbc2sbc(), a = a.replace(/\</g, "＜").replace(/\>/g, "＞").replace(/\&/g, "＆").replace(/\!/g, "！").replace(/\^/g, "＾").replace(/\$/g, "＄").replace(/\}/g, "｝")) : ""
}

function pushHistory(a) {
    if (!window.showCoverNoEnd && ("miniprogram" !== window.__wxjs_environment || window.isJieLong) && !window.IsPar && window == window.top) {
        curPageIndex = a || 1;
        var b = {page: curPageIndex};
        window.history.pushState(b, "title", "#" + curPageIndex);
        try {
            window.wxReady && wxReady()
        } catch (c) {
        }
    }
}

function clickJp(a) {
    var b = a.getAttribute("vhref");
    return window.location = b, !0
}

function show_zhezhao_tip(a) {
    var b, c, d, e, f, g, h, i, j, k;
    if (a) {
        if ($("#zhezhaotip")[0]) return;
        b = "", c = "", "miniprogram" === window.__wxjs_environment && (c = "&minip=1"), b = "<div style='width: 100%;height:67px;text-align: center;'><a href='javascript:' onclick='return clickJp(this);' vhref='/newsojiang/mobile/getaward.aspx?sType=3&activity=" + activityId + c + "' style='font-size: 14px;color: #ff7b8f;display:block;'>" + "<div style='text-align: center;padding-top:10px' ><img src='//image.wjx.com/images/mobile/liwu.png' alt='' height='16px' width='16px' style='top: 2px;position: relative;margin-right:4px;' />" + wjxlang.getAward + "</div>" + "<div style='font-size: 12px;color: #adadad;margin-top:4px;'>" + wjxlang.nextcomplete + "</div></a>" + "</div>", d = "border-bottom: 1px solid #D9E4FF;height:126px;", e = "300px", window.canAward && window.allowAward || (b = "", d = "height:126px;", e = "250px"), f = window.hasTouPiao ? wjxlang.isquitTp : wjxlang.isquitTx, g = "<div style='width:100%;'><div class='mainBgColor' style='background:#3064DB;height:80px;color:#fff;text-align:center;padding-top:30px;'>" + f + "</div>" + "<div style='" + d + "'><div class='mainBgColor' style='margin:30px auto 0; background-color: #1D66F0; font-size: 16px; color: #fff; line-height: 40px; height:40px;width:200px; border-radius: 22px;text-align: center;' onclick='show_zhezhao_tip(false);'>" + (window.hasTouPiao ? wjxlang.keeponTp : wjxlang.keeponTx) + "</div>" + "<div style='margin:16px auto 0; background-color: #EBF2FF; font-size: 16px; color: #C0C0C0; line-height: 40px; height:40px;width:200px; border-radius: 22px;text-align: center;' onclick='closeTipWindow(true);'>" + wjxlang.surequit + "</div>" + "</div></div>", h = "<div class='popuptip' style='width:300px;background:#fff;border-radius: 10px;margin: auto;position: absolute; z-index: 9999;overflow: hidden;height:" + e + ";'>" + g + b + "</div>", $("body").append('<div style="z-index:10000;top: 0px;left: 0px;position: fixed;width: 100%;height: 100%;" id="zhezhaotip"><div style="position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;opacity: 0.5;background-color: #000;"></div>' + h + "</div>"), i = $("html").height(), j = $(window).height(), k = 100, k = j > i ? j : i, $("#zhezhaotip").height(k), $(".popuptip").css("left", ($(window).width() - $(".popuptip").width()) / 2), $(".popuptip").css("top", ($(window).height() - $(".popuptip").height()) / 2), setLastPop(), hasShowTip = !0
    } else $("#zhezhaotip").remove()
}

function closeTipWindow(a) {
    var b = wjxlang.isleave;
    window.WeixinJSBridge ? a ? document.referrer && document.referrer != window.location.href.split("#")[0] && !window.access_token ? history.go(-2) : (WeixinJSBridge.call("closeWindow"), wx.closeWindow()) : confirmnew(b, function () {
        document.referrer && document.referrer != window.location.href.split("#")[0] && !window.access_token ? history.go(-2) : (WeixinJSBridge.call("closeWindow"), wx.closeWindow())
    }) : (needGoOut = !0, show_zhezhao_tip(!1), window.close && window.close(), window.history.back())
}

function setLastPop() {
}

function checkCanPop() {
    return window.localStorage ? localStorage["wjxuserpub"] ? !1 : window.location.href.indexOf("?pvw=1") > -1 || window.location.href.indexOf("&pvw=1") > -1 ? !1 : window.isVip ? !1 : 1 == langVer ? !1 : window.canAward ? !0 : !1 : !1
}

function setMatrixFill() {
    (!curMatrixError || curMatrixFill.fillvalue) && $("#divMatrixRel").hide()
}

function setChoice(a) {
    if (-1 != a.selectedIndex) {
        $(a).closest(".ui-select").hasClass("initStyle") && $(a).closest(".ui-select").removeClass("initStyle");
        var b = $(a.parentNode).prev("input");
        b.val(a.value), b.trigger("change")
    }
}

function showMatrixHeader(a, b) {
    var c, d, e, g, h, j, k, l, m, n, o, q, r, s;
    if (!("6" != $(b).attr("type") && "5" != $(b).attr("type") || $(a).parent().hasClass("aloneAnsItemDiv") || window.IsPar)) {
        if (c = $(a).offset(), d = c.top - 9, e = c.left, g = $(a).width(), "6" == $(b).attr("type")) {
            if (h = "true" == $(b).attr("daozhi"), "6" == $(a).attr("mode")) return;
            d = c.top - 9, $(window).width(), j = $(a).parent().parent(), k = $("td", j).index($(a).parent()), l = $("table.matrix-rating", b)[0], m = l.rows[0].cells[k], n = $(m).text(), h && (n = $(a).closest("tr").prev(".rowtitle").children("td").text().trim()), o = 12 * n.length, (o - $(a).width()) / 2, e = c.left + g / 2
        } else !$(a).attr("mode") || "2" != $(a).attr("mode") && "3" != $(a).attr("mode") && "4" != $(a).attr("mode") ? $(a).attr("mode") && "6" == $(a).attr("mode") ? ($(window).width(), c = $(a).offset(), d = c.top - 9, n = $(a).attr("title"), o = 12 * n.length, e = c.left + g / 2) : (q = $(a).height(), 19 == q && (q = 24), d = c.top - 9, n = $(a).attr("title"), o = 12 * n.length, e = c.left + g / 2) : ($(window).width(), c = $(a).offset(), d = c.top - 9, n = $(a).attr("title"), o = 12 * n.length, e = c.left + g / 2);
        $("#divMatrixHeader").html(n), r = $("#divMatrixHeader").outerHeight(), s = $("#divMatrixHeader").outerWidth(), d -= r, e -= s / 2, $("#divMatrixHeader")[0].referTopic = getTopic($(b)), $("#divMatrixHeader").css("top", d + "px").css("left", e + "px").show(), window.matrixheaderTimeout && clearTimeout(matrixheaderTimeout), window.matrixheaderTimeout = window.setTimeout(function () {
            $("#divMatrixHeader").hide()
        }, 2e3)
    }
}

function aloneAnswerToItem(a) {
    var b, c;
    $(a).closest("table").parent().hasClass("aloneAnswer") && $(a).is(":hidden") && (b = $(a).closest("table").find(".rowtitle").toArray(), c = b.indexOf($(a).closest("tr").prev()[0]) + 1, c >= 0 && $(a).closest(".aloneAnswer")[0] && ($(a).closest(".aloneAnswer")[0].rowsIndex = c, $(a).closest(".aloneAnswer")[0].updateprocess(), $(a).closest(".aloneAnswer")[0].showrow()))
}

function showMatrixFill(a, b) {
    var c, d, e, f, g;
    if (aloneAnswerToItem(a), b) {
        if (curMatrixError) return;
        curMatrixError = a
    }
    curMatrixFill = a, c = a.fillvalue || "", $("#matrixinput").val(c), d = $(a).attr("req"), e = "请注明...", d = a.getAttribute("req"), d && (e = "请注明...[必填]"), 1 == langVer && (e = "Please specify"), $("#matrixinput").attr("placeholder", e), f = $(a).offset(), g = f.top - $(a).height() + 45, $("#divMatrixRel").css("top", g + "px").css("left", "0").css("z-index", "10000").show(), $(window).width() >= 800 && ($("#divMatrixRel").css({
        width: "500px",
        left: "50%",
        "margin-left": "-250px"
    }), f.left + 500 < $(window).width() ? $("#divMatrixRel").css({
        left: f.left + "px",
        "margin-left": "0px"
    }) : f.left - 460 > 100 && $("#divMatrixRel").css({left: f.left - 460 + "px", "margin-left": "0px"}))
}

function refresh_validate(a) {
    !window.useAliVerify && a ? (useAliVerify = 1, captchaOjb || loadSmartCaptcha(), $("#captcha").show()) : window.useAliVerify && (isCaptchaValid = !1, captchaOjb && captchaOjb.reload())
}

function showCaptcha() {
    captchaOjb || loadSmartCaptcha(), voteData()
}

function loadSmartCaptcha() {
    captchaOjb = new smartCaptcha({
        renderTo: "#captcha",
        default_txt: smdefaultTxt,
        success_txt: smsuccessTxt,
        scaning_txt: smscaningTxt,
        success: function (a) {
            isCaptchaValid || (isCaptchaValid = !0, nc_token = NVC_Opt.token, nc_csessionid = a.sessionId, nc_sig = a.sig, verifyControl ? (verifyControl.sendActivitySms(1), $("#captcha").hide(), $("#captchaOut").hide()) : 0 == hasSubmitTimes && (hasSubmitTimes++, $("#ctlNext").trigger("click")))
        }
    }), captchaOjb.init(), $("#captcha").hide()
}

function processRadioInput(a, b) {
    a.prevRadio && a.prevRadio.itemText && a.prevRadio != b && (a.prevRadio.itemText.pvalue = a.prevRadio.itemText.value, a.prevRadio.itemText.value = ""), b.itemText && b != a.prevRadio && (b.itemText.value = b.itemText.pvalue || ""), a.prevRadio = b
}

function addClearHref(a) {
    var b, c, d;
    if (!(window.isKaoShi && "1" != $(a).attr("nc") || window.isinterview)) {
        if ($(a)[0].hasClearHref) return $(a)[0].clearHref.style.display = "", void 0;
        b = "1" == $(a).attr("maxdiff"), c = "1" == $(a).attr("conjoint"), c || (d = document.createElement("a"), d.title = validate_info_submit_title2, d.style.color = "#999999", d.style.marginLeft = "16px", d.innerHTML = "[" + type_radio_clear + "]", b && (d.innerHTML = wjxlang.rechiose), d.href = "javascript:void(0);", $(a)[0].hasClearHref = !0, $(a)[0].clearHref = d, b ? (d.className = "mdrechioce", $(a).find(".mdpageWrap").append(d)) : $(a).children(".field-label").append(d), d.onclick = function () {
            clearFieldValue(a, !0), clearGsDsiable($(a)), displayRelationByType(a), TotalValBoxInit(), referTitle(a), this.style.display = "none", jumpAny(!1, a), saveAnswer(a)
        })
    }
}

function clearGsDsiable(a) {
    var b = a.attr("type"), c = a.find(".gs-disable-click"), d = a.find(".gs-tips");
    (3 == b || 4 == b) && c.length && (d.remove(), d.removeClass("gs-tips"))
}

function referTitle(a, b) {
    var c, d, e, f, g;
    if ($(a)[0]._titleTopic) for (c = "", void 0 == b ? (d = "input:checked", "11" == $(a).attr("type") && (d = "span.sortnum-sel"), $(d, a).each(function () {
        var f, g, h, d = $(this).parent().next(), e = d.html();
        "11" != $(a).attr("type") && $(d).attr("for") || (e = d.text()), c && (c += "&nbsp;"), c += e, f = $(this).attr("rel"), f && (g = document.getElementById(f), g && (h = g.value, h && h != defaultOtherText && (c += "[" + h + "]")))
    })) : c = b, e = 0; e < $(a)[0]._titleTopic.length; e++) f = $(a)[0]._titleTopic[e], g = document.getElementById("spanTitleTopic" + f), g && (g.innerHTML = c)
}

function emptyTitle() {
    var a, b;
    needTip() || window.isJieLong || (a = window.location.host, b = a.indexOf(".wjx.cn") > -1 || a.indexOf(".wjx.top") > -1, b && (isWeiXin || window.top != window) && $("title").text(""))
}

function checkPeiE(a, b) {
    var c, d, e, f, g, h, i, j, k, l, m, n;
    if (!hasPeiEFull) {
        if (c = "", d = "", b && "1" == a.attr("req") && "1" == a.attr("peie") && "" == a[0].style.display && (e = !0, $(b, a).each(function () {
            var a = this.disabled;
            return a || "-2" == this.value ? void 0 : (e = !1, !1)
        }), e && (hasPeiEFull = !0, f = a.attr("id").replace("div", ""), window.cityPeiEQues))) for (g = cityPeiEQues.split(";"), h = 0; h < g.length; h++) if (i = g[h].split("|"), 3 == i.length && f == i[0]) {
            d = i[2], c = i[1];
            break
        }
        b && "1" == a.attr("req") && "1" == a.attr("haspeie") && "" == a[0].style.display && (e = !0, j = a.attr("id"), $(b, a).each(function () {
            var b, c, d, f, g, h, a = $(this).attr("attrpeie");
            if (!a) return e = !1, !1;
            if (b = a.split(";"), d = b[0].split("|"), c = "div" + d[0], j == c) {
                if (f = this.disabled, !f && "-2" != this.value) return e = !1, !1
            } else if (g = $("#" + c + " input[type='radio']"), 0 == g.length && (g = $("#" + c + " input[type='checkbox']")), 0 == g.length && (g = $("#" + c + " input[type='hidden']")), h = g.length, 0 == h && (g = $("#" + c + " option"), h = g.length > 0 ? g.length - 1 : g.length), b.length < h) return e = !1, !1
        }), e && (hasPeiEFull = !0)), k = 0, "1" == a.attr("qingjing") && "" == a[0].style.display && "1" == a.attr("full") && (hasPeiEFull = !0, k = 1), hasPeiEFull && (l = wjxlang.peiemessage, window.isPromoteing && (m = a.attr("id").replace("div", ""), n = "/handler/endwjxactivitypromote.ashx?ActivityId=" + activityId + "&sjts=" + prsjts + "&sjsign=" + prsjsign + "&city=" + c + "&ruletype=" + d + "&quid=" + m, window.cityPeiEQues && (n += "&citypeie=" + encodeURIComponent(window.cityPeiEQues)), $.ajax({
            type: "GET",
            url: n,
            async: !1,
            success: function () {
            }
        })), k && (l = wjxlang.peiemessage_qingjing), $(divTip).html(l).show())
    }
}

function iosNumberKey(a) {
    var b = isIosSystem();
    b && a.each(function (a, b) {
        "number" == $(b).attr("type") && ($(b).on("input", function (a) {
            var b, c;
            a.preventDefault(), $(this).attr("type", "text"), b = /\-|^(\-|\+)?\d+(\.\d+)?$/, c = $(this).val(), b.test(c) || $(this).val("")
        }), $(b).on("blur", function (a) {
            a.preventDefault(), $(this).attr("type", "number")
        }))
    })
}

function showQr(a) {
    var b = "1" == a.attr("qrcodeonly"), c = a.parent().find(".qrcode");
    c.click(function () {
        showQrCode(a)
    }), b && (a.click(function () {
        showQrCode(a)
    }), a[0].readOnly = !0)
}

function showQrCode(a) {
    window.wx && wx.scanQRCode({
        needResult: 1, success: function (b) {
            var c = b.resultStr.replace("https://covid-19.orientgene.com/?code=", "");
            $(a).val(c), window.scanCallBack ? window.scanCallBack(a) : $(a).trigger("blur")
        }
    })
}

function displaySwiper(a, b, c) {
    var g, h, d = "out_view" + b,
        e = "<div id=" + d + ' class="swiper_out_view">' + '<ul class="img_list"></ul>' + '<ul class="number_list"></ul>' + '<span class="prev iconfontNew">&#xe681;</span>' + '<span class="next iconfontNew">&#xe682;</span>' + "</div>",
        f = [];
    window.isinterview && (g = a.indexOf("//"), h = new RegExp(wjxlang.ensure + "$"), a = a.substring(g).replace(h, "")), f = a.split("swiper").filter(function (a) {
        return a
    }), c.text(""), c.css("padding", "0"), c.append(e), window.isinterview && c.append('<a class="interviewEnsureBtn mainBgColor" onclick=\'ensureAnswer(this)\' ref="javascript:; ">' + wjxlang.ensure + "</a>"), function (a, b) {
        initSwiper(a, b), enlargeImg($("#" + b + " img"))
    }(f, d)
}

function groupMutual(a) {
    var c, b = $(a).hasClass("ui-checkbox") ? a : $(a).closest(".ui-checkbox")[0];
    $(b).parent().children().eq(0).hasClass("divlabel") && (c = $(b).siblings(), c.each(function (a, b) {
        if ($(b).find("input[type='checkbox']").prop("checked")) {
            $(b).find("input[type='checkbox']").prop("checked", !1);
            var c = $(b).find("input.OtherText")[0];
            c && ($(b).find("input[type='checkbox']").prop("checked") ? c.value = c.pvalue || "" : (c.pvalue = c.value, c.value = "")), $(b).find(".jqcheck")[0].className = "jqcheck"
        }
    }))
}

function getTpDetailUrl(a) {
    var d, b = $(window).scrollTop(), c = window.location.pathname;
    return window.relusername ? (d = window.tpScrollTop || 0, c = location.href.replace("&ptfpar=1&tptop=" + d, ""), c += "&tpii=" + a + "&ftppar=1&tptop=" + b) : c += "?tpii=" + a + "&ftppar=1&tptop=" + b, window.IsPar && (c += "&par=1"), window.sojumpParm && (c += "&sojumpparm=" + encodeURIComponent(sojumpParm), window.parmsign && (c += "&parmsign=" + encodeURIComponent(parmsign)), window.endTs && (c += "&endts=" + endTs), window.isEdit && (c += "&isedit=" + isEdit)), window.udsid && (c += "&udsid=" + window.udsid), location.href.indexOf("wg=1") > -1 && (c += "&wg=1"), location.href.indexOf("&ismob=1") > -1 && (c += "&ismob=1"), c
}

function viewTpDetail(a, b) {
    return a = window.event || a, location.href = getTpDetailUrl(b), a.preventDefault(), a.stopPropagation(), !1
}

function voteMul(a) {
    confirmnew(wjxlang.mtit_tp, function () {
        a ? voteData() : groupAnswer(1)
    }, function () {
    })
}

function voteSin(a) {
    var b = wjxlang.mtit_istp, c = $("#voteMes .vote_dec").text();
    c && (b = wjxlang.mtit_istp_to.replace("{0}", c)), confirmnew(b, function () {
        a ? voteData() : groupAnswer(1)
    }, function () {
    })
}

function voteData() {
    var a = 0, b = $(window).height(), c = $(window).width(), d = (b - 60) / 2 + a, e = (c - 300) / 2;
    0 > e && (e = 0), $("#captchaWrap").css({
        left: e + "px",
        top: d + "px",
        display: "block",
        position: "fixed"
    }), $("#captchaOut").css({
        left: "0px",
        top: "0px",
        display: "block",
        height: "100%",
        width: "100%",
        "z-index": 1e4,
        position: "fixed",
        background: "rgba(0,0,0,0.8)"
    }), $("#captcha").fadeIn("fast").css({
        "padding-left": 0,
        display: "flex",
        "justify-content": "center",
        width: "100%"
    }), $("#captchaTit").show(), $("#captchaOut").unbind("click"), $("#captchaWrap").click(function (a) {
        a.stopPropagation()
    }), $("#captchaOut").click(function (a) {
        a.stopPropagation(), $(this).hide()
    })
}

function isIosSystem() {
    var c, a = navigator.userAgent;
    return navigator.appVersion, c = !!a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), c ? !0 : void 0
}

function isYoukuVideo(a) {
    return a = a.toLowerCase(), a.indexOf("player.youku.com") > -1 || a.indexOf("v.qq.com") > -1 || a.indexOf("/wjx/join/") > -1 ? !0 : void 0
}

function iosIframeVideoHack() {
    var b, c, a = isIosSystem();
    if (!a) return !1;
    for (b = document.getElementsByTagName("iframe"), c = 0; c < b.length; c++) if (isYoukuVideo(b[c].src)) return !0;
    return !1
}

function adjustVideoHeight(a) {
    var b, c, d, e, f;
    if (!a.hasAdjust && $(a).is(":visible")) for (a.hasAdjust = !0, b = a.getElementsByTagName("iframe"), c = 0; c < b.length; c++) "2" == b[c].getAttribute("video") && (b[c].style.width = "100%", d = b[c].clientWidth, e = b[c].parentNode, e && "none" == e.style.display && (d = Math.min($(window).width(), 400) - 50), f = parseInt(d) / 640 * parseInt(b[c].height) + 15, f > 15 && b[c].setAttribute("style", "height:" + parseInt(f) + "px !important"))
}

function replaceImg(a) {
    var b = "http://pubimageqiniu.paperol.cn", c = "//pubnewfr.paperol.cn";
    0 == a.src.indexOf("http://pubssl.sojump.com") || 0 == a.src.indexOf("https://pubssl.sojump.com") || 0 == a.src.indexOf("http://pubimage.sojump.com") || 0 == a.src.indexOf("http://pubimage.sojump.cn") || 0 == a.src.indexOf("http://pubssl.sojump.cn") ? a.src = a.src.replace("http://pubssl.sojump.com", b).replace("https://pubssl.sojump.com", b).replace("http://pubimage.sojump.com", b).replace("http://pubimage.sojump.cn", b).replace("http://pubssl.sojump.cn", b) : (0 == a.src.indexOf("http://pubalifr.sojump.com") || 0 == a.src.indexOf("https://pubalifr.sojump.com") || 0 == a.src.indexOf("https://pubali.sojump.com") || 0 == a.src.indexOf("http://pubali.sojump.com") || 0 == a.src.indexOf("http://pubali.sojump.cn") || 0 == a.src.indexOf("http://pubalifr.sojump.cn") || 0 == a.src.indexOf("https://pubali.sojump.cn") || 0 == a.src.indexOf("https://pubalifr.sojump.cn")) && (a.src = a.src.replace("http://pubalifr.sojump.com", c).replace("https://pubalifr.sojump.com", c).replace("http://pubali.sojump.com", c).replace("https://pubali.sojump.com", c).replace("http://pubali.sojump.cn", c).replace("https://pubali.sojump.cn", c).replace("http://pubalifr.sojump.cn", c).replace("https://pubalifr.sojump.cn", c))
}

function showAnswer(a, b) {
    var c, d, e;
    if (window.isChuangGuan && (c = 3 == window.isChuangGuan, 4 != window.isChuangGuan && "1" == a.attr("ceshi"))) {
        if (2 == window.isChuangGuan) return canNext(a, b), void 0;
        d = $(a)[0], d.confirmButton || (e = document.createElement("a"), c ? e.className = "lxEnsureBtn mainBgColor" : (e.style.marginTop = "5px", e.className = "sumitbutton cancle"), d.insertBefore(e, d.lastChild), d.confirmButton = e, e.innerHTML = wjxlang.ensure, fixBottom(), e.onclick = function () {
            var e, f, g, h, i, j;
            (0 != $(a).find("input[type='radio']:checked").length || 0 != $(a).find("input[type='checkbox']:checked").length) && (d.hasConfirm = !0, hasConfirmBtn = !0, e = !0, f = "", g = "", b.each(function () {
                var a = "1" == this.getAttribute("ans"), b = $("input", this)[0], c = $(".label[for]", this).text();
                /^[A-Z][\.、．\s]/.test(c) && (c = c.substring(0, 1)), a ? (b.checked ? (g && (g += "｜"), g += c) : e = !1, f && (f += "｜"), f += c) : b.checked && (e = !1)
            }), d.correctAnswer || (h = document.createElement("div"), h.style.marginTop = "10px", d.insertBefore(h, d.lastChild), d.correctAnswer = h), i = e ? "<img style='width:20px;vertical-align:middle' src='/images/comImg/lxright.png'/><span style='color:#01AD56;vertical-align:middle;margin-left:4px;'>" + wjxlang.lx_answer_right + "</span>" : "<img style='width:20px;vertical-align:middle' src='/images/comImg/lxerror.png'/><span style='color:#FF4040;vertical-align:middle;margin-left:4px;'>" + wjxlang.lx_answer_error.replace("{0}", f) + "</span>", d.correctAnswer.innerHTML = i, c && $(this).hide(), j = document.getElementById("divjx" + d.id.replace("div", "")), j && (j.style.display = ""), fixBottom())
        })
    }
}

function restoreAnswer() {
    var b, c, d, e, f, g, h, i, j, k, a = null;
    if (window.joinIdnew && window.answertext) a = window.answertext; else {
        if (!window.localStorage) return null;
        if (wjxdata.isolduser()) {
            if (b = localStorage["wjxtempanswerid"], b != activityId) return null;
            if (window.randomMode) return;
            if (c = "wjxtempanswer", a = localStorage[c], !a) return null;
            if (d = localStorage["wjxtempanswerdat"], !d) return null;
            if (e = window.qBeginDate || 0, 0 > d - e) return null
        } else {
            if (f = wjxdata.get().wjxanswerdata, !f) return;
            if (window.randomMode) return;
            if (a = f.wjxtempanswer, !a) return null;
            if (d = f["wjxtempanswerdat"], !d) return null;
            if (e = window.qBeginDate || 0, 0 > d - e) return null
        }
    }
    for (g = a.split(spChars[1]), h = new Array, i = 0; i < g.length; i++) j = g[i].split(spChars[0]), k = new Object, k._value = j[1], k._topic = j[0], h.push(k);
    return h
}

function saveAnswer(a) {
    var b, d, e, f, g, h, i, j, k;
    if (!window.isinterview && (showProgressBar(a), window.localStorage && !(hasQingJing || !window.needSaveJoin && window.isKaoShi || window.zunxiangParas && window.zunxiangParas["q" + getTopic(a)] || window.cepingCandidate && (1 == window.OneaTime || 1 == window.oneDept) || 2 == window.isChuangGuan || window.joinIdnew && window.ishydj || window.randomMode || isLoadingAnswer))) try {
        for (b = "wjxtempanswer", localStorage[b], d = restoreAnswer(), null == d && (d = new Array), e = getTopic(a), f = new Object, g = $(a).attr("type"), f._topic = e, f._value = "", getAnswer(a, f, g, !0), h = !1, i = 0; i < d.length; i++) if (d[i]._topic == f._topic) {
            h = !0, d[i]._value = f._value;
            break
        }
        for (h || d.push(f), d.sort(function (a, b) {
            return a._topic - b._topic
        }), j = "", i = 0; i < d.length; i++) i > 0 && (j += spChars[1]), j += d[i]._topic, j += spChars[0], j += d[i]._value;
        saveSubmitAnswer(j), k = localStorage["wjxnextuse"], k && localStorage.removeItem("wjxnextuse")
    } catch (l) {
    }
}

function saveSubmitAnswer(a) {
    if (window.localStorage) {
        var b = {
            wjxtempanswer: a,
            wjxtempanswerid: activityId,
            wjxtempanswerdat: (new Date).getTime(),
            wjxsavepage: cur_page,
            wjxfirstloadtime: fisrtLoadTime
        };
        wjxdata.set(b)
    }
}

function clearAnswer(a) {
    var b, c, d;
    try {
        if (window.setCookieNew && 0 == window.informedShowTimes && setCookieNew("ain" + activityId, 0, 0), !window.localStorage) return;
        if (b = wjxdata.isolduser(), b && (c = localStorage["wjxtempanswerid"], c != activityId)) return;
        d = needSaveTmp(), a || !d ? (wjxdata.clear(), localStorage.removeItem("wjxnextuse")) : localStorage.setItem("wjxnextuse", activityId), b ? (localStorage.removeItem("wjxfirstloadtime"), localStorage.removeItem("wjxlastcosttime")) : wjxdata.clear("wjxfirstloadtime,wjxlastcosttime")
    } catch (e) {
        console.log(e)
    }
}

function isNullAnswer(a, b) {
    var d, e, f, c = !1;
    switch (a) {
        case"21":
            -2 == b && (c = !0);
            break;
        case"12":
            for (d = b.split(spChars[2]), c = !0, e = 0; e < d.length; e++) f = d[e].split(spChars[4]), f[1] > 0 && (c = !1);
            break;
        default:
            c = !1
    }
    return c
}

function loadAnswer() {
    var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M,
        N, O, P, Q, R, S, T, U, V, W, X, Y, Z, _, ab, bb, cb, db, eb, fb, gb, hb, ib, b = restoreAnswer();
    if (null != b) {
        for (window.initContentShow && window.isMobile && initContentShow(), ktimes++, wjxdata.isolduser() ? localStorage["wjxfirstloadtime"] && (lastCostTime = localStorage["wjxtempanswerdat"] - localStorage["wjxfirstloadtime"], localStorage["wjxlastcosttime"] && (lastCostTime += parseInt(localStorage["wjxlastcosttime"])), localStorage.setItem("wjxlastcosttime", lastCostTime)) : (c = wjxdata.get().wjxanswerdata, c && (d = c.wjxfirstloadtime, e = c.wjxtempanswerdat, f = c.wjxlastcosttime, d && (lastCostTime = e - d, f && (lastCostTime += parseInt(f)), wjxdata.updata("wjxlastcosttime", lastCostTime)))), isLoadingAnswer = !0, g = 0, window.joinIdnew || (g = wjxdata.isolduser() ? localStorage["wjxsavepage"] : wjxdata.get().wjxanswerdata && wjxdata.get().wjxanswerdata.wjxsavepage), h = !1, i = 0; i < b.length; i++) if (j = b[i]._topic, k = b[i]._value, k && (l = $("#div" + j), l[0] && !("none" == l[0].style.display && "-1" != l.attr("relation") || window.zunxiangParas && window.zunxiangParas["q" + j] || (m = $(l).attr("type"), isNullAnswer(m, k))))) switch (cur_page = l[0].pageIndex || 0, (3 == window.isChuangGuan || 4 == window.isChuangGuan) && $(l).attr("skip", "1"), m) {
            case"1":
                n = $("input", l), n.val(k), 1 != l.attr("req") && addClearHref(l[0]), window.joinIdnew && 1 != n.attr("hasgs") ? window.joinIdnew && referTitle(l, k) : n.trigger("blur"), n.parent().hasClass("getLocalBtn") && (o = "1" == n.attr("needonly"), !o && !matchDayTitle() || window.joinIdnew ? n.parent().prev().text(k).show() : n.val(""));
                break;
            case"2":
                k = k.split("<br/>").join("\n"), $("textarea", l).val(k).trigger("blur");
                break;
            case"3":
                p = k.split(spChars[2]), $("input", l).each(function () {
                    var b,
                        a = "radio" == this.type && this.value == p[0] && "none" == this.parentNode.parentNode.style.display;
                    return a || this.value == p[0] && this.disabled ? (h = !0, void 0) : ("radio" != this.type || this.value != p[0] || this.disabled || (p[1] && (b = $(this).attr("rel"), b && $("#" + b).val(p[1])), l[0].prevRadio = this, $(this.parentNode.parentNode).trigger("click")), void 0)
                });
                break;
            case"4":
                q = k.split(spChars[3]), $("input", l).each(function () {
                    var a, b, c, d, e, f;
                    if ("checkbox" != this.type) return !0;
                    if (window.cepingCandidate && "none" == this.parentNode.parentNode.style.display) return !0;
                    for (a = this.value, b = this.checked, c = !1, d = 0; d < q.length; d++) if (e = q[d].split(spChars[2]), e[0] == a && !this.disabled) {
                        e[1] && (f = $(this).attr("rel"), f && ($("#" + f).val(e[1])[0].pvalue = e[1])), b || $(this.parentNode.parentNode).trigger("click"), c = !0;
                        break
                    }
                    b && !c && $(this.parentNode.parentNode).trigger("click")
                });
                break;
            case"5":
                if (r = [], s = k, 1 == l.attr("pj") && k && (t = k.split(spChars[2]), 2 == t.length && (r = t[1].split("、"), s = t[0])), $(".rate-off", l).each(function () {
                    this.getAttribute("val") == s && $(this).parent().trigger("click")
                }), 1 == l.attr("pj") && r.length > 0) {
                    for (u = l.find(".evaluateTagDiv").eq(s - 1), v = r[r.length - 1], w = !1, x = $(".evaluateTagItem", u), y = 0; y < r.length; y++) x.each(function () {
                        var a = $(this).text();
                        a == r[y] && $(this).trigger("click"), a == v && (w = !0)
                    });
                    if (!w) if ($(".writeRvaluate", u).trigger("click"), z = $(".wjxui_limit_box", u).show().find("textarea"), z.length > 1) for (A = r.length, B = 0, C = 2; C > 0; C--) z[B] && r[A - C] && $(z[B]).val(r[A - C]).trigger("blur"), B++; else $(z[C]).val(v).trigger("blur")
                }
                break;
            case"7":
                $("option", l).each(function () {
                    if (this.value == k && !this.disabled) {
                        try {
                            $("select", l).val(k).trigger("change")
                        } catch (a) {
                            console.log(a.message)
                        }
                        return !1
                    }
                });
                break;
            case"11":
                if (q = k.split(","), D = $("li.ui-li-static", l), window.joinIdnew) {
                    for (E = new Array, F = 1; F < D.length + 1; F++) {
                        for (G = !0, B = 0; B < q.length; B++) if (q[B] >= F && (G = !1, q[B] == F)) {
                            E.push((B + 1).toString());
                            break
                        }
                        if (G) break
                    }
                    q = E
                }
                for (C = 0; C < q.length; C++) for (H = q[C].split("^"), B = 0; B < D.length; B++) if (k = $(D[B]).find("input:hidden").val(), k == H[0]) {
                    $(D[B]).trigger("click"), I = $(D[B]).find("input.OtherText"), H[1] && I[0] && (I.val(H[1]), $(I).trigger("blur"));
                    break
                }
                break;
            case"8":
                J = $("input", l), J.val(k), "1" == J.attr("hasgs") && J.blur(), K = l.attr("hasjump"), K && $(J).trigger("change");
                break;
            case"21":
                for (q = k.split(spChars[3]), L = $("input", l), M = "1" == $(l).attr("isshelf"), F = 0; F < q.length; F++) N = q[F].split(spChars[2]), O = parseInt(N[0]) - 1, M ? $(l).children(".shelfwrap")[0].shoparr[O].selected = !0 : $(L[O]).val(N[1]);
                M ? shelfsetans(l) : updateCart(l);
                break;
            case"12":
            case"33":
            case"34":
            case"9":
                for (P = k.split(spChars[2]), Q = new Object, F = 0; F < P.length; F++) R = P[F].split(spChars[4]), 2 == R.length && (Q[R[0]] = R[1]);
                K = l.attr("hasjump"), S = "input", "33" == m && (S = ".file"), "34" == m && (S = "textarea"), "9" == m && (S = "input:not(.file input[type=file]), .file"), $(S, l).each(function (a) {
                    var c, d, e, f, b = $(this);
                    return "12" == m && window.hasReferClient && (c = this.parentNode.parentNode.parentNode, c && "none" == c.style.display) ? !0 : (e = this.className.indexOf("file") > -1, d = "33" == m || e ? /_(\d+)$/.exec(b[0].parentNode.parentNode.getAttribute("id"))[1] : b.attr("rowid"), "33" == m || e ? (b[0].parentNode.fileName = Q[d] || "", Q[d] && b.siblings(".uploadmsg").html(UPLOAD_FILE_SUCCESS)) : (f = d ? Q[d] : P[a], "Ⅳ" == f && (f = ""), b.val(f), 1 == b.attr("hasgs") && b.blur()), b.next().hasClass("textEdit") && f && (b.next().removeClass("initStyle").children(".textCont").html(f).css({
                        display: "inline",
                        width: "auto"
                    }), 1 == b.attr("hasgs") && b.next().removeClass("initStyle").children(".textCont").blur()), "指定选项" == b.attr("verify") && b.val() && b.next().find("select").val(b.val()).trigger("change"), $(b).trigger("change"), void 0)
                });
                break;
            case"13":
                if ("(空)" == k) break;
                if (l.attr("splicing") && !window.joinIdnew && !window.isChuangGuan) break;
                l[0].fileName = k || "", k && ($(".uploadmsg", l).html(UPLOAD_FILE_SUCCESS), l.find(".heatmapWrap").length > 0 && (l.find(".heatmapWrap").attr("fn", k), heatMapInit(l, !0)), l.attr("hasjump") && jump(l, ""));
                break;
            case"10":
                for (P = k.split(spChars[2]), Q = new Object, F = 0; F < P.length; F++) R = P[F].split(spChars[4]), 2 == R.length && (Q[R[0]] = R[1]);
                T = "input,textarea", U = !1, "1" == l.attr("select") && (T = "select", U = !0), K = l.attr("hasjump"), V = "table", W = !1, "1" == l.attr("fixedslider") && (W = !0), W && (V = ".ui-table-scroll .ui-table-tbody tr[rowid]"), $(V, l).each(function (a) {
                    var d, e, f, g, h, b = this, c = b.parentNode;
                    if (W && (c = b), d = c.getAttribute("rowid"), e = Q[d], !e) return !1;
                    if (f = e.split(spChars[3]), (window.hasReferClient || l.attr("zizeng")) && (g = c, g && "none" == g.style.display)) {
                        if ("Ⅳ" == f[0]) return !0;
                        $(".increase-btn", l).click()
                    }
                    h = 0, $(T, this).each(function () {
                        if (this.value = f[h] || "", a >= l.attr("minvalue") && this.value && "none" == c.style.display && (c.style.display = c.previousElementSibling.style.display = ""), "多行文本" == $(this).attr("verify") && (this.value = this.value.replace(/\<br\/\>/g, "\n")), !U) {
                            var b = $(this);
                            this.value && $(this).attr("hasgs") && $(this).blur(), "指定选项" == b.attr("verify") && b.val() && b.next().find("select").val(b.val()).trigger("change")
                        }
                        U ? $(this).trigger("change") : K && $(this).trigger("change"), h++
                    })
                });
                break;
            case"6":
                for (P = k.split(","), Q = new Object, F = 0; F < P.length; F++) R = P[F].split(spChars[4]), 2 == R.length && (Q[R[0]] = R[1]);
                for (X = $(l).attr("ischeck"), Y = $("table.matrix-rating", l), Z = Y[0].rows, _ = "true" == $(l).attr("daozhi"), ab = "1" == $(l).attr("alone"), F = 0; F < Z.length; F++) if (bb = Z[F], cb = bb.getAttribute("tp"), "d" == cb) {
                    if (_) {
                        for (db = $(bb).children(), eb = 0; eb < db.length; eb++) R = P[eb], fb = $(db[eb]).attr("fid"), gb = Y.find("td[fid='" + fb + "']"), hb = eb + 1, $(".rate-off", gb).each(function () {
                            var b, c, d, a = $(this).attr("dval");
                            if (Q[hb]) if (X) for (b = Q[hb].split(";"), c = 0; c < b.length; c++) d = b[c].split(spChars[2]), a == d[0] && (d[1] && (this.fillvalue = d[1]), $(this).trigger("click")); else b = Q[hb].split(spChars[2]), a == b[0] && (b[1] && (this.fillvalue = b[1]), $(this).trigger("click"))
                        });
                        break
                    }
                    (!window.hasReferClient || "none" != bb.style.display || ab) && (ib = parseInt(bb.getAttribute("rowindex")) + 1, R = P[ib], $(".rate-off", bb).each(function () {
                        var b, c, d, a = $(this).attr("dval");
                        if (Q[ib]) if (X) for (b = Q[ib].split(";"), c = 0; c < b.length; c++) d = b[c].split(spChars[2]), a == d[0] && (d[1] && (this.fillvalue = d[1]), $(this).trigger("click"), aloneAnswerToItem(this)); else b = Q[ib].split(spChars[2]), a == b[0] && (b[1] && (this.fillvalue = b[1]), $(this).trigger("click"))
                    }))
                }
        }
        if (cur_page = 0, (3 == window.isChuangGuan || 4 == window.isChuangGuan) && (h = !0, cur_page = 0), g && g >= cur_page + 1 && !h && (pageHolder[0].style.display = "none", cur_page = g - 1, wjxdata.updata("wjxsavepage", g), show_next_page(!0)), isLoadingAnswer = !1, window.zunxiangAutoClick && cur_page > 0) for (C = 0; cur_page > C; C++) zunxiangAutoClick(C);
        count360Val()
    }
}

function needTip() {
    if (window.divTip && "" == divTip.style.display) {
        $("img", divTip)[0] && (divTip.style.background = "none", divTip.style.color = "#333");
        var a = $.trim($(divTip).text());
        if (a) return !0
    }
    return !1
}

function loadMinMaxTime() {
    window.hasPageTime && (window.divFengMian || 3 == isChuangGuan || 4 == isChuangGuan || processMinMax())
}

function hasAnswerData(a) {
    if (!a) return !1;
    for (var b = 0; b < a.length; b++) if (a[b]._value && "(空)" != a[b]._value) return !0;
    return !1
}

function checkAnswer() {
    var a, b, c, d, e;
    window.localStorage && (a = window.maxSurveyTime || $("fieldset[maxtime]").length > 0, b = window.isSingleVote && window.isMultipleChoice && !window.touPiaoItemIndex, c = localStorage["wjxnextuse"] == activityId, !c || window.joinIdnew || b || window.isSingleVote || needTip() ? !window.touPiaoItemIndex && (window.needSaveJoin || b || window.joinIdnew) ? (window.gsdata && gsdata.length && getNewGsList("isNeedSave"), aloneAnswer(), loadAnswer()) : !window.localStorage || window.isSingleVote || window.isJieLong || needTip() || window.isKaoShi || window.needLogin || a || window.notLoadAnswer || window.isinterview || window != window.top || (d = restoreAnswer(), hasAnswerData(d) && (e = wjxlang.load_answer, needConfirmAnswer = !0, confirmnew(e, function () {
        loadAnswer(), loadMinMaxTime();
        var a = null;
        if (wjxdata.isolduser()) a = localStorage["wjxtempanswer"]; else {
            a = wjxdata.get().wjxanswerdata;
            try {
                window.JSON && JSON.stringify && (a = JSON.stringify(a))
            } catch (b) {
            }
        }
        a && addtoactivitysave(a)
    }, function () {
        clearAnswer(!0), loadMinMaxTime()
    }))) : (d = restoreAnswer(), hasAnswerData(d) && confirmnew(wjxlang.tit_loaddate, function () {
        loadAnswer(!0)
    }, function () {
        clearAnswer(!0)
    })))
}

function hideAward() {
    confirmnew("确认不再领取吗？", function () {
        return window.localStorage && (vkey = "award_" + activityId, localStorage.removeItem(vkey), localStorage.removeItem(vkey + "name"), localStorage.removeItem(vkey + "tip")), 3 == window.isChuangGuan || 4 == window.isChuangGuan ? ($(".fmWrap").prev().hide(), void 0) : ($("#divContent").show().prev().hide(), initSlider(), void 0)
    })
}

function processAward() {
    var b, c, d, e, f, g, a = "join_" + activityId;
    document.cookie && -1 != document.cookie.indexOf(a + "=") && (window.isChuangGuan || (a = "award_" + activityId, b = "", c = "", window.localStorage && (b = localStorage[a], c = localStorage[a + "name"] || ""), b && 0 == b.indexOf("http") && (d = localStorage[a + "tip"], e = "", d && (e = " onclick='alert(\"" + d + "\");return true;' "), f = "<div id='awardReceiveDiv' style='margin:10px auto;width:90%;max-width:360px;'>恭喜您抽中了" + c + "，如已领取请忽略！<div style='text-align:center;width:200px;margin:15px auto 0;'><a href='" + b + "'" + e + " class='button white' target='_blank' style='color:#fff; background:#FF9600;border:none;'>立即领取</a></div><div style='margin-top:18px;text-align:center;'><a href='javascript:' onclick='hideAward();' style='color:#666;font-size:14px;'>不领取，重新填写问卷</a></div></div>", $("#divContent").before(f), $("#divContent").hide(), g = $("#reportfooter a.reportto"), g[0] && c && (g[0].href += "&q6=" + encodeURIComponent(c.replace("(", "").replace(")", ""))))))
}

function isImgLoad(a) {
    $("#divTip img").each(function () {
        return 0 === this.height ? (t_isLoad = !1, !1) : void 0
    }), t_isLoad ? (clearTimeout(t_img), a()) : (t_isLoad = !0, t_img = setTimeout(function () {
        isImgLoad(a)
    }, 500))
}

function postHeight() {
    var a, b;
    if (window != window.top) try {
        if (a = parent.postMessage ? parent : parent.document.postMessage ? parent.document : null, null != a) {
            if (window.hasBackground && !IsPar && $("#divBackgroundWrap").css({
                "background-size": "100%",
                "background-repeat": "repeat-y"
            }), !(window.divTip && "" == divTip.style.display && $("#divTip img").length > 0)) return b = $("#pageDiv").outerHeight(), a.postMessage("heightChanged," + b, "*");
            $("#divTip").css("position", "static"), isImgLoad(function () {
                return b = $("#pageDiv").outerHeight(), a.postMessage("heightChanged," + b, "*")
            })
        }
    } catch (c) {
    }
}

function saveMatrixFill(a, b) {
    var f, g, h, c = "true" == $(a).closest(".field").attr("daozhi"), d = $(a).closest("tr")[0],
        e = d.getAttribute("fid");
    c && (e = $(a).closest("td").attr("fid")), e && (f = "", b ? (g = $(".rate-on", d), c && (g = $(a).closest("table").find("td[fid='" + e + "']").find(".rate-on")), g.each(function () {
        if (f && (f += ";"), f += $(this).attr("dval"), this.fillvalue) {
            var a = replace_specialChar(this.fillvalue).replace(/;/g, "；").replace(/,/g, "，");
            f += spChars[2] + a
        }
    })) : (f = $(a).attr("dval"), a.fillvalue && (h = replace_specialChar(a.fillvalue).replace(/;/g, "；").replace(/,/g, "，"), f += spChars[2] + h)), $("#" + e).val(f))
}

function saveLikert(a) {
    var b = $("a.rate-on", a), c = "";
    0 == b.length ? $("input:hidden", a).val("") : (c = $(b[b.length - 1]).attr("title"), $("input:hidden", a).attr("value", $(b[b.length - 1]).attr("val"))), referTitle(a, c)
}

function debounceHandler(a, b, c) {
    var d = null;
    return function () {
        var e = this;
        d && clearTimeout(d), c ? (d || a.apply(e), d = setTimeout(function () {
            d = null
        }, b)) : d = setTimeout(function () {
            a.apply(e)
        }, b)
    }
}

function initRate(a, b) {
    var e, c = "true" == $(a).attr("daozhi"), d = $(a).attr("ischeck");
    !window.isMobile && c && ($(".rate-off", a).parent().mouseover(function () {
        var a = $(this).index();
        $(this).closest("table").find(".trlabel th").eq(a).addClass("themeactive").siblings().removeClass("themeactive")
    }), $(a).mouseleave(function () {
        $(this).find(".trlabel th").removeClass("themeactive")
    })), e = $(".rate-off", a).parent(), e.hasClass("aloneAnsItemDiv") && (e = $(".rate-off", a)), e.bind("click", function (e) {
        var g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, f = $("a", this)[0];
        if ($(this).hasClass("rate-off") && (f = $(this)[0]), g = !0, d) CheckMax(f, b, c, d) && (h = !0, i = $(a).attr("maxvalue"), c && window.isMobile && (j = $(this).index(), $(this).closest("table").find(".trlabel th").eq(j).addClass("themeactive").siblings().removeClass("themeactive")), i && !$(f).hasClass("rate-on") && (k = $("a.rate-on", this.parentNode), c && (l = $(this).attr("fid"), k = $(this).closest("table").find("td[fid='" + l + "']").find("a.rate-on")), i - k.length <= 0 && (h = !1)), h ? ($(f).toggleClass("rate-on"), $(f).toggleClass("rate-onchk"), $(f).trigger("change")) : (m = wjxlang.check_duoxuan.replace("{0}", i), alertNew(m))); else {
            if (!CheckMax(f, b, c)) return g = !1, void 0;
            n = $(this.parentNode).find("a.rate-off"), c && (l = $(this).attr("fid"), window.isMobile && (j = $(this).index(), $(this).closest("table").find(".trlabel th").eq(j).addClass("themeactive").siblings().removeClass("themeactive")), n = $(this).closest("table").find("td[fid='" + l + "']").find("a.rate-off")), n.removeClass("rate-on"), o = $(f).attr("mode"), o ? (n.removeClass("rate-on" + o), p = f, n.each(function () {
                return $(this)[0].offsetWidth, $(this).toggleClass("rate-on"), $(this).toggleClass("rate-on" + o), this == p ? !1 : void 0
            })) : ($(f).toggleClass("rate-on"), $(f).text() || (n.removeClass("rate-ontxt"), $(f).toggleClass("rate-ontxt"))), count360Val(), $(f).trigger("change"), $(f).closest("table").parent().hasClass("aloneAnswer") && !$(f).attr("needfill") && (window.isLoadingAnswer ? $(f).closest("table").next(".apageWrap").children(".apagenext").click() : window.hasclickalonenext || (window.hasclickalonenext = !0, setTimeout(function () {
                window.hasclickalonenext = !1, $(f).closest("table").next(".apageWrap").children(".apagenext").click()
            }, 500)))
        }
        $(f).hasClass("rate-on") ? (o = $(f).attr("mode"), o || (q = $(f).attr("needfill"), q && !isLoadingAnswer && (showMatrixFill(f), e.stopPropagation()), !q && curMatrixError && curMatrixError != f && (curMatrixError = null)), e.pageX && showMatrixHeader(f, a)) : curMatrixError && curMatrixError == f && (curMatrixError = null), showEvaluate(f, a), r = !1, b && (s = $(f).attr("dval"), t = $(f).closest("tbody"), "tbody" == t[0].tagName.toLocaleLowerCase() && (u = t.find("tr.trlabel").eq(0), v = u.find("th"), v.eq(s - 1) && (w = v.eq(s - 1).attr("itemmax"), w && window.cepingCandidate && "-1" != w.indexOf("%") && (x = parseInt(w.replace("%", "")), y = cepingCandidate.split("&nbsp;&nbsp;&nbsp;"), w = Math.ceil(y.length * x / 100)), w && w > 0 && (r = !0)))), !r && "1" == a.attr("req") || d || addClearHref(a), $("span.error", a).is(":visible") && validateQ(a), b ? saveMatrixFill(f, d) : saveLikert(a, this), ("6" == a.attr("type") || "5" == a.attr("type")) && displayRelationByType(a), jump(a, f), g && saveAnswer(a), ("6" == a.attr("type") && !d && 0 == popUpindex || "5" == a.attr("type") && 0 == itempopUpindex) && processSamecount(a, this), e.preventDefault()
    })
}

function processSamecount(a, b) {
    var c, d, e, f, g, h, i;
    if (window.IsSampleService) if (c = $("a.rate-off", b), "6" == a.attr("type")) {
        for (d = c.eq(0).attr("dval"), e = $("a.rate-off", a), f = 0, g = 0; g < e.length; g++) if (e.eq(g).attr("dval") == d && e.eq(g).hasClass("rate-on") && f++, f > 4) {
            popUpindex++, alertNew("你有连续多个答案相同，如果你是随意答题，请返回修改，以免答卷提交后无法通过审核");
            break
        }
    } else if ("5" == a.attr("type")) for (d = c.eq(0).attr("val"), h = parseInt(a.attr("id").replace("div", "")) - 1, f = 0, g = h; g >= 1 && (i = $("#div" + g), "5" == i.attr("type")); g--) if (e = $("a.rate-off", i), e.eq(d - 1).attr("val") == d && e.eq(d - 1).hasClass("rate-on") && f++, f > 3) {
        itempopUpindex++, alertNew("你有连续多个答案相同，如果你是随意答题，请返回修改，以免答卷提交后无法通过审核");
        break
    }
}

function updateCart(a) {
    var g, h, i, j, k, l, m, n, b = $("#divQuestion"), c = "", d = 0, e = 0, f = null;
    if (shopArray.length > 0) {
        for (g = "", h = 0; h < shopArray.length; h++) "none" != shopArray[h].style.display && (i = $(shopArray[h]).attr("id"), g && (g += ","), g += "#" + i);
        g && (j = $(g), f = $(".shop-item", j))
    } else f = $(".shop-item", b);
    f && (f.each(function () {
        var h, i, j, k, f = $(".itemnum", this), g = parseInt(f.val());
        return 0 == g ? !0 : (h = $(".item_name", this).html(), i = $(".item_price", this).attr("price"), j = g * parseFloat(i), k = '<li class="productitem"><span class="fpname">' + h + '</span><span class="fpnum">x' + g + '</span><span class="fpprice">￥' + toFixed0d(j) + "</span></li>", c += k, d += j, e += g, void 0)
    }), k = 0, l = $(a).find(".shop-item"), m = l.length, l.each(function (a) {
        var f, g, h, c = $(".itemnum", this), d = parseInt(c.val());
        $(".item_name", this).html(), f = $(".item_price", this).attr("price"), g = d * parseFloat(f), $(".item_price", this).html("￥" + toFixed0d(g)), k += g, m == a + 1 && (h = toFixed0d(k), $(this).nextAll(".li_price").find(".theTotalPrice").html("￥" + h))
    }), n = wjxlang.settlelist, c = "<ul class='productslist'><li><span class='fpname' style='font-weight:bold; font-size:14px; padding-bottom:16px;'>" + n + "</span></li>" + c + '<li class="productitem"><span class="fpname"></span><span class="fpnum" style="color:#333">x' + e + '</span><span class="fpprice" style="color:#de6752;font-size:17px">￥' + toFixed0d(d) + "</span></li>" + "</ul>", $("#shopcart").html(c), d > 0 ? $("#shopcart").show() : $("#shopcart").hide(), fixBottom(), saveAnswer(a))
}

function toFixed0d(a) {
    return a.toFixed(2).replace(".00", "")
}

function fixBottom() {
    var c, a = "#reportfooter", b = "fixedbottom";
    window.isChuangGuan ? (a = "#divCGFooter", b = "jqlxfooter") : ($("#spanPower").unbind("click"), $("#spanPower").click(function () {
        window.location.href = "https://www.wjx.cn/"
    }), postHeight()), c = !window.IsPar && self != top, setTimeout(function () {
        var f, d = $(a), e = d.height();
        d.hasClass(b) || (e = 0), f = document.getElementById("pageDiv").scrollHeight + e + 20 < document.documentElement.clientHeight, f && !c ? d.addClass(b) : d.removeClass(b)
    }, 20)
}

function validate(a) {
    function h(a, b) {
        var c;
        return function () {
            var e = this, f = arguments, g = function () {
                a.apply(e, f)
            };
            clearTimeout(c), c = setTimeout(g, b)
        }
    }

    var c, d, e, f, g, i, j, k, l, m, n, o, p, q, r, b = !0;
    if (firstError = null, firstMatrixError = null, curMatrixError = null, isValidating = !0, $(".field:visible").each(function () {
        var c, d, a = pageHolder[cur_page].hasExceedTime;
        return a ? !0 : (c = $(this), d = validateQ(c), d || (b = !1), void 0)
    }), hlv = "1", b ? ($(a).removeClass("btn_fixedstyle"), $(window).unbind("scroll"), lastFixedObj = null) : firstError && (c = $(firstError).offset().top, d = "1" == $(firstError).attr("maxdiff"), e = "1" == $(firstError).attr("conjoint"), !firstError.errorControl || d || e || (c = $(getErrorControl(firstError.errorControl)).offset().top, f = $(firstError).attr("type"), c > 50 && ("6" == f || "9" == f || "10" == f || "12" == f) && (c -= 50)), $("html, body").animate({scrollTop: c}, 600), g = h(function () {
        var b = $(this).scrollTop(), c = $(document).height(), d = $(this).height(), e = parseInt(b) + parseInt(d);
        e > c - 100 ? $(a).removeClass("btn_fixedstyle") : "spanPreview" != $(a).attr("id") && $(a).addClass("btn_fixedstyle")
    }, 300), $("#pageDiv").height() > $(window).height() + 100 && ($(window).on("scroll", g), "spanPreview" != $(a).attr("id") && (lastFixedObj = a)), window != window.top && ($(firstError)[0].scrollIntoView(), i = $(firstError).text().replace("*", ""), i.length > 8 && (i = i.substring(0, 8) + "..."), j = wjxlang.validate_answer_error.replace("{0}", i), $("#ValError").html(j))), window.isJieLong && b) if (isQywx && !window.isdingtalkFreeUser) {
        if (window.joinIdnew) return b;
        k = $('#ulUserJoin li[did="' + wxUserId + '"]').size(), 0 >= k && (alertNew("您不在接龙预设名单内"), b = !1)
    } else l = $("#pJoinCountArea").attr("ncount"), l > 0 && (m = "", xingmingIdx && (m = $.trim($("input", xingmingIdx).val())), xuehaoIdx && (n = $.trim($("input", xuehaoIdx).val()), n && (m && m.length > 0 ? m += "┋" + n : m = n)), _jlNeedLogin ? (o = $("#divJielongAuthArea").attr("did"), o || window._jlAuthUser && (p = window._jlAuthUser.split("┋"), 2 == p.length && (q = p[0], r = p[1], q.length > 0 && r.length > 0 ? o = q + "┋" + r : q.length > 0 ? o = q : r.length > 0 && (o = r))), o != m && (alertNew("您填写的人员与授权的人员不一致"), b = !1)) : (k = $('#ulUserJoin li[did="' + m + '"]').size(), 0 >= k && (alertNew("您填写的人员不在接龙预设名单内"), b = !1)));
    return isValidating = !1, b
}

function openCityBox(a, b, c, d) {
    var f, g, h, i, j, k, l, m, n, e = (new Date).getTime();
    if (!(e - lastClickTime > MIN_CLICK_DELAY_TIME)) return !1;
    if (lastClickTime = e, txtCurCity = a, f = "", d = d || "", g = 400, 3 == b) h = a.getAttribute("province"), i = "", h && (i = "&pv=" + encodeURIComponent(h)), h && (i = h.indexOf("┊") > -1 ? "&isnew=1&pv=" + encodeURIComponent(h.split("┊")[0]) : "&pv=" + encodeURIComponent(h)), f = "/joinnew/setcitycountymobo2.aspx?activityid=" + activityId + "&ct=" + b + i + "&pos=" + d, g = 320; else if (4 == b) h = a.getAttribute("province"), i = "", j = "", h && (i = "&pv=" + encodeURIComponent(h)), a.value && (j = "&sh=" + encodeURIComponent(a.value)), f = "/joinnew/school.aspx?activityid=" + activityId + "&ct=" + b + i + "&pos=" + d + j; else if (5 == b) f = "/joinnew/setmenusel.aspx?activityid=" + activityId + "&ct=" + b + "&pos=" + d, g = 320; else if (7 == b) f = "/joinnew/setcascaderselector.aspx?activityid=" + activityId + "&ct=" + b + "&pos=" + d; else if (6 == b) {
        if (f = "/wjx/join/amap.aspx?activityid=" + activityId + "&ct=" + b + "&pos=" + d, "1" == $(a).attr("needonly") && (f += "&nc=1", a.value)) return $(a.parentNode.parentNode).find(".errorMessage").html(wjxlang.locationtips), void 0
    } else f = "/joinnew/setcitymobo2.aspx?activityid=" + activityId + "&ct=" + b + "&pos=" + d, g = 300;
    a.blur(), obj_offectTop = $(a).closest(".field").offset().top, setTimeout(function () {
        openDialogByIframe(400, g, f)
    }, 200), 3 != b && 4 != b || window.self != window.top || (k = window.parent && $(window).height() > window.screen.height ? $(window.parent).scrollTop() : $(document).scrollTop(), l = $(window).height() > window.screen.height ? window.screen.height : $(window).height(), m = k + l, $("#yz_popTanChu").css({
        top: m + "px",
        width: "100%",
        left: "0"
    }), $("#yz_popwinIframe").css("width", "100%"), n = m - 360 + "px", 4 == b && (n = k + 60), $("#yz_popTanChu").animate({top: n}, 300))
}

function openlink(a, b) {
    var d, c = a.getAttribute("data-url") || a.getAttribute("href");
    return 0 == c.indexOf("http") && ($("#yz_popIframeDiv").remove(), $("#yz_popTanChu").remove(), openDialogByIframe(320, 400, c, !0)), d = window.event || b, d && d.stopPropagation && d.stopPropagation(), !1
}

function showItemDesc(a, b, c) {
    var g, h, i, j, k, e = document.getElementById(c), f = $.trim(e.innerHTML);
    0 == f.indexOf("http") ? openDialogByIframe(a, b, f, !0) : (e.style.display = "", e.style.width = Math.min($(window).width(), 400) - 50 + "px", g = e.getElementsByTagName("iframe")[0], g && (h = g.getAttribute("xsrc"), h && g.setAttribute("src", h)), i = e.offsetHeight + 20, e.style.display = "none", j = $(window).height() - 30, k = !0, j > i && i > 30 && (b = i, k = !1), openDialogByIframe(a, b, c, k))
}

function setCityBox(a, b, c) {
    txtCurCity.value = a, $(txtCurCity).next().hasClass("textEdit") && "1" == $(txtCurCity).attr("hasgs") && window.selectTrueOption && selectTrueOption.call({
        val: a,
        id: $(txtCurCity).attr("id"),
        type: "radio"
    }), $(txtCurCity).next().hasClass("textEdit") && a && $(txtCurCity).next().removeClass("initStyle").children(".textCont").css({
        display: "inline",
        width: "auto"
    }).html(a), txtCurCity.relValue = c, b && a && $(txtCurCity).parent().hasClass("getLocalBtn") && $(txtCurCity).parent().prev().text(a).show(), $("#yz_popTanChuClose").click();
    var d = $(txtCurCity).closest(".field");
    saveAnswer(d), "1" != d.attr("req") && addClearHref(d), $(txtCurCity).trigger("blur"), window.isinterview && (showMyAnswer(d), $(".interview_input").find(".iv_input").show(), $(".interview_input").find(".iv_chioseFile").hide())
}

function getRname(a, b, c) {
    var d, e, f, g, h, i, j, k, l, m, n, o, p;
    if (!(rName && hasMatchName || $(b).attr("ceshi"))) if ("9" != a) o = null, "1" == a ? o = $("input", b) : "2" == a && (o = $("textarea", b)), o && ((c.indexOf("姓名") > -1 || c.indexOf("名字") > -1) && (hasMatchName = !0), p = o.attr("verify"), ("姓名" == p || hasMatchName) && ("1" == a ? rName = o.val() : "2" == a && c.length <= 5 && (rName = o.val()), rName || (hasMatchName = !1))); else if (d = b[0].getElementsByTagName("td"), d.length > 0) {
        for (e = 0; e < d.length; e++) if (d[e].innerHTML.indexOf("姓名") > -1 || d[e].innerHTML.indexOf("名字") > -1 || d[e].innerHTML.indexOf("姓") > -1 && d[e].innerHTML.indexOf("名") > -1) {
            f = d[e].parentNode.id, g = "t" == f.charAt(f.length - 1), h = null, h = g ? $(d[e].parentNode).next().find("input") : d[e].parentNode.getElementsByTagName("input"), h[0] && h[0].value && (rName = h[0].value, hasMatchName = !0);
            break
        }
    } else if (i = b[0].innerHTML.indexOf("姓名"), j = b[0].innerHTML.indexOf("姓"), k = b[0].innerHTML.indexOf("名"), i > -1 || j > -1 && k > -1) for (-1 == i && (i = k), l = b[0].getElementsByTagName("input"), e = 0; e < l.length; e++) if (m = l[e].id, n = b[0].innerHTML.indexOf(m), n > i && l[e].value) {
        rName = l[e].value, hasMatchName = !0;
        break
    }
}

function getRefUsername(a, b) {
    var c, d, e;
    if (void 0 != refUsername && !$(b).attr("ceshi")) {
        if ("9" == a) return c = refUsername - 1e4 * $(b).attr("topic") - 1, d = b[0].getElementsByTagName("input"), d[c] && (refUsernameVal = d[c].value), void 0;
        e = null, "1" == a ? e = $("input", b) : "2" == a && (e = $("textarea", b)), e && ("1" == a || "2" == a) && (refUsernameVal = e.val())
    }
}

function getRefUserId(a, b) {
    var c, d, e;
    if (void 0 != refUserId && !$(b).attr("ceshi")) {
        if ("9" == a) return c = refUserId - 1e4 * $(b).attr("topic") - 1, d = b[0].getElementsByTagName("input"), d[c] && (refUserIdVal = d[c].value), void 0;
        e = null, "1" == a ? e = $("input", b) : "2" == a && (e = $("textarea", b)), e && ("1" == a || "2" == a) && (refUserIdVal = e.val())
    }
}

function getRefDepartment(a, b) {
    var c, d, e, f, g, h;
    if (void 0 != refDepartment && !$(b).attr("ceshi")) {
        if ("9" == a) return c = refDepartment - 1e4 * $(b).attr("topic") - 1, d = b[0].getElementsByTagName("input"), d[c] && (refDepartmentVal = d[c].value), void 0;
        if ("3" != a) "7" == a && (g = b[0].getElementsByTagName("select"), g && (refDepartmentVal = g[0].options[g[0].selectedIndex].text)), h = null, "1" == a ? h = $("input", b) : "2" == a && (h = $("textarea", b)), h && ("1" == a || "2" == a) && (refDepartmentVal = h.val()); else for (e = $("input[type='radio']", b), f = 0; f < e.length; f++) if (e[f].checked) {
            refDepartmentVal = $(e[f]).parent().next().text();
            break
        }
    }
}

function getM(a, b, c) {
    var d, e, f, g, h, i;
    if (!modata) if (d = /^1[3456789]\d{9}$/, "9" != a) "1" == a && (h = $("input", b), g = h.attr("verify"), ("手机" == g || -1 != c.indexOf("手机") || -1 != c.indexOf("联系方式")) && (i = h.val(), $.trim(d.exec(i)) && (modata = i))); else for (e = b[0].getElementsByTagName("input"), f = 0; f < e.length; f++) if (g = e[f].getAttribute("verify"), "手机" == g && d.exec($.trim(e[f].value))) return modata = e[f].value, void 0
}

function checkJpMatch(a, b) {
    var c, d;
    if (!b.hasCheck) {
        if (b.hasCheck = !0, c = $("div.field-label", b).text(), ("1" == a || "2" == a) && quarray) for (d = 0; d < quarray.length; d++) if (c.indexOf(quarray[d]) > -1) {
            quResult.push(b);
            break
        }
        0 == newAward && checkQuesMatch(c, b, a)
    }
}

function getAnswer(a, b, c, d) {
    var g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, e = 0, f = !1;
    switch (("3" == c || "4" == c || "11" == c) && (g = getTopic(a), h = document.getElementById("divRef" + g), i = h && "" == h.style.display, i && (f = !0)), c) {
        case"1":
            if (!d) {
                b._value = "(跳过)", "1" == a.attr("hrq") && (b._value = "Ⅳ");
                break
            }
            j = $("input", a), k = $.trim(j.val()), !k && "1" == a.attr("req") && j[0] && j[0].svalue && (k = j[0].svalue), k && j[0].lnglat && (k = k + "[" + j[0].lnglat + "]"), "1" == a.attr("ceshi") && (k = getKsAnswer(k)), b._value = replace_specialChar(k);
            break;
        case"2":
            if (!d) {
                b._value = "(跳过)", "1" == a.attr("hrq") && (b._value = "Ⅳ");
                break
            }
            j = $("textarea", a), k = $.trim(j.val()), !k && "1" == a.attr("req") && j[0] && j[0].svalue && (k = j[0].svalue), k && j[0].lnglat && (k = k + "[" + j[0].lnglat + "]"), b._value = replace_specialChar(k);
            break;
        case"3":
            if (!d || f) {
                b._value = "-3", "1" == a.attr("hrq") && (b._value = "-4");
                break
            }
            $("input[type='radio']:checked", a).each(function () {
                b._value = $(this).val();
                var c = $(this).attr("rel");
                return c && $("#" + c).val().length > 0 && (b._value += spChars[2] + replace_specialChar($("#" + c).val().substring(0, 3e3))), !1
            });
            break;
        case"4":
            if (!d || f) {
                b._value = "-3", "1" == a.attr("hrq") && (b._value = "-4");
                break
            }
            l = 0, $("input:checked", a).each(function () {
                var c, a = "none" == this.parentNode.parentNode.style.display;
                a || (l > 0 && (b._value += spChars[3]), b._value += $(this).val(), c = $(this).attr("rel"), c && $("#" + c).val().length > 0 && (b._value += spChars[2] + replace_specialChar($("#" + c).val().substring(0, 3e3))), l++)
            }), 0 == l && (b._value = "-2");
            break;
        case"21":
            if (!d) {
                b._value = "-3";
                break
            }
            if (1 == $(a).attr("isshelf")) {
                m = getshelfanswer(a) || -2, b._value = m;
                break
            }
            l = 0, $(".shop-item .itemnum", a).each(function (a) {
                var c = $(this).val();
                "0" != c && (l > 0 && (b._value += spChars[3]), b._value += a + 1, b._value += spChars[2] + c, l++)
            }), 0 == l && (b._value = "-2");
            break;
        case"11":
            for (n = new Array, $("li.ui-li-static", a).each(function () {
                var b, c, e, a = $(this).find("span.sortnum").html();
                "none" == this.style.display && (a = ""), b = new Object, b.sIndex = a, c = $(this).find("input:hidden").val(), e = $(this).find("input.OtherText"), e.length > 0 && e.val().length > 0 && (c += spChars[2] + replace_specialChar(e.val().substring(0, 3e3))), !d || f ? c = "-3" : a || (c = "-2"), b.val = c, b.sIndex || (b.sIndex = 1e4), n.push(b)
            }), n.sort(function (a, b) {
                return a.sIndex - b.sIndex
            }), o = 0; o < n.length; o++) o > 0 && (b._value += ","), b._value += n[o].val;
            break;
        case"5":
            if (!d) {
                b._value = "-3";
                break
            }
            if (b._value = $("input:hidden", a).val(), p = parseInt(b._value), 1 == $(a).attr("pj") && p > 0) {
                if (q = $(a).find(".evaluateTagDiv").eq(p - 1), r = "", $(q).find(".writeRvaluate").siblings(".clicked").each(function (a, b) {
                    var c = 0 == a ? "" : "、";
                    r += c + $.trim($(b).html())
                }), s = r ? "、" : "", t = $(q).find("textarea"), u = "", t.length > 1) for (v = 0; v < t.length; v++) 0 == v ? u = t[v].value.replace(/、/gi, "､") : u += "、" + t[v].value.replace(/、/gi, "､"); else u = t.val().replace(/、/gi, "､");
                u && q.find(".writeRvaluate").hasClass("clicked") && (r += s + u), r && (b._value += spChars[2] + replace_specialChar($.trim(r.substring(0, 3e3))))
            }
            break;
        case"6":
            e = 0, w = "true" == $(a).attr("daozhi"), x = "1" == $(a).attr("alone"), $("input:hidden", a).each(function (c) {
                var f, g, h, i, j, k, l;
                e > 0 && (b._value += ","), f = !1, g = c + 1, !window.hasReferClient || w || x || (h = $(a).attr("id"), i = b._topic, h && (j = h.replace("div", ""), parseInt(j) == j && i != j && (i = j)), k = document.getElementById("drv" + i + "_" + (c + 1)), k && "none" == k.style.display && !$(k).hasClass("alonetr") ? f = !0 : !k && questionsObject[b._topic] && (f = !0)), b._value += g + spChars[4], d ? (l = $(this).val(), l || (l = "-2"), f && (l = "-4"), b._value += l) : b._value += "-3", e++
            });
            break;
        case"7":
            if (!d) {
                b._value = "-3";
                break
            }
            b._value = $("select", a).val();
            break;
        case"8":
            if (!d) {
                b._value = "(跳过)";
                break
            }
            b._value = $("input.ui-slider-input", a).val();
            break;
        case"33":
        case"34":
        case"9":
            if (y = "input", "33" == c && (y = ".file"), "34" == c && (y = "textarea"), a = $(a), "9" == c && (y = "input:not(.file input[type=file]), .file"), e = 0, !d && "1" == a.attr("hrq")) {
                b._value = "Ⅳ";
                break
            }
            if (!d && window.cepingCandidate) {
                b._value = "Ⅳ";
                break
            }
            z = $(y, a), "1" == a.attr("randomrow") && (A = a.attr("topic"), z = z.toArray().sort(function (a, b) {
                var c, d;
                return ".file" == y ? (c = $(a).children(":first").attr("id").replace("fileUploadq" + A + "_", ""), d = $(b).children(":first").attr("id").replace("fileUploadq" + A + "_", "")) : (c = $(a).attr("id").replace("q" + A + "_", ""), d = $(b).attr("id").replace("q" + A + "_", "")), c - d
            })), B = "1" == a.attr("ceshi"), $(z).each(function () {
                var f, g, h, i, j, k;
                if (e > 0 && (b._value += spChars[2]), g = this.className.indexOf("file") > -1, f = "33" == c || g ? /_(\d+)$/.exec(this.parentNode.parentNode.getAttribute("id"))[1] : this.getAttribute("rowid"), f && (b._value += f + spChars[4]), h = "33" == c || g ? this.parentNode.fileName || "" : $.trim($(this).val()), !h && "1" == a.attr("req") && this.svalue && (h = this.svalue), i = !1, window.hasReferClient && (j = this.parentNode.parentNode.parentNode, j && "TR" == j.tagName && "none" == j.style.display && (i = !0)), d ? i && (h = "Ⅳ") : h = "(跳过)", h && this.lnglat && (h = h + "[" + this.lnglat + "]"), B) {
                    h = getKsAnswer(h);
                    try {
                        k = a[0].getElementsByTagName("select").length > 0, k || "33" == c || (h = h.replace(/,/g, "，"))
                    } catch (l) {
                    }
                }
                b._value += replace_specialChar(h), e++
            });
            break;
        case"12":
            e = 0, $("input", a).each(function () {
                var a, c, f, g;
                e > 0 && (b._value += spChars[2]), a = !1, window.hasReferClient && (c = this.parentNode.parentNode.parentNode, c && "none" == c.style.display && (a = !0)), f = this.getAttribute("rowid"), f && (b._value += f + spChars[4]), g = $(this).val(), d ? a && (g = "Ⅳ") : g = "(跳过)", b._value += g, e++
            });
            break;
        case"13":
            if (!d) {
                b._value = "(跳过)";
                break
            }
            b._value = $(a)[0].fileName || "";
            break;
        case"10":
            if (e = 0, C = "input,textarea", D = "(跳过)", "1" == a.attr("select") && (C = "select", D = "-3"), E = "table", F = !1, "1" == a.attr("fixedslider") && (F = !0), F && (E = ".ui-table-scroll .ui-table-tbody tr[rowid]"), G = 1 == a.attr("maxdiff") && !a.attr("req"), H = 1 == a.attr("conjoint") && !a.attr("req"), (G || H) && (I = a.find("input"), J = !1, I.each(function () {
                return $(this).val() ? void 0 : (J = !0, !1)
            }), J)) break;
            $(E, a).each(function () {
                var f, g, h, i, j, k, l, c = this;
                e > 0 && (b._value += spChars[2]), f = 0, g = !1, h = c.parentNode, F && (h = c), i = "1" == a.attr("maxdiff"), j = "1" == a.attr("conjoint"), (window.hasReferClient || a.attr("zizeng")) && (k = h, !k || "none" != k.style.display || i || j || (g = !0)), l = h.getAttribute("rowid"), l && (b._value += l + spChars[4]), $(C, this).each(function () {
                    var a, c;
                    f > 0 && (b._value += spChars[3]), a = this, c = a.value, d ? g && (c = "Ⅳ") : c = D, c && a.lnglat && (c = c + "[" + a.lnglat + "]"), b._value += replace_specialChar(c), f++
                }), e++
            })
    }
}

function debugLog(a) {
    window.VConsole && console.log(a)
}

function groupAnswer(a) {
    var f, g, h, i, j, k, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, E, F, G, H, I, J, K, b = new Array, c = 0,
        d = new Object, e = 1;
    try {
        if (1 == a) {
            for (f = 0; f < quResult.length; f++) g = null, h = $(quResult[f]).attr("type"), "1" == h ? g = $("input", quResult[f]) : "2" == h && (g = $("textarea", quResult[f])), i = $.trim(g.val()), !i || i.length < 2 || (j = document.createElement("img"), k = $("div.field-label", quResult[f]).text(), j.src = "//sojump.cn-hangzhou.log.aliyuncs.com/logstores/activitynlp/track.gif?APIVersion=0.6.0&activity=" + activityId + "&title=" + encodeURIComponent(document.title) + "&qtitle=" + encodeURIComponent(k) + "&q=" + getTopic(quResult[f]) + "&text=" + encodeURIComponent(i) + "&jointimes=" + (window.currJT || 0));
            hasAutoSubmit = !0
        }
    } catch (l) {
    }
    if (6 == a) return previewopen(), void 0;
    if (debugLog("获取题目答案"), allQArray.each(function () {
        var j, k, f = $(this), g = new Object, h = f.attr("type"),
            i = "none" != this.style.display || "-1" == f.attr("relation");
        if (i && hasSkipPage && this.pageParent && this.pageParent.skipPage && (i = !1), this.isCepingQ && (i = !0), this.isChuangGuanQ && (i = !0), g._value = "", g._topic = getTopic(f), window.isKaoShi && window.randomMode && "1" != f.attr("nc") && "NaN" !== parseInt(g._topic).toString() && (d[g._topic] = e, e++), b[c++] = g, window.isKaoShi || window.ishydj || 1 != f.find(".ccwb").length || sessionStorage.removeItem(activityId + "_" + g._topic), 1 == a) try {
            j = $("div.field-label", f).html(), 1 == window.newAward && checkQuesMatch(j, f, h), ("3" == h || "7" == h || "1" == h) && (k = null, "3" == h && (k = $("input[type='radio']", f)), getAge(h, f, j, k), getIncome(h, f, j, k), "3" == h && (getGender(h, f, j, k), getMarriage(h, f, j, k), getEducation(h, f, j, k))), window.refUsername ? 1e4 * g._topic == refUsername - refUsername % 1e4 && (getRefUsername(h, f), rName = refUsernameVal) : (getRname(h, f, j), rName.length > 30 && (rName = "")), window.refUserId && 1e4 * g._topic == refUserId - refUserId % 1e4 && getRefUserId(h, f), window.refDepartment && 1e4 * g._topic == refDepartment - refDepartment % 1e4 && getRefDepartment(h, f), getM(h, f, j)
        } catch (l) {
        }
        getAnswer(f, g, h, i)
    }), window.isSingleVote && window.touPiaoItemIndex && (m = new Object, m._topic = "1", m._value = touPiaoItemIndex + "", b.push(m)), 0 == b.length) return alertNew(wjxlang.tit_noquestion), void 0;
    for (b.sort(function (a, b) {
        return a._topic - b._topic
    }), n = "", f = 0; f < b.length; f++) f > 0 && (n += spChars[1]), n += b[f]._topic, n += spChars[0], n += b[f]._value;
    debugLog("获取提交参数");
    try {
        if (window.isKaoShi && window.randomMode && d && window.localStorage && window.JSON) {
            if (o = localStorage.getItem("sortactivity"), o ? o += "," + activityId : o = activityId, o += "", p = o.split(","), q = 2, p.length > q) {
                for (r = p.length, f = 0; r - q > f; f++) s = p[0], p.splice(0, 1), localStorage.removeItem("sortorder_" + s);
                o = p.join(",")
            }
            localStorage.setItem("sortactivity", o), t = "sortorder_" + activityId, u = JSON.stringify(d), localStorage.setItem(t, u)
        }
    } catch (l) {
    }
    if (v = $("#form1").attr("action"), (v.indexOf("aliyun.wjx.cn") > -1 || v.indexOf("temp.wjx.cn") > -1) && (v = v.replace("aliyun.wjx.cn", window.location.host).replace("temp.wjx.cn", window.location.host)), 0 == v.indexOf("http://") && "https:" == document.location.protocol ? v = v.replace("http://", "https://") : 0 == v.indexOf("https://") && "http:" == document.location.protocol && (v = v.replace("https://", "http://")), w = v + "&starttime=" + encodeURIComponent($("#starttime").val()), x = window.sojumpParm, window.hasEncode || (x = encodeURIComponent(x)), window.sojumpParm && (w += "&sojumpparm=" + x), window.hasMaxdiff && (w += "&maxdiff=1"), window.hasConjoint && (w += "&conjoint=1"), window.parmsign && (w += "&parmsign=" + encodeURIComponent(parmsign), window.isEdit && (w += "&isedit=" + isEdit)), window.endTs && (w += "&endts=" + endTs), window.qdataList && qdataList.length > 0 && (w += "&aqsj=" + encodeURIComponent(qdataList.join(""))), window.customerpara && (w += window.customerpara), window.tparam && (w += "&tparam=1&sojumpparmext=" + encodeURIComponent(window.sojumpparmext)), window.Password && (w += "&psd=" + encodeURIComponent(Password)), window.PasswordExt && (w += "&pwdext=" + encodeURIComponent(PasswordExt)), window.hasMaxtime && (w += "&hmt=1"), window.amt && (w += "&amt=" + amt), window.initMaxSurveyTime && (w += "&mst=" + window.initMaxSurveyTime), window.isVip && (w += "&vpsiu=1"), window.useAliVerify && (w += "&nc_csessionid=" + encodeURIComponent(nc_csessionid) + "&nc_sig=" + encodeURIComponent(nc_sig) + "&nc_token=" + encodeURIComponent(nc_token) + "&nc_scene=" + nc_scene), verifymob && (w += "&verifymob=" + verifymob), window.cpid && (w += "&cpid=" + cpid), window.guid && (w += "&emailguid=" + guid), window.udsid && (w += "&udsid=" + window.udsid), window.fromsour && (w += "&fromsour=" + window.fromsour), nvvv && (w += "&nvvv=1"), window.sjUser && (w += "&sjUser=" + encodeURIComponent(sjUser)), window.sjts && (w += "&sjts=" + sjts), window.sjsign && (w += "&sjsign=" + encodeURIComponent(sjsign)), window.FromSj && (w += "&fromsj=1"), window.sourcelink && window.outuser && (w += window.sourcelink, window.outsign && (w += "&outsign=" + encodeURIComponent(outsign))), window.sourceurl ? w += "&source=" + encodeURIComponent(sourceurl) : window.isMobile && (w += "&source=directphone"), window.top != window && (w += "&isiframe=1"), window.SJBack && (w += "&sjback=1"), window.jiFen && jiFen > 0 && (w += "&jf=" + jiFen), window.joinIdnew && window.answertext && (w += "&nfjoinid=" + window.joinIdnew, a = 6), a && (w += "&submittype=" + a), window.isChuangGuan && (hlv = "1"), 3 == a && (w += "&zbp=" + (cur_page + 1), needSubmitNotValid && (w += "&nsnv=1")), window.hasInformed && (y = window.infwSubmit ? "0" : "1", w += "&infw=" + y), 2 == window.isChuangGuan && 1 == a && (hasChuGuanSuc || (w += "&hmt=1"), 0 == window.totalUseTime && (totalUseTime = 1), w += "&icg=1&tuti=" + totalUseTime), w += "&ktimes=" + ktimes, w += "&hlv=" + hlv, window.rndnum && (w += "&rn=" + encodeURIComponent(rndnum)), window.inviteid && (w += "&inviteid=" + encodeURIComponent(inviteid)), window.access_token && window.openid ? (w += "&access_token=" + encodeURIComponent(access_token), w += window.isQQLogin ? "&qqopenid=" + encodeURIComponent(openid) : "&openid=" + encodeURIComponent(openid), window.unionId && (w += "&unionId=" + encodeURIComponent(unionId))) : window.isJieLong && window.openid && (w += "&openid=" + encodeURIComponent(openid)), navigator.userAgent.indexOf("DingTalk") > 0 && (w += "&openid=" + encodeURIComponent(openid), window.ddgroupid && (w += "&ddgroupid=" + encodeURIComponent(ddgroupid))), window.wxUserId && (w += "&wxUserId=" + window.wxUserId), window.location.href.indexOf("isexternal=1") > 0 && (w += "&isexternal=1"), window.cats && (w += "&cats=" + cats + "&casign=" + encodeURIComponent(casign)), window.wxthird && (w += "&wxthird=1"), window.parterts && (w += "&parterts=" + parterts), window.parterjoiner && (w += "&parterjoiner=" + encodeURIComponent(parterjoiner)), window.partersign && (w += "&partersign=" + encodeURIComponent(partersign)), window.parterrealname && (w += "&parterrealname=" + encodeURIComponent(parterrealname)), window.parterextf && (w += "&parterextf=" + encodeURIComponent(parterextf)), window.parterdept && (w += "&parterdept=" + encodeURIComponent(parterdept)), window.parterpuser && (w += "&parterpuser=" + encodeURIComponent(parterpuser)), window.formopen && (w += "&formopen=" + encodeURIComponent(formopen) + "&formsign=" + encodeURIComponent(formsign) + "&formts=" + formts + "&formnick=" + formnick), window.jqParam && (w += "&jqpram=" + encodeURIComponent(jqParam)), z = new Date, z.setTime(z.getTime() + 18e5), rName && (A = rName.replace("(", "（").replace(")", "）"), setCookie("jcn" + activityId, A, z.toUTCString(), "/", "", null), w += "&jcn=" + encodeURIComponent(dataenc(A))), window.refDepartment && (w += "&rdept=" + encodeURIComponent(window.refDepartmentVal)), window.refUserId && (w += "&ruserid=" + encodeURIComponent(window.refUserIdVal)), window.relts && (w += "&relts=" + relts), window.relusername && (w += "&relusername=" + encodeURIComponent(relusername)), window.relsign && (w += "&relsign=" + encodeURIComponent(relsign)), window.relrealname && (w += "&relrealname=" + encodeURIComponent(relrealname)), window.reldept && (w += "&reldept=" + encodeURIComponent(reldept)), window.relext && (w += "&relext=" + encodeURIComponent(relext)), window.writeuser && (w += "&writeuser=" + writeuser), window.corpId && (w += "&corpId=" + encodeURIComponent(corpId)), window.GetJpMatch && GetJpMatch(), window.newAward ? (window.newAward && (w += "&nw=" + encodeURIComponent(window.newAward)), jpWayText && (w += "&jwt=" + encodeURIComponent(jpWayText)), jpMatchId && (w += "&jpm=" + jpMatchId), needImport && (w += "&nip=" + needImport)) : jpMatchId && (w += "&jpm=" + jpMatchId + "&isMtitle=" + isMatchTitle), lastCostTime && lastCostTime / 1e3 && (w += "&lct=" + parseInt(lastCostTime / 1e3)), 1 == window.isJielongAdminHelp && (w += "&hjl=1"), (window.isWeiXin || window.isdingtalkFreeUser) && (w += "&iwx=1"), w += "&t=" + (new Date).valueOf(), $("#shopcart")[0] && "none" != $("#shopcart")[0].style.display && (w += "&ishop=1"), modata && setCookie("jcm" + activityId, modata, z.toUTCString(), "/", "", null), window.cProvince) {
        w += "&cp=" + encodeURIComponent(cProvince.replace("'", "")) + "&cc=" + encodeURIComponent(cCity.replace("'", "")) + "&ci=" + escape(cIp), B = cProvince + "," + cCity, window.location.host || "sojump.com";
        try {
            setCookie("ip_" + cIp, B, null, "/", "", null)
        } catch (D) {
        }
    }
    window.shareGuid && (w += "&shareGuid=" + window.shareGuid), getQueryVariable("creativeid") && getQueryVariable("clickid") ? w += "&creativeid=" + getQueryVariable("creativeid") + "&clickid=" + getQueryVariable("clickid") : getQueryVariable("bd_vid") && (w += "&bd_vid=" + getQueryVariable("bd_vid"), z = new Date, z.setTime(z.getTime() + 18e5), setCookie("baidulink_" + activityId, window.location.href, z.toUTCString(), "/", "", null)), window.meetingInfo && window.meetUserInfo && (w += "&meetingInfo=" + encodeURI(meetingInfo.meetingSubject.repalce(/,/g, "，")) + "," + meetingInfo.meetingCode + "," + meetingInfo.meetingId + "&meetUserInfo=" + encodeURI(meetUserInfo.nickname.repalce(/,/g, "，")) + "," + meetUserInfo.openId), debugLog("准备提交到服务器"), !window.isSingleVote || window.isMultipleChoice && !window.touPiaoItemIndex || ($("#voteBack").hide(), $("#helpVote").hide()), $("#ctlNext").hide(), $("#lxNextBtn").hide(), window.isinterview && (window.hasFanishInterview = !0, $(".interviewSubmitBtn,.interview_input").hide(), $("#divQuestion").addClass("interviewOver")), $("#spanPreview").hide(), E = "处理中......", E = '<img src = "//image.wjx.cn/images/wjxMobile/wait.gif" alt="">', $("#ValError").html(E), $("#captchaTit").html(E), 3 == a && (E = wjxlang.tit_validata, $("#ValError").html(E), $("#captchaTit").html(E)), clientAnswerSend = n, window.jqnonce && (w += "&jqnonce=" + encodeURIComponent(window.jqnonce), F = dataenc(window.jqnonce), w += "&jqsign=" + encodeURIComponent(F)), G = {submitdata: n}, H = !1, I = window.getMaxWidth || 1800, J = encodeURIComponent(n), window.submitWithGet && J.length <= I && (H = !0), debugLog("开始提交"), H ? (w += "&submitdata=" + J, w += "&useget=1") : window.submitWithGet && (window.postIframe = 1), K = wjxlang.networkerr, debugLog("提交数据：" + n), addpostlog(n), window.postIframe ? (debugLog("postIframe"), postWithIframe(w, n)) : H ? (debugLog("ajaxget"), $.ajax({
        type: "GET", url: w, success: function (b) {
            afterSubmit(b, a)
        }, error: function () {
            $("#ValError").html(K), $("#captchaTit").html(K), $("#ctlNext").show(), $("#lxNextBtn").show(), debugLog(JSON.stringify(msg))
        }
    })) : (debugLog("ajaxpost"), debugLog(w), debugLog(G), $.ajax({
        type: "POST",
        url: w,
        data: G,
        dataType: "text",
        success: function (b) {
            afterSubmit(b, a)
        },
        error: function (a) {
            $("#ValError").html(K), $("#captchaTit").html(K), debugLog(JSON.stringify(a)), $("#ctlNext").show(), $("#lxNextBtn").show()
        }
    }))
}

function postWithIframe(a, b) {
    var d, c = document.createElement("div");
    c.style.display = "none", c.innerHTML = "<iframe id='mainframe' name='mainframe' style='display:none;' > </iframe><form target='mainframe' data-ajax='false' id='frameform' action='' method='post' enctype='application/x-www-form-urlencoded'><input  value='' id='submitdata' name='submitdata' type='hidden'><input type='submit' value='提交' ></form>", document.body.appendChild(c), document.getElementById("submitdata").value = b, d = document.getElementById("frameform"), d.action = a + "&iframe=1", d.submit()
}

function processError() {
    havereturn || (havereturn = !0, $("#ValError").html(wjxlang.submit_timeout), $("#ctlNext").show(), $("#lxNextBtn").show()), timeoutTimer && clearTimeout(timeoutTimer)
}

function addtolog() {
    var e, f, g, b = document.createElement("img"), c = window.isWeiXin ? 1 : 0, d = window.isVip ? window.isVip : 0;
    !d && window.needAddList && (d = 11), e = window.isQywx ? 1 : 0, f = window.emUserName || "", g = window.isJieLong ? "&jl=1" : "", b.src = "//sojump.cn-hangzhou.log.aliyuncs.com/logstores/activityfinish/track.gif?APIVersion=0.6.0&activity=" + activityId + "&source=1&weixin=" + c + "&vip=" + d + "&qtype=" + cqType + "&qw=" + e + "&name=" + encodeURIComponent(f) + g
}

function addpostlog(a) {
    var b = document.createElement("img");
    b.src = "//sojump.cn-hangzhou.log.aliyuncs.com/logstores/activitypostdata/track.gif?APIVersion=0.6.0&a=" + activityId + "&pd=" + encodeURIComponent(a || "")
}

function addtoactivitystat() {
    var a = document.createElement("img");
    a.src = "//sojump.cn-hangzhou.log.aliyuncs.com/logstores/activitystat/track.gif?APIVersion=0.6.0&activity=" + activityId + "&type=rel"
}

function addtoactivitysave(a) {
    var b = document.createElement("img");
    b.src = "//sojump.cn-hangzhou.log.aliyuncs.com/logstores/activitysave/track.gif?APIVersion=0.6.0&activity=" + activityId + "&data=" + encodeURIComponent(a)
}

function addtoVisitLog() {
    addtoBuyLog(), addtoForein(), addtoHistory()
}

function addtoBuyLog() {
    var a, b;
    window.needLogCompanyId && (a = document.createElement("img"), b = window.LogStoreLocal ? 1 : 0, a.src = "//sojump.cn-hangzhou.log.aliyuncs.com/logstores/companybuy/track.gif?APIVersion=0.6.0&companyid=" + needLogCompanyId + "&istest=" + b + "&activity=" + activityId + "&jointimes=" + window.currJT + "&title=" + encodeURIComponent(document.title))
}

function addtoForein() {
    var a, b, d;
    window.curProvince && (a = document.getElementById("divContent"), a && (b = document.createElement("img"), window.LogStoreLocal ? 1 : 0, d = $.trim($("#htitle").text() || document.title), b.src = "//sojump.cn-hangzhou.log.aliyuncs.com/logstores/foreinvisit/track.gif?APIVersion=0.6.0&activity=" + activityId + "&jointimes=" + window.currJT + "&title=" + encodeURIComponent(d) + "&p=" + encodeURIComponent(curProvince) + "&c=" + encodeURIComponent(curCity) + "&ip=" + encodeURIComponent(curIp) + "&m=1&fh=" + (window.curFuHe || 0) + "&cr=" + (window.curCheckResult || 0)))
}

function addtoHistory() {
    var a, b, c;
    window.addtoHis && (a = document.getElementById("divContent"), a && (b = window.LogStoreLocal ? 1 : 0, c = document.createElement("img"), c.src = "//sojump.cn-hangzhou.log.aliyuncs.com/logstores/activityhistory/track.gif?APIVersion=0.6.0&activity=" + activityId + "&forein=" + (window.isForein || 0) + "&ip=" + encodeURIComponent(window.curIp || "") + "&test=" + b))
}

function putWebTracking(a, b, c, d) {
    var e = JSON.stringify({
        __logs__: [{
            activity: activityId.toString(),
            index: d,
            url: a,
            content: b,
            status: "success" == c ? "成功" : "失败",
            message: c,
            source: "WebAjax"
        }]
    });
    $.ajax({
        url: "//sojump.cn-hangzhou.log.aliyuncs.com/logstores/activitypost/track",
        type: "POST",
        headers: {"x-log-apiversion": "0.6.0", "x-log-bodyrawsize": e.length, "Content-Type": "application/json"},
        data: e,
        timeout: 2e3,
        async: !1,
        success: function (a, b, c) {
            var d = c.getResponseHeader("x-log-requestid");
            console.log(d)
        },
        error: function (a, b) {
            console.log(b)
        }
    })
}

function addtoActivityPost(a, b, c, d, e) {
    "success" != c && b && addtoActivityPostFailed(d, e), putWebTracking(a, b, c, d)
}

function addtoActivityPostFailed(a, b) {
    $.ajax({
        url: "/joinnew/afterajaxfailed.ashx",
        type: "POST",
        data: {vid: activityId, index: a, i: b},
        timeout: 3e3,
        success: function () {
        }
    })
}

function matchDayTitle() {
    var a = $.trim($("#htitle").text() || document.title);
    return a ? -1 == a.indexOf("每天") && -1 == a.indexOf("每日") && -1 == a.indexOf("每周") ? !1 : !0 : !1
}

function needSaveTmp() {
    return 1 != window.needSaveJoin ? !1 : matchDayTitle() ? !allQArray || allQArray.length > 60 ? !1 : !0 : !1
}

function needAdjustVideo() {
    return window.adjustVideo ? !0 : allQArray && allQArray.length <= 50 ? !0 : !1
}

function afterSubmit(a, b) {
    var c, d, e, g, h, i, j, k, l, m, n, o, p, q, s, t, u, v, w, x, y, z, A, B, C, D, E, F, H;
    if ($("#ValError").html(""), $("#captchaTit").html(""), havereturn = !0, debugLog("提交成功"), addpostlog(a), window.userBehavior_logJournal && userBehavior_logJournal("submitted", "", {}, "submit", (new Date).getTime()), c = a.split("〒"), d = c[0], e = c[1] || wjxlang.submit_err.replace("{0}", c[0]), clientAnswerSend && 10 != d && 11 != d && 3 != b) try {
        saveSubmitAnswer(clientAnswerSend)
    } catch (f) {
    }
    if (jqnonce = activityId + "" + (new Date).getTime(), window.isinterview && a.indexOf("&valid=0") > -1) return reportSend(wjxlang.tit_submit_interviewfail), void 0;
    if (10 == d) return window.joinIdnew && window.joinIdnew > 0 || window.isQywxAnswerChangeUrl ? (g = "/resultquery.aspx?activity=" + activityId, window.isQywxAnswerChangeUrl ? g = window.isQywxAnswerChangeUrl : window.isJielongYHTXEdit && window.activityShortUrl && window.activityShortUrl.length > 0 ? g = window.activityShortUrl : (window.isJielongAdminEdit && window.jlViewJoinPageUrl && window.jlViewJoinPageUrl.length > 0 && (g = jlViewJoinPageUrl), (window.isWxLogin || window.isJielongQywxEdit) && (g = "/user/resultquery.aspx?activity=" + activityId), window.isActivityRel && (g = "/user/joinrelquery.aspx?activity=" + activityId), window.sojumpParm && window.parmsign && (h = window.parmkey || "sojumpparm", g = "/user/resultquery.aspx?activity=" + activityId + "&" + h + "=" + encodeURIComponent(sojumpParm) + "&parmsign=" + encodeURIComponent(parmsign) + "&endts=" + endTs + "&isedit=" + (window.isEdit || "")), window.isFromFlow && (g = "/flow/newsdetails.aspx?activity=" + activityId + "&joinid=" + window.joinIdnew, window.isHandle ? g = g + "&uid=" + window.uid : g += "&isEdit=1", 1 == window.isFromAdmin && (g += "&ia=1"), window.user_token && (g = g + "&user_token=" + encodeURIComponent(user_token))), window.isFromWarn && (g = "/warn/newsdetails.aspx?activity=" + activityId + "&joinid=" + window.joinIdnew)), i = wjxlang.tit_submit_success, i = 2 != window.isChuangGuan || window.hasChuGuanSuc ? '<div class="submit_tip_color" style="width: 106px;height: 40px;line-height:40px;background: #FFFFFF;box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.15);border-radius: 4px;font-size: 14px;font-weight: 500;margin:0 auto;text-align:center;"><i class="iconfontNew" style="color:#01AD56!important;">&#xe699;</i>' + i + "</div>" : wjxlang.chuanguang_fail, $("#ValError").html(i), $("#captchaTit").html(i), clearAnswer(), window.ishydj ? ($("#ctlNext").show(), void 0) : (setTimeout(function () {
        locationReplace(g)
    }, 1500), void 0)) : (maxCheatTimes > 0 && (j = new Date, j.setTime(j.getTime() - 864e5), setCookie(activityId + "_" + "cheatTimes", 0, j.toUTCString(), "/", "", null), localStorage.removeItem("preventcheat_" + activityId)), g = c[1], k = g.replace("complete.aspx", "completemobile2.aspx").replace("?q=", "?activity=").replace("&joinid=", "&joinactivity=").replace("&JoinID=", "&joinactivity="), window.isYdb && (k += "&ydb=1"), window.isPvw && (k += "&pvw=1"), window.isQywx && (k += "&qw=1"), "miniprogram" === window.__wxjs_environment && (k += "&minip=1"), document.referrer && !window.access_token && (k += "&rfrr=1"), window.corpId && (k += "&corpId=" + encodeURIComponent(corpId)), window.udsid && (k += "&udsid=" + window.udsid), window.flist && (k += "&flist=1"), 2 == window.isChuangGuan && (k += window.hasChuGuanSuc ? "&hcgs=1&newres=1" : "&hcgs=0&newres=1"), (!window.completeResultType || 3 == window.completeResultType) && window.isChuangGuan > 2 && (k += "&newres=1"), startAge && (k += "&sa=" + encodeURIComponent(startAge)), endAge && (k += "&ea=" + encodeURIComponent(endAge)), gender && (k += "&ge=" + gender), marriage && (k += "&marr=" + marriage), education && (k += "&educ=" + education), startIncome && (k += "&si=" + encodeURIComponent(startIncome)), endIncome && (k += "&ei=" + encodeURIComponent(endIncome)), window.newAward && (k += "&nw=" + encodeURIComponent(window.newAward)), j = new Date, j.setTime(j.getTime() + 18e5), jpMatchId && (k += "&jpm=" + jpMatchId), window.refDepartment && (k += "&rdept=" + encodeURIComponent(window.refDepartmentVal)), window.refUserId && (k += "&ruserid=" + encodeURIComponent(window.refUserIdVal)), window.parterrealname && (k += "&parterrealname=" + encodeURIComponent(window.parterrealname)), window.parterdept && (k += "&parterdept=" + encodeURIComponent(parterdept)), window.parterpuser && (k += "&parterpuser=" + encodeURIComponent(parterpuser)), window.parterextf && (k += "&parterextf=" + encodeURIComponent(parterextf)), window.wxUserId && $("#hrefGoBack2")[0] && (k += "&wxuserid=" + encodeURIComponent(window.wxUserId)), window.sojumpParm && (k += "&sojumpparm=" + encodeURIComponent(sojumpParm)), inviteid && (k += "&inviteid=" + encodeURIComponent(inviteid)), window.jbkid && (k += "&jbkid=" + jbkid), window.sourceurl && (k += "&source=" + encodeURIComponent(sourceurl)), window.sjUser && (k += "&sjUser=" + encodeURIComponent(sjUser)), window.sjts && (k += "&sjts=" + sjts), window.sjsign && (k += "&sjsign=" + encodeURIComponent(sjsign)), window.FromSj && (k += "&fromsj=1"), window.parterjoiner && (k += "&parterjoiner=" + encodeURIComponent(parterjoiner)), window.needHideShare && (k += "&nhs=1"), (window.isSimple || window.top != window) && (k += "&s=t", window.top != window && (k += "&iframe=1")), window.sourcename && (k += "&souname=" + encodeURIComponent(sourcename)), window.touPiaoItemIndex && (k += "&tpii=" + touPiaoItemIndex), window.user_token && (k += "&user_token=" + encodeURIComponent(window.user_token)), window.nbk && (k += "&nbk=1"), !window.wxthird && window.access_token && window.hashb && (k += "&access_token=" + encodeURIComponent(access_token) + "&openid=" + encodeURIComponent(openid)), setCookie("join_" + activityId, "1", j.toUTCString(), "/", "", null), $("#shopcart")[0] && "none" != $("#shopcart")[0].style.display && (k += "&ishop=1"), getQueryVariable("creativeid") && getQueryVariable("clickid") ? k += "&creativeid=" + getQueryVariable("creativeid") + "&clickid=" + getQueryVariable("clickid") : getQueryVariable("bd_vid") && (k += "&bd_vid=" + getQueryVariable("bd_vid")), clearAnswer(), addtolog(k), i = wjxlang.tit_submit_success, i = '<div class="submit_tip_color" style="height: 40px;line-height:40px;background: #FFFFFF;box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.15);border-radius: 4px;font-size: 14px;font-weight: 500;margin:0 auto;text-align:center;color:#262626;display:inline-block;padding: 0 20px;"><i class="iconfontNew" style="color:#01AD56!important;">&#xe699;</i>' + i + "</div>", window.isinterview || ($("#ValError").html(i), $("#captchaTit").html(i)), window.oneneedcontcp ? (process360Jump(k), void 0) : (l = 1500, c[3] && (m = c[3] || "", n = c[4] || "", o = k.match(/&sojumpindex=(\d*)&/)[1], doAjaxPost(m, n, o)), window.location.href.indexOf("wjxmp=1") > -1 && (k += "&wjxmp=1"), setTimeout(function () {
        if (1 == window.hasprize && 2 != cqType) k += "&cj=1"; else if (window.isinterview && 2 != cqType) return window.maxTimer && clearInterval(maxTimer), reportSend($("#thinkText").html()), void 0;
        window.location.href.indexOf("wjxmp=1") > -1 && k.indexOf("completemobile2") > -1 && (1 == cqType || 7 == cqType) && 1 == window.jumpOrgMinPro && !window.isJieLong && window.isVip ? wx.miniProgram.redirectTo({url: "/pages/completemobile/completemobile?tloc=" + encodeURIComponent(k)}) : locationReplace(k)
    }, l), void 0));
    if (11 == d) return p = c[1], p ? -1 == p.toLowerCase().indexOf("http://") && -1 == p.toLowerCase().indexOf("https://") && -1 == p.toLowerCase().indexOf("hap://") && (p = "http://" + p) : p = window.location.href, q = c[3] || "", c[4] || "", s = c[5] || "", window.wxthird && window.openid && (p += p.indexOf("?") > -1 ? "&" : "?", p += "openid=" + encodeURIComponent(openid)), window.access_token && window.openid && p.toLowerCase().indexOf("ksres.aspx") > -1 && (t = q.split(","), u = "sojumpindex=" + t[0], u = p.indexOf("?") > -1 ? "&" + u : "?" + u, t[1] && (u += "&totalvalue=" + t[1]), t[2] && (u += "&valuesign=" + encodeURIComponent(t[2])), u += "&access_token=" + encodeURIComponent(access_token), u += "&openid=" + encodeURIComponent(openid), p += u), window.parterjoiner && (p += p.indexOf("?") > -1 ? "&" : "?", p += "parterjoiner=" + encodeURIComponent(parterjoiner)), v = c[2], w = 1e3, v && 0 == window.jiFenBao && "不提示" != v && ($("#ValError").html(v), w = 2e3), debugLog(v), clearAnswer(), addtolog(p), window.oneneedcontcp ? (process360Jump(p), void 0) : (c[6] && (m = c[6] || "", n = c[5] || "", q = c[3] || "", doAjaxPost(m, n, q)), setTimeout(function () {
        -1 == p.toLowerCase().indexOf("hap://") && s ? openPostWindow(p, s, "_self") : location.replace(p)
    }, 1500), void 0);
    if (3 == b) {
        if (12 == d) return to_next_page(), $("#ctlNext").show(), $("#lxNextBtn").show(), void 0;
        if (13 == d) return x = c[1], y = c[2] || "0", window.infwSubmit && window.informeNoBtnJumplink ? (location.replace(informeNoBtnJumplink), void 0) : (g = "/wjx/join/completemobile2.aspx?activity=" + activityId + "&joinactivity=" + x, g += "&v=" + y, window.infwSubmit && (g += "&infw=0"), setCookie("join_" + activityId, "1", null, "/", "", null), window.sjUser && (g += "&sjUser=" + encodeURIComponent(sjUser)), window.sjts && (g += "&sjts=" + sjts), window.sjsign && (g += "&sjsign=" + encodeURIComponent(sjsign)), window.FromSj && (g += "&fromsj=1"), window.sourceurl && (g += "&source=" + encodeURIComponent(sourceurl)), window.sojumpParm && (g += "&sojumpparm=" + encodeURIComponent(sojumpParm)), window.u && (g += "&u=" + encodeURIComponent(window.u)), window.userSystem && (g += "&userSystem=" + encodeURIComponent(window.userSystem)), window.systemId && (g += "&systemId=" + encodeURIComponent(window.systemId)), window.newAward && (g += "&nw=" + encodeURIComponent(window.newAward)), c[3] && (g += "&comsign=" + encodeURIComponent(c[3])), getQueryVariable("creativeid") && getQueryVariable("clickid") ? g += "&creativeid=" + getQueryVariable("creativeid") + "&clickid=" + getQueryVariable("clickid") : getQueryVariable("bd_vid") && (k += "&bd_vid=" + getQueryVariable("bd_vid")), clearAnswer(!0), location.replace(g), void 0);
        if (11 == d) return;
        if (5 == d) return alertNew(e), void 0;
        if (c[2]) return alertNew(c[2]), $("#divNext").show(), void 0
    } else if (9 == d || 16 == d || 23 == d) if (9 == d && (rName = "", hasMatchName = !1), z = parseInt(c[1]), A = z + 1 + "", B = c[2] || wjxlang.submit_error, alertNew(B), 23 == d && -1 == z) ; else {
        if (questionsObject[A]) {
            for (C = -1, z = 0; z < pageHolder.length; z++) {
                for (D = pageHolder[z].questions, E = !1, F = 0; F < D.length; F++) if ($(D[F]).attr("id") == $(questionsObject[A]).attr("id")) {
                    C = z, E = !0;
                    break
                }
                if (E) break
            }
            if (C > -1 && C != cur_page) for (; ;) {
                if (show_prev_page(), C == cur_page) break;
                if (0 == cur_page) break
            }
            writeError(questionsObject[A], B, 3e3), window.kslxshowqs && kslxshowqs(questionsObject[A]), $(questionsObject[A])[0].scrollIntoView(), window.bindUploadMultipleFn && bindUploadMultipleFn($(questionsObject[A])[0])
        }
        window.isinterview && ($(".interviewOver").removeClass("interviewOver"), window.hasFanishInterview = !1, $(questionsObject[A]).find(".interview_reanswer").click()), $("#ctlNext").show(), $("#lxNextBtn").show()
    } else if (2 == d || 21 == d) alertNew(e), window.submitWithGet = 1, $("#ctlNext").show(), $("#lxNextBtn").show(); else {
        if (4 == d) return alertNew(e), $("#ctlNext").show(), $("#lxNextBtn").show(), void 0;
        if (19 == d || 5 == d) return $("#ValError").html(e), window == window.top && alertNew(e), void 0;
        if (17 == d || 34 == d) return alertNew(wjxlang.submit_password_repeat), void 0;
        if (22 == d) return alertNew(wjxlang.submit_need_validate), refresh_validate(!0), nvvv = 1, $("#ctlNext").show(), $("#lxNextBtn").show(), void 0;
        if (7 == d) return alertNew(e), refresh_validate(!0), $("#ctlNext").show(), $("#lxNextBtn").show(), void 0;
        if (35 == d) return alertNew("问卷不能使用数字链接"), $("#ValError").html("问卷不能使用数字链接"), void 0;
        H = c[1], H || (H = a), alertNew(H), $("#ctlNext").show(), $("#lxNextBtn").show()
    }
    refresh_validate()
}

function doAjaxPost(a, b, c) {
    if (a) {
        a = a.split("§");
        for (var d = 0; d < a.length; d++) !function (a, b, c) {
            $.ajax({
                url: a, type: "POST", data: {content: b}, timeout: 5e3, async: !1, success: function (e, f) {
                    addtoActivityPost(a, b, f, c, d)
                }, error: function (e, f) {
                    addtoActivityPost(a, b, f, c, d)
                }
            })
        }(a[d], b, c)
    }
}

function openPostWindow(a, b, c) {
    var e, d = document.createElement("form");
    d.id = "tempForm1", d.method = "post", d.action = a, d.target = c, e = document.createElement("input"), e.type = "hidden", e.name = "content", e.value = b, d.appendChild(e), document.body.appendChild(d), $(d).submit(), document.body.removeChild(d)
}

function process360Jump(a) {
    var b, c;
    return window.oneneedcontcp ? (b = window.location.href, b = b.split("#")[0], window.isWeiXin && (b += -1 != b.indexOf("?") ? "&t=" + Date.parse(new Date) : "?t=" + Date.parse(new Date)), getQueryVariable("corpId") || -1 != b.indexOf("cpid=") || (b += -1 != b.indexOf("?") ? "&cpid=" + window.cpid : "?cpid=" + window.cpid), c = wjxlang.tit_360people, 1 == window.oneDept && (c = wjxlang.tit_360depart), confirmnew(c, function () {
        window.location.href = b
    }, function () {
        location.replace(a)
    }), void 0) : void 0
}

function clearFieldValue(a, b) {
    var c, d, e, f, g, h, i, j, k, l, m;
    if (isLoadingAnswer) return !1;
    if (c = getTopic($(a)), d = $(a).attr("hasjump"), e = $(a).attr("refered"), f = $(a).attr("type"), g = $(a).attr("hasitemrelation"), !(b || ItemrelationQs[c] || relationQs[c] || d || e || "11" == f || g)) return !1;
    if (-1 != $(a).attr("relation")) {
        if (h = !1, "3" == f) {
            if ("1" == $(a).attr("qingjing")) return !1;
            $("input[type='radio']:checked", $(a)).each(function () {
                h = !0, this.checked = !1, $(this).parent().parent().removeClass("checked").find("a.jqradio").removeClass("jqchecked")
            }), $("input.OtherRadioText", $(a)).each(function () {
                this.value && $(this).val("").blur()
            }), h && displaypeie($(a), "input[type=radio]", 1)
        } else "4" == f ? ($("input:checked", $(a)).each(function () {
            h = !0, this.checked = !1, $(this).parent().parent().removeClass("checked").find("a.jqcheck").removeClass("jqchecked")
        }), h && displaypeie($(a), "input[type=checkbox]", 2)) : "6" == f || "5" == f ? ($("a.rate-off", $(a)).each(function () {
            $(this).hasClass("rate-on") && (h = !0), $(this).removeClass("rate-on");
            var a = $(this).attr("mode");
            a ? $(this).removeClass("rate-on" + a) : $(this).removeClass("rate-ontxt")
        }), i = $("#divMatrixHeader")[0].referTopic, i == c && $("#divMatrixHeader").hide(), saveLikert(a), 1 == $(a).attr("pj") && ($(a).find(".evaluateTagDiv").hide(), $(a).find(".evaluateTagItem").removeClass("clicked"), $(a).find(".wjxui_limit_box").hide().find("textarea").val("")), 1 == $(a).attr("alone") && (j = $(a).children(".aloneAnswer")[0], j.rowsIndex = 1, j.updateprocess && j.updateprocess(), j.showrow && j.showrow())) : "7" == f ? ("-2" != $("select", $(a)).val() && ($("select", $(a)).val("-2").trigger("change"), h = !0), h && displaypeie($(a), "option", 5)) : "8" == f && d ? (k = $("input", $(a)), k.val() && (h = !0, k.val("").change())) : "9" == f && d ? ($("input.ui-slider-input", $(a)).each(function () {
            this.value && ($(this).val("").change(), h = !0)
        }), $(".textCont", $(a)).text("").css({
            display: "inline-block",
            width: 72
        }).parent(".textEdit").addClass("initStyle"), $("input", $(a)).each(function () {
            var a = $(this).val();
            a.length > 0 && (h = !0, $(this).val("").change())
        }), $("select", $(a)).each(function () {
            var a = $(this).val();
            a && -2 != a && (h = !0, 1 == $(this).find("option[value='-2']").length ? $(this).val("-2").change() : $(this).val("").change())
        })) : "11" == f ? ($("li.ui-li-static", $(a)).each(function () {
            $(this).find("span.sortnum").hasClass("sortnum-sel") && (h = !0), $(this).find("span.sortnum").html("").removeClass("sortnum-sel"), $(this).attr("check", "")
        }), h && displaypeie($(a), "li.ui-li-static", 3)) : "13" == f ? ($(a)[0].fileName && "" != $(a)[0].fileName && (h = !0), $(a).find(".deleteuploadNew-icon").click(), l = $(a).find("iframe").attr("src"), $(a).find("iframe").attr("src", l).show(), $(a)[0].fileName = "", $(a).find(".uploadmsg").html(""), jump && $(a)[0].fileName && "" != $(a)[0].fileName && jump(a, "")) : "1" == f && (d || b) ? (k = $("input", $(a)), k.val() && (h = !0, k.val("").change(), "datebox" == k.attr("data-role") && "1" == $(a).attr("haspeie") && dateQuota($(k).get(0), $(a)))) : "10" != f || !d && "1" != $(a).attr("maxdiff") ? "12" == f && $("input", $(a)).each(function () {
            $(this).val() && (h = !0, $(this).val(0).change())
        }) : ("1" == $(a).attr("maxdiff") && setTimeout(function () {
            $(a).find(".maxdiffWrap .md_attrcont").removeClass("pkChecked pktextChecked"), $(a).find(".maxdiffWrap .jqchecked").removeClass("jqchecked"), $(a).find(".maxdiffWrap .maxdifftab").css({
                display: "none",
                left: "0px"
            }), $(a).find(".maxdiffWrap .maxdifftab").eq(0).show(), $(a).find(".maxdiffWrap .curmdsetindex").html(1), $(a).find("input[type='text']").val("")
        }, 500), $("select", $(a)).each(function () {
            var a = $(this).val();
            a && -2 != a && (h = !0, 1 == $(this).find("option[value='-2']").length ? $(this).val("-2").change() : $(this).val("").change())
        }), $("input,textarea", $(a)).each(function () {
            var a = $(this).val();
            a.length > 0 && (h = !0, $(this).val("").change())
        }));
        return h && saveAnswer($(a)), !h || "3" != f && "4" != f && "11" != f && "5" != f && "6" != f || (e && createItem(a), m = getTopic(a), GetRelationAnsewer(m, !0)), "1" == $(a).attr("hasgs") && clickClearAsnwer($(a).attr("topic")), h
    }
}

function validateQ(a, b) {
    var j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, c = "", d = $(a).attr("req"), e = $(a).attr("type"),
        f = !0, g = $(a)[0], h = "";
    if ($(a).attr("hasjump"), "1" == e) {
        if (j = $("input", $(a)), k = replace_specialChar($.trim(j.val())), k.length - 3e3 > 0) return h = wjxlang.tips_overtextnum, writeError(a, h, 3e3), !1;
        f = 0 == k.length ? !1 : !0, "密码" == $(j[0]).attr("verify") && (j[0].needCheckConfirm = !0), h = verifyTxt(a, j), !h && k && (j[0].svalue = k), j[0].gserror && (f = !1, c = "验证失败：" + j[0].gserror)
    } else if ("21" == e) l = 1 == $(a).attr("isshelf"), "1" == d && (l ? (m = getshelfanswer(a), m || (f = !1)) : (n = 0, $(".shop-item .itemnum", a).each(function () {
        var b = $(this).val();
        b && "0" != b && n++
    }), 0 == n && (f = !1))), l || (h = verifyCheckMinMax($(a), !1, !1)); else if ("2" == e) {
        if (j = $("textarea", $(a)), k = replace_specialChar($.trim(j.val())), k.length - 3e3 > 0) return h = wjxlang.tips_overtextnum, writeError(a, h, 3e3), !1;
        f = 0 == k.length ? !1 : !0, h = verifyTxt(a, j), !h && k && (j[0].svalue = k)
    } else if ("3" == e) f = !1, $(a).find("input:checked").each(function () {
        var b, c, d;
        return f = !0, -1 == this.getAttribute("jumpto") && (needSubmitNotValid = !0), b = $(this).attr("rel"), b && (c = $("#" + b), d = c.val().trim(), c.attr("required") && 0 == d.length) ? (h = validate_textbox, c.hasClass("cusomSelect") && (h = validate_textbox_select), writeError(a, h, 3e3), !1) : void 0
    }); else if ("4" == e) f = !1, o = !1, $(a).find("input:checked").each(function () {
        var b, c;
        return f = !0, b = $(this).attr("rel"), b && (c = $("#" + b), c.attr("required") && 0 == c.val().length) ? (h = validate_textbox, c.hasClass("cusomSelect") && (h = validate_textbox_select), c.focus(), writeError(a, h, 3e3), o = !0, !1) : void 0
    }), o || (h = verifyCheckMinMax($(a), !0)); else if ("11" == e) f = 0 == $("li.ui-li-static[check='1']", $(a)).length ? !1 : !0, o = !1, $("li.ui-li-static[check='1']", $(a)).each(function () {
        var b, c;
        return f = !0, b = $("input[type='hidden']", $(this)).eq(0).attr("id"), b && (c = $("#tq" + b), c.attr("required") && 0 == c.val().length) ? (h = validate_textbox, c.focus(), writeError(a, h, 3e3), o = !0, !1) : void 0
    }), o || (h = verifyCheckMinMax($(a), !0, !0)); else if ("5" == e) f = validateScaleRating($(a)); else if ("6" == e) {
        if (h = validateMatrix($(a), d)) return writeError(a, h, 1e3), !1
    } else if ("7" == e) p = $("select", $(a))[0], f = 0 == p.selectedIndex ? !1 : !0, f && p.options[p.selectedIndex] && -1 == p.options[p.selectedIndex].getAttribute("jumpto") && (needSubmitNotValid = !0); else if ("8" == e) f = 0 == $("input", $(a)).val().length ? !1 : !0; else if ("9" == e || "33" == e || "34" == e) q = "input", "33" == e && (q = ".file"), "34" == e && (q = "textarea"), "9" == e && (q = "input:not(.file input[type=file]), .file"), $(q, $(a)).each(function () {
        var d, g, b = $(this);
        if ("33" == e || "9" == e && b[0].className.indexOf("file") > -1) b.parent()[0].fileName || (f = !1); else {
            if (d = replace_specialChar($.trim(b.val())), window.hasReferClient && (g = this.parentNode.parentNode.parentNode, "指定选项" == this.getAttribute("verify") && (g = this.parentNode.parentNode), g && "none" == g.style.display)) return !0;
            if (0 == d.length) {
                if (f = !1, "0" != b.attr("isrequir")) return a[0].errorControl = this, !1;
                f = !0
            }
            if (h = verifyTxt(a, b, !0)) return !1;
            if (h = checkOnly(a, b)) return !1;
            b[0].svalue = d, b[0].gserror && (f = !1, c = "验证失败：" + b[0].gserror)
        }
    }); else if ("12" == e) {
        if (r = $(a).attr("total"), s = r, $("input", $(a)).each(function () {
            var b, c, a = $(this);
            return window.hasReferClient && (b = this.parentNode.parentNode.parentNode, b && "none" == b.style.display) ? !0 : (c = a.val(), 0 == c.length && (f = !1), c && (s -= c), void 0)
        }), 0 != s && (t = !1, s != r || d || (t = !0), !t)) return writeError(a, "", 3e3), !1
    } else "13" == e ? ($(a)[0].fileName || (f = !1), $(a).find(".heatmapWrap").length > 0 && $(a)[0].isHeaterr && (c = $(a)[0].isHeaterr, f = !1)) : "10" == e && (u = "input,textarea", "1" == $(a).attr("select") && (u = "select"), v = !0, w = "table", x = !1, "1" == $(a).attr("fixedslider") && (x = !0), x && (w = ".ui-table-scroll table"), $(a)[0].errorControl = null, y = "1" == $(a).attr("maxdiff"), z = "1" == $(a).attr("conjoint"), $(w, $(a)).each(function () {
        var g, e = $(this);
        return !window.hasReferClient && !$(a).attr("zizeng") || (g = this.parentNode, !g || "none" != g.style.display || y || z) ? ($(u, e).each(function () {
            var g = $(this), i = g.val(), j = this.parentNode.parentNode;
            if (x && (j = $(this).closest("tr")[0]), j && "none" != j.style.display) {
                if ((!i || 0 == i.length || "select" == u && "-2" == i) && "1" == d && !b) return f = !1, e.parent()[0].errorControl = this, $(a)[0].errorControl || ($(a)[0].errorControl = this), !1;
                if (h = verifyTxt(a, g, !0), g[0].gserror && (f = !1, c = "验证失败：" + g[0].gserror), h || c) return e.parent()[0].errorControl = this, a[0].errorControl = this, v = !1, !1
            }
        }), v ? void 0 : !1) : !0
    }));
    return ("3" == e || "4" == e || "11" == e) && (A = getTopic(a), B = document.getElementById("divRef" + A), C = B && "" == B.style.display, C && (f = !0)), !f && "1" == d || b || c ? (h = validate_info_wd1, "1" == e || "2" == e ? h = validate_info_q1 : "3" == e || "4" == e || "7" == e ? h = validate_info_c1 : "13" == e ? h = validate_info_f1 : "21" == e && (h = type_radio_down), "6" == e && $(a)[0].isMatrixFillError && (h = wjxlang.tit_way), c && (h = c), "10" != e || $(a).attr("fixedslider") || "1" == $(a).attr("maxdiff") || "1" == $(a).attr("conjoint") ? writeError(a[0], h, 1e3) : $(".mdivtable", $(a)).each(function () {
        $(this)[0].errorControl && writeError(a[0], h, 1e3, $(this)[0])
    })) : h && "21" == e ? (h = h.replace(/项/g, "种商品"), writeError(a[0], h, 1e3)) : ($("span.error", $(a)).hide(), $("div.field-label", $(a)).css("background", "")), h ? !1 : (g.removeError && g.removeError(), !0)
}

function dataenc(a) {
    var c, d, e, b = ktimes % 10;
    for (0 == b && (b = 1), c = [], d = 0; d < a.length; d++) e = a.charCodeAt(d) ^ b, c.push(String.fromCharCode(e));
    return c.join("")
}

function show_prev_page() {
    var a, b, c, e, f, g, h, i, j;
    if (cur_page > 0 && pageHolder[cur_page - 1].hasExceedTime) return alertNew(wjxlang.tit_prevpage_timeup), void 0;
    for (a = $("#divNext")[0], b = $("#divPrev")[0], pageHolder[cur_page].style.display = "none", stopMediaPlay(), a.style.display = "", $("#divSubmit").hide(), $("#divMatrixHeader").hide(), cur_page--, c = cur_page; c >= 0 && pageHolder[c].skipPage; c--) cur_page--;
    for (window.isKaoShi, c = cur_page; c >= 0; c--) {
        for (e = pageHolder[c].questions, f = !1, g = 0; g < e.length; g++) if (h = e[g], "none" != h.style.display) {
            f = !0;
            break
        }
        if (i = !1, !f && pageHolder[c].childNodes && pageHolder[c].childNodes.length > 0) for (j = pageHolder[c].cuts, j || (j = pageHolder[c].cuts = $(".cutfield", pageHolder[c])), g = 0; g < j.length; g++) if ("none" != j[g].style.display) {
            i = !0;
            break
        }
        if (f || i || !(cur_page > 0)) break;
        cur_page--
    }
    clockRecordTime(), window.lastLabel && lastLabel.hide(), 0 == cur_page && (b.style.display = "none", $("#divDesc").show(), $("#toptitle").show(), window.isChuangGuan || $("#divContent").css("padding-top", "0"), window.isMobile || $("#divMob").show()), b.style.marginRight = "20px", b.style.width = "140px", window.islandscape && (b.style.width = "200px"), pageHolder[cur_page].style.display = "", pageHolder[cur_page].scrollIntoView(), $("#ValError").html(""), fixBottom(), initSlider(), showProgress(), initSelelct2(), curPageHeatmapInit(), TotalValBoxInit()
}

function judgetonext(a) {
    var b = "true" == $(pageHolder[cur_page]).attr("iszhenbie");
    validate($("#divNext")) && (needSubmitNotValid && window.isRunning && 1 != a ? ($("#divNext").hide(), groupAnswer(3)) : b && window.isRunning && !isAutoSubmit && 1 != a ? ($("#divNext").hide(), groupAnswer(3)) : to_next_page())
}

function show_next_page(a) {
    var b = $("#divNext a")[0];
    if (!b || !b.disabled || isLoadingAnswer || isAutoSubmit) {
        if (window.buttonfooter && window.buttonfooter.hide(), window.hasHeatMap && window.hasSplicing) return getHeatmapAns(function () {
            getSplicingAns(function () {
                judgetonext(a)
            })
        }), void 0;
        if (window.hasHeatMap && !a) return getHeatmapAns(function () {
            judgetonext(a)
        }), void 0;
        if (window.hasSplicing && !a) return getSplicingAns(function () {
            judgetonext(a)
        }), void 0;
        judgetonext(a), 2 == window.isChuangGuan && ($(".lxtitle").hide(), $("#divContent").css("margin", "80px 10px 60px"))
    }
}

function to_next_page() {
    var a, b, c, e, f, g, h, i, j, k, l, m, n;
    for ($("#divMatrixHeader").hide(), a = $("#divNext")[0], b = $("#divPrev")[0], b && (b.style.display = displayPrevPage), clockRecordTime(!0), window.isinterview || (pageHolder[cur_page].style.display = "none"), stopMediaPlay(), cur_page++, cur_page >= 1 && ($("#toptitle").hide(), $("#divDesc").hide(), $("#divPromote").hide(), window.isChuangGuan || $("#divContent").css("padding-top", "20px"), window.isMobile || ($("#divMob").hide(), window.isChuangGuan || $("#divContent").css("padding-top", "30px"))), c = cur_page; c < pageHolder.length && pageHolder[c].skipPage; c++) cur_page++;
    for (window.isKaoShi, c = cur_page; c < pageHolder.length; c++) {
        for (e = pageHolder[c].questions, f = !1, g = !1, h = 0; h < e.length; h++) if (i = e[h], "-1" == $(e[h]).attr("relation") && (g = !0), "none" != i.style.display) {
            f = !0;
            break
        }
        if (!f && g && window.zunxiangAutoClick && window.zunxiangAutoClick(cur_page), j = !1, !f && pageHolder[c].childNodes && pageHolder[c].childNodes.length > 0) for (k = pageHolder[c].cuts, k || (k = pageHolder[c].cuts = $(".cutfield", pageHolder[c])), h = 0; h < k.length; h++) if ("none" != k[h].style.display) {
            j = !0;
            break
        }
        if (f || j || !(cur_page < pageHolder.length - 1)) break;
        cur_page++
    }
    for (l = !0, c = cur_page + 1; c < pageHolder.length; c++) pageHolder[c].skipPage || (l = !1);
    for (a && (cur_page >= pageHolder.length - 1 || l ? (a.style.display = "none", b && (b.style.marginRight = "0px", b.style.width = "100%", window.islandscape && (b.style.width = "200px")), $("#divSubmit").show()) : cur_page < pageHolder.length - 1 && (a.style.display = "", b && (b.style.marginRight = "20px", b.style.width = "140px", window.islandscape && (b.style.width = "200px")))), cur_page >= pageHolder.length && (cur_page = 0), pageHolder[cur_page].style.display = "", showProgressBar(), clockRecordTime(), window.lastLabel && lastLabel.hide(), hideTip(), window.bindUploadMultipleFn && bindUploadMultipleFn(pageHolder[cur_page]), c = 0; c < pageHolder[cur_page].questions.length; c++) "1" === pageHolder[cur_page].questions[c].getAttribute("fixedslider") && setFixedSliderTableHandler($(pageHolder[cur_page].questions[c]));
    window.zunxiangAutoClick && window.zunxiangAutoClick(), initSlider(), matrixFixedTitle(), m = document.getElementById("divMaxTime"), window.isinterview || (m && "" == m.style.display ? $("body,html").animate({scrollTop: 0}, 100) : pageHolder[cur_page].scrollIntoView()), showProgress(), n = (cur_page >= pageHolder.length - 1 || l) && pageHolder[cur_page].questions && 0 == pageHolder[cur_page].questions.length && pageHolder[cur_page].cuts && 0 == pageHolder[cur_page].cuts.length, n && autoSubmit(null, !0, !0), window.hasPageTime && processMinMax(), 2 == window.isChuangGuan && ($("#divSubmit").hide(), $("fieldset:visible").children("[ceshi='1']").length > 0 && !$("fieldset:visible").children().eq(0).hasClass("cutfield") && timeLimit(), $("fieldset:visible").children().eq(0).hasClass("cutfield") && $("fieldset:visible").children().eq(0).show()), fixBottom(), $("#divMatrixHeader").hide(), adjustVideoHeight(pageHolder[cur_page]), initDescImg(), initSelelct2(), curPageHeatmapInit(), TotalValBoxInit()
}

function processSearch() {
    var a, b, c;
    document.referrer && (a = document.referrer, b = !1, a && (a.indexOf("baidu.com") > -1 || a.indexOf("google.com") > -1 || a.indexOf("so.360.cn") > -1 || a.indexOf(".so.com") > -1 || a.indexOf(".sogou.com") > -1 || a.indexOf(".soso.com") > -1 || a.indexOf(".haoso.com") > -1 || a.indexOf(".sm.cn") > -1) && (b = !0), b && (c = "<a href='https://www.wjx.cn/mobile/publicsurveys.aspx' style='color:#66beff;'>搜索更多相关问卷模板</a>", document.title && (document.title.indexOf("员工满意度") > -1 ? c = "<a href='https://www.wjx.cn/mobile/app/mydreport.aspx' style='color:#66beff;'>员工满意度典型应用</a>" : document.title.indexOf("员工敬业度") > -1 && (c = "<a href='https://www.wjx.cn/mobile/app/jydreport.aspx' style='color:#66beff;'>员工敬业度典型应用</a>")), $("#divSearch").show().html(c)))
}

function initSlider() {
    if (window.hasSlider) {
        var a = new Array;
        $(pageHolder[cur_page].questions).each(function () {
            var d, e, f, g, h, b = $(this), c = b.attr("type");
            if (("8" == c || "12" == c || "9" == c || "10" == c) && (d = getTopic(b), e = document.getElementById("divRef" + d), f = e && "" == e.style.display, !f)) for (g = $("input.ui-slider-input:visible", b), h = 0; h < g.length; h++) a.push(g[h])
        }), bindSlider(0, a)
    }
}

function initSelelct2() {
    if (window.hasDropDown && pageHolder[cur_page] && !pageHolder[cur_page].initSelelct2) {
        pageHolder[cur_page].initSelelct2 = !0;
        var a = $(pageHolder[cur_page]).find("select").length;
        pageHolder[cur_page].selectLen = a, $(pageHolder[cur_page].questions).each(function () {
            "none" != this.style.display && initEleSelect2(this)
        })
    }
}

function browserIsIe() {
    var a = window.navigator.userAgent.toLowerCase();
    return a.indexOf("edge") > -1 ? !0 : window.ActiveXObject || "ActiveXObject" in window ? !0 : !1
}

function initEleSelect2(a) {
    var b, c, d, e, f;
    if (window.hasDropDown && pageHolder[cur_page] && !a.hasInitSelect2 && (b = $(a).attr("type"), 7 == b || 9 == b || 10 == b)) {
        if (c = browserIsIe(), d = $(a).find("select"), a.hasInitSelect2 = !0, c && 10 == b || !d.select2 || window.useRawSelect || d.length > 100 || pageHolder[cur_page].selectLen > 300 || isSmallerIos12() && self != top) return d.show(), c || d.parent().addClass("arrowAfter"), adjustIosInput(d), "1" === a.getAttribute("fixedslider") && setFixedSliderTableHandler($(a)), a.useSelect = !0, void 0;
        e = "zh-CN", 1 == langVer ? e = "" : 2 == langVer && (e = "zh-TW"), f = 10, window.isinterview && (f = 1e3), d.select2({
            language: e,
            width: "off",
            minimumResultsForSearch: f
        }), d.on("select2:open", function (a) {
            try {
                var b = a.currentTarget.options.length - 1;
                1 != langVer && $(".select2-search input").prop("focus", !1).prop("placeholder", wjxlang.total_item("{0}", b)), adjustIosInput(".select2-search__field")
            } catch (c) {
            }
        }), d.on("select2:close", function () {
            try {
                count360Val()
            } catch (b) {
            }
        })
    }
}

function matrixFixedTitle() {
    var b, a = new Array;
    0 != pageHolder.length && ($(pageHolder[cur_page].questions).each(function () {
        var d, b = $(this), c = b.attr("type");
        ("3" == c || "4" == c || "6" == c || "9" == c || "10" == c) && ("3" == c || "4" == c ? (d = $(b).children(".ui-controlgroup").children().length, $(b).children(".ui-controlgroup").hasClass("column2"), d /= 2, d >= 8 && a.push(b)) : b.find(".rowtitle").length >= 8 && a.push(b))
    }), 0 != a.length && (b = $(window), 1 == window.IsPar && (b = $("body")), b.scroll(function () {
        var d, e, f, g, h, i, j, c = b.scrollTop();
        for (d = 0; d < a.length; d++) if (!($(a[d]).is(":hidden") || $(a[d]).children(".refer-style").length > 0)) {
            if (e = $(a[d]).offset().top, 1 == window.IsPar && (e = $(a[d]).offset().top + c), c > e + $(a[d]).find(".field-label").outerHeight() + 8 && c < e + $(a[d]).outerHeight()) {
                f = $(a[d]).find(".field-label").html(), lastLabel ? (lastLabel.html(f), lastLabel.show()) : (g = 0, h = document.getElementById("divMaxTime"), h && "" == h.style.display && (g = 40), i = "position:fixed;top:" + g + "px;left:0;right:0;padding:0 20px;border-bottom:1px solid #d9d9d9;background:rgba(255,255,255,0.8);text-overflow:ellipsis;white-space:nowrap;overflow: hidden;z-index: 200;height:42px;line-height:42px;", window.isMobile || (j = $("#form1").width(), i += "width:" + j + "px;left:50%;margin-left:-" + j / 2 + "px;"), lastLabel = $("<div style='" + i + "'></div>"), lastLabel.html(f), $("body").append(lastLabel));
                break
            }
            lastLabel && lastLabel.hide()
        }
    })))
}

function bindSlider(a, b) {
    var c = b.length;
    c > a && setTimeout(function () {
        $(b[a]).closest(".field").is(":visible") && $(b[a]).rangeslider({polyfill: !1}), bindSlider(a + 1, b)
    }, 10)
}

function initqSlider(a) {
    var b, c, d;
    window.hasSlider && (b = $(a), c = b.attr("type"), d = "8" == c || "12" == c || "9" == c || "10" == c, d && initEleSlider(a))
}

function initEleSlider(a) {
    if (!a.hasInitSlider || window.haschangeorientation) {
        var b = $("input.ui-slider-input:visible", a);
        b.rangeslider && 0 != b.length && (b.rangeslider({polyfill: !1}), window.haschangeorientation && b.rangeslider("update", !0), a.hasInitSlider = !0)
    }
}

function showProgress() {
    var a, b, c, d;
    1 != totalPage && (a = cur_page + 1, a > totalPage && (a = totalPage), b = a + "/" + totalPage, c = "页", (1 == langVer || langVer > 2) && (c = " Page"), $(".pagepercent").html(b + c), d = 100 * a / totalPage, $(".pagebar").width(d + "%"))
}

function verifyCheckMinMax(a, b, c, d, e) {
    var i, j, k, l, f = a.attr("minvalue"), g = a.attr("maxvalue"), h = a[0];
    if (0 == f && 0 == g) return "";
    if (i = 0, c ? i = $("li.ui-li-static[check='1']", a).length : 21 == a.attr("type") && (f || g) ? $("input.itemnum", a).each(function () {
        parseInt($(this).val()) > 0 && i++
    }) : i = $("input[type='checkbox']:checked", a).length, 0 != i || a.attr("req")) {
        if (j = "", 0 == langVer && (j = wjxlang.check_haschoice.replace("{0}", i)), k = !0, g > 0 && i > g) {
            if (d && !e) return l = wjxlang.check_duoxuan.replace("{0}", g), alertNew(l), 11 == a.attr("type") && "text" == $(d)[0].type ? $(d).parent().parent().trigger("click") : $(d).trigger("click"), "";
            j = wjxlang.validate_check_duoxuan.replace("{0}", g).replace("{1}", i - g), k = !1
        } else f > 0 && f > i && (j = wjxlang.validate_check_shaoxuan.replace("{0}", f).replace("{1}", f - i), k = !1, !c && 1 == i && $("input:checked", a).closest(".ui-checkbox").hasClass("huchi") && (k = !0));
        return h.errorMessage || (h.errorMessage = $(".errorMessage", a)[0]), k ? (h.errorMessage.innerHTML = "", i >= 10 && (h.errorMessage.innerHTML = "<span style='color:#333;'>" + j + "</span>"), "") : (b ? writeError(a[0], j, 3e3) : h.errorMessage.innerHTML = j, j)
    }
}

function checkOnly(a, b, c) {
    var g, h, i, j, k, l, m, d = $(b), e = d[0], f = d.attr("needonly");
    return f ? "地图" == d.attr("verify") ? "" : $(a)[0].needsms ? "" : (g = d.val()) ? g.length > 50 ? "" : (h = getTopic(a), i = d.attr("rowid"), i ? h = 1e4 * parseInt(h) + parseInt(i) : (j = d.attr("gapindex"), j && (h = 1e4 * parseInt(h) + parseInt(j))), c = c || activityId, k = "/joinnew/AnswerOnlyHandler.ashx?q=" + c + "&at=" + encodeURIComponent(g) + "&qI=" + h + "&o=true&t=" + (new Date).valueOf(), window.joinIdnew && (k += "&joinid=" + window.joinIdnew), l = $(a)[0], m = "", e.errorOnly || (e.errorOnly = new Object), e.errorOnly[g] ? (m = validate_only, !l.errorControl && h - 1e4 > 0 && (l.errorControl = e), writeError(l, m, 3e3), m) : ($.ajax({
        type: "GET",
        url: k,
        async: !1,
        success: function (a) {
            return "false1" == a ? (m = validate_only, e.errorOnly[g] = 1, !l.errorControl && h - 1e4 > 0 && (l.errorControl = e), writeError(l, m, 3e3), m) : ""
        }
    }), void 0)) : "" : ""
}

function verifyTxt(a, b, c) {
    var j, k, l, m, n, d = $.trim($(b).val()), e = $(b).attr("verify"), f = $(b).attr("minword"),
        g = $(b).attr("maxword"), h = $(a)[0], i = "";
    return d ? window.joinIdnew && "(空)" == d ? i : (c && "10" == a.attr("type") && (j = $(b).attr("isdigit"), j && ("1" == j ? e = "数字" : "2" == j && (e = "小数"), k = $(b).attr("min"), k && (f = k), l = $(b).attr("max"), l && (g = l))), m = null, "10" == a.attr("type") && (m = $(b).closest(".mdivtable").length > 0 ? !0 : !1), n = null, m && (n = $(b).closest(".mdivtable")[0]), i = verifyMinMax(d, e, f, g), i || (i = verifydata(d, e, $(b)[0])), i ? (c && (h.errorControl = $(b)[0]), m && (n.errorControl = $(b)[0]), writeError(h, i, 3e3, n), i) : (m ? n.removeError && n.removeError(!0) : h.removeError && h.removeError(), i || !h.needsms || h.issmsvalid || window.joinIdnew || (i = "提示：您的手机号码没有通过验证，请先验证", h.prevbtn && void 0 == h.prevbtn.isSending && (i = "提示：您的手机号码没有通过验证，请先发送验证码"), writeError(h, i, 3e3)), i)) : i
}

function validateMatrix(a, b) {
    var d, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, c = $("table.matrix-rating", $(a)), e = "";
    if ($(a)[0].isMatrixFillError = !1, f = "true" == $(a).attr("daozhi"), g = $(a).attr("ischeck"), f) {
        if (h = $(a).find("tr[tp='d']")[0], i = $(h).children(), g) {
            for (j = $(a).attr("minvalue"), k = $(a).attr("maxvalue"), l = 0; l < i.length; l++) if (m = $(i[l]).attr("fid"), n = $(h).closest("table").find("td[fid='" + m + "']").find("a.rate-on"), 0 != n.length) {
                if (j && n.length - j < 0) {
                    e = validate_info + validate_info_check5 + j + type_check_limit5, $(a)[0].errorControl = $(h).closest("table").find(".trlabel").children()[l];
                    break
                }
                if (k && n.length - k > 0) {
                    e = validate_info + validate_info_check4 + k + type_check_limit5, $(a)[0].errorControl = $(h).prev("tr")[0];
                    break
                }
                if (o = !0, $(n).each(function () {
                    var c, d, b = $(this).attr("needfill");
                    return b && (c = this.fillvalue || "", d = $(this).attr("req"), d && !c) ? (e = validate_info_wd1, $(a)[0].isMatrixFillError = !0, showMatrixFill(this, 1), o = !1, !1) : void 0
                }), !o) break
            } else if ($("#" + m, $(a)).val(""), "1" == b) {
                e = validate_info_wd1, $(a)[0].errorControl = $(h).closest("table").find(".trlabel").children()[l];
                break
            }
        } else for (l = 0; l < i.length; l++) if (m = $(i[l]).attr("fid"), n = $(h).closest("table").find("td[fid='" + m + "']").find("a.rate-on"), 0 != n.length) $(n).each(function () {
            var c, d, b = $(this).attr("needfill");
            return b && (c = this.fillvalue || "", d = $(this).attr("req"), d && !c) ? (e = validate_info_wd1, $(a)[0].isMatrixFillError = !0, showMatrixFill(this, 1), o = !1, !1) : void 0
        }); else if ($("#" + m, $(a)).val(""), "1" == b) {
            e = validate_info_wd1, $(a)[0].errorControl = $(h).closest("table").find(".trlabel").children()[l];
            break
        }
        return e
    }
    for (p = c[0].rows, l = 0; l < p.length; l++) if (h = p[l], q = h.getAttribute("tp"), "d" == q && (!window.hasReferClient || "none" != h.style.display || $(h).hasClass("alonetr"))) if (m = $(h).attr("fid"), n = $("a.rate-on", $(h)), d = "", 0 != n.length) {
        if (d = $(n[n.length - 1]).attr("dval"), g) {
            if (d = "", j = $(a).attr("minvalue"), k = $(a).attr("maxvalue"), j && n.length - j < 0) {
                e = validate_info + validate_info_check5 + j + type_check_limit5, $(a)[0].errorControl = $(h).prev("tr")[0], aloneAnswerToItem($(n[n.length - 1])[0]);
                break
            }
            if (k && n.length - k > 0) {
                e = validate_info + validate_info_check4 + k + type_check_limit5, $(a)[0].errorControl = $(h).prev("tr")[0], aloneAnswerToItem($(n[n.length - 1])[0]);
                break
            }
            if (o = !0, $(n).each(function () {
                var b, c, f;
                return d && (d += ";"), d += $(this).attr("dval"), b = $(this).attr("needfill"), b && (c = this.fillvalue || "", c = replace_specialChar(c).replace(/;/g, "；").replace(/,/g, "，"), d += spChars[2] + c, f = $(this).attr("req"), f && !c) ? (e = validate_info_wd1, $(a)[0].isMatrixFillError = !0, showMatrixFill(this, 1), o = !1, !1) : void 0
            }), !o) break
        } else if (r = $(n[n.length - 1]).attr("mode"), !r && (s = $(n[n.length - 1]).attr("needfill"), s && (t = n[n.length - 1].fillvalue || "", t = replace_specialChar(t).replace(/;/g, "；").replace(/,/g, "，"), d += spChars[2] + t, u = $(n[n.length - 1]).attr("req"), u && !t))) {
            e = validate_info_wd1, $(a)[0].isMatrixFillError = !0, showMatrixFill(n[n.length - 1], 1);
            break
        }
        $("#" + m, $(a)).attr("value", d)
    } else if ($("#" + m, $(a)).val(""), "1" == b) {
        e = validate_info_wd1, $(a)[0].errorControl = $(h).prev("tr")[0], $(h).children(".scalerowtitletd")[0] && ($(a)[0].errorControl = $(h).children(".scalerowtitletd")[0]), aloneAnswerToItem($("a.rate-off", $(h))[0]);
        break
    }
    return e
}

function validateScaleRating(a) {
    var b = !0, c = $(".scale-rating", $(a));
    return c = $("a.rate-on", c), 0 == c.length ? (b = !1, $("input:hidden", $(a)).val("")) : ($("input:hidden", $(a)).attr("value", $(c[c.length - 1]).attr("val")), -1 == $(c[c.length - 1]).attr("jumpto") && (needSubmitNotValid = !0)), b
}

function jump(a, b) {
    var e, f, c = $(a), d = c.attr("hasjump");
    d && (e = c.attr("type"), f = c.attr("anyjump"), f > 0 ? jumpAnyChoice(a) : 0 == f && "3" != e && "5" != e && "7" != e ? jumpAnyChoice(a) : jumpByChoice(a, b))
}

function jumpAnyChoice(a, b) {
    var f, c = $(a), d = c.attr("type"), e = !1;
    "1" == d ? e = $("input", c).val().length > 0 : "2" == d ? e = $("textarea", c).val().length > 0 : "3" == d ? e = $("input[type='radio']:checked", c).length > 0 : "4" == d ? e = $("input[type='checkbox']:checked", c).length > 0 : "5" == d ? e = $("a.rate-on", c).length > 0 : "6" == d ? e = $("a.rate-on", c).length > 0 : "7" == d ? e = -2 != $("select", c).val() : "8" == d ? e = $("input", c).val().length > 0 : "9" == d || "12" == d ? $("input", c).each(function () {
        var a = $(this).val();
        "9" == d && a.length > 0 ? e = !0 : "12" == d && a.length > 0 && parseInt(a[0]) && (e = !0)
    }) : "10" == d ? (f = "1" == c.attr("select"), f ? $("select", c).each(function () {
        var a = $(this).val();
        -2 != a && (e = !0)
    }) : $("input,textarea", c).each(function () {
        var a = $(this).val();
        a.length > 0 && (e = !0)
    })) : "11" == d ? e = $("li[check='1']", c).length > 0 : "13" == d && (e = c[0].fileName ? !0 : !1), jumpAny(e, a, b)
}

function jumpByChoice(a, b) {
    var e, f, g, c = $(a).attr("type"), d = $(a)[0];
    "-2" == b.value ? processJ(d.indexInPage - 0, 0, !1, d.pageIndex) : "-1" == b.value || "" == b.value ? processJ(d.indexInPage - 0, 0, !1, d.pageIndex) : ("3" == c || "5" == c || "7" == c) && (e = b.value || $(b).attr("val"), parseInt(e) == e && (f = $(b).attr("jumpto"), f || (f = 0), g = f - 0, processJ(d.indexInPage - 0, g, !1, d.pageIndex)))
}

function jumpAny(a, b, c) {
    var f, g, h, d = $(b);
    d.attr("type"), f = d.attr("hasjump"), g = d.attr("anyjump") - 0, h = d[0], f && (a ? processJ(h.indexInPage - 0, g, c, h.pageIndex) : processJ(h.indexInPage - 0, 0, c, h.pageIndex))
}

function processJ(a, b, c, d) {
    var i, j, k, l, n, o, p, e = a + 1, f = d, g = 1 == b || -1 == b, h = 0;
    for (i = d; i < pageHolder.length; i++) {
        for (j = pageHolder[i].questions, g && (f = i), !h && j[a] && (h = parseInt(getTopic(j[a]))), k = e; k < j.length; k++) l = getTopic(j[k]), (l == b || g) && (f = i), "1" != $(j[k]).attr("nhide") && (b > l || g ? (j[k].style.display = "none", clearFieldValue(j[k]), (relationQs[l] || ItemrelationQs[l]) && displayRelationByType(j[k])) : (relationNotDisplayQ[l] || relationItemNotDisplayQ[l] || (j[k].style.display = "", initEleSelect2(j[k]), window.hasHeatMap && heatMapInit(j[k]), window.bindUploadMultipleFn && bindUploadMultipleFn(j[k])), n = $(j[k]).attr("hasjump"), n && !c && clearFieldValue(j[k]), "1" == $(j[k]).attr("qingjing") && displayRelationByType(j[k])));
        for (pageHolder[i].cuts || (pageHolder[i].cuts = $(".cutfield", pageHolder[i])), k = 0; k < pageHolder[i].cuts.length; k++) o = pageHolder[i].cuts[k], l = o.getAttribute("qtopic"), l && (h && h >= l || e >= l || (b > l || g ? o.style.display = "none" : (p = o.getAttribute("topic"), relationNotDisplayQ[p] || (o.style.display = ""))));
        e = 0
    }
    fixBottom()
}

function GetBacktoServer() {
    str = window.location.pathname, index = str.lastIndexOf("/"), page = str.substr(index + 1, str.length - index), data = readCookie("history"), null != data && data.toLowerCase() != page.toLowerCase() && (window.location.href = window.location.href)
}

function readCookie(a) {
    var b, c, d, e;
    for (b = a + "=", c = document.cookie.split(";"), d = 0; d < c.length; d++) {
        for (e = c[d]; " " == e.charAt(0);) e = e.substring(1, e.length);
        if (0 == e.indexOf(b)) return e.substring(b.length, e.length)
    }
    return null
}

function getErrorControl(a) {
    return "none" == a.style.display && "指定选项" == a.getAttribute("verify") ? a.parentNode : "select2-hidden-accessible" == a.className ? a.parentNode : "none" == a.style.display && $(a).next().hasClass("textEdit") ? $(a).next(".textEdit")[0] : a
}

function removeError(a) {
    if (this.errorMessage) {
        if ($(this.errorMessage).hide(), this.errorMessage.innerHTML = "", window != window.top && $("#ValError").html(""), this.removeError = null, 2 != window.isChuangGuan && (a ? this.parentNode.style.border = "solid 1px transparent" : this.style.border = "solid 1px transparent"), this.errorControl) {
            var b = getErrorControl(this.errorControl);
            b.style.background = "", this.errorControl = null
        }
        fixBottom()
    }
}

function writeError(a, b, c, d) {
    var e, f;
    return a = $(a)[0], 2 != window.isChuangGuan && (a.style.border = "dashed 1px #FF4040"), e = "1" == $(a).attr("maxdiff"), f = "1" == $(a).attr("conjoint"), !d || e || f ? objErrorInfo(a, b, c) : objErrorInfo(d, b, c), firstError || (firstError = a), fixBottom(), !1
}

function objErrorInfo(a, b) {
    var d, e;
    a.errorMessage ? a.errorMessage.innerHTML = b : (d = $(".errorMessage", $(a)), a.errorMessage = d[0], !firstError && isValidating && (d.css("left", "50%"), d.animate({left: 0}, 200)), a.errorMessage.innerHTML = b), b && $(a.errorMessage).show(), a.removeError = removeError, a.errorControl && (e = getErrorControl(a.errorControl), e.style.background = "#FBD5B5")
}

function verifydata(a, b, c) {
    var d, e;
    if (!b) return "";
    if (d = null, "email" == b.toLowerCase() || "msn" == b.toLowerCase()) return d = /^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i, d.exec(a) ? "" : validate_email;
    if ("日期" == b || "生日" == b || "入学时间" == b) return "";
    if ("固话" == b) return d = /^((\d{4}-\d{7})|(\d{3,4}-\d{8}))(-\d{1,4})?$/, d.exec(a) ? "" : validate_phone.replace("，请注意使用英文字符格式", "");
    if ("手机" == b) return d = /^1[3456789]\d{9}$/, d.exec(a) ? "" : validate_mobile.replace("，请注意使用英文字符格式", "");
    if ("密码" == b) return checkPassword(a, c);
    if ("确认密码" == b) {
        if (c && c.firstPwd && c.firstPwd.value != a) return wjxlang.validate_password
    } else {
        if ("电话" == b) return d = /(^\d{11}$)|(^((\d{4}-\d{7})|(\d{3,4}-\d{8}))(-\d{1,4})?$)/, d.exec(a) ? "" : validate_mo_phone.replace("，请注意使用英文字符格式", "");
        if ("汉字" == b) return d = /^[\u4e00-\u9fa5·]+$/, d.exec(a) ? "" : validate_chinese;
        if ("姓名" == b) return d = /^[\u9FA6-\u9FCB\u3400-\u4DB5\u4E00-\u9FA5·]{2,15}$/, d.exec(a) ? "" : "姓名必须为2到15个汉字";
        if ("英文" == b) return d = /^[A-Za-z\s]+$/, d.exec(a) ? "" : validate_english;
        if ("英文数字" == b) return d = /^[A-Za-z\d]+$/, d.exec(a) ? "" : validate_englishdigit;
        if ("网址" == b || "公司网址" == b) return d = /^https?:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/, e = /^www.[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/, d.exec(a) || e.exec(a) ? "" : validate_reticulation;
        if ("身份证号" == b) return d = /^\d{15}(\d{2}[A-Za-z0-9])?$/, 18 == a.length && checkIDCard(a) ? "" : validate_idcardNum;
        if ("学号" == b) {
            if (d = /^\d+$/, !d.exec(a)) return validate_num.replace("，请注意使用英文字符格式", "")
        } else if ("数字" == b) {
            if (d = /^(\-)?\d+$/, !d.exec(a)) return validate_num.replace("，请注意使用英文字符格式", "")
        } else if ("小数" == b) {
            if (d = /^(\-)?\d+(\.\d+)?$/, !d.exec(a)) return validate_decnum
        } else if ("qq" == b.toLowerCase()) return d = /^\d+$/, e = /^\w+([-+.]\w+)*@\w+([-.]\\w+)*\.\w+([-.]\w+)*$/, d.exec(a) || e.exec(a) ? "" : validate_qq
    }
    return ""
}

function checkIDCard(a) {
    var j, k, l, m, n, b = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
        c = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"], d = a + "", e = a[17], f = d.substring(0, 17),
        g = f.split(""), h = g.length, i = 0;
    for (j = 0; h > j; j++) i += g[j] * b[j];
    k = i % 11, l = c[k], m = /^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1|2|3][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X]|[x])$/, n = m.test(a);
    try {
        return e.toLowerCase() == l.toLowerCase() && n ? !0 : !1
    } catch (o) {
        return !1
    }
}

function checkPassword(a, b) {
    var f, c = /([a-zA-Z0-9!@#$%^&*()_?<>{}]){8,20}/, d = /[a-zA-Z]+/, e = /[0-9]+/;
    return b && b.confirmPwd && b.needCheckConfirm && (f = b.confirmPwd.value, f != a) ? wjxlang.validate_password : c.test(a) && d.test(a) && e.test(a) ? "" : c.test(a) ? d.test(a) ? e.test(a) ? "" : wjxlang.validate_pass_number : wjxlang.validate_pass_zm : wjxlang.validate_pass_long
}

function verifyMinMax(a, b, c, d) {
    if ("数字" == b || "小数" == b) {
        var e = /^(\-)?\d+$/;
        if ("小数" == b && (e = /^(\-)?\d+(\.\d+)?$/), !e.exec(a)) return "小数" == b ? validate_decnum : validate_num.replace("，请注意使用英文字符格式", "");
        if (0 != a && (a = a.replace(/^0+/, "")), "" != c) {
            if ("数字" == b && parseInt(a) - parseInt(c) < 0) return validate_num2 + c;
            if ("小数" == b && parseFloat(a) - parseFloat(c) < 0) return validate_num2 + c
        }
        if ("" != d) {
            if ("数字" == b && parseInt(a) - parseInt(d) > 0) return validate_num1 + d;
            if ("小数" == b && parseFloat(a) - parseFloat(d) > 0) return validate_num1 + d
        }
    } else {
        if ("" != d && a.length - d > 0) return validate_info_wd3.format(d, a.length);
        if ("" != c && a.length - c < 0) return validate_info_wd4.format(c, a.length)
    }
    return ""
}

function getTopic(a) {
    return $(a).attr("topic")
}

function relationItemJoin(a) {
    if ("none" != a.style.display || "-1" == $(a).attr("relation")) {
        var b = $(a);
        displayRelationByType(b)
    }
}

function relationJoin(a) {
    if ("none" != a.style.display || "-1" == $(a).attr("relation")) {
        var b = $(a);
        displayRelationByType(b)
    }
}

function loopHideItemRelation(a) {
    var b, c, d, e;
    isLoadQues || (b = a.split("_"), 2 == b.length && (c = b[0].replace("q", ""), d = questionsObject[c], e = clearItemOption(a), e && d && (d.quesAnswer = "", jumpAny(!1, d))))
}

function clearItemOption(a) {
    var d, e, f, g, h, i, j, k, l, m, n, o, b = !1, c = $("#" + a);
    if (!c) return !1;
    if (d = c.attr("type"), e = a.split("_"), f = e[0].replace("q", ""), g = $("#div" + f), h = $(g).attr("type"), i = $(g).attr("hasjump"), j = $(g).attr("refered"), k = $(g).attr("hasitemrelation"), !(ItemrelationQs[f] || relationQs[f] || i || j || "11" == h || k)) return !1;
    if ("hidden" == d && "11" == h) {
        if (l = c.parent(), !l.find("span.sortnum").hasClass("sortnum-sel")) return !1
    } else if (!c[0].checked) return !1;
    return "radio" == d || "checkbox" == d ? (m = 1, n = "input[type=radio]", "radio" == d ? (c[0].checked = !1, c.parent().parent().removeClass("checked").find("a.jqradio").removeClass("jqchecked")) : "checkbox" == d && (m = 2, n = "input[type=checkbox]", c[0].checked = !1, c.parent().parent().removeClass("checked").find("a.jqcheck").removeClass("jqchecked")), displayRelationByType(g), j = g.attr("refered"), j && createItem("#div" + f), displaypeie(g, n, m), saveAnswer($(g)), !0) : ("hidden" == d && "11" == h && (o = c.parent().parent().parent().parent(), $("li.ui-li-static", o).each(function () {
        $(this).find("span.sortnum").hasClass("sortnum-sel") && (b = !0), $(this).find("span.sortnum").html("").removeClass("sortnum-sel"), $(this).attr("check", "")
    }), m = 3, n = "li.ui-li-static", saveAnswer($(g)), displayRelationByType(g), j = g.attr("refered"), j && createItem("#div" + f)), b)
}

function checkDisplayques(a, b) {
    var d, e, f, g, h, i, j, k;
    if ($("#" + a), d = $("#" + a)[0].parentNode.parentNode, -1 == d.className.indexOf("ui-radio") && -1 == d.className.indexOf("ui-checkbox") && -1 == d.className.indexOf("ui-li-static") && (d = $("#" + a)[0].parentNode.parentNode.parentNode.parentNode), d.style.display != b && (d.style.display = b, e = a.replace("q", "").split("_"), 2 == e.length && (f = $("#div" + e[0])))) if ("" == b) "none" == f[0].style.display && "1" != relationNotDisplayQ[e[0]] && (f[0].style.display = ""), "1" == relationItemNotDisplayQ[e[0]] && (relationItemNotDisplayQ[e[0]] = ""); else {
        for (g = f.attr("type"), h = "div.ui-radio", "4" == g ? h = "div.ui-checkbox" : "11" == g && (h = "li.ui-li-static"), i = "none", j = $("#div" + e[0] + " " + h), k = 0; k < j.length; k++) if ("" == j[k].style.display) {
            i = "";
            break
        }
        "1" != relationNotDisplayQ[e[0]] && (f[0].style.display = i), "none" == i && (relationItemNotDisplayQ[e[0]] || (relationItemNotDisplayQ[e[0]] = "1"), jumpAny(!1, f))
    }
}

function displayRelationByType(a) {
    var b = getTopic(a);
    (ItemrelationQs[b] || relationQs[b]) && (GetRelationAnsewer(b, !0), handleItemRelation(b), fixBottom())
}

function handleItemRelation(a) {
    var b, c, d, e, f, g, h, i, j, k, l;
    if (allQArray.each(function () {
        var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, b = $(this), c = getTopic(b);
        if (!(parseInt(c) <= parseInt(a))) {
            if (d = b.attr("relation")) {
                for (e = "", e = -1 != d.indexOf("|") ? "|" : "$", f = d.split(e), g = !1, "|" == e && (g = !0), h = 0; h < f.length; h++) if (i = displayRelationLogic(f[h]), "$" == e) {
                    if (i) {
                        g = !0;
                        break
                    }
                } else if (!i) {
                    g = !1;
                    break
                }
                if (j = g ? "" : "none", checkDisplayItemques(b[0], j), g) {
                    if (k = !1, relationBindTopic[c]) for (l = relationBindTopic[c], m = 0; m < l.length; m++) if (parseInt(l[m]) == parseInt(a)) {
                        k = !0;
                        break
                    }
                    if (!k && itemRelationBindTopic[c]) for (l = itemRelationBindTopic[c], m = 0; m < l.length; m++) if (parseInt(l[m]) == parseInt(a)) {
                        k = !0;
                        break
                    }
                    k && ($(b).attr("hasjump") || relationQs[c] || ItemrelationQs[c]) ? (loopHideRelation(b), initqSlider(b[0]), initEleSelect2(b[0]), window.hasHeatMap && heatMapInit(b[0]), needAdjustVideo() && adjustVideoHeight(b[0])) : (loopShowRelation(b), initqSlider(b[0]), b[0].hasInitSelect2 = !1, initEleSelect2(b[0]), window.hasHeatMap && heatMapInit(b[0]), needAdjustVideo() && adjustVideoHeight(b[0]))
                } else loopHideRelation(b)
            }
            if (n = b.attr("hasitemrelation"), n && (o = "", p = "", q = b[0].getAttribute("type"), "3" == q ? (o = "input[type=radio]", p = ".ui-radio") : "4" == q ? (o = "input[type=checkbox]", p = ".ui-checkbox") : "11" == q && (o = "li.ui-li-static", p = ".ui-li-static"), r = document.getElementById("lbl" + c + "_1") ? !0 : !1, s = [], t = new Object, u = $(p, b), $(o, b[0]).each(function () {
                var f, g, h, i, j, k, l, m, n, d = !1, e = this.value;
                if ("11" == q && (e = $(this).find("input:hidden").val()), f = "q" + c + "_" + e, g = e - 1, !HasSetItemrelationList[f]) return r && (h = $(u[g]).attr("group"), h && !t[h] && (t[h] = "1")), void 0;
                for (i = HasSetItemrelationList[f], j = "", j = -1 != i.indexOf("|") ? "|" : "$", k = i.split(j), "|" == j && (d = !0), l = 0; l < k.length; l++) if (m = displayRelationLogic(k[l]), "$" == j) {
                    if (m) {
                        d = !0;
                        break
                    }
                } else if (!m) {
                    d = !1;
                    break
                }
                n = d ? "" : "none", checkDisplayques(f, n), d ? ($(b).attr("hasjump") || relationQs[c] || ItemrelationQs[c]) && loopHideRelation(b) : loopHideItemRelation(f), r && (h = $(u[g]).attr("group"), h && -1 == s.indexOf(h) && s.push(h), h && d && !t[h] && (t[h] = "1"))
            }), r)) for (v = 0; v < s.length; v++) w = s[v], x = t[w], y = "lbl" + c + "_" + w, z = document.getElementById(y), z && (z.style.display = x ? "" : "none", z.parentNode && z.parentNode.className.indexOf("ui-controlgroup") > -1 && (z.parentNode.style.display = x ? "" : "none"))
        }
    }), window.totalCut && window.totalCut > 0) for (b = 0; b < window.totalCut; b++) if (c = "divCut" + (b + 1), d = $("#" + c), e = d.attr("relation")) {
        for (f = "", f = -1 != e.indexOf("|") ? "|" : "$", g = e.split(f), h = !1, "|" == f && (h = !0), i = 0; i < g.length; i++) if (j = displayRelationLogic(g[i]), "$" == f) {
            if (j) {
                h = !0;
                break
            }
        } else if (!j) {
            h = !1;
            break
        }
        k = b + 1, l = "c" + k, d[0].style.display = h ? "" : "none", relationNotDisplayQ[l] = h ? "" : "1"
    }
}

function displayRelationLogic(a) {
    var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, b = !1;
    if (!a) return !0;
    if (c = a.split(","), c.length < 2) return b;
    if (d = -1 != a.indexOf(".") ? !1 : !0, e = GetRelationAnsewer(c[0]), !e || "" == e || "-3" == e) return !1;
    if (f = questionsObject[c[0]], g = f.attr("type"), "6" == g) {
        for (h = new Array, i = e.split(","), j = 0; j < i.length; j++) {
            if (k = i[j].split("!"), k.length < 2) return b;
            l = new Object, l.sIndex = k[0], l.val = k[1], h.push(l)
        }
        if (m = c[1].split("^"), m.length < 2) return !1;
        for (n = m[1].split(";"), o = !1, p = 0; p < h.length; p++) {
            if (m[0] == h[p].sIndex) for (o = !0, q = 0; q < n.length; q++) if (n[q] == h[p].val) {
                b = !0;
                break
            }
            if (o) break
        }
        return b
    }
    if (r = e.split(","), n = d ? c[1].split(";") : c[1].split("."), -1 != c[1].indexOf("-")) {
        if (d) {
            for (j = 0; j < n.length; j++) {
                for (s = !0, t = n[j].replace("-", ""), p = 0; p < r.length; p++) if (t == r[p]) {
                    s = !1;
                    break
                }
                if (!s) break
            }
            return b = s
        }
        for (s = !1, j = 0; j < n.length; j++) {
            for (t = n[j].replace("-", ""), u = !0, p = 0; p < r.length; p++) if (t == r[p]) {
                u = !1;
                break
            }
            if (u) {
                s = !0;
                break
            }
        }
        return b = s
    }
    if (d) {
        for (j = 0; j < n.length; j++) {
            for (s = !1, t = n[j].replace("-", ""), p = 0; p < r.length; p++) if (t == r[p]) {
                s = !0;
                break
            }
            if (s) break
        }
        return b = s
    }
    for (s = !0, j = 0; j < n.length; j++) {
        for (u = !1, t = n[j].replace("-", ""), p = 0; p < r.length; p++) if (t == r[p]) {
            u = !0;
            break
        }
        if (!u) {
            s = !1;
            break
        }
    }
    return b = s
}

function GetRelationAnsewer(a, b) {
    var g, h, i, c = questionsObject[a], d = c.attr("type"), e = "",
        f = "none" != c[0].style.display || "-1" == $(c[0]).attr("relation");
    if (!f || "1" != c.attr("qingjing") || "-3" != c.quesAnswer && "" != c.quesAnswer || (b = !0), !b && c.quesAnswer && "" != c.quesAnswer) return e = c.quesAnswer, "-3" == e && (e = ""), e;
    if ("3" != d && "4" != d && "21" != d && "11" != d && "5" != d && "6" != d && "7" != d) return e;
    if (f) switch (e = "-3", d) {
        case"3":
            $("input[type='radio']:checked", c).each(function () {
                return e = $(this).val(), !1
            });
            break;
        case"4":
            g = 0, $("input:checked", c).each(function () {
                var a = "none" == this.parentNode.parentNode.style.display;
                a || (g > 0 ? e += "," : e = "", e += $(this).val(), g++)
            });
            break;
        case"21":
            g = 0, $(".shop-item .itemnum", c).each(function (a) {
                var b = $(this).val();
                "0" != b && (g > 0 ? e += "," : e = "", e += a + 1, g++)
            });
            break;
        case"11":
            g = 0, $("li.ui-li-static", c).each(function () {
                var b, a = $(this).find("span.sortnum").html();
                "none" != this.style.display && (b = $(this).find("input:hidden").val(), f && a && (g > 0 ? e += "," : e = "", e += b, g++))
            });
            break;
        case"5":
            e = $("input:hidden", c).val();
            break;
        case"6":
            mIndex = 0, h = "true" == $(c).attr("daozhi"), i = "1" == $(c).attr("alone"), $("input:hidden", c).each(function (b) {
                var d, f, g, j, k, l, m;
                mIndex > 0 ? e += "," : e = "", d = !1, f = b + 1, !window.hasReferClient || h || i || (g = $(c).attr("id"), j = a, g && (k = g.replace("div", ""), parseInt(k) == k && j != k && (j = k)), l = document.getElementById("drv" + j + "_" + (b + 1)), l && "none" == l.style.display ? d = !0 : !l && questionsObject[j] && (d = !0)), e += f + spChars[4], m = $(this).val(), m ? m.indexOf(spChars[2]) > -1 && (m = m.split(spChars[2])[0]) : m = "-2", d && (m = "-4"), e += m, mIndex++
            });
            break;
        case"7":
            e = $("select", c).val()
    } else e = "-3";
    return c.quesAnswer = e, e
}

function checkDisplay(a) {
    var c, d, e, f, g, h, i, j, k, l, m, n, b = !1;
    for (c in a) for (d = 0; d < a[c].length; d++) if (e = a[c][d].replace("-", ""), f = a[c][d].replace("q", "").split("_"), g = document.getElementById(e), h = document.getElementById("q" + f[0]), i = document.getElementById("div" + f[0]), j = $(i).attr("type"), k = $(i).attr("qingjing"), 1 == k) {
        if ("" == i.style.display && g && g.checked) {
            b = !0;
            break
        }
    } else {
        if (l = !1, g && "11" == j && (l = "1" == g.parentNode.parentNode.getAttribute("check") ? !0 : !1), g && "11" != j && f[1] > 0 == g.checked) {
            b = !0;
            break
        }
        if (g && "11" == j && f[1] > 0 == l) {
            b = !0;
            break
        }
        if (g || 5 != j) {
            if (!g && h && f[1] == h.value) {
                b = !0;
                break
            }
        } else if (m = $("a.rate-on", i), n = "", m.length > 0 && (n = $(m[m.length - 1]).attr("val")), f[1] == n) {
            b = !0;
            break
        }
    }
    return b
}

function loopShowRelation(a) {
    var b = getTopic(a);
    "1" == $(a).attr("isshop") && updateCart($(a)), "1" == $(a).attr("qingjing") && (relationQs[b] || ItemrelationQs[b]) && GetRelationAnsewer(b, !0)
}

function loopHideRelation(a) {
    if (!isLoadQues) {
        getTopic(a);
        var c = clearFieldValue(a);
        return c ? (jumpAny(!1, a), void 0) : !1
    }
}

function checkDisplayItemques(a, b) {
    var e, f;
    a.style.display != b && (e = a.getAttribute("id").replace("div", ""), a.style.display = "1" == relationItemNotDisplayQ[e] ? "none" : b, relationNotDisplayQ[e] = "none" == b ? "1" : "", "" == b && (a.getAttribute("fixedslider") && setFixedSliderTableHandler($(a)), a.uploader ? a.uploader.refresh() : "33" == a.getAttribute("type") || "9" == a.getAttribute("type") ? $(a).find(".file").each(function (a, b) {
        b.parentNode.uploader && b.parentNode.uploader.refresh()
    }) : "10" == a.getAttribute("type") && dispatchEvent(a.querySelector(".ui-table-scroll .ui-table-body"), "scroll")), f = getTopic(a), "1" == a.getAttribute("qingjing") && (relationQs[f] || ItemrelationQs[f]) && GetRelationAnsewer(f, !0))
}

function dispatchEvent(a, b) {
    try {
        if (a.dispatchEvent) {
            var c = document.createEvent("Event");
            c.initEvent(b, !0, !0), a.dispatchEvent(c)
        }
    } catch (d) {
    }
}

function checkHuChi(a, b) {
    var d, e, f, c = $(".huchi", a)[0];
    c && (d = $(b), $("input:checked", d)[0] && (e = $(".ui-checkbox", a), f = d.hasClass("huchi"), e.each(function () {
        var a, c;
        return this == b ? !0 : (a = $(this), $("input:checked", a)[0] ? (f ? a.trigger("click") : (c = a.hasClass("huchi"), c && a.trigger("click")), void 0) : !0)
    })))
}

function autoSubmit(a, b, c) {
    var d, e, f, g, h;
    if (isAutoSubmit = !0, needTip()) return alertNew($(divTip).text()), void 0;
    if (d = $("#divNext a")[0], d && (d.disabled = !1), window.hasSurveyTime && (e = $(pageHolder[cur_page]).attr("maxtime"), f = !1, e && window.initMaxSurveyTime && e - initMaxSurveyTime >= 0 && (f = !0), !e || f || 1 >= maxSurveyTime || reachMaxCheatCount)) for (g = 0, window.needSkipPageTime = !0; totalPage - 1 > cur_page && (pageHolder[cur_page].hasExceedTime = !0, window.isinterview ? showNextInterview(!0, !0) : 3 == isChuangGuan || 4 == isChuangGuan ? showNextField(!1, !0, !0) : show_next_page(), g++, !(g > totalPage));) ;
    if (ktimes++, divMaxTime.style.display = "none", $("body").css("padding-top", "0px"), pageHolder || (pageHolder = $("fieldset.fieldset")), pageHolder[cur_page].hasExceedTime = !0, totalPage - 1 > cur_page) window.isinterview ? showNextInterview(!0, !0) : 3 == isChuangGuan || 4 == isChuangGuan ? showNextField(!1, !0, !0) : show_next_page(), isAutoSubmit = !1; else {
        if (window.isinterview || (pageHolder[cur_page].style.display = "none"), d && d.initVal && (d.innerHTML = d.initVal), !window.hasSurveyTime && 2 != window.isChuangGuan && 1 != totalPage || window.useAliVerify || !window.hasAnswer || a || hasAutoSubmit || c) h = wjxlang.tit_time_up, 2 == window.isChuangGuan && (window.useAliVerify && ($("#divSubmit").show().css("padding-top", "30px").parent().css("margin", "0 2px"), $(".voteDiv").show(), $("body").append($(".voteDiv")), $("#divQuestion").css("border", "none").css("margin", "0 2px").css("border-radius", "0")), h = hasChuGuanSuc ? wjxlang.chuanguang_success_tit : wjxlang.chuanguang_fail), a && (h = a), hasSetmsg || c || (window.isinterview ? reportSend(h) : $("#ValError").html(h), hasSetmsg = !0), c && (window.isinterview ? reportSend(h) : $("#ValError").html(wjxlang.nomsgtext)), window.isinterview && interViewfinish(), (3 == window.isChuangGuan || 4 == window.isChuangGuan) && ($("#lxPrevBtn,#lxNextBtn").hide(), $(".fmWrap").hide(), $("#divContent").show(), b && (window.islxsubmit = !0, $("#lxNextBtn").text(wjxlang.submit).show())); else {
            if (window.location.href.indexOf("/pm/") > -1) return alertNew("预览模式不能提交成功"), void 0;
            hlv = "1", isAutoSubmit = !1, hasAutoSubmit = !0, groupAnswer(1), (3 == window.isChuangGuan || 4 == window.isChuangGuan) && $("#lxPrevBtn,#lxNextBtn").hide()
        }
        $("#divPrev").hide()
    }
    isAutoSubmit = !1
}

function ksCountdown() {
    var a, b, c, d, f, g;
    window.isKaoShi && (avoidPaste(), window.maxOpTime && window.divContent && !window.IsPar && (a = !1, window.localStorage && (b = localStorage["wjxlastanswer" + activityId], b && (c = (new Date).getTime(), d = (c - b) / 6e4, 10 > d && (a = !0, setTimeOpup(), $("#divSubmit").hide(), (3 == window.isChuangGuan || 4 == window.isChuangGuan) && $("#lxPrevBtn,#lxNextBtn").hide()))), a || (document.onclick = document.onkeyup = document.onscroll = document.onmousemove = function () {
        f = new Date
    }, f = new Date, g = setInterval(function () {
        var d, a = new Date, b = parseInt((a - f) / 1e3), c = maxOpTime + 5 - b;
        0 >= c ? (clearInterval(g), setLastOp(), setTimeOpup(!0), closeAlert()) : 5 >= c && (d = wjxlang.tit_leavetime.replace("{0}", c), alertNew(d))
    }, 1e3))))
}

function avoidPaste() {
    $(".textCont,input,textarea").on({
        paste: function () {
            return !1
        }, contextmenu: function (a) {
            return a.preventDefault(), !1
        }
    })
}

function avoidCopy(a) {
    if (a = window.event || a, window.iscropper) return !0;
    if (isKaoShi) return !1;
    var b;
    return a && (a.target ? b = a.target : a.srcElement && (b = a.srcElement), 3 == b.nodeType && (b = b.parentNode), "INPUT" == b.tagName || "TEXTAREA" == b.tagName || "SELECT" == b.tagName || "textCont" == b.className) ? !0 : (document.selection && document.selection.empty && document.selection.empty(), !1)
}

function setLastOp() {
    window.localStorage && localStorage.setItem("wjxlastanswer" + activityId, (new Date).getTime())
}

function setTimeOpup(a) {
    var b, c, d;
    hasSurveyTime = !0, hasMaxtime = !0, b = document.getElementById("yz_popdivData"), b && "none" != b.style.display && $("#yz_popTanChuClose").click(), window.amt = 2, c = wjxlang.tit_maxOpTime.replace("{0}", maxOpTime), d = wjxlang.tit_needsubmit, a || (d = ""), autoSubmit(c + d, a)
}

function forbidBackSpace(a) {
    var b = a || window.event, c = b.target || b.srcElement, d = c.type || c.getAttribute("type"),
        e = 8 == b.keyCode && "number" != d && "tel" != d && "password" != d && "text" != d && "textarea" != d && "textCont" != c.className;
    return e ? !1 : void 0
}

function CheckMax(a, b, c, d) {
    var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w;
    if (!b) return !0;
    if (e = $(a).attr("dval"), f = $(a).closest("tbody"), "tbody" != f[0].tagName.toLocaleLowerCase()) return !0;
    if (g = f.find("tr.trlabel").eq(0), h = g.find("th"), c) return i = $(a).closest("tr").attr("itemmax"), !i || $(a).hasClass("rate-on") ? !0 : (i = parseInt(i), j = $(a).closest("tr").find(".rate-on").length, j >= i ? (k = $(a).closest("tr").prev(".rowtitle").children(".title").text(), l = wjxlang.tit_item_max.replace("{0}", "").replace("{1}", k).replace("{2}", i), alertNew(l), !1) : !0);
    if (m = $(a).closest("table"), n = m.parent().hasClass("scaletablewrap"), o = e - 1, n && (o = e), i = h.eq(o).attr("itemmax"), !h.eq(o)[0]) return !0;
    if (d && i && i > 0) return p = $(a).closest("td").index(), j = m.find("tr").children("td:nth-child(" + (p + 1) + ")").find(".rate-on").length, m.parent().hasClass("isAloneTdDiv") && (j = m.find(".aloneAnsItemDiv").children(".rate-off:nth-child(" + (p + 1) + ")").filter(function () {
        return $(this).hasClass("rate-on")
    }).length), j >= i && !$(a).hasClass("rate-on") ? (k = m.find(".trlabel th").eq(p).text(), l = wjxlang.tit_item_max.replace("{0}", "").replace("{1}", k).replace("{2}", i), alertNew(l), !1) : !0;
    if (i && window.cepingCandidate && "-1" != i.indexOf("%") && (q = parseInt(i.replace("%", "")), r = cepingCandidate.split("&nbsp;&nbsp;&nbsp;"), i = Math.ceil(r.length * q / 100)), i && i > 0) {
        for (s = 0, t = 0; t < f[0].rows.length; t++) {
            for (u = $(f[0].rows[t]).find("a.rate-off"), v = null, w = 0; w < u.length; w++) u.eq(w).hasClass("rate-on") && (v = u.eq(w));
            v && v.attr("dval") == e && s++
        }
        if (s >= i) return k = h.eq(o).text(), l = wjxlang.tit_item_max.replace("{0}", "").replace("{1}", k).replace("{2}", i), alertNew(l), !1
    }
    return !0
}

function elagerImg(a, b) {
    a = a || window.event, a.stopPropagation && a.stopPropagation();
    var d = $(b).parent().find("img");
    1 == d.attr("viewer") && d[0].viewer.show()
}

function enlargeImg(a) {
    initDescImg();
    var b = a || $("#divQuestion img,#divDesc img,#divVote img");
    b.viewer({
        filter: function (a) {
            return $(a).hasClass("itemSrcImg") || $(a).hasClass("tableItemSrcImg") ? ($(a).attr("viewer", "1"), window.isMobile || $(a).attr("title", "点击放大查看"), !0) : "a" == a.parentNode.tagName.toLowerCase() || $(a).width() > 0 && $(a).width() < 50 && $(a).height() < 50 || $(a).parent().hasClass("heatmapContainer") || "0" == $(a).attr("viewer") ? !1 : ($(a).attr("viewer", "1"), !0)
        }, url: function (a) {
            var c, d, b = a.src;
            return $(a).parent().attr("pimg") && (b = $(a).parent().attr("pimg")), $(a).attr("originalsrc") && (b = $(a).attr("originalsrc")), b && (c = b.split(",w_"), 2 == c.length && (b = c[0] + ",w_1200"), d = b.split(",h_200"), 1 == d.length && (d = b.split(",h_400")), 2 == d.length && (b = d[0] + d[1])), b
        }
    })
}

function openDialogByIframe(a, b, c, d, e) {
    var g, h, i, j, k, l, m, f = "absolute";
    (window != window.top && $(window).height() > 812 || isChuangGuan > 0) && (f = "fixed"), g = $(window).width(), h = $(document).height(), "divImgPop" == c || c.indexOf("divVCode") > -1 || "divTimeUp" == c || "cropperWrap" == c || "divMa" == c ? b += 30 : (a = Math.min(g, 400) - 30, 0 == c.indexOf("divDesc_") || c.indexOf("setmenusel.aspx") > -1 ? b += 30 : -1 == c.indexOf("setcity") && (b = Math.min($(window).height(), 400) - 20), $(window).width() < 760 ? ((c.indexOf("amap.aspx") > -1 || c.indexOf("setcascaderselector.aspx") > -1 || d) && (b = $(window).height() - 30, a = $(window).width() - 20), (c.indexOf("school.aspx") > -1 || "vote_rule_detail" == c || "vote_rule_detail_new" == c) && (b = $(window).height() - 100, a = $(window).width() - 20)) : (a = 500, b = 600), "fixed" == f && b > 600 && (b = 600, obj_offectTop -= 300, obj_offectTop = 0 >= obj_offectTop ? 20 : obj_offectTop)), $("body").append("<div id='yz_popIframeDiv'></div>"), i = document.getElementById(c), e = e || "", j = "<div id='yz_popTanChu' style='border-radius: 2px;'><div style='color:#262626;font-size:16px;font-weight:bold;float:left;margin:8px 0 0 10px;'>" + e + "</div><div style='position:relative;height:30px;'><a id='yz_popTanChuClose' style='background:url(//image.wjx.com/images/commonImgPC/del@2x.png) no-repeat;background-size:cover;width:20px;height:20px;position:absolute;right:10px;top:10px;z-index:10002'></a></div>", "cropperWrap" == c && window.ismobileopen && (j = "<div id='yz_popTanChu' style='border-radius: 2px;'>"), j += i ? "<div id='yz_popdivData' style='padding:10px;height:" + (b - 30) + "px;overflow:auto;width:" + a + "px;'></div>" : "<iframe id='yz_popwinIframe' frameborder='0' hspace='0' src=" + c + " style='border-radius:2px;'></iframe>", j += "</div>", $("body").append(j), $("#yz_popIframeDiv").css({
        width: g,
        height: h,
        background: "#000",
        position: f,
        zIndex: "10000",
        left: "0",
        top: "0"
    }), $("#yz_popIframeDiv").fadeTo(0, .5), k = $(window).width() / 2 - a / 2, l = $(window).height() / 2 - (b + 40) / 2 + $(window).scrollTop(), l = 0 > l ? 20 : l, $("#yz_popTanChu").css({
        width: a,
        height: b + 40,
        left: k,
        top: l,
        background: "#fff",
        position: f,
        zIndex: 10001
    }), "cropperWrap" == c && window.ismobileopen && $("#yz_popdivData").css({
        padding: 0,
        height: b + 40
    }), "fixed" == f && ($(window).height() - obj_offectTop < b && (obj_offectTop = $(window).height() - b - 100), $("#yz_popTanChu").css({top: obj_offectTop})), i && $("#yz_popdivData").html(i.innerHTML), m = b, $("#yz_popwinIframe").css({
        width: a,
        height: m,
        background: "#ffffff"
    }), $("#yz_popTanChuClose,#yz_popIframeDiv").click(function () {
        window.iscropper || ($("#yz_popIframeDiv").remove(), $("#yz_popTanChu").remove())
    })
}

function closeAlert() {
    var a = document.getElementById("alert_box");
    a.style.display = "none", a.callback && a.callback()
}

function alertmsg(a, b, c) {
    var e, f, d = $("#alertmsg_box")[0];
    d || ($("<div id='alertmsg_box' style='position:absolute;padding: 10px 20px;background-color: rgba(0, 0, 0, 0.75);z-index: 19921010;top: 50%;left: 50%;transform: translateX(-50%);color: #fff;border-radius: 4px;'>").appendTo("body"), d = $("#alertmsg_box")[0]), $("#alertmsg_box").html(a), e = "50%", f = "absolute", c ? e = c.offsetTop + c.offsetHeight / 2 - 20 + "px" : f = "fixed", d.style.position = f, d.style.top = e, b = b || 2e3, $(d).show().delay(b).hide(0)
}

function alertNew(a, b) {
    var c, e, f;
    if (window != window.top) try {
        return c = /<[^<>]+>/g, alert(a.replace(c, "")), b && b(), void 0
    } catch (d) {
    }
    e = document.getElementById("alert_box"), e ? document.getElementById("pop_box_msg").innerHTML = a : (e = document.createElement("div"), e.id = "alert_box", f = wjxlang.ensure, alertHtml = "<div style='position:fixed;*position: absolute;width:100%;height:100%;opacity:0.5;filter:alpha(opacity=50);background-color:black;z-index:99998;top:0px;left:0px;'></div><div style='width:320px;margin-left:-160px;margin-top: -80px;position:fixed;*position: absolute;z-index:99999;top:50%;left:50%;background-color:white;border-radius:4px;'><div style='padding: 35px 27px;font-size: 16px;line-height: 22px;text-align: center;color: #262626;' id='pop_box_msg'>" + a + "</div>" + "<div style='width:100%;height: 60px;text-align:center;border-top:1px solid #F2F2F2;'><button class='mainColor' style='display:inline-block;width:100%;font-size:18px;height:60px;box-sizing:border-box;line-height:60px;color:#3296FA;text-align: center;text-decoration: none;border: none;background: none;outline:none;cursor:pointer;' onclick='closeAlert();'>" + f + "</button></div>" + "</div>", e.innerHTML = alertHtml, document.body.appendChild(e)), e.style.display = "", e.callback = b || ""
}

function closeConfirm() {
    var a = document.getElementById("confirm_box");
    a.style.display = "none", a.callback && a.callback()
}

function closeNo() {
    var a = document.getElementById("confirm_box");
    a.style.display = "none", a.callback2 && a.callback2()
}

function displaypeie(a, b, c) {
    "1" == a.attr("haspeie") && ($(b, a).each(function (a) {
        var d, e, f, g, h, i, j, k, l, m, n, o, b = $(this).attr("attrpeie");
        if (b && (d = !1, 3 == c ? (val = $(this).find("input[type=hidden]").eq(0).attr("value"), $(this).attr("check") && (d = !0)) : 4 == c ? -1 == selIndex && $(this).hasClass("rate-on") ? d = !0 : a == selIndex && (d = !0) : 1 != c && 2 != c || !this.checked ? 5 == c && this.selected && (d = !0) : d = !0, !d)) for (e = b.split(";"), a = 0; a < e.length; a++) if (f = e[a].split("|"), 3 == f.length) if (g = "q" + f[0] + "_" + f[1], h = document.getElementById(g)) {
            if ($(this).attr("id") == g) continue;
            h.disabled = !1, i = h.parentNode.parentNode, "ui-radio" != i.className && "ui-checkbox" != i.className && "ui-li-static" != i.className && (i = h.parentNode.parentNode.parentNode.parentNode), i && (j = i.getElementsByTagName("div"), j.length > 0 && (k = j[j.length - 1], l = k.getElementsByTagName("span"), l.length > 0 && k.removeChild(l[0])))
        } else if (m = document.getElementById("div" + f[0]), n = m.getElementsByTagName("option"), n && 0 != n.length && n.length > f[1]) {
            if ($(this).context == n[f[1]]) continue;
            n[f[1]].disabled = !1, o = "（" + f[2] + ")", -1 != n[f[1]].innerHTML.indexOf(o) && (n[f[1]].innerHTML = n[f[1]].innerHTML.replace(o, ""), initEleSelect2("#div" + f[0]))
        }
    }), $(b, a).each(function (a) {
        var d, e, f, g, h, i, j, k, l, m, n, o, b = $(this).attr("attrpeie");
        if (b && (d = !1, 3 == c ? (val = $(this).find("input[type=hidden]").eq(0).attr("value"), $(this).attr("check") && (d = !0)) : 4 == c ? -1 == selIndex && $(this).hasClass("rate-on") ? d = !0 : a == selIndex && (d = !0) : 1 != c && 2 != c || !this.checked ? 5 == c && this.selected && (d = !0) : d = !0, d)) for (e = b.split(";"), a = 0; a < e.length; a++) if (f = e[a].split("|"), 3 == f.length) if (g = "q" + f[0] + "_" + f[1], h = document.getElementById(g)) {
            if ($(this).attr("id") == g) continue;
            h.disabled = !0, i = h.parentNode.parentNode, "ui-radio" != i.className && "ui-checkbox" != i.className && "ui-li-static" != i.className && (i = h.parentNode.parentNode.parentNode.parentNode), i && (j = i.getElementsByTagName("div"), j.length > 0 && (k = j[j.length - 1], l = k.getElementsByTagName("span"), 0 == l.length && (k.innerHTML = k.innerHTML + "<span>（" + f[2] + "）</span>")))
        } else if (m = document.getElementById("div" + f[0]), n = m.getElementsByTagName("option"), n && 0 != n.length) {
            if ($(this).context == n[f[1]]) continue;
            n[f[1]].disabled = !0, n.length > f[1] && (o = "（" + f[2] + ")", -1 == n[f[1]].innerHTML.indexOf(o) && (n[f[1]].innerHTML = n[f[1]].innerHTML + o, initEleSelect2("#div" + f[0])))
        }
    }))
}

function dateQuota(a, b) {
    var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r;
    if ("1" == $(b).attr("haspeie") && (c = $(a).attr("datept"), c && (d = a, d && "" != d.value))) {
        for (e = getTopic(b), f = c.split(","), g = 0; g < f.length; g++) h = f[g].split("|"), 4 == h.length && h[0] != d.value && (i = "q" + h[1] + "_" + h[2], Number(h[1]) < Number(e) && !(j = document.getElementById("div" + h[1]).pageIndex == $(b)[0].pageIndex) || (k = document.getElementById(i), k ? (k.disabled = !1, l = $(k.parentNode.parentNode).find(".label"), m = l[0].getElementsByTagName("span"), m.length > 0 && l[0].removeChild(m[0])) : (n = document.getElementById("div" + h[1]), o = n.getElementsByTagName("option"), 0 != o.length && o && o.length > h[2] && (o[h[2]].disabled = !1, p = "（" + h[3] + ")", -1 != o[h[2]].innerHTML.indexOf(p) && (o[h[2]].innerHTML = o[h[2]].innerHTML.replace(p, ""), initEleSelect2("#div" + h[1]))))));
        for (q = 0; q < f.length; q++) if (h = f[q].split("|"), 4 == h.length && (h[0] == d.value || "D" == h[0])) if (i = "q" + h[1] + "_" + h[2], k = document.getElementById(i), j = document.getElementById("div" + h[1]).pageIndex == $(b)[0].pageIndex, k) {
            if (l = $(k.parentNode.parentNode).find(".label")[0], Number(h[1]) < Number(e) && !j && k.checked) {
                alertNew(d.value + "日 " + $(l).text() + " 配额已满"), d.value = "";
                break
            }
            k.disabled = !0, k.checked = !1, $(k).next().removeClass("jqchecked"), m = l.getElementsByTagName("span"), 0 == m.length && (l.innerHTML = l.innerHTML + "<span>（" + h[3] + "）</span>")
        } else if (n = document.getElementById("div" + h[1]), o = n.getElementsByTagName("option"), o && o.length > h[2]) {
            if (Number(h[1]) < Number(e) && !j && o[h[2]].selected) {
                r = o[h[2]].innerText, alertNew(d.value + "日 " + r + " 配额已满"), d.value = "";
                break
            }
            o[h[2]].disabled = !0, o[h[2]].selected = "", o && o.length > h[2] && (p = "（" + h[3] + ")", -1 == o[h[2]].innerHTML.indexOf(p) && (o[h[2]].innerHTML = o[h[2]].innerHTML + p, initEleSelect2("#div" + h[1])))
        }
    }
}

function isOrChooseLogic(a, b) {
    var d, e, f, c = !0;
    for (d = 0; d < a.length; d++) if (e = a[d].split(",")[0], e == b) {
        f = a[d].split(",")[1], c = -1 != f.indexOf("-") ? -1 != f.indexOf(".") ? !0 : !1 : -1 != f.indexOf(".") ? !1 : !0;
        break
    }
    return c
}

function otherTextEvent(a, b) {
    var c = $(a), d = c.val().trim();
    d && b[0].removeError && b[0].removeError()
}

function showHomePageFixedSlider(a) {
    var c, b = a.questions;
    for (c = 0; c < b.length; c++) b[c].getAttribute("fixedslider") && setFixedSliderTableHandler($(b[c]))
}

function setFixedSliderTableHandler(a, b) {
    var c = a.find(".ui-slider-table"), d = c.find(".ui-table-scroll"), e = c.find(".ui-table-fixed"),
        f = d.find(".ui-table-thead"), g = d.find(".ui-table-tbody tr"), h = e.find(".ui-table-tbody tr"),
        i = f[0].getBoundingClientRect().height;
    dispatchEvent(d.find(".ui-table-tbody")[0], "scroll"), e.find(".ui-table-thead").children().height(i), setTimeout(function () {
        if (b && b.length > 0) {
            var a = g.index(b);
            if (0 == b[0].getBoundingClientRect().height) return;
            h.eq(a).height(b[0].getBoundingClientRect().height)
        } else g.each(function () {
            if ("none" == this.style.display) return !0;
            var a = $(this), b = a.index();
            h.eq(b).height(a[0].getBoundingClientRect().height)
        })
    }, 200)
}

function uploadFinish(a, b, c, d) {
    var f, g, h, e = $(".field[topic='" + a + "']")[0];
    e.fileName = c, f = $(e).find(".uploadmsg"), c && (e.removeError && e.removeError(), $(e).find("iframe").hide(), g = $("<div style='margin-top:6px;border:1px solid #EDEDED;border-radius:4px;'></div>"), g.html("<img style='max-width:90%;max-height:45px;' src=" + d + " /></div>"), h = $('<a href="javascript:void(0)" style="float: right;margin: 11px 10px 0 0;" class="icon deleteuploadNew-icon iconfontNew">&#xe6b6;</a>'), h.click(function () {
        if (window.isinterview) {
            var a = $(e).find("iframe").attr("src");
            $(e).find("iframe").attr("src", a).show(), e.fileName = "", e.querySelector(".uploadmsg").innerHTML = "", saveAnswer && saveAnswer(e), jump && jump(e, "")
        } else confirmnew(wjxlang.tit_sign_del, function () {
            var a = $(e).find("iframe").attr("src");
            $(e).find("iframe").attr("src", a).show(), e.fileName = "", e.querySelector(".uploadmsg").innerHTML = "", saveAnswer && saveAnswer(e), jump && jump(e, "")
        })
    }), g.append(h), f.html(""), d && f.append(g), jump && jump(e, "")), saveAnswer && saveAnswer(e), window.isinterview && (showMyAnswer($(e)), $(".interview_input").find(".iv_input").show(), $(".interview_input").find(".iv_chioseFile").hide(), $(e).find(".interview_cont img").attr("src", d))
}

function locationReplace(a) {
    if (history.replaceState) try {
        history.replaceState(null, document.title, a), history.go(0), $("#form1").hide(), $(window).scrollTop(0)
    } catch (b) {
        location.replace(a)
    } else location.replace(a)
}

function adjustIosInput(a) {
    var b, c;
    a = a ? a : "input[type='text'],textarea", b = navigator.userAgent, c = !!b.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), c && self != top && ("input[type='text'],textarea" != a && $(a).unbind("blur"), $(a).blur(function () {
        setTimeout(function () {
            var a = window.parent.document.documentElement.scrollTop || window.parent.document.body.scrollTop || 0;
            window.parent.scrollTo(0, Math.max(a, 0))
        }, 100)
    }))
}

function initDescImg() {
    if (window.needEnlargeImg) {
        if (pageHolder[cur_page]) {
            if (pageHolder[cur_page].initDescImg) return;
            pageHolder[cur_page].initDescImg = !0
        }
        $(pageHolder[cur_page]).find(".div_item_desc img").each(function (a, b) {
            if (0 == $(b).width()) {
                var c = document.createElement("img");
                c.onload = function () {
                    this.width > 100 && ($(b).wrap("<div style='position: relative;display:inline-block;' class='descImgBox'></div>"), $(b).before($('<i class="icon_lookBigpic" onclick="elagerImg(event, this);"></i>')))
                }, c.src = b.src
            } else $(b).width() > 100 && ($(b).wrap("<div style='position: relative;display:inline-block;' class='descImgBox'></div>"), $(b).before($('<i class="icon_lookBigpic" onclick="elagerImg(event, this);"></i>')))
        })
    }
}

function stopMediaPlay() {
    var a = $(pageHolder[cur_page]).find("iframe");
    0 != a.length && (a.filter(function () {
        return $(this).attr("src").indexOf(".mp3") > -1 || $(this).attr("src").indexOf(".wav") > -1 || $(this).attr("src").indexOf(".mp4") > -1
    }), a.each(function (a, b) {
        $(b).attr("src", $(b).attr("src"))
    }))
}

function showEvaluate(a, b) {
    var d, c = 1 == b.attr("pj");
    c && (d = $(a).attr("val"), b.find(".evaluateTagWrap").show(), b.find(".evaluateTagDiv").eq(d - 1).show().siblings(".evaluateTagDiv").hide())
}

function checkedtag(a) {
    if ($(a).toggleClass("clicked"), $(a).hasClass("writeRvaluate")) {
        $(a).next(".wjxui_limit_box").toggle();
        var b = $(a).next(".wjxui_limit_box").find("textarea");
        b[0].bindevent || (b[0].bindevent = !0, b.on("input blur keydown", function () {
            var b = $(this).val().trim().length, c = $(this).attr("limit");
            b > c && ($(this).val($(this).val().substring(0, c)), b = c), $(this).closest(".wjxui_limit_box").find(".limit").text(b + "/" + c), saveAnswer($(a).closest(".field"))
        }))
    }
    fixBottom(), saveAnswer($(a).closest(".field"))
}

function initCusomSelect(a, b, c) {
    var f, g, h, i, j, k, l, m, n, o, p, d = $(c).find("input[type='text']"), e = $(a).find("input[type='text']");
    if (0 != d.length) {
        if (f = b.checked, g = "radio" == b.type, h = e.attr("cusom"), h && !e[0].hasInitCusom) {
            for (e.hide(), i = $("<select></select>"), j = h.split(","), k = e.val(), l = e[0].disabled, i.append($('<option value="">' + wjxlang.chioce + "</option>")), m = 0; m < j.length; m++) n = j[m] == k ? "selected" : "", o = $("<option " + n + "></option>"), o.attr("value", j[m]), o.text(j[m]), i.append(o);
            i.change(function (a) {
                a.stopPropagation();
                var b = this.value;
                return e.val(b).blur(), !1
            }), e.before(i).parent().css({
                border: "none",
                "margin-bottom": "10px"
            }), l && i.prop("disabled", !0), e[0].hasInitCusom = !0, p = "zh-CN", 1 == langVer ? p = "" : 2 == langVer && (p = "zh-TW"), i.select2({
                language: p,
                width: "off",
                minimumResultsForSearch: 10
            }), i.click(function (a) {
                a.stopPropagation()
            }), i.next(".select2").click(function (a) {
                a.stopPropagation()
            }).parent().addClass("ui-select")
        }
        g ? ($(a).siblings().find(".select2,.requireSpan,.ui-text").hide(), h ? e.siblings(".select2,.requireSpan").show().parent().show() : (e.show().siblings(".requireSpan").show(), e.parent().show())) : f ? h ? e.siblings(".select2,.requireSpan").show().parent().show() : (e.show().siblings(".requireSpan").show(), e.parent().show()) : (e.hide().siblings(".select2,.requireSpan").hide(), e.parent().hide())
    }
}

function hasJoinCusomInit() {
    2 == window.hasDropDown && $(".ui-controlgroup input[type='radio']:checked,.ui-controlgroup input[type='checkbox']:checked").each(function (a, b) {
        var e, c = $(b).closest(".field")[0], d = $(c).attr("type");
        e = 3 == d ? $(b).closest(".ui-radio")[0] : $(b).closest(".ui-checkbox")[0], initCusomSelect(e, b, c)
    })
}

function isSmallerIos12() {
    var a, b, c, d;
    try {
        return a = navigator.userAgent.toLowerCase().indexOf("like mac os x") > 0, a ? (b = /os [\d._]*/gi, c = navigator.userAgent.toLowerCase().match(b), d = (c + "").replace(/[^0-9|_.]/gi, "").replace(/_/gi, "."), d && d.split(".")[0] <= 12 ? !0 : !1) : !1
    } catch (e) {
        return !1
    }
}

function getDevice() {
    var a, b, c, d, e, f, g;
    if (0 != $(".field[verify='device']").length) {
        for (a = $(".field[verify='device']"), b = "", c = "", d = navigator.userAgent, e = [{
            name: "sgssapp",
            it: /sogousearch/i.test(d)
        }, {name: "wechat", it: /MicroMessenger/i.test(d)}, {name: "weibo", it: !!d.match(/Weibo/i)}, {
            name: "uc",
            it: !!d.match(/UCBrowser/i) || d.indexOf(" UBrowser") > -1
        }, {name: "sogou", it: d.indexOf("MetaSr") > -1 || d.indexOf("Sogou") > -1}, {
            name: "xiaomi",
            it: d.indexOf("MiuiBrowser") > -1
        }, {name: "baidu", it: d.indexOf("Baidu") > -1 || d.indexOf("BIDUBrowser") > -1}, {
            name: "360",
            it: d.indexOf("360EE") > -1 || d.indexOf("360SE") > -1
        }, {name: "2345", it: d.indexOf("2345Explorer") > -1}, {
            name: "edge",
            it: d.indexOf("Edge") > -1
        }, {name: "ie11", it: d.indexOf("Trident") > -1 && d.indexOf("rv:11.0") > -1}, {
            name: "ie",
            it: d.indexOf("compatible") > -1 && d.indexOf("MSIE") > -1
        }, {name: "firefox", it: d.indexOf("Firefox") > -1}, {
            name: "safari",
            it: d.indexOf("Safari") > -1 && -1 === d.indexOf("Chrome")
        }, {name: "qqbrowser", it: d.indexOf("MQQBrowser") > -1 && -1 === d.indexOf(" QQ")}, {
            name: "qq",
            it: d.indexOf("QQ") > -1
        }, {name: "chrome", it: d.indexOf("Chrome") > -1 || d.indexOf("CriOS") > -1}, {
            name: "opera",
            it: d.indexOf("Opera") > -1 || d.indexOf("OPR") > -1
        }], f = 0; f < e.length; f++) e[f].it && (b = e[f].name);
        b || (b = "other"), c = d.match(/compatible/i) || d.match(/Windows/i) ? "windows" : d.match(/Macintosh/i) || d.match(/MacIntel/i) ? "macOS" : d.match(/iphone/i) || d.match(/Ipad/i) ? "ios" : d.match(/android/i) ? "android" : d.match(/Ubuntu/i) ? "Ubuntu" : "other", g = window.screen.width + "*" + window.screen.height, a.each(function () {
            var a = $(this).find(".ui-input-text").children("input");
            a.eq(0).val(c), a.eq(1).val(b), a.eq(2).val(g), a.eq(3).val(d)
        })
    }
}

function curPageHeatmapInit() {
    window.hasHeatMap && pageHolder[cur_page] && (pageHolder[cur_page].initHeatmap || (pageHolder[cur_page].initHeatmap = !0, $(pageHolder[cur_page]).find(".heatmapWrap").each(function () {
        "none" != this.style.display && heatMapInit(this)
    })))
}

function forbidEdit(a) {
    var b, c, d;
    if (a) for (a += "", b = a.split(";"), c = 0; c < b.length; c++) $("#div" + b[c]).unbind("click touchend"), $("#div" + b[c]).attr("onclick", "return false").attr("ontouchend", "return false"), $("#div" + b[c] + " input").prop("disabled", "disabled"), $("#div" + b[c] + " li").unbind("click"), $("#div" + b[c] + " .file").hide(), $("#div" + b[c] + " iframe").hide(), $("#div" + b[c] + " select").prop("disabled", "disabled"), $("#div" + b[c] + " textarea").prop("disabled", "disabled"), d = $("#div" + b[c] + " .rate-off"), d.attr("onclick", "return false").parent().attr("onclick", "return false"), d.unbind("click"), d.parent().unbind("click"), $("#div" + b[c] + " .operation").attr("onclick", "return false").unbind("click"), $("#div" + b[c] + " .textCont ").attr("contenteditable", !1).unbind("click")
}

function TotalValBoxInit() {
    var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p;
    if (4 == cqType && window.showTotalScore) {
        if (totalPage - 1 > cur_page) return $("#countValBox").hide(), void 0;
        for (a = $("#div1"), b = $(".label", a), c = "", d = {}, e = !1, g = 0; g < pageHolder.length; g++) for (h = 0; h < pageHolder[g].questions.length; h++) if (i = pageHolder[g].questions[h], "none" != i.style.display) for (j = !1, k = $(i).attr("type") || 0, b = $(".select_title", $(i)), "6" == k && (b = $(".rowtitlediv", $(i))), isMobile ? 0 == b.length ? b = $(".title", $(i)) : j = !0 : ("10" == k && (b = $(".ui-table-row-title", $(i))), "9" == k && 0 == b.length && (b = $(".title", $(i)))), l = 0; l < b.length; l++) if (m = b.eq(l), !("10" == k && "none" == m.parent().parent().css("display") || j && "none" == m.css("display") || "none" == m.parent().css("display") || "none" == m.closest(".scalerowtitletd").parent().css("display") || (f = $.trim(m.text()), n = f, isQywx && m.find("ww-open-data").attr("openid") && (f = m.find("ww-open-data").attr("openid") + "|" + f, n = "<ww-open-data type='userName' openid='" + m.find("ww-open-data").attr("openid") + "'></ww-open-data>" + n), !f))) {
            if (0 == d[f]) continue;
            o = "分", (1 == langVer || langVer > 2) && (o = ""), p = '<li style="box-shadow: 0px 1px 0px 0px rgba(230, 230, 230, 0.5);line-height:36px;min-height:36px;display:flex;align-items: center;justify-content: space-between;"><span style="float:left;font-size: 14px;font-weight: 500;color: #595959;line-height: 36px;max-width: 75%;">' + n + '</span><b style="float:right;font-size: 14px;font-weight: 500;color: #0095FF;line-height: 36px;">' + o + "</b></li>", c += p, d[f] = 0, e = !0
        }
        e ? ($("#countTotalValue").html(c), $("#countTotalValue li:last-child").css("boxShadow", "none"), $("#countValBox").show(), $("#countValBox").data("perArr", d), count360Val()) : $("#countValBox").hide()
    }
}

function count360Val() {
    var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w;
    if (4 == cqType && window.showTotalScore) {
        a = {};
        for (name in $("#countValBox").data("perArr")) a[name] = 0;
        for (b = 0; b < pageHolder.length; b++) for (c = 0; c < pageHolder[b].questions.length; c++) if (d = pageHolder[b].questions[c], e = $(d).attr("type"), "none" != d.style.display) {
            if ("6" == e) {
                if (f = $(".rate-on", $(d)), g = $(".trlabel", $(d)).find("th"), h = !0, g.each(function () {
                    $(this).attr("score") && (h = !1)
                }), h) continue;
                for (i = f.eq(0).attr("mode"), j = $("tr", $(d)), k = 1, !i || 2 != i && 3 != i && 6 != i && 7 != i ? i = 0 : k = j.length, l = 0; k > l; l++) for (i && (f = j.eq(l).find(".rate-on")), m = 0; m < f.length; m++) {
                    if (6 == i) {
                        if ("none" == f.eq(m).parent().parent().parent().parent().css("display")) continue
                    } else if ("none" == f.eq(m).parent().parent().css("display")) continue;
                    if (n = f.eq(m).parent().index(), i && (m = f.length - 1, n = f.eq(m).parent().index(), f.eq(m).closest(".onscore").size() > 0 && g.length > f.eq(m).closest(".onscore").find(".rate-off").length && (n += 1)), g.eq(n).attr("score")) {
                        if (o = f.eq(m).parent().parent().prev().find("td").eq(0), 6 == i && (o = f.eq(m).parent().parent().parent().parent().prev().find("td").eq(0)), -77777 == g.eq(n).attr("score") - 0) continue;
                        p = $.trim(o.text()), isQywx && o.find("ww-open-data").attr("openid") && (p = o.find("ww-open-data").attr("openid") + "|" + p), o && a[p] >= 0 && (a[p] = solve360PointNum(a[p], g.eq(n).attr("score") - 0))
                    }
                }
            }
            if ("9" == e) for (m = 0; m < $("input", $(d)).length; m++) q = $("input", $(d)).eq(m), 0 != q.next(".rangeslider").length && "none" != q.parent().parent().parent().css("display") && q.val() - 0 > 0 && (o = q.parent().parent().parent(), o = o.prev().find("td").eq(0), p = $.trim(o.text()), isQywx && o.find("ww-open-data").attr("openid") && (p = o.find("ww-open-data").attr("openid") + "|" + p), o && a[p] >= 0 && (a[p] = solve360PointNum(a[p], q.val() - 0)));
            if ("10" == e) for (s = !0, $("input", $(d)).length > 0 ? r = $("input", $(d)) : (s = !1, r = $("select", $(d))), m = 0; m < r.length; m++) t = r.eq(m).closest("td"), isMobile && (t = r.eq(m).closest(".mdivtable")), "none" != t.css("display") && (o = t.siblings(".ui-table-rowTitle").find(".ui-table-row-title"), isMobile && (o = t.prev()), o && (p = $.trim(o.text()), isQywx && o.find("ww-open-data").attr("openid") && (p = o.find("ww-open-data").attr("openid") + "|" + p), p && (s && r.eq(m).val() - 0 > 0 && (a[p] = solve360PointNum(a[p], r.eq(m).val() - 0)), !s && r.eq(m).val() > 0 && (u = r.find("option").eq(r.eq(m).val()), u && u.length > 0 && u.attr("score") && (a[p] = solve360PointNum(a[p], u.attr("score") - 0))))))
        }
        v = 0, w = "分", (1 == langVer || langVer > 2) && (w = "");
        for (name in a) $("#countValBox b").eq(v).html(a[name] + w), v++;
        $("#countValBox").data("perArr", a)
    }
}

function solve360PointNum(a, b) {
    var f, c = String.prototype.split.call(b, "."), d = String.prototype.split.call(a, "."), e = 0;
    return c.length > 1 || d.length > 1 ? (c = c[1] ? c[1].length : 0, d = d[1] ? d[1].length : 0, f = d > c ? d : c, e = (a + b).toFixed(f), e -= 0) : e = a + b, e
}

function orientationUpdate() {
    pageHolder[cur_page] && $(pageHolder[cur_page].questions).each(function () {
        var a, b, c;
        return "none" == this.style.display ? !0 : (this.getAttribute("fixedslider") && setFixedSliderTableHandler($(this)), a = this.getAttribute("type"), b = "8" == a || "12" == a || "9" == a || "10" == a, b && ($(this).find(".ruler").width(20), c = $(".rangeslider").width() - 30, $(this).find(".ruler").width(c), initqSlider(this)), this.uploader ? this.uploader.refresh() : "33" == a || "9" == a ? this.querySelectorAll(".file").forEach(function (a) {
            a.parentNode.uploader && a.parentNode.uploader.refresh()
        }) : "10" == a && dispatchEvent(this.querySelector(".ui-table-scroll .ui-table-body"), "scroll"), void 0)
    })
}

function clockRecordTime(a) {
    var b, c, d;
    try {
        if (b = $(pageHolder[cur_page]).find("input[verify='clock']"), 0 == b.length) return;
        if (a) {
            if (c = pageHolder[cur_page].openTime, !c) return;
            d = (new Date).getTime(), b.val(d - c).blur()
        } else pageHolder[cur_page].openTime = (new Date).getTime()
    } catch (e) {
    }
}

function perDetailIntro(a) {
    var b, c, d;
    0 == $("#selfMadeDialog").length && (b = '<div class="self_made_dialog" id="selfMadeDialog" style="display: none;"><p class="perTitle" style="   font-size: 18px;font-weight: 600;color: #262626;line-height: 20px;margin:0 0 0 20px;"></p>', b += '<div class="self_made_content" style="font-size: 14px;color: #262626;line-height: 20px;margin:26px 30px 0;word-break: break-all;overflow-y:auto;"></div></div>', $("body").append(b)), c = $(a).attr("introtext") || "", d = $(a).attr("nametext") || "", $("#selfMadeDialog .perTitle").html(d + "的详细介绍"), $("#selfMadeDialog .self_made_content").html(decodeURIComponent(c)), openDialogByIframe(600, 450, "selfMadeDialog")
}

function clickClearAsnwer(a) {
    for (var b in dataMap) b.split("_")[0] == "q" + a && (dataMap[b] = "", dealId(b))
}

function getQueryVariable(a) {
    var d, e, b = window.location.search.substring(1), c = b.split("&");
    for (d = 0; d < c.length; d++) if (e = c[d].split("="), e[0] == a) return e[1];
    return !1
}

function showProgressBar(a) {
    var b, c, d, e, f, g, h, i, j, k, l, m;
    try {
        if (!window.progressBarType && window.joinIdnew) return;
        if (2 == window.progressBarType) return b = $("fieldset").length, c = cur_page + 1, d = parseInt(100 * (c / b)), $("#answerProcess .processInner").css("width", d + "%"), void 0;
        if (!a) return;
        e = getTopic(a), f = new Object, g = $(a).attr("type"), f._topic = e, f._value = "", h = "none" != $(a)[0].style.display || "-1" == a.attr("relation"), getAnswer(a, f, g, h), i = "" == f._value || null == f._value || void 0 == f._value || 4 == g && -2 == f._value || isNullAnswer(g, f._value), answeredobj[e] || i || (j = {}, j.value = f._value, j.div = a, answeredobj[e] = j), answeredobj[e] && i && delete answeredobj[e], c = Object.keys(answeredobj).length, k = $(".field").filter(function () {
            return "none" != this.style.display && "1" != this.getAttribute("qingjing")
        }), b = k.length, c = 0;
        for (l in answeredobj) m = answeredobj[l].div, m && "none" != $(m)[0].style.display && c++;
        d = parseInt(100 * (c / b)), $("#answerProcess .processInner").css("width", d + "%")
    } catch (n) {
    }
}

function updateAppearance() {
    var a, b;
    IsPar && self != top && useNewAppearance && (a = window.parent.backgroundLogo, b = window.parent.fengMainLogo, "-1" != fengmainId && ("" != fengmainId && parseInt(fengmainId) >= 4 && (b = "//image.wjx.cn/images/theme/vmc" + (fengmainId - 4) + ".png"), b && $(".fengmianImg").attr("src", b)), -1 != backgroundId && "0" != backgroundId && ("" != backgroundId && (a = "//image.wjx.cn/images/theme/vmbg" + backgroundId + ".png"), a && ($(".backgroundimg").attr("src", a), $("#divBackgroundWrap,#headsplitdiv").show())))
}

function hideTip() {
    tipNode && (tipNode.innerHTML = "", tipNode.style.display = "none")
}

function getTop(a) {
    for (var b = a.offsetLeft, c = a.offsetTop; a = a.offsetParent;) b += a.offsetLeft, c += a.offsetTop;
    return {x: b, y: c}
}

function limitWordFn(a) {
    var b = 200;
    return window.isMobile && (b = 100), a = a.length > b ? a.substr(0, b) + "..." : a
}

function setTip(a) {
    var d, b = 0, c = $(a).closest(".ui-table-body")[0];
    c && (b = c.scrollLeft), tipNode || (tipNode = document.createElement("div"), tipNode.id = "tip-box", tipNode.className = "tip-style", tipNode.style.display = "none", tipNode.style.position = "absolute", document.body.appendChild(tipNode)), tipNode.style.left = getTop(a).x - b + "px", tipNode.style.width = a.clientWidth + 2 + "px", d = limitWordFn(a.value), tipNode.innerHTML = d, a.value && a.scrollWidth > a.offsetWidth ? (tipNode.style.display = "", tipNode.style.top = getTop(a).y - $(tipNode).height() - 14 + "px") : tipNode.style.display = "none"
}

function handleFontSize() {
    WeixinJSBridge.invoke("setFontSizeCallback", {fontSize: 0}), WeixinJSBridge.on("menu:setfont", function (a) {
        a && 2 == a.fontSize || (WeixinJSBridge.invoke("setFontSizeCallback", {fontSize: 0}), setTimeout(function () {
            for (var a = 0; a < pageHolder[cur_page].questions.length; a++) "1" === pageHolder[cur_page].questions[a].getAttribute("fixedslider") && setFixedSliderTableHandler($(pageHolder[cur_page].questions[a]))
        }, 500))
    })
}

function aloneAnswer() {
    var a, b;
    window.hasinitaloneanswer || (window.hasinitaloneanswer = !0, a = $(".aloneAnswer"), b = '<div class="apageWrap"><a class="apageprev mainColor" href="javascript:;">' + wjxlang.prev + '</a><span class="aAProgramWrap"><span class="curaAindex">1</span>/<span class="totalaAset">1</span></span><a class="apagenext mainColor" href="javascript:;">' + wjxlang.next + "</a></div>", a.each(function () {
        var c, a = $(this).find("tr.rowtitle");
        this.totalrows = a.length, this.rowsIndex = 1, c = this, $(this).append($(b)), this.showrow = function () {
            $(c).find("tr").hide();
            var a = $(c).find("tr.rowtitle").eq(c.rowsIndex - 1);
            a.show().next().show(), a.prevAll(".tr_label").length > 0 && a.prevAll(".tr_label").eq(0).show(), c.updateprocess()
        }, this.updateprocess = function () {
            var a = $(c).find(".curaAindex"), b = $(c).find(".totalaAset");
            a.text(c.rowsIndex), b.text(c.totalrows), 1 == c.rowsIndex ? $(c).find(".apageprev").addClass("disabled") : $(c).find(".apageprev").removeClass("disabled"), c.rowsIndex == c.totalrows ? $(c).find(".apagenext").addClass("disabled") : $(c).find(".apagenext").removeClass("disabled")
        }, $(this).find(".apagenext").click(function () {
            return $(this).hasClass("disabled") ? (alertmsg(wjxlang.finish, 1e3, c), void 0) : ($("#divMatrixHeader,#divMatrixRel").hide(), c.rowsIndex += 1, c.showrow(), c.updateprocess(), void 0)
        }), $(this).find(".apageprev").click(function () {
            $(this).hasClass("disabled") || ($("#divMatrixHeader,#divMatrixRel").hide(), c.rowsIndex -= 1, c.showrow(), c.updateprocess())
        }), this.showrow()
    }))
}

function landscapeFun() {
    (180 === window.orientation || 0 === window.orientation) && ($("body").removeClass("landscape"), window.islandscape = !1), (90 === window.orientation || -90 === window.orientation) && ($("body").addClass("landscape"), window.islandscape = !0), fixBottom()
}

function eyeOpen(a, b) {
    var d, e, f, g, h, i, j, k, c = c || window.event;
    c.stopPropagation && c.stopPropagation(), d = $(b).parent(), e = d.find(".selTitle").text(), f = d.find(".vote_num_percent"), f = f.size() > 0 ? f.html().split("<span")[0] : "", g = $(b).parent().prev().find("input"), f = "<b>" + f + "</b>", d.find(".vote_num_percent span").size() > 0 && (f += "(" + d.find(".vote_num_percent span").text() + ")"), h = $(b).next().html() || "", i = $(b).parent().parent().prev().find(".popimg img").attr("src"), j = $("#eyeBox"), j.size() <= 0 && ($("body").append("<div class='eye_box_style' id='eyeBox'></div>"), j = $("#eyeBox")), k = "<div class='eye_content' style='text-align:center;'><i class='iconfontNew' onclick='$(this).parent().parent().hide()' style='position:absolute;right:1px;top:6px;font-size:20px;color:#fff;background: rgba(0,0,0,0.1);'>&#xe71c;</i>", k += "<img src='" + i.split("?")[0] + "' onload='afterImgResize(this)' /><div  class='eye_text_area' style='min-height:140px;background:#fff;overflow-y:auto;text-align:left;'><p class='eye_val'>" + f + "</p>", k += "<div class='eye_title'>" + e + "</div>", k += "<div class='eye_text'>" + h + "</div></div>", k += "<div class='bottom_btns'><a href='javascript:;' class='cancle_primary' onclick='checkeyeoption()'>取消</a><a class='confirm_btn mainBgColor' href='javascript:;' onclick='checkeyeoption(1)'>选择</a></div>", j.html(k), $(".eye_content").width("auto"), isMobile && $(".eye_content").width("100%"), $(".eye_content").data("curone", g), j.show()
}

function checkeyeoption(a) {
    window.isSingleVote && "radio" == $(".eye_content").data("curone").attr("type") && a ? $(".eye_content").data("curone").parent().next().find(".singleVoteBtn").click() : !$(".eye_content").data("curone").is(":checked") && a && $(".eye_content").data("curone").parent().parent().click(), $(".eye_content").data("curone").is(":checked") && !a && $(".eye_content").data("curone").closest(".label").click(), $("#eyeBox").hide()
}

function afterImgResize(a) {
    isMobile || $(a).width() < 576 && $(a).parent().width($(a).width())
}

var needConfirmAnswer, isMatchTitle, spChars, spToChars, prevInputControl, isLoadingAnswer, lastCostTime, hasClickQ,
    needGoOut, hasShowTip, keywordarray, keywordObj, quarray, hlv, jpmarr, jpmObj, jqParam, isLoadQues,
    scrFormHeightDif, curPageIndex, isPageRun, UPLOAD_FILE_SUCCESS, curfilediv, isUploadingFile, cur_page, hasSkipPage,
    prevControl, pageHolder, curMatrixFill, curMatrixError, questionsObject, allQArray, shopArray, isCaptchaValid,
    nc_csessionid, nc_sig, nc_token, captchaOjb, hasSubmitTimes, hasPeiEFull, hasConfirmBtn, t_img, t_isLoad,
    itempopUpindex, popUpindex, firstError, firstMatrixError, needSubmitNotValid, lastFixedObj, isValidating,
    txtCurCity, prevScrollTop, obj_offectTop, MIN_CLICK_DELAY_TIME, lastClickTime, startAge, endAge, rName, gender,
    marriage, education, startIncome, endIncome, IsWIFI, modata, hasMatchName, jpMatchId, needImport, quesMatchId,
    jpWayText, quResult, clientAnswerSend, havereturn, timeoutTimer, nvvv, ktimes, lastLabel, isAutoSubmit,
    hasAutoSubmit, amt, hasSetmsg, answeredobj, tipNode, curField = null, relationQs = new Object,
    ItemrelationQs = new Object, relationBindTopic = new Object, itemRelationBindTopic = new Object,
    relationNotDisplayQ = new Object, relationItemNotDisplayQ = new Object, HasSetItemrelationList = new Object,
    verifymob = "", verifyControl = null, hasQingJing = !1;
window.reachMaxCheatCount = !1, needConfirmAnswer = !1, isMatchTitle = 0, $(function () {
    loasCaptchaJs()
}), spChars = ["$", "}", "^", "|", "!", "<"], spToChars = ["ξ", "｝", "ˆ", "¦", "！", "＜"], prevInputControl = null, isLoadingAnswer = !1, lastCostTime = 0, hasClickQ = !1, needGoOut = !1, hasShowTip = !1, keywordarray = "", keywordObj = null, quarray = "", hlv = "1", jpmarr = new Array, jpmObj = new Object, jqParam = "", isLoadQues = !1, scrFormHeightDif = 0, String.prototype.dbc2sbc = function () {
    return this.replace(/[\uff01-\uff5e]/g, function (a) {
        return String.fromCharCode(a.charCodeAt(0) - 65248)
    }).replace(/\u3000/g, " ")
}, curPageIndex = 0, isPageRun = !1, UPLOAD_FILE_SUCCESS = "", $(function () {
    return UPLOAD_FILE_SUCCESS = wjxlang.upload_success, $.support.leadingWhitespace || (window.location.href = window.location.href.replace("/m/", "/jq/").replace("/vm/", "/vj/")), window.addEventListener ? window.IsPar || window != window.top ? (window == window.top || window.IsPar || $("#divPowerBy").css({background: "#fff"}), void 0) : (window.touPiaoItemIndex || window.addEventListener("load", function () {
        setTimeout(function () {
            window.addEventListener("popstate", function () {
                if (2 == curPageIndex) return $("#toplogo,#toptitle,#divContent,#divPowerBy").hide(), $("#jielongDiv").show(), $("#form1").css("margin", "0px"), curPageIndex = 0, void 0;
                if (hasClickQ) {
                    if (needGoOut) return window.history.back(), void 0;
                    if (isWeiXin && 0 == langVer && !window.OneaTime) {
                        pushHistory();
                        var b = !0;
                        b ? show_zhezhao_tip(!0) : closeTipWindow()
                    }
                }
            }, !1)
        }, 500)
    }), void 0) : void 0
}), String.prototype.format = function () {
    var a = arguments;
    return this.replace(/\{(\d+)\}/g, function (b, c) {
        return a[c]
    })
}, curfilediv = null, isUploadingFile = !1, cur_page = 0, hasSkipPage = !1, prevControl = null, pageHolder = null, curMatrixFill = null, curMatrixError = null, questionsObject = new Object, allQArray = null, shopArray = new Array, isCaptchaValid = !1, nc_csessionid = "", nc_sig = "", nc_token = ["FFFF00000000016770EE", (new Date).getTime(), Math.random()].join(":"), captchaOjb = null, hasSubmitTimes = 0, hasPeiEFull = !1, $(function () {
    var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K,
        M, N, O, P, Q, R;
    for (window.informedInit && informedInit(), $("#htitle").height() > 40 && $("#htitle").css("font-size", "20px"), "hidden" != $("#toptitle").css("visibility") || window.isJieLong || (document.title = ""), a = document.title, $(window).scroll(function () {
        var c = $("#toptitle").offset().top + 48, d = $(this).scrollTop();
        d > c ? $("title").text() || $("title").text(a) : emptyTitle(), window.isJieLong && !isMobile && (d > 80 ? $(".jielonglistheader").addClass("jielongheadertopmax") : $(".jielonglistheader").removeClass("jielongheadertopmax")), scrFormHeightDif > 0 || (window.buttonfooter || (window.buttonfooter = $("#deepButton")), (-20 > scrFormHeightDif && d > 50 || scrFormHeightDif > -20) && window.buttonfooter.hasClass("button-list-fixed-deep") && window.buttonfooter.removeClass("button-list-fixed-deep"), 50 >= d && !window.buttonfooter.hasClass("button-list-fixed-deep") && window.buttonfooter.addClass("button-list-fixed-deep"))
    }), emptyTitle(), pageHolder = $("fieldset.fieldset"), b = iosIframeVideoHack() ? " touchend" : "", b && $("#divNext a").bind("touchend", function (a) {
        show_next_page(), a.preventDefault()
    }), c = 0; c < pageHolder.length; c++) for (d = "true" == $(pageHolder[c]).attr("skip"), d && (pageHolder[c].skipPage = !0, hasSkipPage = !0), e = $(".field", pageHolder[c]), pageHolder[c].questions = e, f = 0, g = 0; g < e.length; g++) e[g].indexInPage = f, e[g].pageIndex = c, hasSkipPage && (e[g].pageParent = pageHolder[c]), f++;
    if ($("#divMatrixRel").bind("click", function (a) {
        a.stopPropagation()
    }), $(document).bind("click", function () {
        setMatrixFill(), postHeight()
    }), $("#matrixinput").on("keyup blur focus", function (a) {
        var b, c, d, e;
        curMatrixFill && (b = $(this).val(), curMatrixFill.fillvalue = b, "blur" != a.type && "keyup" != a.type || !curMatrixFill.fillvalue || (c = $(curMatrixFill).closest(".field")[0], c.removeError && c.removeError()), d = $(curMatrixFill).closest(".field"), e = d.attr("ischeck"), saveMatrixFill(curMatrixFill, e), saveAnswer(d))
    }), keywordarray = (window.awardkeylist || "").split("┋"), window.qukeylist && (quarray = qukeylist.split("|")), window.checkTitleDescMatch && checkTitleDescMatch(), h = !1, i = new Array, j = !1, allQArray = $(".field"), k = !1, allQArray.each(function () {
        var c, d, e, f, g, k, l, m, n, o, p, q, r, s, t, u, v, w, x, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P,
            Q, R, S, T, U, V, W, X, Y, Z, _, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, kb, a = $(this);
        if (this.onmouseover = function () {
            ktimes++
        }, c = a.attr("type"), a.bind("click" + b, function () {
            var e, d = "1" == c || "2" == c || "9" == c || "10" == c && !a.attr("select");
            !d && this.removeError && this.removeError(), "10" == c && a.attr("select") && $(this).find(".mdivtable").each(function () {
                var a = $(this);
                a[0].removeError && a[0].removeError(!0)
            }), e = navigator.userAgent && navigator.userAgent.indexOf("wxwork") > -1, hasClickQ || !isWeiXin || window.corpId && "3" == window.cqType || 0 != langVer || window.isJieLong || e || pushHistory(), window.showCoverNoEnd || (hasClickQ = !0);
            try {
                checkJpMatch(c, this), "5" != c && "6" != c && $("#divMatrixHeader").hide()
            } catch (f) {
            }
            window.loadGeetest && window.loadGeetest(), window.scrollup && scrollup.Stop()
        }), d = getTopic(a), questionsObject[d] = a, e = a.attr("isshop"), e && shopArray.push(this), f = a.attr("relation"), g = a.attr("hasitemrelation"), k = "", f && "0" != f) {
            k = -1 != f.indexOf("|") ? "|" : "$", l = f.split(k);
            for (m in l) if (n = l[m], n && -1 != n.indexOf(",")) {
                if (o = n.split(","), p = o[0], relationQs[p] || (relationQs[p] = new Array), relationQs[p].push(this), relationBindTopic[d] || (relationBindTopic[d] = new Array), relationBindTopic[p]) for (q = 0; q < relationBindTopic[p].length; q++) {
                    for (r = relationBindTopic[p][q], s = !1, t = 0; t < relationBindTopic[d].length; t++) relationBindTopic[d][t] != r || (s = !0);
                    s || relationBindTopic[d].push(r)
                }
                relationBindTopic[d].push(p)
            }
            relationNotDisplayQ[d] = "1"
        } else "0" == f && (relationNotDisplayQ[d] = "1");
        if ("1" == g) {
            for (j = !0, u = $("input[type='radio']", a), 0 == u.length && (u = $("input[type='checkbox']", a)), 0 == u.length && (u = $("input[type='hidden']", a)), v = "none", w = !1, m = 0; m < u.length; m++) if (x = u.eq(m).attr("itemrelation"), x && "" != x) {
                for (k = -1 != x.indexOf("|") ? "|" : "$", z = u.eq(m).attr("id"), A = x.split(k), HasSetItemrelationList[z] = x, B = 0; B < A.length; B++) if (n = A[B], n && -1 != n.indexOf(",")) {
                    if (o = n.split(","), p = o[0], ItemrelationQs[p] || (ItemrelationQs[p] = new Array), ItemrelationQs[p].push(z), itemRelationBindTopic[d] || (itemRelationBindTopic[d] = new Array), itemRelationBindTopic[p]) for (q = 0; q < itemRelationBindTopic[p].length; q++) {
                        for (r = itemRelationBindTopic[p][q], s = !1, t = 0; t < itemRelationBindTopic[d].length; t++) itemRelationBindTopic[d][t] != r || (s = !0);
                        s || itemRelationBindTopic[d].push(r)
                    }
                    itemRelationBindTopic[d].push(p)
                }
            } else w = !0, "none" != v || relationNotDisplayQ[d] || (v = "");
            a[0].style.display = v, "none" != v || relationItemNotDisplayQ[d] || w || (relationItemNotDisplayQ[d] = "1")
        }
        return C = a.attr("titletopic"), C && (D = questionsObject[C], D && (D[0]._titleTopic || (D[0]._titleTopic = new Array), D[0]._titleTopic.push(d), E = $("input.OtherRadioText", D), 0 == E.length && (E = $("input.OtherText", D)), E.length > 0 && E.bind("blur keyup", function () {
            referTitle(D)
        }), F = a.find(".field-label")[0], F && (G = D.attr("qingjing"), H = "", G && (H = D.find(".ui-radio").parent().html(), I = H.indexOf("ui-radio"), I > -1 && (H = H.substr(0, I - 12))), F.innerHTML = F.innerHTML.replace("[q" + C + "]", "<span id='spanTitleTopic" + d + "' style='text-decoration:underline;'>" + H + "</span>")))), "1" == a.attr("hrq") ? !0 : ("1" == c ? (u = $("input", a), u[1] && (u[0].confirmPwd = u[1], u[1].firstPwd = u[0], $(u[1]).on("keyup", function () {
            this.firstPwd.needCheckConfirm = !0, verifyTxt(a, $(this))
        }), u = $(u[0])), isWeiXin && "1" == u.attr("qrcode") && showQr(u), u.on("keyup blur click", function () {
            verifyTxt(a, u), prevInputControl = this, window.hasAnswer = !0, jump(a, this), referTitle(a, this.value), saveAnswer(a)
        }), isMobile || "number" != u.attr("type") || (u[0].onwheel = function (a) {
            a.target.blur()
        }), iosNumberKey(u), window.needSaveJoin && u.change(function () {
            saveAnswer(a)
        }), u.blur(function () {
            a.find(".errorMessage").html() || a.find(".errorMessage").height("auto"), checkOnly(a, u), lastFixedObj && $(lastFixedObj).addClass("btn_fixedstyle")
        }), u.focus(function () {
            lastFixedObj && $(lastFixedObj).removeClass("btn_fixedstyle")
        }), J = $("textarea", a), J[0] && (K = J.prev("a")[0], K.par = a[0], J[0].par = a[0], a[0].needsms = !0, L = J.parent().parent().find(".errorMessage")[0], a[0].mobileinput = u[0], a[0].prevbtn = K, a[0].verifycodeinput = J[0], window.joinIdnew && (u.disabled = !0, K.disabled = !0), K.onclick = function () {
            var a, b;
            if (!this.disabled) return a = this.par, a.mobileinput.value = $.trim(a.mobileinput.value), /^1[3456789]\d{9}$/.test(a.mobileinput.value) ? (a.issmsvalid && a.mobile == a.mobileinput.value || this.isSending || (!this.repeat || confirm("您输入的手机号码“" + a.mobileinput.value + "”确认准确无误吗？")) && (b = this.getAttribute("nocode"), "1" == b ? K.sendActivitySms() : (verifyControl = K, isCaptchaValid = !1, captchaOjb && captchaOjb.reload(), showCaptcha())), void 0) : (alertNew("请输入正确的手机号码"), void 0)
        }, K.sendActivitySms = function (a) {
            var b, c, d, e, f;
            this.isSending = !0, this.disabled = !0, b = this.par, c = this, d = b.mobileinput.getAttribute("needonly"), e = "", a && (e = "&nc_csessionid=" + encodeURIComponent(nc_csessionid) + "&nc_sig=" + encodeURIComponent(nc_sig) + "&nc_token=" + encodeURIComponent(nc_token) + "&nc_scene=" + nc_scene), f = "/joinnew/AnswerSmsHandler.ashx?q=" + activityId + "&mob=" + escape(b.mobileinput.value) + e + "&t=" + (new Date).valueOf(), d && (f += "&qi=" + getTopic(b)), window.joinIdnew && (f += "&joinid=" + window.joinIdnew), $.ajax({
                type: "GET",
                url: f,
                async: !1,
                success: function (a) {
                    var e, d = "";
                    0 == a.indexOf("true") ? (d = "成功发送。如未收到，请检查手机号是否正确！", e = a.split(","), 2 == e.length && (d += e[1]), c.repeat = 1, c.needreload = !0, c.resent(), b.verifycodeinput.disabled = !1) : "fast" == a ? (d = "发送频率过快", c.needreload = !0, c.resent()) : "repeat" == a ? (c.disabled = !1, d = "此手机号之前已参与过，不能重复参与！") : d = "no" == a ? "发布者短信数量不够" : "fail" == a ? "短信发送失败，每天最多发送5次！" : "error" == a ? "手机号码不正确" : "nopub" == a ? "问卷未运行，不能填写" : a, d.indexOf("验证码") > -1 && (c.disabled = !1, c.needreload = !0), L.innerHTML = d, c.isSending = !1
                }
            })
        }, K.resent = function () {
            var a = this, b = 60, c = setInterval(function () {
                b--, 57 > b && (a.isSending = !1), b > 0 ? a.innerHTML = "重发(" + b + "秒)" : (a.innerHTML = "发送验证码", a.disabled = !1, clearInterval(c))
            }, 1e3)
        }, J[0].onchange = J[0].onblur = function () {
            var b, c, a = $.trim(this.value);
            return 6 != a.length ? (L.innerHTML = "提示：请输入6位数字！", void 0) : /^\d+$/.exec(a) ? (b = this.par, b.issmsvalid && b.mobile == b.mobileinput.value || b.prevcode != a && (b.prevcode = a, c = "/joinnew/AnswerSmsValidateHandler.ashx?q=" + activityId + "&mob=" + escape(b.mobileinput.value) + "&code=" + escape(a) + "&t=" + (new Date).valueOf(), $.ajax({
                type: "GET",
                url: c,
                async: !1,
                success: function (a) {
                    b.issmsvalid = !1;
                    var c = "";
                    "true" == a ? (b.issmsvalid = !0, b.mobile = b.mobileinput.value, "1" != b.prevbtn.getAttribute("nocode") && (verifymob = b.mobile), c = "成功通过验证", b.removeError()) : "send" == a ? c = "请先发送验证码，每天最多发送5次！" : "no" == a ? c = "验证码输入错误超过5次，无法再提交" : "error" == a && (c = "验证码输入错误，连续输错5次将无法提交"), L.innerHTML = c
                }
            })), void 0) : (L.innerHTML = "提示：请输入6位数字！", void 0)
        })) : "2" == c ? (u = $("textarea", a), isWeiXin && "1" == u.attr("qrcode") && showQr(u), u.on("keyup blur click", function () {
            verifyTxt(a, u), prevInputControl = this, window.hasAnswer = !0, jump(a, this), referTitle(a, this.value), saveAnswer(a)
        }), u.blur(function () {
            checkOnly(a, u), lastFixedObj && $(lastFixedObj).addClass("btn_fixedstyle")
        }), u.focus(function () {
            lastFixedObj && $(lastFixedObj).removeClass("btn_fixedstyle")
        })) : "9" == c || "34" == c ? (M = "input", "34" == c && (M = "textarea"), N = $(M, a), N.on("keyup blur change", function () {
            $(this), prevInputControl = this, msg = verifyTxt(a, $(this), !0), jump(a, this), referTitle(a, this.value), count360Val(), saveAnswer(a), fixBottom()
        }), N.blur(function () {
            checkOnly(a, $(this)), lastFixedObj && $(lastFixedObj).addClass("btn_fixedstyle")
        }), N.focus(function () {
            lastFixedObj && $(lastFixedObj).removeClass("btn_fixedstyle")
        }), iosNumberKey(N), O = $(".textEdit .textCont", a), O.unbind("click"), O.click(function (a) {
            var b, c;
            return a.stopPropagation(), b = $(this).parent(".textEdit").attr("verify"), "城市单选" == b || "城市多选" == b || "省市区" == b || "高校" == b || "地图" == b || "日期" == b || "生日" == b || "入学时间" == b ? (c = $(this).parent().prev(), c.hasClass("ui-input-text") || (c = $(this).parent().prev().prev()), c.trigger("click"), !1) : ($(this).text().trim() ? $(this).css({width: "auto"}) : $(this).css({width: 24}), $(this).parent().removeClass("initStyle"), !1)
        }), P = isIosSystem(), O.blur(function () {
            P && ">" == $(this).html().split("<br")[1] && $(this).html($(this).html().split("<br")[0]), "" == $(this).text().trim() && $(this).css({
                display: "inline-block",
                width: 72
            }).parent(".textEdit").addClass("initStyle");
            var a = $(this).parent(".textEdit").prev();
            a.hasClass("ui-input-text") || (a = $(this).parent(".textEdit").prev().prev()), a.val($(this).text().trim()).trigger("keyup")
        }), O.on("keydown input", function (a) {
            if (a = a || window.event, 13 == a.keyCode) return !1;
            if (!$(this).attr("contenteditable")) return !1;
            "" != $(this).text().trim() && $(this).css({
                display: "inline",
                width: "auto"
            }).parent().removeClass("initStyle"), P && ">" == $(this).html().split("<br")[1] && $(this).html($(this).html().split("<br")[0]), "" == $(this).text().trim() && $(this).css({
                display: "inline-block",
                width: 72
            }).parent(".textEdit").addClass("initStyle");
            var b = $(this).parent(".textEdit").prev();
            b.hasClass("ui-input-text") || (b = $(this).parent(".textEdit").prev().prev()), b.val($(this).text().trim()).trigger("keyup")
        })) : "8" == c ? $("input", a).change(function () {
            jump(a, this), saveAnswer(a)
        }) : "12" == c ? $("input", a).change(function () {
            var h, i, b = null, c = $(a).attr("total"), d = $("input:visible", a), e = count = d.length, f = c,
                g = this;
            d.each(function () {
                $(this).val() ? (count--, f -= $(this).val()) : g != this && (b = this)
            }), b || d.each(function (a) {
                return a == e - 1 ? (b = this, !1) : void 0
            }), 1 == count && b && f > 0 && ($(b).val(f).change(), f = 0), msg = "", 0 != f && 0 == count && (h = parseInt($(b).val()) + f, h >= 0 ? b != this ? ($(b).val(h).change(), f = 0) : 2 == d.length && (i = c - $(b).val(), $(d[0]).val(i).change(), f = 0) : msg = "，<span style='color:red;'>" + sum_warn + "</span>"), 0 == f && d.each(function () {
                $(this).val() || $(this).val("0").change()
            }), $(".relsum", a).html(sum_total + "<b>" + c + "</b>" + sum_left + "<span style='color:red;font-bold:true;'>" + (c - f) + "</span>" + msg), jump(a, this), saveAnswer(a)
        }) : "13" == c ? h = !0 : "3" == c ? (Q = $("div.ui-radio", a), Q.each(function () {
            var a, b;
            window.hasTouPiao && (a = this.getAttribute("htp"), a && (b = document.getElementById("spanPiao" + d + "_" + a), b && !b.needHide && b.innerHTML && (b.style.display = "")))
        }), checkPeiE(a, "input[type='radio']"), Q.bind("click", function (b) {
            var c, d, e;
            return b && b.target && "A" == b.target.tagName && b.target.href && 0 == b.target.href.indexOf("http") ? !0 : (c = $(this), a[0] && a[0].hasConfirm || (d = c.find("input[type='radio']")[0], d.disabled || (window.hasAnswer = !0, $(a).find("div.ui-radio").each(function () {
                var a = $(this);
                a.find("input[type='radio']")[0].checked = !1, a.removeClass("checked").find("a.jqradio").removeClass("jqchecked")
            }), d.checked = !0, e = c.find("input.OtherRadioText")[0], e && (d.itemText = e), processRadioInput(a[0], d), c.addClass("checked").find("a.jqradio").addClass("jqchecked"), displayRelationByType(a), referTitle(a), jump(a, d), displaypeie(a, "input[type=radio]", 1), "1" != a.attr("req") && addClearHref(a), showAnswer(a, Q, !0), saveAnswer(a), 1 != c.attr("desc") && b.preventDefault(), initCusomSelect(this, d, a[0]))), void 0)
        }), G = a.attr("qingjing"), G && (i.push(a), hasQingJing = !0), E = $("input.OtherRadioText", a), E.bind("click", function (a) {
            var b, c, d, e;
            $(this.parentNode.parentNode.parentNode).find("div.ui-radio").each(function () {
                $(this).find("input[type='radio']")[0].checked = !1, $(this).removeClass("checked").find("a.jqradio").removeClass("jqchecked")
            }), prevInputControl = this, b = $(this).attr("rel"), c = $("#" + b)[0], c.checked = !0, d = $("#" + b).parent().parent(), d.addClass("checked").find("a.jqradio").addClass("jqchecked"), c.itemText = this, e = $(this).closest(".field"), processRadioInput(e[0], c), displayRelationByType(e), jump(e, c), displaypeie(e, "input[type=radio]", 1), saveAnswer(e), a.stopPropagation(), a.preventDefault()
        }), E.bind("blur keyup", function (b) {
            otherTextEvent(this, a), "blur" == b.type && saveAnswer(a)
        })) : "7" == c ? (R = $("select", a), R.bind("change", function (b) {
            displayRelationByType(a), jump(a, this.options[this.selectedIndex]);
            var c = this.options[this.selectedIndex].text;
            -2 == this.value && (c = ""), referTitle(a, c), saveAnswer(a), displaypeie(a, "option", 5), b.preventDefault()
        }), checkPeiE(a, "option"), R[0].selectedIndex > 0 && $("span", R[0].parentNode).html(R[0].options[R[0].selectedIndex].text)) : "10" == c ? (S = "1" == a.attr("select"), T = a.attr("zizeng"), U = a.attr("maxvalue"), V = a.attr("minvalue"), W = "<div class='errorMessage'></div>", X = "", Y = a.find(".mdivtable"), Z = a.attr("fixedslider"), T && !Z ? (_ = a.find(".select_title"), ab = a.find(".mdivtable:last"), Y.each(function (a) {
            a >= V && $(this).hide(), X = "<div style='display: none;' class='delete-icon'></div>" + W, $(this).addClass("zizeng").append(X)
        }), _.each(function (a) {
            a >= V && $(this).hide()
        }), bb = wjxlang.add, ab.after("<div class='increase-btn'><i class='increase-icon iconfontNew'>&#xe68b;</i><span>" + bb + "</span></div>"), Y.find(".delete-icon").on("click", function () {
            var a = $(this).parent(".mdivtable"), b = a.attr("rowid");
            b == U && $(this).closest(".field").find(".increase-btn").removeClass("disable-style"), a.hide().prev().hide(), b - V > 1 && a.prev().prev().find(".delete-icon").show(), fixBottom()
        }), $(".increase-btn", a).on("click", function () {
            var b, c;
            $(this).hasClass("disable-style") || (b = a.find(".mdivtable").filter(function (a, b) {
                return "none" != b.style.display
            }), c = b.next().show().next().show(), c.last().find(".delete-icon").show().parent().prev().prev().find(".delete-icon").hide(), c.last().attr("rowid") == U && $(this).addClass("disable-style"), fixBottom())
        })) : Z ? (cb = a.find(".ui-slider-table"), db = cb.find(".ui-table-scroll .ui-table-body"), eb = cb.find(".ui-scroll-shadow"), setFixedSliderTableHandler(a), db.on("scroll", function () {
            var a = $(this), b = a.parent().next();
            0 != a.scrollLeft() ? b.removeClass("ui-table-position") : b.addClass("ui-table-position"), a.scrollLeft() + a.width() === a.children().outerWidth() || a[0].scrollwidth <= a[0].clientWidth ? eb.hide() : eb.show()
        }), db.trigger("scroll"), db.find(".ui-table-tbody tr").on("DOMNodeInserted", function () {
            var b = $(this);
            setFixedSliderTableHandler(a, b)
        }), T && (fb = a.find(".ui-table-fixed-rowTitle"), fb.each(function () {
            var b = "<div style='display: none;' class='delete-icon'></div>";
            $(this).addClass("zizeng").append(b)
        }), bb = wjxlang.add, a.find(".ui-slider-table").after("<div class='increase-btn'><i class='increase-icon iconfontNew'>&#xe68b;</i><span>" + bb + "</span></div>"), fb.find(".delete-icon").on("click", function () {
            var d, e, b = $(this).closest("tr"), c = b.attr("rowid");
            c == U && $(this).closest(".field").find(".increase-btn").removeClass("disable-style"), b.hide(), d = $(this).closest(".field"), e = d.find(".ui-slider-table .ui-table-frame tr[rowid='" + c + "']"), e.hide(), c - V > 1 && b.prev().find(".delete-icon").show(), $(".increase-btn", a).show(), setFixedSliderTableHandler(a), fixBottom()
        }), $(".increase-btn", a).on("click", function () {
            var c, d, b = a.find(".ui-table-scroll .ui-table-frame tr").filter(function (a, b) {
                return "none" == b.style.display
            });
            1 == b.length && $(this).hide(), c = b.eq(0), d = c.attr("rowid"), c.show(), a.find(".ui-table-fixed .ui-table-tbody tr .delete-icon").hide(), a.find(".ui-table-fixed .ui-table-tbody tr[rowid='" + d + "']").show().find(".delete-icon").show(), setFixedSliderTableHandler(a), fixBottom()
        }))) : Y.each(function () {
            X = W, $(this).append(X)
        }), S && $("select", a).bind("change", function () {
            jump(a, this), saveAnswer(a)
        }), gb = $("input,textarea", a), gb.bind("focus", function () {
            lastFixedObj && $(lastFixedObj).removeClass("btn_fixedstyle")
        }).bind("keyup change blur", function () {
            var c = $(this);
            c.val(), prevInputControl = this, msg = verifyTxt(a, $(this), !0), count360Val(), jump(a, this), saveAnswer(a)
        }), iosNumberKey(gb)) : "5" == c ? initRate(a) : "6" == c ? initRate(a, !0) : "4" == c ? (hb = $("div.ui-checkbox", a), hb.each(function () {
            var a, b;
            window.hasTouPiao && (a = this.getAttribute("htp"), a && (b = document.getElementById("spanPiao" + d + "_" + a), b && b.innerHTML && (b.style.display = "")))
        }), checkPeiE(a, "input[type='checkbox']"), hb.bind("click", function (b) {
            var c, d, e;
            return b && b.target && "A" == b.target.tagName && b.target.href && 0 == b.target.href.indexOf("http") ? !0 : (c = $(this), a[0] && a[0].hasConfirm || (d = c.find("input[type='checkbox']")[0], d.disabled || (d.checked = !d.checked, window.hasAnswer = !0, d.checked ? c.addClass("checked").find("a.jqcheck").addClass("jqchecked") : c.removeClass("checked").find("a.jqcheck").removeClass("jqchecked"), 1 == a.attr("gm") && groupMutual(this), checkHuChi(a, this), displayRelationByType(a), verifyCheckMinMax(a, !1, !1, this, !d.checked), jump(a, d), displaypeie(a, "input[type=checkbox]", 2), window.createItem && createItem(a), e = c.find("input.OtherText")[0], e && (d.checked ? e.value = e.pvalue || "" : (e.pvalue = e.value, e.value = "")), referTitle(a), showAnswer(a, hb), saveAnswer(a), initCusomSelect(this, d, a[0]), TotalValBoxInit(), b.preventDefault())), void 0)
        }), ib = $("input.OtherText", a), ib.bind("click", function (a) {
            var d, e, f, g, b = $(this).attr("rel"), c = $("#" + b)[0];
            return prevInputControl = this, d = $(this).closest("div.field"), e = d.attr("maxvalue"), e && (f = $("input:checked", d).length, f > e || f == e && !c.checked) ? ($(this).blur(), a.stopPropagation(), a.preventDefault(), void 0) : (c.checked = !0, c.itemText = this, g = $("#" + b).closest(".ui-checkbox"), g.addClass("checked").find("a.jqcheck").addClass("jqchecked"), this.pvalue && !this.value && (this.value = this.pvalue), checkHuChi(d, g[0]), displayRelationByType(d), jump(d, c), displaypeie(d, "input[type=checkbox]", 2), verifyCheckMinMax(d, !1), window.createItem && createItem(d), 1 == d.attr("gm") && groupMutual(this), saveAnswer(d), a.stopPropagation(), a.preventDefault(), void 0)
        }), ib.bind("blur keyup", function (b) {
            referTitle(a), otherTextEvent(this, a), "blur" == b.type && saveAnswer(a)
        })) : "21" == c ? $(".shop-item", a).each(function () {
            var b = $(".itemnum", this), c = $(".item_left", this), d = $(".item_detail", this),
                e = a.attr("maxvalue") || 0;
            e = parseInt(e), $(".add", this).bind("click", function (f) {
                var l, m, n, o, p, q, g = !1, h = 0, i = 0, j = 0, k = !0;
                if (c[0] && (g = !0, h = parseInt(c.attr("num"))), i = parseInt(d.attr("minnum")), j = parseInt(d.attr("maxnum")), l = parseInt(b.val()), m = "", n = 0, e) for (o = $(".itemnum", a), p = 0; p < o.length; p++) if (q = o.eq(p), q && parseInt(q.val()) > 0 && (o.index(b) != p ? n++ : ""), n >= e) return alertNew(wjxlang.shop_maxnum.replace("{0}", e)), b.val(0), f.preventDefault(), void 0;
                i > 0 && l < parseInt(i) && (b.val(i), k = !1), j > 0 && l >= parseInt(j) && (m = wjxlang.shop_limit_num.replace("{0}", j), b.val(j), k = !1), g && l >= h && (!(j > 0 && h > j) || i > h) && (m = wjxlang.shop_period.replace("{0}", h), 0 >= h && (m = wjxlang.shop_outstock), b.val(h), k = !1), k && b.val(l + 1), updateCart(a), "" == m ? "" : alertNew(m), f.preventDefault()
            }), b.bind("focus", function () {
                "0" == b.val() && b.val("")
            }), b.bind("blur change", function (f) {
                var g, h, i, j, k, l, m, n, o, p, q, r;
                if (b.val() || b.val("0"), g = /^[0-9]+$/, g.test(b.val()) || b.val("0"), h = 0, e) for (i = $(".itemnum", a), j = 0; j < i.length; j++) if (k = i.eq(j), k && parseInt(k.val()) > 0 && (i.index(b) != j ? h++ : ""), h >= e) return alertNew(wjxlang.shop_maxnum.replace("{0}", e)), b.val(0), f.preventDefault(), void 0;
                return l = parseInt(b.val()), m = "", n = !1, o = 0, p = 0, q = 0, c[0] && (n = !0, o = parseInt(c.attr("num"))), p = parseInt(d.attr("minnum")), q = parseInt(d.attr("maxnum")), !l || 0 > l ? (0 != l && p > 0 && p >= l ? p > o ? b.val(o) : b.val(p) : b.val("0"), updateCart(a), void 0) : (p > 0 && p > l && b.val(p), q > 0 && l >= q && (m = wjxlang.shop_limit_num.replace("{0}", q), b.val(q)), n && l >= o && (!(q > 0 && o > q) || p > o) && (m = wjxlang.shop_period.replace("{0}", o), r = o, 0 > r && (r = 0), b.val(r)), updateCart(a), "" == m ? "" : alertNew(m), f.preventDefault(), void 0)
            }), $(".remove", this).bind("click", function (c) {
                var e = 0, f = parseInt(b.val());
                return e = parseInt(d.attr("minnum")), e && parseInt(e) > 0 && f <= parseInt(e) ? (b.val(0), updateCart(a), void 0) : (f > 0 && (b.val(f - 1), updateCart(a)), c.preventDefault(), void 0)
            })
        }) : "11" == c && ($("li.ui-li-static", a).bind("click", function (b) {
            var d, c = $(this).find("input.OtherText")[0];
            $(this).attr("check") ? (d = $(this).find("span").html(), $(this.parentNode).find("li[check='1']").each(function () {
                var a = $(this).find("span.sortnum").html();
                a - d > 0 && $(this).find("span.sortnum").html(a - 1)
            }), $(this).find("span.sortnum").html("").removeClass("sortnum-sel"), $(this).attr("check", ""), c && (c.pvalue = c.value, c.value = "")) : (d = $(this.parentNode).find("li[check='1']").length + 1, $(this).find("span.sortnum").html(d).addClass("sortnum-sel"), $(this).attr("check", "1"), c && c.pvalue && (c.value = c.pvalue || "")), displayRelationByType(a), verifyCheckMinMax(a, !1, !0, this), jump(a, this), displaypeie(a, "li.ui-li-static", 3), window.createItem && createItem(a, !0), referTitle(a), saveAnswer(a), b.preventDefault()
        }), jb = $("input.OtherText", a), jb.bind("click", function (b) {
            var c, d, e, f;
            b.stopPropagation(), b.preventDefault(), c = $(this).attr("rel"), d = $("#" + c).parent().parent(), e = d.parent(), 1 != d.attr("check") && (f = e.find("li[check='1']").length + 1, d.find("span.sortnum").html(f).addClass("sortnum-sel"), d.attr("check", "1")), displayRelationByType(a), verifyCheckMinMax(a, !1, !0, this), jump(a, this), displaypeie(a, "li.ui-li-static", 3), window.createItem && createItem(a, !0), saveAnswer(a), b.preventDefault()
        }), jb.bind("blur keyup", function (b) {
            otherTextEvent(this, a), "blur" == b.type && saveAnswer(a)
        })), kb = a.attr("hasjump"), kb && clearFieldValue(a), void 0)
    }), !window.isVip && j && alertNew("提示：此问卷使用了选项关联功能，发布者非企业版用户，无法使用！"), 0 != allQArray.length || window.isSingleVote && window.touPiaoItemIndex || ($("#ctlNext").hide(), $("#lxNextBtn").hide()), k && addtoactivitystat(), window.totalCut && window.totalCut > 0) {
        for (l = !1, m = [], g = 0; g < window.totalCut; g++) {
            if (n = "divCut" + (g + 1), o = $("#" + n), p = o.attr("relation"), q = "", r = o.text(), r.indexOf("swiper") > -1 && m.push(o), p && "0" != p) {
                q = -1 != p.indexOf("|") ? "|" : "$", s = p.split(q);
                for (c in s) t = s[c], t && -1 != t.indexOf(",") && (u = t.split(","), v = u[0], relationQs[v] || (relationQs[v] = new Array), relationQs[v].push(o[0]))
            }
            w = o.attr("titletopic"), w && (x = questionsObject[w], x && (x[0]._titleTopic || (x[0]._titleTopic = new Array), y = o.attr("topic"), x[0]._titleTopic.push(y), z = o[0].childNodes[0], z && (z.innerHTML = z.innerHTML.replace("[q" + w + "]", "<span id='spanTitleTopic" + y + "' style='text-decoration:underline;'></span>"))))
        }
        m.length > 0 && (l || (l = !0, A = document.createElement("link"), A.setAttribute("rel", "stylesheet"), A.setAttribute("type", "text/css"), A.setAttribute("href", "/joinnew/css/swiper.css"), document.head.appendChild(A), $.getScript("/joinnew/js/swiper.js", function () {
            var a, b;
            for (a = 0; a < m.length; a++) b = m[a], displaySwiper(b.text(), a, b)
        })))
    }
    for (isLoadQues = !0, B = 0; B < pageHolder.length; B++) for (e = pageHolder[B].questions, g = 0; g < e.length; g++) y = getTopic(e[g]), relationQs[y] && relationJoin(e[g]), ItemrelationQs[y] && relationItemJoin(e[g]), C = $(e[g]).attr("refered"), C && window.createItem && createItem(e[g]);
    for (isLoadQues = !1, D = 0; D < i.length; D++) E = i[D], "" == E[0].style.display && displayRelationByType(E);
    for (B = 0; B < pageHolder.length; B++) for (e = pageHolder[B].questions, g = 0; g < e.length; g++) checkPeiE($(e[g]));
    if ($("#hrefPreview").on("click", function () {
        var a, b;
        return window.lastLabel && lastLabel.hide(), a = this, $("#divMatrixHeader").hide(), window.hasHeatMap && window.hasSplicing ? (getHeatmapAns(function () {
            getSplicingAns(function () {
                var b = validate($(a).parent());
                b && groupAnswer(6)
            })
        }), void 0) : window.hasSplicing ? (getSplicingAns(function () {
            var b = validate($(a).parent());
            b && groupAnswer(6)
        }), void 0) : window.hasHeatMap ? (getHeatmapAns(function () {
            var b = validate($(a).parent());
            b && groupAnswer(6)
        }), void 0) : (b = validate($(this).parent()), b && groupAnswer(6), void 0)
    }), null != $("#ctlNext") && $("#ctlNext").on("click", function () {
        var a, b;
        try {
            if (debugLog("准备提交答卷"), this.disabled) return;
            if (window.ishydj && !window.canEditAnswer) return alertNew("提示：您只能查看此答卷，不能对答卷进行编辑"), void 0;
            if (window.IsPar) return a = window.parent.document.getElementById("skin-peeler-panel"), a && (a.style.display = "none"), alertNew("此问卷为预览状态，不能提交", function () {
                a && (a.style.display = "block")
            }), void 0;
            if (needTip()) return $("#ValError").html($(divTip).text()), alertNew($(divTip).text()), void 0;
            if ($("#action").val("1"), window.buttonfooter && window.buttonfooter.hide(), debugLog("验证提交数据"), b = validate($(this).parent()), !b) return;
            if ((!window.isSingleVote || window.isMultipleChoice) && $("html, body").animate({scrollTop: $(document).height()}, 600), setTimeout(function () {
                fixBottom()
            }, 50), debugLog("判断是否需要验证码"), window.useAliVerify) {
                if (!isCaptchaValid) return !window.isSingleVote || window.isMultipleChoice && !window.touPiaoItemIndex ? $("#captcha").fadeIn("fast") : window.isMultipleChoice && window.ftppar ? voteMul(!0) : window.touPiaoItemIndex && !window.isMultipleChoice ? voteSin(!0) : voteData(), void 0
            } else if (window.isSingleVote && (!window.isMultipleChoice || window.touPiaoItemIndex)) {
                if (window.isMultipleChoice && window.ftppar) return voteMul(), void 0;
                if (window.touPiaoItemIndex && !window.isMultipleChoice) return voteSin(), void 0
            }
            if (window.hasHeatMap && window.hasSplicing) {
                if (window.maxTimer && clearInterval(maxTimer), !pageHolder[cur_page].hasGetHeatmapAndSplicingdata) return getHeatmapAns(function () {
                    getSplicingAns(function () {
                        pageHolder[cur_page].hasGetHeatmapAndSplicingdata = !0, $("#ctlNext").click()
                    })
                }), void 0
            } else {
                if (window.hasHeatMap && !pageHolder[cur_page].hasGetHeatmapdata) return window.maxTimer && clearInterval(maxTimer), getHeatmapAns(function () {
                    pageHolder[cur_page].hasGetHeatmapdata = !0, $("#ctlNext").click()
                }), void 0;
                if (window.hasSplicing && !pageHolder[cur_page].hasGetSplicingdata) return window.maxTimer && clearInterval(maxTimer), getSplicingAns(function () {
                    pageHolder[cur_page].hasGetSplicingdata = !0, $("#ctlNext").click()
                }), void 0
            }
            window.maxTimer && clearInterval(maxTimer), window.minTimer && clearInterval(minTimer), debugLog("进入提交函数"), clockRecordTime(!0), $("#spanPower").unbind("click"), $("#spanPower a").attr("href", "javascript:;").attr("target", ""), groupAnswer(1)
        } catch (c) {
            throw alert(c), c
        }
    }), initSlider(), matrixFixedTitle(), totalPage > 1 ? ($("#divSubmit").hide(), $("#divNext")[0].style.display = "", showProgress()) : $("#divSubmit").show(), 2 == window.isChuangGuan && ($("#divSubmit").hide(), window.divFengMian || startChuangGuan(!1)), !window.isSingleVote || window.isMultipleChoice || window.touPiaoItemIndex ? window.touPiaoItemIndex && ($("#divAwardNotify").hide(), $("#ValError").hide()) : ($("#ctlNext").hide(), $("#spanPreview").hide()), fixBottom(), $(window).load(function () {
        fixBottom()
    }), window.cepingCandidate) {
        for (F = cepingCandidate.split("&nbsp;&nbsp;&nbsp;"), G = new Object, H = 0; H < F.length; H++) I = F[H].replace(/(\s*)/g, "").replace(/&/g, "").replace(/\\/g, "").replace("&nbsp;", "").toLowerCase(), G[I] = "1";
        J = $("#div1"), window.allowPart ? (K = 0, $("input[type=checkbox]", J).each(function () {
            var c, a = $(this).parent().parent(), b = "";
            if (window.isZhuanYiName) if (c = a.find("ww-open-data")[0]) b = c.getAttribute("openid"); else {
                if (c = a.find(".label")[0], !c) return a.css("display", "none"), !0;
                b = c.innerHTML
            } else {
                if (c = a.find(".label")[0], !c) return !0;
                b = c.innerHTML
            }
            b = b.replace(/(\s*)/g, "").replace(/&amp;/g, "").replace(/\\/g, "").replace("&nbsp;", "").toLowerCase(), G[b] ? window.OneaTime && 0 == K ? (a.trigger("click"), K++) : window.oneDept && a.trigger("click") : a.css("display", "none")
        }), J[0] && (J[0].style.display = ""), (window.OneaTime || window.oneDept) && ($("#div1 div.field-label").css("display", "none"), $("#div1 div.ui-controlgroup ").css("display", "none"))) : ($("input[type=checkbox]", J).each(function () {
            var c, a = $(this).parent().parent(), b = a.find(".label")[0];
            return b ? (c = b.innerHTML, c = c.replace(/(\s*)/g, "").replace(/&amp;/g, "").replace(/\\/g, "").replace("&nbsp;", "").toLowerCase(), G[c] && (this.checked = !0), void 0) : !0
        }), J[0] && (createItem(J, !1), J[0].style.display = "none", J[0].isCepingQ = "1"))
    }
    processAward();
    try {
        checkAnswer()
    } catch (L) {
    }
    for (needConfirmAnswer || loadMinMaxTime(), M = document.getElementsByTagName("img"), g = 0; g < M.length; g++) M[g].onerror = function () {
        this.onerror = null, replaceImg(this)
    }, replaceImg(M[g]);
    processSearch(), pageHolder[0] && divContent && "none" != divContent.style.display ? adjustVideoHeight(pageHolder[0]) : window.touPiaoItemIndex && divContent && adjustVideoHeight(divContent), !window.showContent && document.getElementById("divDesc") && document.getElementById("divDesc").getElementsByTagName("iframe").length > 0 && adjustVideoHeight(document.getElementById("divDesc")), $("#ctlNext").on("mouseover", function () {
        ktimes++
    }), N = document.getElementById("divContent"), !N && needTip() ? ($("body").removeClass("lxbg"), $("img", divTip)[0] || ($("#divWorkError").show(), $("#divWorkError").css({"z-index": 2e3}), $("body").css({"min-height": "667px"}), O = wjxlang.message, P = '<div style="padding-top: 120px; text-align: center;"><div style="margin-bottom: 20px;"><i style="width: 85px; height: 85px;display: inline-block;position: static;background-image: url(//image.wjx.com/images/weixin/new-mobile/failure@2x.png?v=1); background-size: 85px 85px;"></i></div><div style="padding:0 20px 25px;"><h2 style="margin-bottom: 5px; font-weight: 400; font-size: 20px;">' + O + "</h2>" + '<p style="font-size: 14px; color: #999999;">' + window.divTip.innerHTML + "</p>" + "</div>" + "</div>", Q = checkCanPop(), Q && window.divTip && divTip.innerHTML.indexOf("被停止") > -1 && (R = "", "miniprogram" === window.__wxjs_environment && (R = "&minip=1"), P += "<div style='margin:40px 20px 0 20px;border-top: dashed 1px #dadcdd;'><div style='font-size: 14px;font-weight: 400;color: #F64141;line-height: 40px;margin: 14px auto;text-align: center;'>恭喜您获得1次抽奖机会！</div><div style='text-align: center;margin-top:20px;'> <a href='/newsojiang/mobile/getaward.aspx?stype=1&activity=" + activityId + R + "' style='width:140px; background:linear-gradient(180deg,rgba(255,149,104,1) 0%,rgba(255,100,34,1) 100%); border-radius:5px;font-size:16px;color:#ffffff;padding:10px 36px 10px 36px'>立即抽奖</a></div></div>"), $("#divWorkError").html(P), $("#divWorkError")[0].style.position = "static", $("#divTip").hide(), $("#divMob").hide(), $("#toptitle").hide(), window.isMobile || !window.divTip || -1 == divTip.innerHTML.indexOf("开放，") && -1 == divTip.innerHTML.indexOf("结束，") || ($("#divWorkError div").eq(0).css({"padding-top": "50px"}), $("#divWorkError").prepend("<div id='toptitle'><div class='htitle'>" + document.title + "</div></div>")), window.isMobile || $("#reportfooter").css({
        width: "800px",
        margin: "0 auto"
    }))) : N && needTip() && $("#tipHeight").show().height($(divTip).innerHeight() + "px"), addtoVisitLog(), $("#divS,#loadbox").hide()
}), hasConfirmBtn = !1, t_isLoad = !0, itempopUpindex = 0, popUpindex = 0, firstError = null, firstMatrixError = null, needSubmitNotValid = !1, lastFixedObj = null, isValidating = !1, txtCurCity = null, prevScrollTop = 0, obj_offectTop = 0, MIN_CLICK_DELAY_TIME = 500, lastClickTime = 0, startAge = 0, endAge = 0, rName = "", gender = 0, marriage = 0, education = "", startIncome = 0, endIncome = 0, IsWIFI = 0, modata = "", hasMatchName = !1, jpMatchId = 0, needImport = 0, quesMatchId = 0, jpWayText = 0, quResult = new Array, clientAnswerSend = "", havereturn = !1, timeoutTimer = null, nvvv = 0, ktimes = 0, lastLabel = null, isAutoSubmit = !1, hasAutoSubmit = !1, amt = 0, hasSetmsg = !1, $(function () {
    var a, b;
    isMobile || (document.oncontextmenu = avoidCopy, document.onkeydown = forbidBackSpace), (window.ActiveXObject || "ActiveXObject" in window) && (document.onselectstart = avoidCopy), 3 != window.isChuangGuan && 4 != window.isChuangGuan && ksCountdown(), 1 == window.needEnlargeImg && window.enlargeImg && enlargeImg(), a = window.location.href.indexOf("code") > -1 && $("#divTip").text().indexOf("code been used") > -1 && !isIosSystem(), b = window.history && window.history.length, a && b && window.history.go(-(b - 1))
}), window.confirmnew = function (a, b, c) {
    var e, f, g, h, d = document.getElementById("confirm_box");
    return d ? document.getElementById("pop_box_msg2").innerHTML = a : (d = document.createElement("div"), d.id = "confirm_box", e = wjxlang.message, f = wjxlang.cancel, g = wjxlang.ensure, h = "<div style='position:fixed;*position: absolute;width: 100%;height: 100%;opacity: 0.5;filter: alpha(opacity=50);background-color: black;z-index: 99998;top: 0px;left: 0px;'></div><div style='min-height: 180px;width:90%;max-width:400px;transform: translateX(-50%);margin-top: -90px;position: fixed;z-index: 99999;top: 50%;left: 50%;background-color: white;border-radius: 4px;'><div style='font-size:18px;color: #262626;font-weight: 600;padding: 26px 27px 0;width:100%;text-align: left;'><div>" + e + "</div>" + "</div>" + "<div style='min-height: 80px;padding: 12px 27px 36px;font-size: 15px;line-height: 22px;text-align: left;' id='pop_box_msg2'>" + a + "</div>" + "<div style='width:100%;height:60px;text-align:center;border-top:1px solid #F2F2F2;'>" + "<button style='background:none;display:inline-block;width: 50%;height:60px;font-size:18px;line-height:60px;color:#BFBFBF;text-align: center;text-decoration: none;border: none;' onclick='closeNo();'>" + f + "</button><button class='mainColor' style='display:inline-block;width: 50%;font-size:18px;height:60px;box-sizing:border-box;line-height:60px;color:#3296FA;text-align: center;text-decoration: none;border: none;border-left:1px solid #F2F2F2;background: none;' onclick='closeConfirm();'>" + g + "</button></div>" + "</div>", d.innerHTML = h, document.body.appendChild(d)), d.style.display = "", d.callback = b || "", d.callback2 = c || "", d
}, $(function () {
    clockRecordTime(), initSelelct2(), window.divFengMian || curPageHeatmapInit(), adjustIosInput(), hasJoinCusomInit(), window.forbidEditStr && forbidEdit(forbidEditStr), 4 == cqType && window.showTotalScore && TotalValBoxInit(), getDevice()
}), window.onorientationchange = function () {
    window.haschangeorientation = !0, setTimeout(function () {
        orientationUpdate(), window.haschangeorientation = !1
    }, 200)
}, $(function () {
    var a, b, c, d, e;
    return window.progressBarType && !window.joinIdnew && $("#answerProcess").show(), a = $("#deepButton"), window.buttonfooter = a, window.IsPar || window.divFengMian || "4" == window.isChuangGuan || window.isinterview || location.href.indexOf("tpii") > -1 ? (a.hide(), void 0) : (b = $("body #form1").outerHeight(), c = document.documentElement.clientHeight, d = 100, 0 !== $("#divPowerBy").length && $("#divPowerBy").is(":visible") || (d = 50), scrFormHeightDif = c + d - b, scrFormHeightDif > 0 ? a.addClass("button-list-fixed") : 0 > scrFormHeightDif && a.addClass("button-list-fixed-deep"), e = window.innerHeight, $(window).resize(function () {
        e - window.innerHeight > 200 ? (a.hide(), $("#divPowerBy,#divCGFooter").hide()) : (a.show(), $("#divPowerBy,#divCGFooter").show(), fixBottom())
    }), void 0)
}), answeredobj = {}, tipNode = document.getElementById("tip-box"), $(function () {
    var a, b;
    aloneAnswer(), window.useNewAppearance && window.IsPar && setTimeout(function () {
        updateAppearance()
    }, 200), window.hasBackground && (a = document.getElementById("divPowerBy"), a || ($("#divBackgroundWrap").css("bottom", "0"), $("#divContent").css("margin-bottom", "40px"))), $(".tableWrap").scroll(function () {
        var a = $(this).scrollLeft(), b = this;
        $(this).find(".rowtitle").each(function () {
            var c = $(this).children(".title").eq(0);
            $(c).children(".itemSrcImg").width() + $(c).children(".itemTitleSpan").width() - a < $(b).width() - 100 ? $(c).css("left", a + "px").css("z-index", "52") : $(c).css("left", "0px")
        }), $(this).hasClass("aloneAnswer") && $(this).children(".apageWrap").width() + a <= $(this).children("table").width() && $(this).children(".apageWrap").css("left", a + "px")
    });
    try {
        window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", landscapeFun, !1), landscapeFun(), b = navigator.userAgent.indexOf("Android") > -1 || navigator.userAgent.indexOf("Adr") > -1, b && ("object" == typeof WeixinJSBridge && "function" == typeof WeixinJSBridge.invoke ? handleFontSize() : document.addEventListener("WeixinJSBridgeReady", handleFontSize, !1)), browserIsIe() && document.body.addEventListener && document.body.addEventListener("mousewheel", function () {
            var a, b;
            event.preventDefault(), a = event.wheelDelta, b = window.pageYOffset, window.scrollTo(0, b - a)
        })
    } catch (c) {
    }
});