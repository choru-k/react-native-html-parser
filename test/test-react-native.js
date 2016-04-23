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
                            <div id="b">
                                <a href="example.org">
                                <div class="inA">
                                    <br>bbbb</br>
                                </div>
                            </div>
                            <div class="bb">
                                Test
                            </div>
                        </body>
                    </html>`
        let doc = new DomParser().parseFromString(html,'text/html')
        
        console.log(doc.querySelect('#b .inA'))
        console.log(doc.getElementsByTagName('a'))
        console.log(doc.querySelect('#b a[href="example.org"]'))
    }
    
}