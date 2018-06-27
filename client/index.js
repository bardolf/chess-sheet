import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/app.jsx';
import { createStore} from 'redux'
import reducers from './reducers';
import { Provider } from 'react-redux'; 
import '../styles.css';

const store = createStore(reducers);

ReactDOM.render(  
    <Provider store={store}>
      <AppContainer />      
    </Provider>,
    document.getElementById('root')
  );