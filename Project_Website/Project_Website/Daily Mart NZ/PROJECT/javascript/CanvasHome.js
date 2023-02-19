var canvas = document.getElementById("whyChoose");
var ctx = canvas.getContext("2d");

var count = 1000;

function blinkText() {
    count--;

    if (count % 2 == 1) {
        ctx.font = "50px Montserrat";
        /*creates the gradient colours */
    var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop("0", "#f9530b");
    gradient.addColorStop("0.5", "#f5bd1f");
    gradient.addColorStop("1.0", "#34CE32");
    ctx.fillStyle = gradient;
    ctx.fillText("Why Choose Us?", 10, 60);
    }

    else {
        ctx.clearRect(0, 0, 500, 500);
    }
}
/*sets the speed of blinking*/
    setInterval(blinkText, 500);