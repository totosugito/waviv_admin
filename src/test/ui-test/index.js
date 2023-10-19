import {Grid, Typography} from "@mui/material";
import CardItem from "./component/card-item";
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import {useTheme} from "@mui/material/styles";
import RunningText from "./component/running-text";

const UiTest = () => {
    const theme = useTheme()
    return (
        <>
            <RunningText logoWidth={32} logoHeight={32}
                         data={[
                             {
                                 title: "Donat",
                                 url: "https://cdn.icon-icons.com/icons2/4045/PNG/512/donut_food_icon_256950.png",
                                 value: 1
                             },
                             {
                                 title: "Kentang",
                                 url: "https://cdn.icon-icons.com/icons2/4045/PNG/512/fries_chips_food_icon_256954.png",
                                 value: 1
                             },
                             {
                                 title: "Permen",
                                 url: "https://cdn.icon-icons.com/icons2/4045/PNG/512/lollipop_food_icon_256957.png",
                                 value: -1
                             },
                             {
                                 title: "Es Krim",
                                 url: "https://cdn.icon-icons.com/icons2/4045/PNG/512/popsicle_food_icon_256963.png",
                                 value: -1
                             }
                         ]}/>
            <Grid container spacing={2} sx={{p: 2}}>
                <Grid item>
                    <CardItem label={'INFO'} value={123}
                              logo={<AccountBalanceOutlinedIcon/>}
                              bgcolor={theme.palette.primary.main}
                    />
                </Grid>
                <Grid item>
                    <CardItem label={'INFO'} value={123}
                              logo={<AccountBalanceOutlinedIcon/>}
                              bgcolor={theme.palette.success.main}
                    />
                </Grid>
                <Grid item>
                    <CardItem label={'INFO'} value={123}
                              logo={<AccountBalanceOutlinedIcon/>}
                              bgcolor={theme.palette.warning.main}
                    />
                </Grid>
            </Grid>
        </>
    )
}
export default UiTest