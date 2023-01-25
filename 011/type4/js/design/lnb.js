// window.innerWidth : 780
var MenuCtrl = {
		MIN_WIDTH : 780,
		SPEED : 300,
		ALL_MENU : "#allMenu",
		ALL_MENU_BTN : ".ico_allMenu a",
		COVER : "#cover",
		MENU_ROOT : "#lnb",
	
		init : function() {
			if(window.innerWidth < MenuCtrl.MIN_WIDTH) {
				$(MenuCtrl.ALL_MENU).stop().hide();
				$(MenuCtrl.COVER).stop().hide();
			}else {
				//$(MenuCtrl.ALL_MENU).stop().show();
				$(MenuCtrl.COVER).stop().hide();
			}
			
			$(MenuCtrl.ALL_MENU_BTN).click(function(){
				MenuCtrl.fadeIn();
			});
			
			$(MenuCtrl.COVER).click(function(){
				MenuCtrl.fadeOut();
			});
/*			
			$(MenuCtrl.COVER).on('swipeleft', function(e){
				MenuCtrl.fadeOut();
			});
*/			
			$(MenuCtrl.MENU_ROOT).find(".group a").click(function(){
				if($(this).parent().children("ul").is(":hidden")) {
					try {
						$(this).parent().parent().children("li.group").removeClass('active');
						$(this).parent().parent().children("li.group").children("ul").stop().slideUp(MenuCtrl.SPEED);
					}catch(e) {
						alert(e);
					}
					$(this).parent().addClass('active');
					$(this).parent().children("ul").stop().slideDown(MenuCtrl.SPEED);
				}else {
					$(this).parent().children("ul").stop().slideUp();
					$(this).parent().removeClass('active');
				}
			});
			
			$(MenuCtrl.MENU_ROOT).find(".group").children("ul").hide();
			
			$(MenuCtrl.MENU_ROOT).find("a.on").parent().addClass('active');
			$(MenuCtrl.MENU_ROOT).find("a.on").parent().children("ul").stop().slideDown(MenuCtrl.SPEED);
		},
		
		resize: function() {
			if(window.innerWidth < MenuCtrl.MIN_WIDTH) {
				if($(MenuCtrl.ALL_MENU).is(":hidden")) {
					$(MenuCtrl.COVER).stop().hide();					
				}else {
					$(MenuCtrl.COVER).stop().show();
				}
			}else {
				$(MenuCtrl.ALL_MENU).stop().show();
				$(MenuCtrl.COVER).stop().hide();
			}
		},
		
		fadeIn : function() {
			$(MenuCtrl.COVER).stop().fadeIn(MenuCtrl.SPEED);
			$(MenuCtrl.ALL_MENU).stop().fadeIn(MenuCtrl.SPEED);
		},
		
		fadeOut : function() {
			$(MenuCtrl.ALL_MENU).stop().fadeOut(MenuCtrl.SPEED);
			$(MenuCtrl.COVER).stop().fadeOut(MenuCtrl.SPEED);
		}
	};



$(document).ready(function(){
	try {
		MenuCtrl.init();
	}catch(e) {
		alert(e);
	}
//	$.mobile.loading().hide();
});

function locationReplacePcVersion(url, domain) {
	try {
		var expires = new Date();
		expires.setTime(expires.getTime() + 60*60*1000); // 1시간
		document.cookie = 'PC_VERSION_VIEW=true; expires='+expires.toGMTString()+'; path=/; domain='+domain;
		location.replace(url);
	}catch(e) {	}
}