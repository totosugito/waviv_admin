
import {useEffect} from "react";
import React from 'react';
import {
    Grid, Typography,
} from "@mui/material";
import UserBase from "../base";
import CardStat from "./component/CardStat";
import EventBusyIcon from '@mui/icons-material/EventBusy';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import DateRangeIcon from '@mui/icons-material/DateRange';
import {httpGet} from "../../../services/api-service";
import {getRouterApi} from "../../../routes/router-api";
import {useState} from "react";
import ChartYear from "./component/ChartYear";

const UserDashboard = () => {
    const [data, setData] = useState({phase: [], year: []});

    useEffect(() => {
        document.title = "User Dashboard"
    }, []);

    useEffect(() => {
        get_data().then(r => {
        });
    }, []);

    const get_data = async () => {
        await httpGet(getRouterApi("project-stat", {}), {}).then((v) => {
            if (v.isError) {
                setData({phase: [], year: []});
            } else {
                setData(v.data);
            }
        });
    }

    return (
        <>
            <UserBase>
                <Typography variant={"h3"}>Dashboard</Typography>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <CardStat value={data["phase"][0] ? data["phase"][0]["count"]:0} label={"Closed"} image={<EventBusyIcon fontSize={'large'} color={'primary'}/>}
                                  href={'user-phase/closed'}/>
                    </Grid>
                    <Grid item xs={4}>
                        <CardStat value={data["phase"][1] ? data["phase"][1]["count"]:0} label={"Pre"} image={<PendingActionsIcon fontSize={'large'} color={'warning'}/>}
                                  href={'user-phase/pre'}/>
                    </Grid>
                    <Grid item xs={4}>
                        <CardStat value={data["phase"][2] ? data["phase"][2]["count"]:0} label={"Ongoing"} image={<DateRangeIcon fontSize={'large'} color={'success'}/>}
                                  href={'user-phase/ongoing'}/>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <ChartYear data={data.year}/>
                </Grid>
            </UserBase>
        </>
    );
}

export default UserDashboard;
