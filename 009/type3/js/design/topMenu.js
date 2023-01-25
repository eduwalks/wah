// 상단 메뉴 관련 S
$(document).ready(function() {
	//$("[id^=snavi]").hide();
	$("[id^=snavi]").attr("class","pc_gnb");

	$("[id^=mnavi] > a").click(function() {
		var naviIdx = $(this).parent().attr("id").replace("mnavi", "");
		//$('#menuview-overlay').remove();
		if ($("#snavi"+naviIdx).attr("class") == "pc_gnb") {
			$("[id^=snavi]").attr("class","pc_gnb");
			$(".menu_on_bg").attr("style","display:none");
			$("#snavi"+naviIdx).attr("class","pc_gnb_on");
			//$('.menu_on_bg').after("<div class=\"menuview-overlay\" id=\"menuview-overlay\" style=\"display: block; z-index: 92; opacity: 0.5;\"></div>");
			$(".menu_on_bg").attr("style","display:block;z-index:93;");
			//$(".menu_on_bg").attr("style","display:block");
		} else {
			$("[id^=snavi]").attr("class","pc_gnb");
			$(".menu_on_bg").attr("style","display:none");
		}
	});
	
	$("[class=gnb_close]").click(function() {
		$("[id^=snavi]").attr("class","pc_gnb");
		$(".menu_on_bg").attr("style","display:none");
	});
	
	// 서브메뉴 보이기
	/*$("[id^=mnavi] > a").mouseenter(function() {
		//$("[id^=snavi]").hide();
		$("[id^=snavi]").attr("class","pc_gnb");
		$(".menu_on_bg").attr("style","display:none");
		var naviIdx = $(this).parent().attr("id").replace("mnavi", "");
		//$("#snavi"+naviIdx).show();
		$("#snavi"+naviIdx).attr("class","pc_gnb_on");
		$(".menu_on_bg").attr("style","display:block");
	});
	$("[id^=mnavi] > a").focus(function() { 
		//$("[id^=snavi]").hide();
		$("[id^=snavi]").attr("class","pc_gnb");
		$(".menu_on_bg").attr("style","display:none");
		var naviIdx = $(this).parent().attr("id").replace("mnavi", "");
		//$("#snavi"+naviIdx).show();
		$("#snavi"+naviIdx).attr("class","pc_gnb_on");
		$(".menu_on_bg").attr("style","display:block");
	});*/
	
	// 서브메뉴 사라지기
	/*$("[id ^=snavi]").mouseleave(function() {
		//$(this).hide();
		$(this).attr("class","pc_gnb");
		$(".menu_on_bg").attr("style","display:none");
	});
	
	$("[class^=spot_menu]").mouseenter(function() {
		$("[id^=snavi]").attr("class","pc_gnb");
		$(".menu_on_bg").attr("style","display:none");
	});

	$("[id ^=snavi] a").blur(function() {
		try {
			var snavi = $(this).parent().parent();
			if($(snavi).find(":focus").length == 0) {
				//$(snavi).hide();
				$(snavi).attr("class","pc_gnb");
				$(".menu_on_bg").attr("style","display:none");
			}
		}catch(e) {}
	});
	*/
	$(".quick_icon1").click(function() {
		$("#quick_box1").toggle();
		if ($(".quick_icon1").attr("style") == undefined || $(".quick_icon1").attr("style") == '')
			$(".quick_icon1").attr("style","right:-100px");
		else
			$(".quick_icon1").attr("style","");
	});

	$(".quick_icon2").click(function() {
		$("#quick_box2").toggle();
		if ($(".quick_icon2").attr("style") == undefined || $(".quick_icon2").attr("style") == '')
			$(".quick_icon2").attr("style","right:0");
		else
			$(".quick_icon2").attr("style","");
	});
});