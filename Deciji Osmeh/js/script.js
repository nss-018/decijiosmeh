var id = 1;
var slike = ["images/slika1.jpg", "images/slika2.jpg", "images/slika3.jpg", "images/slika4.jpg"];
var intervalID;

function menjaj(smer = "napred")
{
    if(smer == "napred")
    {
        id++;
        if(id == 4)
            id = 0;
    }
    else
    {
        id--;
        if(id == -1)
            id = 3;
    }
    
    $("#bannerSlika").animate({opacity: 0}, 500, function () { $("#bannerSlika").attr("src", slike[id]); } );
    $("#bannerSlika").animate({opacity: 1}, 500);
}

function menjajNapred()
{
    window.clearInterval(intervalID);
    menjaj("napred");
    intervalID = window.setInterval(menjaj, 2000);
}

function menjajNazad()
{
    window.clearInterval(intervalID);
    menjaj("nazad");
    intervalID = window.setInterval(menjaj, 2000);
}


$(document).ready(function ()
{
    intervalID = window.setInterval(menjaj, 2000);
    $("#levo").click(menjajNazad);
    $("#desno").click(menjajNapred);
    
    var date = new Date();
    $("#datum").html("Date: " + date.getDate() + ". " + (date.getMonth()+1) + ". " + date.getFullYear() + ".");
});