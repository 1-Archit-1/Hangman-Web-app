
array = ["Interstellar", "Fight Club", "The Usual Suspects", "Birdman", "Seven", "Black Swan", "Requeim for a dream", "Tag", "Inception", "Django Unchained", "Schindlers List", "Ready player one"];

var movie = array[Math.floor(Math.random() * array.length)]; movie = movie.toUpperCase();
console.log(movie);
var c = 0;
var win=0;
var spaceCount=0;

for(var i=0;i<movie.length;i++)
{
    if(movie.charAt(i)==' ')
        spaceCount++;
}
document.addEventListener("DOMContentLoaded",
    function (event) {
        $ajaxUtils
            .sendGetRequest("death.html",
                function (res) {
                    var message = res;
                    message = message.replace(new RegExp("{}", "g"), "Pictures/1.png");



                    document.querySelector("#deathImageCont")
                        .innerHTML = message;


                    //Creating blanks using selected movie 
                    var lno = 0; var count = 1;
                    for (var i = 0; i < movie.length; i++) {
                        if (movie.charAt(i) == ' ') {
                            lno++; count = lno * 18 + 1;
                        }
                        else {


                            document.querySelector("#bl" + count.toString()).style.display = "block";
                            count++;
                        }
                    }

                    //button clicks
                    var buttonsList = document.querySelectorAll(".btn");
                    buttonsList.forEach(function (bobj) {
                        bobj.addEventListener("click", buttonClick);
                    });

                }, false);



        function callStage() {
            $ajaxUtils
                .sendGetRequest("death.html",
                    function (res) {
                        var message = res;
                        if (c == 1)
                            message = message.replace(new RegExp("{}", "g"), "Pictures/2.png");
                        else if (c == 2)
                            message = message.replace(new RegExp("{}", "g"), "Pictures/3.png");
                        else if (c == 3)
                            message = message.replace(new RegExp("{}", "g"), "Pictures/4.png");
                        else if (c == 4)
                            message = message.replace(new RegExp("{}", "g"), "Pictures/5.png");
                        else if (c == 5)
                            message = message.replace(new RegExp("{}", "g"), "Pictures/6.png");
                        else if (c == 6)
                            message = message.replace(new RegExp("{}", "g"), "Pictures/7.png");

                        document.querySelector("#deathImageCont")
                            .innerHTML = message;
                    }, false);
        }

        function buttonClick(event) {
            $(this).addClass("animated fadeOut");
            $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', buttonClick2);
        }

        function buttonClick2() {
            console.log(this);
            var ID = this.id;
            var num = parseInt(ID) - 1;
            var picno;
            var let = String.fromCharCode(65 + num);
            console.log(let);
            var z = 1;
            var ln = 0;
            var str; var flag = 0;
            for (var i = 0; i < movie.length; i++) {
                if (movie.charAt(i) === ' ') {
                    ln = ln + 1;
                    z = ln * 18 + 1;
                }
                else if (movie.charAt(i) === let) {
                    flag = 1;win++;
                    
                    str = "bl" + z.toString();
                    z++;
                    console.log(win);
                    picno = String.fromCharCode(97 + num);
                    document.querySelector("#" + str).innerHTML = "<img style=\"width:100%;\"src=\"Pictures/Letters/icons8-" + picno + "-100.png\"  />";
                    document.querySelector(".messagebox").innerHTML = "<h3 class=\"animated fadeIn slow\">Thats correct!<h3>";
                    if(win===movie.length-spaceCount)
                    {
                        document.querySelector(".messagebox").innerHTML = "<h3 class=\"animated fadeIn slow\">You Got It!<h3>";
                        $('#Lettercontainer').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                            document.querySelector('#Lettercontainer').style.display = "none";
                        });
                    }
                }
                else
                    z++;
            }
            if (flag != 1) {
                c++;
                callStage();
                if (c != 6) {
                    callStage();
                    document.querySelector(".messagebox").innerHTML = "<h3 class=\"animated fadeIn slow\">Thats incorrect!<h3>";
                }
                else {
                    $("#Lettercontainer").addClass("animated fadeOut");
                    document.querySelector(".messagebox").innerHTML = "<h3 class=\"animated fadeIn slow\" >You have lost!<h3>"
                    $('#Lettercontainer').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                        document.querySelector('#Lettercontainer').style.display = "none";
                    });
                }
            }

            this.style.display = "none";
        }

    });