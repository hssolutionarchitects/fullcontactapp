$(document).ready(function() {
     function getQuerystring (key) {
        key = key.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
        var regex = new RegExp("[\\?&]"+key+"=([^]*)");
        var qs = regex.exec(location.search);
        return qs[1];
      }
var username = decodeURIComponent(getQuerystring('username'))

      $.get( "/api/contact/" + username, function( data ) {
        $( ".results" ).html( data );
      });
});
