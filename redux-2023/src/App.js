import './App.css';
import store from './redux/store';
import CakeContainer from './redux/CakeContainer';
import IceCreamContainers from './redux/IceCreamContainers';
import { Provider } from 'react-redux'
import ItemContainer from './redux/ItemContainer';
import UserContainer from './redux/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer/>
        <IceCreamContainers />
        <ItemContainer cake/>
        <ItemContainer /> */}
        <UserContainer/>
      </div>
    </Provider>
  );
}

export default App;
