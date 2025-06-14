/* $ is a jQuery Function */

console.log($(".list-item").text())


/*


$("h1");
$(".className")
$("#idName")
$([href])     == attribute



*/

$("h1.head").text("Welcome to the react.js")

$("button").css("color","red");
$("button.btn2").css("background-color","yellow");
$("h1").css("font-size","3rem");

$("button.btn3").css({"border":"1px solid gray","background-color":"yellow","font-size":"2rem"});




$("button#btn-4").addClass("class-btn4");


/* same css to both the buttons */
$("p").addClass("stylePara");


/* html method in place of innerHtml */
$("h2").html("<em>The World of MERN Stack</em>");


/* what is the value in their href and change it */

console.log($("a").attr("href"));

$("a").attr("href","http://www.google.com");



//add button to top and bottom
$("h1.headOne").before("<button>Before</button>");
$("h1.headOne").after("<button>After</button>");

//add button to start and end
$("h1.head").append("<button>append</button>");
$("h1.head").prepend("<button>prepend</button>");



//event handling🌟

$("h3").mouseenter(function(){
  $("h3").css("background-color","red");
});



$("h3").mouseleave(function(){
    $("h3").css("background-color","yellow");
    console.log("mouse is left");
});


$(document).keypress((event)=>{
    console.log("key is pressed " + event.key);
    $("h3").text(event.key);
})