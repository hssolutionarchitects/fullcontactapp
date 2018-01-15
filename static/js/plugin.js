$(document).ready(function() {
  hsp.init({
    useTheme: true
  });
  hsp.bind('sendtoapp', function(message) {
    sendToAppHandler(message);
  });

  /*
    TODO: Currently two places where we show the popup in order to ensure
    that Twitter data has been retrieved. Is there a better way?
  */
  function sendToAppHandler(message) {
    if (message.post.network == 'TWITTER') {

      $.get('/api/tweet/' + message.post.id, function(data) {
        console.log(data);
        // TODO: screen_name or name?
        var username = "username=" + encodeURIComponent(data[0].user.screen_name);
        console.log("Username: " + username);

        var handler = 'https://' + window.location.hostname + '/fullcontact_plugin_handler.html?' + username;
        console.log(handler);

        hsp.showCustomPopup(handler, 'Full Contact Information');
      });

    } else {
      var username = "username=" + encodeURIComponent(message.post.user.username);
      console.log("Username: " + username);

      var handler = 'https://' + window.location.hostname + '/fullcontact_plugin_handler.html?' + username;
      console.log(handler);

      hsp.showCustomPopup(handler, 'Full Contact Information');
    }
  }
});
