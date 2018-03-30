// Initialize Firebase
var config = {
    apiKey: "AIzaSyCotD26tDnhFlwzBrUMUP8IU0L3CPESG5E",
    authDomain: "project1-7d587.firebaseapp.com",
    databaseURL: "https://project1-7d587.firebaseio.com",
    projectId: "project1-7d587",
    storageBucket: "project1-7d587.appspot.com",
    messagingSenderId: "843607985029"
};

var eventbriteEvents;
var scienceEvents;
var techEvents;
var engineeringEvents;
var mathEvents;
var course;

firebase.initializeApp(config);

// AJAX Call for Eventbrite
const eventbriteSettings = {
    url: 'https://www.eventbriteapi.com/v3/events/search/',
    data: { token: 'NDTQNEDOWJ64E2QLDX2O', sort_by: 'date', 'location.address': 'Philadelphia', q : 'science', subcategories : "2002", include_all_series_instances: "on", formats: "1,2,3,9,100" },
    crossDomain: true,
    method: 'GET'
}

$.ajax(eventbriteSettings).done(function(eventObject) {
    // All SF Area Events (Paginated by 50. Will only return first page.)
    eventbriteEvents = eventObject.events;
    // Create a new array of events whose venue is specifically in SF
    console.log(eventbriteEvents);
    //  const phlEvents = events.filter(function(event) {
    //      return event.venue.address.city === 'Philadelphia';
    //  });
    display();
})

function display() {

    // ...for each item in the category...
    for (var i = 0; eventbriteEvents[i]; i++) {
        // ...append the item to the display div.
        var newDiv = $("<div class='event'>");
        var p = $("<p>");

        var link = (eventbriteEvents[i].url);
        course =  $("<a target='_blank' class='event'><br>");

       

       course.attr({
           "href": link,
       })
            // .append(p.text(eventbriteEvents[i].description))
            // .append(p.text(eventbriteEvents[i].location))
            // .append(p.text(eventbriteEvents[i].date))
            course.append(eventbriteEvents[i].name.html)

            $("#eventbrite-science").append(course); 
    }

};


