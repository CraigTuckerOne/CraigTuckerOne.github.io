$(document).ready(function() {
	
	$(".toggle-button").click(function(){
		$(this).toggleClass("on");
		$(".top-menu ul").slideToggle();
	})
	
	$("#top").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	})
	
	$(".home-sect h2, .work h2, .connect h2, .otziv h2").animated("fadeInRight");
	$(".header-wrap form").animated("fadeInRight"); //animation-delay для задержки
	$(".info-item img, .info-item1 img ").animated("zoomIn");
	
	$(".button-down").click(function() {
		$.scrollTo($(".home-sect"), 800, {
			offset: 10
		});
		return false;
	});
	
	$(".work").waypoint(function() {
		$(".tc-item").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 200*index);
		});
	}, {
		offset : "30%"
	});
	
	
	$(".tc-item:first").hover(function(){
		$("#path4138").css({"fill-opacity" : "0",
	"stroke" : "#f39f18"});}
	,function(){
		$("#path4138").css({"fill-opacity" : "1",
	"stroke" : "#f39f18"});
	});
	$(".tc-item:eq(1)").hover(function(){
		$("#path4138-2").css({"fill-opacity" : "0",
	"stroke" : "#f39f18"});}
	,function(){
		$("#path4138-2").css({"fill-opacity" : "1",
	"stroke" : "#f39f18"});
	});
	$(".tc-item:eq(2)").hover(function(){
		$("#path4138-3").css({"fill-opacity" : "0",
	"stroke" : "#f39f18"});}
	,function(){
		$("#path4138-3").css({"fill-opacity" : "1",
	"stroke" : "#f39f18"});
	});
	
	$(".card").hover(function(){
		$(".person-img > img").css({"transform" : "scale(1.08)"});
		$(this).css({"border-bottom":"3px solid #ffa700"});
		},function(){
		$(".person-img > img").css({"transform" : "scale(1.0)"});
		$(this).css({"border-bottom":"3px solid #e5e5e5"});
		});
		
	$(".connect").waypoint(function(){
		$(".connect .card").removeClass( "cards-off" ).addClass("card-on");
	},{
		offset: 100
	});	

	$(".slider").owlCarousel({
		items : 1,
		nav : true, //стрелочки
		navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"], //текст в стрелочкаъ
		loop : true, //рекурсия
		autoplay : true,
		autoplayHoverPause : true,
		fluidSpeed : 900,
		autoplaySpeed : 900,
		navSpeed : 900,
		dotsSpeed : 900,
		dragEndSpeed : 900
	});
	
	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$(".button-down").click(function() {
		$.scrollTo($(".home-sect"), 800, {
			offset: -90
		});
		return false;
	})

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});