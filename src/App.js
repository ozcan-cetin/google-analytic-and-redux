import { useSelector } from 'react-redux';
import './App.css';
import { Counter } from './features/counter/Counter';
import Modal from './features/modal/Modal';

function App() {
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
