'use strict';

$(document).ready(function () {

	// post delete request
	$('#delete-todo').on('click', function (e) {
		var id = $(e.target).attr('data-id');
		$.ajax({
			type: 'GET',
			url: '/todo/delete/' + id,
			success: function success(response) {
				window.location.href = '/';
			},
			error: function error(_error) {
				console.log(_error.responseText);
			}
		});
	});

	// scroll header
	var scrollHeader = function scrollHeader() {
		var header = document.querySelector('.header__bg');
		window.addEventListener('scroll', function () {
			var topOffset = document.querySelector('body').scrollTop;
			header.setAttribute('style', 'left:' + -(topOffset / 10) + '%;');
		});
	};

	// typed
	var typeIntro = function typeIntro() {
		$(".typed").typed({
			strings: ["enter tasks", "edit tasks", "remove tasks"],
			typeSpeed: 100,
			backDelay: 900,
			loop: true
		});
	};

	// init functions
	scrollHeader();
	typeIntro();
});