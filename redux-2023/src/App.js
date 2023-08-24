import './App.css';
import store from './redux/store';
import CakeContainer from './redux/CakeContainer';
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer/>
      </div>
    </Provider>
  );
}

export default App;
