import React, { useState } from "react";

const NOTES = {
    'C4': 261.63,
    'D4': 293.66,
    'E4': 329.63,
    'F4': 349.23,
    'G4': 392.00,
    'A4': 440.00,
    'B4': 493.88,
    'C5': 523.25,
    '-': 0
};

const NOTE_NAMES = Object.keys(NOTES);

export default TunePassword = () => {
    // State to hold the current tune (array of note names)
    const [tune, setTune] = useState(Array(8).fill('-'));

    const playNote = (note) => {
        if (note === '-') return; // Don't play if it's a rest

        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();// Create an audio context
        const oscillator = audioCtx.createOscillator();// Create an oscillator node to generate sound
        const gainNode = audioCtx.createGain(); // Create a gain node to control the volume

        oscillator.type = 'sine'; // Set the waveform type (sine wave) (you can change this to 'square', 'triangle', etc.)
        oscillator.frequency.value = NOTES[note]; // Set the frequency based on the note

        gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime); // Set the volume (0.5 is half volume)
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3); // Fade out the sound over 0.3 seconds

        oscillator.connect(gainNode); // Connect the oscillator to the gain node
        gainNode.connect(audioCtx.destination); // Connect the gain node to the audio output

        oscillator.start(); // Start playing the note
        oscillator.stop(audioCtx.currentTime + 0.3); // Stop the note after 0.3 seconds
    
    };

    const handleNoteChange = (index, newNote) => {
        const newTune = [...tune];
        newTune[index] = newNote;
        setTune(newTune);
        playNote(newNote); // Play the note immediately when it's selected
    };

    const playSequence = () => {
        tune.forEach((note, index) => {
            setTimeout(() => {
                playNote(note);
            }, index * 400); 
        });
    };

    return (
        <div className="password-container">
            <h2>Create Your Audio Password</h2>

            <div className="note-selector">
                {TunePassword.map((currentNote, index) => (
                    <select key={index} value={currentNote} onChange={(e) => handleNoteChange(index, e.target.value)} style={{padding: '10px', border: '2px solid black', cursor: 'pointer'}}>
                        {NOTE_NAMES.map(note => (
                            <option key={note} value={note}>{note}</option>
                        ))}
                    </select>
                ))}
            </div>

            <div className="password-controls">
                <button onClick={playSequence} className="controls-btn">
                    ▶ Play Tune
                </button>

                <button onClick={() => alert(`Saveing password to DB: ${tune.join('')}`)}>
                    Save Password
                </button>
            </div>

            <p>Current Password: <strong>{tune.join('')}</strong></p>
        </div>
    )
};