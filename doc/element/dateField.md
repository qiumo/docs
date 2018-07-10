## 日期输入框（@DateField）
日期输入框是扩展的表单元素之一，主要用于输入/选择日期。

java 方式
```
<input name="myDateField" jwcid="@DateField" dropDown="true" onafterAction="verifyAll('cond')" value="1988-03-09 11:13:14" format="yyyy-MM-dd HH:mm:ss" />
```
|参数名    |   参数类型    |   是否必须    |   默认值    |   描述|
| -----   | -----   | -----   | -----   | -----   |
|id    |   java.lang.String    |   否    |   无    |   组件 id，同一个页面里不能重复，如果不设置则默认取，name 属性值|
|name    |   java.lang.String    |   是    |   无    |   组件实例名|
|value    |   java.lang.String    |   否    |   无    |   当前值|
|format    |   java.lang.String    |   否    |   "yyyy-MM-dd"    |   日期显示格式|
|time    |   boolean    |   否    |   false    |   是否显示时分秒功能，默认不显示，仅下拉模式有效|
|dropDown    |   boolean    |   否    |   false    |   是否使用下拉日期模式|
js 方式
html
```
<span class="e_mix">
	<input type="text" id="myDatefiled" />
	<span class="e_ico-date"></span>
</span>
```
js
```
window["myDatefiled"] = new Wade.DateField(
	// 对应元素，在 el 元素下生成下拉框，el 可以为元素 id，或者原生 dom 对象
	"myDatefiled",
	// 参数设置
	{
		dropDown:true,
		now:new Date(1477967371975),
		value:"1988-03-09",
		format:"yyyy-MM-dd",
		useTime:false,
		useLunar:false
	}
);
```
|参数名    |    参数类型    |    是否必须    |    默认值    |    描述  |
| -----   | -----   | -----   | -----   | -----   |
|dropDown    |    boolean    |    否    |    false    |    是否使用下拉日期模式  |
|now    |    date    |    否    |    （服务器当前时间）    |    当前时间  |
|value    |    date    |    否    |    无    |    默认值  |
|format    |    string    |    否    |    "yyyy-MM-dd"    |    日期显示格式  |
|useTime    |    boolean    |    否    |    false    |    是否显示时间  |
|useLunar    |    string    |    否    |    false    |    是否使用农历  |
js API
绑定 afterAction 事件
```
$("#myDateField").bind("afterAction", function(){
	alert(this.value);
});
```
设置默认值

$("#myDateField").val("TouchUI")
支持时间

java 方式
```
<input name="myDateField" jwcid="@DateField" time="true" dropDown="true" onafterAction="verifyAll('cond')" value="1988-03-09 11:13:14" format="yyyy-MM-dd HH:mm:ss" />
```
js 方式一
```
window["myDatefiled"] = new Wade.DateField(
	"myDatefiled",
	{
		dropDown:true,
		useTime:true,
		format:"yyyy-MM-dd HH:mm:ss"
	}
);
```
外观设置
日期输入框继承了混合框的能力，支持大小与圆角的设置，设置方法请参考 混合框 一章。

