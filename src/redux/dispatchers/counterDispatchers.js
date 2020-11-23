import { counter as counterAction } from '../actions';

const incrementDispatch = (payload) => {
    return {
        type: counterAction.INCREMENT,
        payload,
    }
}

const decrementDispatch = (payload) => {
    return {
        type: counterAction.DECREMENT,
        payload,
    }
}

export {
    incrementDispatch, 
    decrementDispatch,
}
