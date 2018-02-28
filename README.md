# skrollTop.js
![preview](https://alvarotrigo.com/skrollTop/skrollTop.png)
![compatibility](https://raw.github.com/alvarotrigo/fullPage.js/master/examples/imgs/compatible.gif?v=2)
---

![skrollTop.js version](http://img.shields.io/badge/fullPage.js-v0.0.1-brightgreen.svg)
[![License](http://img.shields.io/badge/License-MIT-blue.svg)](http://opensource.org/licenses/MIT)
[![PayPal Donate](https://img.shields.io/badge/donate-PayPal.me-ff69b4.svg)](https://www.paypal.me/alvarotrigo/9.95)
&nbsp;&nbsp; **|**&nbsp;&nbsp; *0.4Kb gziped* &nbsp;&nbsp;**|**&nbsp;&nbsp; *Created by [@imac2](https://twitter.com/imac2)*

- [Live demo](http://alvarotrigo.com/skrollTop/)

## Introduction

Why another smooth scrolling library? Don't we have enoguth?
Indeed we do! And some are great in fact! But I didn't need such a big amout of code for my simple purpose of using `scrollTop` programatically. This is only 400bytes!

This library reduces the code to the bary minimum and stills providing some nice features such as:

- Callback on finish.
- Optionally scroll a different element than the window.
- Use different easings as jQuery UI did in the past.
- Stop animation programatically.

## Usage

The basic usage would be:

```javascript
skrollTop.scrollTo({
    to: 800
});
```

Another example with all parameters would be as follow:

```javascript
skrollTop.scrollTo({
    element: window,
    to: 800,
    easing: window.easings.easeOutBounce,
    duration: 600,
    callback: function() {
       console.log("finished!");
    }
});
``

## Stop animation at any moment
You can stop the animation in course by calling:

```javascript
skrollTop.stop();
```

## Using easing effects
By default the library includes the `easeInOutCubic` easing effect.
If you wish to make use of any other, you can make use of the vendor file [`easings.js`](https://github.com/alvarotrigo/skrollTop.js/blob/master/easings.js) and pass the easing function to the skroll library whenever you call it:

 ```javascript
skrollTop.scrollTo({
    element: window,
    to: 800,
    easing: window.easings.easeOutBounce // <-- here
});
```

## Donations
Donations would be more than welcome :)

[![Donate](https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=BEK5JQCQMED4J&lc=GB&item_name=fullPage%2ejs&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)


## License

**The credit comments in the JavaScript and CSS files should be kept intact** (even after combination or minification )

(The MIT License)

Copyright (c) 2013 Alvaro Trigo &lt;alvaro@alvarotrigo.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
