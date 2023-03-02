import React from 'react';
import './App.css';
import Operations from "./components/operations/Operations";
import KeyValueEntity from "./common/key-value-entity";
import {Grid} from "@mui/material";
import TextField from "@mui/material/TextField";
import useOperationStoreJson from "./components/operations/useOperationStoreJson.hook";

function App() {
    const operations = useOperationStoreJson();

    const arrFields: KeyValueEntity[] = [
        {key: 'Category', value: 'Category'},
        {key: 'PaymentMode', value: 'Payment Mode'},
        {key: 'Description', value: 'Description'},
    ];

    return (
        <React.Fragment>
            <div style={{margin: "5px"}}>
                <Grid container>
                    <Grid xs={9}>
                        <Operations arrFields={arrFields}/>
                    </Grid>
                    <Grid xs={3}>
                        <TextField
                            id="selection-basic"
                            // label="Selection"
                            variant="outlined"
                            multiline={true}
                            rows="30"
                            style={{width: "100%"}} value={JSON.stringify(operations, null,2)} />
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
}

export default App;
