//API key from Openweather var apiKey = "59182bf3f33400149b96062c67429faf"

$(document).ready(function () {
    var longitude;
    var latitude;
    // Getting the Time, Date, and Zone from Moment J.s
    $(document).ready(function () {
        var currentDate = setInterval(function () {
            var momentNow = moment();
            $(".display-3").html(momentNow.format("dddd").substring(0, 8).toUpperCase() + "  " + currentDate.format(.format("MMMM Do YYYY, h:mm:ss a")); 100);
    });
    // Define the location for weather API
    function getLocation() {
        navigator.geolocation.getCurrentPosition(showPosition);
        showPosition();
    }
    // Getting the coordnations for the position
    function showPosition(position) {
        longitude = position.coords.longitude;
        latitude = position.coords.latitude;
        console.log(longitude);
        console.log(latitude);
        renderWeather()
    }

    function renderWeather() {
        var WeatherAPIKey = "59182bf3f33400149b96062c67429faf"
        var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&units=imperial&appid=" + WeatherAPIKey;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
                                        // Ask Tutor for help