import { counter as counterAction } from '../actions';

const initialState = {
    count: 0
}

export default function counterReducer(state = initialState, action) {
    switch(action.type) {
        case counterAction.INCREMENT: {
            return { ...state, count: state.count + (action.payload || 2) }
        }
        case counterAction.DECREMENT: {
            return { ...state, count: state.count - (action.payload || 1) }
        }
        default: {
            return state;
        }
    }
}
