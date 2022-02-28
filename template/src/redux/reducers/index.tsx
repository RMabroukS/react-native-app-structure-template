
import {
    combineReducers
} from '@reduxjs/toolkit';
import {
    persistReducer
} from 'redux-persist';
import loadingReducer from './loadingReducer';
import userReducer from './userReducer';
import AsyncStorage from '@react-native-community/async-storage';

const rootPersistConfig = {
    key: 'root',
    storage: AsyncStorage,
    keyPrefix: 'redux-root',
    whitelist: []
};

const userPersistConfig = {
    key: 'profile',
    storage: AsyncStorage,
    keyPrefix: 'redux-user',
    whitelist: ['profile', "token"]
};

const rootReducers = combineReducers({
    loadingReducer,
    userReducer: persistReducer(userPersistConfig, userReducer),
})

export { rootPersistConfig, rootReducers }