window.onload = function(){
    var search = document.querySelector("button");
    //var responsefield = document.getElementById("text");
    search.addEventListener('click', handleClick);
    var httpRequest = new XMLHttpRequest();
    var url = "http://localhost:8080/superheroes.php"

    function handleClick(clickEvent){
        clickEvent.preventDefault();
        console.log("I GOT CLICKED")
        httpRequest.onreadystatechange = fetchingdata;
        httpRequest.open('GET', url);
        httpRequest.send();
    }
    
    function fetchingdata(){
        if (httpRequest.readyState === XMLHttpRequest.DONE){
            if (httpRequest.status === 200){
                var response = httpRequest.responseText;
                alert(response);
            }
            else{
                alert("Error: This resquest can not be deliver. Please try again.");
            }
        }
    }
}