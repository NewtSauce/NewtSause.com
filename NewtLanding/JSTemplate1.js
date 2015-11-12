$(document).reday(function(){
	// below code hides the <p> tags
	
$("p").hide();

$("h1").click(function() {
	$(this).next().slideToggle(300);
	});

});

// Selectors

$(document).ready(function(){
	$("#testbutton").click(function() {
$("div").css("background-color","red");
	});	
});

// $(this)= whatever brought us here, do not use ""
// for $(this).

$(document).ready(function(){
	$("#testbutton").click(function() {
$(this).css("background-color","red");
	});	
});

//just have to press the mouse button, dont have to release

$(document).ready(function(){
	$("#testbutton").mousedown(function() {
$(this).css("background-color","red");
	});
$("#testbutton").mouseup(function() {
$(this).css("background-color","yellow");
	});
	
});

//give the item a hover effect

$(document).ready(function(){
	$("#testbutton").mouseenter(function() {
$(this).css("background-color","red");
	});
$("#testbutton").mouseleave(function() {
$(this).css("background-color","yellow");
	});
	
});

// hides the heading one untill clicked then shows the heading one
$(document).ready(function(){
	$("h2").hide();
	
$("h1").click(function(){
$("h2").show(1000);
	});
	
});

//heading one shows untill clicked then disappears
$(document).ready(function(){	
$("h1").click(function(){
$("h2").hide(1000);
	});
});

//upon clicking hides the heading one once clicked again will show the heading one, toggle is like an on and off switch. 
$(document).ready(function(){
$("h2").hide();	
$("h1").click(function(){
$("h2").toggle(1000);
	});
});

// shows heading one till clicked then slides up till the heading one is hidden

$(document).ready(function(){
//$("h2").hide();	
$("h1").click(function(){
$("h2").slideUp(1000);
	});
});

//hides heading one from the start then once clicked slides down to show the hidden heading. 

$(document).ready(function(){
$("h2").hide();	
$("h1").click(function(){
$("h2").slideDown(1000);
	});
});

//toggles the heading as hidden and shown

$(document).ready(function(){
$("h2").hide();	

$("h1").click(function(){
$("h2").slideToggle(1000);
	});
});

//fades out the heading one on clicking

$(document).ready(function(){
//$("h2").hide();	

$("h1").click(function(){
$("h2").fadeOut(1000);
	});
});

//fades in the hidden heading 

$(document).ready(function(){
$("h2").hide();	

$("h1").click(function(){
$("h2").fadeIn(1000);
	});
});

//toggles the fade in and fade out of the heading

$(document).ready(function(){
$("h2").hide();	

$("h1").click(function(){
$("h2").fadeToggle(1000);
	});
});

//fades the heading till it reaches the stated opacity

$(document).ready(function(){	

$("h1").click(function(){
$("h2").fadeTo(1000, 0.3);
	});
});

//delays the fade affect till the specified delay time. 

$(document).ready(function(){
$("h1").click(function(){
$("h2").delay(2000).fadeToggle(1000);
	});
});

//hides the h2 heading then after the first affect the heading 3 fades out after. 

$(document).ready(function(){
$("h1").click(function(){
	$("h2").hide(1000, function() {
		$("h3").fadeOut (1000)
	});
	});
});


