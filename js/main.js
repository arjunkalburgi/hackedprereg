document.addEventListener("DOMContentLoaded", function(event) {
    startCursorBlinking()
    chooseBackgroundColour()
});

function startCursorBlinking() {
    var isCursorVisbile = true
    setInterval(function() {
        if (isCursorVisbile) {
            $("#cursor").css("visibility", "hidden")
        } else {
            $("#cursor").css("visibility","visible")
        }
        isCursorVisbile = !isCursorVisbile
    }, 600)
}

function chooseBackgroundColour() {
    var colour = Math.floor(Math.random() * (5 - 1) + 1); // four colours
    console.log(colour); 
    switch (colour) {
        case 1: 
            //RED
            $("body").css({"color": "#E83223", "textShadow": "#E83223 0px 0px 0.36vw"}); 

            $(".button").addClass("red"); 
            
            $("body .hacked").addClass("redneon-text"); 
            $("body .prompt").addClass("redneon-symbols"); 
            $("body .cursor").addClass("redneon-symbols"); 
            break; 
        case 2: 
            //YELLOW
            $("body").css({"color": "#FCED51", "textShadow": "#FCED51 0px 0px 0.36vw"}); 

            $(".button").addClass("yellow"); 
            
            $("body .hacked").addClass("yellowneon-text"); 
            $("body .prompt").addClass("yellowneon-symbols"); 
            $("body .cursor").addClass("yellowneon-symbols"); 
            break; 
        case 3: 
            //GREEN
            $("body").css({"color": "#76FA46", "textShadow": "#76FA46 0px 0px 0.36vw"}); 

            $(".button").addClass("green"); 
            
            $("body .hacked").addClass("greenneon-text"); 
            $("body .prompt").addClass("greenneon-symbols"); 
            $("body .cursor").addClass("greenneon-symbols"); 
            break; 
        case 4: 
            //BLUE
            $("body").css({"color": "#5d8cf7", "textShadow": "#5d8cf7 0px 0px 0.36vw"}); 

            $(".button").addClass("blue"); 
            
            $("body .hacked").addClass("blueneon-text"); 
            $("body .prompt").addClass("blueneon-symbols"); 
            $("body .cursor").addClass("blueneon-symbols"); 
            break; 
    } 
}