/* This store holds the state for theme */
import { createStore } from 'redux';
import rootReducer from './themeReducer';

const store = createStore(rootReducer);

export default store;