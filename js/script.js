var next_move = "expand";
$(document).ready(function (){
    $(".ca-menu").hide();
    $("#mainmenu").click(function()
    {
        var css = {};
            if (next_move == "expand"){
                $(".ca-menu").show();
                css = {
                    width: '300px'
                };
                next_move = "shrink";
            } 
            else {
                css = {
                    width: '0px',
                    border: 'hide',
                };     
                next_move = "expand";
            }
        $('.ca-menu').animate(css, 700);
    });
});

function about() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("article").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "about.html", true);
    xhttp.send();
}
function todo() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("article").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "todo.html", true);
    xhttp.send();
}
function contact() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("article").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "contact.html", true);
    xhttp.send();
}