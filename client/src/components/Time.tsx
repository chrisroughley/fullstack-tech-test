import { useState, useEffect } from 'react';
import { fetchTime } from '../api/api';
import '../styles/Time.css';
import formatTime from '../utils/formatTime';

const Time = () => {
    const [time, setTime] = useState(Date.now());
    const [timeDifference, setTimeDifference] = useState(0);

    useEffect(() => {
        const getTime = async () => {
            const fetchedTime = await fetchTime();
            setTime(fetchedTime.epoch);
        };
        getTime();
        
        const serverTimeIntervalId = setInterval(async () => {
            //initiate loading spinner
            await getTime();
            //clear loading spinner
        }, 30000);

        return () => {
            clearInterval(serverTimeIntervalId);
        };
    }, []);

    useEffect(() => {
        const timeDifferenceIntervalId = setInterval(() => {
            setTimeDifference(Date.now() - time);
        }, 1000);

        return () => {
            clearInterval(timeDifferenceIntervalId);
        };
    }, [time]);

    return (
        <div className="time-container">
            <h1>Time</h1>
            <span>Server time as of last fetch request: {time}</span>
            <span>Time difference to server: {formatTime(timeDifference)}</span>
        </div>
    );
};

export default Time;
