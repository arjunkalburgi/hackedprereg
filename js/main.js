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
            $("body").css("color", "#E83223"); 
            $(".button").css({"color" : "#E83223", "border" : "1pt solid #E83223" }); 
            $("body .hacked").addClass("redneon-text"); 
            $("body .prompt").addClass("redneon-symbols"); 
            $("body .cursor").addClass("redneon-symbols"); 
            break; 
        case 2: 
            //YELLOW
            $("body").css("color", "#FCED51");
            $(".button").css({"color" : "#FCED51", "border" : "1pt solid #FCED51" });
            $("body .hacked").addClass("yellowneon-text"); 
            $("body .prompt").addClass("yellowneon-symbols"); 
            $("body .cursor").addClass("yellowneon-symbols"); 
            break; 
        case 3: 
            //GREEN
            $("body").css("color", "#76FA46");
            $(".button").css({"color" : "#76FA46", "border" : "1pt solid #76FA46" });
            $("body .hacked").addClass("greenneon-text"); 
            $("body .prompt").addClass("greenneon-symbols"); 
            $("body .cursor").addClass("greenneon-symbols"); 
            break; 
        case 4: 
            //BLUE
            $("body").css("color", "#5d8cf7"); 
            $(".button").css({"color" : "#5d8cf7", "border" : "1pt solid #5d8cf7" }); 
            $("body .hacked").addClass("blueneon-text"); 
            $("body .prompt").addClass("blueneon-symbols"); 
            $("body .cursor").addClass("blueneon-symbols"); 
            break; 
    } 
}