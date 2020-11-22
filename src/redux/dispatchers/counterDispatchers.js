import { counter as counterAction } from '../actions';

const incrementDispatch = () => {
    return {
        type: counterAction.INCREMENT,
    }
}

const decrementDispatch = () => {
    return {
        type: counterAction.DECREMENT,
    }
}

export {
    incrementDispatch, 
    decrementDispatch,
}
