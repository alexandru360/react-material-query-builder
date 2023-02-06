import React from 'react';
import {Button, ButtonGroup} from "@mui/material";
import {AddCircle} from "@mui/icons-material";
import MenuAddOptions from "../menu-add-button/MenuAddOptions";
import LogicalCondition from "../../common/enum-logical-condition";
import OperationType from "../../common/enum-operation-type";

export interface OperatorButtonsProps {
    handleOperationTypeClick: (par: OperationType) => void;
    handleLogicalOperationClick: (par: LogicalCondition) => void;
    addClick: () => void;
}

enum BtnType {
    And = 0,
    Or = 1,
    None = 2
}

export default function OperatorButtons(props: OperatorButtonsProps) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [openMenu, setOpenMenu] = React.useState<boolean>(true);
    const [btnType, setBtnType] = React.useState<BtnType>(BtnType.None);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setOpenMenu(true);
        setAnchorEl(event.currentTarget);
    };

    const handleLogicalBtnClick = (par: LogicalCondition) => {
        setBtnType(par === LogicalCondition.And ? BtnType.And : BtnType.Or)
        props.handleLogicalOperationClick(par);
    };

    const handleSelection = (par: OperationType) => {
        setOpenMenu(false);
        props.handleOperationTypeClick(par);
    };

    return (
        <React.Fragment>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button
                    variant={btnType === 0 ? "contained" : "text"}
                    onClick={() => handleLogicalBtnClick(LogicalCondition.And)}>And</Button>
                <Button
                    variant={btnType === 1 ? "contained" : "text"}
                    onClick={() => handleLogicalBtnClick(LogicalCondition.Or)}>Or</Button>
                <Button
                    variant="contained"
                    onClick={handleClick}><AddCircle/></Button>
            </ButtonGroup>

            {(anchorEl && openMenu) && <MenuAddOptions
                open={openMenu}
                anchorEl={anchorEl}
                handleLogicalOperationClick={handleSelection}/>}
        </React.Fragment>
    );
}
