import { connect } from 'react-redux';
import { decrementDispatch } from '../redux/dispatchers/counterDispatchers';
import { counterButtonStyle } from '../styles/buttonStyles';

function DecrementCounter(props) {
    return (
        <button style={counterButtonStyle()} onClick={() => props.dispatch(decrementDispatch())}>-</button>
    )
}

export default connect()(DecrementCounter);
