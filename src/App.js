import React from 'react';
import Routes from './container/routes'
import {Provider} from 'react-redux'
import store from './store/index'

function App() {
  return (
   <div>
     <Provider store={store} >
        <Routes />
     </Provider>
   </div>
  );
}

export default App;
