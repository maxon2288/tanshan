
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

	 new WOW().init();

	 var path = $(".cycle-path").get(0);
	//  var pathlen = path.getTotalLength();
	
	if ($(".cycle__content").length > 0) {
		if ( $(window).scrollTop() >= $(".cycle__content").offset().top - window.innerHeight ) {
			$(".cycle__item").addClass("cycle-animation");
			$(".cycle-path").css({"animation": "cycleanim 10s linear", "opacity": 1});
			$(".cycle-circle").css({"animation": "circleAnim 10s linear", "opacity": 1});
			$(".cycle-circle").css("opacity", 1);
		}
		var a = 0;
		$(window).scroll(function(){
			if ( $(window).scrollTop() >= $(".cycle__content").offset().top - $(".cycle__content").innerHeight() ) {
				$(".cycle__item").addClass("cycle-animation");
				$(".cycle-path").css({"animation": "cycleanim 10s linear", "opacity": 1});
				$(".cycle-circle").css("opacity", 1);
			}
		});
	}
	if ($(".reason").length > 0) {
		var oTop = $('.reason__item').offset().top - window.innerHeight +150;
		if (a == 0 && $(window).scrollTop() > oTop) {
			$('.counter-value').each(function() {
			var $this = $(this),
				countTo = $this.attr('data-count');
				var floor = Math.floor(Math.random() * 20) + 20;
				var floor2 = floor * 100;
			$({
				countNum: $this.text()
			}).animate({
				countNum: countTo
				},
	
				{
	
				duration: floor2,
				easing: 'swing',
				step: function() {
					$this.text(Math.floor(this.countNum));
				},
				complete: function() {
					$this.text(this.countNum);
					//alert('finished');
				}
	
				});
			});
			a = 1;
		}	
		
		$(window).scroll(function() {
			
			var oTop = $('.reason__item').offset().top - window.innerHeight +150;
			if (a == 0 && $(window).scrollTop() > oTop) {
				$('.counter-value').each(function() {
					var $this = $(this),
					countTo = $this.attr('data-count');
					var floor = Math.floor(Math.random() * 20) + 20;
		var floor2 = floor * 100;
		console.log(floor2);
					$({
				countNum: $this.text()
			}).animate({
				countNum: countTo
				},
	
				{
	
				duration: floor2,
				easing: 'swing',
				step: function() {
					$this.text(Math.floor(this.countNum));
				},
				complete: function() {
					$this.text(this.countNum);
					//alert('finished');
				}
	
				});
			});
			a = 1;
		}
	
		});
	}

	$(".lightgallery").lightGallery(); 
	
	 


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