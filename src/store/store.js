import {compose,createStore,applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import { rootReducer } from './root-Reducer';
//root reducer
const middleWares=[logger];

const composeEnhancres=compose(applyMiddleware(...middleWares));

export const store =createStore(rootReducer,undefined,composeEnhancres);