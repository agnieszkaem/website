            
            var menu = document.getElementById("menu");
            var side_nav = document.getElementById("side_nav");

            side_nav.style.right = "-100%";
            menu.onclick = function() {
                if(side_nav.style.right == "-100%") {
                    side_nav.style.right = "0";
                }
                else{
                side_nav.style.right = "-100%";
                }
            }
