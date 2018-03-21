// $.ajax({
//     url: "https://api.rss2json.com/v1/api.json",
//     method: 'GET',
//     dataType: 'json',
//     data: {
//         rss_url: "https://libwww.freelibrary.org/rss/eventsrss.cfm?type=&series=&location=&department=&age=School%20Age",
//         api_key: "bujxzxofzqcymrhkxox0kdfkswrgnmdfliocuttt", // put your api key here
//         count: 50
//     }
// }).done(function (response) {
// if(response.status != 'ok'){ throw response.message; }

// console.log('====== ' + response.feed.title + ' ======');

// results = response.items 

// for (var i = 0; i < results.length; i++) {

//     var event = results[i].title; 
//     console.log(event);     

// }

// }); 

var queryURL = "https://www.udacity.com/public-api/v0/courses";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response); 
    var results = response.courses;
    console.log(results);
    console.log(results[0].title); 

        for (var i = 0; i < results.length; i++) {

            var courseDiv = $("<div class='course'>");
            var p = $("<p>");

            courseDiv.append(p.text(results[i].title))
            courseDiv.append(p.text(results[i].homepage))
            courseDiv.append(p.text(results[i].summary))
            courseDiv.append(p.text(results[i].level))
            courseDiv.append(p.text(results[i].expected_duration + " " + results[i].expected_duration_unit))

        };//for loop close
});//ajax call end

