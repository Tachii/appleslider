/**
 * @author tachi
 */
$(document).ready(function(){
	var totalWidth = 0;
	var positions = new Array();
	
	$('#slides .slide').each(function(i){
		//Get Slider Width
		positions[i] = totalWidth;
		totalWidth += $(this).width();
		
		//Check width
		if(!$(this).width()){
			alert('Please add a width to your images');
			return false;
		}
	});
	
	//Set Width
	$('#slides').width(totalWidth);
	
	// Menu item Click
	$('#menu ul li a').click(function(e){
		//Remove Active Class
		$('li.product').removeClass('active').addClass('inactive');
		//Add Active Class to parent
		$(this).parent().addClass('active');
	
		var pos = $(this).parent().prevAll('.product').length;
		
		$('#slides').stop().animate({marginLeft:-positions[pos]+'px'}, 450);
		
		//Preven Default Action
		e.preventDefault();
		
		//Stop Aoutscroll
		if(!autoScroll) clearInterval(itvl);
	});
	
	//Make First Image Active
	$('#menu ul li.product:first').addClass('active').siblings().addClass('inactive');
	
	//AutoScroll Var
	var current = 1;
	function autoScroll(){
		if(current == -1) return false;
		
		$('#menu ul li a').eq(current%$('#menu ul li a').length).trigger('click',[true]);
		current++;
	}
	
	//Duration for Autoscroll
	var duration = 3;
	var itvl = setInterval(function(){
		autoScroll();
	},duration*1000);
});
