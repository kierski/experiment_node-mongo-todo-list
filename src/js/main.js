$(document).ready(() => {

	// post delete request
	$('#delete-todo').on('click', (e) => {
		const id = $(e.target).attr('data-id');
		$.ajax({
			type: 'GET',
			url: '/todo/delete/' + id,
			success: (response) => {
				window.location.href = '/';
			},
			error: (error) => {
				console.log(error.responseText);
			}
		});
	});

	// scroll header
	const scrollHeader = () => {
		const header = document.querySelector('.header__bg');
		window.addEventListener('scroll', function () {
			const topOffset = document.querySelector('body').scrollTop;
			header.setAttribute('style', 'left:' + -(topOffset / 10) + '%;');
		});
	};

	// typed
	const typeIntro = () => {
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
