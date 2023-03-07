import './App.css';
import { Payment } from './components/Payment';

function App() {
  return (
    <div className="App">
      <Payment amount={20.1}></Payment>
    </div>
  );
}

export default App;
