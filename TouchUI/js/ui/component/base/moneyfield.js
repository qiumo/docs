/*!
 * moneyfield component
 * http://www.wadecn.com/
 * auth:xiedx@asiainfo.com
 * Copyright 2015, WADE
 */
!function(e,i,t){"use strict";if(e&&"undefined"==typeof e.MoneyField){var l=(Array.prototype.push,Array.prototype.splice,t.createElement("input")),a="oninput"in l;l=null;var n=("undefined"!=typeof e.hasTouch?e.hasTouch:"ontouchstart"in i,function(i,l){var a=this;a.el=i&&1==i.nodeType?i:t.getElementById(i),a.el&&a.el.nodeType&&(a.id=e.attr(a.el,"id"))&&(l&&e.isObject(l)&&e.extend(a,l),e.attr(a.el,"x-wade-uicomponent")||e.attr(a.el,"x-wade-uicomponent","moneyfield"),a._init(),a.constructor.call(a))});n.prototype=e.extend(new e.UIComponent,{val:function(e){var i=this;return void 0==e?i.value:void(i.value=i.el.value=e)},getDisabled:function(){var e=this;return e.disabled},setDisabled:function(i){var t=this;t.disabled=!!i;var l=t.el.className?t.el.className:"";t.disabled?((" "+l+" ").indexOf(" e_dis ")<0&&(t.el.className=e.trim(l+" e_dis")),t.el.disabled=!0):(l=e.trim((" "+l+" ").replace(/ e_dis /gi," ")),t.el.className=l,t.el.disabled=!1)},destroy:function(){var e=this;e.el=null},_init:function(){var i=this;"undefined"==typeof i.value&&(i.value=i.el.value);var t=new RegExp("^\\d{1,12}(?:\\.\\d{1,"+(i.decimalDigit?i.decimalDigit:2)+"})?$");a?e(i.el).bind("input",function(e){var l;if(this.value=(""+this.value).replace(/[^0-9\.]+/gi,""),""!=this.value){if(l=parseFloat(this.value),!t.test(l))return this.value=i.value,!1}else l="";return void 0!=l&&(i.value=l),!0}):(e(i.el).bind("keydown",function(e){return!i.disabled&&(!(e.shiftKey||e.altKey||e.ctrlKey)&&(e.keyCode>47&&e.keyCode<58||e.keyCode>95&&e.keyCode<106||8==e.keyCode||190==e.keyCode))}),e(i.el).bind("keyup",function(e){if(i.disabled)return!1;var l;if(""!=this.value){if(l=parseFloat(this.value),!t.test(l))return void(this.value=i.value)}else l="";void 0!=l&&(i.value=l)})),e(i.el).bind("blur",function(e){if(i.disabled)return!1;var t;""!=this.value&&(t=parseFloat(this.value)),void 0!=t&&(i.value=i.el.value=t)})}}),i.MoneyField=e.MoneyField=n}}(window.Wade,window,document);