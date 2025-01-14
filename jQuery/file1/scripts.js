

$(document).ready(function () { //once the document has loaded  jQuery and it is ready
    // $("h1").css("color", "white");

    $("h1").addClass("big-title");
    $("h1").removeClass("big-title");

    $(".answer").text($("h1").hasClass("big-title"));
})


$("a").attr("href", "https://www.google.com");


$("h1").click(function () {
    alert("Hello World!");
    $("h1").css("color", "purple");
})