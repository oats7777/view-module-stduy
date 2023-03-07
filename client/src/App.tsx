import './App.css';
import { Payment } from './components/Payment';

function App() {
  return (
    <div className="App">
      <Payment amount={20.1} countryCode="JP" />
    </div>
  );
}

export default App;
