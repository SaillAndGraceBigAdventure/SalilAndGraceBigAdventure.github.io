$(document).ready(function() {
    $("input").on("keydown",function search(e) {
        if(e.keyCode == 13) {
            guess = ($(this).val()).toLowerCase()

            switch(guess) {
                case "burnt kitchens":
                    window.location.replace("http://notschlissel.github.io/completed/finalehasbeencompleted.html");
                    break;
                case "burntkitchens":
                    alert("Keep the space!");
                    break;
                case "burnt":
                    alert("That's one of them! Keep going!")
                    break;
                case "kitchens":
                    alert("That's one of them! Keep going!")
                    break;
                case "burnt chickens":
                    alert("Only one 'c', sir")
                    break;
                default:
                    alert("Try again!");
            }
            
        }
    });
});