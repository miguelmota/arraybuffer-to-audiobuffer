# arraybuffer-to-audiobuffer

Convert ArrayBuffer to AudioBuffer

# Install

```bash
npm install arraybuffer-to-audiobuffer
```

# Usage

Pass [`ArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) as first argument.

Takes an optional [`AudioContext`](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext) as second argument, otherwise it'll create a new `AudioContext`.

Returns [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) which resolves to [`AudioBuffer`](https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer).

```javascript
const arrayBufferToAudioBuffer = require('arraybuffer-to-audiobuffer')

arrayBufferToAudioBuffer(arrayBuffer, audioContext)
.then(audioBuffer => {
  // do something with AudioBuffer
})
```

# License

MIT
