import './App.css';
import Nav from './components/general/Nav/Nav';
import Greeting from './components/general/Greeting/Greeting';
import timeDate from './utilities/timeDate';
const greetingMsg = timeDate.greeting();
function App() {
  return (
    <div className="App">
      <Nav/>
      <Greeting greeting= {greetingMsg} />
    </div>
  );
}

export default App;
