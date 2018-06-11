# 动态文本（@Insert）
------------------

```html
<span jwcid="@Insert" value="ognl:info.SERIAL_NUMBER" />    
```
输出 HTML 文本类元素，可以是纯文本，也可以是 HTML，还能以自定义的 java.text.Format 方式做格式化

| 参数名        | 	参数类型    |  是否必须  | 默认值        | 描述|
| --------    | -----:   | :----: |--------   | -----:   | :----: |
| id |	java.lang.String	|否|	无|	如果有 id 属性，则生成的 HTML 内容为：<span id="id">xxxx</sapn>|
| value |	java.lang.String	|否|	无|	输出的文本值，如果无 id 属性，则输出纯文本|
|format	| java.text.Format	|否|	无|	输出    文本的格式|
| class |	java.lang.String	|否|	无|	如果生成 span，可以用此属性设置 span 的 class 样式|