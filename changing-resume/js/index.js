// 头像切换
    $("#home_photo2").hover(function(){
        $(this).fadeTo(800,1);
        },function(){
            $(this).stop(true,false).fadeTo(800,0);
    });
    $("#header_p").mouseover(function(){
        $("#header_p").html("Thank you for browsing!");

    }).mouseout(function(){
        $("#header_p").html("welcome! ");
    });
