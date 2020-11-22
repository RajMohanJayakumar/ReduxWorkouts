import { connect } from 'react-redux';
import { decrementDispatch } from '../redux/dispatchers/counterDispatchers';
import { counterButtonStyle } from '../styles/buttonStyles';

function DecrementCounter(props) {
    return (
        <button style={counterButtonStyle()} onClick={() => props.decrementCounter()}>-</button>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        decrementCounter: () => dispatch(decrementDispatch())
    }
}

export default connect(null, mapDispatchToProps)(DecrementCounter);
