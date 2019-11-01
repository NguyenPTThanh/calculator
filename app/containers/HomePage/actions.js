import * as types from './constants';
export function getResult() {
  return {
    type: types.GET_RESULT,
    
  };
}
export function setValue(value) {
  return {
    type: types.SET_VALUE,
    value,
  };
}
export function addNumber(value) {
  return {
    type: types.ADD_NUMBER,
    value ,
  };
}
export function clear() {
  return {
    type: types.CLEAR,
  };
}
export function del(){
  return {
    type : types.DEL , 
  }
}
