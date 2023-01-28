import React from 'react';
import {SpeedDial, SpeedDialAction, SpeedDialIcon} from "@mui/material";
import {AddCircle, Remove, ViewStream} from "@mui/icons-material";

export interface AddButtonProps {
    onClick: () => void;
}

const actions = [
    {icon: <ViewStream/>, name: 'Add group'},
    {icon: <Remove/>, name: 'Add condition'},
];

export default function AddButton(props: AddButtonProps) {
    return (
        <React.Fragment>
            <SpeedDial
                ariaLabel="Add..."
                sx={{
                    position: 'absolute', bottom: 16, right: 16,
                }}
                icon={<AddCircle/>}
                style={{height: 38, width: 38}}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                    />
                ))}
            </SpeedDial>
        </React.Fragment>
    );
}
