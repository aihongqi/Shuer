/**
 * Created by Ellery on 2017/7/9 - 2017/7/10.
 */


$(document).ready(function(){


    //轮播图
    $(function(){
        var count = $("#banner img").length;  //内部图片数量
        var countwidth = $("#banner img").width();  //图片边框宽度
        var oUl = $("#banner").css("width",count*countwidth);  //banner盒子总宽度
        var now = 0;

        $("#ctrl_box div").css("border","2px solid white").eq(0).css("background-color","white")
        var aBtn = $("#ctrl_box div");
        aBtn.each(function(index){
            $(this).click(function(){
                clearInterval(timer);
                tab(index);
                timer=setInterval(autoRun,2000);
            });
        });
        //图片循环事件
        function tab(index){
            now = index;
            aBtn.css("background","transparent").eq(index).css("background-color","white")
            oUl.stop(true,false).animate({"left":-countwidth * now},400);
        }
        //自动轮播定义
        function autoRun(){
            now++;
            if(now==count){
                now=0;
            }
            tab(now);
        };
        var timer = setInterval(autoRun, 4000);
    })


    //一级导航动效
    $(function(){
        var topnav=$("#nav_box_bg"); //得到导航对象
        var win=$(window); //得到窗口对象
        var sc=$(document);//得到document文档对象。
        $("#backtop").hide()
        win.scroll(function(){
            if(sc.scrollTop()>=600){
                $("#backtop").fadeIn();
                $("#nav_box_bg").slideUp();
            }else{
                $("#nav_box_bg").slideDown();
                $("#backtop").fadeOut();
            }
        })
    })

   /* $(function(){
        $("#backtop").click(function(){
            $(window).scroll(0,0)
        })
    })*/

   /* function pageScroll(){
//把内容滚动指定的像素数（第一个参数是向右滚动的像素数，第二个参数是向下滚动的像素数）
        window.scrollBy(0,-100);
//延时递归调用，模拟滚动向上效果
        scrolldelay = setTimeout('pageScroll()',100);
//获取scrollTop值，声明了DTD的标准网页取document.documentElement.scrollTop，否则取document.body.scrollTop；因为二者只有一个会生效，另一个就恒为0，所以取和值可以得到网页的真正的scrollTop值
        var sTop=document.documentElement.scrollTop+document.body.scrollTop;
//判断当页面到达顶部，取消延时代码（否则页面滚动到顶部会无法再向下正常浏览页面）
        if(sTop==0) clearTimeout(scrolldelay);
    }
*/


//二级导航
    //展开
    $(".about_subnav,#pro_subnav").hide()
    $("#nav_box ul li,#pro_subnav").mouseenter(function(){
        $(this).children().show()
    }).mouseleave(function(){
        $(".about_subnav,#pro_subnav").hide()
    })

    //状态变色
    $(".about_subnav dt").mouseenter(function(){
        $(this).addClass("active")
    }).mouseleave(function(){
        $(".about_subnav dt").removeClass("active")
    })
    var pro_subnav_list = $("#pro_subnav .left dd,#pro_subnav .right dd")
    $(pro_subnav_list).mouseenter(function(){
        $(this).addClass("active")
    }).mouseleave(function(){
        $(pro_subnav_list).removeClass("active")
    })


/*
//导航栏滑块
    $("#nav_box ul li").mouseenter(function(){
        var numnav = $(this).index()
        $("#nav_box .slider").animate()
    })
*/


    //产品导航切换
    $("#bodynav li dl").hide()
    $("#bodynav li").click(function(){
        $(this).children().toggle()
    })

    //产品导航交互变色
    $("#bodynav li,#bodynav li dl dt a,#bodynav_all").mouseenter(function(){
        $(this).addClass("active_color")
    }).mouseleave(function(){
        $("#bodynav li,#bodynav li dl dt a,#product_box ul li a,#bodynav_all").removeClass("active_color")
    })



})


/*
//轮播图
$(function(){
    var count = $("#banner img").length;  //内部图片数量
    var countwidth = $("#banner img").width();  //图片边框宽度
    var oUl = $("#banner").css("width",count*countwidth);  //banner盒子总宽度
    var now = 0;

    $("#ctrl_box div").css("border","2px solid white").eq(0).css("background-color","white")
    var aBtn = $("#ctrl_box div");
    aBtn.each(function(index){
        $(this).click(function(){
            clearInterval(timer);
            tab(index);
            timer=setInterval(autoRun,2000);
        });
    });
    //图片循环事件
    function tab(index){
        now = index;
        aBtn.css("background","transparent").eq(index).css("background-color","white")
        oUl.stop(true,false).animate({"left":-countwidth * now},400);
    }
    //自动轮播定义
    function autoRun(){
        now++;
        if(now==count){
            now=0;
        }
        tab(now);
    };
    var timer=setInterval(autoRun, 4000);
})
*/






/*
$(document).ready(function () {

    var len = $("#banner img").length
    var n = 0
    var x = 0

    $("#ctrl_box div").css("border","2px solid #4c98ff").eq(0).css("background-color","#4c98ff")
    $("#banner").width(1920*len)



    //自动轮播
    function autoRun() {
        if(n < len - 1){
            n++
        }else{
            $("#banner").css("left",0)
            n = 1
        }
        if(x < len - 2){
            x++
        }else{
            x = 0
        }
        $("#ctrl_box div").css("background-color","transparent").eq(x).css("background-color","#4c98ff")
        $("#banner").animate({left:-1920*n},1000)
    }

    var timmer = setInterval(autoRun,5000)


    //按钮控制
    $("#ctrl_box div").mouseenter(function(){
       n = x = $(this).index()

        clearInterval(timmer)
        $("#ctrl_box div").stop().css("background-color","transparent").eq(x).css("background-color","#4c98ff")
       // $("#banner img").stop().animate({left:-1920*},1000)


    })



})*/


/*
$(function(){
    var count = $("#banner img").length;  //内部图片数量
    var countwidth = $("#banner img").width();  //图片边框宽度
    var oUl = $("#banner").css("width",count*countwidth);  //banner盒子总宽度
    var now = 0;

    $("#ctrl_box div").css("border","2px solid #4c98ff").eq(0).css("background-color","#4c98ff")
    var aBtn = $("#ctrl_box div");
    aBtn.each(function(index){
        $(this).click(function(){
            clearInterval(timer);
            tab(index);
            timer=setInterval(autoRun,2000);
        });
    });
    //图片循环事件
    function tab(index){
        now = index;
        aBtn.css("background","transparent").eq(index).css("background-color","#4c98ff")
        oUl.stop(true,false).animate({"left":-countwidth * now},400);
    }
    //自动轮播定义
    function autoRun(){
        now++;
        if(now==count){
            now=0;
        }
        tab(now);
    };
    var timer=setInterval(autoRun, 4000);
});
*/


