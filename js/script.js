/**
 * @author tachi
 */
$(document).ready(function(){
	var totalWidth = 0;
	var positions = new Array();
	
	$('#slides .slide').each(function(i){
		$positions[i] = totlaWidth;
		totalWidth += $(this).width();
		
		if(!$(this).width()){
			alert('Please add a width to your images');
			return false;
		}
	});
	
	$('#slides').width(totalWidth);
	
	$('#menu ul li a').click(function(e, keepScroll){
		$('li.product').removeClass('active').addClass('inactive');
	});
});
