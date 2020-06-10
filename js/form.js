/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



    function checkForm(){
        var error=false; //to znaczy, że danych nie brakuje
        var errorText=""; //komunikat z błędem
        var contactName = document.getElementById("imie");
        var contactSubName = document.getElementById("nazwisko");
        var contactEmail = document.getElementById("email");
        if (contactName.value === ""){
          //  errorText += "imię\n";
          document.getElementById("errorName").className="alert alertdanger";
          
          //  error=true;
        }
        if (contactSubName.value === ""){
           // errorText += "nazwisko\n";
            document.getElementById("errorSubName").className="alert alertdanger";
            error=true;
        }
        if (contactEmail.value === ""){
          //  errorText += "email\n";
          document.getElementById("errorMail").className="alert alertdanger";
          error=true;
        } else
        {
            var email = contactEmail.value;
            var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
            if(regex.test(email)===false)
            {
            //    errorText += "błędny email\n";
             document.getElementById("errorMail").className="alert alertdanger";
               error=true;
            }
   }
    }
    function checkName(){
        var contactName = document.getElementById("imie");
        if (contactName.value === ""){
          //  errorText += "imię\n";
          document.getElementById("imiediv").className="has-error";
          document.getElementById("errorName").className="alert alertdanger";
         
          //  error=true;
        }
        else{
            document.getElementById("imiediv").className="has-success";
            document.getElementById("errorName").className="hide";
        }
    }
    function checkSubName(){
        var contactSubName = document.getElementById("nazwisko");
        if (contactSubName.value === ""){
           // errorText += "nazwisko\n";
            document.getElementById("errorSubName").className="alert alertdanger";
            document.getElementById("nazwiskodiv").className="has-error";
         //   error=true;
        }
        else{
            document.getElementById("errorSubName").className="hide";
            document.getElementById("nazwiskodiv").className="has-success";
           // error=false;
        }
    }
    function checkEmail(){
        var contactEmail = document.getElementById("email");
        if (contactEmail.value === ""){
          //  errorText += "email\n";
          document.getElementById("errorMail").innerHTML = "Podanie email-u jest wymagane!";
          document.getElementById("errorMail").className="alert alertdanger";
          document.getElementById("emaildiv").className="has-error";
          
        //  error=true;
        } else
            
        {
            var email = contactEmail.value;
            var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
            if(regex.test(email)===false)
            {
            //    errorText += "błędny email\n";
            document.getElementById("errorMail").className="alert alertdanger";
             document.getElementById("errorMail").innerHTML = "Nie poprawny format e-mailu";
             document.getElementById("emaildiv").className="has-error";
              // error=true;
            }
            else{
            document.getElementById("errorMail").className="hide";
            document.getElementById("emaildiv").className="has-success";
            }
        }
    }
        
    
   