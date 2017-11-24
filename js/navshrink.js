$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 70) {
    	$('#hclr').addClass('shrink');
    }
    else {
    $('#hclr').removeClass('shrink');
    }
  });
});