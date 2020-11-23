import { connect } from 'react-redux';

const ShowCount = (props) => {
    return (
        <div>
            <h1>{props.count}</h1>
            <h3>{props.loading ? 'Loading...' : ''}</h3>
        </div>
    )
}

function mapStateToProps (state) {
        return {
            count: state.countObj.count,
            loading: state.countObj.loading,
        }
}

export default connect(mapStateToProps)(ShowCount);
