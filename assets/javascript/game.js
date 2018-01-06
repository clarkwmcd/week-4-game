
$(document).ready(function() {

	var counter = 0;
	var wins=0;
	var losses=0;
	var randomNumber;

	var red = Math.floor(Math.random()*12)+1;
	var blue = Math.floor(Math.random()*12)+1;
	var yellow = Math.floor(Math.random()*12)+1;
	var green = Math.floor(Math.random()*12)+1;
	function targetNumber()
	{
		randomNumber = Math.floor(Math.random()*120)+1;
		$("#randomNumber").text(randomNumber);
	};

	function logic()
	{
		if (counter === randomNumber)
		{
			wins++;
			$("#wins").text("Wins: " + wins);
			alert("You Won!")
			reset();
		}

		else if (randomNumber < counter)
		{
			losses++;
			alert("You Lost!")
			$("#losses").text("Losses: " + losses);
			reset();
		};
	};

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
	targetNumber();

	$("#redcrystal").click(function()
	{
	  counter = counter + red;
	  $("#totalScore").text(counter);
	  logic();
	});

	$("#bluecrystal").click(function()
	{
	  counter = counter + blue;
	  $("#totalScore").text(counter);
	  logic();
	});

	$("#yellowcrystal").click(function()
	{
	  counter = counter + yellow;
	  $("#totalScore").text(counter);
	  logic();
	});

	$("#greencrystal").click(function()
	{
	  counter = counter + green;
	  $("#totalScore").text(counter);
	  logic();
	});

});
