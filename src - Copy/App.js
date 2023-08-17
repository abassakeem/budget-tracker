import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homepage from './components/homepage/homepage';
import Tracker from './components/tracker/tracker';


function App() {
  return (
    <div className="App">
      {/* <Homepage/> */}
      <Tracker/>
    </div>
  );
}

export default App;
