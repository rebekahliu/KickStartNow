import {connect} from 'react-redux';
import {getCategory} from '../../actions/category_actions';
import CategoryShow from './category_show';

const mapStateToProps = (state, ownProps) => ({
  category: state.entities.category
});

const mapDispatchToProps = (dispatch) => ({
  getCategory: categoryId => dispatch(getCategory(categoryId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryShow);
