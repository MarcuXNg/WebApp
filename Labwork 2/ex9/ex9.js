var lastt, tdiff;
$( "p" ).click(function( event ) {  if (lastt) {
  tdiff = event.timeStamp - lastt;
  $( "div" ).append( "Time since last event: " + tdiff + "<br>" );
   } 
   else {
     $( "div" ).append( "<br>Click again.<br>" );
	   }
	 lastt = event.timeStamp;
	});