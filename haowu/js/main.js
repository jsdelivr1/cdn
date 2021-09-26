var nums_input_str = '';
var sub_is_ready = false;
$(function () {
	// lr-layer显隐
	$('.icon-login').click(function () {
		$('.lr-layer').removeClass('hide');
		$(this).addClass('hide');
		$('.user_avt').removeClass('hide');
	})

	$('.lr-layer').click(function () {
		lrLayerHide();
	});
	$('.lr-layer .ctnr').click(function (e) {
		stopBubble(e);
	});
	$('.icon-login_close').click(function () {
		lrLayerHide();
	})

	// 导航下拉菜单
	navlist('#menu1', '#sbox1', '.link');
	navlist('#menu2', '#sbox2', '.link');
	function navlist(cont, ss, links) {
		var linksbox = $(ss + " " + links);
		$(cont).hover(
			function () {
				$(ss).removeClass('hide');
				$(this).find('.nav-a').addClass('hover');
			},
			function () {
				$(ss).addClass('hide');
				$(this).find('.nav-a').removeClass('hover');
			}
		);
		$(links).hover(
			function () {
				$(this).find('strong').addClass('hover');
				$(this).find('.abox').removeClass('hide');
			},
			function () {
				$(this).find('strong').removeClass('hover');
				$(this).find('.abox').addClass('hide');
			}
		);
	}

	// header滚动
	scroll(function (direction) {
		if (direction == 'down') {
			$("header").removeClass('h-show');
		}
	});
	function scroll(fn) {
		var $window = $(window),
			beforeScrollTop = $window.scrollTop(),
			fn = fn || function () {
				};

		$window.scroll(function () {
			var afterScrollTop = $window.scrollTop(),
				delta = afterScrollTop - beforeScrollTop;
			if (delta === 0) return false;
			if (afterScrollTop > 800) {
				$('.totop').removeClass('hide');
			}
			else {
				$('.totop').addClass('hide');
			}
			fn(delta > 0 ? "down" : "up");
			beforeScrollTop = afterScrollTop;
		});
	}

	// 返回顶部
	$('.totop').click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, {
			duration: 300,
			easing: "swing"
		});
	});

	//防止冒泡
	function stopBubble(e) {
		//非IE浏览器
		if (e && e.stopPropagation)
			e.stopPropagation();
		else
		//IE
			window.event.cancelBubble = true;
	}

	$('.loginlayer-show').click(function () {
		$('.lr-layer').removeClass('hide');
	})
	$('.rgstlayer-show').click(function () {
		$('.lr-layer').removeClass('hide');
		$('.login-block').addClass('hide');
		$('.regstr-block').removeClass('hide');
		$('.lr-layer .title').find('.tab').eq(0).removeClass('active');
		$('.lr-layer .title').find('.tab').eq(1).addClass('active');
	})
});
var omitformtags=["input","textarea","select"];omitformtags=omitformtags.join("|");function disableselect(e){if(omitformtags.indexOf(e.target.tagName.toLowerCase())==-1){return false}}function reEnable(){return true}if(typeof document.onselectstart!="undefined"){document.onselectstart=new Function("return false")}else{document.onmousedown=disableselect;document.onmouseup=reEnable}function stop(){return false}document.oncontextmenu=stop;