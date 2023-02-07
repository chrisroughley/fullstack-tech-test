import { useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { googlecode } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { fetchMetrics } from '../api/api';
import '../styles/Metrics.css';

const Metrics = () => {
    const [metrics, setMetrics] = useState('');
    useEffect(() => {
        const getMetrics = async () => {
            const fetchedMetrics = await fetchMetrics();
            console.log(fetchedMetrics);
            setMetrics(fetchedMetrics);
        };
        getMetrics();
        const metricsIntervalId = setInterval(async () => {
            //initiate loading spinner
            await getMetrics();
            //clear loading spinner
        }, 30000);

        return () => {
            clearInterval(metricsIntervalId);
        };
    }, []);

    return (
        <div className="metrics-container">
            <h1>Metrics</h1>
            <div className="metrics">
                <SyntaxHighlighter
                    language="json"
                    customStyle={{
                        backgroundColor: '#0c274100',
                        margin: '0px',
                    }}
                    style={googlecode}
                    showLineNumbers
                >
                    {metrics}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

export default Metrics;
