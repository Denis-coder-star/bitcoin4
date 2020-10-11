$(document).ready(function(event){
	$('.autor-button').click(function(event){
		$('.autor-button').css('background','#17335E');
		$('.custom-button').css('background','#334D75');
		$('.customer-menu').css('display','none');
		$('.autor-menu').css('display','block');
	});
	$('.custom-button').click(function(event){
		$('.custom-button').css('background','#17335E');
		$('.autor-button').css('background','#334D75');
		$('.autor-menu').css('display','none');
		$('.customer-menu').css('display','block');
	});
	$('.account').click(function(event){
		$('.personal-dropdown').toggleClass('personal-dropdown-active');
		$('.account').toggleClass('account-active');
		$('.autor-menu').css('display','none');
		$('.customer-menu').css('display','block');
		$('.custom-button').css('background','#17335E');
		$('.autor-button').css('background','#334D75');
	});
	$('.flag-russia').click(function(event){
		$('.country').toggleClass('country-active');
	})
	$('.info-drop-down').click(function(event){
		$('.info-down').toggleClass('info-down-active');
		$('.down-arrow-one').toggleClass('down-arrow-active');
		$('.info-drop-down').toggleClass('info-drop-down-active');
	});
	$('.down-list-one').click(function(event){
		$('.info-group p').text('Пункт 1');
	});
	$('.down-list-two').click(function(event){
		$('.info-group p').text('Пункт 2');
	});
	$('.down-list-three').click(function(event){
		$('.info-group p').text('Пункт 3');
	});
	$('.data-drop-down').click(function(event){
		$('.data-down').toggleClass('data-down-active');
		$('.down-arrow-two').toggleClass('down-arrow-active');
		$('.projects-data').toggleClass('projects-data-active');
	});
	$('.data-list-one').click(function(event){
		$('.data-group p').text('Пункт 1');
	});
	$('.data-list-two').click(function(event){
		$('.data-group p').text('Пункт 2');
	});
	$('.data-list-three').click(function(event){
		$('.data-group p').text('Пункт 3');
	});
});