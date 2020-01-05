import React from 'react';
import Context from '../context/context';
import Test3 from './test3';

class Test1 extends React.Component {
    //static contextType = Context;
    contructor(props){
        debugger
    }

    shouldComponentUpdate(){
        return false;
    }

    render(){
        debugger
        return (
        <>
        <h1>Test1</h1>
        <Context.Consumer>
                {(consumer) => <Test3 testName={consumer.name}></Test3>}
        </Context.Consumer>
        </>
        );
    }
}

export default Test1;