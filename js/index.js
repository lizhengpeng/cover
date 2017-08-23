$(function () {
    var $li = $("#box ul li");
    $li.hover(function (e) {
        move.call(this, e, true);
    }, function (e) {
        move.call(this, e, false);
    })


    function move(e, bool) {
        //获取鼠标移入时位置
        var x = e.pageX;
        var y = e.pageY;
        //获取每个li距离浏览器上，左的距离
        var top = $(this).offset().top;
        var bottom = top + $(this).height();
        var left = $(this).offset().left;
        var right = left + $(this).width();
        //分别计算鼠标位置与li四个边距距离浏览器的差值
        var sT = Math.abs(y - top);
        var sB = Math.abs(y - bottom);
        var sL = Math.abs(x - left);
        var sR = Math.abs(x - right);
        //获取到差值的最小值，根据最小值判断发生什么动画
        var value = Math.min(sT, sB, sL, sR);
        switch (value) {
            case sT:
                if (bool) {
                    $(this).find("a").css({
                        //先让遮罩层瞬间位置发生变化
                        left: 0,
                        top: "-360px"
                    }).stop().animate({
                        //然后让遮罩层发生动画
                        top: 0
                    }, 300);
                } else {
                    $(this).find("a").animate({
                        //然后让遮罩层发生动画
                        top: "-360px"
                    }, 300);
                }
                break;
            case sB:
                if (bool) {
                    $(this).find("a").css({
                        //先让遮罩层瞬间位置发生变化
                        left: 0,
                        top: "360px"
                    }).stop().animate({
                        //然后让遮罩层发生动画
                        top: 0
                    }, 300);
                } else {
                    $(this).find("a").animate({
                        //然后让遮罩层发生动画
                        top: "360px"
                    }, 300);
                }
                break;
            case sL:
                if (bool) {
                    $(this).find("a").css({
                        //先让遮罩层瞬间位置发生变化
                        left: "-230px",
                        top: 0
                    }).stop().animate({
                        //然后让遮罩层发生动画
                        left: 0
                    }, 300);
                } else {
                    $(this).find("a").animate({
                        //然后让遮罩层发生动画
                        left: "-230px"
                    }, 300);
                }
                break;
            case sR:
                if (bool) {
                    $(this).find("a").css({
                        //先让遮罩层瞬间位置发生变化
                        left: "230px",
                        top: 0
                    }).stop().animate({
                        //然后让遮罩层发生动画
                        left: 0
                    }, 300);
                } else {
                    $(this).find("a").animate({
                        //然后让遮罩层发生动画
                        left: "230px"
                    }, 300);
                }
                break;
        }
    }


})







