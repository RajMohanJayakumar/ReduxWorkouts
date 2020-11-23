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

const incrementAsycDispatch = (payload) => {
    return (dispatch) => {
        dispatch({type: counterAction.LOADING, payload: true});
        setTimeout(() => {
            dispatch(incrementDispatch(payload));
        }, 1500);
    }
}

export {
    incrementDispatch, 
    decrementDispatch,
    incrementAsycDispatch,
}
