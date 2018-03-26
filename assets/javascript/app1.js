
var queryURL = "https://www.udacity.com/public-api/v0/courses";
var courseInfo;
var array = [];

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);

    var results = response.courses;
    console.log(results[0].title);
    console.log(results[1].title);
    console.log(results[2].title);

    
    var searchField = "title";
    var searchVal = "programming";
    for (var i = 0; i < results.length; i++) {
        if (results[i][searchField] == searchVal) {
            array.push(results[i]);
            console.log(array); 
        }
    }

    // for (var i = 0; i < results.length; i++) {

    //     var courseDiv = $("<div class='course'>");
    //     var courseInfo = $("<a target='_blank'><br>");
    //     var p = $("<p>");

    //     var title = results[i].title;
    //     var link = results[i].homepage;
    //     var summary = results[i].summary;

    //     courseInfo.attr({
    //         "href": link,
    //     });

    //     courseInfo
    //         .append(p.text("Title: " + title));


    //     courseDiv.append(courseInfo);

    //     $("#udacityCourses").prepend(courseDiv);

    // };//for loop close

});//ajax call end



