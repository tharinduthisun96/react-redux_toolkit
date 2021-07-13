import logo from './logo.svg';
import './App.css';
import { Counter } from './features/counter/Counter';
import { useSelector } from 'react-redux';

function App() {
  const count = useSelector((state) => state.counter.value)
  return (
    <div className="App">
      <header className="App-header">
      <span>{count}</span>
        <Counter />
      </header>
    </div>
  );
}

export default App;
