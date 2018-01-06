

	var counter = 0;
	var wins=0;
	var losses=0;
	var randomNumber;

	var red = Math.floor(Math.random()*12)+1;
	var blue = Math.floor(Math.random()*12)+1;
	var yellow = Math.floor(Math.random()*12)+1;
	var green = Math.floor(Math.random()*12)+1;


//creates a random number between 1 and 120

	function targetNumber()
	{
		randomNumber = Math.floor(Math.random()*120)+1;
		$("#randomNumber").text(randomNumber);
	};

//Decide if random number has been met or not

	function logic()
	{
		if (counter === randomNumber)
		{
			wins++;
			$("#wins").text("Wins: " + wins);
			alert("You Won!")
			reset();
		}

		else if (counter > randomNumber)
		{
			losses++;
			var difference = counter - randomNumber;
			alert("Sorry! You lose, Your Number is "+ counter + ". "+ "You Lost by " + difference +".");
			$("#losses").text("Losses: " + losses);
			// $("<audio>");
			reset();
		};
	};

//reset vaules of the crystals

	function reset() 
	{
		red = Math.floor(Math.random()*12)+1;
		blue = Math.floor(Math.random()*12)+1;
		yellow = Math.floor(Math.random()*12)+1;
		green = Math.floor(Math.random()*12)+1;
		counter = 0;
		$("#totalScore").text(counter);
		targetNumber();
		
	};

//creates the random number
	targetNumber();

//when a crystal is clicked increase counter and update HTML
	$("#redcrystal").click(function()
	{
		counter = counter + red;
		$("#totalScore").text(counter);
		//delay the alert to allow counter to be updated in the HTML before the alert 
		setTimeout(function ()
		{
			logic();
		}, 10);
	});

	$("#bluecrystal").click(function()
	{
	  counter = counter + blue;
	  $("#totalScore").text(counter);

	  setTimeout(function ()
		{
			logic();
		}, 10);
	});

	$("#yellowcrystal").click(function()
	{
	  counter = counter + yellow;
	  $("#totalScore").text(counter);

	  setTimeout(function ()
		{
			logic();
		}, 10);
	});

	$("#greencrystal").click(function()
	{
	  counter = counter + green;
	  $("#totalScore").text(counter);

	  setTimeout(function ()
		{
			logic();
		}, 10);
	});


