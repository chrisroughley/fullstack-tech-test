import axios from 'axios';

export const fetchTime = async () => {
    const res = await axios({
        method: 'get',
        url: 'http://127.0.0.1:8080/api/time',
        headers: {
            authorization: 'mysecrettoken',
        },
    });
    const timeData = await res.data;

    return timeData;
};

export const fetchMetrics = async () => {
    const res = await axios({
        method: 'get',
        url: 'http://127.0.0.1:8080/api/metrics',
        headers: {
            authorization: 'mysecrettoken',
        },
    });
    const metricsData = await res.data;

    return metricsData;
};
