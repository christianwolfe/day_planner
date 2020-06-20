

//globals
var todaysDate = $("#currentDay").text(moment().format('MMMM Do YYYY'));
var time = $("currentDay");


//Loop to retrieve content for each block ?
for (let i = 8; i <= 24; i++) {
    $("#" + i).val(localStorage.getItem(i));
    //log out item
    console.log(localStorage.getItem(i));
}

//.on("click") event to save textarea to localStorage

$(".saveBtn").on("click"), function (event) {
    event.preventDefault();

    if (typeof (window.localStorage) != "undefined") {

        console.log(this);
        var description = $(this).siblings(".description").children.val()
        var timeSlot = $(this).attr("id")
    }
}


//swap classes - past/future/pres
function classSwap() {
    var currTime = moment().hours();
    $(".row").each(function () {
        const row = parseInt($(this).attr("id"));

        if (row < currTime) {
            console.log("past");
            $(this).addClass("past");
        }
        else if (row === currTime) {
            console.log("present");
            $(this).addClass("present");
        }
        else {
            console.log("future")
            $(this).addClass("future");
        }
    });
}


//display data in localStorage
$("#9AM").val(localStorage.getItem("9"));
$("#10AM").val(localStorage.getItem("10"));
$("#11AM").val(localStorage.getItem("11"));
$("#12AM").val(localStorage.getItem("12"));
$("#1PM").val(localStorage.getItem("1"));
$("#2PM").val(localStorage.getItem("2"));
$("#3PM").val(localStorage.getItem("3"));
$("#4PM").val(localStorage.getItem("4"));
$("#5PM").val(localStorage.getItem("5"));
