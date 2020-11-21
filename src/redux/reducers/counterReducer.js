import { counter as counterAction } from '../actions';

const initialState = {
    count: 0
}

export default function counterReducer(state = initialState, action) {
    switch(action.type) {
        case counterAction.INCREMENT: {
            return { ...state, count: state.count + 1 }
        }
        case counterAction.DECREMENT: {
            return { ...state, count: state.count - 1 }
        }
        default: {
            return state;
        }
    }
}
