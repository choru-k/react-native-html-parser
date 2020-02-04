# react-native-html-parser

can use html parser in react-native, titanium, and anywhere. This is based on [xmldom](https://github.com/jindw/xmldom).

Install:
-------
>npm install react-native-html-parser

Example:
====
```javascript
import React, {
    Component,
    View,
    Text,
    StyleSheet,
    TextInput,
    WebView,
} from 'react-native'


var DomParser = require('react-native-html-parser').DOMParser
class TestReactNativeHtmlParser extends Component {
    componentDidMount() {
        let html = `<html>
                        <body>
                            <div id="b a">
                                <a href="example.org">
                                <div class="inA">
                                    <br>bbbb</br>
                                </div>
                            </div>
                            <div class="bb a">
                                Test
                            </div>
                        </body>
                    </html>`
        let doc = new DomParser().parseFromString(html,'text/html')
        
        console.log(doc.querySelect('#b .inA'))
        console.log(doc.getElementsByTagName('a'))
				console.log(doc.querySelect('#b a[href="example.org"]'))
				console.log(doc.getElementsByClassName('a', false))
    }
    
}
```
or
```javascript
var DOMParser = require('react-native-html-parser').DOMParser;
var doc = new DOMParser().parseFromString(
    '<html><body>'+
    '<div id="a" class="a">'+
        '<a class="b">abcd</a>'+
    '</div>'+
    '<div class="b">'+
        '<a href="aa" id="b">'+
    '</div>'+
    '</body></html>'
    ,'text/html');

console.log(doc.getElementsByAttribute('class', 'b'));
console.log(querySelecotr('.div.aa       class#a a'))
console.log(getElementsBySelector('div.aa#in[ii="a"]'))
console.log(doc.querySelect('div.a a.b'))
console.log('end')
```
or
```javascript
import DOMParser from 'react-native-html-parser';

const html = `<p>Hello world <b>world</b> <i>foo</i> abc</p>`;    
const parser = new DOMParser.DOMParser();
const parsed = parser.parseFromString(html, 'text/html');

...
```

# error solution
#### [xmldom error] entity not found: ~~~~~
Check this [issue](https://github.com/g6ling/react-native-html-parser/issues/4)

API Reference
=====

 * [DOMParser](https://developer.mozilla.org/en/DOMParser):

	```javascript
	parseFromString(xmlsource,mimeType)
	```
	* **options extension** _by xmldom_(not BOM standard!!)

	```javascript
	//added the options argument
	new DOMParser(options)
	
	//errorHandler is supported
	new DOMParser({
		/**
		 * locator is always need for error position info
		 */
		locator:{},
		/**
		 * you can override the errorHandler for xml parser
		 * @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
		 */
		errorHandler:{warning:function(w){console.warn(w)},error:callback,fatalError:callback}
		//only callback model
		//errorHandler:function(level,msg){console.log(level,msg)}
	})
		
	```

 * [XMLSerializer](https://developer.mozilla.org/en/XMLSerializer)
 
	```javascript
	serializeToString(node)
	```
DOM level2 method and attribute:
------

 * [Node](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-1950641247)
	
		attribute:
			nodeValue|prefix
		readonly attribute:
			nodeName|nodeType|parentNode|childNodes|firstChild|lastChild|previousSibling|nextSibling|attributes|ownerDocument|namespaceURI|localName
		method:	
			insertBefore(newChild, refChild)
			replaceChild(newChild, oldChild)
			removeChild(oldChild)
			appendChild(newChild)
			hasChildNodes()
			cloneNode(deep)
			normalize()
			isSupported(feature, version)
			hasAttributes()

 * [DOMImplementation](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-102161490)
		
		method:
			hasFeature(feature, version)
			createDocumentType(qualifiedName, publicId, systemId)
			createDocument(namespaceURI, qualifiedName, doctype)

 * [Document](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#i-Document) : Node
		
		readonly attribute:
			doctype|implementation|documentElement
		method:
			createElement(tagName)
			createDocumentFragment()
			createTextNode(data)
			createComment(data)
			createCDATASection(data)
			createProcessingInstruction(target, data)
			createAttribute(name)
			createEntityReference(name)
			getElementsByTagName(tagname)
			importNode(importedNode, deep)
			createElementNS(namespaceURI, qualifiedName)
			createAttributeNS(namespaceURI, qualifiedName)
			getElementsByTagNameNS(namespaceURI, localName)
			getElementById(elementId)
            getElementByClassName(classname)
            querySelect(query) // querySelect only support tagName,className,Attribute,id, parent descendant

 * [DocumentFragment](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-B63ED1A3) : Node
 * [Element](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-745549614) : Node
		
		readonly attribute:
			tagName
		method:
			getAttribute(name)
			setAttribute(name, value)
			removeAttribute(name)
			getAttributeNode(name)
			setAttributeNode(newAttr)
			removeAttributeNode(oldAttr)
			getElementsByTagName(name)
			getAttributeNS(namespaceURI, localName)
			setAttributeNS(namespaceURI, qualifiedName, value)
			removeAttributeNS(namespaceURI, localName)
			getAttributeNodeNS(namespaceURI, localName)
			setAttributeNodeNS(newAttr)
			getElementsByTagNameNS(namespaceURI, localName)
			hasAttribute(name)
			hasAttributeNS(namespaceURI, localName)
            getElementByClassName(classname)
            querySelect(query) // querySelect only support tagName,className,Attribute,id, parent descendant

 * [Attr](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-637646024) : Node
	
		attribute:
			value
		readonly attribute:
			name|specified|ownerElement

 * [NodeList](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-536297177)
		
		readonly attribute:
			length
		method:
			item(index)
	
 * [NamedNodeMap](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-1780488922)

		readonly attribute:
			length
		method:
			getNamedItem(name)
			setNamedItem(arg)
			removeNamedItem(name)
			item(index)
			getNamedItemNS(namespaceURI, localName)
			setNamedItemNS(arg)
			removeNamedItemNS(namespaceURI, localName)
		
 * [CharacterData](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-FF21A306) : Node
	
		method:
			substringData(offset, count)
			appendData(arg)
			insertData(offset, arg)
			deleteData(offset, count)
			replaceData(offset, count, arg)
		
 * [Text](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-1312295772) : CharacterData
	
		method:
			splitText(offset)
			
 * [CDATASection](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-667469212)
 * [Comment](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-1728279322) : CharacterData
	
 * [DocumentType](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-412266927)
	
		readonly attribute:
			name|entities|notations|publicId|systemId|internalSubset
			
 * Notation : Node
	
		readonly attribute:
			publicId|systemId
			
 * Entity : Node
	
		readonly attribute:
			publicId|systemId|notationName
			
 * EntityReference : Node 
 * ProcessingInstruction : Node 
	
		attribute:
			data
		readonly attribute:
			target
		
DOM level 3 support:
-----

 * [Node](http://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-textContent)
		
		attribute:
			textContent
		method:
			isDefaultNamespace(namespaceURI){
			lookupNamespaceURI(prefix)

DOM extension by xmldom
---
 * [Node] Source position extension; 
		
		attribute:
			//Numbered starting from '1'
			lineNumber
			//Numbered starting from '1'
			columnNumber
