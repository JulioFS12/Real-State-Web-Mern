import './App.scss';
import { AppRouter } from './routes/AppRouter';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

function AppRealState() {
  return (
      <>
        <Provider store={store}>
          <AppRouter/>
        </Provider>
      </>
    );
}

export default AppRealState;
