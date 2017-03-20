/**
 * Created by KeKe on 2017/3/19.
 */
$(function(){
    var now=0;
    var next=0;
    var times=4000;
    var t1=setInterval(move,times);
    var t2=setInterval(process,50);
    var nowtime=0;
    var flag=true;
    var flag1=true;
    //轮播
    function move(type){
        var type=type||"l";
        if(type=="l"){
            next=now+1;
            if(next>$(".imgbox a").length-1){
                next=0;
            }
            //当前图片运动
            $(".imgbox a").eq(now).css("z-index","1").animate({width:"80%",height:"80%"},function(){
                flag1=true;
                $(".imgbox a").eq(now).css({
                    left:"100%",
                    width:"100%",
                    height:"100%",
                })

                now=next;
                nowtime=0;
                if(next==0){
                    flag=false;
                }
            }).end().eq(next).css("z-index","2").animate({left:0});
        }else if(type=="r"){
            next=now-1;
            if(next<0){
                next=$(".imgbox a").length-1;
            }
            //当前图片运动
            $(".imgbox a").eq(now).css("z-index","2").animate({left:"100%"}).end().eq(next).css({
                left:"0",
                width:"80%",
                height:"80%",
                zIndex:"1"
            }).animate({
                width:"100%",
                height:"100%"
            },function(){
                now=next;
                nowtime=0;
                if(next==0){
                    flag=false;
                }
                flag1=true;
            });
        }
    }
    //进度条
    function process(){
        nowtime+=50;
        var bili=nowtime/times;
        if(bili>1){
            bili=1;
        }
        $(".circle .process").eq(now).css("width",bili*100+"%");
        if(!flag){
            $(".circle .process").css("width",0);
            flag=true;
        }
    }
    //移上悬停效果
    $(".bannerbox").hover(function(){
        clearInterval(t1);
        clearInterval(t2);
    },function(){
        t1=setInterval(move,times);
        t2=setInterval(process,50);
    });
    //点击切换图片
    $(".circle").click(function(){
        var a=$(this).index();
        if(now>a){
            $(".imgbox a").eq(now).css("z-index","1").animate({width:"80%",height:"80%"},function(){
                flag1=true;
                $(".imgbox a").eq(now).css({
                    left:"100%",
                    width:"100%",
                    height:"100%",
                })

                now=a;
                nowtime=0;
                if(next==0){
                    flag=false;
                }
            }).end().eq(a).css("z-index","2").animate({left:0});
        }else if(now<a){
            $(".imgbox a").eq(now).css("z-index","2").animate({left:"100%"}).end().eq(a).css({
                left:"0",
                width:"80%",
                height:"80%",
                zIndex:"1"
            }).animate({
                width:"100%",
                height:"100%"
            },function(){
                now=a;
                nowtime=0;
                flag1=true;
            });
        }
    })

    //左右按钮
    $(".leftbtn .lbtn").click(function(){
        if(flag1){
            flag1=false;
            move("r");
        }
    })
    $(".rightbtn .rbtn").click(function(){
        if(flag1){
            flag1=false;
            move("l");
        }
    })

//消除浏览器的默认行为
//    window.onblur=function(){
//        clearInterval(t1);
//        clearInterval(t2);
//    }
//    window.onfocus=function(){
//        t1=setInterval(move,times);
//        t2=setInterval(process,50);
//    }
})