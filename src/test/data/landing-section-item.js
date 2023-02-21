import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import React from "react";

export const landingSectionItem = {
    items: [
        {
            icon: <EngineeringOutlinedIcon sx={{fontSize: 100}} color="primary"/>,
            sentence:
                'Solving world problems through various web applications using efficient programs and tools',
        },
        {
            icon: <AllInclusiveIcon sx={{fontSize: 100}} color="primary"/>,
            sentence:
                'Through team work, we collaborate and deliver quality projects of high standards',
        },
        {
            icon: <PaidOutlinedIcon sx={{fontSize: 100}} color="primary"/>,
            sentence: 'Flexible payment plan is applicable to all our services',
        },
    ]
}