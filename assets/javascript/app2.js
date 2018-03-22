// Example 1: Use method-specific function
var request = gapi.client.youtube.channels.list({'part': 'snippet', 'mine': 'true'});

// Execute the API request.
request.execute(function(response) {
  console.log(response);
});


// Example 2: Use gapi.client.request(args) function
var request = gapi.client.request({
  'method': 'GET',
  'path': /youtube/v3/channels,
  'params': {'part': 'snippet', 'mine': 'true'}
});
// Execute the API request.
request.execute(function(response) {
  console.log(response);
});