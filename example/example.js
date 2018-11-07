var audioContext = new AudioContext()

var url = 'http://localhost:8000/example/ethos_final_hope.mp3'

fetch(url)
.then(resp => resp.arrayBuffer())
.then(arrayBuffer => {
  arrayBufferToAudioBuffer(arrayBuffer, audioContext)
  .then(audioBuffer => {
    console.log(audioBuffer)
  })
})
