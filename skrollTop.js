/*!
 * skrollTop 0.0.1
 * https://github.com/alvarotrigo/skrollTop.js
 * @license MIT
 *
 * Copyright (C) 2018 alvarotrigo.com - A project by Alvaro Trigo
 */
(function (root, factory) {
  if ( typeof define === 'function' && define.amd ) {
    define([], (function () {
      return factory(root, root.document);
    }));
  } else if ( typeof exports === 'object' ) {
    module.exports = factory(root, root.document);
  } else {
    root.skrollTop = factory(root, root.document);
  }
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this, (function (window, document) {
    'use strict';

    var g_activeAnimation;
    var self = {};

    //easeInOutCubic animation included in the library
    Math.easeInOutCubic = function (t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t + b;return c/2*((t-=2)*t*t + 2) + b;
    };

    self.stop = function(){
        g_activeAnimation = false;
    };

    /**
    * Simulates the animated scrollTop of jQuery. Used when css3:false or scrollBar:true or autoScrolling:false
    * http://stackoverflow.com/a/16136789/1081396
    */
   self.scrollTo = function(params) {
    console.log(params);
       var element = typeof params.element !== 'undefined' ? params.element : window;
       var to = params.to;
       var duration = typeof params.duration !== 'undefined' ? params.duration : 700;
       var callback = typeof params.callback !== 'undefined' ? params.callback : null;
       var easing = typeof params.easing !== 'undefined' ? params.easing : Math.easeInOutCubic;
       console.log(typeof params.easing !== 'undefined');
       var start = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);
       var change = to - start;
       var currentTime = 0;
       var increment = 16; //same amount of milliseconds as requestAnimationFrame
       g_activeAnimation = true;

       var animateScroll = function() {
            //in case we want to stop it from other function whenever we want
           if (g_activeAnimation) {
               currentTime += increment;
               element.scrollTo(0, easing(currentTime, start, change, duration));

               if (currentTime < duration) {
                   setTimeout(animateScroll, increment);
               } else if (callback){
                   callback();
               }
           }else if (currentTime < duration && callback){
               callback();
           }
       };

       animateScroll();
   };

   return self;
}));
