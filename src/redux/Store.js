import { createStore } from 'redux';
import storeSynchronize from 'redux-localstore';
import Reducers from './Reducers';

const Store = createStore(Reducers);

export default Store;

storeSynchronize(Store);
