$(document).ready(function(){
        $('#trex').animate(
            {top:"900px"},
            10000,"linear");
    setInterval(function(){
        $('#ballons').append($('<img src="whiteb.jpeg" id="balloon">'));
        $('#balloon').animate({bottom:"900px"},2500,"linear",function(){$(this).remove();});
    },3000)
    setInterval(function(){
        $('#ballons').append($('<img src="greenb.jpeg" id="b2">'));
        $('#b2').animate({bottom:"900px"},900,"linear",function(){$(this).remove();});
    },1000)
    setInterval(function(){
        $('#ballons').append($('<img src="blueb.jpeg" id="b3">'));
        $('#b3').animate({bottom:"900px"},400,"linear",function(){$(this).remove();});
    },500)

    $(document).keydown(function(e){

        if(e.which===37)
        {
            console.log("IN");
            //var playerpos=$('#trex').position();
            //playerpos.left-="30px";
            //$("#trex").translateX("-10px");
            $('#trex').animate({"left":"-=40px"},300);
        }
        else if(e.which===39)
        {
            console.log("IN");
            //var playerpos=$('#trex').position();
            //playerpos.left-="30px";
            //$("#trex").translateX("-10px");
            $('#trex').animate({"right":"+=40px"},300);
        }
    });
    
});
