
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

            courseDiv.append(p.text(results[i].title)); 

            // courseDiv.append(p.text(results[i].title) + " " + p.text(results[i].homepage) + " " + p.text(results[i].summary) + " " + p.text(results[i].level) + " " + p.text(results[i].expected_duration) + " " + results[i].expected_duration_unit)

            $("#udacityCourses").prepend(courseDiv);

        };//for loop close
});//ajax call end

