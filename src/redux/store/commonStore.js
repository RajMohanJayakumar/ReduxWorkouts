import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

const captureMiddleWare = () => {
    return (next) => {
        return (action) => {
            let newAction = action.payload ? action : {...action, payload: 5};
            let result = next(newAction);
            console.info(`The captured result is : ${JSON.stringify(result)}`);
            return result;
        }
    }
}

const commonStore = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default commonStore;

/**
 * Can switch between custom middleware(captureMiddleware) and thunk middleware by changing the paramenter in `applyMiddleWare`
 */
