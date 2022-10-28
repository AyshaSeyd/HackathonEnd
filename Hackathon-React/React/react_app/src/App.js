import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddNames from './Component/AddNames'
import NamesList from './Component/NamesList';
import Axios from './Component/Axios'
import Names from './Component/NameSchema';

function App() {
  return (
    <div>
      Names List
      {/* <Axios/> */}
     <Names/>
    </div>
  );
}

export default App;
