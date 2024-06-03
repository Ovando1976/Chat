// public/rtc.js

const ws = new WebSocket('ws://localhost:8080');
let peer;

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  if (data.type === 'signal') {
    peer.signal(data.signal);
  }
};

function startCall(isInitiator) {
  peer = new SimplePeer({
    initiator: isInitiator,
    trickle: false
  });

  peer.on('signal', (signal) => {
    ws.send(JSON.stringify({ type: 'signal', signal }));
  });

  peer.on('stream', (stream) => {
    const video = document.querySelector('#remoteVideo');
    video.srcObject = stream;
    video.play();
  });

  navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then((stream) => {
      const localVideo = document.querySelector('#localVideo');
      localVideo.srcObject = stream;
      localVideo.play();
      peer.addStream(stream);
    })
    .catch((err) => console.error('Error accessing media devices.', err));
}

document.querySelector('#startCall').addEventListener('click', () => {
  startCall(true);
});

document.querySelector('#joinCall').addEventListener('click', () => {
  startCall(false);
});
