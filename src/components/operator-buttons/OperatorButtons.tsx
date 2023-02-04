import React from 'react';
import {Button, ButtonGroup} from "@mui/material";
import {AddCircle} from "@mui/icons-material";
import AddButtonMenu from "../add-button-menu/AddButtonMenu";

export interface OperatorButtonsProps {
    andClick: () => void;
    orClick: () => void;
    addClick: () => void;
}

export default function OperatorButtons(props: OperatorButtonsProps) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        debugger
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button onClick={props.andClick}>And</Button>
                <Button onClick={props.orClick}>Or</Button>
                <Button onClick={handleClick}><AddCircle/></Button>
            </ButtonGroup>

            {anchorEl && <AddButtonMenu open={Boolean(anchorEl)} anchorEl={anchorEl}/>}
        </React.Fragment>
    );
}
