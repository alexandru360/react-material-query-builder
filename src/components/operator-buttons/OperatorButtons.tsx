import React from 'react';
import {Button, ButtonGroup} from "@mui/material";
import {AddCircle} from "@mui/icons-material";

export interface OperatorButtonsProps {
    andClick: () => void;
    orClick: () => void;
    addClick: () => void;
}

export default function OperatorButtons(props: OperatorButtonsProps) {
    return (
        <React.Fragment>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button onClick={() => props.andClick()}>And</Button>
                <Button onClick={() => props.orClick()}>Or</Button>
                <Button onClick={() => props.addClick()}><AddCircle/></Button>
            </ButtonGroup>
        </React.Fragment>
    );
}
