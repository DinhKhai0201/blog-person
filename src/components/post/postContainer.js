import { connect } from 'react-redux';
import Post from '../post/post';
import getPostIdAction from '../../actions/postActions/actionCreators';
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    	getPostId: (id) => dispatch(getPostIdAction(id))
    }
}

export const PostContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));