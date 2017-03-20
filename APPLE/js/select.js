/**
 * Created by KeKe on 2017/3/20.
 */
$(function(){
    var flag=true;
    $(".selectli").each(function(index){
        $(".selectli").eq(index).click(function(){
            if(flag){
                $(".content").eq(index).css("display","block");
                flag=false;
            }else{
                $(".content").eq(index).css("display","none");
                flag=true;
            }
        })
    })
})