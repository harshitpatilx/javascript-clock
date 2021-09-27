function get_time() {
    // New date variable
    var time = new Date();

    // Getting Time
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    // Setting Time
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;
}

let interval = setInterval(get_time, 1000)