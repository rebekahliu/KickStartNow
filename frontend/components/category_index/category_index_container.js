import {connect} from 'react-redux';
import {getCategories} from '../../actions/category_actions';
import CategoryIndex from './category_index';

const mapStateToProps = state => ({
  categories: Object.values(state.entities.categories)
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategories())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryIndex);
