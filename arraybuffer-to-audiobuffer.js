;(function(root) {
  'use strict';

  function arrayBufferToAudioBuffer(arrayBuffer, context) {
    return new Promise((resolve, reject) => {
      if (context) {
        if (Object.prototype.toString.call(context) !==
            '[object AudioContext]') {
          throw new TypeError('`context` must be an AudioContext')
        }
      } else {
        context = new (window.AudioContext ||
          window.webkitAudioContext)
      }

      context.decodeAudioData(arrayBuffer, function(data) {
        resolve(data)
      }, reject)
    })
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = arrayBufferToAudioBuffer
    }
    exports.arrayBufferToAudioBuffer = arrayBufferToAudioBuffer
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return arrayBufferToAudioBuffer
    });
  } else {
    root.arrayBufferToAudioBuffer = arrayBufferToAudioBuffer
  }
})(this);
