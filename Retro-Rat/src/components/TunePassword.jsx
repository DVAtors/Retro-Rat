import React, { useState } from "react";
import "./TunePassword.css";
import BootHeader from "./BootHeader";

const NOTES = {
    C4: 261.63,
    D4: 293.66,
    E4: 329.63,
    F4: 349.23,
    G4: 392.0,
    A4: 440.0,
    B4: 493.88,
    C5: 523.25,
    "-": 0,
};

const NOTE_NAMES = Object.keys(NOTES); //dictionary list of the name of notes with the oscilating frequencies to make the sound of the note o7

const TunePassword = () => {
    // State to hold the current tune (array of note names)
    const [tune, setTune] = useState(Array(8).fill("-")); //the 8 slots for eack password note/tune that the user needs to fill

    const playNote = (note) => {
        if (note === "-" || !note) return; // Don't play if it's a rest

        const audioCtx = new (window.AudioContext || window.webkitAudioContext)(); //contenxt prpares the sound to be made so that the context is there before the logic jumps in
        const oscillator = audioCtx.createOscillator(); //  created variable named oscillator: node to generate vibration to make the sound
        const gainNode = audioCtx.createGain(); // gain knob/node to control the volume

        oscillator.type = "square"; // the sound waveform type
        // Sine (sine): smooth, gentle, rolling wave
        // Square (square): very blocky, jagged, tetris like wave
        // Sawtooth (sawtooth):  buzzy, sharp, and aggressive, often used for synth bass lines or sirens.
        // Triangle (triangle): Somewhere between a sine and a square. It’s smooth but has a little bit of a hollow "honk" to it

        oscillator.frequency.value = NOTES[note]; // Set the frequency based on the note

        gainNode.gain.setValueAtTime(0.25, audioCtx.currentTime); // 0.5 is half volume
        gainNode.gain.exponentialRampToValueAtTime(
            0.001,
            audioCtx.currentTime + 0.3
        ); // start loud then fade out the sound over 0.3 seconds so it's a shot beep instead of a beeeeeeeeeeeeeeeeep (annoying)

        oscillator.connect(gainNode); // Connect the oscillator to the gain node so the ocsillator actully knows to what it's supposed to sound like
        gainNode.connect(audioCtx.destination); // Connect the gain node to the audio output

        oscillator.start(); // Start playing the note
        oscillator.stop(audioCtx.currentTime + 0.3); // Stop the note after 0.3 seconds so it doesn't drooooooone on
    };

    const handleNoteSlider = (slotIndex, noteIndex) => {
        const newNote = NOTE_NAMES[noteIndex];
        const newTune = [...tune];
        newTune[slotIndex] = newNote;
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
        <>
    <BootHeader/>
            <div className="password-container">
                <p className="password-heading">Login Required</p>

                <div className="username-container">
                    <p className="username-text">Username</p>
                    <p className="username-string">
                        <div> &gt;
                            <input
                                type="text"
                                name="username" placeholder="Type Username Here"
                                className="user-input"
                            />

                        </div>
                    </p>
                </div>

                <div className="load-compositionContainer">
                    <p className="load-text">Load Composition</p>

                    <div className="slider-grid">
                        {tune.map((currentNote, slotIndex) => (
                            <div key={slotIndex} className="slider-col">
                                <span className="current-note">{currentNote}</span>

                                <input
                                    type="range"
                                    min="0"
                                    max={NOTE_NAMES.length - 1}
                                    value={NOTE_NAMES.indexOf(currentNote)}
                                    onChange={(e) =>
                                        handleNoteSlider(slotIndex, parseInt(e.target.value))
                                    }
                                />

                                {/* r/ ExplainLikeI'm5
imagine you have 9 jars of milk on the wall. Each jar has a different label and it makes the sound of that note when you do the water playing thing but with jars of milk (C4, D4, E4... and one jar is empty for "-").

type='range' The Sliding Down Blood Thing
this turns the input into a slider (computers are smart, you don't have to overcomplicate and rebuild the wheel. we aim for effectivness, not smart inventions, except when debugging...actully no, with debugging too. i'll retype my entire code just for everyone to tell me it's perfect and it sill doens't work for me to finally cheat the import anf i SPELT IT WRONGGG, IM A SYNTAX ERROR MAXXER BRO

anyway

Think of it as a ladder you can slide back and forth to reach the 9 jars of milk

min{0} and max={NOTE_NAMES.length - 1} THE BOUNDS
This tells the slider where the drip starts and stops :P

min={0}: The drip starts at jar #0 (-)

max={8}: thenlast jar is index 8, so the slider doest drip off the edge of the container

value={NOTE_NAMES.indexOf((currentNote)) (where are weeee and i'm so sooorryy)}
This tells the drop to sit in triage on the slider for now until it's moved.Then drop looks at her older sister and says "what number Jar is G4 milk? and if G4 is the 5th jar, the slider moves itself to position 5.

onChange=(e) => ...} "hei hii, i moved. and everyting you brab me i wil keep moving" .;D

a.target.value: This is the number of the new jar the ladder is touching (like 3 >:3)

parseInt(...): Since the slider speaks in "text" numbers, we use this to turn it into a "real" math number so the computer can calculate with this o7

handleNoteSlider(slotIndex, ...):
This sends a messege to the main code saying 
*/}
                            </div>
                        ))}
                    </div>
                </div>

                {/* initialdropdownmenu thing
            <div className="note-selector"> 
                {tune.map((currentNote, index) => (
                    <select key={index} value={currentNote} onChange={(e) => handleNoteChange(index, e.target.value)} 
                    style={{padding: '10px', border: '2px solid black', cursor: 'pointer'}}>

                        {NOTE_NAMES.map(note => (
                            <option key={note} value={note}>{note}</option>
                        ))}
                    </select>
                ))}
            </div> */}

                <div className="password-controls">
                    <button onClick={playSequence} className="controls-btn">
                        ▶
                    </button>

                    <button
                        onClick={() => alert(`Saveing password to DB: ${tune.join("")}`)}
                        className="controls-btn"
                    >
                        Save Password
                    </button>
                </div>

                <p className="user-password-string">
                    RETURN USER'S PASSWORD AS STRING: <strong>{tune.join("")}</strong>
                </p>
            </div>
        </>
    );
};

export default TunePassword;
