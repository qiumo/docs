##  输入框
输入框是最基本的表单元素，用于手动输入数据，给提交的数据提供来源。
java 方式
```
<input name="CUST_NAME" jwcid="@TextField" onenterAction="alert('enterAction')" />
```
|参数名	|参数类型	|是否必须	|默认值	|描述|
|---|---|---|---|---|
|type	|java.lang.String	|否	|text	|输入框类型，默认为 text|
|value	|java.lang.String	|是	|无	|输入框值|
|name	|java.lang.String	|是	|无	|输入框名称|
|enterAction	|java.lang.String	|否	|无	|输入框回车事件执行脚本|
|disabled	|boolean	|否	|false	|是否禁用该输入框|
|readOnly	|boolean	|否	|false	|该输入框是否只读|
css 方式
```
<input type="text" placeholder="提示文字" value="" />
<input type="password" />
```
js API
绑定 enterAction 事件
```
$("#CUST_NAME").enterAction(function(){
	alert('enterAction');
});
```
设置默认值
```
$("#CUST_NAME").val("TouchUI")
```
## 大小设置



java 方式
```
<input name="CUST_NAME" class="e_input-s" jwcid="@TextField" />
```
css 方式
```
<input type="text" class="e_input-s" placeholder="提示文字" value="" />
<input class="e_input-s" type="password" />
```
支持：e_input-s、e_input-m（默认值）、e_input-l
## 圆角设置



java 方式
```
<input name="CUST_NAME" class="e_input-r" jwcid="@TextField" />
```
css 方式
```
<input type="text" class="e_input-r" placeholder="提示文字" value="" />
<input class="e_input-r" type="password" />
```
支持：e_input-left、e_input-right、e_input-r
## 自定义宽度

java 方式
```
<input name="CUST_NAME" style="width:30em;" jwcid="@TextField" />
```
css 方式
```
<input type="text" style="width:30em;" placeholder="提示文字" value="" />
<input style="width:15em;" type="password" />
```