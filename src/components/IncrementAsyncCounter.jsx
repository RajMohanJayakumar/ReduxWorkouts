import React from 'react';
import { counterButtonStyle } from '../styles/buttonStyles';
import { incrementAsycDispatch } from '../redux/actionsCreator/counterDispatchers';
import { connect } from 'react-redux';

class IncrementAsyncCounter extends React.Component {
    render() {
        return (
            <button style={counterButtonStyle()} onClick={() => this.props.dispatch(incrementAsycDispatch())}>Async increment</button>
        )
    }
}

export default connect()(IncrementAsyncCounter);
