import { connect } from 'react-redux';
import Blog from '../blog/blog';
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) => {
    return {
        isLoading: state.ui.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export const BlogContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Blog));