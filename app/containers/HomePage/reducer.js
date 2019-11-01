import produce from 'immer';
import * as types from './constants';

export const initialState = {
  value: '',
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.GET_RESULT:
        let number = state.value;
        number = number.replace(/^0+/, '');
        let operator = ['+', '-', '*', '/'];

        //check : number 000 => 0
        if (number.length === 0 || operator.indexOf(number[0]) !== -1)
          number = ''.concat('0', number);

        number = eval(number);
        return { ...state, value: number };
      case types.SET_VALUE:
        state.value = action.value;
        return { ...state };
      case types.ADD_NUMBER:
        state.value += action.value;
        console.log(action.value);
        return { ...state };
      case types.CLEAR:
        state.value = '';
        return { ...state };
      case types.DEL:
        state.value = state.value.toString(10).slice(0, -1);
        return { ...state };
      default:
        return state;
    }
  });

export default homeReducer;
