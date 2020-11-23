import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';

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

const commonStore = createStore(rootReducer, compose(applyMiddleware(captureMiddleWare), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default commonStore;
