import {connect} from 'react-redux';
import {getSearchResults} from '../../actions/search_actions';
import Search from './search';

const mapStateToProps = (state) => ({
  projects: state.entities.projects
});

const mapDispatchToProps = (dispatch) => ({
  getSearchResults: query => dispatch(getSearchResults(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
