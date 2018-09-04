import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

const Test = (props) => {
    return(
      <div>
         <h1>{props.strng}</h1>
         <h1>{(props.buul ? 'bool' : 'not-bool')}</h1>
         <h2>{props.strOrNum}</h2>
      <div>
        {
          props.arr.map((val) => {
            return(<li key={val}>{val}</li>)
          })
        }
      </div>
      <div>
        {
          props.arrOfObj.map((val) => {
            return(<li key={val.age}>{val.name} | {val.occupation}, {val.age} </li>)
          })
        }
      </div>
      <h1>{props.children}</h1>
    </div>
    )
}
//if we use <div></div> insteard of children we can use {props.elementx}

// This is where we are checking for type checks
Test.PropTypes = {
  strng: PropTypes.string,
  buul: PropTypes.bool,
  strOrNum: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  arr: PropTypes.arrayOf(PropTypes.number),
  arrOfObj: PropTypes.arrayOf(PropTypes.shape(
    {
      name: PropTypes.string,
      age: PropTypes.number,
      occupation: PropTypes.string
    }
  )),
  children: PropTypes.string
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Test strng={'Prop Types'}
              buul={true}
              strOrNum={10}
              arr={[11,22,33,44,55]}
              arrOfObj={[{name: 'Ahmad', age:23, occupation: 'AWS Developer'},
                         {name: 'Waheed', age:33, occupation: 'Software Engg'} ]}
                         >Children</Test>

      </div>
    );
  }
}

export default App;

//it checks properties which we use in a component to check their types
