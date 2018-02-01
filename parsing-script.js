<script>

	/* 	looping iterations to quickly parse the JSON data.	*/
	
	for (i=0; i < 400; i++)
	{
	for (n=0; n < 400; n++){
	document.write('<div class='+'"w3-quarter w3-margin-bottom"'+'>');
	//document.write('<img src='+jcontent[i].groups[n].thumbnail.href+' style='+'"height: 50%; width: 88%;"'+'>'+'</img>'); /* close up images */
	
	document.write('<div class='+'"container"'+'>');
	
	document.write('<img src='+jcontent[i].groups[n].thumbnail.href+ ' style='+'"height: 50%; width: 88%;""'+'>' + '</img>');
	
	document.write('<div class='+'"text-block"'+'> <h4>'+(n+1)+'.</h4> <p>'+jcontent[i].groups[n].name+'</p> </div>');
	
	document.write('<button class='+'"w3-button w3-white w3-padding-large w3-hover-black"'+' onclick='+'"document.getElementById('+'"pop-up"'+').style.display='+'"block""'+'><i class='+'"fa fa-cart-plus"'+' style='+''+'></i>  View </button>');
	
	//document.write('<li>'+'<img src='+"'"+jcontent[i].groups[n].images[i].href+"'"+ '>'+'</img>'+'</li>'); /* Other close up images */
	//document.write('<a href='+'#'+'>'+'<li>'+jcontent[i].groups[n].name+'</li>'+'</a>');
	document.write('</div>');
	document.write('</div>');
	//document.write('<h3>'+jcontent[i].groups[1].links+'</h3>');
	//document.write('<h3>'+'$'+jcontent[i].groups[n].priceRange.regular.low+' - '+jcontent[i].groups[n].priceRange.regular.high+'</h3>'); /* prices query */
	//document.write('<h3>'+'$'+jcontent[i].groups[1].priceRange.regular.low+'</h3>');
	//document.write('<h3>'+'$'+jcontent[i].groups[n].priceRange.selling.low+' - '+jcontent[i].groups[n].priceRange.selling.high+'</h3>');	/* other prices */	
	//document.write('<h3>'+jcontent[i].groups[1].thumbnail.href+'</h3>');
	
	}
	 
	}
	
</script>