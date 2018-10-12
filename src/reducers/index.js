import {combineReducers, applyMiddleware, compose} from 'redux';
import app from './appReducer';
import thunk from 'redux-thunk';

const appReducer = combineReducers({
    app,
});
export default appReducer;

const enhancers = [];
if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
}
const composedEnhancers = compose(
    applyMiddleware(thunk),
    ...enhancers,
);
