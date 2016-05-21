$(document).ready(function(){

	var headerTitle = $('#title');

	$('#navbar-toggle').on('click', function(){
		$('.nav-list').slideToggle();
	});

    $(window).on('resize', function(){
        var nav = $('nav ul');
        $(nav).css('display', '');
    });	
});