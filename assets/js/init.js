	$(document).ready(function () {
		//инициализация параллакса
		$('.parallax').parallax();
		//прописываем правило для кнопки, чтобы открывала модальное окно с правилами
		$('label a.modal-trigger').on('click', function () {
			$('#eula_modal').openModal();
		});
		//скроллы по якорям
		$('a').on('click', function () {
			var targetSection = $(this).attr("href");
			$(targetSection).velocity('scroll', {
				queue: false,
				duration: '1400',
				offset: -100
			});
			//закрытие модального окна
			if ($(this).hasClass('modal-close')) {
				(function () {
					$(this).closeModal();
				});
			}
		});
		$('.diagnos').on('mouseenter', function(){
				$(this).next('.diagnos-tooltip').removeClass('hide').velocity({
					duration: 500,
					easing: "swing",
					opacity: 1
				});
			});
		$('.diagnos').on('mouseleave', function(){
				$(this).next('.diagnos-tooltip').velocity({
					duration: 500,
					easing: "swing",
					opacity: 0
				}).addClass('hide');
			});

			//слайдеры
			var feedback = new Swiper('.feedback', {
				autoHeight: false,
				slidesPerView: 3,
				nextButton: '.feedback-next',
				prevButton: '.feedback-prev',
				spaceBetween: 30,
				roundLengths: true,
				breakpoints: {
					320: {
				centeredSlides: true,
						slidesPerView: 1,
						spaceBetween: 0,
						autoplay: 5000
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 0,
						autoplay: 5000
					},
					1024: {
						slidesPerView: 2,
						spaceBetween: 0,
						autoplay: 5000
					},
					1025: {
						slidesPerView: 3,
						spaceBetween: 0,
						autoplay: 5000
					}
				},
				loop: true,
				autoplayDisableOnInteraction: true,
				observer: true,
				timeout: 5000
			});
			var clinics = new Swiper('.clinics', {
				autoHeight: true,
				slidesPerView: 3,
				nextButton: '.clinics-next',
				prevButton: '.clinics-prev',
				spaceBetween: 30,
				breakpoints: {
					320: {
				centeredSlides: true,
						slidesPerView: 1,
						spaceBetween: 0
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 0
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 0
					}
				},
				loop: true,
				autoplayDisableOnInteraction: true,
				observer: true,
				timeout: 5000
			});
			var doctors = new Swiper('.doctors', {
				autoHeight: true,
				slidesPerView: 4,
				nextButton: '.doctors-next',
				prevButton: '.doctors-prev',
				spaceBetween: 10,
				breakpoints: {
					320: {
				centeredSlides: true,
						slidesPerView: 1,
						spaceBetween: 0
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 0
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 0
					}
				},
				loop: true,
				autoplayDisableOnInteraction: true,
				observer: true,
				timeout: 5000
			});
		//			боковое меню мобильной версии
		$('.button-collapse').sideNav({
			//menuWidth: 300, // Default is 240
			edge: 'right', // Choose the horizontal origin
			closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
		});
	});
