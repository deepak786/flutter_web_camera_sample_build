/* global currentTime */

const SMOOTHING_FACTOR = 0.8;
const FRAME_PER_SECOND = 60;
const FRAME_INTERVAL = 1 / FRAME_PER_SECOND;

/**
 *  Measure microphone volume.
 *
 * @class VolumeMeter
 * @extends AudioWorkletProcessor
 */
class VolumeMeter extends AudioWorkletProcessor {

  constructor() {
    super();
    this._lastUpdate = currentTime;
    this._volume = 0;
  }

  calculateRMS(inputChannelData) {
    // Calculate the squared-sum.
    let sum = 0;
    for (let i = 0; i < inputChannelData.length; i++) {
      sum += inputChannelData[i] * inputChannelData[i];
    }

    // Calculate the RMS level and update the volume.
    let rms = Math.sqrt(sum / inputChannelData.length);
    this._volume = Math.max(rms, this._volume * SMOOTHING_FACTOR);
  }

  process(inputs, outputs) {
    const input = inputs[0];

    // Note that the input will be down-mixed to mono; however, if no inputs are
    // connected then zero channels will be passed in.
    if (input.length > 0) {
      const inputChannelData = input[0];

      // Post a message to the node every 16ms.
      if (currentTime - this._lastUpdate > FRAME_INTERVAL) {
        this.calculateRMS(inputChannelData);
        this.port.postMessage(this._volume);
        this._lastUpdate = currentTime;
      }
    }

    return true;
  }
}

registerProcessor("volume-meter", VolumeMeter);