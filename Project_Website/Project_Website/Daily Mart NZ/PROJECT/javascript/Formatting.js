// hovering animation for products
$(document).ready(function () {
    $('.col-md-4').hover(
        // trigger when mouse hover
        function () {
            $(this).animate({
                marginTop: "-=1%",
            }, 200);
        },

        // trigger when mouse out
        function () {
            $(this).animate({
                marginTop: "0%",
            }, 200);
        }
    );
});



//word count for contact us form
i = 0;
$(document).ready(function () {
    $("textarea").keyup(function () {
        $("span").text(i += 1);
    });

});


//email footer
$(document).ready(function () {

    $("#footer-signup").click(function () {

        if ($("#footer-email").val() !== "") {
            var signupemail = $("#footer-email").val();
            /*check email validity*/
            function isEmail(email) {
                var EmailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                return EmailRegex.test(email);
            }
            if ((isEmail(signupemail))) {
                /*hides input field and button if email is valid*/
                $("#footer-email").hide();
                $("#footer-signup").hide();
                /*displays thank you message*/
                $("#thankyoumessage").show();
                $("#errormessage").hide();
            }
            else {
                $("#errormessage").show();
            }
        }
    });
});



//checks if search input field is empty or not in home page
function showSearch() {
     if ($("#searchItem").val() !== "") {
        alert("Search successful");
      } else {
        alert("Search unsuccessful");
      }
}


const list = document.getElementsByClassName("list")[0];
const newItem = document.getElementById("newItem");
const inputList = document.getElementById("inputList");

/*to delete item after pressing clear*/
function deleteItem() {
    newItem.innerHTML = "";
}

/*add item after pressing the plus sign */
function addItem() {
    var text = document.createElement("text");
    text.innerHTML = "&#9679;" + " " + inputList.value + "<br>";
    console.log(inputList.value);

    /*to create a line when the user clicks on the added item */
    text.addEventListener("click", function () {
        text.style.textDecoration = "line-through";
    })

    newItem.insertAdjacentElement("beforeend", text);
    /*clears the input field*/
    inputList.value = "";
}


