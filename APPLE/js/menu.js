/**
 * Created by KeKe on 2017/3/17.
 */
$(function(){
    var flag=true;
    window.onresize=function(){
        var clientH=$(window).height();
        var clientW=$(window).width();
        $(".menu").css("height",clientH);
        if(clientW>765){
            $(".menu").css("display","none");
        }
    }
    window.onresize();
    $(".list").click(function(){
        if(flag){
            $(".line1").css("transform","translate(0,9px) rotate(45deg)");
            $(".line2").css("transform","rotate(-45deg)");
            $(".menu").css("display","block");
            flag=false;
        }else{
            $(".line1").css("transform","translate(0,0px) rotate(0deg)");
            $(".line2").css("transform","rotate(0deg)");
            $(".menu").css("display","none");
            flag=true;
        }
    })
})