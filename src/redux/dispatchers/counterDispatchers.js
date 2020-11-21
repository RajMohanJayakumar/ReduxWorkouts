import { counter as counterAction } from '../actions';

const incrementDispatch = () => {
    console.log(JSON.stringify(counterAction.INCREMENT))
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
