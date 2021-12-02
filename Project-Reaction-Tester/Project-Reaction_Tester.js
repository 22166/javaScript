 var start, end, add, shape ="", size, randomTopLocation, randomLeftLocation, colour, objectCreated = false, timeDelay, Quit = 0, totalNumberOfClicks =0, totalTime =0;
				
			timeDelay = setInterval(mainFunction, randomDelay()); //start Interval for the first time with random delay 
				
			function randomDelay()
			{	
				return( Math.floor((Math.random() * 1500) + 500));
			}	
				
			function randomShape()
			{
				var shapeArray = ["Circle", "Square"];
				var arrayIndex, shapeObject = "";
				arrayIndex = Math.floor(Math.random() * shapeArray.length);
				shapeObject = shapeArray[arrayIndex];
				return (shapeObject);
			}
			function randomSize()
			{
			    size = (Math.floor(Math.random() * 100)) + 50;
				return (size);
			}
			function divTopLocation()
			{
				return (Math.floor((Math.random() * 350))); /* 150 is to contain the gameObject inside gameContainer. */
			}
			function divLeftLocation()
			{
				return (Math.floor((Math.random() * 1150)));
			}
			function randomColor()
			{
				var randomColour = "#FFFFFF";
				var countCharacter = 6;
				while (randomColour == "#FFFFFF" || countCharacter!=7)  /*Avoiding white colour and taking hex code of 6 characters including # i.e 6+1 =7 */
				{
				randomColour = "#"+ Math.floor(Math.random()*16777215).toString(16);
				countCharacter = randomColour.length;
				}
				return(randomColour);			
			}
			function drawObject(shape, size, randomTopLocation, randomLeftLocation, colour)
			{
				    document.getElementById("gameObject").style.height = size;
					document.getElementById("gameObject").style.width = size;
					document.getElementById("gameObject").style.float = "left";
					document.getElementById("gameObject").style.position = "relative";
					document.getElementById("gameObject").style.top = randomTopLocation;
					document.getElementById("gameObject").style.left = randomLeftLocation;
					document.getElementById("gameObject").style.backgroundColor = colour;
					document.getElementById("gameObject").style.display = "inline";
				if(shape=="Circle")
				{
					document.getElementById("gameObject").style.borderRadius = "100%";
				}
				else
				{
					document.getElementById("gameObject").style.borderRadius = "0%";
				}
			}
				document.getElementById("gameObject").onclick = function()
					{
						document.getElementById("gameObject").style.display = "none";
						end = Date.now() - start;  //time in milisecond 
						timeInSeconds = (end/1000);   //time in seconds
						
						document.getElementById("timeClass").innerHTML = "Your time: " + timeInSeconds + " sec";
						objectCreated = false;
						if (Quit == 0)
						{
						timeDelay = setInterval(mainFunction, randomDelay()); // Start interval each time game box disappers to get a new random delay before new box appears.
						}
						totalNumberOfClicks++;
						totalTime = totalTime + timeInSeconds;
						/*alert("Value of random delay is:"+ delay);*/
					}
					document.getElementById("quitButton").onclick = function()
					{
						clearInterval(timeDelay);
						document.getElementById("gameObject").style.display = "none";
						Quit =1;
						document.getElementById("No_of_clicks").innerHTML = "Total Number of Clicks: " + totalNumberOfClicks;
						totalTime = totalTime.toFixed(3);
						document.getElementById("total_time_taken").innerHTML = "Total time taken: " + totalTime+ " sec";
						document.getElementById("clickBoxes").style.display = "none";
						document.getElementById("timeClass").style.display = "none";
						document.getElementById("quitButton").style.display = "none";
						document.getElementById("quitLine").style.display = "none";
					}
					
		function mainFunction()
			{
					if (objectCreated == false)
					{
					shape = randomShape();
					size = randomSize();
					randomTopLocation = divTopLocation();
					randomLeftLocation = divLeftLocation();
					colour = randomColor();
					drawObject(shape, size, randomTopLocation, randomLeftLocation, colour);
					objectCreated = true;
					start = Date.now();	 
					clearInterval(timeDelay); // Stop interval each time a new game box is generated.
					}
			}
	