var DOMParser = require('xmldom').DOMParser;
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

//console.log(doc.getElementsByAttribute('class', 'b'));
//console.log(querySelecotr('.div.aa       class#a a'))
//console.log(findSelector('div.aa#in[ii="a"]'))
//console.log(doc.getElementsBySelector('a[href="aa"]#b'))
//console.log(doc.getElementsBySelector('div.b'))
console.log(doc.querySelect('div.a a.b'))
console.log('end')


var querySelecotr = function(query) {
    if(typeof query != 'string'){
        console.log('not string')
    }else {
        var queryArray = []
        query.split(' ').forEach(function (ele, index, arr) {
            if(ele != ''){
                queryArray.push(ele)
            }
        })
        return queryArray
    }
}

var findSelector = function(query) {
    //#은 #[a-z,A-Z]\w+
    //.은 \.[a-z,A-Z]\w+
    //tag는 ^[a-z,A-Z]\w+
    //속성값 안에 든거 \[[a-z,A-z,]\w+\=\'[a-z]\']
    var queryArray = []
    if(/#[a-z,A-Z]\w+/.exec(query)){
       queryArray.push(/#[a-z,A-Z]\w+/.exec(query)); 
    }if(/\.[a-z,A-Z]\w+/.exec(query)){
       queryArray.push(/\.[a-z,A-Z]\w+/.exec(query)); 
    }if(/^[a-z,A-Z]\w+/.exec(query)){
       queryArray.push(/^[a-z,A-Z]\w+/.exec(query)); 
    }if(/\[[a-z,A-z,]\w+\=((\'[a-z]\')|(\"[a-z]\"))]/.exec(query)){
       queryArray.push(/\[[a-z,A-z,]\w+\=((\'[a-z]\')|(\"[a-z]\"))]/.exec(query)); 
    }
    
    queryArray.sort(function (a,b) {
        return a.index - b.index
    })
    return queryArray
}


var runSelector = function(queryArray, dom){
    //getElementsBySelector()
    var queryQueue = [dom]
    queryArray.forEach(function(query, index, queryArray){
        //if class
        switch (query[0][0]) {
            case '.':
                var Node = queryQueue[0]
                queryQueue.shift()
                Node.getElementByClassName(query[0].shift())
                break;
            case '#':
                var Node = queryQueue[0]
                queryQueue.shift()
                Node.getElementById(query[0].shift())
                break;
            case '[':
                var Node = queryQueue[0]
                queryQueue.shift()
                var attribute = query[0].shift().pop().split('=')
                Node.getElementByAttribute(attribute[0], attribute[1])
                break;
            //tag
            default:
                var Node = queryQueue[0]
                queryQueue.shift()
                Node.getElementByTagName(query[0])
                break;
        }
    })
}    