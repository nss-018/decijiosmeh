$(document).ready(function ()
{
    var date = new Date();
    $("#datum").html("Datum: " + date.getDate() + ". " + (date.getMonth()+1) + ". " + date.getFullYear() + ".");
    // date.getMonth() vraca mesec u intervalu [0-11], 0 - Januar, 11 - Decembar, pa zbog toga +1
});
