$(document).ready(function() {
    // Countdown timer for next IFSul Selection Process
    var targetDate = new Date("11/30/2023").getTime();
    var countdownTimer = setInterval(function() {
        var currentDate = new Date().getTime();
        var distance = targetDate - currentDate;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        document.getElementById("countdown-days").innerHTML = days;

        if (distance < 0) {
            clearInterval(countdownTimer);
            document.getElementById("countdown-days").innerHTML = "0";
        }
    }, 1000);
});