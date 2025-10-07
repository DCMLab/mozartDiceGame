(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
//const Tone              = require('Tone');
var GameController = /*#__PURE__*/function () {
  function GameController(app) {
    _classCallCheck(this, GameController);
    // setup play/pause button
    /*this.playButton = document.getElementById('play-button');
    this.playButton.addEventListener('click', function() {
        // toggle song playing
        app.gameModel.isPlaying ? app.pauseSong() : app.playSong();
    }.bind(this));*/

    // setup random button
    /*this.randomButton = document.getElementById('random-button');*/
    document.addEventListener('keypress', function (event) {
      if (event.code === 'Space' || event.code === 'Enter') {
        event.preventDefault(); // Prevent default action like scrolling
        console.log('Randomizing song...');
        app.reloadRandom();
      }
    }.bind(this));
    // setup instrument select button
    /*this.instrumButton = document.getElementById('instrum-button');
    if (this.instrumButton) {   // Execute only when the corresponding button is present
        this.instrumButton.addEventListener('click', function() {
            app.pauseSong();
            app.gameView.selectionContainer.style.display = 'block';
            app.gameView.instrumContainer.style.display = 'block'
        }.bind(this));
    }
      // setup reset button
    this.resetButton = document.getElementById('reset-button');
    this.resetButton.addEventListener('click', function() {
        // TODO: this is much more responsive but is overkill. Make simpler
        app.reloadSong();
    }.bind(this));*/

    // setup exit button to hide the selection-container
    /*this.exitButton = document.getElementById('exit-button');
    this.exitButton.addEventListener('click', function() {
        app.reloadSong();
        app.clearPulse();
        app.stopSampler();
        this.animateMinuetToSlot(app);
          document.querySelectorAll('.slots').forEach(el => el.classList.remove('clicked-slot'));
          app.gameView.selectionContainer.style.display = 'none';
        app.gameView.instrumContainer.style.display = 'none';
        app.gameView.minuetContainer.style.display = 'none';
    }.bind(this));*/

    // switch to piano
    /*this.pianoButton = document.getElementById('piano-button');
    if (this.pianoButton) {     // Execute only when the corresponding button is present
        this.pianoButton.addEventListener('click', function() {
            app.gameModel.selectedInstrum = 'piano';
            app.gameModel.selectedPath = app.gameModel.instruments['piano'];
            app.updateHighlightedInstrum(this.pianoButton);
            app.updateInstrumImage();
        }.bind(this));
    }
      // switch to clavinet
    this.clavButton = document.getElementById('clav-button');
    if (this.clavButton) {      // Execute only when the corresponding button is present
        this.clavButton.addEventListener('click', function() {
            app.gameModel.selectedInstrum = 'clavinet';
            app.gameModel.selectedPath = app.gameModel.instruments['clavinet'];
            app.updateHighlightedInstrum(this.clavButton);
            app.updateInstrumImage();
        }.bind(this));
    }
      // switch to harpsichord
    this.harpsiButton = document.getElementById('harpsi-button');
    if (this.harpsiButton) {     // Execute only when the corresponding button is present
        this.harpsiButton.addEventListener('click', function() {
            app.gameModel.selectedInstrum = 'harpsichord';
            app.gameModel.selectedPath = app.gameModel.instruments['harpsichord'];
            app.updateHighlightedInstrum(this.harpsiButton);
            app.updateInstrumImage();
        }.bind(this));
    }
      // adding event listeners to children divs of minuet-container
    app.gameView.minuetContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('circle')) {
            let pos = event.target.id.match(/(\d+)/)[0];
            app.gameModel.selectedNotes[app.currentSlot] = app.gameModel.theScore[app.currentSlot][pos];
        }
      }.bind(this));*/
  }

  // play song via transport
  return _createClass(GameController, [{
    key: "playSong",
    value: function playSong(app) {
      Tone.Transport.start('+0.1');
      app.gameModel.isPlaying = true;
      app.togglePlayImage();
    }

    // pauses transport
  }, {
    key: "pauseSong",
    value: function pauseSong(app) {
      Tone.Transport.pause();
      app.gameModel.isPlaying = false;
      app.togglePlayImage();
    }

    // restart song by setting transport to beginning
  }, {
    key: "resetSong",
    value: function resetSong() {
      Tone.Transport.position = '0:02:05';
    }

    // TO-DO: still with some displacement
  }, {
    key: "animateMinuetToSlot",
    value: function animateMinuetToSlot(app) {
      var selectedMinuet = document.querySelector('.pulse') || document.querySelector('.highlight');
      if (selectedMinuet && app.currentSlot !== undefined) {
        var slot = document.getElementById('slot-' + app.currentSlot);
        var minuetRect = selectedMinuet.getBoundingClientRect();
        var slotRect = slot.getBoundingClientRect();

        // Create a clone of the minuet for animation
        var clone = selectedMinuet.cloneNode(true);
        clone.classList.add('minuet-transition');

        // Set initial position and size
        clone.style.position = 'fixed';
        clone.style.top = minuetRect.top + 'px';
        clone.style.left = minuetRect.left + 'px';
        clone.style.width = minuetRect.width + 'px';
        clone.style.height = minuetRect.height + 'px';
        clone.style.margin = '0';
        clone.style.transform = 'translate(-50%, -50%)';
        clone.style.zIndex = '1000';
        document.body.appendChild(clone);

        // Force a reflow
        clone.offsetHeight;

        // Animate to the slot position
        clone.style.top = slotRect.top + slotRect.height / 2 + 'px';
        clone.style.left = slotRect.left + slotRect.width / 2 + 'px';
        clone.style.width = slotRect.width + 'px';
        clone.style.height = slotRect.height + 'px';
        clone.style.borderRadius = '5%';

        // Update the slot after animation
        var _handleTransitionEnd = function handleTransitionEnd() {
          slot.style.backgroundImage = selectedMinuet.style.backgroundImage;
          slot.classList.add('slot-flash');
          if (clone.parentNode) {
            document.body.removeChild(clone);
          }
          clone.removeEventListener('transitionend', _handleTransitionEnd);
        };
        clone.addEventListener('transitionend', _handleTransitionEnd);
        return true; // Animation started
      }
      return false; // No animation performed
    }
  }]);
}();
module.exports = GameController;

},{}],2:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var GameModel = require('./GameModel');
var GameView = require('./GameView');
var GameController = require('./GameController');
var GameMain = /*#__PURE__*/function () {
  function GameMain() {
    _classCallCheck(this, GameMain);
    // create objects of needed classes
    this.gameModel = new GameModel();
    this.gameView = new GameView();
    this.gameController = new GameController(this);
    this.init();
    console.log("GameMain initialized");
  }

  // form game
  return _createClass(GameMain, [{
    key: "init",
    value: function init() {
      this.randomSong();
      //this.loadSong();
      this.formPlayfield();
    }

    // creates the playfield for the player to interact with
  }, {
    key: "formPlayfield",
    value: function formPlayfield() {
      console.log("Forming playfield...");
      this.gameView.formPlayfield(this);
    }

    // refreshes the playField with new selections
  }, {
    key: "updatePlayfield",
    value: function updatePlayfield() {
      console.log("2.Updating playfield...");
      this.gameView.updatePlayfield(this);
    }

    // highlights which slot is currently playing
  }, {
    key: "updateNowPlaying",
    value: function updateNowPlaying(slot) {
      this.gameView.updateNowPlaying(this, slot);
    }

    // creates a random song
  }, {
    key: "randomSong",
    value: function randomSong() {
      this.gameModel.randomSong();
    }

    // load selectedNotes
  }, {
    key: "loadSong",
    value: function loadSong() {
      this.gameModel.loadSong(this);
    }

    // clears Tone of existing song
  }, {
    key: "clearSong",
    value: function clearSong() {
      this.gameModel.clearSong();
    }

    // clears samplePlayer
  }, {
    key: "stopSampler",
    value: function stopSampler() {
      this.gameModel.stopSampler();
    }

    // toggles image for play button
  }, {
    key: "togglePlayImage",
    value: function togglePlayImage() {
      this.gameView.togglePlayImage(this.gameController.playButton, this.gameModel.isPlaying);
    }

    // updates the cover instrum image
  }, {
    key: "updateInstrumImage",
    value: function updateInstrumImage() {
      this.gameView.updateInstrumImage(this.gameModel.selectedInstrum, this.gameController.instrumButton);
    }

    // updates which min is currently selected based on index
  }, {
    key: "updateHighlightedMin",
    value: function updateHighlightedMin(min) {
      this.gameView.updateHighlightedMin(this, min);
    }

    // updates which instrum is currently highlighted
  }, {
    key: "updateHighlightedInstrum",
    value: function updateHighlightedInstrum(instrum) {
      this.gameView.updateHighlightedInstrum(this, instrum);
    }

    // clears all pulsing mins
  }, {
    key: "clearPulse",
    value: function clearPulse() {
      this.gameView.clearPulse(this);
    }

    // toggles the loading screen
  }, {
    key: "toggleLoading",
    value: function toggleLoading() {
      this.gameView.toggleLoading();
    }

    // load paths, good for instrument changes
  }, {
    key: "loadPaths",
    value: function loadPaths() {
      this.gameModel.loadPaths();
    }

    // play song via transport
  }, {
    key: "playSong",
    value: function playSong() {
      this.gameController.playSong(this);
    }

    // pauses transport thus pausing song
  }, {
    key: "pauseSong",
    value: function pauseSong() {
      this.gameController.pauseSong(this);
    }

    // restart song by setting transport to beginning
  }, {
    key: "resetSong",
    value: function resetSong() {
      this.gameController.resetSong();
    }

    // reload a random song
    // TODO: Simplify with the reloadSong() method
  }, {
    key: "reloadRandom",
    value: function reloadRandom() {
      //this.pauseSong();
      //this.clearSong();
      this.randomSong();
      //this.loadSong();
      this.updatePlayfield();
      //this.resetSong();
      //this.updateNowPlaying();
    }

    // general reloading of song
  }, {
    key: "reloadSong",
    value: function reloadSong() {
      this.pauseSong();
      this.clearSong();
      this.loadPaths();
      this.loadSong();
      this.updatePlayfield();
      this.resetSong();
      this.updateNowPlaying();
    }
  }]);
}();
module.exports = GameMain;

},{"./GameController":1,"./GameModel":3,"./GameView":4}],3:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
//const Tone              = require('Tone');
//const StartAudioContext = require('StartAudioContext');
var GameModel = /*#__PURE__*/function () {
  function GameModel() {
    _classCallCheck(this, GameModel);
    this.isPlaying = false; // play state of music
    this.allEvents = []; // events for lighting slots
    this.allSlots = []; // tracks each slot div in play-container
    this.selectedNotes = []; // measures that have been selected to be played
    this.notePaths = []; // path to audio files for the selected notes
    this.theScore = []; // array of all available measures to choose from
    this.players = []; // array of Tone.Players with current song
    this.selectedInstrum = 'harpsichord'; // currently selected instrument
    this.selectedPath = ''; // path to the audio files for the currently selected instrument
    this.currentSlot = -1; // which slot is currently open
    this.sampleBufs = null; // bufs for sampling individual mins
    this.samplePlayer = null; // player that is used to play the sample minuets

    // object instrument choices
    this.instruments = {
      'piano': './audio/acoustic_grand_piano/',
      'clavinet': './audio/clavinet/',
      'harpsichord': './audio/harpsichord/'
    };

    // Removed the conditional judgment for device detection, making the code effective for all devices.
    // // allows tonejs to play on mobile
    // if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    var body = document.getElementsByTagName('body')[0];
    var mobileContainer = document.createElement('div');
    mobileContainer.id = 'mobile-container';
    body.appendChild(mobileContainer);
    var mobileButton = document.createElement('div');
    mobileButton.id = 'mobile-button';
    mobileButton.classList.add('circle');
    mobileButton.textContent = 'Enter';
    mobileContainer.appendChild(mobileButton);
    mobileButton.addEventListener('click', function () {
      mobileContainer.remove();
    });

    /*StartAudioContext(Tone.context, mobileButton, function() {
        mobileContainer.remove();
    });*/
    // }

    this.init();
  }
  return _createClass(GameModel, [{
    key: "init",
    value: function init() {
      // default instrument to play
      this.selectedPath = this.instruments[this.selectedInstrum];
      this.createScore();
    }

    // forms base table for theScore
  }, {
    key: "createScore",
    value: function createScore() {
      this.theScore = [["M96", "M32", "M69", "M40", "M148", "M104", "M152", "M119", "M98", "M3", "M54"], ["M22", "M6", "M95", "M17", "M74", "M157", "M60", "M84", "M142", "M87", "M130"], ["M141", "M128", "M158", "M113", "M163", "M27", "M171", "M114", "M42", "M165", "M10"], ["M41", "M63", "M13", "M85", "M45", "M167", "M53", "M50", "M156", "M61", "M103"], ["M105", "M146", "M153", "M161", "M80", "M154", "M99", "M140", "M75", "M135", "M28"], ["M122", "M46", "M55", "M2", "M97", "M68", "M133", "M86", "M129", "M47", "M37"], ["M11", "M134", "M110", "M159", "M36", "M118", "M21", "M169", "M62", "M147", "M106"], ["M30", "M81", "M24", "M100", "M107", "M91", "M127", "M94", "M123", "M33", "M5"], ["M70", "M117", "M66", "M90", "M25", "M138", "M16", "M120", "M65", "M102", "M35"], ["M121", "M39", "M139", "M176", "M143", "M71", "M155", "M88", "M77", "M4", "M20"], ["M26", "M126", "M15", "M7", "M64", "M150", "M57", "M48", "M19", "M31", "M108"], ["M9", "M56", "M132", "M34", "M125", "M29", "M175", "M166", "M82", "M164", "M92"], ["M112", "M174", "M73", "M67", "M76", "M101", "M43", "M51", "M137", "M144", "M12"], ["M49", "M18", "M58", "M160", "M136", "M162", "M168", "M115", "M38", "M59", "M124"], ["M109", "M116", "M145", "M52", "M1", "M23", "M89", "M72", "M149", "M173", "M44"], ["M14", "M83", "M79", "M170", "M93", "M151", "M172", "M111", "M8", "M78", "M131"]];
    }

    // return random measure from an array
  }, {
    key: "randMeasure",
    value: function randMeasure(noteArray) {
      var num = Math.floor(Math.random() * noteArray.length);
      return noteArray[num];
    }

    // creates a random song
  }, {
    key: "randomSong",
    value: function randomSong() {
      this.selectedNotes = [];
      for (var i = 0; i < this.theScore.length; i++) {
        this.selectedNotes.push(this.randMeasure(this.theScore[i]));
      }
      console.log("Select new notes");

      // TODO: Find way to remove this and place within reloadRandom in GameMain
      // this.loadPaths();
    }

    // load paths based off of the selectedNotes
  }, {
    key: "loadPaths",
    value: function loadPaths() {
      this.notePaths = [];
      for (var i = 0; i < this.selectedNotes.length; i++) {
        this.notePaths.push(this.selectedPath + this.selectedNotes[i] + '.wav'); // TODO: is it okay to hard code this?
      }
    }

    // load selectedNotes so that they may be played
  }, {
    key: "loadSong",
    value: function loadSong(app) {
      app.toggleLoading();
      var offset = 0;
      this.players = new Tone.Players(this.notePaths, function () {
        var _this = this;
        var _loop = function _loop(i) {
          var player = _this.players.get(i);
          player.toMaster();
          player.sync().start(offset);
          var evt = new Tone.Event(function () {
            app.updateNowPlaying(app.gameModel.allSlots[i]);
          }.bind(_this)).start(offset + 2.0);
          _this.allEvents.push(evt);
          offset += player.buffer.duration - 2.0;
        };
        for (var i = 0; i < this.notePaths.length; i++) {
          _loop(i);
        }
        app.toggleLoading();
      }.bind(this));
    }

    // method clears Tone of existing song
  }, {
    key: "clearSong",
    value: function clearSong() {
      for (var evt in this.allEvents) {
        this.allEvents[evt].dispose();
      }
      this.allEvents = [];
      this.players.dispose();
      if (this.sampleBufs) {
        this.sampleBufs.dispose();
      }
    }

    // stops the samplePlayer from playing
  }, {
    key: "stopSampler",
    value: function stopSampler() {
      if (this.samplePlayer) {
        this.samplePlayer.stop();
      }
    }
  }]);
}();
module.exports = GameModel;

},{}],4:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
//const Tone = require('Tone');
var GameView = /*#__PURE__*/function () {
  function GameView() {
    _classCallCheck(this, GameView);
    this.selectionContainer = document.getElementById('selection-container');
    this.instrumContainer = document.getElementById('instrum-container');
    this.minuetContainer = document.getElementById('minuet-container');
    this.loadingContainer = document.getElementById('loading-container');
  }

  // creates the initial playfield for the player to interact with
  return _createClass(GameView, [{
    key: "formPlayfield",
    value: function formPlayfield(app) {
      console.log("Forming playfield..." + app.gameModel.selectedNotes.length);
      for (var i = 0; i < app.gameModel.selectedNotes.length; i++) {
        var slot = document.getElementById('slot-' + i);
        //let exitButton = document.getElementById('exit-button');
        slot.innerHTML = this.createPlayHTML(app.gameModel.selectedNotes[i]);
        slot.style.backgroundImage = 'url(./img/notation/' + app.gameModel.selectedNotes[i] + '.png)';
        console.log(slot.style.backgroundImage);

        // event listener for clicking a single slot
        /*slot.addEventListener('click', function() {
              slot.innerHTML = '?';
            slot.classList.add('clicked-slot');
            slot.style.setProperty('--bg-image', `url(../img/notation/${app.gameModel.selectedNotes[i]}.png)`);   
              app.pauseSong();
            app.toggleLoading();
              app.updateHighlightedMin(app.gameModel.theScore[i].indexOf(app.gameModel.selectedNotes[i]));
              // gather paths we need to load in for user to sample
            let paths = [];
            for (let k = 0; k < app.gameModel.theScore[i].length; k++) {
                paths.push(app.gameModel.selectedPath + app.gameModel.theScore[i][k] + '.wav');
            }
              // create buffers for sound files that user can sample
            app.gameModel.sampleBufs = new Tone.Buffers(paths, function() {
                for (let j = 0; j < app.gameModel.theScore[i].length; j++) {
                    let minuet = document.getElementById('min-' + j);
                    //minuet.innerHTML = this.createPlayHTML(app.gameModel.theScore[i][j]);
                    minuet.style.backgroundImage = 'url(./img/notation/' + app.gameModel.theScore[i][j] + '.png)';
                      // allows the user to sample individual minuets
                    minuet.addEventListener('click', function() {
                        // if sampling, stop it and start this one instead
                        app.clearPulse();
                        app.stopSampler();
                          minuet.classList.add('pulse'); //
                        app.updateHighlightedMin(j);
                          slot.style.setProperty('--bg-image', `url(../img/notation/${app.gameModel.theScore[i][j]}.png)`);
                          app.gameModel.samplePlayer = new Tone.Player(app.gameModel.sampleBufs.get(j)).toMaster();
                        app.gameModel.samplePlayer.start(Tone.now(), 1.6); // starts with 2 second offset
                          // check for end of animation
                        minuet.addEventListener('animationend', function() {
                            app.clearPulse();
                            app.stopSampler();
                        }.bind(this));
                    }.bind(this));
                }
                app.toggleLoading();
            }.bind(this));
              this.selectionContainer.style.display = 'block';
            this.minuetContainer.style.display = 'block';
              // update the currently selected slot
            app.currentSlot = i;
            // update confirm(exit) button text
            //exitButton.textContent = `Confirm\nM${i + 1}`;
        }.bind(this));*/

        app.gameModel.allSlots.push(slot);
      }
    }

    // refreshes the playField with new selections
  }, {
    key: "updatePlayfield",
    value: function updatePlayfield(app) {
      console.log("Updating playfield...");
      for (var i = 0; i < app.gameModel.allSlots.length; i++) {
        app.gameModel.allSlots[i].innerHTML = this.createPlayHTML(app.gameModel.selectedNotes[i]);
        var slot = document.getElementById('slot-' + i);
        slot.style.backgroundImage = 'url(./img/notation/' + app.gameModel.selectedNotes[i] + '.png)';
      }
    }

    // update which slot has the playing class
  }, {
    key: "updateNowPlaying",
    value: function updateNowPlaying(app, slot) {
      for (var i = 0; i < app.gameModel.allSlots.length; i++) {
        app.gameModel.allSlots[i].classList.remove('playing');
      }
      if (slot) {
        slot.classList.add('playing');
      }
    }

    // returns the simplified innerHTML for a given note
  }, {
    key: "createPlayHTML",
    value: function createPlayHTML(note) {
      return note.match(/(\d+)/)[0];
    }
  }, {
    key: "togglePlayImage",
    value: function togglePlayImage(playButton, isPlaying) {
      playButton.style.backgroundImage = 'url(\'' + (!isPlaying ? './img/buttonPlay.png' : './img/buttonPause.png') + '\')';
    }

    // TODO: make this better. Seems a little excess
  }, {
    key: "updateInstrumImage",
    value: function updateInstrumImage(instrum, button) {
      var path;
      switch (instrum) {
        case 'piano':
          path = './img/buttonPiano.png';
          break;
        case 'clavinet':
          path = './img/buttonClav.png';
          break;
        case 'harpsichord':
          path = './img/buttonHarpsi.png';
          break;
      }
      button.style.backgroundImage = 'url(\'' + path + '\')';
    }

    // updates which min is currently highlighted based on given index
  }, {
    key: "updateHighlightedMin",
    value: function updateHighlightedMin(app, min) {
      for (var i = 0; i < app.gameModel.theScore[0].length; i++) {
        var elm = document.getElementById('min-' + i);
        if (i !== min) elm.classList.remove('highlight');else elm.classList.add('highlight');
      }
    }

    // updates currently highlighted instrum
    // TODO: condense this and the previous method into a single function
  }, {
    key: "updateHighlightedInstrum",
    value: function updateHighlightedInstrum(app, instrum) {
      app.gameController.pianoButton.classList.remove('highlight');
      app.gameController.clavButton.classList.remove('highlight');
      app.gameController.harpsiButton.classList.remove('highlight');
      instrum.classList.add('highlight');
    }

    // clears all pulsing mins
  }, {
    key: "clearPulse",
    value: function clearPulse(app) {
      for (var i = 0; i < app.gameModel.theScore[0].length; i++) {
        var elm = document.getElementById('min-' + i);
        elm.classList.remove('pulse');
      }
    }

    // toggles the loading screen
  }, {
    key: "toggleLoading",
    value: function toggleLoading() {
      if (this.loadingContainer.classList.contains('active')) this.loadingContainer.classList.remove('active');else this.loadingContainer.classList.add('active');
    }
  }]);
}();
module.exports = GameView;

},{}],5:[function(require,module,exports){
"use strict";

// needed for require.js
var GameMain = require('./GameMain.js');
var gameMain = new GameMain();
console.log('app.js loaded');

},{"./GameMain.js":2}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvR2FtZUNvbnRyb2xsZXIuanMiLCJhcHAvanMvR2FtZU1haW4uanMiLCJhcHAvanMvR2FtZU1vZGVsLmpzIiwiYXBwL2pzL0dhbWVWaWV3LmpzIiwiYXBwL2pzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FDQUE7QUFBQSxJQUVNLGNBQWM7RUFDaEIsU0FBQSxlQUFZLEdBQUcsRUFBRTtJQUFBLGVBQUEsT0FBQSxjQUFBO0lBQ2I7SUFDQTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztJQUVRO0lBQ0E7SUFDQSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLFVBQVMsS0FBSyxFQUFFO01BQ2xELElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxPQUFPLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7UUFDbEQsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztNQUN0QjtJQUNKLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDYjtJQUNBO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBR1E7SUFDQTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUlRO0lBQ0E7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFLLEVBQUcsS0FBSyxFQUFHLEtBQUssRUFBRyxLQUFLLEVBQUUsTUFBTSxFQUFHLEtBQUssRUFBRyxLQUFLLEVBQUUsTUFBTSxFQUFHLEtBQUssRUFBRSxNQUFNLENBQUMsRUFDeEYsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUcsS0FBSyxFQUFFLE1BQU0sRUFBRyxLQUFLLEVBQUUsTUFBTSxFQUFHLEtBQUssRUFBRSxNQUFNLEVBQUcsS0FBSyxDQUFDLEVBQ3hGLENBQUMsTUFBTSxFQUFHLEtBQUssRUFBRyxLQUFLLEVBQUksSUFBSSxFQUFHLEtBQUssRUFBRyxLQUFLLEVBQUUsTUFBTSxFQUFHLEtBQUssRUFBRSxNQUFNLEVBQUcsS0FBSyxFQUFHLEtBQUssQ0FBQyxFQUN4RixDQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRyxLQUFLLEVBQUUsTUFBTSxFQUFHLEtBQUssRUFBRSxNQUFNLEVBQUcsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFDeEYsQ0FBRSxLQUFLLEVBQUcsS0FBSyxFQUFHLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFHLEtBQUssRUFBRSxNQUFNLEVBQUcsS0FBSyxFQUFFLE1BQU0sRUFBRyxLQUFLLEVBQUksSUFBSSxDQUFDLEVBQ3hGLENBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRyxLQUFLLEVBQUcsS0FBSyxFQUFHLEtBQUssRUFBRSxNQUFNLEVBQUcsS0FBSyxFQUFFLE1BQU0sRUFBRyxLQUFLLEVBQUUsTUFBTSxFQUFHLEtBQUssQ0FBQyxFQUN4RixDQUFDLE1BQU0sRUFBRyxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUcsS0FBSyxFQUFFLE1BQU0sRUFBRyxLQUFLLEVBQUcsS0FBSyxFQUFJLElBQUksRUFBRyxLQUFLLENBQUMsRUFDeEYsQ0FBRSxLQUFLLEVBQUUsTUFBTSxFQUFHLEtBQUssRUFBSSxJQUFJLEVBQUcsS0FBSyxFQUFFLE1BQU0sRUFBRyxLQUFL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UyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDdkQsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRTdDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztNQUNqQztJQUNKOztJQUVBO0VBQUE7SUFBQSxHQUFBO0lBQUEsS0FBQSxFQUNBLFNBQUEsYUFBYSxDQUFBLEVBQUc7TUFDWixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUNsRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUVqRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDckQ7RUFBQztBQUFBO0FBR0wsTUFBTSxDQUFDLE9BQU8sR0FBRyxRQUFROzs7OztBQy9LekI7QUFDQSxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDO0FBQ3ZDLElBQUksUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLENBQUM7QUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvL2NvbnN0IFRvbmUgICAgICAgICAgICAgID0gcmVxdWlyZSgnVG9uZScpO1xyXG5cclxuY2xhc3MgR2FtZUNvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoYXBwKSB7IFxyXG4gICAgICAgIC8vIHNldHVwIHBsYXkvcGF1c2UgYnV0dG9uXHJcbiAgICAgICAgLyp0aGlzLnBsYXlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheS1idXR0b24nKTtcclxuICAgICAgICB0aGlzLnBsYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gdG9nZ2xlIHNvbmcgcGxheWluZ1xyXG4gICAgICAgICAgICBhcHAuZ2FtZU1vZGVsLmlzUGxheWluZyA/IGFwcC5wYXVzZVNvbmcoKSA6IGFwcC5wbGF5U29uZygpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7Ki9cclxuXHJcbiAgICAgICAgLy8gc2V0dXAgcmFuZG9tIGJ1dHRvblxyXG4gICAgICAgIC8qdGhpcy5yYW5kb21CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZG9tLWJ1dHRvbicpOyovXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ1NwYWNlJyB8fCBldmVudC5jb2RlID09PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBQcmV2ZW50IGRlZmF1bHQgYWN0aW9uIGxpa2Ugc2Nyb2xsaW5nXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmFuZG9taXppbmcgc29uZy4uLicpO1xyXG4gICAgICAgICAgICAgICAgYXBwLnJlbG9hZFJhbmRvbSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICAvLyBzZXR1cCBpbnN0cnVtZW50IHNlbGVjdCBidXR0b25cclxuICAgICAgICAvKnRoaXMuaW5zdHJ1bUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnN0cnVtLWJ1dHRvbicpO1xyXG4gICAgICAgIGlmICh0aGlzLmluc3RydW1CdXR0b24pIHsgICAvLyBFeGVjdXRlIG9ubHkgd2hlbiB0aGUgY29ycmVzcG9uZGluZyBidXR0b24gaXMgcHJlc2VudFxyXG4gICAgICAgICAgICB0aGlzLmluc3RydW1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGFwcC5wYXVzZVNvbmcoKTtcclxuICAgICAgICAgICAgICAgIGFwcC5nYW1lVmlldy5zZWxlY3Rpb25Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICBhcHAuZ2FtZVZpZXcuaW5zdHJ1bUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc2V0dXAgcmVzZXQgYnV0dG9uXHJcbiAgICAgICAgdGhpcy5yZXNldEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldC1idXR0b24nKTtcclxuICAgICAgICB0aGlzLnJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IHRoaXMgaXMgbXVjaCBtb3JlIHJlc3BvbnNpdmUgYnV0IGlzIG92ZXJraWxsLiBNYWtlIHNpbXBsZXJcclxuICAgICAgICAgICAgYXBwLnJlbG9hZFNvbmcoKTtcclxuICAgICAgICB9LmJpbmQodGhpcykpOyovXHJcblxyXG4gICAgICAgIC8vIHNldHVwIGV4aXQgYnV0dG9uIHRvIGhpZGUgdGhlIHNlbGVjdGlvbi1jb250YWluZXJcclxuICAgICAgICAvKnRoaXMuZXhpdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGl0LWJ1dHRvbicpO1xyXG4gICAgICAgIHRoaXMuZXhpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBhcHAucmVsb2FkU29uZygpO1xyXG4gICAgICAgICAgICBhcHAuY2xlYXJQdWxzZSgpO1xyXG4gICAgICAgICAgICBhcHAuc3RvcFNhbXBsZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRlTWludWV0VG9TbG90KGFwcCk7XHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xvdHMnKS5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrZWQtc2xvdCcpKTtcclxuXHJcbiAgICAgICAgICAgIGFwcC5nYW1lVmlldy5zZWxlY3Rpb25Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgYXBwLmdhbWVWaWV3Lmluc3RydW1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgYXBwLmdhbWVWaWV3Lm1pbnVldENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7Ki9cclxuXHJcbiAgICAgICAgLy8gc3dpdGNoIHRvIHBpYW5vXHJcbiAgICAgICAgLyp0aGlzLnBpYW5vQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpYW5vLWJ1dHRvbicpO1xyXG4gICAgICAgIGlmICh0aGlzLnBpYW5vQnV0dG9uKSB7ICAgICAvLyBFeGVjdXRlIG9ubHkgd2hlbiB0aGUgY29ycmVzcG9uZGluZyBidXR0b24gaXMgcHJlc2VudFxyXG4gICAgICAgICAgICB0aGlzLnBpYW5vQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBhcHAuZ2FtZU1vZGVsLnNlbGVjdGVkSW5zdHJ1bSA9ICdwaWFubyc7XHJcbiAgICAgICAgICAgICAgICBhcHAuZ2FtZU1vZGVsLnNlbGVjdGVkUGF0aCA9IGFwcC5nYW1lTW9kZWwuaW5zdHJ1bWVudHNbJ3BpYW5vJ107XHJcbiAgICAgICAgICAgICAgICBhcHAudXBkYXRlSGlnaGxpZ2h0ZWRJbnN0cnVtKHRoaXMucGlhbm9CdXR0b24pO1xyXG4gICAgICAgICAgICAgICAgYXBwLnVwZGF0ZUluc3RydW1JbWFnZSgpO1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc3dpdGNoIHRvIGNsYXZpbmV0XHJcbiAgICAgICAgdGhpcy5jbGF2QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsYXYtYnV0dG9uJyk7XHJcbiAgICAgICAgaWYgKHRoaXMuY2xhdkJ1dHRvbikgeyAgICAgIC8vIEV4ZWN1dGUgb25seSB3aGVuIHRoZSBjb3JyZXNwb25kaW5nIGJ1dHRvbiBpcyBwcmVzZW50XHJcbiAgICAgICAgICAgIHRoaXMuY2xhdkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgYXBwLmdhbWVNb2RlbC5zZWxlY3RlZEluc3RydW0gPSAnY2xhdmluZXQnO1xyXG4gICAgICAgICAgICAgICAgYXBwLmdhbWVNb2RlbC5zZWxlY3RlZFBhdGggPSBhcHAuZ2FtZU1vZGVsLmluc3RydW1lbnRzWydjbGF2aW5ldCddO1xyXG4gICAgICAgICAgICAgICAgYXBwLnVwZGF0ZUhpZ2hsaWdodGVkSW5zdHJ1bSh0aGlzLmNsYXZCdXR0b24pO1xyXG4gICAgICAgICAgICAgICAgYXBwLnVwZGF0ZUluc3RydW1JbWFnZSgpO1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc3dpdGNoIHRvIGhhcnBzaWNob3JkXHJcbiAgICAgICAgdGhpcy5oYXJwc2lCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGFycHNpLWJ1dHRvbicpO1xyXG4gICAgICAgIGlmICh0aGlzLmhhcnBzaUJ1dHRvbikgeyAgICAgLy8gRXhlY3V0ZSBvbmx5IHdoZW4gdGhlIGNvcnJlc3BvbmRpbmcgYnV0dG9uIGlzIHByZXNlbnRcclxuICAgICAgICAgICAgdGhpcy5oYXJwc2lCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGFwcC5nYW1lTW9kZWwuc2VsZWN0ZWRJbnN0cnVtID0gJ2hhcnBzaWNob3JkJztcclxuICAgICAgICAgICAgICAgIGFwcC5nYW1lTW9kZWwuc2VsZWN0ZWRQYXRoID0gYXBwLmdhbWVNb2RlbC5pbnN0cnVtZW50c1snaGFycHNpY2hvcmQnXTtcclxuICAgICAgICAgICAgICAgIGFwcC51cGRhdGVIaWdobGlnaHRlZEluc3RydW0odGhpcy5oYXJwc2lCdXR0b24pO1xyXG4gICAgICAgICAgICAgICAgYXBwLnVwZGF0ZUluc3RydW1JbWFnZSgpO1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gYWRkaW5nIGV2ZW50IGxpc3RlbmVycyB0byBjaGlsZHJlbiBkaXZzIG9mIG1pbnVldC1jb250YWluZXJcclxuICAgICAgICBhcHAuZ2FtZVZpZXcubWludWV0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NpcmNsZScpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zID0gZXZlbnQudGFyZ2V0LmlkLm1hdGNoKC8oXFxkKykvKVswXTtcclxuICAgICAgICAgICAgICAgIGFwcC5nYW1lTW9kZWwuc2VsZWN0ZWROb3Rlc1thcHAuY3VycmVudFNsb3RdID0gYXBwLmdhbWVNb2RlbC50aGVTY29yZVthcHAuY3VycmVudFNsb3RdW3Bvc107XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTsqL1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHBsYXkgc29uZyB2aWEgdHJhbnNwb3J0XHJcbiAgICBwbGF5U29uZyhhcHApIHtcclxuICAgICAgICBUb25lLlRyYW5zcG9ydC5zdGFydCgnKzAuMScpO1xyXG4gICAgICAgIGFwcC5nYW1lTW9kZWwuaXNQbGF5aW5nID0gdHJ1ZTtcclxuICAgICAgICBhcHAudG9nZ2xlUGxheUltYWdlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcGF1c2VzIHRyYW5zcG9ydFxyXG4gICAgcGF1c2VTb25nKGFwcCkge1xyXG4gICAgICAgIFRvbmUuVHJhbnNwb3J0LnBhdXNlKCk7XHJcbiAgICAgICAgYXBwLmdhbWVNb2RlbC5pc1BsYXlpbmcgPSBmYWxzZTtcclxuICAgICAgICBhcHAudG9nZ2xlUGxheUltYWdlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmVzdGFydCBzb25nIGJ5IHNldHRpbmcgdHJhbnNwb3J0IHRvIGJlZ2lubmluZ1xyXG4gICAgcmVzZXRTb25nKCkge1xyXG4gICAgICAgIFRvbmUuVHJhbnNwb3J0LnBvc2l0aW9uID0gJzA6MDI6MDUnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRPLURPOiBzdGlsbCB3aXRoIHNvbWUgZGlzcGxhY2VtZW50XHJcbiAgICBhbmltYXRlTWludWV0VG9TbG90KGFwcCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkTWludWV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnB1bHNlJykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpZ2hsaWdodCcpO1xyXG4gICAgICAgIGlmIChzZWxlY3RlZE1pbnVldCAmJiBhcHAuY3VycmVudFNsb3QgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb25zdCBzbG90ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nsb3QtJyArIGFwcC5jdXJyZW50U2xvdCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1pbnVldFJlY3QgPSBzZWxlY3RlZE1pbnVldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgY29uc3Qgc2xvdFJlY3QgPSBzbG90LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIGNsb25lIG9mIHRoZSBtaW51ZXQgZm9yIGFuaW1hdGlvblxyXG4gICAgICAgICAgICBjb25zdCBjbG9uZSA9IHNlbGVjdGVkTWludWV0LmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICAgICAgY2xvbmUuY2xhc3NMaXN0LmFkZCgnbWludWV0LXRyYW5zaXRpb24nKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFNldCBpbml0aWFsIHBvc2l0aW9uIGFuZCBzaXplXHJcbiAgICAgICAgICAgIGNsb25lLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcclxuICAgICAgICAgICAgY2xvbmUuc3R5bGUudG9wID0gbWludWV0UmVjdC50b3AgKyAncHgnO1xyXG4gICAgICAgICAgICBjbG9uZS5zdHlsZS5sZWZ0ID0gbWludWV0UmVjdC5sZWZ0ICsgJ3B4JztcclxuICAgICAgICAgICAgY2xvbmUuc3R5bGUud2lkdGggPSBtaW51ZXRSZWN0LndpZHRoICsgJ3B4JztcclxuICAgICAgICAgICAgY2xvbmUuc3R5bGUuaGVpZ2h0ID0gbWludWV0UmVjdC5oZWlnaHQgKyAncHgnO1xyXG4gICAgICAgICAgICBjbG9uZS5zdHlsZS5tYXJnaW4gPSAnMCc7XHJcbiAgICAgICAgICAgIGNsb25lLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknO1xyXG4gICAgICAgICAgICBjbG9uZS5zdHlsZS56SW5kZXggPSAnMTAwMCc7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNsb25lKTtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBGb3JjZSBhIHJlZmxvd1xyXG4gICAgICAgICAgICBjbG9uZS5vZmZzZXRIZWlnaHQ7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gQW5pbWF0ZSB0byB0aGUgc2xvdCBwb3NpdGlvblxyXG4gICAgICAgICAgICBjbG9uZS5zdHlsZS50b3AgPSAoc2xvdFJlY3QudG9wICsgc2xvdFJlY3QuaGVpZ2h0IC8gMikgKyAncHgnO1xyXG4gICAgICAgICAgICBjbG9uZS5zdHlsZS5sZWZ0ID0gKHNsb3RSZWN0LmxlZnQgKyBzbG90UmVjdC53aWR0aCAvIDIpICsgJ3B4JztcclxuICAgICAgICAgICAgY2xvbmUuc3R5bGUud2lkdGggPSBzbG90UmVjdC53aWR0aCArICdweCc7XHJcbiAgICAgICAgICAgIGNsb25lLnN0eWxlLmhlaWdodCA9IHNsb3RSZWN0LmhlaWdodCArICdweCc7XHJcbiAgICAgICAgICAgIGNsb25lLnN0eWxlLmJvcmRlclJhZGl1cyA9ICc1JSc7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBzbG90IGFmdGVyIGFuaW1hdGlvblxyXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVUcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBzbG90LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IHNlbGVjdGVkTWludWV0LnN0eWxlLmJhY2tncm91bmRJbWFnZTtcclxuICAgICAgICAgICAgICAgIHNsb3QuY2xhc3NMaXN0LmFkZCgnc2xvdC1mbGFzaCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNsb25lLnBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNsb25lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNsb25lLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBoYW5kbGVUcmFuc2l0aW9uRW5kKTtcclxuICAgICAgICAgICAgfTtcclxuICAgIFxyXG4gICAgICAgICAgICBjbG9uZS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgaGFuZGxlVHJhbnNpdGlvbkVuZCk7XHJcbiAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7IC8vIEFuaW1hdGlvbiBzdGFydGVkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTsgLy8gTm8gYW5pbWF0aW9uIHBlcmZvcm1lZFxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR2FtZUNvbnRyb2xsZXI7IiwiY29uc3QgR2FtZU1vZGVsICAgICAgICAgPSByZXF1aXJlKCcuL0dhbWVNb2RlbCcpO1xyXG5jb25zdCBHYW1lVmlldyAgICAgICAgICA9IHJlcXVpcmUoJy4vR2FtZVZpZXcnKTtcclxuY29uc3QgR2FtZUNvbnRyb2xsZXIgICAgPSByZXF1aXJlKCcuL0dhbWVDb250cm9sbGVyJyk7XHJcblxyXG5jbGFzcyBHYW1lTWFpbiB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyBjcmVhdGUgb2JqZWN0cyBvZiBuZWVkZWQgY2xhc3Nlc1xyXG4gICAgICAgIHRoaXMuZ2FtZU1vZGVsICAgICAgICAgID0gbmV3IEdhbWVNb2RlbCgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZVZpZXcgICAgICAgICAgID0gbmV3IEdhbWVWaWV3KCk7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlciAgICAgPSBuZXcgR2FtZUNvbnRyb2xsZXIodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2FtZU1haW4gaW5pdGlhbGl6ZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZm9ybSBnYW1lXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMucmFuZG9tU29uZygpO1xyXG4gICAgICAgIC8vdGhpcy5sb2FkU29uZygpO1xyXG4gICAgICAgIHRoaXMuZm9ybVBsYXlmaWVsZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNyZWF0ZXMgdGhlIHBsYXlmaWVsZCBmb3IgdGhlIHBsYXllciB0byBpbnRlcmFjdCB3aXRoXHJcbiAgICBmb3JtUGxheWZpZWxkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRm9ybWluZyBwbGF5ZmllbGQuLi5cIik7XHJcbiAgICAgICAgdGhpcy5nYW1lVmlldy5mb3JtUGxheWZpZWxkKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlZnJlc2hlcyB0aGUgcGxheUZpZWxkIHdpdGggbmV3IHNlbGVjdGlvbnNcclxuICAgIHVwZGF0ZVBsYXlmaWVsZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIjIuVXBkYXRpbmcgcGxheWZpZWxkLi4uXCIpO1xyXG4gICAgICAgIHRoaXMuZ2FtZVZpZXcudXBkYXRlUGxheWZpZWxkKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGhpZ2hsaWdodHMgd2hpY2ggc2xvdCBpcyBjdXJyZW50bHkgcGxheWluZ1xyXG4gICAgdXBkYXRlTm93UGxheWluZyhzbG90KSB7XHJcbiAgICAgICAgdGhpcy5nYW1lVmlldy51cGRhdGVOb3dQbGF5aW5nKHRoaXMsIHNsb3QpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNyZWF0ZXMgYSByYW5kb20gc29uZ1xyXG4gICAgcmFuZG9tU29uZygpIHtcclxuICAgICAgICB0aGlzLmdhbWVNb2RlbC5yYW5kb21Tb25nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbG9hZCBzZWxlY3RlZE5vdGVzXHJcbiAgICBsb2FkU29uZygpIHtcclxuICAgICAgICB0aGlzLmdhbWVNb2RlbC5sb2FkU29uZyh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjbGVhcnMgVG9uZSBvZiBleGlzdGluZyBzb25nXHJcbiAgICBjbGVhclNvbmcoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lTW9kZWwuY2xlYXJTb25nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2xlYXJzIHNhbXBsZVBsYXllclxyXG4gICAgc3RvcFNhbXBsZXIoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lTW9kZWwuc3RvcFNhbXBsZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0b2dnbGVzIGltYWdlIGZvciBwbGF5IGJ1dHRvblxyXG4gICAgdG9nZ2xlUGxheUltYWdlKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVZpZXcudG9nZ2xlUGxheUltYWdlKHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheUJ1dHRvbiwgdGhpcy5nYW1lTW9kZWwuaXNQbGF5aW5nKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGVzIHRoZSBjb3ZlciBpbnN0cnVtIGltYWdlXHJcbiAgICB1cGRhdGVJbnN0cnVtSW1hZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lVmlldy51cGRhdGVJbnN0cnVtSW1hZ2UodGhpcy5nYW1lTW9kZWwuc2VsZWN0ZWRJbnN0cnVtLCB0aGlzLmdhbWVDb250cm9sbGVyLmluc3RydW1CdXR0b24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZXMgd2hpY2ggbWluIGlzIGN1cnJlbnRseSBzZWxlY3RlZCBiYXNlZCBvbiBpbmRleFxyXG4gICAgdXBkYXRlSGlnaGxpZ2h0ZWRNaW4obWluKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lVmlldy51cGRhdGVIaWdobGlnaHRlZE1pbih0aGlzLCBtaW4pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZXMgd2hpY2ggaW5zdHJ1bSBpcyBjdXJyZW50bHkgaGlnaGxpZ2h0ZWRcclxuICAgIHVwZGF0ZUhpZ2hsaWdodGVkSW5zdHJ1bShpbnN0cnVtKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lVmlldy51cGRhdGVIaWdobGlnaHRlZEluc3RydW0odGhpcywgaW5zdHJ1bSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2xlYXJzIGFsbCBwdWxzaW5nIG1pbnNcclxuICAgIGNsZWFyUHVsc2UoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lVmlldy5jbGVhclB1bHNlKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRvZ2dsZXMgdGhlIGxvYWRpbmcgc2NyZWVuXHJcbiAgICB0b2dnbGVMb2FkaW5nKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVZpZXcudG9nZ2xlTG9hZGluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGxvYWQgcGF0aHMsIGdvb2QgZm9yIGluc3RydW1lbnQgY2hhbmdlc1xyXG4gICAgbG9hZFBhdGhzKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZU1vZGVsLmxvYWRQYXRocygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHBsYXkgc29uZyB2aWEgdHJhbnNwb3J0XHJcbiAgICBwbGF5U29uZygpIHtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXlTb25nKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHBhdXNlcyB0cmFuc3BvcnQgdGh1cyBwYXVzaW5nIHNvbmdcclxuICAgIHBhdXNlU29uZygpIHtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLnBhdXNlU29uZyh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZXN0YXJ0IHNvbmcgYnkgc2V0dGluZyB0cmFuc3BvcnQgdG8gYmVnaW5uaW5nXHJcbiAgICByZXNldFNvbmcoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5yZXNldFNvbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZWxvYWQgYSByYW5kb20gc29uZ1xyXG4gICAgLy8gVE9ETzogU2ltcGxpZnkgd2l0aCB0aGUgcmVsb2FkU29uZygpIG1ldGhvZFxyXG4gICAgcmVsb2FkUmFuZG9tKCkge1xyXG4gICAgICAgIC8vdGhpcy5wYXVzZVNvbmcoKTtcclxuICAgICAgICAvL3RoaXMuY2xlYXJTb25nKCk7XHJcbiAgICAgICAgdGhpcy5yYW5kb21Tb25nKCk7XHJcbiAgICAgICAgLy90aGlzLmxvYWRTb25nKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQbGF5ZmllbGQoKTtcclxuICAgICAgICAvL3RoaXMucmVzZXRTb25nKCk7XHJcbiAgICAgICAgLy90aGlzLnVwZGF0ZU5vd1BsYXlpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBnZW5lcmFsIHJlbG9hZGluZyBvZiBzb25nXHJcbiAgICByZWxvYWRTb25nKCkge1xyXG4gICAgICAgIHRoaXMucGF1c2VTb25nKCk7XHJcbiAgICAgICAgdGhpcy5jbGVhclNvbmcoKTtcclxuICAgICAgICB0aGlzLmxvYWRQYXRocygpO1xyXG4gICAgICAgIHRoaXMubG9hZFNvbmcoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVBsYXlmaWVsZCgpO1xyXG4gICAgICAgIHRoaXMucmVzZXRTb25nKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVOb3dQbGF5aW5nKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR2FtZU1haW47IiwiLy9jb25zdCBUb25lICAgICAgICAgICAgICA9IHJlcXVpcmUoJ1RvbmUnKTtcclxuLy9jb25zdCBTdGFydEF1ZGlvQ29udGV4dCA9IHJlcXVpcmUoJ1N0YXJ0QXVkaW9Db250ZXh0Jyk7XHJcblxyXG5jbGFzcyBHYW1lTW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pc1BsYXlpbmcgICAgICAgICAgPSBmYWxzZTsgICAgLy8gcGxheSBzdGF0ZSBvZiBtdXNpY1xyXG4gICAgICAgIHRoaXMuYWxsRXZlbnRzICAgICAgICAgID0gW107ICAgICAgIC8vIGV2ZW50cyBmb3IgbGlnaHRpbmcgc2xvdHNcclxuICAgICAgICB0aGlzLmFsbFNsb3RzICAgICAgICAgICA9IFtdOyAgICAgICAvLyB0cmFja3MgZWFjaCBzbG90IGRpdiBpbiBwbGF5LWNvbnRhaW5lclxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWROb3RlcyAgICAgID0gW107ICAgICAgIC8vIG1lYXN1cmVzIHRoYXQgaGF2ZSBiZWVuIHNlbGVjdGVkIHRvIGJlIHBsYXllZFxyXG4gICAgICAgIHRoaXMubm90ZVBhdGhzICAgICAgICAgID0gW107ICAgICAgIC8vIHBhdGggdG8gYXVkaW8gZmlsZXMgZm9yIHRoZSBzZWxlY3RlZCBub3Rlc1xyXG4gICAgICAgIHRoaXMudGhlU2NvcmUgICAgICAgICAgID0gW107ICAgICAgIC8vIGFycmF5IG9mIGFsbCBhdmFpbGFibGUgbWVhc3VyZXMgdG8gY2hvb3NlIGZyb21cclxuICAgICAgICB0aGlzLnBsYXllcnMgICAgICAgICAgICA9IFtdOyAgICAgICAvLyBhcnJheSBvZiBUb25lLlBsYXllcnMgd2l0aCBjdXJyZW50IHNvbmdcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5zdHJ1bSAgICA9ICdoYXJwc2ljaG9yZCc7ICAvLyBjdXJyZW50bHkgc2VsZWN0ZWQgaW5zdHJ1bWVudFxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRQYXRoICAgICAgID0gJyc7ICAgICAgIC8vIHBhdGggdG8gdGhlIGF1ZGlvIGZpbGVzIGZvciB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGluc3RydW1lbnRcclxuICAgICAgICB0aGlzLmN1cnJlbnRTbG90ICAgICAgICA9IC0xOyAgICAgICAvLyB3aGljaCBzbG90IGlzIGN1cnJlbnRseSBvcGVuXHJcbiAgICAgICAgdGhpcy5zYW1wbGVCdWZzICAgICAgICAgPSBudWxsOyAgICAgLy8gYnVmcyBmb3Igc2FtcGxpbmcgaW5kaXZpZHVhbCBtaW5zXHJcbiAgICAgICAgdGhpcy5zYW1wbGVQbGF5ZXIgICAgICAgPSBudWxsOyAgICAgLy8gcGxheWVyIHRoYXQgaXMgdXNlZCB0byBwbGF5IHRoZSBzYW1wbGUgbWludWV0c1xyXG5cclxuICAgICAgICAvLyBvYmplY3QgaW5zdHJ1bWVudCBjaG9pY2VzXHJcbiAgICAgICAgdGhpcy5pbnN0cnVtZW50cyA9IHsncGlhbm8nICAgICAgIDogJy4vYXVkaW8vYWNvdXN0aWNfZ3JhbmRfcGlhbm8vJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGF2aW5ldCcgICAgOiAnLi9hdWRpby9jbGF2aW5ldC8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2hhcnBzaWNob3JkJyA6ICcuL2F1ZGlvL2hhcnBzaWNob3JkLyd9O1xyXG5cclxuICAgICAgICAvLyBSZW1vdmVkIHRoZSBjb25kaXRpb25hbCBqdWRnbWVudCBmb3IgZGV2aWNlIGRldGVjdGlvbiwgbWFraW5nIHRoZSBjb2RlIGVmZmVjdGl2ZSBmb3IgYWxsIGRldmljZXMuXHJcbiAgICAgICAgLy8gLy8gYWxsb3dzIHRvbmVqcyB0byBwbGF5IG9uIG1vYmlsZVxyXG4gICAgICAgIC8vIGlmICgvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcclxuICAgICAgICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XHJcblxyXG4gICAgICAgIGxldCBtb2JpbGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBtb2JpbGVDb250YWluZXIuaWQgPSAnbW9iaWxlLWNvbnRhaW5lcic7XHJcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChtb2JpbGVDb250YWluZXIpO1xyXG5cclxuICAgICAgICBsZXQgbW9iaWxlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbW9iaWxlQnV0dG9uLmlkID0gJ21vYmlsZS1idXR0b24nO1xyXG4gICAgICAgIG1vYmlsZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjaXJjbGUnKTtcclxuICAgICAgICBtb2JpbGVCdXR0b24udGV4dENvbnRlbnQgPSAnRW50ZXInO1xyXG4gICAgICAgIG1vYmlsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtb2JpbGVCdXR0b24pO1xyXG4gICAgICAgIG1vYmlsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBtb2JpbGVDb250YWluZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8qU3RhcnRBdWRpb0NvbnRleHQoVG9uZS5jb250ZXh0LCBtb2JpbGVCdXR0b24sIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBtb2JpbGVDb250YWluZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7Ki9cclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgLy8gZGVmYXVsdCBpbnN0cnVtZW50IHRvIHBsYXlcclxuICAgICAgICB0aGlzLnNlbGVjdGVkUGF0aCA9IHRoaXMuaW5zdHJ1bWVudHNbdGhpcy5zZWxlY3RlZEluc3RydW1dO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlU2NvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBmb3JtcyBiYXNlIHRhYmxlIGZvciB0aGVTY29yZVxyXG4gICAgY3JlYXRlU2NvcmUoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudGhlU2NvcmUgPSBbXHJcbiAgICAgICAgICAgICAgICBbIFwiTTk2XCIsICBcIk0zMlwiLCAgXCJNNjlcIiwgIFwiTTQwXCIsIFwiTTE0OFwiLCBcIk0xMDRcIiwgXCJNMTUyXCIsIFwiTTExOVwiLCAgXCJNOThcIiwgICBcIk0zXCIsICBcIk01NFwiXSxcclxuICAgICAgICAgICAgICAgIFsgXCJNMjJcIiwgICBcIk02XCIsICBcIk05NVwiLCAgXCJNMTdcIiwgIFwiTTc0XCIsIFwiTTE1N1wiLCAgXCJNNjBcIiwgIFwiTTg0XCIsIFwiTTE0MlwiLCAgXCJNODdcIiwgXCJNMTMwXCJdLFxyXG4gICAgICAgICAgICAgICAgW1wiTTE0MVwiLCBcIk0xMjhcIiwgXCJNMTU4XCIsIFwiTTExM1wiLCBcIk0xNjNcIiwgIFwiTTI3XCIsIFwiTTE3MVwiLCBcIk0xMTRcIiwgIFwiTTQyXCIsIFwiTTE2NVwiLCAgXCJNMTBcIl0sXHJcbiAgICAgICAgICAgICAgICBbIFwiTTQxXCIsICBcIk02M1wiLCAgXCJNMTNcIiwgIFwiTTg1XCIsICBcIk00NVwiLCBcIk0xNjdcIiwgIFwiTTUzXCIsICBcIk01MFwiLCBcIk0xNTZcIiwgIFwiTTYxXCIsIFwiTTEwM1wiXSxcclxuICAgICAgICAgICAgICAgIFtcIk0xMDVcIiwgXCJNMTQ2XCIsIFwiTTE1M1wiLCBcIk0xNjFcIiwgIFwiTTgwXCIsIFwiTTE1NFwiLCAgXCJNOTlcIiwgXCJNMTQwXCIsICBcIk03NVwiLCBcIk0xMzVcIiwgIFwiTTI4XCJdLFxyXG4gICAgICAgICAgICAgICAgW1wiTTEyMlwiLCAgXCJNNDZcIiwgIFwiTTU1XCIsICAgXCJNMlwiLCAgXCJNOTdcIiwgIFwiTTY4XCIsIFwiTTEzM1wiLCAgXCJNODZcIiwgXCJNMTI5XCIsICBcIk00N1wiLCAgXCJNMzdcIl0sXHJcbiAgICAgICAgICAgICAgICBbIFwiTTExXCIsIFwiTTEzNFwiLCBcIk0xMTBcIiwgXCJNMTU5XCIsICBcIk0zNlwiLCBcIk0xMThcIiwgIFwiTTIxXCIsIFwiTTE2OVwiLCAgXCJNNjJcIiwgXCJNMTQ3XCIsIFwiTTEwNlwiXSxcclxuICAgICAgICAgICAgICAgIFsgXCJNMzBcIiwgIFwiTTgxXCIsICBcIk0yNFwiLCBcIk0xMDBcIiwgXCJNMTA3XCIsICBcIk05MVwiLCBcIk0xMjdcIiwgIFwiTTk0XCIsIFwiTTEyM1wiLCAgXCJNMzNcIiwgICBcIk01XCJdLFxyXG4gICAgICAgICAgICAgICAgWyBcIk03MFwiLCBcIk0xMTdcIiwgIFwiTTY2XCIsICBcIk05MFwiLCAgXCJNMjVcIiwgXCJNMTM4XCIsICBcIk0xNlwiLCBcIk0xMjBcIiwgIFwiTTY1XCIsIFwiTTEwMlwiLCAgXCJNMzVcIl0sXHJcbiAgICAgICAgICAgICAgICBbXCJNMTIxXCIsICBcIk0zOVwiLCBcIk0xMzlcIiwgXCJNMTc2XCIsIFwiTTE0M1wiLCAgXCJNNzFcIiwgXCJNMTU1XCIsICBcIk04OFwiLCAgXCJNNzdcIiwgICBcIk00XCIsICBcIk0yMFwiXSxcclxuICAgICAgICAgICAgICAgIFsgXCJNMjZcIiwgXCJNMTI2XCIsICBcIk0xNVwiLCAgIFwiTTdcIiwgIFwiTTY0XCIsIFwiTTE1MFwiLCAgXCJNNTdcIiwgIFwiTTQ4XCIsICBcIk0xOVwiLCAgXCJNMzFcIiwgXCJNMTA4XCJdLFxyXG4gICAgICAgICAgICAgICAgWyAgXCJNOVwiLCAgXCJNNTZcIiwgXCJNMTMyXCIsICBcIk0zNFwiLCBcIk0xMjVcIiwgIFwiTTI5XCIsIFwiTTE3NVwiLCBcIk0xNjZcIiwgIFwiTTgyXCIsIFwiTTE2NFwiLCAgXCJNOTJcIl0sXHJcbiAgICAgICAgICAgICAgICBbXCJNMTEyXCIsIFwiTTE3NFwiLCAgXCJNNzNcIiwgIFwiTTY3XCIsICBcIk03NlwiLCBcIk0xMDFcIiwgIFwiTTQzXCIsICBcIk01MVwiLCBcIk0xMzdcIiwgXCJNMTQ0XCIsICBcIk0xMlwiXSxcclxuICAgICAgICAgICAgICAgIFsgXCJNNDlcIiwgIFwiTTE4XCIsICBcIk01OFwiLCBcIk0xNjBcIiwgXCJNMTM2XCIsIFwiTTE2MlwiLCBcIk0xNjhcIiwgXCJNMTE1XCIsICBcIk0zOFwiLCAgXCJNNTlcIiwgXCJNMTI0XCJdLFxyXG4gICAgICAgICAgICAgICAgW1wiTTEwOVwiLCBcIk0xMTZcIiwgXCJNMTQ1XCIsICBcIk01MlwiLCAgIFwiTTFcIiwgIFwiTTIzXCIsICBcIk04OVwiLCAgXCJNNzJcIiwgXCJNMTQ5XCIsIFwiTTE3M1wiLCAgXCJNNDRcIl0sXHJcbiAgICAgICAgICAgICAgICBbIFwiTTE0XCIsICBcIk04M1wiLCAgXCJNNzlcIiwgXCJNMTcwXCIsICBcIk05M1wiLCBcIk0xNTFcIiwgXCJNMTcyXCIsIFwiTTExMVwiLCAgIFwiTThcIiwgIFwiTTc4XCIsIFwiTTEzMVwiXV07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmV0dXJuIHJhbmRvbSBtZWFzdXJlIGZyb20gYW4gYXJyYXlcclxuICAgIHJhbmRNZWFzdXJlKG5vdGVBcnJheSkge1xyXG4gICAgICAgIGxldCBudW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBub3RlQXJyYXkubGVuZ3RoKTtcclxuICAgICAgICByZXR1cm4gbm90ZUFycmF5W251bV07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY3JlYXRlcyBhIHJhbmRvbSBzb25nXHJcbiAgICByYW5kb21Tb25nKCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWROb3RlcyA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGhlU2NvcmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE5vdGVzLnB1c2godGhpcy5yYW5kTWVhc3VyZSh0aGlzLnRoZVNjb3JlW2ldKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VsZWN0IG5ldyBub3Rlc1wiKTtcclxuXHJcbiAgICAgICAgLy8gVE9ETzogRmluZCB3YXkgdG8gcmVtb3ZlIHRoaXMgYW5kIHBsYWNlIHdpdGhpbiByZWxvYWRSYW5kb20gaW4gR2FtZU1haW5cclxuICAgICAgIC8vIHRoaXMubG9hZFBhdGhzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbG9hZCBwYXRocyBiYXNlZCBvZmYgb2YgdGhlIHNlbGVjdGVkTm90ZXNcclxuICAgIGxvYWRQYXRocygpIHtcclxuICAgICAgICB0aGlzLm5vdGVQYXRocyA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2VsZWN0ZWROb3Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLm5vdGVQYXRocy5wdXNoKHRoaXMuc2VsZWN0ZWRQYXRoICsgdGhpcy5zZWxlY3RlZE5vdGVzW2ldICsgJy53YXYnKTsgLy8gVE9ETzogaXMgaXQgb2theSB0byBoYXJkIGNvZGUgdGhpcz9cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbG9hZCBzZWxlY3RlZE5vdGVzIHNvIHRoYXQgdGhleSBtYXkgYmUgcGxheWVkXHJcbiAgICBsb2FkU29uZyhhcHApIHtcclxuICAgICAgICBhcHAudG9nZ2xlTG9hZGluZygpO1xyXG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllcnMgPSBuZXcgVG9uZS5QbGF5ZXJzKHRoaXMubm90ZVBhdGhzLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vdGVQYXRocy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBsYXllciA9IHRoaXMucGxheWVycy5nZXQoaSk7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIudG9NYXN0ZXIoKTtcclxuICAgICAgICAgICAgICAgIHBsYXllci5zeW5jKCkuc3RhcnQob2Zmc2V0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZXZ0ID0gbmV3IFRvbmUuRXZlbnQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwLnVwZGF0ZU5vd1BsYXlpbmcoYXBwLmdhbWVNb2RlbC5hbGxTbG90c1tpXSk7XHJcbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpLnN0YXJ0KG9mZnNldCArIDIuMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxFdmVudHMucHVzaChldnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIG9mZnNldCArPSBwbGF5ZXIuYnVmZmVyLmR1cmF0aW9uIC0gMi4wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFwcC50b2dnbGVMb2FkaW5nKCk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBtZXRob2QgY2xlYXJzIFRvbmUgb2YgZXhpc3Rpbmcgc29uZ1xyXG4gICAgY2xlYXJTb25nKCkge1xyXG4gICAgICAgIGZvciAobGV0IGV2dCBpbiB0aGlzLmFsbEV2ZW50cykge1xyXG4gICAgICAgICAgICB0aGlzLmFsbEV2ZW50c1tldnRdLmRpc3Bvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hbGxFdmVudHMgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJzLmRpc3Bvc2UoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2FtcGxlQnVmcykge1xyXG4gICAgICAgICAgICB0aGlzLnNhbXBsZUJ1ZnMuZGlzcG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBzdG9wcyB0aGUgc2FtcGxlUGxheWVyIGZyb20gcGxheWluZ1xyXG4gICAgc3RvcFNhbXBsZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2FtcGxlUGxheWVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2FtcGxlUGxheWVyLnN0b3AoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR2FtZU1vZGVsOyIsIi8vY29uc3QgVG9uZSA9IHJlcXVpcmUoJ1RvbmUnKTtcclxuXHJcbmNsYXNzIEdhbWVWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdGlvbi1jb250YWluZXInKTtcclxuICAgICAgICB0aGlzLmluc3RydW1Db250YWluZXIgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnN0cnVtLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIHRoaXMubWludWV0Q29udGFpbmVyICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pbnVldC1jb250YWluZXInKTtcclxuICAgICAgICB0aGlzLmxvYWRpbmdDb250YWluZXIgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkaW5nLWNvbnRhaW5lcicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNyZWF0ZXMgdGhlIGluaXRpYWwgcGxheWZpZWxkIGZvciB0aGUgcGxheWVyIHRvIGludGVyYWN0IHdpdGhcclxuICAgIGZvcm1QbGF5ZmllbGQoYXBwKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGb3JtaW5nIHBsYXlmaWVsZC4uLlwiICsgYXBwLmdhbWVNb2RlbC5zZWxlY3RlZE5vdGVzLmxlbmd0aCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcHAuZ2FtZU1vZGVsLnNlbGVjdGVkTm90ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHNsb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xvdC0nICsgaSk7XHJcbiAgICAgICAgICAgIC8vbGV0IGV4aXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhpdC1idXR0b24nKTtcclxuICAgICAgICAgICAgc2xvdC5pbm5lckhUTUwgPSB0aGlzLmNyZWF0ZVBsYXlIVE1MKGFwcC5nYW1lTW9kZWwuc2VsZWN0ZWROb3Rlc1tpXSk7XHJcbiAgICAgICAgICAgIHNsb3Quc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCguL2ltZy9ub3RhdGlvbi8nICsgYXBwLmdhbWVNb2RlbC5zZWxlY3RlZE5vdGVzW2ldICsgJy5wbmcpJztcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc2xvdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UpO1xyXG5cclxuICAgICAgICAgICAgLy8gZXZlbnQgbGlzdGVuZXIgZm9yIGNsaWNraW5nIGEgc2luZ2xlIHNsb3RcclxuICAgICAgICAgICAgLypzbG90LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc2xvdC5pbm5lckhUTUwgPSAnPyc7XHJcbiAgICAgICAgICAgICAgICBzbG90LmNsYXNzTGlzdC5hZGQoJ2NsaWNrZWQtc2xvdCcpO1xyXG4gICAgICAgICAgICAgICAgc2xvdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1iZy1pbWFnZScsIGB1cmwoLi4vaW1nL25vdGF0aW9uLyR7YXBwLmdhbWVNb2RlbC5zZWxlY3RlZE5vdGVzW2ldfS5wbmcpYCk7ICAgXHJcblxyXG4gICAgICAgICAgICAgICAgYXBwLnBhdXNlU29uZygpO1xyXG4gICAgICAgICAgICAgICAgYXBwLnRvZ2dsZUxvYWRpbmcoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBhcHAudXBkYXRlSGlnaGxpZ2h0ZWRNaW4oYXBwLmdhbWVNb2RlbC50aGVTY29yZVtpXS5pbmRleE9mKGFwcC5nYW1lTW9kZWwuc2VsZWN0ZWROb3Rlc1tpXSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGdhdGhlciBwYXRocyB3ZSBuZWVkIHRvIGxvYWQgaW4gZm9yIHVzZXIgdG8gc2FtcGxlXHJcbiAgICAgICAgICAgICAgICBsZXQgcGF0aHMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgYXBwLmdhbWVNb2RlbC50aGVTY29yZVtpXS5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhzLnB1c2goYXBwLmdhbWVNb2RlbC5zZWxlY3RlZFBhdGggKyBhcHAuZ2FtZU1vZGVsLnRoZVNjb3JlW2ldW2tdICsgJy53YXYnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYnVmZmVycyBmb3Igc291bmQgZmlsZXMgdGhhdCB1c2VyIGNhbiBzYW1wbGVcclxuICAgICAgICAgICAgICAgIGFwcC5nYW1lTW9kZWwuc2FtcGxlQnVmcyA9IG5ldyBUb25lLkJ1ZmZlcnMocGF0aHMsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYXBwLmdhbWVNb2RlbC50aGVTY29yZVtpXS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWludWV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pbi0nICsgaik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vbWludWV0LmlubmVySFRNTCA9IHRoaXMuY3JlYXRlUGxheUhUTUwoYXBwLmdhbWVNb2RlbC50aGVTY29yZVtpXVtqXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbnVldC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKC4vaW1nL25vdGF0aW9uLycgKyBhcHAuZ2FtZU1vZGVsLnRoZVNjb3JlW2ldW2pdICsgJy5wbmcpJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFsbG93cyB0aGUgdXNlciB0byBzYW1wbGUgaW5kaXZpZHVhbCBtaW51ZXRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbnVldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgc2FtcGxpbmcsIHN0b3AgaXQgYW5kIHN0YXJ0IHRoaXMgb25lIGluc3RlYWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcC5jbGVhclB1bHNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHAuc3RvcFNhbXBsZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW51ZXQuY2xhc3NMaXN0LmFkZCgncHVsc2UnKTsgLy9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcC51cGRhdGVIaWdobGlnaHRlZE1pbihqKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90LnN0eWxlLnNldFByb3BlcnR5KCctLWJnLWltYWdlJywgYHVybCguLi9pbWcvbm90YXRpb24vJHthcHAuZ2FtZU1vZGVsLnRoZVNjb3JlW2ldW2pdfS5wbmcpYCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwLmdhbWVNb2RlbC5zYW1wbGVQbGF5ZXIgPSBuZXcgVG9uZS5QbGF5ZXIoYXBwLmdhbWVNb2RlbC5zYW1wbGVCdWZzLmdldChqKSkudG9NYXN0ZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcC5nYW1lTW9kZWwuc2FtcGxlUGxheWVyLnN0YXJ0KFRvbmUubm93KCksIDEuNik7IC8vIHN0YXJ0cyB3aXRoIDIgc2Vjb25kIG9mZnNldFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGZvciBlbmQgb2YgYW5pbWF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW51ZXQuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwLmNsZWFyUHVsc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHAuc3RvcFNhbXBsZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGFwcC50b2dnbGVMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5taW51ZXRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgc2xvdFxyXG4gICAgICAgICAgICAgICAgYXBwLmN1cnJlbnRTbG90ID0gaTtcclxuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBjb25maXJtKGV4aXQpIGJ1dHRvbiB0ZXh0XHJcbiAgICAgICAgICAgICAgICAvL2V4aXRCdXR0b24udGV4dENvbnRlbnQgPSBgQ29uZmlybVxcbk0ke2kgKyAxfWA7XHJcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7Ki9cclxuXHJcbiAgICAgICAgICAgIGFwcC5nYW1lTW9kZWwuYWxsU2xvdHMucHVzaChzbG90KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmVmcmVzaGVzIHRoZSBwbGF5RmllbGQgd2l0aCBuZXcgc2VsZWN0aW9uc1xyXG4gICAgdXBkYXRlUGxheWZpZWxkKGFwcCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVXBkYXRpbmcgcGxheWZpZWxkLi4uXCIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXBwLmdhbWVNb2RlbC5hbGxTbG90cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBhcHAuZ2FtZU1vZGVsLmFsbFNsb3RzW2ldLmlubmVySFRNTCA9IHRoaXMuY3JlYXRlUGxheUhUTUwoYXBwLmdhbWVNb2RlbC5zZWxlY3RlZE5vdGVzW2ldKTtcclxuICAgICAgICAgICAgbGV0IHNsb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xvdC0nICsgaSk7XHJcbiAgICAgICAgICAgIHNsb3Quc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCguL2ltZy9ub3RhdGlvbi8nICsgYXBwLmdhbWVNb2RlbC5zZWxlY3RlZE5vdGVzW2ldICsgJy5wbmcpJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIHdoaWNoIHNsb3QgaGFzIHRoZSBwbGF5aW5nIGNsYXNzXHJcbiAgICB1cGRhdGVOb3dQbGF5aW5nKGFwcCwgc2xvdCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXBwLmdhbWVNb2RlbC5hbGxTbG90cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBhcHAuZ2FtZU1vZGVsLmFsbFNsb3RzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXlpbmcnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzbG90KSB7XHJcbiAgICAgICAgICAgIHNsb3QuY2xhc3NMaXN0LmFkZCgncGxheWluZycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyByZXR1cm5zIHRoZSBzaW1wbGlmaWVkIGlubmVySFRNTCBmb3IgYSBnaXZlbiBub3RlXHJcbiAgICBjcmVhdGVQbGF5SFRNTChub3RlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5vdGUubWF0Y2goLyhcXGQrKS8pWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVBsYXlJbWFnZShwbGF5QnV0dG9uLCBpc1BsYXlpbmcpIHtcclxuICAgICAgICBwbGF5QnV0dG9uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XHJcbiAgICAgICAgICAgICd1cmwoXFwnJyArXHJcbiAgICAgICAgICAgICghaXNQbGF5aW5nID8gJy4vaW1nL2J1dHRvblBsYXkucG5nJyA6ICcuL2ltZy9idXR0b25QYXVzZS5wbmcnKSArXHJcbiAgICAgICAgICAgICdcXCcpJztcclxuICAgIH1cclxuXHJcbiAgICAvLyBUT0RPOiBtYWtlIHRoaXMgYmV0dGVyLiBTZWVtcyBhIGxpdHRsZSBleGNlc3NcclxuICAgIHVwZGF0ZUluc3RydW1JbWFnZShpbnN0cnVtLCBidXR0b24pIHtcclxuICAgICAgICBsZXQgcGF0aDtcclxuICAgICAgICBzd2l0Y2ggKGluc3RydW0pIHtcclxuICAgICAgICAgICAgY2FzZSAncGlhbm8nOlxyXG4gICAgICAgICAgICAgICAgcGF0aCA9ICcuL2ltZy9idXR0b25QaWFuby5wbmcnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdjbGF2aW5ldCc6XHJcbiAgICAgICAgICAgICAgICBwYXRoID0gJy4vaW1nL2J1dHRvbkNsYXYucG5nJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnaGFycHNpY2hvcmQnOlxyXG4gICAgICAgICAgICAgICAgcGF0aCA9ICcuL2ltZy9idXR0b25IYXJwc2kucG5nJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoXFwnJyArIHBhdGggKyAnXFwnKSc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlcyB3aGljaCBtaW4gaXMgY3VycmVudGx5IGhpZ2hsaWdodGVkIGJhc2VkIG9uIGdpdmVuIGluZGV4XHJcbiAgICB1cGRhdGVIaWdobGlnaHRlZE1pbihhcHAsIG1pbikge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXBwLmdhbWVNb2RlbC50aGVTY29yZVswXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pbi0nICsgaSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaSAhPT0gbWluKVxyXG4gICAgICAgICAgICAgICAgZWxtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodCcpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBlbG0uY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZXMgY3VycmVudGx5IGhpZ2hsaWdodGVkIGluc3RydW1cclxuICAgIC8vIFRPRE86IGNvbmRlbnNlIHRoaXMgYW5kIHRoZSBwcmV2aW91cyBtZXRob2QgaW50byBhIHNpbmdsZSBmdW5jdGlvblxyXG4gICAgdXBkYXRlSGlnaGxpZ2h0ZWRJbnN0cnVtKGFwcCwgaW5zdHJ1bSkge1xyXG4gICAgICAgIGFwcC5nYW1lQ29udHJvbGxlci5waWFub0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWdobGlnaHQnKTtcclxuICAgICAgICBhcHAuZ2FtZUNvbnRyb2xsZXIuY2xhdkJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWdobGlnaHQnKTtcclxuICAgICAgICBhcHAuZ2FtZUNvbnRyb2xsZXIuaGFycHNpQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodCcpO1xyXG5cclxuICAgICAgICBpbnN0cnVtLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNsZWFycyBhbGwgcHVsc2luZyBtaW5zXHJcbiAgICBjbGVhclB1bHNlKGFwcCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXBwLmdhbWVNb2RlbC50aGVTY29yZVswXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pbi0nICsgaSk7XHJcblxyXG4gICAgICAgICAgICBlbG0uY2xhc3NMaXN0LnJlbW92ZSgncHVsc2UnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdG9nZ2xlcyB0aGUgbG9hZGluZyBzY3JlZW5cclxuICAgIHRvZ2dsZUxvYWRpbmcoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9hZGluZ0NvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKVxyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR2FtZVZpZXc7IiwiLy8gbmVlZGVkIGZvciByZXF1aXJlLmpzXHJcbmxldCBHYW1lTWFpbiA9IHJlcXVpcmUoJy4vR2FtZU1haW4uanMnKTtcclxudmFyIGdhbWVNYWluID0gbmV3IEdhbWVNYWluKCk7XHJcbmNvbnNvbGUubG9nKCdhcHAuanMgbG9hZGVkJyk7Il19
