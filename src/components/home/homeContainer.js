import { connect } from 'react-redux';
import Home from '../home/home';
import { renderPostAction, increaseViewPostAction } from '../../actions/homeActions/actionCreators';
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) => {
    return {
        isLoading: state.ui.loading,
        posts: state.home.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        renderPost: () => dispatch(renderPostAction()),
        increaseView: (id, view) => dispatch(increaseViewPostAction(id, view))
    }
}

export const HomeContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));