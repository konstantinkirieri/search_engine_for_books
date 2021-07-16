import { connect } from 'react-redux';
import Header from '../component/Header';
import { bindActionCreators } from 'redux';
import { searchBooks } from '../actions/catalogActions';

const mapDispatchToProps = dispatch => bindActionCreators({ searchBooks }, dispatch);

export default connect(null, mapDispatchToProps)(Header);