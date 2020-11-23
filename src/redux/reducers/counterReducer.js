import { counter as counterAction } from '../actions';

const initialState = {
    count: 0,
    loading: false,
}

export default function counterReducer(state = initialState, action) {
    switch(action.type) {
        case counterAction.INCREMENT: {
            return { ...state, count: state.count + (action.payload || 2), loading: false }
        }
        case counterAction.DECREMENT: {
            return { ...state, count: state.count - (action.payload || 1) }
        }
        case counterAction.LOADING: {
            return { ...state, loading: action.payload }
        }
        default: {
            return state;
        }
    }
}
