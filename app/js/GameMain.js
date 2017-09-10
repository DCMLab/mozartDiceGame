const MidiConvert       = require('./lib/MidiConvert');
const Tone              = require('./lib/Tone');
const GameModel         = require('./GameModel');
const GameView          = require('./GameView');
const GameController    = require('./GameController');

class GameMain {
    constructor() {
        // create objects of needed classes
        this.gameModel          = new GameModel();
        this.gameView           = new GameView();
        this.gameController     = new GameController(this);

        this.init();
    }

    // using init method for proper form
    init() {
        this.randomSong();
        this.loadSong();
        this.formPlayfield();
    }

    // creates the playfield for the player to interact with
    formPlayfield() {
        this.gameView.formPlayfield(this);
    }

    // refreshes the playField with new selections
    updatePlayfield() {
        this.gameView.updatePlayfield(this);
    }

    // creates a random song
    randomSong() {
        this.gameModel.randomSong();
    }

    // play a single note
    playNote(time, event, synth) {
        this.gameModel.synth.triggerAttackRelease(event.name,
            event.duration,
            time,
            event.velocity);
    }

    // load the entirety of the selectedNotes
    loadSong() {
        var offset = 0;

        for (var i = 0; i < this.gameModel.selectedNotes.length; i++) {
            // load in each midi file for playing
            MidiConvert.load("./audio/mozartMidi/" + this.gameModel.selectedNotes[i]).then(function(midi) {
                Tone.Transport.bpm.value = midi.bpm; // remove?
                var theNotes = midi.tracks[0].notes;
                var aPart = new Tone.Part(function(time, note) {
                    this.playNote(time, note, this.gameModel.synth);
                }.bind(this), theNotes).start(offset);

                // testing parts
                this.gameModel.allParts.push(aPart);

                // take last note and add to offset
                var lastNote = theNotes.slice(-1)[0];

                // there appears to be a delay in the measures. using 1.5 as temp fix
                offset += lastNote.time - 1.5;
            }.bind(this));
        }
    }

    // method clears Tone of existing song
    clearSong() {
        this.gameModel.clearSong();
    }

    // play song via transport
    playSong() {
        this.gameController.playSong(this);
    }

    // pauses transport thus pausing song
    pauseSong() {
        this.gameController.pauseSong(this);
    }

    // restart song by setting transport to beginning
    resetSong() {
        this.gameController.resetSong();
    }
}

module.exports = GameMain;