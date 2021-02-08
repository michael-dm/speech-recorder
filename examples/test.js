const fs = require("fs");
const { SpeechRecorder, getDevices } = require("../dist/index");

const recorder = new SpeechRecorder({
  channelNumber: 2,
  channelId: 2,
});

recorder.start({
  deviceId: 6,
  onAudio: (audio, speaking, speech, volume, silence) => {
    console.log(volume);
  },
});
