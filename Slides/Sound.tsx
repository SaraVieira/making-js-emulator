import React from 'react'
const code = `export class Speaker {
  constructor() {
    const AudioContext = window.AudioContext;

    this.oscillator = null;
    this.audioCtx = new AudioContext();

    // Create a gain, which will allow us to control the volume
    this.gain = this.audioCtx.createGain();
    this.finish = this.audioCtx.destination;

    // Connect the gain to the audio context
    this.gain.connect(this.finish);
  }
}`

const play = `
  play() {
    if (!this.oscillator) {
      this.oscillator = this.audioCtx.createOscillator();
      this.gain.gain.setValueAtTime(0.05, this.audioCtx.currentTime);
      // Set the beep
      this.oscillator.frequency.setValueAtTime(
        440,
        this.audioCtx.currentTime
      );
      this.oscillator.type = 'square';
      this.oscillator.connect(this.gain);
      this.oscillator.start();
    }
  }
`

export const Sound = () => {
  return (
    <>
      <section>
        <div className="flex flex-col gap-8 mb-8">
          <span className="text-white">Sound</span>
        </div>
        <ul>
          <li>One beep</li>
          <li>No boops</li>
        </ul>
      </section>
      <section data-auto-animate>
        <pre className="!shadow-none">
          <code
            className="!bg-transparent javascript"
            data-trim
            data-noescape
            data-line-numbers="1-6"
          >
            {code}
          </code>
        </pre>
      </section>
      <section data-auto-animate>
        <pre className="!shadow-none">
          <code
            className="!bg-transparent javascript"
            data-trim
            data-noescape
            data-line-numbers="1-33"
          >
            {code}
          </code>
        </pre>
      </section>
      <section>
        <div className="mx-auto text-center justify-center">
          <span className="text-white">Playing the beep</span>
        </div>
      </section>
      <section data-auto-animate>
        <pre className="!shadow-none">
          <code
            className="!bg-transparent javascript"
            data-trim
            data-noescape
            data-line-numbers="1-9"
          >
            {play}
          </code>
        </pre>
      </section>
      <section data-auto-animate>
        <pre className="!shadow -none">
          <code
            className="!bg-transparent javascript"
            data-trim
            data-noescape
            data-line-numbers="1-33"
          >
            {play}
          </code>
        </pre>
      </section>
    </>
  )
}
