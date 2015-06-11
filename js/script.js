/**
 * @author tachi
 */
$(document).ready(function(){
	var totalWidth = 0;
	var positions = new Array();
	
	$('#slides .slide').each(function(i){
		//Get Slider Width
		$positions[i] = totlaWidth;
		totalWidth += $(this).width();
		
		//Check width
		if(!$(this).width()){
			alert('Please add a width to your images');
			return false;
		}
	});
	
	//Set Width
	$('#slides').width(totalWidth);
	
	$('#menu ul li a').click(function(e, keepScroll){
		//Remove Active Class
		$('li.product').removeClass('active').addClass('inactive');
		//Add Active Class to the upper sibling
	});
});
