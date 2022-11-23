import { useSelector } from 'react-redux';
import './App.css';
import { Counter } from './features/counter/Counter';
import Modal from './features/modal/Modal';
// import ReactGA from 'react-ga';

// function initialGA(){
//   const TRACKING_ID = "G-WXGD3560YJ"; // OUR_TRACKING_ID
//   ReactGA.initialize(TRACKING_ID);
//   ReactGA.pageview("home");
// }

function App() {
  // initialGA()
  const { isOpen } = useSelector((state) => state.modal);
  console.log(isOpen)

  return (
    <div className="App">
     <Counter/>
     <Modal/>
    </div>
  );
}

export default App;
