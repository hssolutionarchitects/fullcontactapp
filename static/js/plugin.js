$(document).ready(function() {
    hsp.init({
        useTheme: true
    });
    hsp.bind('sendtoapp', function(message){
      sendToAppHandler(message);
   });

   function sendToAppHandler(message) {
     var username = "username=" + encodeURIComponent(message.post.user.username);

     var handler = publicHostname + '/hs_plugin_handler.html?' + username;

     hsp.showCustomPopup(handler, 'Full Contact Information');
   }
});
