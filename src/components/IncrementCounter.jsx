import React from 'react';
import { counterButtonStyle } from '../styles/buttonStyles';
import { incrementDispatch } from '../redux/actionsCreator/counterDispatchers';
import { connect } from 'react-redux';

class IncrementCounter extends React.Component {
    render() {
        return (
            <button style={counterButtonStyle()} onClick={() => this.props.dispatch(incrementDispatch())}>+</button>
        )
    }
}

export default connect()(IncrementCounter);
