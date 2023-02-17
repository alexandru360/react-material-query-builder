import React from 'react';
import './App.css';
import Operations from "./components/operations/Operations";
import KeyValueEntity from "./common/key-value-entity";

function App() {
    const arrFields: KeyValueEntity[] = [
        {key: 'Category', value: 'Category'},
        {key: 'PaymentMode', value: 'Payment Mode'},
        {key: 'Description', value: 'Description'},
    ];

    return (
        <React.Fragment>
            <div style={{margin: "20px"}}>
                <Operations arrFields={arrFields}/>
            </div>
        </React.Fragment>
    );
}

export default App;
