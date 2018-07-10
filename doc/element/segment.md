## 分段器（e_segment / @Segment）
选择框是基本的表单元素之一，用于从一组数据（3-5条）中选取其中一条，给提交的数据提供来源。


java 方式
```html
<span name="mySegment" jwcid="@Segment" source="ognl:levels" value="0" />
```

|参数名	       |     参数类型	  |     是否必须|	默认值	|    描述|
|---|---|---|---|---|
|name      	   |java.lang.String|     是    	|无	    |组件实例名，同一个页面中不能重复|
|source      	|java.lang.Object|     是    	|无	    |绑定的数据源，必须实现 java.util.List 接口|
|textField     |java.lang.String|     否    	|无	    |文本字段|
|valueField    |java.lang.String|     否    	|无	    |值字段|
|titleField    |java.lang.String|     否    	|无	    |标题字段|
|excludeField  |java.lang.String|     否    	|''    	|排除的字段，多个用','号分隔|
|value      	|java.lang.String|     否    	|无	    |当前值（必须匹配分段器组件数据源中的值才有效）|
|class      	|java.lang.String|     否    	|无	    |自定义样式名|
|style      	|java.lang.String|     否    	|无	    |自定义样式|
|disabled	   | boolean	      |      否    	|无	    |是   否  禁用|

### js 方式

html
```html
<span class="e_segment">
	<span idx="0" val="0">低</span>
	<span idx="1" val="1">中</span>
	<span idx="2" val="2">高</span>
	<input type="hidden" name="mySegment" id="mySegment" nullable="no" desc="级别" />
</span>
```

js
```javascript
window["mySegment"] = new Wade.Segment("mySegment",{
	disabled:false
});
```
|参数名	   | 参数类型	|是否必须|	默认值	|描述|
|---|---|---|---|
|disabled	|boolean	 |    否|	       false|	是否禁用|
## js API
设置默认值

```javascript
$("#mySegment").val("0");
```
绑定分段器组件 change 事件

```javascript
$("#mySegment").change(function(){
	alert(this.value); // this.value 获取分段器组件当前值
});
```

获取分段器组件的当前值

```javascript
$("#mySegment").val();
```
设置分段器组件的值（必须匹配分段器组件数据源中的值才有效）

```javascript
$("#mySegment").val(value);
```