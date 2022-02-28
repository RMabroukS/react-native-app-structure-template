
import React from 'react';
import {
  StatusBar,
  View,
} from 'react-native';
import {
  Provider
} from 'react-redux';
import NavigationApp from './navigation';
import {
  persistor,
  store
} from './redux/store/configureStore';
import {
  PersistGate
} from 'redux-persist/integration/react'
import Toast from 'react-native-toast-message';


const EntryPoint = () => {

  return (


    <View style={{ flex: 1 }}>
      <StatusBar barStyle={'light-content'} />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationApp />
          {/* <Toast ref={(ref) => Toast.setRef(ref)} /> */}
        </PersistGate>
      </Provider>
    </View>

  );
};


export default EntryPoint;
