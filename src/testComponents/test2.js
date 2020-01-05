import React, {useContext} from 'react';
import Context from '../context/context';
import Test3 from './test3';

const Test2 = (props) => {
    debugger
    //const contextRef = useContext(Context);
    return (
    <>
    <h1>Test2</h1>
    <Context.Consumer>
                {(consumer) => <Test3 testName={consumer.name}></Test3>}
    </Context.Consumer>
    </>
    )
}

export default Test2;