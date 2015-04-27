window.addEventListener("load", eventWindowLoaded, false); //adds a load event handler		

        function eventWindowLoaded() {
			canvasApp3(); //running your code
		}

		function canvasSupport() {
			return Modernizr.canvas; //double check canvas is available
		}


		function eventWindowLoaded() {
			canvasApp3();
		}
///////////////////////////////////////////////////////////
		function canvasApp3() {

			// canvas code
                var c=document.getElementById("myCanvas3");
                var ctx=c.getContext("2d");
                
            
 


/* mightygumball.js */
/*
 * get the content of a JSON file using JSONP
 * update every 3 seconds.
 *
 */
var lastReportTime = 0; //time

window.onload = init;

function init() {
        var interval = setInterval(handleRefresh, 3000);
        handleRefresh();
    }
    ///////////^^^^this just makes sure everything is working at the top of the page////////

function handleRefresh() {
    console.log("here"); //debgging
    var url = "http://gumball.wickedlysmart.com" + //where am i going?
        "?callback=updateSales" + //what do i do with the data i get?
        "&lastreporttime=" + lastReportTime +
        "&random=" + (new Date()).getTime();
    var newScriptElement = document.createElement("script");
    newScriptElement.setAttribute("src", url);
    newScriptElement.setAttribute("id", "jsonp");
    var oldScriptElement = document.getElementById("jsonp");
    var head = document.getElementsByTagName("head")[0];
    ////////////^^^^nothing above here should really need to be touched



    if (oldScriptElement == null) {
        head.appendChild(newScriptElement);
    } else {
        head.replaceChild(newScriptElement, oldScriptElement);
    }
}

//////////////////outputs into HTML///////////////////////////

function updateSales(latitude) {

    //looping data

    var c = document.getElementById("myCanvas3");
    var ctx = c.getContext("2d");



    function drawRect(x, y, z, q, c) {
        ctx.beginPath();
        ctx.rect(x, y, (z*0.3), (q*0.3), c);
        ctx.fillStyle = c;
        ctx.stroke();
//        ctx.fill();

    }

    for (var i = 0; i < latitude.length; i++) {
        var temp = latitude[i]; //array for sales made


        var dataFromJson = temp.latitude;
        var dataOutput = document.getElementById("data");
        dataOutput.innerHTML = dataFromJson;

        function getRandom(min, max) {
            return Math.random() * (max - min) + min;
        }

        var xPos = getRandom(10, 800); //random x co-ordinate
        var yPos = getRandom(10, 800); //random y co-ordinate
        var zPos = getRandom(10, 800); //random z co-ordinate
        var qPos = getRandom(10, 800); //random q co-ordinate

        var colour = ["yellow", "red"];
        var randCol = colour[Math.floor(Math.random() * colour.length)];
        drawRect(xPos, yPos, zPos, qPos, dataFromJson, randCol); //feed in the integer 


        //orders the output divs
        if (tempDiv.childElementCount == 0) {
            tempDiv.appendChild(div);
        } else {
            tempDiv.insertBefore(div, tempDiv.firstChild);
        }
    }

    if (latitude.length > 0) {
        lastReportTime = latitude[latitude.length - 1].time;
    }
//document.getElementById('clear').addEventListener('click', function() {
//        context.clearRect(0, 0, canvas.width, canvas.height);
//      }, false);
    //a late attempt at canvas clear
}
