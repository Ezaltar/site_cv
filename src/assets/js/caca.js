function UserAction() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:3000/api/users", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
    var response = JSON.parse(xhttp.responseText);
}





//$('button').on('click', function () {
//    $(function () {
//        $.getJSON('GET https://www.googleapis.com/customsearch/v1?key=http://localhost:3000/api/users&cx=017576662512468239146:omuauf_lfve&q=lectures', function (data) {
//            console.log(data);
//        });
//    });
//});