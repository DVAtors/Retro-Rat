import React, { useState } from "react";
import './TunePassword.css'
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

const TunePassword = () => {
    // State to hold the current tune (array of note names)
    const [tune, setTune] = useState(Array(8).fill('-'));

    const playNote = (note) => {
        if (note === '-') return; // Don't play if it's a rest

        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();//  oscillator node to generate sound
        const gainNode = audioCtx.createGain(); // gain node to control the volume

        oscillator.type = 'square'; // the sound waveform type
// Sine (sine): smooth, gentle, rolling wave
// Square (square): very blocky, jagged, tetris like wave
// Sawtooth (sawtooth):  buzzy, sharp, and aggressive, often used for synth bass lines or sirens.
// Triangle (triangle): Somewhere between a sine and a square. It’s smooth but has a little bit of a hollow "honk" to it

        oscillator.frequency.value = NOTES[note]; // Set the frequency based on the note

        gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime); // 0.5 is half volume
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3); // Fade out the sound over 0.3 seconds

        oscillator.connect(gainNode); // Connect the oscillator to the gain node
        gainNode.connect(audioCtx.destination); // Connect the gain node to the audio output

        oscillator.start(); // Start playing the note
        oscillator.stop(audioCtx.currentTime + 0.3); // Stop the note after 0.3 seconds so it doesn't drooooooone on
    
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
            <h2 className="password-heading">Create Your Audio Password</h2>

            <div className="note-selector">
                {tune.map((currentNote, index) => (
                    <select key={index} value={currentNote} onChange={(e) => handleNoteChange(index, e.target.value)} 
                    style={{padding: '10px', border: '2px solid black', cursor: 'pointer'}}>

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

                <button onClick={() => alert(`Saveing password to DB: ${tune.join('')}`)} className="controls-btn">
                    Save Password
                </button>
            </div>

            <p className="user-password-string">RETURN USER'S PASSWORD AS STRING: <strong>{tune.join('')}</strong></p>
        </div>
    )
};

export default TunePassword