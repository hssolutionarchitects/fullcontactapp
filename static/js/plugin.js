$(document).ready(function() {
  hsp.init({
    useTheme: true
  });
  hsp.bind('sendtoapp', function(message) {
    sendToAppHandler(message);
  });

  function sendToAppHandler(message) {
    if (message.post.network == 'TWITTER') {
      // Get username from Twitter then show popup
      $.get('/api/tweet/' + message.post.id, function(data) {
        var username = "username=" + encodeURIComponent(data[0].user.screen_name);
        var handler = 'https://' + window.location.hostname + '/fullcontact_plugin_handler.html?' + username;
        hsp.showCustomPopup(handler, 'Full Contact Information');
      });

    } else {
      var username = "username=" + encodeURIComponent(message.post.user.username);
      var handler = 'https://' + window.location.hostname + '/fullcontact_plugin_handler.html?' + username;
      hsp.showCustomPopup(handler, 'Full Contact Information');
    }
  }
});
