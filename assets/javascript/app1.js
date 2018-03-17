$.ajax({
    url: "https://api.rss2json.com/v1/api.json",
    method: 'GET',
    dataType: 'json',
    data: {
        rss_url: "https://libwww.freelibrary.org/rss/eventsrss.cfm?type=&series=&location=&department=&age=School%20Age",
        api_key: "bujxzxofzqcymrhkxox0kdfkswrgnmdfliocuttt", // put your api key here
        count: 50
    }
}).done(function (response) {
if(response.status != 'ok'){ throw response.message; }

console.log('====== ' + response.feed.title + ' ======');

results = response.items 

for (var i = 0; i < results.length; i++) {

    var event = results[i].title; 
    console.log(event);     

}

}); 