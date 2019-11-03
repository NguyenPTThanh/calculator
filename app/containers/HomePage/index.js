/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { connect } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import { makeSelectValue } from './selectors';
import reducer from './reducer';
import * as actions from './actions';
import Calculater from './../../components/Calculater';

const key = 'home';
export function HomePage({
   number, 
   onGetResult, 
   onAddNumber, 
   onClear, 
   onDel }) {
  useInjectReducer({ key, reducer });

  var addNumber = e => {
    if (Number.isInteger(number)) {
      // number = '';
      onClear();
    }
    //(number + e);
    onAddNumber(e);
    // console.log(number);
  };

  const getResult = () => {
    onGetResult();
  };

  const clear = () => {
    onClear();
  };

  const del = () => {
    // (number.toString(10).slice(0, -1));
    onDel();
  };
  return (
    <div>
      <FormattedMessage {...messages.header} />
      <Calculater
        number={number}
        addNumber={addNumber}
        getResult={getResult}
        del={del}
        clear={clear}
      />
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  number: makeSelectValue(),
});
export function mapDispatchToProps(dispatch) {
  return {
    onGetResult: () => dispatch(actions.getResult()),
    onClear: () => dispatch(actions.clear()),
    onDel: () => dispatch(actions.del()),
    onAddNumber: value => dispatch(actions.addNumber(value)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
