import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from "@mui/material/Stack";
import KeyValueEntity from "../../common/key-value-entity";

export interface ComboBoxProps {
    width: string | number;
    label: string;
    options: Array<KeyValueEntity>;
    onChange: (value: string) => void;
}

export default function ComboBox(props: ComboBoxProps) {

    const defaultProps = {
        options: props.options,
        getOptionLabel: (option: KeyValueEntity) => option.value,
    };

    return (
        <Stack spacing={1} sx={{ width: props.width }}>
            <Autocomplete
                {...defaultProps}
                id="disable-close-on-select"
                renderInput={ (params: any) => <TextField {...params} label={props.label} variant="standard" /> }
                onChange={(event: any, value: any) => props.onChange(value)}
            />
        </Stack>
    );
}
