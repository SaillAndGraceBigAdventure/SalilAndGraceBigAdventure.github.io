$(document).ready(function() {
    
    $("input").on("keydown",function search(e) {
        if(e.keyCode == 13) {
            guess = ($(this).val()).toLowerCase()

            switch(guess) {
                case "union":
                    window.location.replace("http://notschlissel.github.io/completed/s3condpuzzl3isdon3.html");
                    break;
                case "smurf":
                    alert("That's one of them! Keep going!")
                    break;
                case "sun":
                    alert("That's one of them! Keep going!")
                    break;
                case "genie":
                    alert("That's one of them! Keep going!")
                    break;
                case "lemons":
                    alert("That's one of them! Keep going!")
                    break;
                case "uranus":
                    alert("That's one of them! Keep going!")
                    break;
                default:
                    alert("Try again!");
            }
        }
    });
});

