// Timer.js

import React from 'react';
import './Timer.css';
import { startCountdown } from './countdownScript';

function Timer() {
    useEffect(() => {
        // Use the countdown script on component mount
        startCountdown();
    }, []);
    
    return (
        <div className="timer-container">
            <div className="row align-items-center">
                <div className="col-lg-6 text-center">
                    <h2>Countdown Timer</h2>
                    <div className="form-inline justify-content-center">
                        <label htmlFor="countdownInput" className="mr-2">Enter a number:</label>
                        <input type="number" className="form-control form-control-sm mr-2" id="countdownInput" min="1" max="100" />
                        <button id="startButton" className="btn btn-dark text-center mb-1">Start Countdown</button>
                    </div>
                    <div className="justify-content-center" id="countdownOutput"></div>
                </div>
                <div className="col-lg-6 text-center">
                    <h4 id="completionTitle">The Words of the Week!</h4>
                </div>
            </div>
        </div>
    );
}

export default Timer;
