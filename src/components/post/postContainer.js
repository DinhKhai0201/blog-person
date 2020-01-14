import { connect } from 'react-redux';
import Post from '../post/post';
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export const PostContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));