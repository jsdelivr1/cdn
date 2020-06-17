$(function() {
  $(window).scroll(function() {
    var scrollHeight = $(document).scrollTop();
    if (scrollHeight > 60) {
      $('.change-nav').removeClass('navbar-dark bg-transparent');
      $('.change-nav').addClass('navbar-light bg-light');
    } else {
      $('.change-nav').removeClass('navbar-light bg-light');
      $('.change-nav').addClass('navbar-dark bg-transparent');
    }
  });
});
if ((navigator.userAgent.match(/(iPhone|iPod|Android|Windows Phone)/i))) {
} else {
		function showFullSrcModal(link, imgurl, width, height, domain, openInNew, clickBgClose, link2) {
			var close1 = false;
			var close2 = false;
			if (getCookie("fullsrcmodal") == null) {
				if ($(".rm-modal1-bg").length == 0) {
					if (link2 == undefined || link2 == "") {
						var html = "<div class='rm-modal1-bg' style='display:none; position: fixed; top: -5000px; bottom: -5000px; left: -5000px; right: -5000px; z-index: 99999; background: rgba(43, 43, 43, 0.8);'></div>";
						html += "<div class='rm-modal1-body' style='display:none;position:fixed; top:0; bottom:0; left:0; right:0; z-index:100000; text-align:center;'>";
						html += "<div class='rm-modal1-content' style='position: absolute; top: 50%; left: 50%; margin-top: -" + (height / 2) + "px; margin-left: -" + (width / 2) + "px; width: " + width + "px; height: " + height + "px; color: #2b2e38;'></a>";
						html += "<div style='overflow:hidden; display:block;width: " + width + "px; height: " + height + "px;background: url(" + imgurl + ") no-repeat center center;'><a href='" + link + "' " + (openInNew ? "target='_blank'" : "") + " style='display:block;width:100%; height:100%;'></a></div>";
					} else {
						var html = "<div class='rm-modal1-bg' style='display:none; position: fixed; top: -5000px; bottom: -5000px; left: -5000px; right: -5000px; z-index: 99999; background: rgba(43, 43, 43, 0.8);'></div>";
						html += "<div class='rm-modal1-body' style='display:none;position:fixed; top:0; bottom:0; left:0; right:0; z-index:100000; text-align:center;'>";
						html += "<div class='rm-modal1-content' style='background:url(" + imgurl + ") center center no-repeat;position: absolute; top: 50%; left: 50%; margin-top: -" + (height / 2) + "px; margin-left: -" + (width / 2) + "px; width: " + width + "px; height: " + height + "px; color: #2b2e38;'></a>";
						html += "<a class='rm-modal1-link1' href='" + link + "' " + (openInNew ? "target='_blank'" : "") + " style='float:left;width:49%; height:" + height + "px;'></a>";
						html += "<a class='rm-modal1-link2'  href='" + link2 + "' " + (openInNew ? "target='_blank'" : "") + " style='float:right;width:49%; height:" + height + "px;'></a>";
					}
					html += "<span class='rm-modal1-close'></span></div ></div>";
					html += "<style>.rm-modal1-close {position: absolute; top: -45px; right: -45px; display: block; width: 45px; height:45px; text-align: center; color: rgba(255, 255, 255, 0.6); cursor: pointer; background: rgba(0, 0, 0, 0.6); border-radius: 25px;}";
					html += ".rm-modal1-close:after { font-family: Arial, \"Helvetica CY\", \"Nimbus Sans L\", sans-serif!important; font-size: 35px; line-height: 46px; content: '\\00d7'; text-align: center;}";
					html += ".rm-modal1-close:hover { background: rgba(0, 0, 0, 0.9); color: rgba(255, 255, 255, 0.9); transition: color .3s ease-in-out; transition: background .3s ease-in-out; }</style>"
					$("body").append(html);
				}

				showModal();

				if (clickBgClose) {
					$(".rm-modal1-bg").click(function() {
						window.link1Count = 0;
						window.link2Count = 0;

						closeModal();
					});
					if (link2 == undefined || link2 == "") {
						$(".rm-modal1-body").click(function() {
							window.link1Count -= 1;
							window.link2Count = 0;
							closeModal();
						});
					} else {
						$(".rm-modal1-link1").click(function() {
							window.link1Count -= 1; {
								closeModal();
							}
						});
						$(".rm-modal1-link2").click(function() {
							window.link2Count -= 1; {
								closeModal();
							}
						});
					}
				}
				$(".rm-modal1-close").click(function() {
					window.link1Count = 0;
					window.link2Count = 0;

					closeModal();
				});
			}

			function showModal() {
				$(".rm-modal1-bg").css("display", "block");
				$(".rm-modal1-body").css("display", "block");
				closeCount = 2;
			}

			function closeModal() {
				//if(window.link1Count>0 || window.link2Count>0)
				//return;
				$(".rm-modal1-bg").css("display", "none");
				$(".rm-modal1-body").css("display", "none");

				var exp = new Date();
				exp.setDate(exp.getDate() + 1);
				exp.setHours(0, 0, 0, 0)

				//exp.setTime(exp.getTime() + 24 * 60 * 60 * 1000);
				//exp.setFullYear(exp.getFullYear(), exp.getMonth(), exp.getDay());
				//exp.setHours(0);
				//exp.setMinutes(0);
				//exp.setSeconds(0);
				//exp.setTime(exp.getTime() - 12 * 60 * 60 * 1000);
				document.cookie = "fullsrcmodal=true;path=/;domain=" + domain + ";expires=" + exp.toGMTString();
			}

			function getCookie(name) {
				var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
				if (arr = document.cookie.match(reg)) return unescape(arr[2]);
				else return null;
			}
		}

		function getCookie(name) {
			var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
			if (arr = document.cookie.match(reg)) return unescape(arr[2]);
			else return null;
		}

		function showFloat(url, pic, width, cookieDomain, url2) {
			if (getCookie("leftFloat") == null || getCookie("leftFloat") == "") {

				var hd_float1 = "";
				if (url2 == "" || url2 == undefined || url2 == null) {
					hd_float1 = "<div id=\"hd_float1\" style=\"position:fixed;left:50%;bottom:175px;margin-left:-770px;width:" + width + "px;\"><a id='close-float' style='height:20px;clear:both;text-align:right;font-size:20px; cursor: pointer;display:block;float:right;margin-right:30px;' >&times;</a><a class=\"close\" href=\"" + url + "\" target=\"_blank\" style=\"display:block;width:209px;height:175px;background:url(" + pic + ") no-repeat;\"></a></div>";
				} else {
					hd_float1 = "<div id=\"hd_float1\" style=\"position:fixed;left:50%;bottom:220px;margin-left:-800px;width:" + width + "px;\"><div class=\"close\" style=\"display:block;width:220px;height:240px;background:url(" + pic + ") no-repeat;\"><a href=\"" + url + "\" style='display:block;width:100%;height:65%' target=\"_blank\"></a><a href=\"" + url2 + "\" style='display:block;width:100%;height:35%' target=\"_blank\"></a></div></div>";
				}

				$(hd_float1).insertBefore($(document.body.firstChild));
			}

			$("#close-float").click(function() {
				$("#hd_float1").hide();

				var exp = new Date();
				exp.setDate(exp.getDate() + 1);
				exp.setHours(0, 0, 0, 0)

				//exp.setTime(exp.getTime() + 24 * 60 * 60 * 1000);
				document.cookie = "leftFloat=true;path=/;domain=" + cookieDomain + ";expires=" + exp.toGMTString();
			});
		}

		showFloat("https://www.yiyult.com/2020061658401.html", "https://cdn.jsdelivr.net/gh/jsdelivr1/cdn/uploads/yiyult-2020061658401.png", 190, ".yiyult.com", "");
		window.link1Count = 3;
		window.link2Count = 0;
    }
