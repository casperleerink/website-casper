import * as Tone from 'tone'
import data from '../data/andWeContinueArr.json'

class AndWeContinue {
    constructor() {
        this._started = false;
        this._active = [false, false, false, false, false, false, false];
        this._options = {
            oscillator: {
                partialCount: 0,
                partials: [],
                phase: 0,
                type: "sine",
            },
            volume: 0.2,
            envelope: {
                attack: 0.35,
                decay: 0,
                sustain: 1,
                release: 1.2,
            },
        }
        this._panners = [];
        this._synths = [];
        this._loops = [];

        this._limit = 8;
        this._frame = this.random(data);
    }

    async started(idx) {
        if (!this._started) {
            await Tone.start();
            for (let i = 0; i < 7; i++) {
                this._panners.push(new Tone.Panner(0).toDestination())
                this._synths.push(new Tone.Synth(this._options).connect(this._panners[i]));
                this._loops.push(new Tone.Loop());
            }
            this._player = new Tone.Player("https://res.cloudinary.com/casperleerink/video/upload/v1609824360/casper-website/collosal-chords-norm.mp3", () => {
                this._player.start(Tone.now() + 50);
            }).toDestination();
            this._player.fadeIn = 240;
            Tone.Transport.start();
            this.activate(idx);
            this._started = true;
            console.log(this._started);
        } else {
            if (this._active[idx]) {
                this.deactivate(idx);
            } else {
                this.activate(idx);
            }
        }
    }

    activate(idx) {
        this._active[idx] = true;
        const panner = this._panners[idx];
        const synth = this._synths[idx];
        const loop = this._loops[idx];
        const tempo = Math.random() * 4 + 0.3;
        this._frame = this.random(data);
        const callback = (time) => {
            const values = this._frame[Math.floor(this.random(this._limit))];
            panner.pan.rampTo(values[2] * 2 - 1, 0.01);
            synth.triggerAttackRelease(values[0], tempo, time, values[1] * 2.4);
        }
        loop.callback = callback;
        loop.interval = tempo + synth.envelope.release;
        loop.start();
        this._limit += 2;
    }
    deactivate(idx) {
        this._active[idx] = false; //stops the loop of triggering
        this._loops[idx].stop();
        this._limit -= 2;
    }
    random = (min, max) => {
        const rand = Math.random();
        if (typeof min === 'undefined') {
          return rand;
        } else if (typeof max === 'undefined') {
          if (min instanceof Array) {
            return min[Math.floor(rand * min.length)];
          } else {
            return rand * min;
          }
        } else {
          if (min > max) {
            const tmp = min;
            min = max;
            max = tmp;
          }
          return rand * (max - min) + min;
        }
    }

    cleanup() {
        this._started = false;
        Tone.Transport.stop();
        this._synths.forEach(s => s.dispose());
        this._panners.forEach(s => s.dispose());
        this._loops.forEach(s => s.dispose());
        this._player.dispose();
        // this._player.stop();
        // Tone.Destination.dispose();
        console.log(this._started);
    }

}

export default AndWeContinue;