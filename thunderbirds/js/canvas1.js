window.addEventListener("load", eventWindowLoaded, false); //adds a load event handler

		function eventWindowLoaded() {

			canvasApp1(); //running your code
		}

		function canvasSupport() {
			return Modernizr.canvas; //double check canvas is available
		}


		function eventWindowLoaded() {

			canvasApp1();
		}
///////////////////////////////////////////////////////////
		function canvasApp1() {

			// canvas code
                var c=document.getElementById("myCanvas1");
                var ctx=c.getContext("2d");
                
            
            

//function to draw image 1 onto canvas
        function image1(){  
        var imageObj = new Image();

                imageObj.onload = function() 
                {
                ctx.drawImage(imageObj, 0, 0);
                ctx.font = "17px Helvetica";
                ctx.fillStyle = 'white';
                ctx.fillText("Good Morning Captain", 14, 20);
                };
            
                imageObj.src = "images/morning.jpg"
                
        }
          
//function to draw image 2 onto canvas
        function image2(){  
        var imageObj = new Image();

                imageObj.onload = function() 
                {
                ctx.drawImage(imageObj, 0, 0);
                ctx.font = "17px Helvetica";
                ctx.fillStyle = 'white';
                ctx.fillText("Good Afternoon Captain", 8, 20);
                
                };
                imageObj.src = "images/afternoon.jpg"
                
        }
 
//function to draw image 3 onto canvas
        function image3(){  
        var imageObj = new Image();

                imageObj.onload = function() 
                {
                ctx.drawImage(imageObj, 0, 0);
                ctx.font = "17px Helvetica";
                ctx.fillStyle = 'white';
                ctx.fillText("Good Evening Captain", 10, 20);
                };
                imageObj.src = "images/evening.jpg"
        }
           
//function to draw image 4 onto canvas
        function image4(){  
        var imageObj = new Image();

                imageObj.onload = function() 
                {
                ctx.drawImage(imageObj, 0, 0);
                ctx.font = "17px Helvetica";
                ctx.fillStyle = 'white';
                ctx.fillText("Good Night Captain", 25, 20);
                };
                imageObj.src = "images/night.jpg"
        }
            
//call function          
            image1 ();
        

            
            
            
            
//            var book = "history";
//if( book == "history" ){
//   document.write image1();
//}else if( book == "maths" ){
//   document.write("<img src=images/night.jpg>");
//}else if( book == "economics" ){
//   document.write("<b>Economics Book</b>");
//}else{
//  document.write("<b>Unknown Book</b>");
//}

//            var day;
//switch (new Date().getDay()) {
//    case 0:
//        day = "Sunday";
//        break;
//    case 1:
//        day = "Monday";
//        break;
//    case 2:
//        day = "Tuesday";
//        break;
//    case 3:
//        day = "Wednesday";
//        break;
//    case 4:
//        day = "Thursday";
//        break;
//    case 5:
//        day = "Friday";
//        break;
//    case  6:
//        day = "Saturday";
//        break;
//}
//document.getElementById("demo").innerHTML = "Today is " + day;
//            
            

            
       
            
            
            
            
            
            
            
        }