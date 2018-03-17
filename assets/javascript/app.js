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
 const phlSettings = {
     url: 'https://www.eventbriteapi.com/v3/events/search/',
     data: { token: 'NDTQNEDOWJ64E2QLDX2O', sort_by: 'date', 'location.address': 'Philadelphia', categories: "102,120", include_all_series_instances: "on", formats: "1,2,3,9,100" },
     crossDomain: true,
     method: 'GET'
 }

 $.ajax(phlSettings).done(function(eventObject) {
     // All SF Area Events (Paginated by 50. Will only return first page.)
     eventbriteEvents = eventObject.events;
     // Create a new array of events whose venue is specifically in SF
     console.log(eventbriteEvents);
     //  const phlEvents = events.filter(function(event) {
     //      return event.venue.address.city === 'Philadelphia';
     //  });
 });