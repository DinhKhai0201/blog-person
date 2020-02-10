import { connect } from 'react-redux';
import Home from '../home/home';
import renderPostAction from '../../actions/homeActions/actionCreators';
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) => {
    return {
        isLoading: state.ui.loading,
        post: state.home.post
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        renderPost: () => dispatch(renderPostAction())
    }
}

export const HomeContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));