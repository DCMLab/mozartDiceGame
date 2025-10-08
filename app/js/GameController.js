//const Tone              = require('Tone');

class GameController {
    constructor(app) { 
        // setup play/pause button
        /*this.playButton = document.getElementById('play-button');
        this.playButton.addEventListener('click', function() {
            // toggle song playing
            app.gameModel.isPlaying ? app.pauseSong() : app.playSong();
        }.bind(this));*/

        // setup random button
        /*this.randomButton = document.getElementById('random-button');*/
        document.addEventListener('keypress', function(event) {
            if (event.code === 'Space' || event.code === 'Enter') {
                event.preventDefault(); // Prevent default action like scrolling
                app.reloadRandom();
            }
        }.bind(this));
        this.playContainer = document.getElementById('play-container');
        console.log("Play container binded" + this.playContainer);
        this.playContainer.addEventListener('click', function() {
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
    playSong(app) {
        Tone.Transport.start('+0.1');
        app.gameModel.isPlaying = true;
        app.togglePlayImage();
    }

    // pauses transport
    pauseSong(app) {
        Tone.Transport.pause();
        app.gameModel.isPlaying = false;
        app.togglePlayImage();
    }

    // restart song by setting transport to beginning
    resetSong() {
        Tone.Transport.position = '0:02:05';
    }

    // TO-DO: still with some displacement
    animateMinuetToSlot(app) {
        const selectedMinuet = document.querySelector('.pulse') || document.querySelector('.highlight');
        if (selectedMinuet && app.currentSlot !== undefined) {
            const slot = document.getElementById('slot-' + app.currentSlot);
            const minuetRect = selectedMinuet.getBoundingClientRect();
            const slotRect = slot.getBoundingClientRect();
    
            // Create a clone of the minuet for animation
            const clone = selectedMinuet.cloneNode(true);
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
            clone.style.top = (slotRect.top + slotRect.height / 2) + 'px';
            clone.style.left = (slotRect.left + slotRect.width / 2) + 'px';
            clone.style.width = slotRect.width + 'px';
            clone.style.height = slotRect.height + 'px';
            clone.style.borderRadius = '5%';
    
            // Update the slot after animation
            const handleTransitionEnd = function() {
                slot.style.backgroundImage = selectedMinuet.style.backgroundImage;
                slot.classList.add('slot-flash');
                if (clone.parentNode) {
                    document.body.removeChild(clone);
                }
                clone.removeEventListener('transitionend', handleTransitionEnd);
            };
    
            clone.addEventListener('transitionend', handleTransitionEnd);
    
            return true; // Animation started
        }
        return false; // No animation performed
    }
    
}

module.exports = GameController;