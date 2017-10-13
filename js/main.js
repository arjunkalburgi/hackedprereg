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
            $("body .hdr-text").addClass("redneon"); 
            break; 
        case 2: 
            //YELLOW
            $("body").css("color", "#FCED51");
            $(".button").css({"color" : "#FCED51", "border" : "1pt solid #FCED51" });
            $("body .hdr-text").addClass("yellowneon"); 
            break; 
        case 3: 
            //GREEN
            $("body").css("color", "#76FA46");
            $(".button").css({"color" : "#76FA46", "border" : "1pt solid #76FA46" });
            $("body .hdr-text").addClass("greenneon"); 
            break; 
        case 4: 
            //BLUE
            $("body").css("color", "#5d8cf7"); 
            $(".button").css({"color" : "#5d8cf7", "border" : "1pt solid #5d8cf7" }); 
            $("body .hdr-text").addClass("blueneon"); 
            break; 
    } 
}