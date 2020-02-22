import { connect } from 'react-redux';
import Header from './Header';
import { withRouter } from 'react-router-dom'
import { infoUser }  from '../../actions/accountActions/actionCreators';
import { getCategoryAction } from '../../actions/homeActions/actionCreators';

const mapStateToProps = (state) => {
    return {
        isLoading: state.ui.loading,
        infoLogin: state.account.infoLogin,
        categories: state.home.category
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        infoUser: (token) => dispatch(infoUser(token)),
        getCategory: () => dispatch(getCategoryAction())
    }
}

export const HeaderContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));