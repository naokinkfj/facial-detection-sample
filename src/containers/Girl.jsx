import Girl from '../components/Girl';
import { connect } from 'react-redux';
import { incrementAge, decrementAge } from '../redux/modules/Girl';

export const mapStateToProps = (state) => ({
  name: state.name,
  age: state.age,
});

export const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch(incrementAge()),
  onDecrement: () => dispatch(decrementAge())
});

export default connect(mapStateToProps, mapDispatchToProps)(Girl);
