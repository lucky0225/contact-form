//$() -> jquery lib reference
$(document).ready(function() {
    function init() {
        //if name in #name (id in html doc) -> put name into localStorage
        if (localStorage["name"]) {
            $('#name').val(localStorage["name"]);
        }
        if (localStorage["email"]) {
            $('#email').val(localStorage["email"]);
        }
        if (localStorage["message"]) {
            $('#message').val(localStorage["message"]);
        }
    }
    init();
});

//change event function
//check if data has been edited -> update localStorage
$('.stored').change(function () {
    localStorage[$(this).attr('name')] = $(this).val();
});