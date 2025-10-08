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
        app.reloadRandom();
      }
    }.bind(this));
    this.playContainer = document.getElementById('play-container');
    console.log("Play container binded" + this.playContainer);
    this.playContainer.addEventListener('click', function () {
      app.reloadRandom();
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
      this.gameView.formPlayfield(this);
    }

    // refreshes the playField with new selections
  }, {
    key: "updatePlayfield",
    value: function updatePlayfield() {
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

},{"./GameMain.js":2}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvR2FtZUNvbnRyb2xsZXIuanMiLCJhcHAvanMvR2FtZU1haW4uanMiLCJhcHAvanMvR2FtZU1vZGVsLmpzIiwiYXBwL2pzL0dhbWVWaWV3LmpzIiwiYXBwL2pzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FDQUE7QUFBQSxJQUVNLGNBQWM7RUFDaEIsU0FBQSxlQUFZLEdBQUcsRUFBRTtJQUFBLGVBQUEsT0FBQSxjQUFBO0lBQ2I7SUFDQTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztJQUVRO0lBQ0E7SUFDQSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLFVBQVMsS0FBSyxFQUFFO01BQ2xELElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxPQUFPLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7UUFDbEQsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7TUFDdEI7SUFDSixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2IsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDO0lBQzlELE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUN6RCxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFXO01BQ3BELEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN0QixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2I7SUFDQTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUdRO0lBQ0E7QUFDUjtBQUNBO0FBQ0E7QUFD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LEVBQUcsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUcsS0FBSyxFQUFFLE1BQU0sRUFBRyxLQUFLLENBQUMsRUFDeEYsQ0FBRSxLQUFLLEVBQUcsS0FBSyxFQUFHLEtBQUssRUFBRyxLQUFLLEVBQUcsS0FBSyxFQUFFLE1BQU0sRUFBRyxLQUFLLEVBQUcsS0FBSyxFQUFFLE1BQU0sRUFBRyxLQUFLLEVBQUUsTUFBTSxDQUFDLEVBQ3hGLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFHLEtBQUssRUFBRSxNQUFNLEVBQUcsS0FBSyxFQUFFLE1BQU0sRUFBRyxLQUFLLEVBQUUsTUFBTSxFQUFHLEtBQUssQ0FBQyxFQUN4RixDQUFDLE1BQU0sRUFBRyxLQUFLLEVBQUcsS0FBSyxFQUFJLElBQUksRUFBRyxLQUFLLEVBQUcsS0FBSyxFQUFFLE1BQU0sRUFBRyxLQUFLLEVBQUUsTUFBTSxFQUFHLEtBQUssRUFBRyxLQUFLLENBQUMsRUFDeEYsQ0FBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUcsS0FBSyxFQUFFLE1BQU0sRUFBRyxLQUFLLEVBQUUsTUFBTSxFQUFHLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQ3hGLENBQUUsS0FBSyxFQUFHLEtBQUssRUFBRyxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRyxLQUFLLEVBQUUsTUFBTSxFQUFHLEtBQUssRUFBRSxNQUFNLEVBQUcsS0FBSyxFQUFJLElBQUksQ0FBQyxFQUN4RixDQUFFLEtBQUssRUFBRSxNQUFNLEVBQUcsS0FBSyxFQUFHLEtBQUssRUFBRyxLQUFLLEVBQUUsTUFBTSxFQUFHLEtBQUssRUFBRSxNQUFNLEVBQUcsS0FBSyxFQUFFLE1BQU0sRUFBRyxLQUFLLENBQUMsRUFDeEYsQ0FBQyxNQUFNLEVBQUcsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFHLEtBQUssRUFBRSxNQUFNLEVBQUcsS0FBSyxFQUFHLEtBQUssRUFBSSxJQUFJLEVBQUcsS0FBSyxDQUFDLEVBQ3hGLENBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRyxLQUFLLEVBQUksSUFBSSxFQUFHLEtBQUssRUFBRSxNQUFNLEVBQUcsS0FBSyxFQUFHLEtBQUssRUFBRyxLQUFLLEVBQUcsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUN4RixDQUFHLElBQUksRUFBRyxLQUFLLEVBQUUsTUFBTSxFQUFHLEtBQUssRUFBRSxNQUFNLEVBQUcsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUcsS0FBSyxFQUFFLE1BQU0sRUFBRyxLQUFLLENBQUMsRUFDeEYsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFHLEtBQUssRUFBRyxLQUFLLEVBQUcsS0FBSyxFQUFFLE1BQU0sRUFBRyxLQUFLLEVBQUcsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUcsS0FBSyxDQUFDLEVBQ3hGLENBQUUsS0FBSyxFQUFHLEtBQUssRUFBRyxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRyxLQUFLLEVBQUcsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUN4RixDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFHLEtBQUssRUFBSSxJQUFJLEVBQUcsS0FBSyxFQUFHLEtBQUssRUFBRyxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRyxLQUFLLENBQUMsRUFDeEYsQ0FBRSxLQUFLLEVBQUcsS0FBSyxFQUFHLEtBQUssRUFBRSxNQUFNLEVBQUcsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFJLElBQUksRUFBRyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDckc7O0lBRUE7RUFBQTtJQUFBLEdBQUE7SUFBQSxLQUFBLEVBQ0EsU0FBQSxXQUFXLENBQUMsU0FBUyxFQUFFO01BQ25CLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FB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QyxFQUFFLEVBQUU7UUFDdkQsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRTdDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztNQUNqQztJQUNKOztJQUVBO0VBQUE7SUFBQSxHQUFBO0lBQUEsS0FBQSxFQUNBLFNBQUEsYUFBYSxDQUFBLEVBQUc7TUFDWixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUNsRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUVqRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDckQ7RUFBQztBQUFBO0FBR0wsTUFBTSxDQUFDLE9BQU8sR0FBRyxRQUFROzs7OztBQzdLekI7QUFDQSxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDO0FBQ3ZDLElBQUksUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvL2NvbnN0IFRvbmUgICAgICAgICAgICAgID0gcmVxdWlyZSgnVG9uZScpO1xyXG5cclxuY2xhc3MgR2FtZUNvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoYXBwKSB7IFxyXG4gICAgICAgIC8vIHNldHVwIHBsYXkvcGF1c2UgYnV0dG9uXHJcbiAgICAgICAgLyp0aGlzLnBsYXlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheS1idXR0b24nKTtcclxuICAgICAgICB0aGlzLnBsYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gdG9nZ2xlIHNvbmcgcGxheWluZ1xyXG4gICAgICAgICAgICBhcHAuZ2FtZU1vZGVsLmlzUGxheWluZyA/IGFwcC5wYXVzZVNvbmcoKSA6IGFwcC5wbGF5U29uZygpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7Ki9cclxuXHJcbiAgICAgICAgLy8gc2V0dXAgcmFuZG9tIGJ1dHRvblxyXG4gICAgICAgIC8qdGhpcy5yYW5kb21CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZG9tLWJ1dHRvbicpOyovXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ1NwYWNlJyB8fCBldmVudC5jb2RlID09PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBQcmV2ZW50IGRlZmF1bHQgYWN0aW9uIGxpa2Ugc2Nyb2xsaW5nXHJcbiAgICAgICAgICAgICAgICBhcHAucmVsb2FkUmFuZG9tKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMucGxheUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5LWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGxheSBjb250YWluZXIgYmluZGVkXCIgKyB0aGlzLnBsYXlDb250YWluZXIpO1xyXG4gICAgICAgIHRoaXMucGxheUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBhcHAucmVsb2FkUmFuZG9tKCk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICAvLyBzZXR1cCBpbnN0cnVtZW50IHNlbGVjdCBidXR0b25cclxuICAgICAgICAvKnRoaXMuaW5zdHJ1bUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnN0cnVtLWJ1dHRvbicpO1xyXG4gICAgICAgIGlmICh0aGlzLmluc3RydW1CdXR0b24pIHsgICAvLyBFeGVjdXRlIG9ubHkgd2hlbiB0aGUgY29ycmVzcG9uZGluZyBidXR0b24gaXMgcHJlc2VudFxyXG4gICAgICAgICAgICB0aGlzLmluc3RydW1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGFwcC5wYXVzZVNvbmcoKTtcclxuICAgICAgICAgICAgICAgIGFwcC5nYW1lVmlldy5zZWxlY3Rpb25Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICBhcHAuZ2FtZVZpZXcuaW5zdHJ1bUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc2V0dXAgcmVzZXQgYnV0dG9uXHJcbiAgICAgICAgdGhpcy5yZXNldEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldC1idXR0b24nKTtcclxuICAgICAgICB0aGlzLnJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IHRoaXMgaXMgbXVjaCBtb3JlIHJlc3BvbnNpdmUgYnV0IGlzIG92ZXJraWxsLiBNYWtlIHNpbXBsZXJcclxuICAgICAgICAgICAgYXBwLnJlbG9hZFNvbmcoKTtcclxuICAgICAgICB9LmJpbmQodGhpcykpOyovXHJcblxyXG4gICAgICAgIC8vIHNldHVwIGV4aXQgYnV0dG9uIHRvIGhpZGUgdGhlIHNlbGVjdGlvbi1jb250YWluZXJcclxuICAgICAgICAvKnRoaXMuZXhpdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGl0LWJ1dHRvbicpO1xyXG4gICAgICAgIHRoaXMuZXhpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBhcHAucmVsb2FkU29uZygpO1xyXG4gICAgICAgICAgICBhcHAuY2xlYXJQdWxzZSgpO1xyXG4gICAgICAgICAgICBhcHAuc3RvcFNhbXBsZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRlTWludWV0VG9TbG90KGFwcCk7XHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xvdHMnKS5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrZWQtc2xvdCcpKTtcclxuXHJcbiAgICAgICAgICAgIGFwcC5nYW1lVmlldy5zZWxlY3Rpb25Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgYXBwLmdhbWVWaWV3Lmluc3RydW1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgYXBwLmdhbWVWaWV3Lm1pbnVldENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7Ki9cclxuXHJcbiAgICAgICAgLy8gc3dpdGNoIHRvIHBpYW5vXHJcbiAgICAgICAgLyp0aGlzLnBpYW5vQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpYW5vLWJ1dHRvbicpO1xyXG4gICAgICAgIGlmICh0aGlzLnBpYW5vQnV0dG9uKSB7ICAgICAvLyBFeGVjdXRlIG9ubHkgd2hlbiB0aGUgY29ycmVzcG9uZGluZyBidXR0b24gaXMgcHJlc2VudFxyXG4gICAgICAgICAgICB0aGlzLnBpYW5vQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBhcHAuZ2FtZU1vZGVsLnNlbGVjdGVkSW5zdHJ1bSA9ICdwaWFubyc7XHJcbiAgICAgICAgICAgICAgICBhcHAuZ2FtZU1vZGVsLnNlbGVjdGVkUGF0aCA9IGFwcC5nYW1lTW9kZWwuaW5zdHJ1bWVudHNbJ3BpYW5vJ107XHJcbiAgICAgICAgICAgICAgICBhcHAudXBkYXRlSGlnaGxpZ2h0ZWRJbnN0cnVtKHRoaXMucGlhbm9CdXR0b24pO1xyXG4gICAgICAgICAgICAgICAgYXBwLnVwZGF0ZUluc3RydW1JbWFnZSgpO1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc3dpdGNoIHRvIGNsYXZpbmV0XHJcbiAgICAgICAgdGhpcy5jbGF2QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsYXYtYnV0dG9uJyk7XHJcbiAgICAgICAgaWYgKHRoaXMuY2xhdkJ1dHRvbikgeyAgICAgIC8vIEV4ZWN1dGUgb25seSB3aGVuIHRoZSBjb3JyZXNwb25kaW5nIGJ1dHRvbiBpcyBwcmVzZW50XHJcbiAgICAgICAgICAgIHRoaXMuY2xhdkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgYXBwLmdhbWVNb2RlbC5zZWxlY3RlZEluc3RydW0gPSAnY2xhdmluZXQnO1xyXG4gICAgICAgICAgICAgICAgYXBwLmdhbWVNb2RlbC5zZWxlY3RlZFBhdGggPSBhcHAuZ2FtZU1vZGVsLmluc3RydW1lbnRzWydjbGF2aW5ldCddO1xyXG4gICAgICAgICAgICAgICAgYXBwLnVwZGF0ZUhpZ2hsaWdodGVkSW5zdHJ1bSh0aGlzLmNsYXZCdXR0b24pO1xyXG4gICAgICAgICAgICAgICAgYXBwLnVwZGF0ZUluc3RydW1JbWFnZSgpO1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc3dpdGNoIHRvIGhhcnBzaWNob3JkXHJcbiAgICAgICAgdGhpcy5oYXJwc2lCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGFycHNpLWJ1dHRvbicpO1xyXG4gICAgICAgIGlmICh0aGlzLmhhcnBzaUJ1dHRvbikgeyAgICAgLy8gRXhlY3V0ZSBvbmx5IHdoZW4gdGhlIGNvcnJlc3BvbmRpbmcgYnV0dG9uIGlzIHByZXNlbnRcclxuICAgICAgICAgICAgdGhpcy5oYXJwc2lCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGFwcC5nYW1lTW9kZWwuc2VsZWN0ZWRJbnN0cnVtID0gJ2hhcnBzaWNob3JkJztcclxuICAgICAgICAgICAgICAgIGFwcC5nYW1lTW9kZWwuc2VsZWN0ZWRQYXRoID0gYXBwLmdhbWVNb2RlbC5pbnN0cnVtZW50c1snaGFycHNpY2hvcmQnXTtcclxuICAgICAgICAgICAgICAgIGFwcC51cGRhdGVIaWdobGlnaHRlZEluc3RydW0odGhpcy5oYXJwc2lCdXR0b24pO1xyXG4gICAgICAgICAgICAgICAgYXBwLnVwZGF0ZUluc3RydW1JbWFnZSgpO1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gYWRkaW5nIGV2ZW50IGxpc3RlbmVycyB0byBjaGlsZHJlbiBkaXZzIG9mIG1pbnVldC1jb250YWluZXJcclxuICAgICAgICBhcHAuZ2FtZVZpZXcubWludWV0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NpcmNsZScpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zID0gZXZlbnQudGFyZ2V0LmlkLm1hdGNoKC8oXFxkKykvKVswXTtcclxuICAgICAgICAgICAgICAgIGFwcC5nYW1lTW9kZWwuc2VsZWN0ZWROb3Rlc1thcHAuY3VycmVudFNsb3RdID0gYXBwLmdhbWVNb2RlbC50aGVTY29yZVthcHAuY3VycmVudFNsb3RdW3Bvc107XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTsqL1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHBsYXkgc29uZyB2aWEgdHJhbnNwb3J0XHJcbiAgICBwbGF5U29uZyhhcHApIHtcclxuICAgICAgICBUb25lLlRyYW5zcG9ydC5zdGFydCgnKzAuMScpO1xyXG4gICAgICAgIGFwcC5nYW1lTW9kZWwuaXNQbGF5aW5nID0gdHJ1ZTtcclxuICAgICAgICBhcHAudG9nZ2xlUGxheUltYWdlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcGF1c2VzIHRyYW5zcG9ydFxyXG4gICAgcGF1c2VTb25nKGFwcCkge1xyXG4gICAgICAgIFRvbmUuVHJhbnNwb3J0LnBhdXNlKCk7XHJcbiAgICAgICAgYXBwLmdhbWVNb2RlbC5pc1BsYXlpbmcgPSBmYWxzZTtcclxuICAgICAgICBhcHAudG9nZ2xlUGxheUltYWdlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmVzdGFydCBzb25nIGJ5IHNldHRpbmcgdHJhbnNwb3J0IHRvIGJlZ2lubmluZ1xyXG4gICAgcmVzZXRTb25nKCkge1xyXG4gICAgICAgIFRvbmUuVHJhbnNwb3J0LnBvc2l0aW9uID0gJzA6MDI6MDUnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRPLURPOiBzdGlsbCB3aXRoIHNvbWUgZGlzcGxhY2VtZW50XHJcbiAgICBhbmltYXRlTWludWV0VG9TbG90KGFwcCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkTWludWV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnB1bHNlJykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpZ2hsaWdodCcpO1xyXG4gICAgICAgIGlmIChzZWxlY3RlZE1pbnVldCAmJiBhcHAuY3VycmVudFNsb3QgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb25zdCBzbG90ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nsb3QtJyArIGFwcC5jdXJyZW50U2xvdCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1pbnVldFJlY3QgPSBzZWxlY3RlZE1pbnVldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgY29uc3Qgc2xvdFJlY3QgPSBzbG90LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIGNsb25lIG9mIHRoZSBtaW51ZXQgZm9yIGFuaW1hdGlvblxyXG4gICAgICAgICAgICBjb25zdCBjbG9uZSA9IHNlbGVjdGVkTWludWV0LmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICAgICAgY2xvbmUuY2xhc3NMaXN0LmFkZCgnbWludWV0LXRyYW5zaXRpb24nKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFNldCBpbml0aWFsIHBvc2l0aW9uIGFuZCBzaXplXHJcbiAgICAgICAgICAgIGNsb25lLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcclxuICAgICAgICAgICAgY2xvbmUuc3R5bGUudG9wID0gbWludWV0UmVjdC50b3AgKyAncHgnO1xyXG4gICAgICAgICAgICBjbG9uZS5zdHlsZS5sZWZ0ID0gbWludWV0UmVjdC5sZWZ0ICsgJ3B4JztcclxuICAgICAgICAgICAgY2xvbmUuc3R5bGUud2lkdGggPSBtaW51ZXRSZWN0LndpZHRoICsgJ3B4JztcclxuICAgICAgICAgICAgY2xvbmUuc3R5bGUuaGVpZ2h0ID0gbWludWV0UmVjdC5oZWlnaHQgKyAncHgnO1xyXG4gICAgICAgICAgICBjbG9uZS5zdHlsZS5tYXJnaW4gPSAnMCc7XHJcbiAgICAgICAgICAgIGNsb25lLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknO1xyXG4gICAgICAgICAgICBjbG9uZS5zdHlsZS56SW5kZXggPSAnMTAwMCc7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNsb25lKTtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBGb3JjZSBhIHJlZmxvd1xyXG4gICAgICAgICAgICBjbG9uZS5vZmZzZXRIZWlnaHQ7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gQW5pbWF0ZSB0byB0aGUgc2xvdCBwb3NpdGlvblxyXG4gICAgICAgICAgICBjbG9uZS5zdHlsZS50b3AgPSAoc2xvdFJlY3QudG9wICsgc2xvdFJlY3QuaGVpZ2h0IC8gMikgKyAncHgnO1xyXG4gICAgICAgICAgICBjbG9uZS5zdHlsZS5sZWZ0ID0gKHNsb3RSZWN0LmxlZnQgKyBzbG90UmVjdC53aWR0aCAvIDIpICsgJ3B4JztcclxuICAgICAgICAgICAgY2xvbmUuc3R5bGUud2lkdGggPSBzbG90UmVjdC53aWR0aCArICdweCc7XHJcbiAgICAgICAgICAgIGNsb25lLnN0eWxlLmhlaWdodCA9IHNsb3RSZWN0LmhlaWdodCArICdweCc7XHJcbiAgICAgICAgICAgIGNsb25lLnN0eWxlLmJvcmRlclJhZGl1cyA9ICc1JSc7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBzbG90IGFmdGVyIGFuaW1hdGlvblxyXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVUcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBzbG90LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IHNlbGVjdGVkTWludWV0LnN0eWxlLmJhY2tncm91bmRJbWFnZTtcclxuICAgICAgICAgICAgICAgIHNsb3QuY2xhc3NMaXN0LmFkZCgnc2xvdC1mbGFzaCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNsb25lLnBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNsb25lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNsb25lLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBoYW5kbGVUcmFuc2l0aW9uRW5kKTtcclxuICAgICAgICAgICAgfTtcclxuICAgIFxyXG4gICAgICAgICAgICBjbG9uZS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgaGFuZGxlVHJhbnNpdGlvbkVuZCk7XHJcbiAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7IC8vIEFuaW1hdGlvbiBzdGFydGVkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTsgLy8gTm8gYW5pbWF0aW9uIHBlcmZvcm1lZFxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR2FtZUNvbnRyb2xsZXI7IiwiY29uc3QgR2FtZU1vZGVsICAgICAgICAgPSByZXF1aXJlKCcuL0dhbWVNb2RlbCcpO1xyXG5jb25zdCBHYW1lVmlldyAgICAgICAgICA9IHJlcXVpcmUoJy4vR2FtZVZpZXcnKTtcclxuY29uc3QgR2FtZUNvbnRyb2xsZXIgICAgPSByZXF1aXJlKCcuL0dhbWVDb250cm9sbGVyJyk7XHJcblxyXG5jbGFzcyBHYW1lTWFpbiB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyBjcmVhdGUgb2JqZWN0cyBvZiBuZWVkZWQgY2xhc3Nlc1xyXG4gICAgICAgIHRoaXMuZ2FtZU1vZGVsICAgICAgICAgID0gbmV3IEdhbWVNb2RlbCgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZVZpZXcgICAgICAgICAgID0gbmV3IEdhbWVWaWV3KCk7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlciAgICAgPSBuZXcgR2FtZUNvbnRyb2xsZXIodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGZvcm0gZ2FtZVxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLnJhbmRvbVNvbmcoKTtcclxuICAgICAgICAvL3RoaXMubG9hZFNvbmcoKTtcclxuICAgICAgICB0aGlzLmZvcm1QbGF5ZmllbGQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjcmVhdGVzIHRoZSBwbGF5ZmllbGQgZm9yIHRoZSBwbGF5ZXIgdG8gaW50ZXJhY3Qgd2l0aFxyXG4gICAgZm9ybVBsYXlmaWVsZCgpIHtcclxuICAgICAgICB0aGlzLmdhbWVWaWV3LmZvcm1QbGF5ZmllbGQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmVmcmVzaGVzIHRoZSBwbGF5RmllbGQgd2l0aCBuZXcgc2VsZWN0aW9uc1xyXG4gICAgdXBkYXRlUGxheWZpZWxkKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVZpZXcudXBkYXRlUGxheWZpZWxkKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGhpZ2hsaWdodHMgd2hpY2ggc2xvdCBpcyBjdXJyZW50bHkgcGxheWluZ1xyXG4gICAgdXBkYXRlTm93UGxheWluZyhzbG90KSB7XHJcbiAgICAgICAgdGhpcy5nYW1lVmlldy51cGRhdGVOb3dQbGF5aW5nKHRoaXMsIHNsb3QpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNyZWF0ZXMgYSByYW5kb20gc29uZ1xyXG4gICAgcmFuZG9tU29uZygpIHtcclxuICAgICAgICB0aGlzLmdhbWVNb2RlbC5yYW5kb21Tb25nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbG9hZCBzZWxlY3RlZE5vdGVzXHJcbiAgICBsb2FkU29uZygpIHtcclxuICAgICAgICB0aGlzLmdhbWVNb2RlbC5sb2FkU29uZyh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjbGVhcnMgVG9uZSBvZiBleGlzdGluZyBzb25nXHJcbiAgICBjbGVhclNvbmcoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lTW9kZWwuY2xlYXJTb25nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2xlYXJzIHNhbXBsZVBsYXllclxyXG4gICAgc3RvcFNhbXBsZXIoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lTW9kZWwuc3RvcFNhbXBsZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0b2dnbGVzIGltYWdlIGZvciBwbGF5IGJ1dHRvblxyXG4gICAgdG9nZ2xlUGxheUltYWdlKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVZpZXcudG9nZ2xlUGxheUltYWdlKHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheUJ1dHRvbiwgdGhpcy5nYW1lTW9kZWwuaXNQbGF5aW5nKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGVzIHRoZSBjb3ZlciBpbnN0cnVtIGltYWdlXHJcbiAgICB1cGRhdGVJbnN0cnVtSW1hZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lVmlldy51cGRhdGVJbnN0cnVtSW1hZ2UodGhpcy5nYW1lTW9kZWwuc2VsZWN0ZWRJbnN0cnVtLCB0aGlzLmdhbWVDb250cm9sbGVyLmluc3RydW1CdXR0b24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZXMgd2hpY2ggbWluIGlzIGN1cnJlbnRseSBzZWxlY3RlZCBiYXNlZCBvbiBpbmRleFxyXG4gICAgdXBkYXRlSGlnaGxpZ2h0ZWRNaW4obWluKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lVmlldy51cGRhdGVIaWdobGlnaHRlZE1pbih0aGlzLCBtaW4pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZXMgd2hpY2ggaW5zdHJ1bSBpcyBjdXJyZW50bHkgaGlnaGxpZ2h0ZWRcclxuICAgIHVwZGF0ZUhpZ2hsaWdodGVkSW5zdHJ1bShpbnN0cnVtKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lVmlldy51cGRhdGVIaWdobGlnaHRlZEluc3RydW0odGhpcywgaW5zdHJ1bSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2xlYXJzIGFsbCBwdWxzaW5nIG1pbnNcclxuICAgIGNsZWFyUHVsc2UoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lVmlldy5jbGVhclB1bHNlKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRvZ2dsZXMgdGhlIGxvYWRpbmcgc2NyZWVuXHJcbiAgICB0b2dnbGVMb2FkaW5nKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVZpZXcudG9nZ2xlTG9hZGluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGxvYWQgcGF0aHMsIGdvb2QgZm9yIGluc3RydW1lbnQgY2hhbmdlc1xyXG4gICAgbG9hZFBhdGhzKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZU1vZGVsLmxvYWRQYXRocygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHBsYXkgc29uZyB2aWEgdHJhbnNwb3J0XHJcbiAgICBwbGF5U29uZygpIHtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXlTb25nKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHBhdXNlcyB0cmFuc3BvcnQgdGh1cyBwYXVzaW5nIHNvbmdcclxuICAgIHBhdXNlU29uZygpIHtcclxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLnBhdXNlU29uZyh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZXN0YXJ0IHNvbmcgYnkgc2V0dGluZyB0cmFuc3BvcnQgdG8gYmVnaW5uaW5nXHJcbiAgICByZXNldFNvbmcoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5yZXNldFNvbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZWxvYWQgYSByYW5kb20gc29uZ1xyXG4gICAgLy8gVE9ETzogU2ltcGxpZnkgd2l0aCB0aGUgcmVsb2FkU29uZygpIG1ldGhvZFxyXG4gICAgcmVsb2FkUmFuZG9tKCkge1xyXG4gICAgICAgIC8vdGhpcy5wYXVzZVNvbmcoKTtcclxuICAgICAgICAvL3RoaXMuY2xlYXJTb25nKCk7XHJcbiAgICAgICAgdGhpcy5yYW5kb21Tb25nKCk7XHJcbiAgICAgICAgLy90aGlzLmxvYWRTb25nKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQbGF5ZmllbGQoKTtcclxuICAgICAgICAvL3RoaXMucmVzZXRTb25nKCk7XHJcbiAgICAgICAgLy90aGlzLnVwZGF0ZU5vd1BsYXlpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBnZW5lcmFsIHJlbG9hZGluZyBvZiBzb25nXHJcbiAgICByZWxvYWRTb25nKCkge1xyXG4gICAgICAgIHRoaXMucGF1c2VTb25nKCk7XHJcbiAgICAgICAgdGhpcy5jbGVhclNvbmcoKTtcclxuICAgICAgICB0aGlzLmxvYWRQYXRocygpO1xyXG4gICAgICAgIHRoaXMubG9hZFNvbmcoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVBsYXlmaWVsZCgpO1xyXG4gICAgICAgIHRoaXMucmVzZXRTb25nKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVOb3dQbGF5aW5nKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR2FtZU1haW47IiwiLy9jb25zdCBUb25lICAgICAgICAgICAgICA9IHJlcXVpcmUoJ1RvbmUnKTtcclxuLy9jb25zdCBTdGFydEF1ZGlvQ29udGV4dCA9IHJlcXVpcmUoJ1N0YXJ0QXVkaW9Db250ZXh0Jyk7XHJcblxyXG5jbGFzcyBHYW1lTW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pc1BsYXlpbmcgICAgICAgICAgPSBmYWxzZTsgICAgLy8gcGxheSBzdGF0ZSBvZiBtdXNpY1xyXG4gICAgICAgIHRoaXMuYWxsRXZlbnRzICAgICAgICAgID0gW107ICAgICAgIC8vIGV2ZW50cyBmb3IgbGlnaHRpbmcgc2xvdHNcclxuICAgICAgICB0aGlzLmFsbFNsb3RzICAgICAgICAgICA9IFtdOyAgICAgICAvLyB0cmFja3MgZWFjaCBzbG90IGRpdiBpbiBwbGF5LWNvbnRhaW5lclxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWROb3RlcyAgICAgID0gW107ICAgICAgIC8vIG1lYXN1cmVzIHRoYXQgaGF2ZSBiZWVuIHNlbGVjdGVkIHRvIGJlIHBsYXllZFxyXG4gICAgICAgIHRoaXMubm90ZVBhdGhzICAgICAgICAgID0gW107ICAgICAgIC8vIHBhdGggdG8gYXVkaW8gZmlsZXMgZm9yIHRoZSBzZWxlY3RlZCBub3Rlc1xyXG4gICAgICAgIHRoaXMudGhlU2NvcmUgICAgICAgICAgID0gW107ICAgICAgIC8vIGFycmF5IG9mIGFsbCBhdmFpbGFibGUgbWVhc3VyZXMgdG8gY2hvb3NlIGZyb21cclxuICAgICAgICB0aGlzLnBsYXllcnMgICAgICAgICAgICA9IFtdOyAgICAgICAvLyBhcnJheSBvZiBUb25lLlBsYXllcnMgd2l0aCBjdXJyZW50IHNvbmdcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5zdHJ1bSAgICA9ICdoYXJwc2ljaG9yZCc7ICAvLyBjdXJyZW50bHkgc2VsZWN0ZWQgaW5zdHJ1bWVudFxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRQYXRoICAgICAgID0gJyc7ICAgICAgIC8vIHBhdGggdG8gdGhlIGF1ZGlvIGZpbGVzIGZvciB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGluc3RydW1lbnRcclxuICAgICAgICB0aGlzLmN1cnJlbnRTbG90ICAgICAgICA9IC0xOyAgICAgICAvLyB3aGljaCBzbG90IGlzIGN1cnJlbnRseSBvcGVuXHJcbiAgICAgICAgdGhpcy5zYW1wbGVCdWZzICAgICAgICAgPSBudWxsOyAgICAgLy8gYnVmcyBmb3Igc2FtcGxpbmcgaW5kaXZpZHVhbCBtaW5zXHJcbiAgICAgICAgdGhpcy5zYW1wbGVQbGF5ZXIgICAgICAgPSBudWxsOyAgICAgLy8gcGxheWVyIHRoYXQgaXMgdXNlZCB0byBwbGF5IHRoZSBzYW1wbGUgbWludWV0c1xyXG5cclxuICAgICAgICAvLyBvYmplY3QgaW5zdHJ1bWVudCBjaG9pY2VzXHJcbiAgICAgICAgdGhpcy5pbnN0cnVtZW50cyA9IHsncGlhbm8nICAgICAgIDogJy4vYXVkaW8vYWNvdXN0aWNfZ3JhbmRfcGlhbm8vJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGF2aW5ldCcgICAgOiAnLi9hdWRpby9jbGF2aW5ldC8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2hhcnBzaWNob3JkJyA6ICcuL2F1ZGlvL2hhcnBzaWNob3JkLyd9O1xyXG5cclxuICAgICAgICAvLyBSZW1vdmVkIHRoZSBjb25kaXRpb25hbCBqdWRnbWVudCBmb3IgZGV2aWNlIGRldGVjdGlvbiwgbWFraW5nIHRoZSBjb2RlIGVmZmVjdGl2ZSBmb3IgYWxsIGRldmljZXMuXHJcbiAgICAgICAgLy8gLy8gYWxsb3dzIHRvbmVqcyB0byBwbGF5IG9uIG1vYmlsZVxyXG4gICAgICAgIC8vIGlmICgvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcclxuICAgICAgICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XHJcblxyXG4gICAgICAgIGxldCBtb2JpbGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBtb2JpbGVDb250YWluZXIuaWQgPSAnbW9iaWxlLWNvbnRhaW5lcic7XHJcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChtb2JpbGVDb250YWluZXIpO1xyXG5cclxuICAgICAgICBsZXQgbW9iaWxlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbW9iaWxlQnV0dG9uLmlkID0gJ21vYmlsZS1idXR0b24nO1xyXG4gICAgICAgIG1vYmlsZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjaXJjbGUnKTtcclxuICAgICAgICBtb2JpbGVCdXR0b24udGV4dENvbnRlbnQgPSAnRW50ZXInO1xyXG4gICAgICAgIG1vYmlsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtb2JpbGVCdXR0b24pO1xyXG4gICAgICAgIG1vYmlsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBtb2JpbGVDb250YWluZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8qU3RhcnRBdWRpb0NvbnRleHQoVG9uZS5jb250ZXh0LCBtb2JpbGVCdXR0b24sIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBtb2JpbGVDb250YWluZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7Ki9cclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgLy8gZGVmYXVsdCBpbnN0cnVtZW50IHRvIHBsYXlcclxuICAgICAgICB0aGlzLnNlbGVjdGVkUGF0aCA9IHRoaXMuaW5zdHJ1bWVudHNbdGhpcy5zZWxlY3RlZEluc3RydW1dO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlU2NvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBmb3JtcyBiYXNlIHRhYmxlIGZvciB0aGVTY29yZVxyXG4gICAgY3JlYXRlU2NvcmUoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudGhlU2NvcmUgPSBbXHJcbiAgICAgICAgICAgICAgICBbIFwiTTk2XCIsICBcIk0zMlwiLCAgXCJNNjlcIiwgIFwiTTQwXCIsIFwiTTE0OFwiLCBcIk0xMDRcIiwgXCJNMTUyXCIsIFwiTTExOVwiLCAgXCJNOThcIiwgICBcIk0zXCIsICBcIk01NFwiXSxcclxuICAgICAgICAgICAgICAgIFsgXCJNMjJcIiwgICBcIk02XCIsICBcIk05NVwiLCAgXCJNMTdcIiwgIFwiTTc0XCIsIFwiTTE1N1wiLCAgXCJNNjBcIiwgIFwiTTg0XCIsIFwiTTE0MlwiLCAgXCJNODdcIiwgXCJNMTMwXCJdLFxyXG4gICAgICAgICAgICAgICAgW1wiTTE0MVwiLCBcIk0xMjhcIiwgXCJNMTU4XCIsIFwiTTExM1wiLCBcIk0xNjNcIiwgIFwiTTI3XCIsIFwiTTE3MVwiLCBcIk0xMTRcIiwgIFwiTTQyXCIsIFwiTTE2NVwiLCAgXCJNMTBcIl0sXHJcbiAgICAgICAgICAgICAgICBbIFwiTTQxXCIsICBcIk02M1wiLCAgXCJNMTNcIiwgIFwiTTg1XCIsICBcIk00NVwiLCBcIk0xNjdcIiwgIFwiTTUzXCIsICBcIk01MFwiLCBcIk0xNTZcIiwgIFwiTTYxXCIsIFwiTTEwM1wiXSxcclxuICAgICAgICAgICAgICAgIFtcIk0xMDVcIiwgXCJNMTQ2XCIsIFwiTTE1M1wiLCBcIk0xNjFcIiwgIFwiTTgwXCIsIFwiTTE1NFwiLCAgXCJNOTlcIiwgXCJNMTQwXCIsICBcIk03NVwiLCBcIk0xMzVcIiwgIFwiTTI4XCJdLFxyXG4gICAgICAgICAgICAgICAgW1wiTTEyMlwiLCAgXCJNNDZcIiwgIFwiTTU1XCIsICAgXCJNMlwiLCAgXCJNOTdcIiwgIFwiTTY4XCIsIFwiTTEzM1wiLCAgXCJNODZcIiwgXCJNMTI5XCIsICBcIk00N1wiLCAgXCJNMzdcIl0sXHJcbiAgICAgICAgICAgICAgICBbIFwiTTExXCIsIFwiTTEzNFwiLCBcIk0xMTBcIiwgXCJNMTU5XCIsICBcIk0zNlwiLCBcIk0xMThcIiwgIFwiTTIxXCIsIFwiTTE2OVwiLCAgXCJNNjJcIiwgXCJNMTQ3XCIsIFwiTTEwNlwiXSxcclxuICAgICAgICAgICAgICAgIFsgXCJNMzBcIiwgIFwiTTgxXCIsICBcIk0yNFwiLCBcIk0xMDBcIiwgXCJNMTA3XCIsICBcIk05MVwiLCBcIk0xMjdcIiwgIFwiTTk0XCIsIFwiTTEyM1wiLCAgXCJNMzNcIiwgICBcIk01XCJdLFxyXG4gICAgICAgICAgICAgICAgWyBcIk03MFwiLCBcIk0xMTdcIiwgIFwiTTY2XCIsICBcIk05MFwiLCAgXCJNMjVcIiwgXCJNMTM4XCIsICBcIk0xNlwiLCBcIk0xMjBcIiwgIFwiTTY1XCIsIFwiTTEwMlwiLCAgXCJNMzVcIl0sXHJcbiAgICAgICAgICAgICAgICBbXCJNMTIxXCIsICBcIk0zOVwiLCBcIk0xMzlcIiwgXCJNMTc2XCIsIFwiTTE0M1wiLCAgXCJNNzFcIiwgXCJNMTU1XCIsICBcIk04OFwiLCAgXCJNNzdcIiwgICBcIk00XCIsICBcIk0yMFwiXSxcclxuICAgICAgICAgICAgICAgIFsgXCJNMjZcIiwgXCJNMTI2XCIsICBcIk0xNVwiLCAgIFwiTTdcIiwgIFwiTTY0XCIsIFwiTTE1MFwiLCAgXCJNNTdcIiwgIFwiTTQ4XCIsICBcIk0xOVwiLCAgXCJNMzFcIiwgXCJNMTA4XCJdLFxyXG4gICAgICAgICAgICAgICAgWyAgXCJNOVwiLCAgXCJNNTZcIiwgXCJNMTMyXCIsICBcIk0zNFwiLCBcIk0xMjVcIiwgIFwiTTI5XCIsIFwiTTE3NVwiLCBcIk0xNjZcIiwgIFwiTTgyXCIsIFwiTTE2NFwiLCAgXCJNOTJcIl0sXHJcbiAgICAgICAgICAgICAgICBbXCJNMTEyXCIsIFwiTTE3NFwiLCAgXCJNNzNcIiwgIFwiTTY3XCIsICBcIk03NlwiLCBcIk0xMDFcIiwgIFwiTTQzXCIsICBcIk01MVwiLCBcIk0xMzdcIiwgXCJNMTQ0XCIsICBcIk0xMlwiXSxcclxuICAgICAgICAgICAgICAgIFsgXCJNNDlcIiwgIFwiTTE4XCIsICBcIk01OFwiLCBcIk0xNjBcIiwgXCJNMTM2XCIsIFwiTTE2MlwiLCBcIk0xNjhcIiwgXCJNMTE1XCIsICBcIk0zOFwiLCAgXCJNNTlcIiwgXCJNMTI0XCJdLFxyXG4gICAgICAgICAgICAgICAgW1wiTTEwOVwiLCBcIk0xMTZcIiwgXCJNMTQ1XCIsICBcIk01MlwiLCAgIFwiTTFcIiwgIFwiTTIzXCIsICBcIk04OVwiLCAgXCJNNzJcIiwgXCJNMTQ5XCIsIFwiTTE3M1wiLCAgXCJNNDRcIl0sXHJcbiAgICAgICAgICAgICAgICBbIFwiTTE0XCIsICBcIk04M1wiLCAgXCJNNzlcIiwgXCJNMTcwXCIsICBcIk05M1wiLCBcIk0xNTFcIiwgXCJNMTcyXCIsIFwiTTExMVwiLCAgIFwiTThcIiwgIFwiTTc4XCIsIFwiTTEzMVwiXV07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmV0dXJuIHJhbmRvbSBtZWFzdXJlIGZyb20gYW4gYXJyYXlcclxuICAgIHJhbmRNZWFzdXJlKG5vdGVBcnJheSkge1xyXG4gICAgICAgIGxldCBudW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBub3RlQXJyYXkubGVuZ3RoKTtcclxuICAgICAgICByZXR1cm4gbm90ZUFycmF5W251bV07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY3JlYXRlcyBhIHJhbmRvbSBzb25nXHJcbiAgICByYW5kb21Tb25nKCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWROb3RlcyA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGhlU2NvcmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE5vdGVzLnB1c2godGhpcy5yYW5kTWVhc3VyZSh0aGlzLnRoZVNjb3JlW2ldKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFRPRE86IEZpbmQgd2F5IHRvIHJlbW92ZSB0aGlzIGFuZCBwbGFjZSB3aXRoaW4gcmVsb2FkUmFuZG9tIGluIEdhbWVNYWluXHJcbiAgICAgICAvLyB0aGlzLmxvYWRQYXRocygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGxvYWQgcGF0aHMgYmFzZWQgb2ZmIG9mIHRoZSBzZWxlY3RlZE5vdGVzXHJcbiAgICBsb2FkUGF0aHMoKSB7XHJcbiAgICAgICAgdGhpcy5ub3RlUGF0aHMgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGVkTm90ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5ub3RlUGF0aHMucHVzaCh0aGlzLnNlbGVjdGVkUGF0aCArIHRoaXMuc2VsZWN0ZWROb3Rlc1tpXSArICcud2F2Jyk7IC8vIFRPRE86IGlzIGl0IG9rYXkgdG8gaGFyZCBjb2RlIHRoaXM/XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGxvYWQgc2VsZWN0ZWROb3RlcyBzbyB0aGF0IHRoZXkgbWF5IGJlIHBsYXllZFxyXG4gICAgbG9hZFNvbmcoYXBwKSB7XHJcbiAgICAgICAgYXBwLnRvZ2dsZUxvYWRpbmcoKTtcclxuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJzID0gbmV3IFRvbmUuUGxheWVycyh0aGlzLm5vdGVQYXRocywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ub3RlUGF0aHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLnBsYXllcnMuZ2V0KGkpO1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLnRvTWFzdGVyKCk7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIuc3luYygpLnN0YXJ0KG9mZnNldCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGV2dCA9IG5ldyBUb25lLkV2ZW50KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcC51cGRhdGVOb3dQbGF5aW5nKGFwcC5nYW1lTW9kZWwuYWxsU2xvdHNbaV0pO1xyXG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpKS5zdGFydChvZmZzZXQgKyAyLjApO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsRXZlbnRzLnB1c2goZXZ0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gcGxheWVyLmJ1ZmZlci5kdXJhdGlvbiAtIDIuMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhcHAudG9nZ2xlTG9hZGluZygpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbWV0aG9kIGNsZWFycyBUb25lIG9mIGV4aXN0aW5nIHNvbmdcclxuICAgIGNsZWFyU29uZygpIHtcclxuICAgICAgICBmb3IgKGxldCBldnQgaW4gdGhpcy5hbGxFdmVudHMpIHtcclxuICAgICAgICAgICAgdGhpcy5hbGxFdmVudHNbZXZ0XS5kaXNwb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWxsRXZlbnRzID0gW107XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVycy5kaXNwb3NlKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNhbXBsZUJ1ZnMpIHtcclxuICAgICAgICAgICAgdGhpcy5zYW1wbGVCdWZzLmRpc3Bvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc3RvcHMgdGhlIHNhbXBsZVBsYXllciBmcm9tIHBsYXlpbmdcclxuICAgIHN0b3BTYW1wbGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNhbXBsZVBsYXllcikge1xyXG4gICAgICAgICAgICB0aGlzLnNhbXBsZVBsYXllci5zdG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVNb2RlbDsiLCIvL2NvbnN0IFRvbmUgPSByZXF1aXJlKCdUb25lJyk7XHJcblxyXG5jbGFzcyBHYW1lVmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3Rpb24tY29udGFpbmVyJyk7XHJcbiAgICAgICAgdGhpcy5pbnN0cnVtQ29udGFpbmVyICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5zdHJ1bS1jb250YWluZXInKTtcclxuICAgICAgICB0aGlzLm1pbnVldENvbnRhaW5lciAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaW51ZXQtY29udGFpbmVyJyk7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nQ29udGFpbmVyICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGluZy1jb250YWluZXInKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjcmVhdGVzIHRoZSBpbml0aWFsIHBsYXlmaWVsZCBmb3IgdGhlIHBsYXllciB0byBpbnRlcmFjdCB3aXRoXHJcbiAgICBmb3JtUGxheWZpZWxkKGFwcCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRm9ybWluZyBwbGF5ZmllbGQuLi5cIiArIGFwcC5nYW1lTW9kZWwuc2VsZWN0ZWROb3Rlcy5sZW5ndGgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXBwLmdhbWVNb2RlbC5zZWxlY3RlZE5vdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBzbG90ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nsb3QtJyArIGkpO1xyXG4gICAgICAgICAgICAvL2xldCBleGl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4aXQtYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIHNsb3QuaW5uZXJIVE1MID0gdGhpcy5jcmVhdGVQbGF5SFRNTChhcHAuZ2FtZU1vZGVsLnNlbGVjdGVkTm90ZXNbaV0pO1xyXG4gICAgICAgICAgICBzbG90LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoLi9pbWcvbm90YXRpb24vJyArIGFwcC5nYW1lTW9kZWwuc2VsZWN0ZWROb3Rlc1tpXSArICcucG5nKSc7XHJcblxyXG4gICAgICAgICAgICAvLyBldmVudCBsaXN0ZW5lciBmb3IgY2xpY2tpbmcgYSBzaW5nbGUgc2xvdFxyXG4gICAgICAgICAgICAvKnNsb3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzbG90LmlubmVySFRNTCA9ICc/JztcclxuICAgICAgICAgICAgICAgIHNsb3QuY2xhc3NMaXN0LmFkZCgnY2xpY2tlZC1zbG90Jyk7XHJcbiAgICAgICAgICAgICAgICBzbG90LnN0eWxlLnNldFByb3BlcnR5KCctLWJnLWltYWdlJywgYHVybCguLi9pbWcvbm90YXRpb24vJHthcHAuZ2FtZU1vZGVsLnNlbGVjdGVkTm90ZXNbaV19LnBuZylgKTsgICBcclxuXHJcbiAgICAgICAgICAgICAgICBhcHAucGF1c2VTb25nKCk7XHJcbiAgICAgICAgICAgICAgICBhcHAudG9nZ2xlTG9hZGluZygpO1xyXG5cclxuICAgICAgICAgICAgICAgIGFwcC51cGRhdGVIaWdobGlnaHRlZE1pbihhcHAuZ2FtZU1vZGVsLnRoZVNjb3JlW2ldLmluZGV4T2YoYXBwLmdhbWVNb2RlbC5zZWxlY3RlZE5vdGVzW2ldKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZ2F0aGVyIHBhdGhzIHdlIG5lZWQgdG8gbG9hZCBpbiBmb3IgdXNlciB0byBzYW1wbGVcclxuICAgICAgICAgICAgICAgIGxldCBwYXRocyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBhcHAuZ2FtZU1vZGVsLnRoZVNjb3JlW2ldLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aHMucHVzaChhcHAuZ2FtZU1vZGVsLnNlbGVjdGVkUGF0aCArIGFwcC5nYW1lTW9kZWwudGhlU2NvcmVbaV1ba10gKyAnLndhdicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBidWZmZXJzIGZvciBzb3VuZCBmaWxlcyB0aGF0IHVzZXIgY2FuIHNhbXBsZVxyXG4gICAgICAgICAgICAgICAgYXBwLmdhbWVNb2RlbC5zYW1wbGVCdWZzID0gbmV3IFRvbmUuQnVmZmVycyhwYXRocywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhcHAuZ2FtZU1vZGVsLnRoZVNjb3JlW2ldLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtaW51ZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWluLScgKyBqKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9taW51ZXQuaW5uZXJIVE1MID0gdGhpcy5jcmVhdGVQbGF5SFRNTChhcHAuZ2FtZU1vZGVsLnRoZVNjb3JlW2ldW2pdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWludWV0LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoLi9pbWcvbm90YXRpb24vJyArIGFwcC5nYW1lTW9kZWwudGhlU2NvcmVbaV1bal0gKyAnLnBuZyknO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWxsb3dzIHRoZSB1c2VyIHRvIHNhbXBsZSBpbmRpdmlkdWFsIG1pbnVldHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWludWV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBzYW1wbGluZywgc3RvcCBpdCBhbmQgc3RhcnQgdGhpcyBvbmUgaW5zdGVhZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwLmNsZWFyUHVsc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcC5zdG9wU2FtcGxlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbnVldC5jbGFzc0xpc3QuYWRkKCdwdWxzZScpOyAvL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwLnVwZGF0ZUhpZ2hsaWdodGVkTWluKGopO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tYmctaW1hZ2UnLCBgdXJsKC4uL2ltZy9ub3RhdGlvbi8ke2FwcC5nYW1lTW9kZWwudGhlU2NvcmVbaV1bal19LnBuZylgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHAuZ2FtZU1vZGVsLnNhbXBsZVBsYXllciA9IG5ldyBUb25lLlBsYXllcihhcHAuZ2FtZU1vZGVsLnNhbXBsZUJ1ZnMuZ2V0KGopKS50b01hc3RlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwLmdhbWVNb2RlbC5zYW1wbGVQbGF5ZXIuc3RhcnQoVG9uZS5ub3coKSwgMS42KTsgLy8gc3RhcnRzIHdpdGggMiBzZWNvbmQgb2Zmc2V0XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgZm9yIGVuZCBvZiBhbmltYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbnVldC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHAuY2xlYXJQdWxzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcC5zdG9wU2FtcGxlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwLnRvZ2dsZUxvYWRpbmcoKTtcclxuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1pbnVldENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB1cGRhdGUgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBzbG90XHJcbiAgICAgICAgICAgICAgICBhcHAuY3VycmVudFNsb3QgPSBpO1xyXG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlIGNvbmZpcm0oZXhpdCkgYnV0dG9uIHRleHRcclxuICAgICAgICAgICAgICAgIC8vZXhpdEJ1dHRvbi50ZXh0Q29udGVudCA9IGBDb25maXJtXFxuTSR7aSArIDF9YDtcclxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTsqL1xyXG5cclxuICAgICAgICAgICAgYXBwLmdhbWVNb2RlbC5hbGxTbG90cy5wdXNoKHNsb3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyByZWZyZXNoZXMgdGhlIHBsYXlGaWVsZCB3aXRoIG5ldyBzZWxlY3Rpb25zXHJcbiAgICB1cGRhdGVQbGF5ZmllbGQoYXBwKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcHAuZ2FtZU1vZGVsLmFsbFNsb3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFwcC5nYW1lTW9kZWwuYWxsU2xvdHNbaV0uaW5uZXJIVE1MID0gdGhpcy5jcmVhdGVQbGF5SFRNTChhcHAuZ2FtZU1vZGVsLnNlbGVjdGVkTm90ZXNbaV0pO1xyXG4gICAgICAgICAgICBsZXQgc2xvdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbG90LScgKyBpKTtcclxuICAgICAgICAgICAgc2xvdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKC4vaW1nL25vdGF0aW9uLycgKyBhcHAuZ2FtZU1vZGVsLnNlbGVjdGVkTm90ZXNbaV0gKyAnLnBuZyknO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgd2hpY2ggc2xvdCBoYXMgdGhlIHBsYXlpbmcgY2xhc3NcclxuICAgIHVwZGF0ZU5vd1BsYXlpbmcoYXBwLCBzbG90KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcHAuZ2FtZU1vZGVsLmFsbFNsb3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFwcC5nYW1lTW9kZWwuYWxsU2xvdHNbaV0uY2xhc3NMaXN0LnJlbW92ZSgncGxheWluZycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNsb3QpIHtcclxuICAgICAgICAgICAgc2xvdC5jbGFzc0xpc3QuYWRkKCdwbGF5aW5nJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHJldHVybnMgdGhlIHNpbXBsaWZpZWQgaW5uZXJIVE1MIGZvciBhIGdpdmVuIG5vdGVcclxuICAgIGNyZWF0ZVBsYXlIVE1MKG5vdGUpIHtcclxuICAgICAgICByZXR1cm4gbm90ZS5tYXRjaCgvKFxcZCspLylbMF07XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlUGxheUltYWdlKHBsYXlCdXR0b24sIGlzUGxheWluZykge1xyXG4gICAgICAgIHBsYXlCdXR0b24uc3R5bGUuYmFja2dyb3VuZEltYWdlID1cclxuICAgICAgICAgICAgJ3VybChcXCcnICtcclxuICAgICAgICAgICAgKCFpc1BsYXlpbmcgPyAnLi9pbWcvYnV0dG9uUGxheS5wbmcnIDogJy4vaW1nL2J1dHRvblBhdXNlLnBuZycpICtcclxuICAgICAgICAgICAgJ1xcJyknO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRPRE86IG1ha2UgdGhpcyBiZXR0ZXIuIFNlZW1zIGEgbGl0dGxlIGV4Y2Vzc1xyXG4gICAgdXBkYXRlSW5zdHJ1bUltYWdlKGluc3RydW0sIGJ1dHRvbikge1xyXG4gICAgICAgIGxldCBwYXRoO1xyXG4gICAgICAgIHN3aXRjaCAoaW5zdHJ1bSkge1xyXG4gICAgICAgICAgICBjYXNlICdwaWFubyc6XHJcbiAgICAgICAgICAgICAgICBwYXRoID0gJy4vaW1nL2J1dHRvblBpYW5vLnBuZyc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ2NsYXZpbmV0JzpcclxuICAgICAgICAgICAgICAgIHBhdGggPSAnLi9pbWcvYnV0dG9uQ2xhdi5wbmcnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdoYXJwc2ljaG9yZCc6XHJcbiAgICAgICAgICAgICAgICBwYXRoID0gJy4vaW1nL2J1dHRvbkhhcnBzaS5wbmcnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcXCcnICsgcGF0aCArICdcXCcpJztcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGVzIHdoaWNoIG1pbiBpcyBjdXJyZW50bHkgaGlnaGxpZ2h0ZWQgYmFzZWQgb24gZ2l2ZW4gaW5kZXhcclxuICAgIHVwZGF0ZUhpZ2hsaWdodGVkTWluKGFwcCwgbWluKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcHAuZ2FtZU1vZGVsLnRoZVNjb3JlWzBdLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBlbG0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWluLScgKyBpKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpICE9PSBtaW4pXHJcbiAgICAgICAgICAgICAgICBlbG0uY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0Jyk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGVsbS5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlcyBjdXJyZW50bHkgaGlnaGxpZ2h0ZWQgaW5zdHJ1bVxyXG4gICAgLy8gVE9ETzogY29uZGVuc2UgdGhpcyBhbmQgdGhlIHByZXZpb3VzIG1ldGhvZCBpbnRvIGEgc2luZ2xlIGZ1bmN0aW9uXHJcbiAgICB1cGRhdGVIaWdobGlnaHRlZEluc3RydW0oYXBwLCBpbnN0cnVtKSB7XHJcbiAgICAgICAgYXBwLmdhbWVDb250cm9sbGVyLnBpYW5vQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodCcpO1xyXG4gICAgICAgIGFwcC5nYW1lQ29udHJvbGxlci5jbGF2QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodCcpO1xyXG4gICAgICAgIGFwcC5nYW1lQ29udHJvbGxlci5oYXJwc2lCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0Jyk7XHJcblxyXG4gICAgICAgIGluc3RydW0uY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2xlYXJzIGFsbCBwdWxzaW5nIG1pbnNcclxuICAgIGNsZWFyUHVsc2UoYXBwKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcHAuZ2FtZU1vZGVsLnRoZVNjb3JlWzBdLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBlbG0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWluLScgKyBpKTtcclxuXHJcbiAgICAgICAgICAgIGVsbS5jbGFzc0xpc3QucmVtb3ZlKCdwdWxzZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB0b2dnbGVzIHRoZSBsb2FkaW5nIHNjcmVlblxyXG4gICAgdG9nZ2xlTG9hZGluZygpIHtcclxuICAgICAgICBpZiAodGhpcy5sb2FkaW5nQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpXHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZ0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBHYW1lVmlldzsiLCIvLyBuZWVkZWQgZm9yIHJlcXVpcmUuanNcclxubGV0IEdhbWVNYWluID0gcmVxdWlyZSgnLi9HYW1lTWFpbi5qcycpO1xyXG52YXIgZ2FtZU1haW4gPSBuZXcgR2FtZU1haW4oKTsiXX0=
