import React from "react";
import {Card, CardContent, Grid, IconButton} from "@mui/material";
import KeyValueEntity from "../../common/key-value-entity";
import {Delete} from "@mui/icons-material";
import ComboBox, {ComboBoxProps} from "../combobox/ComboBox";
import TextField from "@mui/material/TextField";
import operatorOptions from "../../common/operator-options";

export interface ConditionRowProps {
    arrFields: Array<KeyValueEntity>;
    btnDeleteClick: (value: string) => void;
}

export default function ConditionRow(props: ConditionRowProps) {

    const [showOperation, setShowOperation] = React.useState<boolean>(false);
    const [cbxOperatorOpt, setCbxOperatorOpt] = React.useState<ComboBoxProps>({} as ComboBoxProps);

    React.useEffect(() => {
        const operatorOptions = {
            options: props.arrFields,
            label: "Select Field",
            onChange: handleOperatorChange,
            width: "100%"
        } as ComboBoxProps;

        setCbxOperatorOpt(operatorOptions);
    }, []);

    const handleOperatorChange = (value: string) => {
        console.log(value);
        setShowOperation(!showOperation);
    };

    return (
        <React.Fragment>
            <Card sx={{}}>
                <CardContent>
                    <Grid container rowSpacing={1} spacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                        <Grid item xs>
                            <ComboBox {...cbxOperatorOpt} />
                        </Grid>
                        <Grid item xs>
                            {showOperation && <ComboBox {...operatorOptions} />}
                        </Grid>
                        <Grid item xs>
                            {showOperation && <TextField id="standard-basic" label="Enter Value" variant="standard"/>}
                        </Grid>
                        <Grid item xs>
                            <IconButton aria-label="delete" color="primary" onClick={() => props.btnDeleteClick}>
                                <Delete/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </React.Fragment>
    );
}
