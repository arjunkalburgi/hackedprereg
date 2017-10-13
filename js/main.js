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
            $("body").css("backgroundColor", "#E83223"); //RED
            $("body").css("color", "#76FA46");
            $(".button").css({"color" : "#76FA46", "border" : "1pt solid #76FA46" });
            $("body .hdr-text").addClass("redneon"); 
            break; 
        case 2: 
            $("body").css("backgroundColor", "#FDFD54"); //YELLOW
            $("body").css("color", "#0627F4"); 
            $(".button").css({"color" : "#0627F4", "border" : "1pt solid #0627F4" }); 
            $("body .hdr-text").addClass("yellowneon"); 
            break; 
        case 3: 
            $("body").css("backgroundColor", "#76FA46"); //GREEN
            $("body").css("color", "#E83223"); 
            $(".button").css({"color" : "#E83223", "border" : "1pt solid #E83223" }); 
            $("body .hdr-text").addClass("greenneon"); 
            break; 
        case 4: 
            $("body").css("backgroundColor", "#0627F4"); //BLUE
            $("body").css("color", "#FDFD54");
            $(".button").css({"color" : "#FDFD54", "border" : "1pt solid #FDFD54" });
            $("body .hdr-text").addClass("blueneon"); 
            break; 
    } 
}