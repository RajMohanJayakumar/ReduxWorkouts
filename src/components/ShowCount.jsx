import { connect } from 'react-redux';

const ShowCount = (props) => {
    return (
        <h1>{props.count}</h1>
    )
}

function mapStateToProps (state) {
        return {
            count: state.countObj.count,
        }
}

export default connect(mapStateToProps)(ShowCount);
