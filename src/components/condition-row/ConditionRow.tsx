import React from "react";
import {Card, CardContent, Grid, IconButton} from "@mui/material";
import KeyValueEntity from "../../common/key-value-entity";
import {Delete} from "@mui/icons-material";
import ComboBox, {ComboBoxProps} from "../combobox/ComboBox";
import TextField from "@mui/material/TextField";
import operatorOptions from "../../common/operator-options";

export interface IConditionRowProps {
    arrFields: Array<KeyValueEntity>;
    btnDeleteClick: (value: number) => void;
    idx: number;
}

export default function ConditionRow(props: IConditionRowProps) {

    const [showOpFlag, setShowOpFlag] = React.useState<boolean>(false);
    const [cbxFieldList, setCbxFieldList] = React.useState<ComboBoxProps>({} as ComboBoxProps);

    React.useEffect(() => {
        const operatorOptions = {
            options: props.arrFields,
            label: "Select Field",
            onChange: (value: string) => {
                console.log(value);
                setShowOpFlag(!showOpFlag);
            },
            width: "100%"
        } as ComboBoxProps;

        setCbxFieldList(operatorOptions);
    }, [props.arrFields]);

    return (
        <React.Fragment>
            <Card sx={{}}>
                <CardContent>
                    <Grid container rowSpacing={1} spacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                        <Grid item xs>
                            {cbxFieldList && <ComboBox {...cbxFieldList} />}
                        </Grid>
                        <Grid item xs>
                            {showOpFlag && <ComboBox {...operatorOptions} />}
                        </Grid>
                        <Grid item xs>
                            {showOpFlag && <TextField id="standard-basic" label="Enter Value" variant="standard"/>}
                        </Grid>
                        <Grid item xs>
                            <IconButton aria-label="delete" color="primary"
                                        onClick={() => props.btnDeleteClick(props.idx)}>
                                <Delete/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </React.Fragment>
    );
}
