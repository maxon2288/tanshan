
$(document).ready(function () {
	$("body").css({'visibility': "visible", "opacity": "1"});
	popup ();

	var swiper = new Swiper('.slider', {
		spaceBetween: 10,
		navigation: {
			nextEl: '.slider-next',
			prevEl: '.slider-prev',
		},
	});

	$(".html img").each(function() {
		$(this).wrap("<figure></figure>");
	});

	$(".sticky-block").stick_in_parent();

	$(document).ready(function() {
		$('select').niceSelect();
	});

	$(".tabs__container").each(function() {
		$('.tabs__tab').click(function(e) {
			e.preventDefault();
			var it = $(this);
			var href = it.attr("href");
			it.closest(".tabs__tabs").find(".tabs__tab").removeClass("active");
			it.addClass("active");
			it.closest(".tabs__container").find(".tabs__block").removeClass("active");
			it.closest(".tabs__container").find("." + href).addClass('active');
		});
	});

	$('.form').each(function() {
        var it = $(this);
         it.validate({
			rules: {
				number: {
					digits: true,
					required: false,
					maxlength: 4,
				}
			},

			errorPlacement: function (error, element) {
			},

			submitHandler: function() {
				$.ajax({
					success: function(){
						var rowId = it.closest('tr').data("id");
					}
				});
			},  
         });
	 });

	 $(".tabs__tab:first-child").trigger("click");

	 $(document).on('click', '.number-input-container .number-increment', function(e) {
        let $input = $(this).siblings('.number-input'),
            val = parseInt($input.val()),
            max = parseInt($input.attr('max')),
            step = parseInt($input.attr('step'));
		let temp = val + step;
		$input.val(temp <= max ? temp : max);
		$(".number-result").text($input.val());
    });
    $(document).on('click', '.number-input-container .number-decrement', function(e) {
        let $input = $(this).siblings('.number-input'),
            val = parseInt($input.val()),
            min = parseInt($input.attr('min')),
            step = parseInt($input.attr('step'));
		let temp = val - step;
		$input.val(temp >= min ? temp : min);
		$(".number-result").text($input.val());
    });
	
	$(".m-bg-cont").each(function() {
		var it = $(this);
		var src = it.find("img").attr("src");
		it.css("background-image", "url(" + src + ")");
	});

	var galleryThumbs = new Swiper('.prji__slider-thumb', {
		spaceBetween: 30,
		slidesPerView: 4,
	  });
	  var galleryTop = new Swiper('.prji__slider-top', {
		spaceBetween: 10,
		thumbs: {
		  swiper: galleryThumbs
		}
	  });
	
	$('.collapsible1').collapsible();
})