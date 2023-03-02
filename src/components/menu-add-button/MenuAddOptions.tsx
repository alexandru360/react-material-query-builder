import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Remove, ViewStream} from "@mui/icons-material";
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import OperationType from "../../common/enum-operation-type";

export interface IMenuAddOptionsProps {
    handleLogicalOperationClick: (par: OperationType) => void;
    open: boolean;
    anchorEl: HTMLElement | null;
}

const actions = [
    {icon: <ViewStream/>, name: 'Add group'},
    {icon: <Remove/>, name: 'Add condition'},
];

export default function MenuAddOptions(props: IMenuAddOptionsProps) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(props.anchorEl);
    const [openMenu, setOpenMenu] = React.useState<boolean>(props.open);

    const handleClose = (parMenuClicked: OperationType) => {

        console.log('parMenuClicked', parMenuClicked);
        setAnchorEl(null);
        setOpenMenu(false);

        props.handleLogicalOperationClick(parMenuClicked);
    }

    return (
        <React.Fragment>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}>

                {/*<MenuItem onClick={() => handleClose(OperationType.AddGroup)}>*/}
                {/*    <ListItemIcon>*/}
                {/*        <ViewStream fontSize="small"/>*/}
                {/*    </ListItemIcon>*/}
                {/*    <ListItemText>Add group</ListItemText>*/}
                {/*</MenuItem>*/}
                <MenuItem onClick={() => handleClose(OperationType.AddCondition)}>
                    <ListItemIcon>
                        <Remove fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText>Add condition</ListItemText>
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}
