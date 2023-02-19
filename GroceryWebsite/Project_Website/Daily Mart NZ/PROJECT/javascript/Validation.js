//validate contact us form
function validateForm() {
    let fName = document.forms["contactUs"]["fName"].value;
    let lName = document.forms["contactUs"]["lName"].value;
    let email = document.forms["contactUs"]["email"].value;
    let phone = document.forms["contactUs"]["phone"].value;
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let message = document.forms["contactUs"]["message"].value;

    var error_message = document.getElementById("error_message");

    var text;


    if (fName.length < 2) {
        text = "Please enter a valid first name";
        error_message.innerHTML = text; //displays the error
        return false; // prevent form from being submitted
    }


    if (lName.length < 2) {
        text = "Please enter a valid last name";
        error_message.innerHTML = text;
        return false;
    }

    if (email.indexOf("@") == -1) {
        text = "Please enter valid email";
        error_message.innerHTML = text;
        return false; 
    }

    if ((!phone.match(phoneno))) {
        text = "Please enter valid phone number";
        error_message.innerHTML = text;
        return false; 
    }

    if (message.length < 10) {
        text = "Please enter more than 10 characters for message";
        error_message.innerHTML = text;
        return false; 
    }   

    alert("Form submitted. Thank you for reaching out to us!");
    return true;   
}


//validate Modal
function validateModal() {
    let firstName = document.forms["newModalForm"]["firstName"].value;
    let lastName = document.forms["newModalForm"]["lastName"].value;
    let male = document.getElementById("male");
    let female = document.getElementById("female");
    let memail = document.forms["newModalForm"]["memail"].value;
    let mpassword = document.forms["newModalForm"]["mpassword"].value;
    let capital = /^(.*[A-Z].*)$/;
    let address = document.forms["newModalForm"]["address"].value;
    let mphone = document.forms["newModalForm"]["mphone"].value;
    var mphoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let checkBox = document.getElementById("checkBox");
    let error_message2 = document.getElementById("error_message2");

    var text;


    if (firstName.length < 2) {
        text = "Please enter a valid first name";
        error_message2.innerHTML = text;
        return false; // prevent form from being submitted
    }

    if (lastName.length < 2) {
        text = "Please enter a valid last name";
        error_message2.innerHTML = text;
        return false;
    }

    if (male.checked == false && female.checked == false) {
        text = "Please select your gender";
        error_message2.innerHTML = text;
        return false;
    }

    if (memail.indexOf("@") == -1) {
        text = "Please enter valid email";
        error_message2.innerHTML = text;
        return false;
    }

    if (mpassword.length === 0) {
        text = "Pasword cannot be blank";
        error_message2.innerHTML = text;
        return false;
    }

    if (mpassword.length < 6 || !mpassword.match(capital)) {
        text = "Please enter at least one capital letter and 6 or more characters";
        error_message2.innerHTML = text;
        return false;
    }

    if (address.length === 0) {
        text = "Address cannot be blank";
        error_message2.innerHTML = text;
        return false;
    }

    if (address.length < 6 || address.length >30) {
        text = "Please enter a valid address";
        error_message2.innerHTML = text;
        return false; 
    }


    if ((!mphone.match(mphoneno))) {
        text = "Please enter valid phone number";
        error_message2.innerHTML = text;
        return false;
    }

    if (checkBox.checked === false) {
        text = "Please check the Terms and Conditions";
        error_message2.innerHTML = text;
        return false;
    }

    alert("Registration successful. Welcome to Daily Mart NZ !");
    return true;

}