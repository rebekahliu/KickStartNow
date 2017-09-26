import {connect} from 'react-redux';
import {getCategory, resetCategory} from '../../actions/category_actions';
import CategoryShow from './category_show';
import {getProjects} from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => ({
  category: state.entities.category,
  projects: state.entities.projects
});

const mapDispatchToProps = (dispatch) => ({
  getCategory: categoryId => dispatch(getCategory(categoryId)),
  getProjects: () => dispatch(getProjects()),
  resetCategory: () => dispatch(resetCategory())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryShow);
