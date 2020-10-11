import React  from 'react';
import RoutingConfig from './conf.router';
import {Provider} from 'react-redux';
import store from './Store/store';





function App() {
  return(  
  <RoutingConfig/>
  );
}


function AppWithStore(){
  return <Provider store={store}>
    <App/>
  </Provider>
}

export default AppWithStore;
