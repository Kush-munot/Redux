import './App.css';
import store from './redux/store';
import CakeContainer from './redux/CakeContainer';
import IceCreamContainers from './redux/IceCreamContainers';
import { Provider } from 'react-redux'
import ItemContainer from './redux/ItemContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer/>
        <IceCreamContainers />
        <ItemContainer cake/>
        <ItemContainer />
      </div>
    </Provider>
  );
}

export default App;
