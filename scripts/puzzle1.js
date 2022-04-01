$(document).ready(function() {
    $("input").on("keydown",function search(e) {
        if(e.keyCode == 13) {
            guess = ($(this).val()).toLowerCase()

            switch(guess) {
                case "ugli":
                    window.location.replace("http://notschlissel.github.io/completed/puzzle1completed.html");
                    break;
                case "ugliaf":
                    window.location.replace("http://notschlissel.github.io/completed/puzzle1completed.html");
                    break;
                default:
                    alert("Try again!");
            }
        }
    });
});