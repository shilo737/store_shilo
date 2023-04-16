import { Provider } from 'react-redux';
import AppRouters from './routes/AppRouters';
import myStore from './redux/store';

function App() {
  

  return (
    <Provider store={myStore}>
      <AppRouters/>
    </Provider>
   
  )
}

export default App
