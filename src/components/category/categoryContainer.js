import { connect } from 'react-redux';
import Category from '../category/category';
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

export const CategoryContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Category));