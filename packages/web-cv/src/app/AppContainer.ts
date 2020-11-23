import { RootState } from '../store/root-reducer';
import { connect } from 'react-redux';
import { App } from './App';

const mapStateToProps = (state: RootState) => ({
  cv: state.cv,
});

export const AppContainer = connect(mapStateToProps)(App);
