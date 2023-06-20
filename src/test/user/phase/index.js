import React, {useEffect} from "react";
import UserBase from "../base";
import {Typography} from "@mui/material";
import {useParams} from "react-router-dom";

const UserPhase = () => {
    const params = useParams();
    useEffect(() => {
        document.title = "User Phase"
    }, []);

    return (
        <>
            <UserBase>
                <Typography variant={"h3"}>Phase - {params["phase"]}</Typography>
            </UserBase>
        </>
    );
}

export default UserPhase;