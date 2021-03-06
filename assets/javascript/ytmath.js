var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player1;
      var player2; 
      var player3;
      var player4; 

     function onYouTubeIframeAPIReady() {
      
        player1 = new YT.Player('player1', {
          height: '168',
          width: '300',
          playerVars: { 'listType': 'search', 'list' : 'math tutorials', 'autoplay' : 0 },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        })
        

        player2 = new YT.Player('player2', {
          height: '168',
          width: '300',
          playerVars: { 'listType': 'search', 'list' : 'physics', 'autoplay' : 0 },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        })

        player3 = new YT.Player('player3', {
          height: '168',
          width: '300',
          playerVars: { 'listType': 'search', 'list' : 'discrete math', 'autoplay' : 0 },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        })

        player4 = new YT.Player('player4', {
          height: '168',
          width: '300',
          playerVars: { 'listType': 'search', 'list' : 'algorithms', 'autoplay' : 0 },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        })
      };

    
      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.stopVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 1000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }

 

