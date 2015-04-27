window.addEventListener("load", eventWindowLoaded, false); //adds a load event handler		

        function eventWindowLoaded() {
			canvasApp2(); //running your code
		}

		function canvasSupport() {
			return Modernizr.canvas; //double check canvas is available
		}


		function eventWindowLoaded() {
			canvasApp2();
		}
///////////////////////////////////////////////////////////
		function canvasApp2() {

			// canvas code
                var c=document.getElementById("myCanvas2");
                var ctx=c.getContext("2d");
                
            
 }


var radarChartData = {
		labels: ["Flying", "Fighting", "Resting", "Repairing", "Communicating", "Reloading", "Off Duty"],
		datasets: [
			{
				label: "My First dataset",
				fillColor: "rgba(114,44,227,0.2)",
				strokeColor: "rgba(220,220,220,1)",
				pointColor: "rgba(220,220,220,1)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(220,220,220,1)",
				data: [65,59,90,81,56,55,40]
			},
//			{
//				label: "My Second dataset",
//				fillColor: "rgba(151,187,205,0.2)",
//				strokeColor: "rgba(151,187,205,1)",
//				pointColor: "rgba(151,187,205,1)",
//				pointStrokeColor: "#fff",
//				pointHighlightFill: "#fff",
//				pointHighlightStroke: "rgba(151,187,205,1)",
//				data: [88,48,40,19,96,27,100]
//			}
		]
	};


	window.onload = function(){
		window.myRadar = new Chart(document.getElementById("myCanvas2").getContext("2d")).Radar(radarChartData, {
			
		});
	}
    