var num1, num2;
var poruka;

function generateExpression()
{
    num1 = parseInt((Math.random() * 10) + 1);
    num2 = parseInt((Math.random() * 10) + 1);
    poruka = " " + num1 + " + " + num2 + "?";
    $("#izraz").val(poruka);
}

$(document).ready(function ()
{
    generateExpression();
    
    $("#name").focus(function ()
    {
       var text = $("#name").val();
       if(text === "Name *")
       {
           $("#name").val("");
           $("#name").css("color", "black");
       }
       
       $("#name").css("border", "solid black 1px");
    });
    
    $("#name").blur(function ()
    {
        var text = $("#name").val();
       if(text === "")
       {
           $("#name").val("Name *");
           $("#name").css("color", "gray");
       }
       $("#name").css("border", "solid gray 1px");
       
    });
    
    $("#email").focus(function ()
    {
       var text = $("#email").val();
       if(text === "Email *")
       {
           $("#email").val("");
           $("#email").css("color", "black");
       }
       
       $("#email").css("border", "solid black 1px");
    });
    
    $("#email").blur(function ()
    {
       var text = $("#email").val();
       if(text === "")
       {
           $("#email").val("Email *");
           $("#email").css("color", "gray");
       }
       
       $("#email").css("border", "solid gray 1px");
    });
    
    $("#message").focus(function ()
    {
       var text = $("#message").val();
       if(text === "Message *")
       {
           $("#message").val("");
           $("#message").css("color", "black");
       }
       
       $("#message").css("border", "solid black 1px");
    });
    
    $("#message").blur(function ()
    {
       var text = $("#message").val();console.log(text);
       if(text === "")
       {
           $("#message").val("Message *");
           $("#message").css("color", "gray");
       }
       
       $("#message").css("border", "solid gray 1px");
    });
    
    $("#izraz").focus(function ()
    {
       var text = $("#izraz").val();
       if(text === poruka)
       {
           $("#izraz").val("");
           $("#izraz").css("color", "black");
       }
       
       $("#izraz").css("border", "solid black 1px");
    });
    
    $("#izraz").blur(function ()
    {
       var text = $("#izraz").val();console.log(text);
       if(text === "")
       {
           $("#izraz").val(poruka);
           $("#izraz").css("color", "gray");
       }
       
       $("#izraz").css("border", "solid gray 1px");
    });
    
    $("#form").submit(function ()
    {
        var name = $("#name").val();
        var email = $("#email").val();
        var flag = true;
        
        var regexName = /^[A-Z]/;
        var ime = name.split(" ");
        if(regexName.test(ime[0]) === false || regexName.test(ime[1]) === false)
        {console.log("aaa");
            $("#name").css("border", "solid red 1px");
            flag = false;
        }
        
        var regexEmail = /^[a-z0-9\.]{1,}\@{1}([a-z]{1,}\.{1}[a-z]{2,4})$/;
        if(regexEmail.test(email) === false)
        {
            $("#email").css("border", "solid red 1px");
            flag = false;
        }
        
        var message = $("#message").val();
        if(message === "Message *")
        {
            $("#message").css("border", "solid red 1px");
            flag = false;
        }
        
        var sol = parseInt($("#izraz").val());
        if(sol !== num1 + num2)
        {
            $("#izraz").css("border", "solid red 1px");
            flag = false;
        }
        
        if(flag === false)
        {
            $("#izraz").val("");
            $("#izraz").css("color", "gray");
            generateExpression();
        }
        
        return  flag;
    });
});