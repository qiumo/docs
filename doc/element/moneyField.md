##  金额输入框（@MoneyField）
金额输入框是扩展的表单元素之一，主要用于输入金额，只能输入数值型数据。

java 方式
```
<input name="PAY_FEE" jwcid="@MoneyField" />
```
|参数名|参数类型|是否必须|默认值|描述|
|---|---|---|---|---|
|id|java.lang.String|否|无|金额输入框 id|
|name|java.lang.String|是|无|金额输入框名称|
|value|java.lang.String|是|无|金额输入框值|
|decimalDigit|int|否|2|金额输入框小数位数长度|
|disabled|boolean|否|false|是否禁用该金额输入框|
|readOnly|boolean|否|false|该输入框是否只读|
js 方式
html

<input id="myMoneyField" type="text" placeholder="提示文字" />
js

window["myMoneyField"] = new Wade.MoneyField(
	// 对应元素，在 el 元素下生成下拉框，el 可以为元素 id，或者原生 dom 对象
	"myMoneyField",
	// 参数设置
	{
		disabled:false,
		decimalDigit:2
	}
);
参数名	参数类型	是否必须	默认值	描述
decimalDigit	number	否	2	金额输入框小数位数长度
disabled	boolean	否	false	是否禁用该金额输入框
js API
设置默认值

$("#myMoneyField").val("TouchUI")
外观设置
金额输入框继承了基本输入框的能力，支持大小与圆角的设置，设置方法请参考 输入框 一章。