import { connect } from 'react-redux';
import Description from '../component/Description';

// import { bindActionCreators } from 'redux';
// import { showMore } from '../actions/catalogActions';


const mapStateToProps = ({ catalogReducer }) => ({
    books: catalogReducer.books,
    // totalItems: catalogReducer.totalItems,
    // isLoading: catalogReducer.isLoading,
    // messageError: catalogReducer.messageError,
    // isAdding: catalogReducer.isAdding,
    // keyword: catalogReducer.keyword,
    // category: catalogReducer.category,
    // relevance: catalogReducer.relevance,
    // firstIdx: catalogReducer.firstIdx,
});

// const mapDispatchToProps = dispatch => bindActionCreators({ showMore }, dispatch);

export default connect(mapStateToProps)(Description);