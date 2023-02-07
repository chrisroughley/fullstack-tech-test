import { useState, useEffect } from 'react';
import { fetchTime } from '../api/api';

const Time = () => {
    const [time, setTime] = useState(1);

    useEffect(() => {
        (async () => {
            console.log(await fetchTime());
        })();
        const intervalId = setInterval(async () => {
            const fetchedTime = await fetchTime();
            console.log(fetchedTime);
            // setTime(fetchedTime);
        }, 1000);

        return clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h1>Time</h1>
            <span>Server time as of last fetch request: {time}</span>
        </div>
    );
};

export default Time;
