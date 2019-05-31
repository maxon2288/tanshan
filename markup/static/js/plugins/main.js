
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
	var swiper = new Swiper('.lic-slider', {
		spaceBetween: 10,
		slidesPerView: 5,
		spaceBetween: 35,
		navigation: {
			nextEl: '.lic-next',
			prevEl: '.lic-prev',
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

	  if($(".sidebar").length > 0) {
		  var height2 = $('.sidebar__sub-menu').innerHeight();
		  $(".sidebar__sub-menu").css("height", 0);
	  
		  $(".open-menu span").click(function() {
			  if ($(this).hasClass("active")) {
				  $(".sidebar__sub-menu").css("height", 0);	
				  $(".sidebar__sub-menu").toggleClass("active");
				  $(this).removeClass("active");
				  $(".sidebar").toggleClass("active");
	  
			  } else {
				  $(this).addClass("active");
				  $(".sidebar__sub-menu").css("height", height2);	
				  $(".sidebar__sub-menu").toggleClass("active");
				  $(".sidebar").toggleClass("active");
			  }
		  })
	  }

	  $(".path-ok").each(function() {
		var path = document.querySelector('.path-ok:nth-child(1)'),
		length = path.getTotalLength();
		console.log(length);

	  });


	
if($("canvas").length > 0) {
	
	(function () {
	
		var unit = 100,
			canvas, context, canvas2, context2,
			height, width, xAxis, yAxis,
			draw;
	  
		/**
		 * Init function.
		 * 
		 * Initialize variables and begin the animation.
		 */
		function init() {
	  
			canvas = document.getElementById("sineCanvas");
			//Canvasのwidthをウィンドウの幅に合わせる
			canvas.width = document.documentElement.clientWidth;
			canvas.height = 700;
	  
			context = canvas.getContext("2d");
	  
			height = canvas.height;
			width = canvas.width;
	  
			xAxis = Math.floor(height/2);
			yAxis = 0;
	  
			draw();
		}
	  
		/**
		 * Draw animation function.
		 * 
		 * This function draws one frame of the animation, waits 20ms, and then calls
		 * itself again.
		 */
		function draw() {
	  
			// キャンバスの描画をクリア
			context.clearRect(0, 0, width, height);
	  
			//波を描画
			drawWave('rgba(7, 126, 195, 0.30)', 1, 3, 0);
	  
			// Update the time and draw again
			draw.seconds = draw.seconds + .009;
			draw.t = draw.seconds*Math.PI;
			setTimeout(draw, 30);
		};
		draw.seconds = 0;
		draw.t = 0;
	  
		/**
		* 波を描画
		* drawWave(色, 不透明度, 波の幅のzoom, 波の開始位置の遅れ)
		*/
		function drawWave(color, alpha, zoom, delay) {
			context.fillStyle = color;
			context.globalAlpha = alpha;
	  
			context.beginPath(); //パスの開始
			drawSine(draw.t / 0.5, zoom, delay);
			context.lineTo(width + 10, height); //パスをCanvasの右下へ
			context.lineTo(0, height); //パスをCanvasの左下へ
			context.closePath() //パスを閉じる
			context.fill(); //塗りつぶす
		}
	  
		/**
		 * Function to draw sine
		 * 
		 * The sine curve is drawn in 10px segments starting at the origin. 
		 * drawSine(時間, 波の幅のzoom, 波の開始位置の遅れ)
		 */
		function drawSine(t, zoom, delay) {
	  
			// Set the initial x and y, starting at 0,0 and translating to the origin on
			// the canvas.
			var x = t; //時間を横の位置とする
			var y = Math.sin(x)/zoom;
			context.moveTo(yAxis, unit*y+xAxis); //スタート位置にパスを置く
	  
			// Loop to draw segments (横幅の分、波を描画)
			for (i = yAxis; i <= width + 10; i += 3) {
				x = t+(-yAxis+i)/unit/zoom;
				y = Math.sin(x - delay)/3;
				context.lineTo(i, unit*y+xAxis);
			}
		}
	
			
	  
		init();
		  
	  })();
		
	(function () {
	
		var unit = 100,
			canvas, context, canvas2, context2,
			height, width, xAxis, yAxis,
			draw;
	  
		/**
		 * Init function.
		 * 
		 * Initialize variables and begin the animation.
		 */
		function init() {
	  
			canvas = document.getElementById("sineCanvas2");
			//Canvasのwidthをウィンドウの幅に合わせる
			canvas.width = document.documentElement.clientWidth;
			canvas.height = 900;
	  
			context = canvas.getContext("2d");
	  
			height = canvas.height;
			width = canvas.width;
	  
			xAxis = Math.floor(height/2);
			yAxis = 0;
	  
			draw();
		}
	  
		/**
		 * Draw animation function.
		 * 
		 * This function draws one frame of the animation, waits 20ms, and then calls
		 * itself again.
		 */
		function draw() {
	  
			// キャンバスの描画をクリア
			context.clearRect(0, 0, width, height);
	  
			//波を描画
			drawWave('rgba(7, 126, 195, 0.30)', 1, 3, 0);
	  
			// Update the time and draw again
			draw.seconds = draw.seconds + .009;
			draw.t = draw.seconds*Math.PI;
			setTimeout(draw, 20);
		};
		draw.seconds = 0;
		draw.t = 0;
	  
		/**
		* 波を描画
		* drawWave(色, 不透明度, 波の幅のzoom, 波の開始位置の遅れ)
		*/
		function drawWave(color, alpha, zoom, delay) {
			context.fillStyle = color;
			context.globalAlpha = alpha;
	  
			context.beginPath(); //パスの開始
			drawSine(draw.t / 0.5, zoom, delay);
			context.lineTo(width + 10, height); //パスをCanvasの右下へ
			context.lineTo(0, height); //パスをCanvasの左下へ
			context.closePath() //パスを閉じる
			context.fill(); //塗りつぶす
		}
	  
		/**
		 * Function to draw sine
		 * 
		 * The sine curve is drawn in 10px segments starting at the origin. 
		 * drawSine(時間, 波の幅のzoom, 波の開始位置の遅れ)
		 */
		function drawSine(t, zoom, delay) {
	  
			// Set the initial x and y, starting at 0,0 and translating to the origin on
			// the canvas.
			var x = t; //時間を横の位置とする
			var y = Math.sin(x)/zoom;
			context.moveTo(yAxis, unit*y+xAxis); //スタート位置にパスを置く
	  
			// Loop to draw segments (横幅の分、波を描画)
			for (i = yAxis; i <= width + 10; i += 3) {
				x = t+(-yAxis+i)/unit/zoom;
				y = Math.sin(x - delay)/2;
				context.lineTo(i, unit*y+xAxis);
			}
		}
	  
		init();
		  
	  })();

}

$(".scene").each(function() {
	var scene = $(this).get(0);
	var parallaxInstance = new Parallax(scene);
});

	
	
})