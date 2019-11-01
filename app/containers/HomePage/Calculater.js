// import React from 'react';
// import { connect } from 'react-redux';
// // import './Calculater.css';
// import { useInjectReducer } from 'utils/injectReducer';
// import { createStructuredSelector } from 'reselect';
// import { makeSelectValue } from './selectors';
// import reducer from './reducer';
// import * as actions from './../HomePage/actions';
// import CalculaterS from '../../components/Calculater';
// const key = 'home';

//  function Calculater({
//    number, 
//    onSetValue }) 
//    {

//   useInjectReducer({ key, reducer });

//   var addNumber = e => {
//     if (Number.isInteger(number)) {
//       number = '';
//     }
//     onSetValue(number + e);
//   };

//   const getResult = () => {
//     number = number.replace(/^0+/, '');
//     let operator = ['+', '-', '*', '/'];

//     //Remove redundant 0 in math expressions
//     for (let i = 0; i < number.length; i++) {
//       if (operator.indexOf(number[i]) !== -1) {
//         let j = i;
//         while (j < number.length && number[j + 1] === '0') {
//           j++;
//         }
//         const checkNumber = /^[1-9]/;
//         const resultCheck = checkNumber.test(number[j + 1]);
//         if (number[j] === '0' && !resultCheck) {
//           number = number.slice(0, i + 2) + number.slice(j + 1, number.length);
//         } else {
//           number = number.slice(0, i + 1) + number.slice(j + 1, number.length);
//         }
//       }
//     }

//     if (number.length === 0 || operator.indexOf(number[0]) !== -1)
//       number = ''.concat('0', number);

//     onSetValue(eval(number));
//   };

//   const clear = () => {
//     onSetValue('');
//   };

//   const del = () => {
//     onSetValue(number.toString(10).slice(0, -1));
//   };
//   return (
//     // <div id="calculator">
//     //   <div className="calculator-logs" />
//     //   <input
//     //     type="string"
//     //     className="calculator-input"
//     //     value={number}
//     //     onChange={addNumber}
//     //   />
//     //   <div className="calculator-row">
//     //     <div className="calculator-col">
//     //       <button className="calculator-btn gray action" onClick={clear}>
//     //         C
//     //       </button>
//     //     </div>
//     //     <div className="calculator-col">
//     //       <button className="calculator-btn gray action" onClick={del}>
//     //         del
//     //       </button>
//     //     </div>
//     //     <div className="calculator-col">
//     //       <button
//     //         className="calculator-btn gray action"
//     //         onClick={() => addNumber('%')}
//     //       >
//     //         %
//     //       </button>
//     //     </div>
//     //     <div className="calculator-col">
//     //       <button
//     //         className="calculator-btn accent action"
//     //         onClick={() => addNumber('/')}
//     //       >
//     //         /
//     //       </button>
//     //     </div>
//     //   </div>
//     //   <div className="calculator-row">
//     //     <div className="calculator-col">
//     //       <button className="calculator-btn" onClick={() => addNumber('7')}>
//     //         7
//     //       </button>
//     //     </div>
//     //     <div className="calculator-col">
//     //       <button className="calculator-btn" onClick={() => addNumber('8')}>
//     //         8
//     //       </button>
//     //     </div>
//     //     <div className="calculator-col">
//     //       <button className="calculator-btn" onClick={() => addNumber('9')}>
//     //         9
//     //       </button>
//     //     </div>
//     //     <div className="calculator-col">
//     //       <button
//     //         className="calculator-btn accent action"
//     //         onClick={() => addNumber('*')}
//     //       >
//     //         *
//     //       </button>
//     //     </div>
//     //   </div>
//     //   <div className="calculator-row">
//     //     <div className="calculator-col">
//     //       <button className="calculator-btn" onClick={() => addNumber('4')}>
//     //         4
//     //       </button>
//     //     </div>
//     //     <div className="calculator-col">
//     //       <button className="calculator-btn" onClick={() => addNumber('5')}>
//     //         5
//     //       </button>
//     //     </div>
//     //     <div className="calculator-col">
//     //       <button className="calculator-btn" onClick={() => addNumber('6')}>
//     //         6
//     //       </button>
//     //     </div>
//     //     <div className="calculator-col">
//     //       <button
//     //         className="calculator-btn accent action"
//     //         onClick={() => addNumber('-')}
//     //       >
//     //         -
//     //       </button>
//     //     </div>
//     //   </div>
//     //   <div className="calculator-row">
//     //     <div className="calculator-col">
//     //       <button className="calculator-btn" onClick={() => addNumber('1')}>
//     //         1
//     //       </button>
//     //     </div>
//     //     <div className="calculator-col">
//     //       <button className="calculator-btn" onClick={() => addNumber('2')}>
//     //         2
//     //       </button>
//     //     </div>
//     //     <div className="calculator-col">
//     //       <button className="calculator-btn" onClick={() => addNumber('3')}>
//     //         3
//     //       </button>
//     //     </div>
//     //     <div className="calculator-col">
//     //       <button
//     //         className="calculator-btn accent action"
//     //         onClick={() => addNumber('+')}
//     //       >
//     //         +
//     //       </button>
//     //     </div>
//     //   </div>
//     //   <div className="calculator-row">
//     //     <div className="calculator-col wide">
//     //       <button className="calculator-btn" onClick={() => addNumber('0')}>
//     //         0
//     //       </button>
//     //     </div>
//     //     <div className="calculator-col">
//     //       <button
//     //         className="calculator-btn action"
//     //         onClick={() => addNumber('.')}
//     //       >
//     //         .
//     //       </button>
//     //     </div>
//     //     <div className="calculator-col">
//     //       <button className="calculator-btn accent action" onClick={getResult}>
//     //         =
//     //       </button>
//     //     </div>
//     //   </div>
//     // </div>
//     <Calculater
//     number = {number}
//     addNumber = {addNumber}
//     getResult = {getResult}
//     del = {del}
//     clear = {clear}
//   />
//   );
// }

// const mapStateToProps = createStructuredSelector({
//   number: makeSelectValue(),
// });
// export function mapDispatchToProps(dispatch) {
//   return {
//     onSetValue: evt => dispatch(actions.setValue(evt)),
//     onGetResult: evt => dispatch(actions.getResult(evt)),
   
//   };
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(Calculater);
