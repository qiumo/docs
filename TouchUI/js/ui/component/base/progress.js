/*!
 * increasereduce component
 * http://www.wadecn.com/
 * auth:xiedx@asiainfo.com
 * Copyright 2015, WADE
 */
!function(s,e,n){"use strict";function t(s){return 0===s||1===s||a.test(s)}if(s&&"undefined"==typeof s.Progress){var a=/^0.[0-9]+$/,r=function(e,t){var a=this;a.el=e&&1==e.nodeType?e:n.getElementById(e),a.el&&a.el.nodeType&&(a.id=s.attr(a.el,"id"))&&(t&&s.isObject(t)&&s.extend(a,t),s.attr(a.el,"x-wade-uicomponent")||s.attr(a.el,"x-wade-uicomponent","progress"),a._init(),a.constructor.call(a))};r.prototype=s.extend(new s.UIComponent,{update:function(e,n,a){var r=this;r.disabled||t(e)&&(e=parseFloat(s.format.number(e,"0.00")),r.prog.style.width=parseInt(100*e)+"%",r.text.innerHTML=n&&s.isString(n)?s.xss(n):parseInt(100*(1-e))+"%",r.prog.innerHTML=a&&s.isString(a)?s.xss(a):parseInt(100*e)+"%")},show:function(){var s=this;s.span.style.display=""},hide:function(){var s=this;s.span.style.display="none"},getDisabled:function(){var s=this;return s.disabled},setDisabled:function(e){var n=this;n.disabled=!!e;var t=n.span.className?n.span.className:"";n.disabled?(" "+t+" ").indexOf(" e_dis ")<0&&(n.span.className=s.trim(t+" e_dis")):(t=s.trim((" "+t+" ").replace(/ e_dis /gi," ")),n.span.className=t)},destroy:function(){var s=this;s.span=null,s.prog=null,s.text=null,s.el=null},_init:function(){var e=this;e.span=s(e.el).parents("span.e_progress:first")[0],e.prog=s(e.span).find("span.e_progressProgress:first")[0],e.text=s(e.span).find("span.e_progressValue:first")[0];var n=s.attr(e.span,"id");n||(n=e.id+"_span",s.attr(e.span,"id",n)),s.attr(e.el,"x-visible-element",n);var t=e.span.className?e.span.className:"";e.color&&s.isString(e.color)&&(" "+t+" ").indexOf(" e_progress-"+e.color+" ")<0&&(t+=" e_progress-"+e.color,e.span.className=s.trim(t)),(" "+t+" ").indexOf("e_progress-value-")<0&&(e.span.className=s.trim(t+" e_progress-value-l")),e.disabled&&e.setDisabled(!0)}}),e.Progress=s.Progress=r}}(window.Wade,window,document);