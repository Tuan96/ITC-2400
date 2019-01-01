/* Tuan Nguyen ITC 2400 
Time of recording exchanging rate: Nov 19th, 1 AM UTC*/

/*Currency converter*/
function euroConverter() {
document.converter.dollar.value = document.converter.euro.value * 1.14
document.converter.pound.value = document.converter.euro.value * 0.89
document.converter.yen.value = document.converter.euro.value * 128.56
document.converter.yuan.value = document.converter.euro.value * 7.92
}

function dollarConverter() {
document.converter.euro.value = document.converter.dollar.value * 0.88
document.converter.pound.value = document.converter.dollar.value * 0.78
document.converter.yen.value = document.converter.dollar.value * 112.66
document.converter.yuan.value = document.converter.dollar.value * 6.94
}

function poundConverter() {
document.converter.dollar.value = document.converter.pound.value * 1.28
document.converter.euro.value = document.converter.pound.value * 1.13
document.converter.yen.value = document.converter.pound.value * 144.66
document.converter.yuan.value = document.converter.pound.value * 8.91
}

function yenConverter() {
document.converter.dollar.value = document.converter.yen.value * 0.0089
document.converter.pound.value = document.converter.yen.value * 0.0069
document.converter.euro.value = document.converter.yen.value * 0.0078
document.converter.yuan.value = document.converter.yen.value * 0.062
}

function yuanConverter() {
document.converter.dollar.value = document.converter.yuan.value * 0.14
document.converter.pound.value = document.converter.yuan.value * 0.11
document.converter.euro.value = document.converter.yuan.value * 0.13
document.converter.yen.value = document.converter.yuan.value * 16.23
}

/*Validation form in case the pattern does not work on browser*/

function Validate()                                    
    { 

    var first_name = document.forms["RegForm"]["first_name"];  
    var last_name = document.forms["RegForm"]["last_name"]; 
    var email = document.forms["RegForm"]["email"];  
    var address_line_1 = document.forms["RegForm"]["address_line_1"];  
    var address_line_2 = document.forms["RegForm"]["address_line_2"]; 
    var city = document.forms["RegForm"]["city"]; 
    var zipcode = document.forms["RegForm"]["zipcode"]; 
    var comment = document.forms["RegForm"]["comment"];

   
    if (first_name.value == "")                                  
    { 
        window.alert("Please enter your First Name."); 
        first_name.focus(); 
        return false; 
    } 

    if (last_name.value == "")                                  
    { 
        window.alert("Please enter your Last Name."); 
        last_name.focus(); 
        return false; 
    } 

    if (email.value == "")                                   
    { 
        window.alert("Please enter your E-mail Address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (address_line_1.value == "")                               
    { 
        window.alert("Please enter your address."); 
        address_line_1.focus(); 
        return false; 
    } 

    if (city.value == "")                               
    { 
        window.alert("Please enter the name of the city you reside in."); 
        city.focus(); 
        return false; 
    } 

    if (zipcode.value == "")                               
    { 
        window.alert("Please enter your Zip Code."); 
        zipcode.focus(); 
        return false; 
    } 

    if (comment.value == "")                               
    { 
        window.alert("Please enter your request."); 
        comment.focus(); 
        return false; 
    } 

    return true; 

}

/* Upload file*/
function myFunction() {
    var x = document.getElementById("myFile");
    x.disabled = true;
}


/*Reference
https://www.proglogic.com/code/javascript/calculator/currencyconverter.php
https://stackoverflow.com/questions/13643417/how-to-validate-pattern-matching-in-textarea
https://stackoverflow.com/questions/5587973/javascript-upload-file
*/