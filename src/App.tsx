import {Provider} from 'react-redux';
import Toast from 'react-native-toast-message';

import {store} from './rtk/store';
import {TodoList} from './features/TodoList/screens';

const App = () => {
  return (
    <Provider store={store}>
      <TodoList />
      <Toast />
    </Provider>
  );
};

export default App;
