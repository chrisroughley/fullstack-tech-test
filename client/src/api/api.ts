import axios from 'axios';

export const fetchTime = async () => {
    const time = await axios({
        method: 'get',
        url: 'http://127.0.0.1:8080/api/time',
        headers: {
            authorization: 'mysecrettoken',
        },
    });

    return time
};

export const fetchMetrics = async () => {
    const metrics = await axios({
        method: 'get',
        url: 'http://127.0.0.1:8080/api/metrics',
        headers: {
            authorization: 'mysecrettoken',
        },
    });

    return metrics
};

