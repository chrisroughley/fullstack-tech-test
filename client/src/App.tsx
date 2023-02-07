import './styles/App.css';
import Time from './components/Time';
import Metrics from './components/Metrics';

function App() {
    return (
        <div className="App">
            <Metrics />
            <Time />
        </div>
    );
}

export default App;
