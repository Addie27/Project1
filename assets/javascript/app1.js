
var queryURL = "https://www.udacity.com/public-api/v0/courses";
var courseInfo;

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response); 
    var results = response.courses;
    console.log(results);
    console.log(results[0].title); 

        for (var i = 0; i < results.length; i++) {

            var courseDiv = $("<div class='item'>");
            var courseInfo = $("<div><br>");
            var p = $("<p>");

            var title = results[i].title; 
            var link = results[i].homepage;
            var summary = results[i].summary;  

            courseInfo
                .append(p.text(title + " " + link + " " + summary))

            courseDiv.append(courseInfo);

            $("#udacityCourses").prepend(courseDiv);

        };//for loop close
});//ajax call end

