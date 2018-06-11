/*!
 * scroller component
 * http://www.wadecn.com/
 * auth:xiedx@asiainfo.com
 * Copyright 2015, WADE
 */
(function ($, window, doc) {
	"use strict";
	
	if( !$ || typeof $.Scroller != "undefined" )
		return;

	var push = Array.prototype.push,
		splice = Array.prototype.splice;
	
	var phoneMode = $.os.phone || true === $.ratioPhone; //手机模式
	var scrollers = [];

	var Scroller = function(el, settings){
		var that = this;
		that.el = el && el.nodeType == 1 ? el : doc.getElementById(el);
		if( !that.el || !that.el.nodeType || !(that.id = $.attr(that.el, "id")) )
			return;
		
		if(settings && $.isObject(settings))
			$.extend(that, settings);
		
		if(!$.attr(that.el, "x-wade-uicomponent")){
			$.attr(that.el, "x-wade-uicomponent", "scroller");
		}
			
		that._init();	
		
		that.constructor.call(that);		
	};
	
	Scroller.prototype = $.extend(new $.UIComponent(), {
		x: function(){ //当前的X轴位置
			var that = this;
			
			if(that.scroller)
				that.scroller.x;
		},
		y: function(){  //当前的Y轴位置
			var that = this;
			
			if(that.scroller)
				that.scroller.y;
		},
		dirX: function(){ //是否进行了X轴的滚动，返回 1|0
			var that = this;
			
			if(that.scroller)
				that.scroller.dirX;
		},
		dirY: function(){ //是否进行了Y轴的滚动，返回 1|0
			var that = this;
			
			if(that.scroller)
				that.scroller.dirY;
		},
		scrollerW: function(){
			var that = this;
			
			if(that.scroller)
				that.scroller.scrollerW;
		},
		scrollerH: function(){
			var that = this;
			
			if(that.scroller)
				that.scroller.scrollerH;
		},
		refresh: function(){
			var that = this;
			
			if(that.scroller)
				that.scroller.refresh();
		},
		scrollTo: function(x, y, time, relative){
			var that = this;
			
			if(that.scroller)
				that.scroller.scrollTo(x, y, time, relative);
		},
		scrollToElement: function(el, time){
			var that = this;
			
			if(that.scroller)
				that.scroller.scrollToElement(el, time);
		},
		scrollToPage: function (pageX, pageY, time) {
			var that = this;
			
			if(that.scroller)
				that.scroller.scrollToPage(pageX, pageY, time);
		},
		destroy: function(){
			var that = this;
			
			if(that.scroller){
				that.scroller.destroy();
			}
			that.scroller = null;
			
			that.el = null;
			
			splice.call(scrollers, $.inArray(that.id, scrollers), 1);
		},
		_init: function(){
			var that = this;
			
			//scroll中已对resize event进行了处理
			if( $.inArray(that.id, scrollers) < 0 ){
				push.call(scrollers, that.id);
			}
			
			setTimeout(function(){
			
				//移动端用滑动组件
				if(phoneMode || $.os.pad){
					//overflow:hidden
					that.el.style.overflow = "hidden";
					
					//new scroller
					that.scroller = new $.Scroll(that.el, {
						hScroll : (typeof that.hScroll != "undefined" ? that.hScroll : true),  //是否允许横向滚动
						vScroll : (typeof that.vScroll != "undefined" ? that.vScroll : true),  //是否允许竖向滚动
						hScrollbar : (typeof that.hScrollbar != "undefined" ? that.hScrollbar : true), //是否显示横向滚动条
						vScrollbar : (typeof that.vScrollbar != "undefined" ? that.vScrollbar : true), //是否显示竖向滚动条
						bounce : (typeof that.bounce != "undefined" ? that.bounce : true),    //是否使用回弹效果
						momentum : (typeof that.momentum != "undefined" ? that.momentum : true),   //是否使用惯性效果
						checkDOMChanges : (typeof that.checkDOMChanges != "undefined" ? that.checkDOMChanges : false),   //是否自动检测DOM变化
						snap : (typeof that.snap != "undefined" ? that.snap : false),  //是否捕捉元素
						snapThreshold: (typeof that.snapThreshold != "undefined" ? that.snapThreshold : 1),
						onRefresh: function(){
							$.event.trigger({type: "refresh", context: this}, null, that.el);
						},
						onScrollMove: function(){
							$.event.trigger({type: "scrollMove", context: this}, null, that.el);
						},
						onScrollEnd: function(){
							$.event.trigger({type: "scrollEnd", context: this}, null, that.el);
						}
					});	
				}
				
			}, 0);
			
			$(function(){ //页面加载完成时,refresh
				setTimeout(function(){
					that.refresh();
				}, 0);
			});
		}
	});
	
	$.extend(Scroller, {
		refresh : function(){ //刷新所有Scroller组件
			if(scrollers.length > 0){
				var scrollerId;
				for(var i = 0, size = scrollers.length; i < size; i ++){
					scrollerId = scrollers[i];
					if(window[scrollerId]){
						window[scrollerId].refresh();
					}
				}
			}
		}
	});
	
	//export 
	window.Scroller = $.Scroller = Scroller;	
})(window.Wade, window, document);	