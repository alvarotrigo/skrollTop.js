# skrollTop.js
![preview](https://alvarotrigo.com/skrollTop/skrollTop.png)
![compatibility](https://raw.github.com/alvarotrigo/fullPage.js/master/examples/imgs/compatible.gif?v=2)
Lightweight jQuery scrollTop animation without jQuery
---

![skrollTop.js version](http://img.shields.io/badge/fullPage.js-v0.0.1-brightgreen.svg)
[![License](http://img.shields.io/badge/License-MIT-blue.svg)](http://opensource.org/licenses/MIT)
[![PayPal Donate](https://img.shields.io/badge/donate-PayPal.me-ff69b4.svg)](https://www.paypal.me/alvarotrigo/9.95)
&nbsp;&nbsp; **|**&nbsp;&nbsp; *7Kb gziped* &nbsp;&nbsp;**|**&nbsp;&nbsp; *Created by [@imac2](https://twitter.com/imac2)*

- [Live demo](http://alvarotrigo.com/skrollTop/)

# Usage

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

# Stop animation at any moment
You can stop the animation in course by calling:

```javascript
skrollTop.stop();
```

# Using easing effects
By default the library includes the `easeInOutCubic` easing effect.
If you wish to make use of any other, you can make use of the vendor file [`easings.js`](https://github.com/alvarotrigo/skrollTop.js/blob/master/easings.js) and pass the easing function to the skroll library whenever you call it:

 ```javascript
skrollTop.scrollTo({
    element: window,
    to: 800,
    easing: window.easings.easeOutBounce // <-- here
});
```

