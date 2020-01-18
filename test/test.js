var DOMParser = require('../dom-parser').DOMParser;

var doc = new DOMParser().parseFromString(
  `<html><body>
  <div id="a" class="a">
      <a class="b">abcd</a>
  </div>
  
  <div id="a" class="a">
      <a class="b">efgh</a>
  </div>
  
  <div class="b a andEvenMore" name="my-element">
      <a href="aa" id="b" />
  </div>
  <div class="a b c d">
    <div class="video video_link" href="www.myvideos.com/video1.mp4">
      <p class="tiny  text duration">3:40</p>
      <img data-src="www.myvideos.com\/video1.png" alt="video1 image" />
    </div>
  </div>
  <div class="a b c d">
    <div class="video video_link" href="www.myvideos.com/video2.mp4">
      <p class="tiny  text duration">9:33</p>
      <img data-src="www.myvideos.com\/video2.png" alt="video2 image" />
    </div>
  </div>
  <div class="a b c d">
    <div class="video video_link" href="www.myvideos.com/video3.mp4">
      <p class="tiny  text duration">4:21</p>
      <img data-src="www.myvideos.com\/video3.png" alt="video3 image" />
    </div>
  </div>
  </body></html>`
  ,'text/html');

// console.log(doc.getElementsByAttribute('class', 'b'));
var ulResults = Array.from(doc.getElementsByClassName('video_link', false))
ulResults.forEach(el => console.log(el.getAttribute("href").replace(/\\/g, '')))
ulResults.forEach(el => console.log(el.querySelect('img')[0].getAttribute("alt")))
ulResults.forEach(el => console.log(el.getElementsByClassName('duration', false)[0].textContent))
// console.log(ulResults[0].querySelect('img')[0].getAttribute("alt"))

// console.log(doc.querySelect('.div.aa       class#a a'))
//console.log(doc.findSelector('div.aa#in[ii="a"]'))
//console.log(doc.getElementsBySelector('a[href="aa"]#b'))
//console.log(doc.getElementsBySelector('div.b'))
console.log('end')
