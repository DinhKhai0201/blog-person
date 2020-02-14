import { connect } from 'react-redux';
import Home from '../home/home';
import { renderPostAction, increaseViewPostAction, getCategoryAction } from '../../actions/homeActions/actionCreators';
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) => {
    return {
        isLoading: state.ui.loading,
        posts: state.home.posts,
        categories: state.home.category
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        renderPost: () => dispatch(renderPostAction()),
        increaseView: (id, view) => dispatch(increaseViewPostAction(id, view)),
        getCategory: () => dispatch(getCategoryAction())
    }
}

export const HomeContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));