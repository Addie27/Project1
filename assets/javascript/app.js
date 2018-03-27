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

 firebase.initializeApp(config);

 // AJAX Call for Eventbrite
 const eventbriteSettings = {
     url: 'https://www.eventbriteapi.com/v3/events/search/',
     data: { token: 'NDTQNEDOWJ64E2QLDX2O', sort_by: 'date', 'location.address': 'Philadelphia', q: 'Technology', include_all_series_instances: "on", formats: "1,2,3,9,100" },
     crossDomain: true,
     method: 'GET'
 }


 $.ajax(eventbriteSettings).done(function(eventObject) {
     // All SF Area Events (Paginated by 50. Will only return first page.)
     eventbriteEvents = eventObject.events;
     // Create a new array of events whose venue is specifically in SF
     console.log(eventObject.events);
     //  const phlEvents = events.filter(function(event) {
     //      return event.venue.address.city === 'Philadelphia';
     //  });

     var display = $("#eventbrite");
     var p = $("<p>");
     // Empty display div...
     // ...for each item in the category...
     for (i = 0; eventbriteEvents; i++) {
         // ...append the item to the display div.
         
         
             $("#eventbrite-content").append(eventbriteEvents[i].name.html)
             $("#eventbrite-content").append(eventbriteEvents[i].description.html)
             $("#eventbrite-content").append(p.text(eventbriteEvents[i].location))
             $("#eventbrite-content").append(p.text(eventbriteEvents[i].date))
             $("#eventbrite-content").append(p.text(eventbriteEvents[i].url))
    }
 })

 
 const eventbriteSettingsscience = {
    url: 'https://www.eventbriteapi.com/v3/events/search/',
    data: { token: 'NDTQNEDOWJ64E2QLDX2O', sort_by: 'date', 'location.address': 'Philadelphia', q: 'Science', include_all_series_instances: "on", formats: "1,2,3,9,100" },
    crossDomain: true,
    method: 'GET'
}


$.ajax(eventbriteSettingsscience).done(function(eventObject) {
    // All SF Area Events (Paginated by 50. Will only return first page.)
    eventbriteEvents = eventObject.events;
    // Create a new array of events whose venue is specifically in SF
    console.log(eventObject.events);
    //  const phlEvents = events.filter(function(event) {
    //      return event.venue.address.city === 'Philadelphia';
    //  });

    var display = $("#eventbrite");
    var p = $("<p>");
    // Empty display div...
    // ...for each item in the category...
    for (i = 0; eventbriteEvents; i++) {
        // ...append the item to the display div.
        
        
            $("#eventbrite-science").append(eventbriteEvents[i].name.html)
            $("#eventbrite-science").append(eventbriteEvents[i].description.html)
            $("#eventbrite-science").append(p.text(eventbriteEvents[i].location))
            $("#eventbrite-science").append(p.text(eventbriteEvents[i].date))
            $("#eventbrite-science").append(p.text(eventbriteEvents[i].url))
   }
})


     

 // On click events.
//  $(document).on("click", "#science", display(scienceEvents));
//  $(document).on("click", "#technology", display(techEvents));
//  $(document).on("click", "#engineering", display(engineeringEvents));
//  $(document).on("click", "#math", display(mathEvents));