import React, { useState, useEffect } from 'react';
import '../css/countdown.css';

const Countdown = () => {
    const [imageIndex, setImageIndex] = useState(0);

    const images = [
        'images/media-chrome.svg',
        'images/media-mobile.svg',
        'images/media-desktop.svg',
    ];

    const colors = ['#f4dd58', '#f4aba9', '#d0cfcd'];

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex((imageIndex + 1) % images.length);
        }, 1000);

        return () => clearInterval(interval);
    }, [imageIndex]);

    const [timer, setTimer] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });
    useEffect(() => {
        let endDate = new Date("2024-02-01T14:59:45");
        let interval = setInterval(() => {
            let now = new Date();
            let difference = endDate - now;
            let days = Math.floor(difference / (1000 * 60 * 60 * 24));
            let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((difference % (1000 * 60)) / 1000);

            days = days < 10 ? "0" + days : days;
            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            setTimer({ days, hours, minutes, seconds });

            if (difference <= 0) {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="Countdown"style={{ backgroundColor: colors[imageIndex], 
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            backgroundBlendMode: 'multiply'
        }} >
            <div className="container" >
                <h1 className='logogartcod' ><img src={'images/gartcod-without-bg.webp'} style={{height: '100px',position:'relative',width: '100px', display:'inline' ,margin: '0 10px' }} alt="dynamic" />
                    for <span style={{ color: colors[imageIndex] }}> <img src={images[imageIndex]} alt="dynamic" /> & Cloud <br /> gaming </span>
                </h1>
                <p>Join us on the launch of gartcod by <img className='provokelogo' src={'images/provoke_logo.webp'} alt="dynamic" /></p>

                <div className="timer">
                    <div className="timer-data">
                       <h3>{timer.days} </h3> 
                       <p style={{ color: colors[imageIndex] }}> DAYS</p> </div>
                    <div className="timer-data">
                        <h3>{timer.hours} </h3>
                       <p style={{ color: colors[imageIndex] }}> HOURS</p> </div>
                    <div className="timer-data">
                        <h3>{timer.minutes}
</h3>                    <p style={{ color: colors[imageIndex] }}>    MINUTES</p> </div>
                    <div className="timer-data">
                        <h3>{timer.seconds}
</h3>                     <p style={{ color: colors[imageIndex] }}>   SECOND</p>
                    </div>
                </div>
                <button className="ticket-button"style={{ backgroundColor: colors[imageIndex] }} >Claim Ticket</button>
            </div>

        </div>
    );
};

export default Countdown;