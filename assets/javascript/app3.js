var queryURL = "https://www.youtube.com/player_api";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response); 
  
});//ajax call end