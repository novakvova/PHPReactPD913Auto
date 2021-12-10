import * as AuthActionCreators from '../../components/auth/Login/actions';
import * as ProductActionCreators from '../../components/products/actions';

export default {
    ...AuthActionCreators,
    ...ProductActionCreators
}