;$(function(){
	FastClick.attach(document.body);
	$("#btn-share").click(function(){
		$("#box-share").show();
	});
	$("#cancel-share,#box-share .allScreen").click(function(){
		$("#box-share").hide();
	});
	if(document.getElementById('scroll_img')!=null){
		var slider = Swipe(document.getElementById('scroll_img'), {
			auto: 3000,
			continuous: true,
			callback: function(pos) {
				var i = bullets.length;
				while (i--) {
					bullets[i].className = ' ';
				}
				bullets[pos].className = 'on';
			}
		});
		var bullets = document.getElementById('scroll_position').getElementsByTagName('li');
	}
	if(document.getElementById('scroll_menu')!=null){
		var slider = Swipe(document.getElementById('scroll_menu'), {
			continuous: false,
			callback: function(pos) {
				var i = bullets_.length;
				while (i--) {
					bullets_[i].className = ' ';
				}
				bullets_[pos].className = 'on';
			}
		});
		var bullets_ = document.getElementById('scroll_position_menu').getElementsByTagName('li');
	}
	$(".radio-btn").click(function(){
		$(this).toggleClass("checked")
	});
	$(".nav-tab ").tabs(".con-tab > *");
	$(".info-merchants").tabs(".info-merchants nav ~ div");
	$("#screen_vip_btn").click(function(){
		$("#screen_vip_box").toggle();
	});
	$(".ul-vip .allScreen").click(function(){
		$(this).parent().hide();
	});
	$("#select_product").click(function(){
		$("#select_product_box").show();
	});
	$(".box-product-select div.box .menu-title ul li").click(function(){
		$(this).siblings().removeClass("active");
		$(this).addClass("active").parent().prev().text($(this).text());
	});
	$(".box-product-select div.box .menu-title>div").click(function(){
		$(this).next().slideToggle();
	});
	$("#select_product_box a.cancel").click(function(){
		$("#select_product_box").hide();
	});
	$("#select_product_box a.submit").click(function(){
		$("#select_product").val($("#select_product_box").find(":checked").parent().next().children(".info").find("p:eq(0)").text());
		$("#select_product_box").hide();
	});
	
	
	$(".product-miaoshu dd>.imgs div.wrap-img").height($(".product-miaoshu dd>.imgs div.wrap-img").width());
	$(window).resize(function(){
		$(".product-miaoshu dd>.imgs div.wrap-img").height($(".product-miaoshu dd>.imgs div.wrap-img").width());			
	});
	$("nav[name='type-biz']").tabs("nav[name='type-biz']~div.content");
	
	$(".con-tab-biz nav~div.content>div,.desc-con>a,.ticket-con>a").click(function(){
		$(this).siblings().removeClass("active");
		$(this).addClass("active")
	});
	
	$("nav>div.type").click(function(){
		$(this).toggleClass("active");
		$(".con-tab-biz.type-con").toggle();
	});
	$(".con-tab-biz .allScreen").click(function(){
		$(this).parents('.con-tab-biz').hide();
	});
	$("nav>div.location").click(function(){
		$(this).toggleClass("active");
		$(".con-tab-biz.location-con").toggle();
	});
	$("nav>div.desc").click(function(){
		$(this).toggleClass("active");
		$(".con-tab-biz.desc-con").toggle();
	});
	$("nav>div.ticket").click(function(){
		$(this).toggleClass("active");
		$(".con-tab-biz.ticket-con").toggle();
	});
	$(".nav-tab.biz+.list-biz>nav").tabs(".nav-tab.biz+.list-biz>nav~.con-tab-biz");
	$(".con-tab-biz.type-con nav a").click(function(){
		$(".nav-tab.biz+.list-biz nav>div.type").text($(this).text());
	});
	$(".con-tab-biz.location-con nav a").click(function(){
		$(".nav-tab.biz+.list-biz nav>div.location").text($(this).text());
	});
	$(".desc-con>a").click(function(){
		$(".nav-tab.biz+.list-biz nav>div.desc").text($(this).text());
	});
	$(".ticket-con>a").click(function(){
		$(".nav-tab.biz+.list-biz nav>div.ticket").text($(this).children("i").text());
	});
	$(".nav-tab.biz #search_biz").click(function(){
		$(".con-tab-biz").hide();
		$(".nav-tab.biz+.list-biz>nav>div").removeClass("active");
	});
	$(".con-tab-biz").hide();
	$(".nav-tab.biz+.list-biz>nav>div").removeClass("active");	
	
	$(".menu-title.product>div.name").click(function(){
		$(this).next().toggle();
		$(this).toggleClass("active");
		$(this).parent().toggleClass("active");
	})
	$(".menu-title.product nav[name='type-biz'] a").click(function(){
		$(".menu-title.product>.name").text($(this).text());
	});
	$(".dl-product nav.left").tabs(".dl-product .con>.item");
	//核销-查看使用的优惠券
	$("#show_ticket_list").click(function(){
		$("#used_tickets").show();
	});
	$("#used_tickets .allScreen,#used_tickets #close").click(function(){
		$("#used_tickets").hide();
	});
	//收银多选优惠券弹窗
	$("#show_info").click(function(){
		 layer.open({
		 	content: '此优惠券不可叠加使用',
		 	skin: 'msg',
		 	time: 2 //2秒后自动关闭
		 });
	});
	//删除地址弹窗
	$("#delect_address").click(function(){
		 layer.open({
		    content: '您确定要删除次本地址吗？'
		    ,btn: ['删除', '取消']
		    ,yes: function(index){
		      window.location.href='personal_address_list.html';
		      layer.close(index);
		    }
		  });
	});
	//显示个人中心的会员卡二维码
	$(".card-vip i.qrcode").click(function(){
		$("#box_qrcode").show();
	});
	$("#box_qrcode .allScreen").click(function(){
		$("#box_qrcode").hide();
	});
	//优惠券预览
	//代金 平台贵宾券
	$("#daijin_pt,#daijin_gb").click(function(){
		$("#yulan_box").show();
		$("#yulan_box li").hide();
		$("#yulan_box li.daijinquan.normal").show();
	});
	//代金 推送券
	$("#daijin_push").click(function(){
		$("#yulan_box").show();
		$("#yulan_box li").hide();
		$("#yulan_box li.daijinquan.tui").show();
	});
	//折扣 平台贵宾券
	$("#zhekou_pt,#zhekou_gb").click(function(){
		$("#yulan_box").show();
		$("#yulan_box li").hide();
		$("#yulan_box li.zhekou.normal").show();
	});
	//折扣 推送券
	$("#zhekou_push").click(function(){
		$("#yulan_box").show();
		$("#yulan_box li").hide();
		$("#yulan_box li.zhekou.tui").show();
	});
	$("#yulan_box .allScreen").click(function(){
		$("#yulan_box").hide();
	});
});
(function(a){function e(c,d,e){var f=this,g=c.add(this),h=c.find(e.tabs),i=d.jquery?d:c.children(d),j;h.length||(h=c.children()),i.length||(i=c.parent().find(d)),i.length||(i=a(d)),a.extend(this,{click:function(c,d){var i=h.eq(c);typeof c=="string"&&c.replace("#","")&&(i=h.filter("[href*="+c.replace("#","")+"]"),c=Math.max(h.index(i),0));if(e.rotate){var k=h.length-1;if(c<0)return f.click(k,d);if(c>k)return f.click(0,d)}if(!i.length){if(j>=0)return f;c=e.initialIndex,i=h.eq(c)}if(c===j)return f;d=d||a.Event(),d.type="onBeforeClick",g.trigger(d,[c]);if(d.isDefaultPrevented())return;return b[e.effect].call(f,c,function(){j=c,d.type="onClick",g.trigger(d,[c])}),h.removeClass(e.active),i.addClass(e.active),f},getConf:function(){return e},getTabs:function(){return h},getPanes:function(){return i},getactivePane:function(){return i.eq(j)},getactiveTab:function(){return h.eq(j)},getIndex:function(){return j},next:function(){return f.click(j+1)},prev:function(){return f.click(j-1)},destroy:function(){return h.unbind(e.event).removeClass(e.active),i.find("a[href^=#]").unbind("click.T"),f}}),a.each("onBeforeClick,onClick".split(","),function(b,c){a.isFunction(e[c])&&a(f).bind(c,e[c]),f[c]=function(b){return b&&a(f).bind(c,b),f}}),e.history&&a.fn.history&&(a.tools.history.init(h),e.event="history"),h.each(function(b){a(this).bind(e.event,function(a){return f.click(b,a),a.preventDefault()})}),i.find("a[href^=#]").bind("click.T",function(b){f.click(a(this).attr("href"),b)}),location.hash&&e.tabs=="a"&&c.find("[href="+location.hash+"]").length?f.click(location.hash):(e.initialIndex===0||e.initialIndex>0)&&f.click(e.initialIndex)}a.tools=a.tools||{version:"@VERSION"},a.tools.tabs={conf:{tabs:"a",active:"active",onBeforeClick:null,onClick:null,effect:"default",initialIndex:0,event:"click",rotate:!1,slideUpSpeed:400,slideDownSpeed:400,history:!1},addEffect:function(a,c){b[a]=c}};var b={"default":function(a,b){this.getPanes().hide().eq(a).show(),b.call()},fade:function(a,b){var c=this.getConf(),d=c.fadeOutSpeed,e=this.getPanes();d?e.fadeOut(d):e.hide(),e.eq(a).fadeIn(c.fadeInSpeed,b)},slide:function(a,b){var c=this.getConf();this.getPanes().slideUp(c.slideUpSpeed),this.getPanes().eq(a).slideDown(c.slideDownSpeed,b)},ajax:function(a,b){this.getPanes().eq(0).load(this.getTabs().eq(a).attr("href"),b)}},c,d;a.tools.tabs.addEffect("horizontal",function(b,e){if(c)return;var f=this.getPanes().eq(b),g=this.getactivePane();d||(d=this.getPanes().eq(0).width()),c=!0,f.show(),g.animate({width:0},{step:function(a){f.css("width",d-a)},complete:function(){a(this).hide(),e.call(),c=!1}}),g.length||(e.call(),c=!1)}),a.fn.tabs=function(b,c){var d=this.data("tabs");return d&&(d.destroy(),this.removeData("tabs")),a.isFunction(c)&&(c={onBeforeClick:c}),c=a.extend({},a.tools.tabs.conf,c),this.each(function(){d=new e(a(this),b,c),a(this).data("tabs",d)}),c.api?d:this}})(jQuery)
