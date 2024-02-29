
        // Getting formated date from date string
        let deadline = new Date (" December 31, 2024").getTime();
        
        // To call defined function every second
        let x = setInterval(function() {

        // Getting current tine is required format
        let now = new Date().getTime();

        // Find the distance between now and the countdown date
        var t = countdowndate - now

        // Getting value of days, hours, minutes, seconds
        let Days = Math.floor(t/ (1000*60*60*24));
        let Hours = Math.floor((t% (1000*60*60*24)) / (1000*60*60));
        let Minutes = Math.floor((t% (1000*60*60)) / (1000*60));
        let Seconds = Math.floor((t% (1000*60)) / (1000));

        // Output the remaining time
        document.getElementById("demo").innerHTML = Days + "d" + Hours + "h" + Minutes + "m" + Seconds + "s";

        // Out put of over time
        if (t<0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
        }, 1000);



        formatNumber(Math.floor(distance / day))
        formatNumber(Math.floor((distance % day) / hour))
        formatNumber(Math.floor((distance % hour) / minute))
        formatNumber(Math.floor((distance % minute) / second))